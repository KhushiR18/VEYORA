'use strict';
// VEYORA student demo: real hotel names, illustrative prices, no live inventory or reservations.

const photo = {
    coast: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=85',
    hotel: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=85',
    room: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=85',
    garden: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=85',
    mountain: 'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=1000&q=85'
};

const hotels = [
    {
        id: 'taj-fort',
        name: 'Taj Fort Aguada Resort & Spa, Goa',
        area: 'Sinquerim, Candolim, Goa',
        region: 'Goa',
        price: 18500,
        rating: 4.8,
        badge: 'ICONIC ESCAPE',
        image: photo.coast,
        description: 'A classic seaside retreat with lush gardens, ocean views and a relaxed luxury feel.',
        features: ['Sea views', 'Swimming pool', 'Spa', 'Restaurant'],
        amenities: ['pool', 'beach', 'spa', 'breakfast'],
        mood: ['Luxury', 'Quiet', 'Romantic'],
        purpose: ['Leisure', 'Romantic', 'Family'],
        roomTypes: ['Deluxe', 'Suite', 'Villa'],
        areas: ['candolim', 'sinquerim', 'baga', 'goa']
    },
    {
        id: 'marriott-goa',
        name: 'Goa Marriott Resort & Spa',
        area: 'Miramar, Panaji, Goa',
        region: 'Goa',
        price: 16200,
        rating: 4.7,
        badge: 'WATERFRONT FAVOURITE',
        image: photo.hotel,
        description: 'A waterfront resort close to the city, with a pool, spa and easy access to Panaji.',
        features: ['Waterfront', 'Swimming pool', 'Spa', 'Breakfast'],
        amenities: ['pool', 'spa', 'breakfast'],
        mood: ['Luxury', 'Lively'],
        purpose: ['Leisure', 'Business', 'Family', 'Romantic'],
        roomTypes: ['Deluxe', 'Suite'],
        areas: ['panaji', 'miramar', 'goa']
    },
    {
        id: 'alila-diwa',
        name: 'Alila Diwa Goa',
        area: 'Majorda, South Goa',
        region: 'Goa',
        price: 14500,
        rating: 4.7,
        badge: 'SLOW-DOWN SPOT',
        image: photo.garden,
        description: 'A tranquil resort framed by tropical greenery, made for slower days and restorative breaks.',
        features: ['Infinity pool', 'Spa', 'Garden views', 'Dining'],
        amenities: ['pool', 'spa', 'breakfast'],
        mood: ['Quiet', 'Luxury', 'Romantic'],
        purpose: ['Leisure', 'Romantic', 'Family'],
        roomTypes: ['Deluxe', 'Suite'],
        areas: ['majorda', 'south goa', 'benaulim', 'varca', 'goa']
    },
    {
        id: 'hyatt-candolim',
        name: 'Hyatt Place Goa Candolim',
        area: 'Candolim, North Goa',
        region: 'Goa',
        price: 9200,
        rating: 4.4,
        badge: 'NORTH GOA BASE',
        image: photo.room,
        description: 'A comfortable base for exploring North Goa, with contemporary rooms and easy-going amenities.',
        features: ['Swimming pool', 'Breakfast', 'Fitness centre', 'Wi-Fi'],
        amenities: ['pool', 'breakfast'],
        mood: ['Lively'],
        purpose: ['Leisure', 'Business', 'Family'],
        roomTypes: ['Standard', 'Deluxe'],
        areas: ['candolim', 'calangute', 'baga', 'goa']
    },
    {
        id: 'st-regis-goa',
        name: 'The St. Regis Goa Resort',
        area: 'Mobor, South Goa',
        region: 'Goa',
        price: 22500,
        rating: 4.8,
        badge: 'SPECIAL OCCASIONS',
        image: photo.coast,
        description: 'A polished luxury escape in South Goa with expansive grounds and a serene resort atmosphere.',
        features: ['Pool', 'Spa', 'Beach nearby', 'Fine dining'],
        amenities: ['pool', 'beach', 'spa', 'breakfast'],
        mood: ['Luxury', 'Quiet', 'Romantic'],
        purpose: ['Leisure', 'Romantic', 'Family'],
        roomTypes: ['Deluxe', 'Suite', 'Villa'],
        areas: ['mobor', 'south goa', 'varca', 'goa']
    },
    {
        id: 'taj-west-end',
        name: 'Taj West End, Bengaluru',
        area: 'Race Course Road, Bengaluru, Karnataka',
        region: 'Bengaluru',
        price: 16500,
        rating: 4.7,
        badge: 'GARDEN CITY CLASSIC',
        image: photo.garden,
        description: 'A heritage luxury hotel set amid landscaped gardens in the heart of Bengaluru.',
        features: ['Garden setting', 'Pool', 'Spa', 'Fine dining'],
        amenities: ['pool', 'spa', 'breakfast'],
        mood: ['Quiet', 'Luxury'],
        purpose: ['Leisure', 'Business', 'Romantic'],
        roomTypes: ['Deluxe', 'Suite'],
        areas: ['bengaluru', 'bangalore', 'karnataka']
    },
    {
        id: 'leela-bengaluru',
        name: 'The Leela Palace Bengaluru',
        area: 'Old Airport Road, Bengaluru, Karnataka',
        region: 'Bengaluru',
        price: 21000,
        rating: 4.8,
        badge: 'PALACE LUXURY',
        image: photo.room,
        description: 'A palace-inspired city hotel with ornate architecture, polished service and elegant rooms.',
        features: ['Luxury spa', 'Pool', 'Restaurants', 'Fitness centre'],
        amenities: ['pool', 'spa', 'breakfast'],
        mood: ['Luxury', 'Quiet'],
        purpose: ['Business', 'Leisure', 'Romantic'],
        roomTypes: ['Deluxe', 'Suite'],
        areas: ['bengaluru', 'bangalore', 'karnataka']
    },
    {
        id: 'taj-mumbai',
        name: 'The Taj Mahal Palace, Mumbai',
        area: 'Apollo Bunder, Colaba, Mumbai, Maharashtra',
        region: 'Mumbai',
        price: 24500,
        rating: 4.8,
        badge: 'ICONIC LANDMARK',
        image: photo.coast,
        description: 'A landmark waterfront hotel overlooking the Gateway of India, rich in history and character.',
        features: ['Harbour views', 'Pool', 'Spa', 'Fine dining'],
        amenities: ['pool', 'spa', 'breakfast'],
        mood: ['Luxury', 'Romantic'],
        purpose: ['Leisure', 'Business', 'Romantic'],
        roomTypes: ['Deluxe', 'Suite'],
        areas: ['mumbai', 'bombay', 'maharashtra']
    },
    {
        id: 'trident-mumbai',
        name: 'Trident, Nariman Point, Mumbai',
        area: 'Nariman Point, Mumbai, Maharashtra',
        region: 'Mumbai',
        price: 15500,
        rating: 4.6,
        badge: 'SEA-VIEW CITY STAY',
        image: photo.hotel,
        description: 'A polished city hotel with Arabian Sea views and easy access to South Mumbai business and culture.',
        features: ['Sea views', 'Pool', 'Restaurants', 'Business facilities'],
        amenities: ['pool', 'breakfast'],
        mood: ['Lively', 'Luxury'],
        purpose: ['Business', 'Leisure'],
        roomTypes: ['Deluxe', 'Suite'],
        areas: ['mumbai', 'bombay', 'maharashtra']
    },
    {
        id: 'imperial-delhi',
        name: 'The Imperial, New Delhi',
        area: 'Janpath, New Delhi, Delhi',
        region: 'Delhi',
        price: 23000,
        rating: 4.8,
        badge: 'TIMELESS GRANDEUR',
        image: photo.garden,
        description: 'A storied luxury hotel with elegant architecture, gardens and a central New Delhi address.',
        features: ['Heritage interiors', 'Pool', 'Spa', 'Fine dining'],
        amenities: ['pool', 'spa', 'breakfast'],
        mood: ['Luxury', 'Quiet', 'Romantic'],
        purpose: ['Business', 'Leisure', 'Romantic'],
        roomTypes: ['Deluxe', 'Suite'],
        areas: ['delhi', 'new delhi', 'ncr']
    },
    {
        id: 'rambagh-jaipur',
        name: 'Rambagh Palace, Jaipur',
        area: 'Bhawani Singh Road, Jaipur, Rajasthan',
        region: 'Jaipur',
        price: 32000,
        rating: 4.9,
        badge: 'ROYAL RETREAT',
        image: photo.coast,
        description: 'A former royal residence with manicured gardens, grand interiors and a memorable palace atmosphere.',
        features: ['Palace setting', 'Pool', 'Spa', 'Fine dining'],
        amenities: ['pool', 'spa', 'breakfast'],
        mood: ['Luxury', 'Quiet', 'Romantic'],
        purpose: ['Leisure', 'Romantic', 'Family'],
        roomTypes: ['Suite', 'Villa'],
        areas: ['jaipur', 'rajasthan']
    },
    {
        id: 'taj-udaipur',
        name: 'Taj Lake Palace, Udaipur',
        area: 'Lake Pichola, Udaipur, Rajasthan',
        region: 'Udaipur',
        price: 38500,
        rating: 4.9,
        badge: 'LAKE PALACE DREAM',
        image: photo.coast,
        description: 'A celebrated white palace hotel on Lake Pichola, ideal for a memorable romantic escape.',
        features: ['Lake views', 'Boat arrival', 'Spa', 'Fine dining'],
        amenities: ['spa', 'breakfast'],
        mood: ['Luxury', 'Quiet', 'Romantic'],
        purpose: ['Leisure', 'Romantic'],
        roomTypes: ['Suite'],
        areas: ['udaipur', 'rajasthan']
    },
    {
        id: 'grand-hyatt-kochi',
        name: 'Grand Hyatt Kochi Bolgatty',
        area: 'Bolgatty Island, Kochi, Kerala',
        region: 'Kochi',
        price: 15500,
        rating: 4.7,
        badge: 'BACKWATER VIEWS',
        image: photo.hotel,
        description: 'A waterfront luxury hotel on Bolgatty Island with backwater views, pools and spacious rooms.',
        features: ['Backwater views', 'Pool', 'Spa', 'Restaurants'],
        amenities: ['pool', 'spa', 'breakfast'],
        mood: ['Luxury', 'Quiet'],
        purpose: ['Business', 'Leisure', 'Family'],
        roomTypes: ['Deluxe', 'Suite', 'Family'],
        areas: ['kochi', 'cochin', 'kerala']
    },
    {
        id: 'taj-chennai',
        name: 'Taj Coromandel, Chennai',
        area: 'Nungambakkam, Chennai, Tamil Nadu',
        region: 'Chennai',
        price: 13800,
        rating: 4.6,
        badge: 'CHENNAI CLASSIC',
        image: photo.room,
        description: 'A classic luxury hotel in central Chennai with refined dining and a convenient business-travel location.',
        features: ['Pool', 'Spa', 'Fine dining', 'Business facilities'],
        amenities: ['pool', 'spa', 'breakfast'],
        mood: ['Luxury', 'Quiet'],
        purpose: ['Business', 'Leisure'],
        roomTypes: ['Deluxe', 'Suite'],
        areas: ['chennai', 'tamil nadu']
    },
    {
        id: 'taj-hyderabad',
        name: 'Taj Falaknuma Palace, Hyderabad',
        area: 'Engine Bowli, Hyderabad, Telangana',
        region: 'Hyderabad',
        price: 35000,
        rating: 4.9,
        badge: 'NIZAM-ERA GRANDEUR',
        image: photo.coast,
        description: 'A restored palace above Hyderabad, offering an atmospheric heritage stay and grand dining spaces.',
        features: ['Palace heritage', 'Fine dining', 'Spa', 'Guided tours'],
        amenities: ['spa', 'breakfast'],
        mood: ['Luxury', 'Quiet', 'Romantic'],
        purpose: ['Leisure', 'Romantic'],
        roomTypes: ['Suite'],
        areas: ['hyderabad', 'telangana']
    },
    {
        id: 'oberoi-agra',
        name: 'The Oberoi Amarvilas, Agra',
        area: 'Taj East Gate Road, Agra, Uttar Pradesh',
        region: 'Agra',
        price: 28500,
        rating: 4.9,
        badge: 'TAJ MAHAL VIEWS',
        image: photo.coast,
        description: 'An elegant hotel famed for views towards the Taj Mahal and carefully landscaped grounds.',
        features: ['Taj Mahal views', 'Pool', 'Spa', 'Fine dining'],
        amenities: ['pool', 'spa', 'breakfast'],
        mood: ['Luxury', 'Quiet', 'Romantic'],
        purpose: ['Leisure', 'Romantic', 'Family'],
        roomTypes: ['Deluxe', 'Suite'],
        areas: ['agra', 'uttar pradesh']
    },
    {
        id: 'wildflower-shimla',
        name: 'Wildflower Hall, Shimla',
        area: 'Mashobra, Shimla, Himachal Pradesh',
        region: 'Shimla',
        price: 26000,
        rating: 4.8,
        badge: 'MOUNTAIN HIDEAWAY',
        image: photo.mountain,
        description: 'A mountain retreat surrounded by cedar forests, with Himalayan scenery and a peaceful atmosphere.',
        features: ['Mountain views', 'Pool', 'Spa', 'Nature walks'],
        amenities: ['pool', 'spa', 'breakfast'],
        mood: ['Quiet', 'Luxury', 'Romantic'],
        purpose: ['Leisure', 'Romantic', 'Family'],
        roomTypes: ['Deluxe', 'Suite'],
        areas: ['shimla', 'himachal pradesh']
    },
    {
        id: 'span-manali',
        name: 'Span Resort & Spa, Manali',
        area: 'Kullu-Manali Highway, Manali, Himachal Pradesh',
        region: 'Manali',
        price: 12500,
        rating: 4.6,
        badge: 'RIVERSIDE ESCAPE',
        image: photo.mountain,
        description: 'A riverside mountain resort with leafy grounds and a restorative setting in the Kullu Valley.',
        features: ['Riverside setting', 'Spa', 'Garden views', 'Restaurant'],
        amenities: ['spa', 'breakfast'],
        mood: ['Quiet', 'Romantic'],
        purpose: ['Leisure', 'Family', 'Romantic'],
        roomTypes: ['Deluxe', 'Suite', 'Family'],
        areas: ['manali', 'himachal pradesh']
    },
    {
        id: 'itc-kolkata',
        name: 'ITC Royal Bengal, Kolkata',
        area: 'EM Bypass, Kolkata, West Bengal',
        region: 'Kolkata',
        price: 14500,
        rating: 4.6,
        badge: 'GRAND CITY ADDRESS',
        image: photo.hotel,
        description: 'A grand contemporary hotel with impressive interiors, multiple restaurants and convenient city access.',
        features: ['Pool', 'Spa', 'Restaurants', 'Business facilities'],
        amenities: ['pool', 'spa', 'breakfast'],
        mood: ['Luxury', 'Lively'],
        purpose: ['Business', 'Leisure', 'Family'],
        roomTypes: ['Deluxe', 'Suite', 'Family'],
        areas: ['kolkata', 'west bengal']
    },
    {
        id: 'taj-varanasi',
        name: 'Taj Ganges, Varanasi',
        area: 'Nadesar, Varanasi, Uttar Pradesh',
        region: 'Varanasi',
        price: 12000,
        rating: 4.5,
        badge: 'CULTURAL CITY STAY',
        image: photo.garden,
        description: 'A calm garden hotel and comfortable base for exploring the historic city of Varanasi.',
        features: ['Landscaped gardens', 'Pool', 'Restaurant', 'Wellness'],
        amenities: ['pool', 'spa', 'breakfast'],
        mood: ['Quiet'],
        purpose: ['Leisure', 'Family'],
        roomTypes: ['Standard', 'Deluxe', 'Family'],
        areas: ['varanasi', 'uttar pradesh']
    },
    {
        id: 'ibis-bengaluru',
        name: 'ibis Bengaluru City Centre',
        area: 'Richmond Road / Sampangiram Nagar, Bengaluru, Karnataka',
        region: 'Bengaluru',
        price: 6200,
        rating: 4.2,
        badge: 'SMART CITY STAY',
        image: photo.room,
        description: 'A practical city hotel for work trips and short breaks, with compact modern rooms and convenient access to central Bengaluru.',
        features: ['Wi-Fi', 'Restaurant', 'Air conditioning', 'City access'],
        amenities: ['breakfast'],
        mood: ['Lively'],
        purpose: ['Business', 'Leisure'],
        roomTypes: ['Standard', 'Deluxe'],
        areas: ['bengaluru', 'bangalore', 'richmond road', 'sampangiram nagar', 'mg road', 'karnataka']
    },
    {
        id: 'ginger-bengaluru',
        name: 'Ginger Bangalore- Inner Ring Road',
        area: 'Domlur / Inner Ring Road, Bengaluru, Karnataka',
        region: 'Bengaluru',
        price: 4200,
        rating: 4.0,
        badge: 'EVERYDAY COMFORT',
        image: photo.hotel,
        description: 'A no-fuss stay with functional rooms for travellers who want comfort and a sensible nightly rate.',
        features: ['Wi-Fi', 'Air conditioning', 'Restaurant', 'Work desk'],
        amenities: ['breakfast'],
        mood: ['Lively'],
        purpose: ['Business', 'Leisure'],
        roomTypes: ['Standard', 'Deluxe'],
        areas: ['bengaluru', 'bangalore', 'domlur', 'inner ring road', 'indiranagar', 'karnataka']
    },
    {
        id: 'chancery-pavilion',
        name: 'The Chancery Pavilion',
        area: 'Residency Road, Bengaluru, Karnataka',
        region: 'Bengaluru',
        price: 7800,
        rating: 4.2,
        badge: 'CENTRAL CITY BASE',
        image: photo.garden,
        description: 'A comfortable full-service hotel near central Bengaluru, suitable for business stays and city exploring.',
        features: ['Restaurant', 'Pool', 'Wi-Fi', 'Fitness centre'],
        amenities: ['pool', 'breakfast'],
        mood: ['Lively'],
        purpose: ['Business', 'Leisure', 'Family'],
        roomTypes: ['Standard', 'Deluxe'],
        areas: ['bengaluru', 'bangalore', 'residency road', 'brigade road', 'mg road', 'karnataka']
    },
    {
        id: 'hotel-empire-bengaluru',
        name: 'Hotel Empire International',
        area: 'Brigade Road, Bengaluru, Karnataka',
        region: 'Bengaluru',
        price: 2800,
        rating: 3.8,
        badge: 'BUDGET CITY PICK',
        image: photo.room,
        description: 'A straightforward city stay for guests looking for a basic room, a central location and a more affordable price.',
        features: ['Basic rooms', 'Restaurant nearby', 'Air conditioning', 'Central location'],
        amenities: ['breakfast'],
        mood: ['Lively'],
        purpose: ['Business', 'Leisure'],
        roomTypes: ['Standard'],
        areas: ['bengaluru', 'bangalore', 'brigade road', 'mg road', 'commercial street', 'karnataka']
    },
    {
        id: 'bengaluru-basic-inn',
        name: 'Bengaluru Everyday Rooms',
        area: 'Majestic / Gandhinagar, Bengaluru, Karnataka',
        region: 'Bengaluru',
        price: 1600,
        rating: 3.6,
        badge: 'BASIC ROOM · BUDGET',
        image: photo.room,
        description: 'A simple, budget-friendly room option for short stays, overnight stops and travellers who need the essentials without resort-style extras.',
        features: ['Basic private room', 'Fan / AC options', 'Wi-Fi', 'Transit access'],
        amenities: [],
        mood: ['Lively'],
        purpose: ['Business', 'Leisure'],
        roomTypes: ['Basic', 'Standard'],
        areas: ['bengaluru', 'bangalore', 'majestic', 'gandhinagar', 'yeshwanthpur', 'karnataka']
    },
    {
        id: 'koramangala-comfort',
        name: 'Koramangala Comfort Stay',
        area: 'Koramangala 5th Block, Bengaluru, Karnataka',
        region: 'Bengaluru',
        price: 2400,
        rating: 3.8,
        badge: 'SIMPLE CITY ROOM',
        image: photo.hotel,
        description: 'A simple private-room stay in a popular Bengaluru neighbourhood, suited to students, solo travellers and short city visits.',
        features: ['Private room', 'Wi-Fi', 'Nearby cafés', 'Easy city access'],
        amenities: [],
        mood: ['Lively'],
        purpose: ['Business', 'Leisure'],
        roomTypes: ['Basic', 'Standard'],
        areas: ['bengaluru', 'bangalore', 'koramangala', 'hsr layout', 'karnataka']
    },
    {
        id: 'whitefield-budget',
        name: 'Whitefield Budget Rooms',
        area: 'Whitefield / ITPL, Bengaluru, Karnataka',
        region: 'Bengaluru',
        price: 2200,
        rating: 3.7,
        badge: 'WORK-TRIP BASIC',
        image: photo.room,
        description: 'A no-frills room choice for visitors to the Whitefield and IT corridor, with essentials for a short stay.',
        features: ['Basic private room', 'Wi-Fi', 'Work-trip location', 'Essentials'],
        amenities: [],
        mood: ['Lively'],
        purpose: ['Business'],
        roomTypes: ['Basic', 'Standard'],
        areas: ['bengaluru', 'bangalore', 'whitefield', 'itpl', 'marathahalli', 'karnataka']
    },
    {
        id: 'jayanagar-stay',
        name: 'Jayanagar Comfort Rooms',
        area: 'Jayanagar 4th Block, Bengaluru, Karnataka',
        region: 'Bengaluru',
        price: 2600,
        rating: 3.9,
        badge: 'NEIGHBOURHOOD STAY',
        image: photo.garden,
        description: 'An uncomplicated room option in south Bengaluru for guests who prefer a neighbourhood base over a luxury hotel.',
        features: ['Private room', 'Wi-Fi', 'Local eateries', 'Neighbourhood location'],
        amenities: [],
        mood: ['Quiet'],
        purpose: ['Leisure', 'Family'],
        roomTypes: ['Basic', 'Standard'],
        areas: ['bengaluru', 'bangalore', 'jayanagar', 'jp nagar', 'karnataka']
    },
    {
        id: 'electronic-city-basic',
        name: 'Electronic City Basic Stay',
        area: 'Electronic City Phase 1, Bengaluru, Karnataka',
        region: 'Bengaluru',
        price: 1900,
        rating: 3.7,
        badge: 'BASIC WORK-TRIP ROOM',
        image: photo.room,
        description: 'A practical basic-room option near the Electronic City work corridor for short visits and overnight stays.',
        features: ['Basic private room', 'Wi-Fi', 'Work-trip location', 'Essentials'],
        amenities: [],
        mood: ['Lively'],
        purpose: ['Business'],
        roomTypes: ['Basic', 'Standard'],
        areas: ['bengaluru', 'bangalore', 'electronic city', 'bommasandra', 'karnataka']
    }
];

