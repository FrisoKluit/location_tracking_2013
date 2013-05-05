var socket = io.connect(document.location.href);


socket.on('connect', function() {
	alert("Connected");
})


$(document).ready(function() {
	//alert("test");
}); 