# Veyora: test checklist and demo script

## Quick test (5 minutes, run before every demo)
1. Open the page. Header shows the pin logo; tab shows the favicon.
2. Search "Goa": cards show; sort by price and by rating works.
3. Filters: set Min rating 4.5+, tick Pool, move Max price. Cards update; Reset restores them.
4. Quick starts: tap "Honeymoon". SmartMatch runs, cards show "% match" with reasons.
5. Compare: tick 3 hotels. The bar appears; a 4th tick is refused. Open Compare and check the table.
6. Details: scores show. Heart a hotel, refresh the page, the heart is still there.
7. Preferences (nav): change bed and tick Vegetarian, Save. Open a booking: they are pre-filled.
8. Booking: Continue to payment. Try a wrong UPI ID (error), then name@bank (works).
9. Confirmation: step 3 shows. Print confirmation opens the print view. View my trips lists it.
10. Cancel the stay in My trips. Sign in, sign out: only one popup appears.
11. Resize to phone width: menu button, cards and modals still fit.

## Demo script (about 3 minutes)
- "Veyora is a booking app built around the guest, not the hotel list."
- Set preferences once (Preferences). "Every booking starts from these."
- Tap a Quick start. "SmartMatch ranks stays and tells you why."
- Compare two hotels. Open one: "guest scores are sample data for the demo."
- Book it: choose extras, pay with a demo UPI ID, show the confirmation and My trips.
- Close with: "All data calls go through api.js, so the Java backend plugs in by setting one URL."

## Honest notes for questions
- Rates, ratings, scores and availability are sample data. No real payment is taken or stored.
- Data is saved in the browser (localStorage) until the backend is connected.

## New checks (quick wins)
12. Open a booking: the price shows Room, Extras, GST and Total. A stay under Rs 7,500 a night shows 5%, above it 18%. Tick an extra and the total moves.
13. "Celebrate it there" chips (under the destination chips): tap "Diwali" and Jaipur results appear with match scores.
14. Moon button in the header: dark mode on and off, and it is still on after a refresh. Check the hero, footer and a hotel photo look normal.
15. Heart two hotels, then open "Saved" in the header: both are listed. Use View and Remove.

## New checks (week 2)
16. Change the dates: some cards show "Sold out for your dates", and Choose is blocked for them. Set check-out before check-in: it moves to the next day.
17. SmartMatch section: "Take the 1-minute quiz", answer a few questions, Show my matches. Results and the controls update.
18. Results: the Map button opens a map with a pin per city. "See stays" jumps to that city. (Needs internet.)
19. Footer: "List your hotel", add one, then search that city: it appears. Remove it from the same page.
20. Phone width: header, filters, compare bar and popups all fit without sideways scrolling.

## New checks (week 3)
21. Open any hotel: "City guide & tour: <city>" shows "coming soon" for now. Once the backend returns data it shows the guide and tours.
22. Map: one pin per hotel; tap a pin and "View details" opens that hotel.
23. Confirm a booking, tap "Share trip": WhatsApp opens (or the phone share sheet). The same Share button is in My trips.
24. Language box in the header: switch to Hindi and Kannada. Nav, search, filters, quiz and booking labels change; switch back to English. (The front-page slides stay in English.)
25. Phone width again: the header with the language box still fits.

26. Footer, "Manage photos": upload a real photo for a hotel (or paste an image address), Use. The card, details and wishlist show it, and it is still there after a refresh. Reset puts the automatic photo back.

27. My trips: open "Stay information and cancellation policy" on a booking. Press Cancel stay: the refund, fee and policy show. A stay more than 48 hours away says Free cancellation. Confirm: the trip stays in the list as Cancelled with its refund.
28. Footer "Help & policies" opens how booking works, the cancellation policy and check-in basics. The confirmation page has the same stay information.
