export interface Activity {
  name: string;
  description: string;
  location: string;
  time: string;
}

export interface DayPlan {
  day: number;
  title: string;
  summary: string;
  activities: Activity[];
}

export interface Itinerary {
  title: string;
  destination: string;
  duration: number;
  days: DayPlan[];
}
