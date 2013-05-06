var socket = io.connect(document.location.href);


socket.on('connect', function() {
	//alert("Connected");
	$("#lat").text("Connected");
});

socket.on('data', function(data) {
	$("#lat").text(data);
	
	//alert(data);
});


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