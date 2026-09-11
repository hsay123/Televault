import { NextRequest, NextResponse } from "next/server";

interface RazorpayOrderResponse {
  id: string;
  amount: number;
  currency: string;
  status: string;
}

export async function POST(request: NextRequest) {
  try {
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      console.error("Missing Razorpay credentials in environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const body = await request.json().catch(() => null);

    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const receipt = typeof body.receipt === "string" ? body.receipt : undefined;

    const auth = Buffer.from(`${keyId}:${keySecret}`).toString("base64");

    const response = await fetch(
      "https://api.razorpay.com/v1/orders",
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: 24900,
          currency: "INR",
          receipt: receipt || `tv_${Date.now()}`,
          notes: {
            product: "televault_license",
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Razorpay order creation failed:", response.status, errorData);
      return NextResponse.json(
        { error: "Failed to create order" },
        { status: 502 }
      );
    }

    const order: RazorpayOrderResponse = await response.json();

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error) {
    console.error("Error creating Razorpay order:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
