// components/Leagues.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Season {
  year: number;
  start: string;
  end: string;
  current: boolean;
}

interface Country {
  name: string;
  code: string | null;
  flag: string | null;
}

interface League {
  id: number;
  name: string;
  type: string;
  logo: string;
}

interface LeagueData {
  league: League;
  country: Country;
  seasons: Season[];
}

const Leagues: React.FC = () => {
  const [leagues, setLeagues] = useState<LeagueData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLeagues() {
      try {
        const response = await fetch("/api/leagues");
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || "Failed to fetch leagues");
        }
        const data = await response.json();
        setLeagues(data);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setLoading(false);
      }
    }

    fetchLeagues();
  }, []);

  if (loading) return <p className="text-center py-4">Loading leagues...</p>;
  if (error) return <p className="text-red-500 text-center py-4">{error}</p>;

  return (
    <div className="p-4 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">Football Leagues</h1>
      {leagues.length === 0 ? (
        <p className="text-center text-gray-500">No leagues found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {leagues.map((item) => (
            <div
              key={item.league.id}
              className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex items-center mb-3">
                {item.league.logo && (
                  <Image
                    src={item.league.logo}
                    alt={`${item.league.name} logo`}
                    width={40}
                    height={40}
                    className="mr-3"
                  />
                )}
                <h2 className="text-lg font-semibold">{item.league.name}</h2>
              </div>
              <p className="text-gray-600">Type: {item.league.type}</p>
              <p className="text-gray-600">Country: {item.country.name}</p>
              <div className="mt-2">
                <p className="text-sm text-gray-500">Seasons:</p>
                <ul className="text-sm text-gray-600 list-disc list-inside">
                  {item.seasons.map((season, index) => (
                    <li key={`${season.year}-${season.start}-${index}`}>
                      {season.year} ({season.start} - {season.end})
                      {season.current && (
                        <span className="text-green-500"> (Current)</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Leagues;