const destinations = [
    ['India', 'Explore sample stays across India', 'Country', ['all-india']],
    ['Goa', 'Coastal escapes · Goa', 'Popular destination', ['goa']],
    ['Bengaluru', 'City breaks · Karnataka', 'City', ['bengaluru', 'bangalore']],
    ['Bangalore', 'Also known as Bengaluru · Karnataka', 'City', ['bengaluru', 'bangalore']],
    ['Mumbai', 'Waterfront and city stays · Maharashtra', 'City', ['mumbai', 'bombay']],
    ['Delhi', 'Heritage and city stays · Delhi NCR', 'City', ['delhi', 'new delhi', 'ncr']],
    ['New Delhi', 'Capital city stays · Delhi', 'City', ['delhi', 'new delhi', 'ncr']],
    ['Jaipur', 'Palaces and heritage · Rajasthan', 'City', ['jaipur']],
    ['Udaipur', 'Lakeside escapes · Rajasthan', 'City', ['udaipur']],
    ['Kochi', 'Backwaters · Kerala', 'City', ['kochi', 'cochin']],
    ['Chennai', 'Coastal city stays · Tamil Nadu', 'City', ['chennai']],
    ['Hyderabad', 'Heritage and modern city stays · Telangana', 'City', ['hyderabad']],
    ['Agra', 'Taj Mahal and heritage stays · Uttar Pradesh', 'City', ['agra']],
    ['Shimla', 'Mountain retreats · Himachal Pradesh', 'Mountain destination', ['shimla']],
    ['Manali', 'Mountain and riverside stays · Himachal Pradesh', 'Mountain destination', ['manali']],
    ['Kolkata', 'Culture and city stays · West Bengal', 'City', ['kolkata']],
    ['Varanasi', 'Heritage and cultural stays · Uttar Pradesh', 'City', ['varanasi']],
    ['Kerala', 'Backwaters and coastal escapes', 'State', ['kerala', 'kochi', 'cochin']],
    ['Rajasthan', 'Palaces, forts and desert cities', 'State', ['rajasthan', 'jaipur', 'udaipur']],
    ['Himachal Pradesh', 'Mountain escapes in North India', 'State', ['himachal pradesh', 'shimla', 'manali']],
    ['Baga', 'Beach and nightlife · North Goa', 'Beach area', ['baga']],
    ['Calangute', 'Beachfront stays · North Goa', 'Beach area', ['calangute']],
    ['Candolim', 'Resorts and quieter beach days · North Goa', 'Beach area', ['candolim', 'sinquerim']],
    ['Panaji', 'Riverfront city breaks · Goa', 'City', ['panaji', 'miramar']],
    ['Anjuna', 'Beach cafés and bohemian energy · North Goa', 'Beach area', ['anjuna', 'vagator', 'morjim']],
    ['Vagator', 'Clifftop sunsets · North Goa', 'Beach area', ['vagator', 'anjuna', 'morjim']],
    ['Majorda', 'Peaceful beaches · South Goa', 'Beach area', ['majorda']],
    ['South Goa', 'Slow stays and quieter shores', 'Region', ['south goa', 'majorda', 'benaulim', 'varca', 'mobor']],
    ['Benaulim', 'Relaxed beach escape · South Goa', 'Beach area', ['benaulim']],
    ['Mobor', 'Resort stays · South Goa', 'Beach area', ['mobor']],
    ['Indiranagar', 'Cafés and city stays · Bengaluru, Karnataka', 'Bengaluru neighbourhood', ['indiranagar', 'domlur']],
    ['Koramangala', 'Student-friendly cafés and stays · Bengaluru, Karnataka', 'Bengaluru neighbourhood', ['koramangala']],
    ['Whitefield', 'IT corridor and business stays · Bengaluru, Karnataka', 'Bengaluru neighbourhood', ['whitefield', 'itpl']],
    ['MG Road', 'Central Bengaluru shopping and business area · Karnataka', 'Bengaluru neighbourhood', ['mg road', 'brigade road', 'commercial street']],
    ['Majestic', 'Transit hub and budget rooms · Bengaluru, Karnataka', 'Bengaluru neighbourhood', ['majestic', 'gandhinagar', 'yeshwanthpur']],
    ['Electronic City', 'IT parks and work-trip stays · Bengaluru, Karnataka', 'Bengaluru neighbourhood', ['electronic city', 'bommasandra']],
    ['Jayanagar', 'Residential neighbourhood stays · Bengaluru, Karnataka', 'Bengaluru neighbourhood', ['jayanagar', 'jp nagar']],
    ['HSR Layout', 'Cafés and residential stays · Bengaluru, Karnataka', 'Bengaluru neighbourhood', ['hsr layout']],
    ['Marathahalli', 'Budget and business stays · Bengaluru, Karnataka', 'Bengaluru neighbourhood', ['marathahalli']]
].map(([name, detail, type, terms]) => ({ name, detail, type, terms }));

const state = {
    destination: 'India',
    adults: 2,
    children: 0,
    rooms: 1,
    childAges: [],
    checkin: '',
    checkout: '',
    activeHotels: [...hotels],
    sort: 'recommended',
    user: null,
    saved: new Set()
};

const store = {
    get(key, fallback) { try { return JSON.parse(localStorage.getItem('veyora_' + key)) ?? fallback; } catch { return fallback; } },
    set(key, value) { try { localStorage.setItem('veyora_' + key, JSON.stringify(value)); } catch {} }
};
state.user = store.get('user', null);
state.saved = new Set(store.get('saved', []));
state.trips = [];
state.compare = new Set();
state.filters = { rating: 0, price: 40000, amenities: [] };
API.listBookings().then(trips => { state.trips = trips; });
state.stayPrefs = { bed: 'King', floor: 'No preference', food: 'No preference', access: false, extras: [], ...store.get('stayPrefs', {}) };

const $ = id => document.getElementById(id);
const destinationInput = $('destinationInput');
const suggestions = $('destinationSuggestions');
const guestPopover = $('guestPopover');
const guestTrigger = $('guestTrigger');
const modalBackdrop = $('modalBackdrop');
const modalBody = $('modalBody');

const esc = value => String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
}[character]));

function iso(date) {
    return new Date(date.getTime() - date.getTimezoneOffset() * 60000)
        .toISOString()
        .slice(0, 10);
}

function setDefaultDates() {
    const today = new Date();
    const tomorrow = new Date(today);

    tomorrow.setDate(today.getDate() + 1);

    $('checkinInput').min = iso(today);
    $('checkinInput').value = iso(today);

    $('checkoutInput').min = iso(tomorrow);
    $('checkoutInput').value = iso(tomorrow);

    state.checkin = $('checkinInput').value;
    state.checkout = $('checkoutInput').value;
}

function nights() {
    return Math.max(
        1,
        Math.round(
            (
                new Date(state.checkout + 'T12:00:00') -
                new Date(state.checkin + 'T12:00:00')
            ) / 86400000
        ) || 1
    );
}

function dateLabel(value) {
    return value
        ? new Date(value + 'T12:00:00').toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short'
        })
        : 'Select date';
}

function guestText() {
    return `${state.adults} adult${state.adults === 1 ? '' : 's'} · ` +
        `${state.children} child${state.children === 1 ? '' : 'ren'} · ` +
        `${state.rooms} room${state.rooms === 1 ? '' : 's'}`;
}

function updateGuestSummary() {
    $('guestSummary').textContent = guestText();
    $('adultsCount').textContent = state.adults;
    $('childrenCount').textContent = state.children;
    $('roomsCount').textContent = state.rooms;

    renderChildAges();
    updateSearchSummary();
}

