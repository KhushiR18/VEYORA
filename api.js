// All data calls go through here. Today it saves in the browser (localStorage).
// When the Java backend is ready, set BASE_URL (e.g. 'http://localhost:8080/api') and
// these same calls will go to it. Agree the JSON shapes with the backend team first.
const API = {
    BASE_URL: null,
    _local(key, fallback) { try { return JSON.parse(localStorage.getItem('veyora_' + key)) ?? fallback; } catch { return fallback; } },
    _save(key, value) { try { localStorage.setItem('veyora_' + key, JSON.stringify(value)); } catch {} },
    async _call(path, method = 'GET', body) {
        const res = await fetch(this.BASE_URL + path, { method, headers: { 'Content-Type': 'application/json' }, body: body && JSON.stringify(body) });
        if (!res.ok) throw new Error('Request failed: ' + res.status);
        return res.json();
    },
    async listBookings() { return this.BASE_URL ? this._call('/bookings') : this._local('trips', []); },
    async createBooking(booking) {
        if (this.BASE_URL) return this._call('/bookings', 'POST', booking);
        this._save('trips', [booking, ...this._local('trips', []).filter(t => t.ref !== booking.ref)]); return booking;
    },
    async cancelBooking(ref) {
        if (this.BASE_URL) return this._call('/bookings/' + encodeURIComponent(ref), 'DELETE');
        this._save('trips', this._local('trips', []).filter(t => t.ref !== ref)); return { ref };
    },
    // null means "use the built-in data in the page". Shapes: see hotels.json and README.md.
    async getHotels() { return this.BASE_URL ? this._call('/hotels') : null; },
    async saveHotel(hotel) { return this.BASE_URL ? this._call('/hotels', 'POST', hotel) : hotel; },
    async getCityGuide(slug) { return this.BASE_URL ? this._call('/cities/' + encodeURIComponent(slug) + '/guide') : null; },
    async getCityTours(slug) { return this.BASE_URL ? this._call('/cities/' + encodeURIComponent(slug) + '/tours') : null; }
};
