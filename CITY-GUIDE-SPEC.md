# City guide and tour: spec for the backend (next week)

The frontend is ready. In the hotel details popup there is a "City guide & tour" button that calls `api.js`.
Set `API.BASE_URL` and implement these two endpoints. If they return nothing, the popup says "coming soon".

## Cities (slugs)
goa, bengaluru, mumbai, delhi, jaipur, udaipur, kochi, chennai, hyderabad, agra, kolkata, shimla, manali, varanasi.
Use the same shape for every city, so adding a city is only adding data.

## GET /api/cities/{slug}/guide
```json
{
  "overview": "Two or three sentences about the city.",
  "bestTime": "October to March, cool and dry.",
  "gettingAround": "Metro, auto-rickshaws, app cabs. Book cabs from the hotel at night.",
  "mustSee": [{ "name": "Amber Fort", "note": "Go at sunrise to avoid crowds." }],
  "food": [{ "name": "Dal baati churma", "note": "Rajasthani classic.", "tags": ["Vegetarian"] }],
  "tips": ["Carry water.", "Dress modestly at temples."]
}
```
- `tags` on food uses the same words as the guest's food preference: Vegetarian, Vegan, Jain, Halal. The page marks dishes that match the guest.

## GET /api/cities/{slug}/tours
```json
[
  {
    "id": "old-city-walk",
    "title": "Old city walk",
    "duration": "3 hours",
    "stops": [{ "time": "9:00", "name": "Hawa Mahal", "note": "Photo stop." }]
  }
]
```
Offer a half-day, a one-day and a two-day tour per city if possible.

## Ideas for later
- Add `accessible: true/false` per stop so tours can respect the guest's accessibility preference.
- Add `lat` and `lng` per stop to show the tour on the map.

## Checks
- Unknown slug returns 404 (the page shows "coming soon").
- Every city returns the same keys.
- Text is plain (no HTML). The page escapes it.
