const SerpApi = require('google-search-results-nodejs');
const search = new SerpApi.GoogleSearch("aa4554a480f33e3b4a718975f30f52b342e56ae36de2c48c355a68588e2c7a94");
var query

const params = {
    engine: "google",
    q: query,
    google_domain: "google.com",
    gl: "us",
    hl: "en",
    safe: "active",
    tbm: "isch"
};

const callback = function(data) {
    console.log(data["image_results"]);
};

// Show result as JSON
search.json(params, callback);