# Night Notes — Data Update (Extended Release Schedule)

**What I changed**
- Replaced `artists.objects.json` (root + `/public`) with data from `Extended_Release_Schedule_until_2026-12-31.csv`.
- Rebuilt `artists.json` (root + `/public`) with unique artist names from the CSV.
- Updated code to read the *prebuilt* schedule (JSON) instead of generating dates:
  - `src/utils/releaseState.ts` now fetches `/artists.objects.json`.
  - `src/pages/Home.tsx` now loads rows via `getReleaseSchedule()`.
  - `src/pages/EPChecklist.tsx` now loads rows via `getReleaseSchedule()`.
- Left the original generator in `src/utils/schedule.ts` intact, in case you want to switch back.

**How to deploy**
1. Replace your project with this folder OR upload the zip to Netlify/GitHub.
2. Make sure `artists.objects.json` and `artists.json` are present in the deployed `/public` folder (already included).

**CSV → JSON mapping**
- `Datum` → `date` (YYYY-MM-DD)
- `Artiest` → `artist`
- `Wie?` → `who` (Nuno/Martijn)
- `Distributie` → `distribution` (Amuse/Distrokid)

— Updated on 2025-08-29
