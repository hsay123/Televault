import { NextRequest, NextResponse } from "next/server";
import { createHmac } from "crypto";

interface RazorpayEvent {
  id: string;
  entity: string;
  event: string;
  created_at: number;
  payload: {
    payment?: {
      entity: {
        id: string;
        order_id: string;
        amount: number;
        currency: string;
        status: string;
        method: string;
        created_at: number;
      };
    };
  };
}

const processedEvents = new Set<string>();

function verifyWebhookSignature(
  body: string,
  signature: string,
  secret: string
): boolean {
  const expectedSignature = createHmac("sha256", secret)
    .update(body)
    .digest("hex");
  return expectedSignature === signature;
}

export async function POST(request: NextRequest) {
  try {
    const webhookSecret = process.env.RAZORPAY_WEBHOOK_SECRET;

    if (!webhookSecret) {
      console.error("Missing RAZORPAY_WEBHOOK_SECRET in environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const rawBody = await request.text();
    const signature = request.headers.get("x-razorpay-signature");

    if (!signature) {
      return NextResponse.json(
        { error: "Missing webhook signature" },
        { status: 400 }
      );
    }

    const isValid = verifyWebhookSignature(rawBody, signature, webhookSecret);

    if (!isValid) {
      console.warn("Webhook signature verification failed");
      return NextResponse.json(
        { error: "Invalid signature" },
        { status: 400 }
      );
    }

    const event: RazorpayEvent = JSON.parse(rawBody);

    if (processedEvents.has(event.id)) {
      return NextResponse.json({ received: true, duplicate: true });
    }

    processedEvents.add(event.id);

    if (processedEvents.size > 10000) {
      const firstEvents = Array.from(processedEvents).slice(0, 5000);
      firstEvents.forEach((id) => processedEvents.delete(id));
    }

    console.log(`[Webhook] Received event: ${event.event} (${event.id})`);

    switch (event.event) {
      case "payment.captured": {
        const payment = event.payload.payment?.entity;
        if (payment) {
          console.log(
            `[Webhook] Payment captured: ${payment.id} for order ${payment.order_id} — ₹${payment.amount / 100}`
          );
          // TODO: Mark order as paid in database
          // TODO: Grant license
          // TODO: Send confirmation email
        }
        break;
      }

      case "payment.failed": {
        const payment = event.payload.payment?.entity;
        if (payment) {
          console.log(
            `[Webhook] Payment failed: ${payment.id} for order ${payment.order_id}`
          );
          // TODO: Mark order as failed in database
          // TODO: Send failure notification
        }
        break;
      }

      default: {
        console.log(`[Webhook] Unhandled event: ${event.event}`);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook processing error:", error);
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    );
  }
}
