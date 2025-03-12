import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.API_Football_KEY;

  if (!apiKey) {
    console.error("API Key is missing!");
    return NextResponse.json({ error: "API Key is missing" }, { status: 500 });
  }

  try {
    const response = await fetch(
      "https://api-football-v1.p.rapidapi.com/v3/fixtures?league=39&season=2023",
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "api-football-v1.p.rapidapi.com",
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    console.log("API response status:", response.status);
    console.log("API response headers:", Object.fromEntries(response.headers));

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return NextResponse.json(data.response, { status: 200 });
  } catch (error) {
    console.error("Error fetching matches:", error);
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }

}
