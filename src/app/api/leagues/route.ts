import { NextResponse } from "next/server";

const API_KEY = process.env.RAPIDAPI_KEY; // Ensure this is set in .env.local
const BASE_URL = "https://v3.football.api-sports.io";

export async function GET() {
  try {
    if (!API_KEY) {
      throw new Error("Missing API key. Set RAPIDAPI_KEY in .env.local");
    }

    const response = await fetch(`${BASE_URL}/leagues`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "v3.football.api-sports.io",
        "x-rapidapi-key": API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data.response || data);
  } catch (error) {
    console.error("Error fetching leagues:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
