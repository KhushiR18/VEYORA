"""Downloads a real photo of each place from Wikimedia Commons into images/<hotel id>.jpg.
Run once on your own computer (needs internet):   python fetch_photos.py
Photos you already saved by hand are never overwritten."""
import json, os, urllib.parse, urllib.request

UA = {'User-Agent': 'VeyoraStudentProject/1.0 (college demo)'}
HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, 'images')

QUERIES = {
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
    # front-page slideshow (wide photos)
    'hero-goa': 'Goa beach sunset', 'hero-jaipur': 'Hawa Mahal Jaipur',
    'hero-udaipur': 'Lake Pichola Udaipur City Palace', 'hero-kochi': 'Kerala backwaters houseboat',
    'hero-varanasi': 'Varanasi ghats Ganges', 'hero-shimla': 'Shimla Himalaya',
    'hero-agra': 'Taj Mahal Agra sunrise', 'hero-mumbai': 'Gateway of India Mumbai', 'hero-delhi': 'India Gate Delhi',
    'hero-hyderabad': 'Charminar Hyderabad', 'hero-kolkata': 'Howrah Bridge Kolkata', 'hero-manali': 'Manali Himachal snow',
    'hero-chennai': 'Marina Beach Chennai', 'hero-bengaluru': 'Vidhana Soudha Bangalore',
}

def call(url):
    with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=30) as r:
        return r.read()

def search(query, width=1000, minw=1200):
    params = {'action': 'query', 'format': 'json', 'generator': 'search', 'gsrnamespace': 6,
              'gsrsearch': query, 'gsrlimit': 15, 'prop': 'imageinfo',
              'iiprop': 'url|size|mime', 'iiurlwidth': width}
    data = json.loads(call('https://commons.wikimedia.org/w/api.php?' + urllib.parse.urlencode(params)))
    pages = sorted(data.get('query', {}).get('pages', {}).values(), key=lambda p: p.get('index', 0))
    for page in pages:
        info = (page.get('imageinfo') or [{}])[0]
        if info.get('mime') == 'image/jpeg' and info.get('width', 0) >= minw \
                and info.get('width', 0) > info.get('height', 1) and info.get('thumburl'):
            yield info

os.makedirs(OUT, exist_ok=True)
used, credits, missing = set(), [], []
for hotel_id, query in QUERIES.items():
    path = os.path.join(OUT, hotel_id + '.jpg')
    if os.path.exists(path):
        print('kept   ', hotel_id); continue
    try:
        info = next((i for i in search(query, *((2000, 1800) if hotel_id.startswith('hero-') else (1000, 1200))) if i['thumburl'] not in used), None)
        if not info:
            raise LookupError('no suitable photo')
        with open(path, 'wb') as f:
            f.write(call(info['thumburl']))
        used.add(info['thumburl'])
        credits.append(f"{hotel_id}.jpg  {info['descriptionurl']}")
        print('saved  ', hotel_id)
    except Exception as e:
        missing.append(hotel_id); print('missing', hotel_id, '-', e)

if credits:
    with open(os.path.join(OUT, 'CREDITS.txt'), 'a') as f:
        f.write('\n'.join(credits) + '\n')
print('\nStill need a photo by hand:', ', '.join(missing) or 'none')
