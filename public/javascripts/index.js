var socket = io.connect(document.location.href);
var map;
var markerList = new Array();

socket.on('connect', function() {
	//alert("Connected");
	$("#lat").text("Connected");
});

socket.on('data', function(data) {
	console.log(data);
	var dataObject = $.parseJSON(data)
	$("#lat").text(dataObject.lat);
	$("#lng").text(dataObject.lng);
	$("#acc").text(dataObject.acc);
	$("#imei").text(dataObject.imei);

	updateMarker(dataObject.imei, dataObject.lat, dataObject.lng)

	//alert(data);
});

function updateMarker(imei, lat, lng) {
	var myLatLng = new google.maps.LatLng(lat, lng);

	i = markerList.indexOf(imei);
	if (i > -1) {
		// update
		markerList[i].setPosition(myLatLng);
	} else {
		// create
		var marker = new google.maps.Marker({
			map : map,
			title : imei,
			position : myLatLng
		});

		markerList[imei] = marker;
	}

}


$(document).ready(function() {
	//alert("test");
});

function init() {
	var myLatlng = new google.maps.LatLng(1.37179, 103.833333);
	var myOptions = {
		zoom : 11,
		center : myLatlng,
		mapTypeId : google.maps.MapTypeId.ROADMAP
	};
	map = new google.maps.Map(document.getElementById("main"), myOptions);

	trafficLayer = new google.maps.TrafficLayer();
}