export interface Match {
    fixture: {
      id: number;
      date: string;
    };
    teams: {
      home: { name: string };
      away: { name: string };
    };
  }
  