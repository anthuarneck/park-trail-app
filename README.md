# NYC Park Trails 

Your guide to exploring NYC's park trails. View trail difficulty, surface types, current weather, and more - all on an interactive map.

## Links

- **Live App**: [https://nycparktrails.netlify.app/](https://nycparktrails.netlify.app/)
- **Frontend Repo**: [github.com/anthuarneck/park-trail-app](https://github.com/anthuarneck/park-trail-app)
- **Backend Repo**: [github.com/anthuarneck/park-trail-app-backend](https://github.com/anthuarneck/park-trail-app-backend)

## Features

- **Interactive Map**: Browse NYC park trails on a responsive, mobile-friendly map
- **Trail Information**: View detailed info including:
  - Park name
  - Trail difficulty level
  - Surface type (paved, dirt, etc.)
  - Trail width
  - Trail classification
- **Current Weather**: Check real-time weather conditions before you head out
- **Park Restrooms**: Locate nearby facilities (coming soon)
- **Location-Aware**: Map centers on your location (with permission)

## Tech Stack

### Frontend
- React
- Leaflet.js (interactive maps)
- Vite
- Tailwind CSS
- React Router

### Backend
- Node.js
- Express
- NYC Open Data API
- Weather API

## Mobile-First Design

Built specifically for hikers on-the-go with a clean, intuitive interface optimized for mobile devices.

## Getting Started

### Frontend
```bash
git clone https://github.com/anthuarneck/park-trail-app.git
cd park-trail-app
npm install
npm run dev
```

### Backend
```bash
git clone https://github.com/anthuarneck/park-trail-app-backend.git
cd park-trail-app-backend
npm install
npm run dev
```

## Data Sources

- [NYC Open Data - Park Trails](https://data.cityofnewyork.us/Environment/Parks-Trails/vjbm-hsyr/about_data)
- [NYC Open Data - Park Restrooms](https://data.cityofnewyork.us/Recreation/Directory-Of-Toilets-In-Public-Parks/hjae-yuav/about_data)
- [Weather API](https://www.weatherapi.com/)

## Author

**Anthony Huarneck**
- GitHub: [@anthuarneck](https://github.com/anthuarneck)

## License

This project is open source and available under the [MIT License](LICENSE).