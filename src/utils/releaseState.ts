import type { ReleaseRow } from "./schedule";
// Simplified release state loader - always use public/artists.json
export async function getReleaseSchedule() {
  try {
    const response = await fetch("/artists.objects.json");
    if (!response.ok) throw new Error("Failed to fetch artists.json");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading release schedule:", error);
    return [];
  }
}