function renderChildAges() {
    const holder = $('childAges');
    holder.innerHTML = '';

    for (let i = 0; i < state.children; i++) {
        const row = document.createElement('div');
        row.className = 'child-age-row';

        const label = document.createElement('label');
        label.textContent = `Child ${i + 1} age`;
        label.htmlFor = `childAge${i}`;

        const select = document.createElement('select');
        select.id = `childAge${i}`;

        for (let age = 0; age <= 17; age++) {
            const option = document.createElement('option');
            option.value = age;
            option.textContent = age === 0 ? 'Under 1 year' : `${age} years`;
            option.selected = (state.childAges[i] ?? 7) === age;
            select.appendChild(option);
        }

        select.addEventListener('change', () => {
            state.childAges[i] = Number(select.value);
        });

        row.append(label, select);
        holder.appendChild(row);
    }
}

function updateSearchSummary() {
    $('searchSummaryText').textContent =
        `Showing stays in ${state.destination || 'India'}`;

    $('occupancySummary').textContent =
        `${state.adults} adult${state.adults === 1 ? '' : 's'}` +
        `${state.children
            ? `, ${state.children} child${state.children === 1 ? '' : 'ren'} ` +
              `(${state.childAges.map(age => age === 0 ? 'under 1' : `${age} yrs`).join(', ')})`
            : ''}` +
        ` · ${state.rooms} room${state.rooms === 1 ? '' : 's'}` +
        ` · ${nights()} night${nights() === 1 ? '' : 's'}`;

    updateTripBudget();
}

function renderSuggestions(query = '') {
    const q = query.trim().toLowerCase();

    const matches = destinations
        .filter(destination =>
            !q ||
            destination.name.toLowerCase().includes(q) ||
            destination.detail.toLowerCase().includes(q)
        )
        .sort((a, b) =>
            (a.name.toLowerCase().startsWith(q) ? 0 : 1) -
            (b.name.toLowerCase().startsWith(q) ? 0 : 1)
        )
        .slice(0, 8);

    suggestions.innerHTML =
        '<div class="suggestion-title">' +
        (q ? 'DESTINATIONS & NEIGHBOURHOODS' : 'POPULAR ACROSS INDIA') +
        '</div>';

    matches.forEach(destination => {
        const button = document.createElement('button');

        button.className = 'suggestion-option';
        button.type = 'button';
        button.setAttribute('role', 'option');

        button.innerHTML =
            `<span class="suggestion-pin">⌖</span>` +
            `<span><strong>${esc(destination.name)}</strong>` +
            `<small>${esc(destination.detail)}</small></span>`;

        button.addEventListener('click', () => {
            chooseDestination(destination.name);
        });

        suggestions.appendChild(button);
    });

    if (!matches.length) {
        suggestions.insertAdjacentHTML(
            'beforeend',
            '<div class="suggestion-title">' +
            'No matching suggestion. Press Enter to search this place.' +
            '</div>'
        );
    }

    suggestions.classList.add('open');
}

function destinationTerms(value) {
    const query = value.trim().toLowerCase();

    const destination =
        destinations.find(item => item.name.toLowerCase() === query) ||
        destinations.find(item => item.name.toLowerCase().startsWith(query));

    return destination ? destination.terms : [query];
}

function hotelsForDestination(value) {
    const query = value.trim().toLowerCase();
    const terms = destinationTerms(value).map(term => term.toLowerCase());

    if (!query || query === 'india' || terms.includes('all-india')) {
        return [...hotels];
    }

    return hotels.filter(hotel =>
        hotel.areas.some(area => terms.includes(area.toLowerCase())) ||
        hotel.region.toLowerCase() === query
    );
}

function chooseDestination(name) {
    state.destination = name;
    destinationInput.value = name;
    suggestions.classList.remove('open');

    document.querySelectorAll('.destination-chip').forEach(chip => {
        chip.classList.toggle(
            'selected',
            chip.dataset.destination.toLowerCase() === name.toLowerCase()
        );
    });

    runSearch(false);
}

function sortHotels(list) {
    const result = [...list];

    if (state.sort === 'price-low') {
        result.sort((a, b) => a.price - b.price);
    } else if (state.sort === 'price-high') {
        result.sort((a, b) => b.price - a.price);
    } else if (state.sort === 'rating') {
        result.sort((a, b) => b.rating - a.rating);
    }

    return result;
}

function applyFilters(list) {
    const f = state.filters;
    return list.filter(h => h.rating >= f.rating && h.price <= f.price &&
        f.amenities.every(a => [].concat(h.amenities).includes(a)));
}

function renderHotels(list) {
    list = applyFilters(list);
    const grid = $('hotelGrid');
    grid.innerHTML = '';

    $('resultsCount').textContent =
        `${list.length} ${list.length === 1 ? 'stay' : 'stays'} to explore`;

    $('emptyState').classList.toggle('hidden', list.length > 0);

    list.forEach(hotel => {
        const card = document.createElement('article');
        card.className = 'hotel-card';

        card.innerHTML = `
            <div class="hotel-photo-wrap">
                <img
                    class="hotel-photo"
                    src="${hotel.image}"
                    onerror="photoFallback(this,'${hotel.id}')"
                    alt="Representative travel image for ${esc(hotel.name)}"
                    loading="lazy"
                >
                <span class="hotel-badge">${esc(hotel.badge)}</span>
                ${soldOut(hotel) ? '<span class="soldout-pill">Sold out for your dates</span>' : ''}
                ${hotel.matchScore ? `<span class="match-pill">${hotel.matchScore}% match</span>` : ''}
                <button
                    class="save-hotel ${state.saved.has(hotel.id) ? 'saved' : ''}"
                    type="button"
                    aria-label="Save to favourites"
                >${state.saved.has(hotel.id) ? '♥' : '♡'}</button>
                <label class="compare-tick"><input type="checkbox" ${state.compare.has(hotel.id) ? 'checked' : ''}> Compare</label>
            </div>

            <div class="hotel-content">
                <div class="hotel-location">⌖ ${esc(hotel.area)}</div>

                <div class="hotel-title-row">
                    <h3>${esc(hotel.name)}</h3>
                    <div class="hotel-rating">
                        ${hotel.rating.toFixed(1)}
                        <span>Guest rating*</span>
                    </div>
                </div>

                <p class="hotel-description">${esc(hotel.description)}</p>
                ${hotel.reasons ? `<p class="match-why">✓ ${esc(hotel.reasons.join(' · '))}</p>` : ''}

                <div class="hotel-features">
                    ${hotel.features.slice(0, 4).map(feature =>
                        `<span class="hotel-feature">${esc(feature)}</span>`
                    ).join('')}
                </div>

                <div class="hotel-bottom">
                    <div>
                        <div class="price-label">SAMPLE RATE / NIGHT</div>
                        <div class="hotel-price">
                            ₹${hotel.price.toLocaleString('en-IN')}
                            <small> / night</small>
                        </div>
                        <div class="hotel-total-note">
                            Illustrative · taxes not calculated
                        </div>
                    </div>

                    <div class="hotel-actions">
                        <button class="outline-button details-action" type="button">
                            Details
                        </button>
                        <button class="details-button book-action" type="button">
                            Choose ↗
                        </button>
                    </div>
                </div>
            </div>
        `;

        card.querySelector('.save-hotel').addEventListener('click', () => {
            if (state.saved.has(hotel.id)) {
                state.saved.delete(hotel.id);
            } else {
                state.saved.add(hotel.id);
            }
            store.set('saved', [...state.saved]);
            updateSavedCount();

            renderHotels(state.activeHotels);

            toast(
                state.saved.has(hotel.id)
                    ? 'Saved to your favourites.'
                    : 'Removed from your favourites.'
            );
        });

        card.querySelector('.compare-tick input').addEventListener('change', event => {
            if (event.target.checked && state.compare.size >= 3) {
                event.target.checked = false;
                toast('You can compare up to 3 stays.');
                return;
            }
            event.target.checked ? state.compare.add(hotel.id) : state.compare.delete(hotel.id);
            updateCompareBar();
        });

        card.querySelector('.details-action').addEventListener('click', () => {
            showHotelDetails(hotel);
        });

        card.querySelector('.book-action').addEventListener('click', () => {
            showBooking(hotel);
        });

        grid.appendChild(card);
    });
}

function runSearch(scroll = true) {
    state.destination = destinationInput.value.trim() || 'India';
    state.checkin = $('checkinInput').value;
    state.checkout = $('checkoutInput').value;

    if (!state.checkin || !state.checkout || state.checkout <= state.checkin) {
        toast('Choose a check-out date after your check-in date.');
        return;
    }

    const matches = hotelsForDestination(state.destination);

    state.activeHotels = sortHotels(matches);

    renderHotels(state.activeHotels);
    updateSearchSummary();

    suggestions.classList.remove('open');
    guestPopover.classList.remove('open');

    document.querySelectorAll('.destination-chip').forEach(chip => {
        chip.classList.toggle(
            'selected',
            chip.dataset.destination.toLowerCase() === state.destination.toLowerCase()
        );
    });

    if (scroll) {
        $('stays').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

        toast(
            matches.length
                ? `Found ${matches.length} sample stays in ${state.destination}.`
                : `No sample listings for ${state.destination} yet. Try another city or choose All India.`
        );
    }
}

function showHotelDetails(hotel) {
    openModal(`
        <div class="modal-kicker">A CLOSER LOOK</div>
        <h2 id="modalTitle">${esc(hotel.name)}</h2>

        <p class="modal-lead">
            ⌖ ${esc(hotel.area)} · Property/sample listing · illustrative demo
        </p>

        <img
            class="modal-hotel-image"
            src="${hotel.image}"
            onerror="photoFallback(this,'${hotel.id}')"
            alt="Representative image for ${esc(hotel.name)}"
        >

        <p class="modal-lead">${esc(hotel.description)}</p>

        <div class="modal-facts">
            ${hotel.features.map(feature => `<span>${esc(feature)}</span>`).join('')}
            <span>Guest rating ${hotel.rating.toFixed(1)}/5 (illustrative)</span>
            <span>Room types: ${hotel.roomTypes.join(', ')}</span>
        </div>

        <div class="modal-price-row">
            <div>
                <strong>₹${hotel.price.toLocaleString('en-IN')}</strong>
                <small>Sample rate per night · not a live quote</small>
            </div>
            <span>${nights()} night${nights() === 1 ? '' : 's'}</span>
        </div>

        ${scoresHtml(hotel)}
        <button class="outline-button guide-btn" data-guide="${esc(hotel.region)}" type="button">City guide &amp; tour: ${esc(hotel.region)}</button>

        <div class="demo-alert">
            Photos are representative imagery and may not show this exact hotel.
            Prices and availability are demo data. No live inventory is connected.
        </div>

        <button class="button button-dark" id="modalChooseHotel">
            Continue with this stay <span>↗</span>
        </button>
    `);

    $('modalChooseHotel').addEventListener('click', () => {
        showBooking(hotel);
    });
}

const EXTRAS = [
    { id: 'pickup', label: 'Airport pickup', price: 1500, once: true },
    { id: 'latecheckout', label: 'Late checkout', price: 1200, once: true },
    { id: 'celebration', label: 'Celebration setup (flowers, cake)', price: 2000, once: true },
    { id: 'extrabed', label: 'Extra bed', price: 1500, once: false },
    { id: 'quiet', label: 'Quiet room, away from lifts', price: 0, once: true }
];

const inr = value => '₹' + Number(value).toLocaleString('en-IN');

function showBooking(hotel) {
    if (soldOut(hotel)) { toast('Sorry, that stay is sold out for these dates. Try other dates.'); return; }
    const base = hotel.price * nights() * state.rooms;
    const prefs = state.stayPrefs;
    const user = state.user || {};
    const pick = (id, options, current) => `<select id="${id}">${options.map(o =>
        `<option ${o === current ? 'selected' : ''}>${esc(o)}</option>`).join('')}</select>`;
    const extrasTotal = () => EXTRAS.filter(e => $('ex_' + e.id).checked)
        .reduce((sum, e) => sum + e.price * (e.once ? 1 : nights()), 0);

    openModal(`
        <div class="modal-kicker">YOUR STAY, YOUR WAY</div>
        <h2 id="modalTitle">Make it yours</h2>
        ${stepsHtml(1)}
        <p class="modal-lead">${esc(hotel.name)} · ${esc(hotel.area)}</p>

        <div class="modal-facts">
            <span>${dateLabel(state.checkin)} – ${dateLabel(state.checkout)}</span>
            <span>${guestText()}</span>
            <span>${nights()} night${nights() === 1 ? '' : 's'}</span>
        </div>

        <div class="custom-grid">
            <label class="form-field"><span>Guest name</span><input id="gName" value="${esc(user.name || '')}" placeholder="Full name"></label>
            <label class="form-field"><span>Phone</span><input id="gPhone" type="tel" placeholder="+91 98765 43210"></label>
            <label class="form-field"><span>Room type</span>${pick('gRoom', hotel.roomTypes, hotel.roomTypes[0])}</label>
            <label class="form-field"><span>Bed setup</span>${pick('gBed', ['King', 'Twin', 'Double'], prefs.bed)}</label>
            <label class="form-field"><span>Floor</span>${pick('gFloor', ['No preference', 'High floor', 'Low floor'], prefs.floor)}</label>
            <label class="form-field"><span>Food preference</span>${pick('gFood', FOODS, prefs.food)}</label>
        </div>

        <div class="opt-list">
            ${EXTRAS.map(e => `
                <label class="opt-row">
                    <input type="checkbox" id="ex_${e.id}" ${prefs.extras.includes(e.id) ? 'checked' : ''}>
                    ${esc(e.label)}
                    <em>${e.price ? '+' + inr(e.price) + (e.once ? '' : ' / night') : 'free'}</em>
                </label>`).join('')}
        </div>

        <label class="opt-row"><input type="checkbox" id="gAccess" ${prefs.access ? 'checked' : ''}> Step-free access / accessible room</label>
        <label class="form-field"><span>Anything else we should know?</span><textarea id="gNote" placeholder="Allergies, a surprise, an early arrival..."></textarea></label>
        <label class="opt-row"><input type="checkbox" id="gRemember" checked> Remember these choices for my next stay</label>

        <div class="price-table">
            <div><span>Room · ${nights()} night${nights() === 1 ? '' : 's'} × ${state.rooms} room${state.rooms === 1 ? '' : 's'}</span><b id="bkRoom"></b></div>
            <div><span>Your extras</span><b id="bkExtras"></b></div>
            <div><span id="bkGstLabel">GST</span><b id="bkGst"></b></div>
            <div class="grand"><span>Total</span><strong id="bookTotal"></strong></div>
        </div>
        <p class="price-note">Illustrative tax: 0% for rooms up to ₹1,000 a night, 5% up to ₹7,500, 18% above that. Extras are taxed at 18%.</p>
        <div class="demo-alert">No real booking or payment will take place. Your stay is saved on this device only.</div>
        <button class="button button-accent" id="confirmDemoBtn">Continue to payment <span>→</span></button>
    `);

    const bill = () => {
        const extras = extrasTotal();
        const rate = gstRate(hotel.price);
        const gst = Math.round(base * rate) + Math.round(extras * 0.18);
        return { room: base, extras, gst, pct: Math.round(rate * 100), total: base + extras + gst };
    };
    const refresh = () => {
        const b = bill();
        $('bkRoom').textContent = inr(b.room);
        $('bkExtras').textContent = inr(b.extras);
        $('bkGst').textContent = inr(b.gst);
        $('bkGstLabel').textContent = `GST (${b.pct}% on room, 18% on extras)`;
        $('bookTotal').textContent = inr(b.total);
    };
    modalBody.querySelectorAll('.opt-row input').forEach(box => box.addEventListener('change', refresh));
    refresh();

    $('confirmDemoBtn').addEventListener('click', () => {
        const name = $('gName').value.trim();
        if (!name) { toast('Add the guest name to continue.'); $('gName').focus(); return; }

        const chosen = EXTRAS.filter(e => $('ex_' + e.id).checked);
        const booking = {
            name,
            phone: $('gPhone').value.trim(),
            room: $('gRoom').value,
            bed: $('gBed').value,
            floor: $('gFloor').value,
            note: $('gNote').value.trim(),
            food: $('gFood').value,
            access: $('gAccess').checked,
            extras: chosen.map(e => e.label),
            total: bill().total,
            gst: bill().gst
        };

        if ($('gRemember').checked) {
            state.stayPrefs = { bed: booking.bed, floor: booking.floor, food: booking.food, access: booking.access, extras: chosen.map(e => e.id) };
            store.set('stayPrefs', state.stayPrefs);
        }

        showPayment(hotel, booking);
    });
}

