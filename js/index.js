

function showwineeries() {
  // moveTo( ".main", 1 );
  [].forEach.call(document.querySelectorAll('.major_section'), function (el) {
  el.style.display = 'none';
  });
  var x = document.getElementById("winelist");
  x.style.display = "block";

}


function route() {
  // moveTo( ".main", 1 );
  [].forEach.call(document.querySelectorAll('.major_section'), function (el) {
  el.style.display = 'none';
  });
  var x = document.getElementById("route");
  x.style.display = "block";


  ga_anl('send', 'pageview', {'page': 'Route.html'});  

}

function tour() {
  // moveTo( ".main", 1 );
  [].forEach.call(document.querySelectorAll('.major_section'), function (el) {
  el.style.display = 'none';
  });
  var x = document.getElementById("tour");
  x.style.display = "block";
  ga_anl('send', 'pageview', {'page': 'Tour.html'});  

}

function about() {
  // moveTo( ".main", 1 );
  [].forEach.call(document.querySelectorAll('.major_section'), function (el) {
  el.style.display = 'none';
  });
  var x = document.getElementById("about");
  x.style.display = "block";
}

function mapload() {
  // moveTo( ".main", 1 );

  [].forEach.call(document.querySelectorAll('.major_section'), function (el) {
  el.style.display = 'none';
  });
  var x = document.getElementById("map");
  x.style.display = "block";

}