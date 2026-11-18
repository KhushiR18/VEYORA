# Veyora: the stay that gets you

A hotel reservation web app (college project) built around the guest: preferences first, hotels second.
Frontend: plain HTML, CSS and JavaScript. No build step.

## Run it
- Easiest: double-click `VEYORA_browser_fix.html` (everything in one file).
- Or put `index.html`, `style.css`, `api.js`, `script.js` (and the `images` folder) together and open `index.html`.
- Internet is needed for place photos (Wikimedia Commons), the map (OpenStreetMap) and fonts.

## What it does
- Search by city, dates and guests (adults, children and their ages, rooms)
- Slideshow front page with 14 Indian places (one for every city), with previous/next arrows and wording that changes per slide
- SmartMatch: budget, trip mood, atmosphere, must-haves, room type, with a % match and the reasons
- 1-minute style quiz, quick starts (Family weekend, Work trip, Honeymoon, Solo) and festival picks
- Filters (rating, price, amenities), sorting, compare up to 3 stays, saved stays, map of cities
- Sample availability: some stays show "Sold out for your dates"
- Guest preferences page (bed, floor, food, accessibility, extras) that pre-fills every booking
- Booking: customise the stay, GST breakdown, demo payment (UPI, card, pay at hotel), printable confirmation, My trips
- Host page ("List your hotel" in the footer): add or remove a listing that appears in search
- Hotel details: guest scores and a "City guide & tour" button (content comes from the backend next week, see `CITY-GUIDE-SPEC.md`)
- Map with a pin per hotel (approximate locations), share a trip on WhatsApp, English / Hindi / Kannada
- Photo manager (footer): put the real photo of each hotel in, saved on the device
- Cancel a stay with a clear refund (free, late fee or no refund), reason and status; stay information and a Help & policies page
- Light and dark mode

Everything is demo data: rates, ratings, guest scores and availability are samples. No real payment is taken or stored.

## Files
| File | Purpose |
|---|---|
| `index.html`, `style.css`, `script.js` | The pages, the look and the behaviour |
| `api.js` | The only place that talks to data. Saves in the browser now; set `API.BASE_URL` to use a backend |
| `hotels.json` | The shape of the hotel data, for the backend team |
| `fetch_photos.py` | Optional: downloads photos into `images/` (`<hotel id>.jpg` wins over everything else) |
| `CITY-GUIDE-SPEC.md` | What the backend must return for city guides and tours |
| `VIVA-QA.md` | Likely viva questions with short answers |
| `architecture.svg` | One-page diagram of how the parts connect |
| `TESTING-AND-DEMO.md` | Test checklist and a 3-minute demo script |

## Connecting the backend
Set `BASE_URL` in `api.js` (for example `http://localhost:8080/api`). The page then calls:

| Call | Endpoint |
|---|---|
| `API.getHotels()` | `GET /hotels` (shape: `hotels.json`) |
| `API.saveHotel(h)` | `POST /hotels` |
| `API.listBookings()` | `GET /bookings` |
| `API.createBooking(b)` | `POST /bookings` |
| `API.cancelBooking(ref, details)` | `POST /bookings/{ref}/cancel` (body: status, refund, cancelFee, cancelReason, cancelledOn; the booking stays on record as Cancelled) |
| `API.getCityGuide(slug)` | `GET /cities/{slug}/guide` (next week) |
| `API.getCityTours(slug)` | `GET /cities/{slug}/tours` (next week) |

A booking has: `ref, hotelName, area, checkin, checkout, guests, status, name, phone, room, bed, floor, food, access, note, extras[], total, gst, payment`.
`getHotels` is not used by the page yet: today it uses the built-in list, which has the same shape as `hotels.json`.

## Screenshots to take for the report
Front page (two different slides), search results with match scores, compare table, hotel details with guest scores,
booking with the GST breakdown, confirmation, My trips, preferences page, quiz, map, dark mode, a phone-width view.

## Credits
Place photos from Wikimedia Commons (see `images/CREDITS.txt` if you used `fetch_photos.py`). Map: OpenStreetMap contributors, Leaflet.