const FOODS = ['No preference', 'Vegetarian', 'Vegan', 'Jain', 'Halal'];

const stepsHtml = n => `<div class="steps">${['Your stay', 'Payment', 'Done'].map((label, i) =>
    `<span class="${i + 1 === n ? 'on' : i + 1 < n ? 'done' : ''}">${i + 1} · ${label}</span>`).join('')}</div>`;

function guestScores(h) {
    const base = h.rating * 20;
    const clamp = v => Math.max(60, Math.min(99, Math.round(v)));
    const mood = [].concat(h.mood);
    return [
        ['Quiet', base + (mood.includes('Quiet') ? 6 : -6)],
        ['Cleanliness', base + 2],
        ['Value', base + (h.price < 8000 ? 7 : -5)],
        ['Service', base + (mood.includes('Luxury') ? 5 : 0)]
    ].map(([name, value]) => [name, clamp(value)]);
}

function scoresHtml(h) {
    return `<div class="score-box"><strong>What guests rate (sample scores for this demo)</strong>${guestScores(h).map(([name, v]) =>
        `<div class="score-row"><span>${name}</span><i><b style="width:${v}%"></b></i><em>${v}</em></div>`).join('')}</div>`;
}

function updateCompareBar() {
    $('compareBar').classList.toggle('hidden', state.compare.size === 0);
    $('compareText').textContent = state.compare.size + ' selected (max 3)';
}

function showCompare() {
    const list = hotels.filter(h => state.compare.has(h.id));
    const rows = [
        ['Area', h => h.area], ['Rate / night', h => inr(h.price)], ['Guest rating', h => h.rating.toFixed(1)],
        ['Room types', h => h.roomTypes.join(', ')], ['Amenities', h => [].concat(h.amenities).join(', ')],
        ['Atmosphere', h => [].concat(h.mood).join(', ')]
    ];
    openModal(`<div class="modal-kicker">COMPARE</div><h2 id="modalTitle">Side by side</h2>
        <div class="compare-scroll"><table class="compare-table"><tr><th></th>${list.map(h => `<th>${esc(h.name)}</th>`).join('')}</tr>
        ${rows.map(([label, fn]) => `<tr><th>${label}</th>${list.map(h => `<td>${esc(fn(h))}</td>`).join('')}</tr>`).join('')}</table></div>`);
}

function openPreferences() {
    const p = state.stayPrefs;
    const sel = (id, opts, cur) => `<select id="${id}">${opts.map(o => `<option ${o === cur ? 'selected' : ''}>${o}</option>`).join('')}</select>`;
    openModal(`<div class="modal-kicker">MY PREFERENCES</div><h2 id="modalTitle">How you like to stay</h2>
        <p class="modal-lead">Saved on this device. Every booking starts with these.</p>
        <div class="custom-grid">
            <label class="form-field"><span>Bed</span>${sel('pBed', ['King', 'Twin', 'Double'], p.bed)}</label>
            <label class="form-field"><span>Floor</span>${sel('pFloor', ['No preference', 'High floor', 'Low floor'], p.floor)}</label>
            <label class="form-field"><span>Food</span>${sel('pFood', FOODS, p.food)}</label>
        </div>
        <div class="opt-list">
            <label class="opt-row"><input type="checkbox" id="pAccess" ${p.access ? 'checked' : ''}> Step-free access / accessible room</label>
            ${EXTRAS.map(e => `<label class="opt-row"><input type="checkbox" data-px="${e.id}" ${p.extras.includes(e.id) ? 'checked' : ''}> ${esc(e.label)}</label>`).join('')}
        </div>
        <button class="button button-dark" id="savePrefsBtn">Save preferences <span>✓</span></button>`);
    $('savePrefsBtn').addEventListener('click', () => {
        state.stayPrefs = {
            bed: $('pBed').value, floor: $('pFloor').value, food: $('pFood').value, access: $('pAccess').checked,
            extras: [...modalBody.querySelectorAll('[data-px]:checked')].map(box => box.dataset.px)
        };
        store.set('stayPrefs', state.stayPrefs);
        closeModal();
        toast('Preferences saved.');
    });
}

function showPayment(hotel, booking) {
    openModal(`${stepsHtml(2)}<div class="modal-kicker">DEMO PAYMENT</div><h2 id="modalTitle">Almost there</h2>
        <p class="modal-lead">${esc(hotel.name)} · ${inr(booking.total)}. Demo only: nothing is charged and nothing you type here is stored.</p>
        <label class="form-field"><span>Pay with</span><select id="payMethod"><option>UPI</option><option>Card</option><option>Pay at hotel</option></select></label>
        <div id="payFields"></div>
        <button class="button button-accent" id="payBtn">Pay ${inr(booking.total)} <span>✓</span></button>
        <button class="modal-link" id="payBack">← Back to my choices</button>`);
    const fields = {
        'UPI': '<label class="form-field"><span>UPI ID</span><input id="payUpi" placeholder="name@bank"></label>',
        'Card': '<label class="form-field"><span>Card number</span><input id="payCard" inputmode="numeric" placeholder="1234 5678 9012 3456"></label><div class="custom-grid"><label class="form-field"><span>Expiry</span><input id="payExp" placeholder="MM/YY"></label><label class="form-field"><span>CVV</span><input id="payCvv" type="password" inputmode="numeric" placeholder="123"></label></div>',
        'Pay at hotel': '<p class="modal-lead">Pay when you arrive. Nothing to enter now.</p>'
    };
    const draw = () => { $('payFields').innerHTML = fields[$('payMethod').value]; };
    draw();
    $('payMethod').addEventListener('change', draw);
    $('payBack').addEventListener('click', () => showBooking(hotel));
    $('payBtn').addEventListener('click', () => {
        const method = $('payMethod').value;
        const v = id => ($(id)?.value || '').trim();
        const ok = method === 'UPI' ? /^[\w.\-]{2,}@[a-z]{2,}$/i.test(v('payUpi'))
            : method === 'Card' ? /^\d{16}$/.test(v('payCard').replace(/\s/g, '')) && /^(0[1-9]|1[0-2])\/\d{2}$/.test(v('payExp')) && /^\d{3,4}$/.test(v('payCvv'))
            : true;
        if (!ok) { toast(method === 'UPI' ? 'Enter a valid UPI ID like name@bank.' : 'Check the card number, expiry (MM/YY) and CVV.'); return; }
        confirmDemo(hotel, { ...booking, payment: method });
    });
}

function confirmDemo(hotel, booking) {
    const reference = 'VY-' + Math.random().toString(36).slice(2, 8).toUpperCase();

    state.trips.unshift({
        ref: reference,
        hotelName: hotel.name,
        area: hotel.area,
        checkin: state.checkin,
        checkout: state.checkout,
        guests: guestText(),
        status: 'Confirmed',
        ...booking
    });
    API.createBooking(state.trips[0]);

    openModal(`
        ${stepsHtml(3)}<div class="success-mark">✓</div>
        <div class="modal-kicker">STAY CONFIRMED (DEMO)</div>
        <h2 id="modalTitle">That’s a lovely plan, ${esc(booking.name.split(' ')[0])}.</h2>
        <p class="modal-lead">Your stay at <strong>${esc(hotel.name)}</strong> is saved to My trips. No real reservation was made.</p>
        <div class="booking-reference">${reference}</div>
        <div class="modal-facts">
            <span>${dateLabel(state.checkin)} – ${dateLabel(state.checkout)}</span>
            <span>${esc(booking.room)} · ${esc(booking.bed)} bed</span>
            <span>${esc(booking.floor)}</span>
            <span>${esc(booking.payment || '')}</span>
            ${booking.extras.map(x => `<span>${esc(x)}</span>`).join('')}
        </div>
        <div class="modal-price-row">
            <div><strong>${inr(booking.total)}</strong><small>Includes GST ${inr(booking.gst || 0)} · no payment collected</small></div>
        </div>
        <button class="outline-button" id="shareBtn">Share trip</button>
        <button class="outline-button" id="printBtn">Print confirmation</button>
        <button class="button button-dark" id="viewTripsBtn">View my trips <span>↗</span></button>
        <button class="modal-link" id="doneBtn">Back to exploring</button>
    `);

    $('shareBtn').addEventListener('click', () => shareTrip(state.trips[0]));
    $('printBtn').addEventListener('click', () => window.print());
    $('viewTripsBtn').addEventListener('click', openTrips);
    $('doneBtn').addEventListener('click', closeModal);
}

function openTrips() {
    const list = state.trips.map(t => `
        <div class="trip-card">
            <div class="trip-head">
                <div><h3>${esc(t.hotelName)}</h3><small>⌖ ${esc(t.area)}</small></div>
                <span class="trip-ref">${esc(t.ref)}</span>
            </div>
            <small>${dateLabel(t.checkin)} – ${dateLabel(t.checkout)} · ${esc(t.guests)}</small>
            <small>${esc(t.room)} · ${esc(t.bed)} bed · ${esc(t.floor)}${t.food && t.food !== 'No preference' ? ' · ' + esc(t.food) : ''}${t.access ? ' · accessible' : ''}</small>
            ${t.extras.length ? `<small>Extras: ${t.extras.map(x => esc(x)).join(', ')}</small>` : ''}
            ${t.note ? `<small>Your note: ${esc(t.note)}</small>` : ''}
            <div class="modal-price-row">
                <div><strong>${inr(t.total)}</strong><small>Incl. GST ${inr(t.gst || 0)}</small></div>
                <span>${esc(t.status)}</span>
            </div>
            <div class="trip-actions"><button class="outline-button" data-share="${esc(t.ref)}">Share</button><button class="outline-button" data-cancel="${esc(t.ref)}">Cancel stay</button></div>
        </div>`).join('');

    openModal(`
        <div class="modal-kicker">MY TRIPS</div>
        <h2 id="modalTitle">Your stays</h2>
        ${list || '<p class="modal-lead">No stays yet. Pick a hotel and make it yours.</p>'}
    `);

    modalBody.querySelectorAll('[data-share]').forEach(button => button.addEventListener('click', () => shareTrip(state.trips.find(t => t.ref === button.dataset.share))));
    modalBody.querySelectorAll('[data-cancel]').forEach(button => button.addEventListener('click', () => {
        state.trips = state.trips.filter(t => t.ref !== button.dataset.cancel);
        API.cancelBooking(button.dataset.cancel);
        openTrips();
        toast('Stay cancelled.');
    }));
}

function openModal(html) {
    modalBody.innerHTML = html;
    modalBackdrop.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalBackdrop.classList.add('hidden');
    document.body.style.overflow = '';
}

function toast(message) {
    const toastElement = $('toast');

    toastElement.textContent = message;
    toastElement.classList.add('show');

    clearTimeout(toast.timer);

    toast.timer = setTimeout(() => {
        toastElement.classList.remove('show');
    }, 2700);
}

function runSmartMatch() {
    const budget = Math.max(
        1000,
        Number($('budgetInput').value) || 8000
    );

    const purpose = $('purposeSelect').value;
    const mood = $('atmosphereSelect').value;
    const amenity = $('amenitySelect').value;
    const roomType = $('roomTypeSelect')?.value || 'Any';

    store.set('smartPrefs', { budget, purpose, mood, amenity, roomType });

    const pool = hotelsForDestination(state.destination);

    const scored = pool.map(hotel => {
        let score = hotel.price <= budget
            ? 30
            : Math.max(0, 30 - ((hotel.price - budget) / budget) * 30);

        if (purpose === 'Any' || hotel.purpose.includes(purpose)) {
            score += 15;
        }

        if (mood === 'Any' || hotel.mood.includes(mood)) {
            score += 15;
        }

        if (amenity === 'Any' || hotel.amenities.includes(amenity)) {
            score += 25;
        }

        if (roomType === 'Any' || hotel.roomTypes.includes(roomType)) {
            score += 15;
        }

        score += hotel.rating / 5 * 15;

        const reasons = [];
        if (hotel.price <= budget) reasons.push('within budget');
        if (purpose !== 'Any' && hotel.purpose.includes(purpose)) reasons.push(purpose.toLowerCase() + ' friendly');
        if (mood !== 'Any' && hotel.mood.includes(mood)) reasons.push(mood.toLowerCase() + ' feel');
        if (amenity !== 'Any' && hotel.amenities.includes(amenity)) reasons.push('has ' + amenity);
        if (roomType !== 'Any' && hotel.roomTypes.includes(roomType)) reasons.push(roomType.toLowerCase() + ' room available');
        if (!reasons.length) reasons.push('top rated');

        return {
            ...hotel,
            reasons,
            matchScore: Math.min(99, Math.round(score / 115 * 100))
        };
    }).sort((a, b) => b.matchScore - a.matchScore);

    let matches = scored.filter(hotel =>
        hotel.price <= budget &&
        (roomType === 'Any' || hotel.roomTypes.includes(roomType)) &&
        (amenity === 'Any' || hotel.amenities.includes(amenity)) &&
        (purpose === 'Any' || hotel.purpose.includes(purpose)) &&
        (mood === 'Any' || hotel.mood.includes(mood))
    );

    if (!matches.length) {
        matches = scored.filter(hotel => hotel.price <= budget);
    }

    state.activeHotels = sortHotels(
        matches.length ? matches : scored.slice(0, 6)
    );

    renderHotels(state.activeHotels);

    $('resultsCount').textContent =
        `${state.activeHotels.length} ` +
        `${matches.length ? 'stays matched' : 'closest stays to explore'}`;

    $('stays').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });

    toast(
        matches.length
            ? 'Showing stays that fit your selected budget and preferences.'
            : 'No exact matches within that budget, so we are showing the closest sample stays.'
    );
}

