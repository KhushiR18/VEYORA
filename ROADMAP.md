# Veyora roadmap: what more can be added

Effort: **S** = an evening, **M** = 2 to 3 days, **L** = a week or more.
Wow = how much it helps in a demo or viva. Items marked (backend) need your Node or Java teammates.

## 1. Guest-first ideas (your unique angle)
| # | Idea | What the guest gets | Effort | Wow |
|---|---|---|---|---|
| 1 | **Preference card for the hotel** | After booking, a one-page "Ready for you" card (bed, floor, food, access, celebration, arrival time) the guest can print or share. The host page shows it. | S-M | High |
| 2 | **Tell the hotel** | Pre-arrival form: arrival time, train or flight number, a surprise, a message. | S | Medium |
| 3 | **Type what you want** | Search box: "quiet beach stay under 8000 for 2, vegetarian". Fills SmartMatch automatically (rules first, AI later). | M | High |
| 4 | **Voice search** | Speak in English, Hindi or Kannada (browser speech recognition). | S-M | High |
| 5 | **Accessibility-first mode** | Step-free, lift, grab bars, quiet and low-light rooms as filters and badges. | M | High |
| 6 | **Trip itinerary builder** | Add stops from the city tour into a day-by-day plan linked to the booking, printable. | M | High |
| 7 | **Group trips** | Invite link, vote on hotels, split the bill per person. | L | High |
| 8 | **Solo and women travellers** | Safety info per stay: 24-hour reception, well-lit area, nearest hospital and police numbers on the trip page. | S-M | Medium |

## 2. Booking and trust
| # | Idea | Effort | Wow |
|---|---|---|---|
| 9 | **Change dates and add extras after booking**, request late check-out | M | Medium |
| 10 | **GST tax invoice** (print or PDF) with hotel and guest details | S | Medium |
| 11 | **Flexible-date price calendar** (cheapest nights highlighted) and price alerts for saved stays | M | High |
| 12 | **Verified reviews** (only after a completed stay) with preference tags like "good for light sleepers", owner replies (backend) | M-L | High |
| 13 | **Per-hotel cancellation policy** set by the host (the demo uses one policy for all) | M | Medium |
| 14 | **Veyora points** for completing your profile and staying | M | Low |

## 3. Experience and content
| # | Idea | Effort | Wow |
|---|---|---|---|
| 15 | **City guide and guided tour mode** (next week, backend): step through the stops with a map | M | High |
| 16 | **Local experiences at checkout**: cooking class, heritage walk, houseboat ride | M | High |
| 17 | **Festival packages with real dates** from the backend | S | Medium |
| 18 | **Sustainability badges** (solar, water saving, local sourcing) | S | Medium |

## 4. Host side
| # | Idea | Effort | Wow |
|---|---|---|---|
| 19 | **Host dashboard**: bookings list, occupancy calendar, edit rates and availability, see preference cards (backend) | L | High |
| 20 | **Pricing suggestions** for festivals and weekends | M | Medium |

## 5. Platform and quality (good for marks)
| # | Idea | Effort |
|---|---|---|
| 21 | **Install as an app (PWA)**, offline My trips, QR check-in | M |
| 22 | **Real sign-in and accounts** (backend): hashed passwords, never store card data | L |
| 23 | **Analytics page** for the viva: bookings by city, revenue, cancellation rate | M |
| 24 | **Accessibility and speed pass**: keyboard use, screen-reader labels, a Lighthouse score, tests for the main flows | M |
| 25 | **Security basics**: server-side validation, rate limiting, HTTPS | M |

Note on AI features (3, 6, an AI concierge): the model key must live on the backend, never in the page.

## Suggested order
- **This week:** 10 invoice, 1 and 2 preference card and tell-the-hotel, 3 type-what-you-want search, 9 change dates.
- **Next week (guides arrive):** 6 itinerary builder, 16 experiences, 4 voice search.
- **Last week (submission):** 23 analytics page, 24 accessibility and speed, 21 app install, screenshots and report.
