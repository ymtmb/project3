function initMap() {
  var iit = {lat: 41.831602, lng: -87.627231};
  var map = new google.maps.Map(document.getElementById('map'), {
		  zoom: 18, 
		  center: iit,
	      mapTypeId: 'satellite'
	  });
  var marker = new google.maps.Marker({position: iit, map: map});
}

//slideshow////////

var slides = 0;
var images = [];
var time = 5000;

images[0] = 'images/bean.jpg';
images[1] = 'images/unitedcenter3.png';
images[2] = 'images/chinatown.jpg';

function changeImg(){
  document.getElementById('slide_image').src = images[slides];
  if (slides < images.length - 1){
	slides++;
  }else {
	slides = 0;
  }
  setTimeout("changeImg()",time);
}
window.onload = changeImg;