function openAuth(mode = 'register') {
    const isRegister = mode === 'register';

    openModal(`
        <div class="modal-kicker">WELCOME TO VEYORA</div>

        <h2 id="modalTitle">
            ${isRegister ? 'Make yourself at home.' : 'Welcome back.'}
        </h2>

        <p class="modal-lead">
            This is a frontend demo profile, not a real account.
        </p>

        <form id="authForm">
            ${isRegister
                ? `<label class="form-field">
                    <span>Full name</span>
                    <input id="authName" required placeholder="Your name">
                </label>`
                : ''
            }

            <label class="form-field">
                <span>Email address</span>
                <input id="authEmail" type="email" required placeholder="you@example.com">
            </label>

            <label class="form-field">
                <span>Password</span>
                <input
                    id="authPassword"
                    type="password"
                    minlength="6"
                    required
                    placeholder="At least 6 characters"
                >
            </label>

            <button class="button button-dark" type="submit">
                ${isRegister ? 'Create demo account' : 'Sign in to demo'} ↗
            </button>
        </form>

        <p class="form-note">
            Not connected to the Java/MySQL backend yet. Passwords are not saved.
        </p>

        <button class="modal-link" id="switchAuthBtn">
            ${isRegister
                ? 'Already have a demo profile? Sign in'
                : 'New to VEYORA? Create a demo profile'}
        </button>
    `);

    $('authForm').addEventListener('submit', event => {
        event.preventDefault();

        const email = $('authEmail').value.trim();

        const name = isRegister
            ? $('authName').value.trim()
            : email.split('@')[0];

        state.user = { name, email };
        store.set('user', state.user);

        updateUserUI();

        openModal(`
            <div class="success-mark">✓</div>
            <div class="modal-kicker">DEMO PROFILE</div>

            <h2 id="modalTitle">
                Welcome, ${esc(name.split(/[ ._-]/)[0])}.
            </h2>

            <p class="modal-lead">
                You are using the local VEYORA demo as ${esc(email)}.
                No server account was created.
            </p>

            <button class="button button-dark" id="authDoneBtn">
                Explore stays ↗
            </button>
        `);

        $('authDoneBtn').addEventListener('click', closeModal);
    });

    $('switchAuthBtn').addEventListener('click', () => {
        openAuth(isRegister ? 'signin' : 'register');
    });
}

function updateUserUI() {
    const signInButton = $('signInBtn');
    const getStartedButton = $('getStartedBtn');

    if (state.user) {
        signInButton.textContent = `Hi, ${state.user.name.split(' ')[0]}`;

        getStartedButton.textContent = 'Sign out';
    } else {
        signInButton.textContent = 'Sign in';

        getStartedButton.textContent = 'Get started ↗';
    }
}

function openAccountMenu() {
    openModal(`
        <div class="modal-kicker">YOUR VEYORA PROFILE</div>

        <h2 id="modalTitle">
            Hey, ${esc(state.user?.name || 'traveller')}.
        </h2>

        <p class="modal-lead">${esc(state.user?.email || '')}</p>

        <div class="demo-alert">This is a local demo profile.</div>

        <button class="button button-dark" id="accountCloseBtn">
            Keep exploring ↗
        </button>

        <button class="modal-link" id="accountSignOutBtn">
            Sign out
        </button>
    `);

    $('accountCloseBtn').addEventListener('click', closeModal);

    $('accountSignOutBtn').addEventListener('click', () => {
        closeModal();
        signOut();
    });
}

function signOut() {
    state.user = null;
    store.set('user', null);
    updateUserUI();
    toast('You’ve signed out of the demo.');
}

// --------------------------------------------------
// INITIAL SETUP
// --------------------------------------------------

// Shown only when a hotel has no photo yet: its own name and region on a colour
// picked from the region, so different places never share one wrong picture.
function placeholderImage(hotel) {
    const region = hotel.region || '';
    const hue = [...region].reduce((sum, ch) => sum + ch.charCodeAt(0), 0) % 360;
    const size = Math.max(26, Math.min(46, Math.round(1300 / hotel.name.length)));
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700">` +
        `<rect width="1000" height="700" fill="hsl(${hue},30%,26%)"/>` +
        `<text x="500" y="320" fill="#fff" font-family="Georgia,serif" font-size="${size}" text-anchor="middle">${esc(hotel.name)}</text>` +
        `<text x="500" y="385" fill="#fff" fill-opacity=".7" font-family="Arial,sans-serif" font-size="30" text-anchor="middle">${esc(region)}</text></svg>`;
    return 'data:image/svg+xml,' + encodeURIComponent(svg).replace(/'/g, '%27');
}

// Each hotel looks for its own photo at images/<hotel id>.jpg
// and falls back to the old stock photo if that file is missing.
// Photo order for every hotel: your own file images/<id>.jpg, then a real photo of the place
// looked up live from Wikimedia Commons in the browser, then the old stock photo, then a name card.
const PHOTO_QUERIES = {
    'taj-fort': 'Taj Fort Aguada Goa', 'marriott-goa': 'Goa Marriott Resort Miramar',
    'alila-diwa': 'Alila Diwa Goa', 'hyatt-candolim': 'Hyatt Place Goa Candolim',
    'st-regis-goa': 'St. Regis Goa Mobor', 'taj-west-end': 'Taj West End Bangalore',
    'leela-bengaluru': 'Leela Palace Bangalore', 'taj-mumbai': 'Taj Mahal Palace Hotel Mumbai',
    'trident-mumbai': 'Trident Nariman Point Mumbai', 'imperial-delhi': 'The Imperial New Delhi hotel',
    'rambagh-jaipur': 'Rambagh Palace Jaipur', 'taj-udaipur': 'Taj Lake Palace Udaipur',
    'grand-hyatt-kochi': 'Grand Hyatt Kochi Bolgatty', 'taj-chennai': 'Taj Coromandel Chennai',
    'taj-hyderabad': 'Falaknuma Palace Hyderabad', 'oberoi-agra': 'Oberoi Amarvilas Agra',
    'wildflower-shimla': 'Wildflower Hall Shimla Mashobra', 'span-manali': 'Span Resort Manali',
    'itc-kolkata': 'ITC Royal Bengal Kolkata', 'taj-varanasi': 'Taj Ganges Varanasi',
    'hero-goa': 'Goa beach sunset', 'hero-jaipur': 'Hawa Mahal Jaipur',
    'hero-udaipur': 'Lake Pichola Udaipur City Palace', 'hero-kochi': 'Kerala backwaters houseboat',
    'hero-varanasi': 'Varanasi ghats Ganges', 'hero-shimla': 'Shimla Himalaya',
    'hero-agra': 'Taj Mahal Agra sunrise', 'hero-mumbai': 'Gateway of India Mumbai', 'hero-delhi': 'India Gate Delhi',
    'hero-hyderabad': 'Charminar Hyderabad', 'hero-kolkata': 'Howrah Bridge Kolkata', 'hero-manali': 'Manali Himachal snow',
    'hero-chennai': 'Marina Beach Chennai', 'hero-bengaluru': 'Vidhana Soudha Bangalore'
};

// The file title must contain the hotel's own name, otherwise a city or street photo could slip in.
const PHOTO_MATCH = {
    'taj-fort': /aguada/i, 'marriott-goa': /marriott|miramar/i, 'alila-diwa': /alila|diwa/i, 'hyatt-candolim': /hyatt|candolim/i,
    'st-regis-goa': /regis/i, 'taj-west-end': /west ?end/i, 'leela-bengaluru': /leela/i, 'taj-mumbai': /taj mahal palace|taj hotel|taj palace/i,
    'trident-mumbai': /trident/i, 'imperial-delhi': /imperial/i, 'rambagh-jaipur': /rambagh/i, 'taj-udaipur': /lake palace/i,
    'grand-hyatt-kochi': /hyatt|bolgatty/i, 'taj-chennai': /coromandel/i, 'taj-hyderabad': /falaknuma/i, 'oberoi-agra': /amarvil/i,
    'wildflower-shimla': /wildflower|mashobra/i, 'span-manali': /span/i, 'itc-kolkata': /royal bengal|itc/i, 'taj-varanasi': /taj ganges/i,
    'hero-agra': /taj/i, 'hero-mumbai': /gateway|mumbai|marine/i, 'hero-delhi': /india gate|delhi|red fort|humayun/i,
    'hero-hyderabad': /charminar/i, 'hero-kolkata': /howrah|kolkata|victoria|calcutta/i, 'hero-manali': /manali|rohtang|solang/i,
    'hero-chennai': /marina|chennai|madras/i, 'hero-bengaluru': /vidhana|bangalore|bengaluru|lalbagh/i
};
const photoOverrides = store.get('photoOverrides', {});
const photoCache = store.get('photoCache2', {});
const photoPending = {};

function livePhoto(key, width = 1000, minWidth = 1200) {
    if (photoCache[key]) return Promise.resolve(photoCache[key]);
    if (!PHOTO_QUERIES[key]) return Promise.resolve(null);
    if (photoPending[key]) return photoPending[key];

    photoPending[key] = (async () => {
        try {
            const params = new URLSearchParams({
                action: 'query', format: 'json', origin: '*', generator: 'search', gsrnamespace: '6',
                gsrsearch: PHOTO_QUERIES[key], gsrlimit: '40', prop: 'imageinfo',
                iiprop: 'url|size|mime', iiurlwidth: String(width)
            });
            const data = await (await fetch('https://commons.wikimedia.org/w/api.php?' + params)).json();
            const used = new Set(Object.values(photoCache));
            const best = Object.values(data.query?.pages || {})
                .sort((a, b) => a.index - b.index)
                .map(page => ({ ...page.imageinfo?.[0], title: page.title || '' }))
                .find(i => i.mime === 'image/jpeg' && i.width >= minWidth && i.width > i.height && i.thumburl && (PHOTO_MATCH[key] || !used.has(i.thumburl))
                    && (!PHOTO_MATCH[key] || PHOTO_MATCH[key].test(i.title)));
            if (!best) return null;
            photoCache[key] = best.thumburl;
            store.set('photoCache2', photoCache);
            return best.thumburl;
        } catch {
            return null;
        } finally {
            delete photoPending[key];
        }
    })();
    return photoPending[key];
}

function photoFallback(img, id) {
    const hotel = hotels.find(h => h.id === id);
    const toName = () => { img.onerror = null; img.src = hotel.fallbackImage; };
    const toStock = () => { img.onerror = toName; img.src = hotel.stockImage; };
    img.onerror = toStock;
    livePhoto(id).then(url => { if (url) img.src = url; else toStock(); });
}

store.get('ownerHotels', []).forEach(saved => hotels.push(saved));

hotels.forEach(hotel => {
    hotel.stockImage = hotel.image;
    hotel.fallbackImage = placeholderImage(hotel);
    hotel.image = photoOverrides[hotel.id] || 'images/' + hotel.id + '.jpg';
});

setDefaultDates();
updateGuestSummary();
updateUserUI();
renderHotels(sortHotels(hotelsForDestination(state.destination)));
updateSearchSummary();

// Destination autocomplete
destinationInput.addEventListener('focus', () => {
    renderSuggestions(destinationInput.value);
});

destinationInput.addEventListener('input', () => {
    renderSuggestions(destinationInput.value);
});

destinationInput.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        suggestions.classList.remove('open');
    }

    if (event.key === 'Enter') {
        event.preventDefault();

        const query = destinationInput.value.trim().toLowerCase();

        const destination =
            destinations.find(item => item.name.toLowerCase() === query) ||
            destinations.find(item => item.name.toLowerCase().startsWith(query));

        if (destination) {
            chooseDestination(destination.name);
        } else {
            runSearch();
        }
    }
});

// Close popovers when clicking outside
document.addEventListener('click', event => {
    if (!event.target.closest('.destination-field')) {
        suggestions.classList.remove('open');
    }

    if (!event.target.closest('.guest-field')) {
        guestPopover.classList.remove('open');
    }
});

// Guest selector
guestTrigger.addEventListener('click', event => {
    event.stopPropagation();

    guestPopover.classList.toggle('open');
    suggestions.classList.remove('open');
});

$('closeGuestPopover').addEventListener('click', () => {
    guestPopover.classList.remove('open');
});

$('applyGuestsBtn').addEventListener('click', () => {
    guestPopover.classList.remove('open');
    updateGuestSummary();
});

// Adults, children and room counters
document.querySelectorAll('[data-counter]').forEach(button => {
    button.addEventListener('click', () => {
        const key = button.dataset.counter;
        const step = Number(button.dataset.step);

        if (key === 'adults') {
            state.adults = Math.min(12, Math.max(1, state.adults + step));
        }

        if (key === 'children') {
            const next = Math.min(6, Math.max(0, state.children + step));

            if (next < state.children) {
                state.childAges.length = next;
            } else {
                while (state.childAges.length < next) {
                    state.childAges.push(7);
                }
            }

            state.children = next;
        }

        if (key === 'rooms') {
            state.rooms = Math.min(8, Math.max(1, state.rooms + step));
        }

        updateGuestSummary();
    });
});

// Check-in date
$('checkinInput').addEventListener('change', () => {
    const value = $('checkinInput').value;
    const nextDate = new Date(value + 'T12:00:00');

    nextDate.setDate(nextDate.getDate() + 1);

    $('checkoutInput').min = iso(nextDate);

    if ($('checkoutInput').value <= value) {
        $('checkoutInput').value = iso(nextDate);
    }

    state.checkin = $('checkinInput').value;
    state.checkout = $('checkoutInput').value;

    updateSearchSummary();
});

// Check-out date
$('checkoutInput').addEventListener('change', () => {
    state.checkout = $('checkoutInput').value;
    updateSearchSummary();
});

// Search controls
$('searchBtn').addEventListener('click', () => {
    runSearch();
});

$('editSearchBtn').addEventListener('click', () => {
    $('searchPanel').scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });

    destinationInput.focus();
});

// Sort hotel results
$('sortSelect').addEventListener('change', () => {
    state.sort = $('sortSelect').value;
    state.activeHotels = sortHotels(state.activeHotels);
    renderHotels(state.activeHotels);
});

// Reset search
$('resetSearchBtn').addEventListener('click', () => {
    destinationInput.value = 'India';
    state.destination = 'India';
    runSearch(false);
});

