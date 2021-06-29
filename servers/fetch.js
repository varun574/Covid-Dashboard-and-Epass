var unirest = require("unirest");

var req = unirest("GET", "https://covid-19-data.p.rapidapi.com/country/all");

req.headers({
	"x-rapidapi-key": "6d306ab2eamsh2281b629ae3547bp11dc52jsndd86c533cc08",
	"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});
export default req;