import { NextResponse } from "next/server";

export async function GET() {
  try {
    const API_URL =
      "https://grocery.reclinerbdking.com/catalog/categories?page=1&limit=100";

    const res = await fetch(API_URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // fresh data always
    });

    if (!res.ok) {
      return NextResponse.json(
        { message: "Upstream API failed", status: res.status },
        { status: res.status }
      );
    }

    const data = await res.json();

    return NextResponse.json(
      { data },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Category fetch failed", error },
      { status: 500 }
    );
  }
}