// Popular destination chips
document.querySelectorAll('.destination-chip').forEach(chip => {
    chip.addEventListener('click', () => {
        destinationInput.value = chip.dataset.destination;

        chooseDestination(chip.dataset.destination);

        $('stays').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// --------------------------------------------------
// SMARTMATCH BUDGET SLIDER AND TRIP ESTIMATE
// --------------------------------------------------

const budgetSlider = $('budgetInput');
const budgetValue = $('budgetValue');

function money(value) {
    return '₹' + Number(value).toLocaleString('en-IN');
}

function updateTripBudget() {
    const nightly = Number($('budgetInput')?.value || 8000);
    const total = nightly * state.rooms * nights();

    if ($('tripBudgetNightly')) {
        $('tripBudgetNightly').textContent = money(nightly);
    }

    if ($('tripBudgetMultiplier')) {
        $('tripBudgetMultiplier').textContent =
            `${state.rooms} room${state.rooms === 1 ? '' : 's'} × ` +
            `${nights()} night${nights() === 1 ? '' : 's'}`;
    }

    if ($('tripBudgetTotal')) {
        $('tripBudgetTotal').textContent = money(total);
    }

    if ($('tripBudgetDetails')) {
        $('tripBudgetDetails').textContent =
            `${money(nightly)} × ${state.rooms} room${state.rooms === 1 ? '' : 's'} × ` +
            `${nights()} night${nights() === 1 ? '' : 's'} · ` +
            'illustrative budget, not a hotel quote';
    }
}

function updateBudgetLabel() {
    budgetValue.textContent = money(budgetSlider.value);
    updateTripBudget();
}

const savedPrefs = store.get('smartPrefs', null);
if (savedPrefs) {
    $('budgetInput').value = savedPrefs.budget;
    $('purposeSelect').value = savedPrefs.purpose;
    $('atmosphereSelect').value = savedPrefs.mood;
    $('amenitySelect').value = savedPrefs.amenity;
    $('roomTypeSelect').value = savedPrefs.roomType;
}

budgetSlider.addEventListener('input', updateBudgetLabel);
updateBudgetLabel();

// Run SmartMatch
$('smartMatchBtn').addEventListener('click', runSmartMatch);

// Account controls
$('getStartedBtn').addEventListener('click', () => {
    state.user ? signOut() : openAuth('register');
});

$('signInBtn').addEventListener('click', () => {
    state.user ? openAccountMenu() : openAuth('signin');
});

$('tripsLink').addEventListener('click', event => {
    event.preventDefault();
    openTrips();
});

$('prefsLink').addEventListener('click', event => {
    event.preventDefault();
    openPreferences();
});

const PRESETS = {
    family: { budget: 12000, purpose: 'Family', mood: 'Quiet', amenity: 'pool', roomType: 'Family' },
    work: { budget: 9000, purpose: 'Business', mood: 'Quiet', amenity: 'breakfast', roomType: 'Deluxe' },
    honeymoon: { budget: 25000, purpose: 'Romantic', mood: 'Luxury', amenity: 'spa', roomType: 'Suite' },
    solo: { budget: 6000, purpose: 'Leisure', mood: 'Quiet', amenity: 'beach', roomType: 'Standard' }
};

document.querySelectorAll('[data-preset]').forEach(button => button.addEventListener('click', () => {
    const p = PRESETS[button.dataset.preset];
    $('budgetInput').value = p.budget;
    $('purposeSelect').value = p.purpose;
    $('atmosphereSelect').value = p.mood;
    $('amenitySelect').value = p.amenity;
    $('roomTypeSelect').value = p.roomType;
    updateBudgetLabel();
    document.querySelectorAll('[data-preset]').forEach(b => b.classList.toggle('selected', b === button));
    $('smartMatchBtn').click();
}));

function readFilters() {
    state.filters = {
        rating: Number($('filterRating').value),
        price: Number($('filterPrice').value),
        amenities: [...document.querySelectorAll('[data-filter-amenity]:checked')].map(box => box.dataset.filterAmenity)
    };
    $('filterPriceLabel').textContent = '≤ ' + inr(state.filters.price);
    if (state.activeHotels) renderHotels(state.activeHotels);
}

document.querySelectorAll('#filterBar input, #filterBar select').forEach(el => el.addEventListener('input', readFilters));
$('filterReset').addEventListener('click', () => {
    $('filterRating').value = 0;
    $('filterPrice').value = 40000;
    document.querySelectorAll('[data-filter-amenity]').forEach(box => { box.checked = false; });
    readFilters();
});

$('compareOpen').addEventListener('click', showCompare);
$('compareClear').addEventListener('click', () => {
    state.compare.clear();
    updateCompareBar();
    if (state.activeHotels) renderHotels(state.activeHotels);
});

// Modal controls
$('modalClose').addEventListener('click', closeModal);

modalBackdrop.addEventListener('click', event => {
    if (event.target === modalBackdrop) {
        closeModal();
    }
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
        closeModal();
        guestPopover.classList.remove('open');
        suggestions.classList.remove('open');
    }
});

// Mobile navigation
$('mobileMenuBtn').addEventListener('click', () => {
    document.querySelector('.main-nav').classList.toggle('open');
});

document.querySelectorAll('.main-nav a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.main-nav').classList.remove('open');
    });
});

// HERO SLIDESHOW: Indian places, wording changes with every slide.
// Put a wide photo at images/hero-<key>.jpg to replace a colour scene (fetch_photos.py can download them).
const HERO_SLIDES = [
    { key: 'goa', dest: 'Goa', native: 'गोवा', place: 'GOA, INDIA', tag: 'SUSEGAD', eyebrow: 'SLOW MORNINGS BY THE SEA',
      title: 'Sun, sand<br>and <em>susegad.</em>', text: 'Beach shacks, Portuguese lanes and long, lazy sunsets. Find a stay that lets you slow down.',
      cta: 'Explore Goa', bg: 'linear-gradient(120deg,#f6a53c 0%,#d9603b 38%,#1d5f6e 100%)' },
    { key: 'jaipur', dest: 'Jaipur', native: 'जयपुर', place: 'JAIPUR, RAJASTHAN', tag: 'THE PINK CITY', eyebrow: 'PALACES, FORTS & HAVELIS',
      title: 'Wake up in a<br><em>royal</em> story.', text: 'Sleep inside a palace or a restored haveli, then lose an afternoon in the Pink City bazaars.',
      cta: 'Explore Jaipur', bg: 'linear-gradient(120deg,#e8826b 0%,#b8455a 45%,#5a2a46 100%)' },
    { key: 'udaipur', dest: 'Udaipur', native: 'उदयपुर', place: 'UDAIPUR, RAJASTHAN', tag: 'CITY OF LAKES', eyebrow: 'LAKESIDE EVENINGS',
      title: 'A stay that<br>floats on a <em>lake.</em>', text: 'Marble palaces, glowing ghats and rooftops with a view of Lake Pichola.',
      cta: 'Explore Udaipur', bg: 'linear-gradient(120deg,#f2b66d 0%,#6b5aa6 50%,#1e3a5f 100%)' },
    { key: 'kochi', dest: 'Kochi', native: 'कोच्चि', place: 'KOCHI, KERALA', tag: 'BACKWATERS & SPICE', eyebrow: 'GOD’S OWN COUNTRY',
      title: 'Drift through<br>the <em>backwaters.</em>', text: 'Fort Kochi lanes, spice markets and calm green water. Slow travel, done properly.',
      cta: 'Explore Kochi', bg: 'linear-gradient(120deg,#9fd36b 0%,#2f8f5b 45%,#0d3b3a 100%)' },
    { key: 'varanasi', dest: 'Varanasi', native: 'वाराणसी', place: 'VARANASI, UTTAR PRADESH', tag: 'DAWN ON THE GANGA', eyebrow: 'THE OLDEST LIVING CITY',
      title: 'Mornings that<br>feel <em>timeless.</em>', text: 'Boat rides at sunrise, evening aarti and a stay close to the ghats.',
      cta: 'Explore Varanasi', bg: 'linear-gradient(120deg,#ffcf6b 0%,#e8742c 45%,#4a2a1c 100%)' },
    { key: 'shimla', dest: 'Shimla', native: 'शिमला', place: 'SHIMLA, HIMACHAL PRADESH', tag: 'IN THE HIMALAYAS', eyebrow: 'COOL AIR, BIG MOUNTAINS',
      title: 'Pine, mist<br>and <em>mountain</em> light.', text: 'Hill-station charm, crisp mornings and a warm fireplace at the end of the day.',
      cta: 'Explore Shimla', bg: 'linear-gradient(120deg,#a9d3ea 0%,#4a7fa8 45%,#1d3b4f 100%)' },
    { key: 'agra', dest: 'Agra', native: 'आगरा', place: 'AGRA, UTTAR PRADESH', tag: 'HOME OF THE TAJ MAHAL', eyebrow: 'LOVE, IN WHITE MARBLE',
      title: 'Sunrise at the<br><em>Taj Mahal.</em>', text: 'Misty mornings, Mughal gardens and a stay close to the Taj.',
      cta: 'Explore Agra', bg: 'linear-gradient(120deg,#f7d9b5 0%,#e39a7b 45%,#7a4a5a 100%)' },
    { key: 'mumbai', dest: 'Mumbai', native: 'मुंबई', place: 'MUMBAI, MAHARASHTRA', tag: 'CITY OF DREAMS', eyebrow: 'SEA BREEZE & SKYLINE',
      title: 'Marine Drive,<br>chai and <em>city lights.</em>', text: 'Heritage hotels by the harbour, street food at midnight and a sea that never stops.',
      cta: 'Explore Mumbai', bg: 'linear-gradient(120deg,#6fb6d8 0%,#3b6ea5 45%,#1b2a49 100%)' },
    { key: 'hyderabad', dest: 'Hyderabad', native: 'हैदराबाद', place: 'HYDERABAD, TELANGANA', tag: 'CITY OF PEARLS', eyebrow: 'NIZAMI NIGHTS',
      title: 'Biryani, bangles<br>and <em>Charminar.</em>', text: 'Palaces of the Nizams, busy bazaars and a plate of Hyderabadi biryani waiting.',
      cta: 'Explore Hyderabad', bg: 'linear-gradient(120deg,#e8b4d2 0%,#8e4f9e 45%,#2b1f4a 100%)' },
    { key: 'delhi', dest: 'Delhi', native: 'दिल्ली', place: 'DELHI, INDIA', tag: 'THE CAPITAL', eyebrow: 'HISTORY AT EVERY CORNER',
      title: 'Mughal domes,<br>modern <em>Delhi.</em>', text: 'Old-city lanes, grand monuments and a stay in the middle of it all.',
      cta: 'Explore Delhi', bg: 'linear-gradient(120deg,#f2c46d 0%,#c2603a 45%,#4a2a2a 100%)' },
    { key: 'manali', dest: 'Manali', native: 'मनाली', place: 'MANALI, HIMACHAL PRADESH', tag: 'IN THE VALLEY', eyebrow: 'SNOW PEAKS & PINE',
      title: 'Snow, rivers<br>and <em>slow</em> days.', text: 'Cosy stays, apple orchards and mountains that turn gold at sunrise.',
      cta: 'Explore Manali', bg: 'linear-gradient(120deg,#dbeaf5 0%,#6a9fc0 45%,#233f55 100%)' },
    { key: 'kolkata', dest: 'Kolkata', native: 'कोलकाता', place: 'KOLKATA, WEST BENGAL', tag: 'CITY OF JOY', eyebrow: 'ADDA, ART & ARCHITECTURE',
      title: 'Old charm, sweet<br><em>mishti</em> and trams.', text: 'Colonial grandeur, riverside evenings and a city that loves a good conversation.',
      cta: 'Explore Kolkata', bg: 'linear-gradient(120deg,#ffe29a 0%,#e08a3a 45%,#3b2b25 100%)' },
    { key: 'chennai', dest: 'Chennai', native: 'चेन्नई', place: 'CHENNAI, TAMIL NADU', tag: 'GATEWAY TO THE SOUTH', eyebrow: 'TEMPLES, TIDES & FILTER COFFEE',
      title: 'Marina sunrise,<br><em>filter</em> coffee.', text: 'Old temples, silk sarees, long beach walks and the best South Indian breakfast.',
      cta: 'Explore Chennai', bg: 'linear-gradient(120deg,#f7e08a 0%,#2fa3a0 50%,#17404d 100%)' },
    { key: 'bengaluru', dest: 'Bengaluru', native: 'बेंगलुरु', place: 'BENGALURU, KARNATAKA', tag: 'THE GARDEN CITY', eyebrow: 'CAFES, PARKS & GOOD WEATHER',
      title: 'A city that<br>feels <em>just right.</em>', text: 'Leafy lanes, microbreweries and a stay close to everything you came for.',
      cta: 'Explore Bengaluru', bg: 'linear-gradient(120deg,#c9e8a0 0%,#5aa86a 45%,#1e4a3a 100%)' }
];

// Mixed order so neighbouring slides look different.
const HERO_ORDER = ['goa', 'jaipur', 'agra', 'kochi', 'mumbai', 'shimla', 'varanasi', 'hyderabad', 'udaipur', 'delhi', 'manali', 'kolkata', 'chennai', 'bengaluru'];
HERO_SLIDES.sort((a, b) => HERO_ORDER.indexOf(a.key) - HERO_ORDER.indexOf(b.key));

(function initHero() {
    const wrap = $('heroSlides');
    const dotBox = $('heroDots');
    const content = document.querySelector('.hero-content');
    const hero = document.querySelector('.hero');
    if (!wrap || !dotBox || !content) return;

    let index = 0;
    let timer = null;
    const dots = [];

    const slides = HERO_SLIDES.map((slide, i) => {
        const el = document.createElement('div');
        el.className = 'hero-slide' + (i === 0 ? ' is-active' : '');
        el.style.backgroundImage = `url("images/hero-${slide.key}.jpg"), ${slide.bg}`;
        el.innerHTML = `<span class="script-name">${slide.native}</span>`;
        wrap.appendChild(el);
        livePhoto('hero-' + slide.key, 1600, 1800).then(url => {
            if (url) el.style.backgroundImage = `url("images/hero-${slide.key}.jpg"), url("${url}"), ${slide.bg}`;
        });

        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'hero-dot' + (i === 0 ? ' on' : '');
        dot.setAttribute('aria-label', slide.place);
        dot.addEventListener('click', () => { go(i); play(); });
        dotBox.appendChild(dot);
        dots.push(dot);
        return el;
    });

    const apply = slide => {
        $('heroEyebrowText').textContent = slide.eyebrow;
        $('heroTitle').innerHTML = slide.title;
        $('heroText').textContent = slide.text;
        $('heroPlace').textContent = slide.place;
        $('heroTag').textContent = slide.tag;
        $('heroCtaText').textContent = slide.cta;
    };

    function go(next) {
        if (next === index) return;
        const previous = slides[index];
        previous.classList.remove('is-active');
        previous.classList.add('is-prev');
        setTimeout(() => previous.classList.remove('is-prev'), 1200);
        slides[next].classList.add('is-active');
        dots.forEach((dot, i) => dot.classList.toggle('on', i === next));
        content.classList.add('swap');
        setTimeout(() => { apply(HERO_SLIDES[next]); content.classList.remove('swap'); }, 380);
        index = next;
    }

    const arrow = (label, step) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'hero-arrow';
        button.textContent = label;
        button.setAttribute('aria-label', step < 0 ? 'Previous slide' : 'Next slide');
        button.addEventListener('click', () => { go((index + step + HERO_SLIDES.length) % HERO_SLIDES.length); play(); });
        return button;
    };
    dotBox.insertBefore(arrow('‹', -1), dotBox.children[0] || null);
    dotBox.appendChild(arrow('›', 1));

    function stop() { clearInterval(timer); timer = null; }
    function play() {
        stop();
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            timer = setInterval(() => go((index + 1) % HERO_SLIDES.length), 6500);
        }
    }

    $('heroCta').addEventListener('click', () => {
        chooseDestination(HERO_SLIDES[index].dest);
        $('stays').scrollIntoView({ behavior: 'smooth' });
    });
    $('searchPanel').addEventListener('focusin', stop);
    $('searchPanel').addEventListener('focusout', play);
    play();
})();

// ---------- QUICK WINS: GST, festival picks, dark mode, saved stays ----------
function gstRate(rate) { return rate <= 1000 ? 0 : rate <= 7500 ? 0.05 : 0.18; }

