/**
 * Prestige Motors — Pre-Owned Luxury Car Marketplace
 * Vanilla JavaScript Application Architecture
 */

document.addEventListener('DOMContentLoaded', () => {
  // SVG Data-URI Fallback for any offline or broken remote car images
  const FALLBACK_IMAGE =
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="500" viewBox="0 0 800 500">
        <rect width="800" height="500" fill="#181818"/>
        <circle cx="400" cy="230" r="95" fill="none" stroke="#C6A15B" stroke-width="3" opacity="0.5"/>
        <path d="M270 265 L325 200 L475 200 L530 265 Z" fill="none" stroke="#C6A15B" stroke-width="4"/>
        <circle cx="320" cy="275" r="22" fill="#C6A15B"/>
        <circle cx="480" cy="275" r="22" fill="#C6A15B"/>
        <text x="400" y="365" text-anchor="middle" fill="#C6A15B" font-family="sans-serif" font-size="22" font-weight="bold" letter-spacing="4">PRESTIGE MOTORS STUDIO</text>
      </svg>
    `);

  // =========================================================================
  // 1. CENTRAL DUMMY DATA ARRAY (12 Curated Indian Luxury Listings)
  // =========================================================================
  const INITIAL_CARS = [
    {
      id: 'pm-101',
      brand: 'Mercedes-Benz',
      model: 'E-Class E 200 Exclusive',
      year: 2022,
      price: 5800000,
      mileage: 18400,
      fuel: 'Petrol',
      transmission: 'Automatic',
      bodyType: 'Sedan',
      ownership: '1st Owner',
      registration: 'MH-01 (Mumbai)',
      location: 'Mumbai, MH',
      badge: 'Verified',
      engine: '1991 cc Turbo I4 (197 PS)',
      exteriorColor: 'Obsidian Black Metallic',
      interiorColor: 'Macchiato Beige Leather',
      insurance: 'Comprehensive Valid till Nov 2026',
      serviceHistory: 'Complete Authorized Mercedes-Benz Records',
      inspectionStatus: '210-Point Passed (9.8/10)',
      seller: 'Prestige Motors Flagship Lounge, Worli, Mumbai (Demo)',
      addedTimestamp: 1714000012,
      features: ['Burmester 3D Surround', 'Panoramic Sunroof', 'Rear Chauffeur Package', '360° Camera', '64-Color Ambient Lighting'],
      images: [
        'https://images.unsplash.com/photo-1618843479319-561729142657?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1000&q=80'
      ]
    },
    {
      id: 'pm-102',
      brand: 'BMW',
      model: '5 Series 530i M Sport',
      year: 2021,
      price: 4950000,
      mileage: 24200,
      fuel: 'Petrol',
      transmission: 'Automatic',
      bodyType: 'Sedan',
      ownership: '1st Owner',
      registration: 'DL-10 (New Delhi)',
      location: 'New Delhi, DL',
      badge: 'Premium Pick',
      engine: '1998 cc TwinPower Turbo (252 PS)',
      exteriorColor: 'Phytonic Blue Metallic',
      interiorColor: 'Cognac Dakota Leather',
      insurance: 'Zero-Dep Valid till Aug 2026',
      serviceHistory: 'Authorized BMW Bird Automotive History',
      inspectionStatus: '210-Point Passed (9.6/10)',
      seller: 'Prestige Motors NCR Experience Center (Demo)',
      addedTimestamp: 1714000011,
      features: ['Harman Kardon Audio', 'Adaptive LED Laserlight', 'M Aerodynamics Package', 'Gesture Control', 'Digital Key Display'],
      images: [
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=1000&q=80'
      ]
    },
    {
      id: 'pm-103',
      brand: 'Audi',
      model: 'Q7 Premium Plus 55 TFSI',
      year: 2022,
      price: 7200000,
      mileage: 19800,
      fuel: 'Petrol',
      transmission: 'Automatic',
      bodyType: 'SUV',
      ownership: '1st Owner',
      registration: 'KA-01 (Bengaluru)',
      location: 'Bengaluru, KA',
      badge: 'Verified',
      engine: '2995 cc V6 Turbo Mild-Hybrid (340 PS)',
      exteriorColor: 'Mythos Black',
      interiorColor: 'Saiga Beige Cricket Leather',
      insurance: 'Comprehensive Valid till Jan 2027',
      serviceHistory: 'Complete Audi Bengaluru Service Dossier',
      inspectionStatus: '210-Point Passed (9.7/10)',
      seller: 'Prestige Motors UB City Boutique, Bengaluru (Demo)',
      addedTimestamp: 1714000010,
      features: ['Quattro All-Wheel Drive', 'Adaptive Air Suspension', '7-Seater Executive Layout', 'Virtual Cockpit Plus', 'Bang & Olufsen 3D Sound'],
      images: [
        'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1000&q=80'
      ]
    },
    {
      id: 'pm-104',
      brand: 'Jaguar',
      model: 'F-Pace R-Dynamic S',
      year: 2021,
      price: 6100000,
      mileage: 22500,
      fuel: 'Diesel',
      transmission: 'Automatic',
      bodyType: 'SUV',
      ownership: '1st Owner',
      registration: 'TS-09 (Hyderabad)',
      location: 'Hyderabad, TS',
      badge: 'Verified',
      engine: '1997 cc Ingenium Turbo Diesel (204 PS)',
      exteriorColor: 'Portofino Blue',
      interiorColor: 'Mars Red Windsor Leather',
      insurance: 'Comprehensive Valid till Dec 2026',
      serviceHistory: 'Complete JLR Authorized Service',
      inspectionStatus: '210-Point Passed (9.5/10)',
      seller: 'Prestige Motors Jubilee Hills Partner (Demo)',
      addedTimestamp: 1714000009,
      features: ['Pivi Pro 11.4" Curved Glass', 'Meridian Sound System', 'All-Wheel Drive', 'Cabin Air Ionisation', 'Pixel LED Headlights'],
      images: [
        'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80'
      ]
    },
    {
      id: 'pm-105',
      brand: 'Land Rover',
      model: 'Discovery Sport R-Dynamic SE',
      year: 2022,
      price: 5500000,
      mileage: 21000,
      fuel: 'Diesel',
      transmission: 'Automatic',
      bodyType: 'SUV',
      ownership: '1st Owner',
      registration: 'MH-12 (Pune)',
      location: 'Pune, MH',
      badge: 'Premium Pick',
      engine: '1999 cc Ingenium Diesel (204 PS)',
      exteriorColor: 'Santorini Black',
      interiorColor: 'Ebony DuoLeather',
      insurance: 'Zero-Dep Valid till Oct 2026',
      serviceHistory: 'Full Land Rover Authorized Records',
      inspectionStatus: '210-Point Passed (9.6/10)',
      seller: 'Prestige Motors Koregaon Park Partner (Demo)',
      addedTimestamp: 1714000008,
      features: ['Terrain Response 2', 'ClearSight Ground View', '5+2 Versatile Seating', 'Wade Sensing', 'Meridian Surround Audio'],
      images: [
        'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80'
      ]
    },
    {
      id: 'pm-106',
      brand: 'Porsche',
      model: 'Macan 2.0 Turbo PDK',
      year: 2021,
      price: 8500000,
      mileage: 14200,
      fuel: 'Petrol',
      transmission: 'Automatic',
      bodyType: 'SUV',
      ownership: '1st Owner',
      registration: 'MH-02 (Mumbai)',
      location: 'Mumbai, MH',
      badge: 'Premium Pick',
      engine: '1984 cc Turbocharged Inline-4 (265 PS)',
      exteriorColor: 'Crayon Grey Special',
      interiorColor: 'Bordeaux Red Leather Package',
      insurance: 'Porsche Approved Warranty + Zero-Dep',
      serviceHistory: 'Porsche Centre Mumbai Complete Log',
      inspectionStatus: '210-Point Passed (9.9/10)',
      seller: 'Prestige Motors Flagship Lounge, Worli, Mumbai (Demo)',
      addedTimestamp: 1714000007,
      features: ['Sport Chrono Package', '7-Speed PDK Dual-Clutch', 'PASM Active Suspension', '14-Way Comfort Memory Seats', 'BOSE Surround System'],
      images: [
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=1000&q=80'
      ]
    },
    {
      id: 'pm-107',
      brand: 'Volvo',
      model: 'XC60 B5 Ultimate Mild-Hybrid',
      year: 2023,
      price: 6200000,
      mileage: 9800,
      fuel: 'Hybrid',
      transmission: 'Automatic',
      bodyType: 'SUV',
      ownership: '1st Owner',
      registration: 'HR-26 (Gurugram)',
      location: 'Gurugram, HR',
      badge: 'Verified',
      engine: '1969 cc Turbo Petrol 48V Hybrid (250 PS)',
      exteriorColor: 'Crystal White Pearl',
      interiorColor: 'Amber Ventilated Nappa Leather',
      insurance: 'Comprehensive Valid till Mar 2027',
      serviceHistory: 'Authorized Volvo Scandinavian Service',
      inspectionStatus: '210-Point Passed (9.8/10)',
      seller: 'Prestige Motors NCR Experience Center (Demo)',
      addedTimestamp: 1714000006,
      features: ['Bowers & Wilkins 15-Speaker Audio', 'Orrefors Crystal Gear Shifter', 'Front Massage Seats', 'Pilot Assist ADAS', 'CleanZone Air Purifier'],
      images: [
        'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=80'
      ]
    },
    {
      id: 'pm-108',
      brand: 'Lexus',
      model: 'ES 300h Luxury Self-Charging Hybrid',
      year: 2022,
      price: 5900000,
      mileage: 15600,
      fuel: 'Hybrid',
      transmission: 'Automatic',
      bodyType: 'Sedan',
      ownership: '1st Owner',
      registration: 'TN-07 (Chennai)',
      location: 'Chennai, TN',
      badge: 'Verified',
      engine: '2487 cc Atkinson Cycle Hybrid (218 PS)',
      exteriorColor: 'Sonic Titanium',
      interiorColor: 'Topaz Brown Semi-Aniline Leather',
      insurance: 'Zero-Dep Valid till Sep 2026',
      serviceHistory: 'Lexus Guest Experience Center Chennai',
      inspectionStatus: '210-Point Passed (9.9/10)',
      seller: 'Prestige Motors Chennai Partner Lounge (Demo)',
      addedTimestamp: 1714000005,
      features: ['Mark Levinson 17-Speaker PurePlay', 'Rear Seat Power Recline', 'Whisper-Quiet Acoustic Glass', 'Heads-Up Display', '22 km/l Hybrid Efficiency'],
      images: [
        'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1618843479319-561729142657?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80'
      ]
    },
    {
      id: 'pm-109',
      brand: 'BMW',
      model: 'X5 xDrive40i M Sport',
      year: 2022,
      price: 8900000,
      mileage: 16900,
      fuel: 'Petrol',
      transmission: 'Automatic',
      bodyType: 'SUV',
      ownership: '1st Owner',
      registration: 'MH-01 (Mumbai)',
      location: 'Mumbai, MH',
      badge: 'Premium Pick',
      engine: '2998 cc TwinPower Turbo Inline-6 (340 PS)',
      exteriorColor: 'Carbon Black Metallic',
      interiorColor: 'Tartufo Merino Leather',
      insurance: 'Comprehensive Valid till Dec 2026',
      serviceHistory: 'Authorized Infinity BMW Service Log',
      inspectionStatus: '210-Point Passed (9.8/10)',
      seller: 'Prestige Motors Flagship Lounge, Worli, Mumbai (Demo)',
      addedTimestamp: 1714000004,
      features: ['Panorama Glass Roof Sky Lounge', '2-Axle Air Suspension', 'CraftedClarity Glass Controls', 'M Sport Exhaust', 'Laserlight Headlamps'],
      images: [
        'https://images.unsplash.com/photo-1556189250-72ba954cfc2b?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80'
      ]
    },
    {
      id: 'pm-110',
      brand: 'Mercedes-Benz',
      model: 'GLC 300 4MATIC Avantgarde',
      year: 2023,
      price: 6700000,
      mileage: 11200,
      fuel: 'Petrol',
      transmission: 'Automatic',
      bodyType: 'SUV',
      ownership: '1st Owner',
      registration: 'KA-03 (Bengaluru)',
      location: 'Bengaluru, KA',
      badge: 'Verified',
      engine: '1999 cc Turbo 48V ISG Mild-Hybrid (258 PS)',
      exteriorColor: 'Selenite Grey',
      interiorColor: 'Sienna Brown Artico',
      insurance: 'Zero-Dep Valid till Apr 2027',
      serviceHistory: 'Sundaram Motors Mercedes-Benz Verified',
      inspectionStatus: '210-Point Passed (9.9/10)',
      seller: 'Prestige Motors UB City Boutique, Bengaluru (Demo)',
      addedTimestamp: 1714000003,
      features: ['11.9" Portrait MBUX Touchscreen', 'Transparent Bonnet Off-Road View', 'Burmester Surround Sound', '9G-TRONIC Transmission', 'Memory Package'],
      images: [
        'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1618843479319-561729142657?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1000&q=80'
      ]
    },
    {
      id: 'pm-111',
      brand: 'Audi',
      model: 'A6 45 TFSI Technology',
      year: 2021,
      price: 4300000,
      mileage: 27800,
      fuel: 'Petrol',
      transmission: 'Automatic',
      bodyType: 'Sedan',
      ownership: '1st Owner',
      registration: 'DL-08 (New Delhi)',
      location: 'New Delhi, DL',
      badge: 'Verified',
      engine: '1984 cc TFSI Turbo Petrol (245 PS)',
      exteriorColor: 'Firmament Blue Metallic',
      interiorColor: 'Okapi Brown Milano Leather',
      insurance: 'Comprehensive Valid till Jul 2026',
      serviceHistory: 'Audi Delhi South Full Service History',
      inspectionStatus: '210-Point Passed (9.5/10)',
      seller: 'Prestige Motors NCR Experience Center (Demo)',
      addedTimestamp: 1714000002,
      features: ['Matrix LED Headlamps', 'Dual Haptic MMI Touch Screens', 'Bang & Olufsen Premium Sound', '4-Zone Deluxe Climate Control', 'Hands-Free Tailgate'],
      images: [
        'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1000&q=80'
      ]
    },
    {
      id: 'pm-112',
      brand: 'Mini',
      model: 'Cooper S 3-Door JCW Inspired',
      year: 2022,
      price: 3800000,
      mileage: 12400,
      fuel: 'Petrol',
      transmission: 'Automatic',
      bodyType: 'Hatchback',
      ownership: '1st Owner',
      registration: 'MH-14 (Pune)',
      location: 'Pune, MH',
      badge: 'Premium Pick',
      engine: '1998 cc TwinPower Turbo (192 PS)',
      exteriorColor: 'British Racing Green IV',
      interiorColor: 'Carbon Black Dinamica/Leather',
      insurance: 'Zero-Dep Valid till Nov 2026',
      serviceHistory: 'Bavaria Motors Authorized Mini Log',
      inspectionStatus: '210-Point Passed (9.7/10)',
      seller: 'Prestige Motors Koregaon Park Partner (Demo)',
      addedTimestamp: 1714000001,
      features: ['John Cooper Works Aero Kit', 'Harman Kardon Hi-Fi', 'Go-Kart Driving Modes', 'Union Jack LED Tail Lamps', 'Dual-Pane Panoramic Roof'],
      images: [
        'https://images.unsplash.com/photo-1580274455191-1c62238fa333?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80',
        'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80'
      ]
    }
  ];

  // =========================================================================
  // 2. APPLICATION STATE & LOCALSTORAGE PERSISTENCE
  // =========================================================================
  const STORAGE_KEYS = {
    WISHLIST: 'prestige_motors_wishlist_v1',
    COMPARE: 'prestige_motors_compare_v1',
    USER_CARS: 'prestige_motors_user_cars_v1'
  };

  function loadFromStorage(key, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch {
      return fallback;
    }
  }

  function saveToStorage(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignore storage quota errors in restricted environments
    }
  }

  const userSubmittedCars = loadFromStorage(STORAGE_KEYS.USER_CARS, []);
  const carsCatalog = [...userSubmittedCars, ...INITIAL_CARS];
  let wishlistIds = loadFromStorage(STORAGE_KEYS.WISHLIST, []);
  let compareIds = loadFromStorage(STORAGE_KEYS.COMPARE, ['pm-101', 'pm-102']);
  let specialCategoryMode = ''; // e.g., 'Performance' or 'HybridElectric'

  // =========================================================================
  // 3. UTILITY HELPERS (Indian Currency, Safe Escaping, EMI)
  // =========================================================================
  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
  }

  function formatINR(amount) {
    return '₹' + Number(amount).toLocaleString('en-IN');
  }

  function calculateIllustrativeEMI(price) {
    // Illustrative 80% finance over 60 months @ 8.9% p.a.
    const principal = price * 0.8;
    const monthlyRate = 0.089 / 12;
    const months = 60;
    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
    return formatINR(Math.round(emi)) + '/mo';
  }

  function showNotification(message) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    container.appendChild(toast);
    setTimeout(() => {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s ease';
      setTimeout(() => toast.remove(), 300);
    }, 3600);
  }

  // Attach graceful image error fallback globally
  document.addEventListener(
    'error',
    (event) => {
      const target = event.target;
      if (target && target.tagName === 'IMG' && target.src !== FALLBACK_IMAGE) {
        target.src = FALLBACK_IMAGE;
      }
    },
    true
  );

  // =========================================================================
  // 4. CORE RENDERING & FILTERING ARCHITECTURE
  // =========================================================================
  function renderCarCard(car) {
    const isWishlisted = wishlistIds.includes(car.id);
    const isCompared = compareIds.includes(car.id);
    const primaryImg = (car.images && car.images[0]) || FALLBACK_IMAGE;

    return `
      <article class="car-card" data-car-id="${escapeHTML(car.id)}">
        <div class="car-media">
          <img
            src="${escapeHTML(primaryImg)}"
            alt="${escapeHTML(car.year + ' ' + car.brand + ' ' + car.model)}"
            loading="lazy"
          />
          <span class="car-badge">${escapeHTML(car.badge || 'Verified')}</span>
          <button
            type="button"
            class="wishlist-btn ${isWishlisted ? 'active' : ''}"
            data-action="toggle-wishlist"
            data-id="${escapeHTML(car.id)}"
            aria-label="${isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}"
            title="${isWishlisted ? 'Saved in Wishlist' : 'Save to Wishlist'}"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="${isWishlisted ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        </div>

        <div class="car-body">
          <div class="car-meta-top">
            <span class="car-brand-label">${escapeHTML(car.brand)}</span>
            <span>${escapeHTML(car.year)} &bull; ${escapeHTML(car.ownership)}</span>
          </div>

          <h3 class="car-title">${escapeHTML(car.model)}</h3>

          <div class="car-price-row">
            <span class="car-price">${formatINR(car.price)}</span>
            <span class="car-emi-hint">Est. ${calculateIllustrativeEMI(car.price)}</span>
          </div>

          <div class="car-specs-grid">
            <div class="spec-pill" title="Kilometers Driven">
              <span class="spec-dot"></span>
              <span>${Number(car.mileage).toLocaleString('en-IN')} km</span>
            </div>
            <div class="spec-pill" title="Fuel Type">
              <span class="spec-dot"></span>
              <span>${escapeHTML(car.fuel)}</span>
            </div>
            <div class="spec-pill" title="Transmission">
              <span class="spec-dot"></span>
              <span>${escapeHTML(car.transmission)}</span>
            </div>
            <div class="spec-pill" title="Location">
              <span class="spec-dot"></span>
              <span>${escapeHTML(car.location)}</span>
            </div>
          </div>

          <div class="car-card-actions">
            <button
              type="button"
              class="compare-toggle-btn ${isCompared ? 'active' : ''}"
              data-action="toggle-compare"
              data-id="${escapeHTML(car.id)}"
              aria-pressed="${isCompared}"
            >
              ${isCompared ? '✓ In Compare' : '+ Compare'}
            </button>
            <button
              type="button"
              class="btn btn-gold btn-sm"
              data-action="open-details"
              data-id="${escapeHTML(car.id)}"
            >
              View Details
            </button>
          </div>
        </div>
      </article>
    `;
  }

  function sortCars(list) {
    const sortValue = document.getElementById('sort-select').value;
    const copy = [...list];
    if (sortValue === 'price-asc') {
      copy.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-desc') {
      copy.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'year-desc') {
      copy.sort((a, b) => b.year - a.year || b.price - a.price);
    } else {
      copy.sort((a, b) => (b.addedTimestamp || 0) - (a.addedTimestamp || 0));
    }
    return copy;
  }

  function filterCars() {
    const keyword = document.getElementById('filter-search').value.trim().toLowerCase();
    const brand = document.getElementById('filter-brand').value;
    const minPrice = Number(document.getElementById('filter-min-price').value) || 0;
    const maxPrice = Number(document.getElementById('filter-max-price').value) || 999999999;
    const minYear = Number(document.getElementById('filter-year').value) || 0;
    const fuel = document.getElementById('filter-fuel').value;
    const transmission = document.getElementById('filter-transmission').value;
    const body = document.getElementById('filter-body').value;
    const maxMileage = Number(document.getElementById('filter-mileage').value) || 999999;

    const filtered = carsCatalog.filter((car) => {
      if (keyword) {
        const haystack = `${car.brand} ${car.model} ${car.location} ${car.fuel} ${car.bodyType} ${(car.features || []).join(' ')}`.toLowerCase();
        if (!haystack.includes(keyword)) return false;
      }
      if (brand && car.brand !== brand) return false;
      if (car.price < minPrice || car.price > maxPrice) return false;
      if (minYear && car.year < minYear) return false;
      if (fuel && car.fuel !== fuel) return false;
      if (transmission && car.transmission !== transmission) return false;
      if (body && car.bodyType !== body) return false;
      if (car.mileage > maxMileage) return false;

      if (specialCategoryMode === 'Performance') {
        const isPerf =
          car.brand === 'Porsche' ||
          car.brand === 'Mini' ||
          car.model.toLowerCase().includes('m sport') ||
          car.model.toLowerCase().includes('r-dynamic');
        if (!isPerf) return false;
      } else if (specialCategoryMode === 'HybridElectric') {
        if (car.fuel !== 'Hybrid' && car.fuel !== 'Electric') return false;
      }

      return true;
    });

    return sortCars(filtered);
  }

  function renderCars() {
    const grid = document.getElementById('cars-grid');
    const emptyState = document.getElementById('inventory-empty-state');
    const counter = document.getElementById('results-counter');
    const hint = document.getElementById('active-filter-hint');

    const matchingCars = filterCars();

    counter.textContent = `Showing ${matchingCars.length} of ${carsCatalog.length} luxury vehicles`;

    if (specialCategoryMode === 'Performance') {
      hint.textContent = 'Active Preset: Track & Performance Lineage Vehicles';
    } else if (specialCategoryMode === 'HybridElectric') {
      hint.textContent = 'Active Preset: Hybrid & Electric Eco-Luxury Vehicles';
    } else {
      const selectedBrand = document.getElementById('filter-brand').value;
      hint.textContent = selectedBrand
        ? `Filtered by Marque: ${selectedBrand}`
        : 'Showing certified luxury vehicles matching your criteria.';
    }

    if (matchingCars.length === 0) {
      grid.innerHTML = '';
      emptyState.classList.remove('hidden');
    } else {
      emptyState.classList.add('hidden');
      grid.innerHTML = matchingCars.map((car) => renderCarCard(car)).join('');
    }
  }

  function resetFilters() {
    document.getElementById('filter-form').reset();
    document.getElementById('hero-search-form').reset();
    specialCategoryMode = '';
    document.querySelectorAll('.brand-tile').forEach((tile) => tile.classList.remove('active'));
    renderCars();
    showNotification('All search filters have been reset.');
  }

  // =========================================================================
  // 5. CAR DETAILS MODAL VIEW
  // =========================================================================
  function openCarDetails(carId) {
    const car = carsCatalog.find((c) => c.id === carId);
    if (!car) return;

    const modal = document.getElementById('car-details-modal');
    const container = document.getElementById('car-details-content');
    const isWishlisted = wishlistIds.includes(car.id);
    const images = car.images && car.images.length ? car.images : [FALLBACK_IMAGE];

    container.innerHTML = `
      <div class="detail-grid">
        <div class="detail-gallery">
          <img
            src="${escapeHTML(images[0])}"
            alt="${escapeHTML(car.brand + ' ' + car.model)}"
            class="detail-main-img"
            id="detail-active-image"
          />
          <div class="detail-thumbs">
            ${images
              .map(
                (imgUrl, idx) => `
              <button
                type="button"
                class="detail-thumb ${idx === 0 ? 'active' : ''}"
                data-action="switch-gallery-image"
                data-src="${escapeHTML(imgUrl)}"
                aria-label="View angle ${idx + 1}"
              >
                <img src="${escapeHTML(imgUrl)}" alt="Thumbnail ${idx + 1}" />
              </button>
            `
              )
              .join('')}
          </div>
        </div>

        <div class="detail-summary">
          <span class="eyebrow">${escapeHTML(car.brand)} &bull; ${escapeHTML(car.badge || 'CERTIFIED')}</span>
          <h2 id="detail-modal-title" class="section-title">${escapeHTML(car.year)} ${escapeHTML(car.model)}</h2>
          <div class="detail-price-tag">${formatINR(car.price)}</div>
          <div class="detail-emi-box">
            <strong>Illustrative Finance Estimate:</strong> ${calculateIllustrativeEMI(car.price)} (80% on-road financing for 60 months @ 8.9% p.a.)
          </div>

          <div class="detail-specs-table">
            <div class="detail-spec-item">
              <span>Kilometers Driven</span>
              <strong>${Number(car.mileage).toLocaleString('en-IN')} km</strong>
            </div>
            <div class="detail-spec-item">
              <span>Fuel &amp; Transmission</span>
              <strong>${escapeHTML(car.fuel)} &bull; ${escapeHTML(car.transmission)}</strong>
            </div>
            <div class="detail-spec-item">
              <span>Engine &amp; Output</span>
              <strong>${escapeHTML(car.engine || '2.0L Turbocharged')}</strong>
            </div>
            <div class="detail-spec-item">
              <span>Ownership &amp; Reg.</span>
              <strong>${escapeHTML(car.ownership)} &bull; ${escapeHTML(car.registration)}</strong>
            </div>
            <div class="detail-spec-item">
              <span>Exterior / Interior</span>
              <strong>${escapeHTML(car.exteriorColor)} / ${escapeHTML(car.interiorColor)}</strong>
            </div>
            <div class="detail-spec-item">
              <span>Insurance Validity</span>
              <strong>${escapeHTML(car.insurance)}</strong>
            </div>
            <div class="detail-spec-item">
              <span>Service History</span>
              <strong>${escapeHTML(car.serviceHistory)}</strong>
            </div>
            <div class="detail-spec-item">
              <span>Inspection Rating</span>
              <strong>${escapeHTML(car.inspectionStatus)}</strong>
            </div>
          </div>

          <h4>Key Factory Features</h4>
          <div class="detail-features-list">
            ${(car.features || [])
              .map((feat) => `<span class="feature-chip">${escapeHTML(feat)}</span>`)
              .join('')}
          </div>

          <div class="demo-seller-box">
            <strong>Showroom Location:</strong> ${escapeHTML(car.location)}<br/>
            <span>${escapeHTML(car.seller)}</span>
          </div>

          <div class="detail-cta-group">
            <button
              type="button"
              class="btn btn-gold"
              data-action="book-testdrive-car"
              data-id="${escapeHTML(car.id)}"
            >
              Book a Test Drive
            </button>
            <button
              type="button"
              class="btn btn-outline-light"
              data-action="contact-seller-car"
              data-id="${escapeHTML(car.id)}"
            >
              Contact Seller
            </button>
            <button
              type="button"
              class="btn btn-outline-light"
              data-action="toggle-wishlist"
              data-id="${escapeHTML(car.id)}"
            >
              ${isWishlisted ? '♥ Saved in Wishlist' : '♡ Add to Wishlist'}
            </button>
          </div>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
  }

  function closeCarDetails() {
    document.getElementById('car-details-modal').classList.add('hidden');
  }

  // =========================================================================
  // 6. WISHLIST FUNCTIONALITY
  // =========================================================================
  function toggleWishlist(carId) {
    const index = wishlistIds.indexOf(carId);
    const car = carsCatalog.find((c) => c.id === carId);
    if (index > -1) {
      wishlistIds.splice(index, 1);
      showNotification(`Removed ${car ? car.brand + ' ' + car.model : 'vehicle'} from your wishlist.`);
    } else {
      wishlistIds.push(carId);
      showNotification(`Saved ${car ? car.brand + ' ' + car.model : 'vehicle'} to your wishlist.`);
    }
    saveToStorage(STORAGE_KEYS.WISHLIST, wishlistIds);
    renderWishlist();
    renderCars();

    // If details modal is open for this car, refresh it
    const detailModal = document.getElementById('car-details-modal');
    if (!detailModal.classList.contains('hidden')) {
      openCarDetails(carId);
    }
  }

  function renderWishlist() {
    const countEl = document.getElementById('wishlist-count');
    const contentEl = document.getElementById('wishlist-content');
    countEl.textContent = wishlistIds.length;

    const savedCars = wishlistIds
      .map((id) => carsCatalog.find((c) => c.id === id))
      .filter(Boolean);

    if (savedCars.length === 0) {
      contentEl.innerHTML = `
        <div class="empty-state">
          <h3>Your Wishlist is Empty</h3>
          <p>Tap the heart icon on any luxury vehicle to save it here for quick comparison or test-drive scheduling.</p>
        </div>
      `;
      return;
    }

    contentEl.innerHTML = savedCars
      .map(
        (car) => `
        <div class="wishlist-item">
          <img src="${escapeHTML((car.images && car.images[0]) || FALLBACK_IMAGE)}" alt="${escapeHTML(car.model)}" />
          <div class="wishlist-item-info">
            <h4>${escapeHTML(car.year)} ${escapeHTML(car.brand)} ${escapeHTML(car.model)}</h4>
            <span>${formatINR(car.price)} &bull; ${escapeHTML(car.location)}</span>
          </div>
          <div style="display:flex; gap:8px;">
            <button type="button" class="btn btn-gold btn-sm" data-action="open-details" data-id="${escapeHTML(car.id)}">View</button>
            <button type="button" class="btn btn-outline-light btn-sm" data-action="toggle-wishlist" data-id="${escapeHTML(car.id)}">Remove</button>
          </div>
        </div>
      `
      )
      .join('');
  }

  // =========================================================================
  // 7. SIDE-BY-SIDE CAR COMPARISON (Up to 3 Cars)
  // =========================================================================
  function toggleCompare(carId) {
    const idx = compareIds.indexOf(carId);
    const car = carsCatalog.find((c) => c.id === carId);
    if (idx > -1) {
      compareIds.splice(idx, 1);
      showNotification(`Removed ${car ? car.model : 'vehicle'} from comparison.`);
    } else {
      if (compareIds.length >= 3) {
        showNotification('You can compare up to 3 vehicles at a time. Remove one to add another.');
        return;
      }
      compareIds.push(carId);
      showNotification(`Added ${car ? car.brand + ' ' + car.model : 'vehicle'} to comparison.`);
    }
    saveToStorage(STORAGE_KEYS.COMPARE, compareIds);
    renderComparison();
    renderCars();
  }

  function renderComparison() {
    const container = document.getElementById('compare-container');
    const navBadge = document.getElementById('nav-compare-count');
    navBadge.textContent = compareIds.length;

    const selected = compareIds
      .map((id) => carsCatalog.find((c) => c.id === id))
      .filter(Boolean);

    if (selected.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <h3>No Vehicles Selected for Comparison</h3>
          <p>Click the "+ Compare" button on up to 3 luxury vehicles in our inventory above to evaluate them side by side.</p>
        </div>
      `;
      return;
    }

    const lowestPrice = Math.min(...selected.map((c) => c.price));
    const newestYear = Math.max(...selected.map((c) => c.year));

    container.innerHTML = `
      <div class="compare-table-wrapper">
        <table class="compare-table" aria-label="Vehicle Comparison Table">
          <thead>
            <tr>
              <th>Specification</th>
              ${selected
                .map(
                  (car) => `
                <td>
                  <div class="compare-car-header">
                    <img src="${escapeHTML((car.images && car.images[0]) || FALLBACK_IMAGE)}" alt="${escapeHTML(car.model)}" />
                    <span class="eyebrow">${escapeHTML(car.brand)}</span>
                    <h4>${escapeHTML(car.model)}</h4>
                    <div style="margin-top:10px; display:flex; gap:8px;">
                      <button type="button" class="btn btn-gold btn-sm" data-action="open-details" data-id="${escapeHTML(car.id)}">Details</button>
                      <button type="button" class="btn btn-outline-light btn-sm" data-action="toggle-compare" data-id="${escapeHTML(car.id)}">Remove</button>
                    </div>
                  </div>
                </td>
              `
                )
                .join('')}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>Price (INR)</th>
              ${selected
                .map(
                  (car) => `
                <td>
                  <strong style="color:var(--gold-light); font-size:1.15rem;">${formatINR(car.price)}</strong>
                  ${car.price === lowestPrice && selected.length > 1 ? '<span class="compare-highlight">Lowest Price</span>' : ''}
                </td>
              `
                )
                .join('')}
            </tr>
            <tr>
              <th>Model Year</th>
              ${selected
                .map(
                  (car) => `
                <td>
                  <strong>${escapeHTML(car.year)}</strong>
                  ${car.year === newestYear && selected.length > 1 ? '<span class="compare-highlight">Newest Year</span>' : ''}
                </td>
              `
                )
                .join('')}
            </tr>
            <tr>
              <th>Kilometers Driven</th>
              ${selected.map((car) => `<td>${Number(car.mileage).toLocaleString('en-IN')} km</td>`).join('')}
            </tr>
            <tr>
              <th>Fuel &amp; Transmission</th>
              ${selected.map((car) => `<td>${escapeHTML(car.fuel)} &bull; ${escapeHTML(car.transmission)}</td>`).join('')}
            </tr>
            <tr>
              <th>Body Style</th>
              ${selected.map((car) => `<td>${escapeHTML(car.bodyType)}</td>`).join('')}
            </tr>
            <tr>
              <th>Engine Specification</th>
              ${selected.map((car) => `<td>${escapeHTML(car.engine || '2.0L Turbo')}</td>`).join('')}
            </tr>
            <tr>
              <th>Ownership &amp; Reg.</th>
              ${selected.map((car) => `<td>${escapeHTML(car.ownership)} (${escapeHTML(car.registration)})</td>`).join('')}
            </tr>
            <tr>
              <th>Key Highlights</th>
              ${selected
                .map(
                  (car) => `<td>${escapeHTML((car.features || []).slice(0, 4).join(' • '))}</td>`
                )
                .join('')}
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }

  // =========================================================================
  // 8. SELL YOUR CAR FORM SUBMISSION & VALIDATION
  // =========================================================================
  function clearFormErrors(form) {
    form.querySelectorAll('.error-msg').forEach((el) => {
      el.textContent = '';
    });
  }

  function submitSellCarForm(event) {
    event.preventDefault();
    const form = document.getElementById('sell-car-form');
    clearFormErrors(form);

    const name = document.getElementById('seller-name').value.trim();
    const phone = document.getElementById('seller-phone').value.trim();
    const email = document.getElementById('seller-email').value.trim();
    const city = document.getElementById('seller-city').value;
    const brand = document.getElementById('car-brand').value;
    const model = document.getElementById('car-model').value.trim();
    const year = Number(document.getElementById('car-year').value);
    const kms = Number(document.getElementById('car-kms').value);
    const fuel = document.getElementById('car-fuel').value;
    const transmission = document.getElementById('car-transmission').value;
    const bodyType = document.getElementById('car-body').value;
    const price = Number(document.getElementById('car-price').value);
    const imageUrl = document.getElementById('car-image').value.trim();
    const desc = document.getElementById('car-description').value.trim();

    let isValid = true;
    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.length < 3) {
      document.getElementById('err-seller-name').textContent = 'Please enter your full name.';
      isValid = false;
    }
    if (!phoneRegex.test(phone.replace(/\s+/g, ''))) {
      document.getElementById('err-seller-phone').textContent = 'Enter a valid 10-digit Indian mobile number.';
      isValid = false;
    }
    if (!emailRegex.test(email)) {
      document.getElementById('err-seller-email').textContent = 'Enter a valid email address.';
      isValid = false;
    }
    if (!city) {
      document.getElementById('err-seller-city').textContent = 'Please select your city.';
      isValid = false;
    }
    if (!brand) {
      document.getElementById('err-car-brand').textContent = 'Please select a vehicle marque.';
      isValid = false;
    }
    if (model.length < 2) {
      document.getElementById('err-car-model').textContent = 'Please enter the model and variant.';
      isValid = false;
    }
    if (!year || year < 2012 || year > 2026) {
      document.getElementById('err-car-year').textContent = 'Enter a year between 2012 and 2026.';
      isValid = false;
    }
    if (!kms || kms < 100 || kms > 250000) {
      document.getElementById('err-car-kms').textContent = 'Enter valid kilometers driven (100 - 2,50,000).';
      isValid = false;
    }
    if (!fuel) {
      document.getElementById('err-car-fuel').textContent = 'Select fuel type.';
      isValid = false;
    }
    if (!transmission) {
      document.getElementById('err-car-transmission').textContent = 'Select transmission.';
      isValid = false;
    }
    if (!price || price < 1000000) {
      document.getElementById('err-car-price').textContent = 'Enter an expected price of at least ₹10,00,000.';
      isValid = false;
    }
    if (desc.length < 10) {
      document.getElementById('err-car-description').textContent = 'Please add brief condition highlights.';
      isValid = false;
    }

    if (!isValid) return;

    const newCar = {
      id: 'pm-user-' + Date.now(),
      brand,
      model,
      year,
      price,
      mileage: kms,
      fuel,
      transmission,
      bodyType,
      ownership: '1st Owner',
      registration: city.split(',')[0] + ' RTO',
      location: city,
      badge: 'Client Consignment',
      engine: `${fuel} Luxury Powertrain`,
      exteriorColor: 'Signature Metallic',
      interiorColor: 'Bespoke Leather Trim',
      insurance: 'Comprehensive Active',
      serviceHistory: 'Verified Client Submitted Listing',
      inspectionStatus: 'Provisional Demo Listing',
      seller: `${name} via Prestige Concierge (${city}) [Demo]`,
      addedTimestamp: Math.floor(Date.now() / 1000),
      features: desc
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean)
        .slice(0, 5),
      images: [
        imageUrl ||
          'https://images.unsplash.com/photo-1618843479319-561729142657?auto=format&fit=crop&w=1000&q=80'
      ]
    };

    carsCatalog.unshift(newCar);
    userSubmittedCars.unshift(newCar);
    saveToStorage(STORAGE_KEYS.USER_CARS, userSubmittedCars);

    form.reset();
    document.getElementById('sell-image-preview').classList.add('hidden');
    populateTestDriveSelect();
    renderCars();

    showNotification(`Success! Your ${year} ${brand} ${model} has been added to the local demo inventory.`);
    document.getElementById('inventory').scrollIntoView({ behavior: 'smooth' });
  }

  // =========================================================================
  // 9. TEST DRIVE & CONTACT SELLER FORMS
  // =========================================================================
  function populateTestDriveSelect(selectedId) {
    const select = document.getElementById('td-vehicle');
    if (!select) return;
    select.innerHTML = carsCatalog
      .map(
        (car) =>
          `<option value="${escapeHTML(car.id)}" ${car.id === selectedId ? 'selected' : ''}>
            ${escapeHTML(car.year)} ${escapeHTML(car.brand)} ${escapeHTML(car.model)} — ${formatINR(car.price)}
          </option>`
      )
      .join('');
  }

  function openTestDriveModal(carId) {
    populateTestDriveSelect(carId);
    const dateInput = document.getElementById('td-date');
    if (dateInput && !dateInput.value) {
      const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];
      dateInput.min = tomorrow;
      dateInput.value = tomorrow;
    }
    document.getElementById('test-drive-modal').classList.remove('hidden');
  }

  function submitTestDriveForm(event) {
    event.preventDefault();
    const form = document.getElementById('test-drive-form');
    clearFormErrors(form);

    const name = document.getElementById('td-name').value.trim();
    const phone = document.getElementById('td-phone').value.trim();
    const email = document.getElementById('td-email').value.trim();
    const date = document.getElementById('td-date').value;
    const carId = document.getElementById('td-vehicle').value;
    const car = carsCatalog.find((c) => c.id === carId);

    let valid = true;
    if (name.length < 2) {
      document.getElementById('err-td-name').textContent = 'Please enter your name.';
      valid = false;
    }
    if (!/^[6-9]\d{9}$/.test(phone.replace(/\s+/g, ''))) {
      document.getElementById('err-td-phone').textContent = 'Enter a valid 10-digit mobile number.';
      valid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById('err-td-email').textContent = 'Enter a valid email address.';
      valid = false;
    }
    if (!date) {
      document.getElementById('err-td-date').textContent = 'Choose a preferred date.';
      valid = false;
    }

    if (!valid) return;

    document.getElementById('test-drive-modal').classList.add('hidden');
    form.reset();
    showNotification(
      `Demo Test Drive Confirmed for ${car ? car.brand + ' ' + car.model : 'selected vehicle'} on ${date}. (Simulated locally)`
    );
  }

  function openContactSellerModal(carId) {
    const car = carsCatalog.find((c) => c.id === carId) || carsCatalog[0];
    const summary = document.getElementById('contact-seller-summary');
    summary.innerHTML = `
      <strong>Inquiring About:</strong> ${escapeHTML(car.year)} ${escapeHTML(car.brand)} ${escapeHTML(car.model)} (${formatINR(car.price)})<br/>
      <strong>Assigned Demo Dealer:</strong> ${escapeHTML(car.seller)}<br/>
      <span>Demo Helpline: +91 22 6000 0000 (Simulated — no actual call or message is sent)</span>
    `;
    document.getElementById('contact-seller-modal').classList.remove('hidden');
  }

  function submitContactSellerForm(event) {
    event.preventDefault();
    const form = document.getElementById('contact-seller-form');
    clearFormErrors(form);

    const name = document.getElementById('cs-name').value.trim();
    const phone = document.getElementById('cs-phone').value.trim();
    const email = document.getElementById('cs-email').value.trim();
    const message = document.getElementById('cs-message').value.trim();

    let valid = true;
    if (name.length < 2) {
      document.getElementById('err-cs-name').textContent = 'Please enter your name.';
      valid = false;
    }
    if (!/^[6-9]\d{9}$/.test(phone.replace(/\s+/g, ''))) {
      document.getElementById('err-cs-phone').textContent = 'Enter a valid 10-digit phone number.';
      valid = false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      document.getElementById('err-cs-email').textContent = 'Enter a valid email address.';
      valid = false;
    }
    if (message.length < 5) {
      document.getElementById('err-cs-message').textContent = 'Please enter your inquiry message.';
      valid = false;
    }

    if (!valid) return;

    document.getElementById('contact-seller-modal').classList.add('hidden');
    form.reset();
    showNotification('Simulated inquiry recorded locally! In a live system, our concierge would respond shortly.');
  }

  // =========================================================================
  // 10. EVENT DELEGATION & INTERACTIVE LISTENERS
  // =========================================================================
  document.body.addEventListener('click', (event) => {
    const actionBtn = event.target.closest('[data-action]');
    if (actionBtn) {
      const action = actionBtn.getAttribute('data-action');
      const id = actionBtn.getAttribute('data-id');

      if (action === 'open-details') {
        document.getElementById('wishlist-modal').classList.add('hidden');
        openCarDetails(id);
      } else if (action === 'toggle-wishlist') {
        toggleWishlist(id);
      } else if (action === 'toggle-compare') {
        toggleCompare(id);
      } else if (action === 'switch-gallery-image') {
        const src = actionBtn.getAttribute('data-src');
        const mainImg = document.getElementById('detail-active-image');
        if (mainImg && src) mainImg.src = src;
        document.querySelectorAll('.detail-thumb').forEach((t) => t.classList.remove('active'));
        actionBtn.classList.add('active');
      } else if (action === 'book-testdrive-car') {
        closeCarDetails();
        openTestDriveModal(id);
      } else if (action === 'contact-seller-car') {
        closeCarDetails();
        openContactSellerModal(id);
      }
      return;
    }

    // Brand Tiles Filtering
    const brandTile = event.target.closest('.brand-tile');
    if (brandTile) {
      const selectedBrand = brandTile.getAttribute('data-brand');
      specialCategoryMode = '';
      document.querySelectorAll('.brand-tile').forEach((t) => t.classList.remove('active'));
      brandTile.classList.add('active');
      document.getElementById('filter-brand').value = selectedBrand;
      renderCars();
      document.getElementById('inventory').scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // Category Cards Filtering
    const categoryCard = event.target.closest('.category-card');
    if (categoryCard) {
      const cat = categoryCard.getAttribute('data-category-filter');
      document.getElementById('filter-form').reset();
      if (cat === 'Sedan' || cat === 'SUV') {
        specialCategoryMode = '';
        document.getElementById('filter-body').value = cat;
      } else {
        specialCategoryMode = cat;
      }
      renderCars();
      document.getElementById('inventory').scrollIntoView({ behavior: 'smooth' });
      return;
    }

    // Footer Brand Links
    const footerBrand = event.target.closest('[data-footer-brand]');
    if (footerBrand) {
      event.preventDefault();
      const brand = footerBrand.getAttribute('data-footer-brand');
      document.getElementById('filter-form').reset();
      specialCategoryMode = '';
      document.getElementById('filter-brand').value = brand;
      renderCars();
      document.getElementById('inventory').scrollIntoView({ behavior: 'smooth' });
    }
  });

  // Keyboard support for Category Cards
  document.querySelectorAll('.category-card').forEach((card) => {
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });

  // Mobile Hamburger Menu
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mainNav = document.getElementById('main-nav');
  hamburgerBtn.addEventListener('click', () => {
    const isOpen = mainNav.classList.toggle('open');
    hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile nav when clicking a nav link
  mainNav.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', () => {
      mainNav.classList.remove('open');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Hero Quick Search Form
  document.getElementById('hero-search-form').addEventListener('submit', (e) => {
    e.preventDefault();
    specialCategoryMode = '';
    document.getElementById('filter-search').value = document.getElementById('hero-keyword').value;
    document.getElementById('filter-brand').value = document.getElementById('hero-brand').value;
    document.getElementById('filter-min-price').value = document.getElementById('hero-min-price').value;
    document.getElementById('filter-max-price').value = document.getElementById('hero-max-price').value;
    renderCars();
    document.getElementById('inventory').scrollIntoView({ behavior: 'smooth' });
  });

  // Inventory Filter Form & Live Controls
  document.getElementById('filter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    specialCategoryMode = '';
    renderCars();
  });

  document.getElementById('sort-select').addEventListener('change', renderCars);
  document.getElementById('reset-filters-btn').addEventListener('click', resetFilters);
  document.getElementById('empty-reset-btn').addEventListener('click', resetFilters);
  document.getElementById('clear-brand-selection').addEventListener('click', resetFilters);

  // Clear Comparison
  document.getElementById('clear-compare-btn').addEventListener('click', () => {
    compareIds = [];
    saveToStorage(STORAGE_KEYS.COMPARE, compareIds);
    renderComparison();
    renderCars();
    showNotification('Comparison list cleared.');
  });

  // Sell Car Image Preview
  document.getElementById('car-image').addEventListener('input', (e) => {
    const url = e.target.value.trim();
    const previewBox = document.getElementById('sell-image-preview');
    const previewImg = document.getElementById('sell-preview-img');
    if (url.startsWith('http://') || url.startsWith('https://')) {
      previewImg.src = url;
      previewBox.classList.remove('hidden');
    } else {
      previewBox.classList.add('hidden');
    }
  });

  // Forms
  document.getElementById('sell-car-form').addEventListener('submit', submitSellCarForm);
  document.getElementById('test-drive-form').addEventListener('submit', submitTestDriveForm);
  document.getElementById('contact-seller-form').addEventListener('submit', submitContactSellerForm);

  // Newsletter Subscription
  document.getElementById('newsletter-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const emailInput = document.getElementById('newsletter-email');
    const errEl = document.getElementById('err-newsletter');
    errEl.textContent = '';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
      errEl.textContent = 'Please enter a valid executive email address.';
      return;
    }
    emailInput.value = '';
    showNotification("Subscribed to the Collector's Dispatch (Simulated confirmation).");
  });

  // Modal Open/Close Controls
  document.getElementById('open-wishlist-btn').addEventListener('click', () => {
    renderWishlist();
    document.getElementById('wishlist-modal').classList.remove('hidden');
  });
  document.getElementById('close-details-modal').addEventListener('click', closeCarDetails);
  document.getElementById('close-wishlist-modal').addEventListener('click', () => {
    document.getElementById('wishlist-modal').classList.add('hidden');
  });
  document.getElementById('close-testdrive-modal').addEventListener('click', () => {
    document.getElementById('test-drive-modal').classList.add('hidden');
  });
  document.getElementById('close-contact-modal').addEventListener('click', () => {
    document.getElementById('contact-seller-modal').classList.add('hidden');
  });

  document.getElementById('open-general-testdrive-btn').addEventListener('click', () => {
    openTestDriveModal(carsCatalog[0].id);
  });
  document.getElementById('open-general-contact-btn').addEventListener('click', () => {
    openContactSellerModal(carsCatalog[0].id);
  });

  // Footer Demo Policy Links
  document.getElementById('footer-privacy-link').addEventListener('click', (e) => {
    e.preventDefault();
    showNotification('Demo Notice: All wishlist and vehicle data is stored strictly in your local browser.');
  });
  document.getElementById('footer-terms-link').addEventListener('click', (e) => {
    e.preventDefault();
    showNotification('Demo Notice: All vehicles and INR prices shown are illustrative prototypes.');
  });

  // Close Modals on Backdrop Click or Escape Key
  document.querySelectorAll('.modal-backdrop').forEach((backdrop) => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.add('hidden');
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-backdrop').forEach((m) => m.classList.add('hidden'));
    }
  });

  // =========================================================================
  // 11. INITIALIZE APPLICATION
  // =========================================================================
  populateTestDriveSelect();
  renderWishlist();
  renderComparison();
  renderCars();
});
