import { GoogleGenAI, Type } from "@google/genai";
import type { Itinerary } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
  type: Type.OBJECT,
  properties: {
    title: { type: Type.STRING },
    destination: { type: Type.STRING },
    duration: { type: Type.INTEGER },
    days: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          day: { type: Type.INTEGER },
          title: { type: Type.STRING },
          summary: { type: Type.STRING },
          activities: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                description: { type: Type.STRING },
                location: { type: Type.STRING },
                time: { type: Type.STRING },
              },
              required: ['name', 'description', 'location', 'time']
            },
          },
        },
        required: ['day', 'title', 'summary', 'activities']
      },
    },
  },
  required: ['title', 'destination', 'duration', 'days']
};

export const generateItinerary = async (destination: string, duration: number, interests: string): Promise<Itinerary> => {
  const prompt = `Create a detailed travel itinerary for a ${duration}-day trip to ${destination}. The traveler is interested in ${interests}. For each day, provide a creative title, a brief summary for the day, and a list of 2-4 activities. For each activity, include a name, a detailed description, a specific location (e.g., 'Eiffel Tower, Champ de Mars, Paris'), and a suggested time (e.g., '10:00 AM').`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      },
    });

    const jsonText = response.text.trim();
    const itineraryData: Itinerary = JSON.parse(jsonText);
    return itineraryData;
  } catch (error) {
    console.error("Error generating itinerary:", error);
    throw new Error("Failed to communicate with the AI model.");
  }
};