const FESTIVALS = [
    { label: 'Diwali', place: 'Jaipur', dest: 'Jaipur', budget: 15000, purpose: 'Leisure', mood: 'Luxury', amenity: 'Any', roomType: 'Suite' },
    { label: 'Dev Deepawali', place: 'Varanasi', dest: 'Varanasi', budget: 9000, purpose: 'Leisure', mood: 'Quiet', amenity: 'Any', roomType: 'Deluxe' },
    { label: 'Christmas & New Year', place: 'Goa', dest: 'Goa', budget: 14000, purpose: 'Leisure', mood: 'Lively', amenity: 'beach', roomType: 'Any' },
    { label: 'Durga Puja', place: 'Kolkata', dest: 'Kolkata', budget: 10000, purpose: 'Family', mood: 'Lively', amenity: 'breakfast', roomType: 'Any' },
    { label: 'Snowfall season', place: 'Shimla', dest: 'Shimla', budget: 12000, purpose: 'Romantic', mood: 'Quiet', amenity: 'Any', roomType: 'Any' }
];

FESTIVALS.forEach(f => {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'festival-chip';
    chip.innerHTML = `<b>${f.label}</b><span>${f.place}</span>`;
    chip.addEventListener('click', () => {
        chooseDestination(f.dest);
        $('budgetInput').value = f.budget;
        $('purposeSelect').value = f.purpose;
        $('atmosphereSelect').value = f.mood;
        $('amenitySelect').value = f.amenity;
        $('roomTypeSelect').value = f.roomType;
        updateBudgetLabel();
        $('smartMatchBtn').click();
        $('stays').scrollIntoView({ behavior: 'smooth' });
    });
    $('festivalChips').appendChild(chip);
});

const applyTheme = theme => {
    document.documentElement.dataset.theme = theme;
    $('themeBtn').textContent = theme === 'dark' ? '☀' : '☾';
};
applyTheme(store.get('theme', 'light'));
$('themeBtn').addEventListener('click', () => {
    const theme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(theme);
    store.set('theme', theme);
});

function updateSavedCount() {
    $('savedCount').textContent = state.saved.size ? '(' + state.saved.size + ')' : '';
}

function openSaved() {
    const list = hotels.filter(h => state.saved.has(h.id));
    openModal(`<div class="modal-kicker">SAVED STAYS</div><h2 id="modalTitle">Your wishlist</h2>
        ${list.length ? list.map(h => `
            <div class="saved-row">
                <img src="${esc(h.image)}" alt="" onerror="photoFallback(this,'${h.id}')">
                <div><strong>${esc(h.name)}</strong><small>${esc(h.area)} · ${inr(h.price)} / night</small></div>
                <div class="saved-actions"><button class="outline-button" data-view="${h.id}">View</button><button class="modal-link" data-unsave="${h.id}">Remove</button></div>
            </div>`).join('') : '<p class="modal-lead">Nothing saved yet. Tap the heart on any stay and it will show up here.</p>'}`);
    modalBody.querySelectorAll('[data-view]').forEach(b => b.addEventListener('click', () => showHotelDetails(hotels.find(h => h.id === b.dataset.view))));
    modalBody.querySelectorAll('[data-unsave]').forEach(b => b.addEventListener('click', () => {
        state.saved.delete(b.dataset.unsave);
        store.set('saved', [...state.saved]);
        updateSavedCount();
        if (state.activeHotels) renderHotels(state.activeHotels);
        openSaved();
    }));
}

$('savedLink').addEventListener('click', openSaved);
updateSavedCount();

// ---------- WEEK 2: availability, quiz, map, host page ----------
function soldOut(hotel) {
    const key = hotel.id + ($('checkinInput').value || '') + ($('checkoutInput').value || '');
    let n = 0;
    for (const ch of key) n = (n * 31 + ch.charCodeAt(0)) % 997;
    return n % 8 === 0;   // demo availability: about 1 in 8 stays is full for any given dates
}

['checkinInput', 'checkoutInput'].forEach(id => $(id).addEventListener('change', () => {
    const from = $('checkinInput').value;
    const to = $('checkoutInput').value;
    if (from && to && to <= from) {
        const next = new Date(from);
        next.setDate(next.getDate() + 1);
        $('checkoutInput').value = next.toISOString().slice(0, 10);
        toast('Check-out must be after check-in, so we moved it by a day.');
    }
    if (state.activeHotels) renderHotels(state.activeHotels);
}));

const WHO = { 'Just me': ['Leisure', 'Standard'], 'Couple': ['Romantic', 'Deluxe'], 'Family': ['Family', 'Family'], 'Friends': ['Leisure', 'Any'], 'Work trip': ['Business', 'Deluxe'] };
const VIBE = { 'Quiet & calm': 'Quiet', 'Lively & social': 'Lively', 'A little luxury': 'Luxury', 'Surprise me': 'Any' };
const BUDGET = { 'Under ₹3,000': 3000, 'Up to ₹6,000': 6000, 'Up to ₹12,000': 12000, 'Up to ₹25,000': 25000, 'No limit': 40000 };
const MUST = { 'Swimming pool': 'pool', 'Near the beach': 'beach', 'Breakfast': 'breakfast', 'Spa & wellness': 'spa', 'Nothing special': 'Any' };

function openQuiz() {
    const answers = {};
    const steps = [
        ['who', 'Who is coming?', Object.keys(WHO)], ['vibe', 'What vibe?', Object.keys(VIBE)],
        ['budget', 'Budget per night?', Object.keys(BUDGET)], ['must', 'One must-have?', Object.keys(MUST)],
        ['food', 'Food preference?', FOODS],
        ['where', 'Where to?', ['Anywhere in India', ...new Set(hotels.map(h => h.region))]]
    ];
    openModal(`<div class="modal-kicker">1-MINUTE QUIZ</div><h2 id="modalTitle">Let’s find your kind of stay</h2>
        ${steps.map(([key, q, opts]) => `<div class="quiz-q"><strong>${q}</strong><div class="quiz-opts" data-key="${key}">${opts.map(o => `<button type="button" class="quiz-opt">${esc(o)}</button>`).join('')}</div></div>`).join('')}
        <button class="button button-accent" id="quizGo">Show my matches <span>↗</span></button>`);
    modalBody.querySelectorAll('.quiz-opts').forEach(group => group.querySelectorAll('.quiz-opt').forEach(btn => btn.addEventListener('click', () => {
        group.querySelectorAll('.quiz-opt').forEach(b => b.classList.toggle('on', b === btn));
        answers[group.dataset.key] = btn.textContent;
    })));
    $('quizGo').addEventListener('click', () => {
        const [purpose, roomType] = WHO[answers.who] || ['Any', 'Any'];
        if (answers.food) { state.stayPrefs.food = answers.food; store.set('stayPrefs', state.stayPrefs); }
        chooseDestination(!answers.where || answers.where.startsWith('Anywhere') ? 'India' : answers.where);
        $('purposeSelect').value = purpose;
        $('roomTypeSelect').value = roomType;
        $('atmosphereSelect').value = VIBE[answers.vibe] || 'Any';
        $('amenitySelect').value = MUST[answers.must] || 'Any';
        $('budgetInput').value = BUDGET[answers.budget] || 40000;
        updateBudgetLabel();
        closeModal();
        $('smartMatchBtn').click();
        $('stays').scrollIntoView({ behavior: 'smooth' });
    });
}
$('quizBtn').addEventListener('click', openQuiz);

const CITY_COORDS = {
    Goa: [15.4909, 73.8278], Bengaluru: [12.9716, 77.5946], Mumbai: [19.076, 72.8777], Delhi: [28.6139, 77.209],
    Jaipur: [26.9124, 75.7873], Udaipur: [24.5854, 73.7125], Kochi: [9.9312, 76.2673], Chennai: [13.0827, 80.2707],
    Hyderabad: [17.385, 78.4867], Agra: [27.1767, 78.0081], Kolkata: [22.5726, 88.3639], Shimla: [31.1048, 77.1734],
    Manali: [32.2432, 77.1892], Varanasi: [25.3176, 82.9739]
};

