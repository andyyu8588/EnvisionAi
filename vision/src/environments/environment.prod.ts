export const environment = {
  production: true,

  backend: {
    trendsapi: 'http://localhost:3000/search',
    Tfmodel: 'http://localhost:3000/Tfmodel/model.json',
    DenseModel: 'http://localhost:3000/densemodel/model.json'
  },

  mapbox: {
    token: 'pk.eyJ1IjoidHJhdmVsbmV0IiwiYSI6ImNrYjJ4bnpxZDBnMHUydG10cXJmeGNjazEifQ.Z2ajmP1ywUc77Z74VlXmWw',
    geocoding: 'https://api.mapbox.com/geocoding/v5/mapbox.places'
  },
}

