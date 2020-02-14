const express = require('express');
const app = express();
var router = express.Router();
var Request = require("request");
var urlencode = require('urlencode');


app.get('/getCity/:city', (req, res) => {
	var city=req.params['city'];
	city=urlencode(city);
	res.header('Access-Control-Allow-Origin', "*");
	Request.get("https://maps.googleapis.com/maps/api/place/autocomplete/json?input="+city+"&types=(cities)&language=en&key=APIKEY", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    return res.send(JSON.parse(body));
});

});






app.get('/getStateSeal/:state', (req, res) => {
res.header('Access-Control-Allow-Origin', "*");
	console.log(req.params['state']);
	Request.get("https://www.googleapis.com/customsearch/v1?q="+req.params['state']+"%20State%20Seal&cx=011635096530545692752:rjqi2wmc8h0&imgSize=huge&imgType=photo&num=8&searchType=image&key=APIKEY", (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    return res.send(JSON.parse(body));
});

});

app.get('/getCurrentApiData/:lat/:lon', (req, res) => {
res.header('Access-Control-Allow-Origin', "*");
var lat=req.params['lat'];
var lon=req.params['lon'];
var url="https://api.darksky.net/forecast/1742d5c3b7a2baf8acaa536985036108/"+lat+","+lon;
	Request.get(url, (error, response, body) => {
    if(error) {
        return console.dir(error);
    }
    console.log(JSON.parse(body));
    return res.send(JSON.parse(body));
});

});



// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

app.get('/test/:city', (req, res) => {
	console.log("hello1111");
	res.header('Access-Control-Allow-Origin', "*");
	var street="";
//	var city=urlencode(req.params['city']);
	var state="";
	var geocodeData="";
	var forecastData;
	var geocodeData1;
    console.log("hello1");
	Request.get("https://maps.googleapis.com/maps/api/geocode/json?address="+city+","+street+","+state+"&key=APIKEY", (error, response, body) => {
    if(error) {
    	//reject(error);
        return console.dir(error);
    }
    else{
    	
    	return JSON.parse(body);
	}

});

    
});
	

 



