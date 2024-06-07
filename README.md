# earthquake-api

API is using https://earthquake.usgs.gov/fdsnws/event/1/ under the hood. All params defined in the documentation can be applied as well.

## Endpoints

### GET /continents

Returns list of all supported continents and their respective bounding box.

### GET /earthquakes

Returns all earthquakes for the last 24 hours. The timeframe can be adjusted using the `starttime` and `endtime` query params.
Please note that this endpoint is artificially delaying a response based on the amount of returned earthquakes. You can disable this by adding the query param `delay=0`.

- Pagination: /earthquakes?limit=50&offset=25
- Sorting: /earthquakes?orderby=magnitude

### GET /earthquakes?continent=europe

Returns earthquakes in a certain continent's bounding box.

### GET /earthquakes/:id

Returns details of one specific earthquake event. The id refers to the value of `.properties.id`.