function loadLeaflet() {
    return new Promise((resolve, reject) => {
        if (window.L) return resolve();
        const css = document.createElement('link');
        css.rel = 'stylesheet';
        css.href = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css';
        document.head.appendChild(css);
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

function openMap() {
    openModal(`<div class="modal-kicker">MAP</div><h2 id="modalTitle">Where Veyora stays are</h2>
        <div class="city-map" id="cityMap"><p class="modal-lead">Loading the map…</p></div>
        <p class="price-note">Pins are approximate hotel locations (stays added by hosts sit at the city centre). Needs internet.</p>`);
    loadLeaflet().then(() => {
        $('cityMap').innerHTML = '';
        const map = L.map('cityMap').setView([22.5, 79], 4.4);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '© OpenStreetMap contributors' }).addTo(map);
        const points = [];
        hotels.forEach(h => {
            const spot = HOTEL_COORDS[h.id] || CITY_COORDS[h.region];
            if (!spot) return;
            points.push(spot);
            L.marker(spot).addTo(map).bindPopup(`<b>${esc(h.name)}</b><br>${esc(h.area)}<br>${inr(h.price)} / night<br><button class="map-go" data-hotel="${esc(h.id)}">View details</button>`);
        });
        if (points.length) map.fitBounds(points, { padding: [30, 30] });
        map.on('popupopen', event => {
            const go = event.popup.getElement().querySelector('.map-go');
            if (go) go.addEventListener('click', () => showHotelDetails(hotels.find(h => h.id === go.dataset.hotel)));
        });
        setTimeout(() => map.invalidateSize(), 200);
    }).catch(() => { $('cityMap').innerHTML = '<p class="modal-lead">The map could not load. Check your internet connection.</p>'; });
}
$('mapBtn').addEventListener('click', openMap);

function openOwner() {
    const cities = [...new Set(hotels.map(h => h.region))];
    const mine = store.get('ownerHotels', []);
    openModal(`<div class="modal-kicker">FOR HOTELS</div><h2 id="modalTitle">List your hotel</h2>
        <p class="modal-lead">Demo of the host side. Your listing is saved on this device and appears in search straight away.</p>
        <div class="custom-grid">
            <label class="form-field"><span>Hotel name</span><input id="ownName" placeholder="e.g. Lakeview Heritage Stay"></label>
            <label class="form-field"><span>City</span><select id="ownCity">${cities.map(c => `<option>${esc(c)}</option>`).join('')}</select></label>
            <label class="form-field"><span>Locality</span><input id="ownArea" placeholder="e.g. Fateh Sagar"></label>
            <label class="form-field"><span>Rate per night (₹)</span><input id="ownPrice" type="number" min="500" placeholder="4500"></label>
        </div>
        <div class="opt-list">
            ${['Basic', 'Standard', 'Deluxe', 'Suite', 'Family', 'Villa'].map(r => `<label class="opt-row"><input type="checkbox" data-room="${r}"> ${r} room</label>`).join('')}
            ${['pool', 'beach', 'breakfast', 'spa'].map(a => `<label class="opt-row"><input type="checkbox" data-amen="${a}"> ${a[0].toUpperCase() + a.slice(1)}</label>`).join('')}
        </div>
        <label class="form-field"><span>Short description</span><textarea id="ownDesc" placeholder="What makes your place special?"></textarea></label>
        <button class="button button-dark" id="ownGo">Publish my listing <span>↗</span></button>
        ${mine.length ? `<h3 class="own-title">Your listings</h3>${mine.map(m => `<div class="saved-row"><div><strong>${esc(m.name)}</strong><small>${esc(m.area)} · ${inr(m.price)} / night</small></div><div class="saved-actions"><button class="modal-link" data-own-del="${esc(m.id)}">Remove</button></div></div>`).join('')}` : ''}`);

    $('ownGo').addEventListener('click', () => {
        const name = $('ownName').value.trim();
        const price = Number($('ownPrice').value);
        if (name.length < 3 || !(price >= 500)) { toast('Add a hotel name and a rate of at least ₹500.'); return; }
        const region = $('ownCity').value;
        const base = hotels.find(h => h.region === region) || hotels[0];
        const rooms = [...modalBody.querySelectorAll('[data-room]:checked')].map(b => b.dataset.room);
        const amenities = [...modalBody.querySelectorAll('[data-amen]:checked')].map(b => b.dataset.amen);
        const locality = $('ownArea').value.trim();
        const saved = {
            ...base, id: 'owner-' + Date.now(), name, region, price, rating: 4.0, badge: 'New on Veyora',
            area: (locality ? locality + ', ' : '') + region, areas: [locality, region].filter(Boolean),
            roomTypes: rooms.length ? rooms : ['Standard'], amenities,
            features: amenities.map(a => a[0].toUpperCase() + a.slice(1)),
            mood: ['Quiet', 'Lively'], purpose: ['Leisure', 'Family'],
            description: $('ownDesc').value.trim() || 'A new stay on Veyora.',
            image: base.stockImage || base.image
        };
        delete saved.stockImage; delete saved.fallbackImage;
        store.set('ownerHotels', [...store.get('ownerHotels', []), saved]);
        API.saveHotel(saved);
        const live = { ...saved, stockImage: saved.image };
        live.fallbackImage = placeholderImage(live);
        live.image = 'images/' + live.id + '.jpg';
        hotels.push(live);
        closeModal();
        chooseDestination(region);
        toast('Listed! Your stay is now in the results.');
    });
    modalBody.querySelectorAll('[data-own-del]').forEach(b => b.addEventListener('click', () => {
        const index = hotels.findIndex(h => h.id === b.dataset.ownDel);
        if (index >= 0) hotels.splice(index, 1);
        store.set('ownerHotels', store.get('ownerHotels', []).filter(h => h.id !== b.dataset.ownDel));
        openOwner();
        if (state.activeHotels) renderHotels(state.activeHotels.filter(h => h.id !== b.dataset.ownDel));
    }));
}
$('ownerLink').addEventListener('click', event => { event.preventDefault(); openOwner(); });

// ---------- WEEK 3: city guide, exact pins, share, languages ----------
const HOTEL_COORDS = {
    'taj-fort': [15.493, 73.7733], 'marriott-goa': [15.4825, 73.807], 'alila-diwa': [15.305, 73.95], 'hyatt-candolim': [15.518, 73.764],
    'st-regis-goa': [15.15, 73.945], 'taj-west-end': [12.983, 77.58], 'leela-bengaluru': [12.961, 77.648], 'taj-mumbai': [18.9217, 72.8332],
    'trident-mumbai': [18.9256, 72.8242], 'imperial-delhi': [28.6254, 77.2178], 'rambagh-jaipur': [26.8999, 75.8084], 'taj-udaipur': [24.5757, 73.6802],
    'grand-hyatt-kochi': [9.9894, 76.2626], 'taj-chennai': [13.0627, 80.2519], 'taj-hyderabad': [17.3317, 78.4672], 'oberoi-agra': [27.163, 78.043],
    'wildflower-shimla': [31.1257, 77.2161], 'span-manali': [32.256, 77.16], 'itc-kolkata': [22.544, 88.389], 'taj-varanasi': [25.3266, 82.989],
    'ibis-bengaluru': [12.9667, 77.6], 'ginger-bengaluru': [12.9609, 77.6387], 'chancery-pavilion': [12.9716, 77.605], 'hotel-empire-bengaluru': [12.9719, 77.607],
    'bengaluru-basic-inn': [12.9767, 77.5713], 'koramangala-comfort': [12.9352, 77.6245], 'whitefield-budget': [12.9698, 77.75],
    'jayanagar-stay': [12.9308, 77.5838], 'electronic-city-basic': [12.8452, 77.6602]
};

function renderGuide(city, guide, tours) {
    const list = (items, fn) => items && items.length ? `<ul class="guide-list">${items.map(fn).join('')}</ul>` : '';
    const food = state.stayPrefs.food;
    return `<div class="modal-kicker">CITY GUIDE</div><h2 id="modalTitle">${esc(city)}</h2>
        ${guide ? `<p class="modal-lead">${esc(guide.overview || '')}</p>
            ${guide.bestTime ? `<div class="guide-sec"><strong>Best time to visit</strong><p>${esc(guide.bestTime)}</p></div>` : ''}
            ${guide.gettingAround ? `<div class="guide-sec"><strong>Getting around</strong><p>${esc(guide.gettingAround)}</p></div>` : ''}
            ${guide.mustSee?.length ? `<div class="guide-sec"><strong>Must see</strong>${list(guide.mustSee, s => `<li><b>${esc(s.name)}</b> ${esc(s.note || '')}</li>`)}</div>` : ''}
            ${guide.food?.length ? `<div class="guide-sec"><strong>What to eat</strong>${list(guide.food, f => `<li><b>${esc(f.name)}</b> ${esc(f.note || '')}${(f.tags || []).includes(food) ? ' ✓ fits your food preference' : ''}</li>`)}</div>` : ''}
            ${guide.tips?.length ? `<div class="guide-sec"><strong>Good to know</strong>${list(guide.tips, t => `<li>${esc(t)}</li>`)}</div>` : ''}` : ''}
        ${tours?.length ? `<div class="guide-sec"><strong>Take a tour</strong>${tours.map(t => `<details class="tour"><summary>${esc(t.title)} · ${esc(t.duration || '')}</summary><ol>${(t.stops || []).map(s => `<li><b>${esc(s.time || '')}</b> ${esc(s.name)} <span>${esc(s.note || '')}</span></li>`).join('')}</ol></details>`).join('')}</div>` : ''}`;
}

async function openGuide(city) {
    openModal(`<div class="modal-kicker">CITY GUIDE</div><h2 id="modalTitle">${esc(city)}</h2><p class="modal-lead">Loading…</p>`);
    const slug = city.toLowerCase().replace(/[^a-z]+/g, '-');
    let guide = null;
    let tours = null;
    try { [guide, tours] = await Promise.all([API.getCityGuide(slug), API.getCityTours(slug)]); } catch { /* backend not reachable */ }
    openModal(guide || tours?.length ? renderGuide(city, guide, tours)
        : `<div class="modal-kicker">CITY GUIDE</div><h2 id="modalTitle">${esc(city)}</h2><p class="modal-lead">Our local guide and city tour for ${esc(city)} are coming soon.</p>`);
}
modalBody.addEventListener('click', event => {
    const button = event.target.closest && event.target.closest('[data-guide]');
    if (button) openGuide(button.dataset.guide);
});

function shareTrip(trip) {
    if (!trip) return;
    const text = `I’m staying at ${trip.hotelName}, ${trip.area} (${dateLabel(trip.checkin)} – ${dateLabel(trip.checkout)}). Booked on Veyora, ref ${trip.ref}. Join me!`;
    if (navigator.share) { navigator.share({ title: 'My Veyora stay', text }).catch(() => {}); return; }
    window.open('https://wa.me/?text=' + encodeURIComponent(text), '_blank');
    if (navigator.clipboard) navigator.clipboard.writeText(text).catch(() => {});
    toast('Opening WhatsApp. The message is also copied.');
}

// Languages: text is matched by its English wording, so new screens can be added by adding a row here.
// Hindi and Kannada are first drafts: please have a native speaker check them. The hero slides stay in English.
const TRANSLATIONS = [
    ['Discover', 'खोजें', 'ಅನ್ವೇಷಿಸಿ'], ['Explore stays', 'ठहरने की जगहें देखें', 'ವಾಸ್ತವ್ಯಗಳನ್ನು ನೋಡಿ'], ['SmartMatch', 'स्मार्टमैच', 'ಸ್ಮಾರ್ಟ್‌ಮ್ಯಾಚ್'],
    ['Why Veyora', 'वेयोरा क्यों', 'ವೇಯೋರಾ ಏಕೆ'], ['My trips', 'मेरी यात्राएँ', 'ನನ್ನ ಪ್ರವಾಸಗಳು'], ['Preferences', 'पसंद', 'ಆದ್ಯತೆಗಳು'],
    ['Sign in', 'साइन इन', 'ಸೈನ್ ಇನ್'], ['Get started', 'शुरू करें', 'ಪ್ರಾರಂಭಿಸಿ'], ['WHERE TO?', 'कहाँ जाना है?', 'ಎಲ್ಲಿಗೆ?'],
    ['CHECK-IN', 'चेक-इन', 'ಚೆಕ್-ಇನ್'], ['CHECK-OUT', 'चेक-आउट', 'ಚೆಕ್-ಔಟ್'], ['WHO’S COMING?', 'कौन आ रहा है?', 'ಯಾರು ಬರುತ್ತಿದ್ದಾರೆ?'],
    ['Find my stay', 'मेरा ठिकाना खोजें', 'ನನ್ನ ವಾಸ್ತವ್ಯ ಹುಡುಕಿ'], ['Adults', 'वयस्क', 'ವಯಸ್ಕರು'], ['Children', 'बच्चे', 'ಮಕ್ಕಳು'],
    ['Rooms', 'कमरे', 'ಕೊಠಡಿಗಳು'], ['Done', 'हो गया', 'ಮುಗಿದಿದೆ'], ['Where to next?', 'आगे कहाँ?', 'ಮುಂದೆ ಎಲ್ಲಿಗೆ?'],
    ['Quick starts', 'झटपट शुरुआत', 'ತ್ವರಿತ ಆರಂಭ'], ['Family weekend', 'परिवार का वीकेंड', 'ಕುಟುಂಬ ವಾರಾಂತ್ಯ'], ['Work trip', 'काम की यात्रा', 'ಕೆಲಸದ ಪ್ರವಾಸ'],
    ['Honeymoon', 'हनीमून', 'ಹನಿಮೂನ್'], ['Solo escape', 'अकेले सैर', 'ಒಂಟಿ ಪ್ರವಾಸ'], ['Budget per night', 'प्रति रात बजट', 'ಪ್ರತಿ ರಾತ್ರಿ ಬಜೆಟ್'],
    ['Trip mood', 'यात्रा का मूड', 'ಪ್ರವಾಸದ ಮನಃಸ್ಥಿತಿ'], ['Atmosphere', 'माहौल', 'ವಾತಾವರಣ'], ['Must-haves', 'ज़रूरी सुविधाएँ', 'ಅಗತ್ಯ ಸೌಲಭ್ಯಗಳು'],
    ['Room type', 'कमरे का प्रकार', 'ಕೊಠಡಿ ಪ್ರಕಾರ'], ['Find my SmartMatches', 'मेरे स्मार्टमैच खोजें', 'ನನ್ನ ಸ್ಮಾರ್ಟ್‌ಮ್ಯಾಚ್ ಹುಡುಕಿ'],
    ['Not sure? Take the 1-minute quiz', 'पक्का नहीं? 1 मिनट की क्विज़ लें', 'ಖಚಿತವಿಲ್ಲವೇ? 1 ನಿಮಿಷದ ಕ್ವಿಜ್ ತೆಗೆದುಕೊಳ್ಳಿ'],
    ['Recommended', 'अनुशंसित', 'ಶಿಫಾರಸು'], ['Price: low to high', 'कीमत: कम से ज़्यादा', 'ಬೆಲೆ: ಕಡಿಮೆಯಿಂದ ಹೆಚ್ಚು'], ['Price: high to low', 'कीमत: ज़्यादा से कम', 'ಬೆಲೆ: ಹೆಚ್ಚಿನಿಂದ ಕಡಿಮೆ'],
    ['Guest rating', 'मेहमानों की रेटिंग', 'ಅತಿಥಿ ರೇಟಿಂಗ್'], ['Edit search', 'खोज बदलें', 'ಹುಡುಕಾಟ ಬದಲಿಸಿ'], ['Map', 'नक्शा', 'ನಕ್ಷೆ'],
    ['Reset', 'रीसेट', 'ಮರುಹೊಂದಿಸಿ'], ['Min rating', 'न्यूनतम रेटिंग', 'ಕನಿಷ್ಠ ರೇಟಿಂಗ್'], ['Max price', 'अधिकतम कीमत', 'ಗರಿಷ್ಠ ಬೆಲೆ'],
    ['Pool', 'पूल', 'ಈಜುಕೊಳ'], ['Beach', 'समुद्र तट', 'ಬೀಚ್'], ['Breakfast', 'नाश्ता', 'ಉಪಾಹಾರ'], ['Spa', 'स्पा', 'ಸ್ಪಾ'],
    ['List your hotel', 'अपना होटल जोड़ें', 'ನಿಮ್ಮ ಹೋಟೆಲ್ ಸೇರಿಸಿ'], ['Back to top ↑', 'ऊपर जाएँ ↑', 'ಮೇಲಕ್ಕೆ ↑'],
    ['Make it yours', 'इसे अपना बनाएँ', 'ಇದನ್ನು ನಿಮ್ಮದಾಗಿಸಿ'], ['Continue to payment', 'भुगतान पर जाएँ', 'ಪಾವತಿಗೆ ಮುಂದುವರಿಸಿ'],
    ['Guest name', 'मेहमान का नाम', 'ಅತಿಥಿಯ ಹೆಸರು'], ['Phone', 'फ़ोन', 'ಫೋನ್'], ['Bed setup', 'बिस्तर', 'ಹಾಸಿಗೆ ವ್ಯವಸ್ಥೆ'],
    ['Floor', 'मंज़िल', 'ಮಹಡಿ'], ['Food preference', 'खाने की पसंद', 'ಆಹಾರ ಆದ್ಯತೆ'], ['Total', 'कुल', 'ಒಟ್ಟು'],
    ['Print confirmation', 'पुष्टि प्रिंट करें', 'ದೃಢೀಕರಣ ಮುದ್ರಿಸಿ'], ['Share trip', 'यात्रा शेयर करें', 'ಪ್ರವಾಸ ಹಂಚಿಕೊಳ್ಳಿ'], ['Share', 'शेयर करें', 'ಹಂಚಿಕೊಳ್ಳಿ'],
    ['Cancel stay', 'ठहरना रद्द करें', 'ವಾಸ್ತವ್ಯ ರದ್ದುಮಾಡಿ'], ['Save preferences', 'पसंद सहेजें', 'ಆದ್ಯತೆಗಳನ್ನು ಉಳಿಸಿ'],
    ['Show my matches', 'मेरे मैच दिखाएँ', 'ನನ್ನ ಹೊಂದಾಣಿಕೆಗಳನ್ನು ತೋರಿಸಿ'], ['Your stays', 'आपके ठहराव', 'ನಿಮ್ಮ ವಾಸ್ತವ್ಯಗಳು']
];
const trMap = new Map(TRANSLATIONS.map(([en, hi, kn]) => [en, { hi, kn }]));
const trDone = [];

function trNode(node) {
    if (state.lang === 'en') return;
    const core = node.nodeValue.trim();
    const row = core && trMap.get(core);
    if (!row) return;
    trDone.push([node, node.nodeValue]);
    node.nodeValue = node.nodeValue.replace(core, row[state.lang]);
}

function trTree(root) {
    if (!document.createTreeWalker) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach(trNode);
}

function setLang(lang) {
    trDone.splice(0).forEach(([node, original]) => { node.nodeValue = original; });
    state.lang = lang;
    store.set('lang', lang);
    document.documentElement.lang = lang;
    $('langSelect').value = lang;
    if (lang !== 'en') trTree(document.body);
}
state.lang = 'en';
if (typeof MutationObserver !== 'undefined') {
    new MutationObserver(records => {
        if (state.lang === 'en') return;
        records.forEach(r => r.addedNodes.forEach(n => (n.nodeType === 3 ? trNode(n) : n.nodeType === 1 && trTree(n))));
    }).observe(document.body, { childList: true, subtree: true });
}
$('langSelect').addEventListener('change', () => setLang($('langSelect').value));
setLang(store.get('lang', 'en'));

// ---------- Photo manager: real photo for each hotel, saved on this device ----------
function resizeToDataUrl(file) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        const url = URL.createObjectURL(file);
        img.onload = () => {
            const scale = Math.min(1, 800 / img.width);
            const canvas = document.createElement('canvas');
            canvas.width = Math.round(img.width * scale);
            canvas.height = Math.round(img.height * scale);
            canvas.getContext('2d').drawImage(img, 0, 0, canvas.width, canvas.height);
            URL.revokeObjectURL(url);
            resolve(canvas.toDataURL('image/jpeg', 0.78));
        };
        img.onerror = reject;
        img.src = url;
    });
}

function setHotelPhoto(id, value) {
    if (value) photoOverrides[id] = value; else delete photoOverrides[id];
    try {
        localStorage.setItem('veyora_photoOverrides', JSON.stringify(photoOverrides));
    } catch {
        toast('Browser storage is full. Use smaller photos or reset a few.');
    }
    const hotel = hotels.find(h => h.id === id);
    hotel.image = value || 'images/' + id + '.jpg';
    if (state.activeHotels) renderHotels(state.activeHotels);
}

function openPhotos() {
    openModal(`<div class="modal-kicker">PHOTOS</div><h2 id="modalTitle">Hotel photos</h2>
        <p class="modal-lead">Add the real photo of each hotel: upload a file, or paste an image address. They are saved on this device and used before anything else.</p>
        ${hotels.map(h => `<div class="photo-row"><img src="${esc(h.image)}" alt="" onerror="photoFallback(this,'${esc(h.id)}')">
            <div><strong>${esc(h.name)}</strong><small>${esc(h.area)}</small>
            <div class="photo-controls"><input type="file" accept="image/*" data-up="${esc(h.id)}">
            <input type="url" placeholder="or paste image address" data-url="${esc(h.id)}">
            <button class="outline-button" data-use="${esc(h.id)}">Use</button><button class="modal-link" data-reset="${esc(h.id)}">Reset</button></div></div></div>`).join('')}`);
    const thumb = el => el.closest('.photo-row').querySelector('img');
    modalBody.querySelectorAll('[data-up]').forEach(input => input.addEventListener('change', () => {
        const file = input.files[0];
        if (!file) return;
        resizeToDataUrl(file).then(data => { setHotelPhoto(input.dataset.up, data); thumb(input).src = data; toast('Photo saved.'); })
            .catch(() => toast('Could not read that image.'));
    }));
    modalBody.querySelectorAll('[data-use]').forEach(button => button.addEventListener('click', () => {
        const value = modalBody.querySelector(`[data-url="${button.dataset.use}"]`).value.trim();
        if (!/^https?:\/\//i.test(value)) { toast('Paste an image address that starts with https://'); return; }
        setHotelPhoto(button.dataset.use, value);
        thumb(button).src = value;
        toast('Photo saved. If it does not show, that site blocks other pages: upload the file instead.');
    }));
    modalBody.querySelectorAll('[data-reset]').forEach(button => button.addEventListener('click', () => {
        setHotelPhoto(button.dataset.reset, null);
        thumb(button).src = hotels.find(h => h.id === button.dataset.reset).image;
    }));
}
$('photoLink').addEventListener('click', event => { event.preventDefault(); openPhotos(); });
