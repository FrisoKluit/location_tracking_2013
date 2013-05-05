var socket = io.connect(document.location.href);


socket.on('connect', function() {
	alert("Connected");
});

socket.on('data', function(data) {
	alert(data);
});


$(document).ready(function() {
	//alert("test");
}); 