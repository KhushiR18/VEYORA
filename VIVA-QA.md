# Viva questions and short answers

1. **What is Veyora?** A hotel reservation app built around the guest: preferences and customisation first, hotel list second.
2. **How is it different from booking.com?** SmartMatch ranks stays with reasons, a quiz and quick starts set it up, guests save preferences once, and every booking can be customised (bed, floor, food, extras, accessibility).
3. **Why plain HTML, CSS and JavaScript?** No build tools, runs by opening a file, easy for a team to read. All data calls go through one file, `api.js`, so a framework or backend can be added without rewriting pages.
4. **How does SmartMatch work?** Each stay gets points for budget, trip purpose, mood, amenity and room type, plus its rating. The score is shown as a percentage with the reasons.
5. **Where is data stored?** In the browser (localStorage) for now: trips, saved stays, preferences, host listings. The backend replaces this by setting `API.BASE_URL`.
6. **How will the backend connect?** Through the calls in `api.js` (hotels, bookings, city guides and tours). `hotels.json` shows the data shape.
7. **Is the payment real?** No. It is a demo with format checks only. Nothing is charged or stored.
8. **Where do prices and GST come from?** Rates are sample data. GST follows the current hotel slabs: 0% up to Rs 1,000 a night, 5% up to Rs 7,500, 18% above, extras at 18%.
9. **Are ratings and availability real?** No: ratings, guest scores and sold-out dates are sample data made for the demo.
10. **Where do photos come from?** Wikimedia Commons (looked up live), with your own files in `images/` taking priority.
11. **What about languages?** English, Hindi and Kannada for the main screens. Text is matched by its English wording, so adding a screen means adding one row.
12. **What would you build next?** Real availability, city guides and tours from the backend, exact hotel locations from a database, and user accounts with real sign-in.
