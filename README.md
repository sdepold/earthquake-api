# earthquake-api

API is using https://earthquake.usgs.gov/fdsnws/event/1/ under the hood. All params defined in the documentation can be applied as well.

## Endpoints

### GET /earthquakes

Returns all earthquakes for the last 24 hours. The timeframe can be adjusted using the `starttime` and `endtime` query params.

### GET /earthquakes/:id

Returns details of one specific earthquake event. The id refers to the value of `.properties.id`.