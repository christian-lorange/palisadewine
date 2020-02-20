
////////////////////////////////////////////////////////////////////////////////////////////
//setting up the map//
////////////////////////////////////////////////////////////////////////////////////////////

var map = new L.Map('mapid').setView([-13, -54], 3);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {

}).addTo(map);

////////////////////////////////////////////////////////////////////////////////////////////
//adding the data//
////////////////////////////////////////////////////////////////////////////////////////////

var stations = {"type": "FeatureCollection",
  "features": [{
  "type": "Feature","properties": {
      "STATION": "Alfred Eames Cellars",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-107.60381,38.82634]
    }
  },
{"type": "Feature","properties": {
      "STATION": "Avant Vineyards",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.41027,39.07861]
    }
  },
{"type": "Feature","properties": {
      "STATION": "Black Bridge Winery",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-107.58253,38.88589]
    }
  },
{"type": "Feature","properties": {
      "STATION": "Carlson Vineyards",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.40469,39.07221]
    }
  },
{"type": "Feature","properties": {
      "STATION": "Colorado Cellars Winery",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.325794,39.108054]
    }
  },
{"type": "Feature","properties": {
      "STATION": "Colterris Winery",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.355876,39.108054]
    }
  },
{"type": "Feature","properties": {
      "STATION": "Cottonwood Cellars",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.03621,38.60797]
    }
  },
{"type": "Feature","properties": {
      "STATION": "DeBeque Canyon Winery",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.355456,39.105627]
    }
  },
{"type": "Feature","properties": {
      "STATION": "Garfield Estates Vineyard and Winery",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.389369,39.107404]
    }
  },
{"type": "Feature","properties": {
      "STATION": "Grande River Vineyards",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.362088,39.117231]
    }
  },
{"type": "Feature","properties": {
      "STATION": "Graystone Winery",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.430842,39.091901]
    }
  },
{"type": "Feature","properties": {
      "STATION": "Gubbini Winery",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.3667,39.09035]
    }
  },
{"type": "Feature","properties": {
      "STATION": "Hermosa Vineyards",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.447431,39.045728]
    }
  },
{"type": "Feature","properties": {
      "STATION": "Maison La Belle Vie Winery",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.389553,39.104194]
    }
  },
{"type": "Feature","properties": {
      "STATION": "Meadery of the Rockies",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.365821,39.105832]
    }
  },
{"type": "Feature","properties": {
      "STATION": "Mesa Park Vineyards",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.436188,39.046375]
    }
  },
{"type": "Feature","properties": {
      "STATION": "Mountain View Winery",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.00163,38.60738]
    }
  },
{"type": "Feature","properties": {
      "STATION": "Plum Creek Winery",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.365892,39.106845]
    }
  },
{"type": "Feature","properties": {
      "STATION": "Ptarmigan Vineyards",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.4749,39.03675]
    }
  },
{"type": "Feature","properties": {
      "STATION": "Red Fox Cellars",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.38576,39.10468]
    }
  },
{"type": "Feature","properties": {
      "STATION": "Restoration Vineyards",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.3857671,39.0846623]
    }
  },
{"type": "Feature","properties": {
      "STATION": "Shiras Winery",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.56488,39.06603]
    }
  },
{"type": "Feature","properties": {
      "STATION": "St Kathryn Cellars",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.36067,39.116621]
    }
  },
{"type": "Feature","properties": {
      "STATION": "Stone Cottage Cellars",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-107.577303,38.899693]
    }
  },
{"type": "Feature","properties": {
      "STATION": "Talbott's Mountain Gold LLLP",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.349879,39.097046]
    }
  },
{"type": "Feature","properties": {
      "STATION": "Talon Wines",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.36067,39.116621]
    }
  },
{"type": "Feature","properties": {
      "STATION": "The Peachfork",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.44237,39.04591]
    }
  },
{"type": "Feature","properties": {
      "STATION": "Two Rivers Winery",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.662153,39.090821]
    }
  },
{"type": "Feature","properties": {
      "STATION": "Varaison Vineyards and Winery, LLC",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.355815,39.111978]
    }
  },
  {"type": "Feature","properties": {
      "STATION": "Vines 79 Wine Barn",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.340582,39.105639]
    }
  },
{"type": "Feature","properties": {
      "STATION": "Whitewater Hill Vineyards",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.45828,39.03685]
    }
  },
{"type": "Feature","properties": {
      "STATION": "Wine Country Inn",
      "ST_CODE": "MGRP",
    },
    "geometry": {
      "type": "Point",
      "coordinates": [-108.364689,39.118056]
    }
  }
  ]

};

var markerLayer = L.geoJson(stations, {
    onEachFeature: function (feature, layer)
    {
        layer.bindPopup("<b>" + feature.properties.STATION + "</b><br>");
    }
}).addTo(map);
map.fitBounds(markerLayer.getBounds());

////////////////////////////////////////////////////////////////////////////////////////////
//creating the selector control//
////////////////////////////////////////////////////////////////////////////////////////////

//create Leaflet control for selector
var selector = L.control({
  position: 'topright'
});

selector.onAdd = function(map) {
  //create div container
  var div = L.DomUtil.create('div', 'mySelector');
  //create select element within container (with id, so it can be populated later)
  div.innerHTML = '<select id="marker_select" style="background-color: #80434B; color:white; font-size:1.5em;"><option value="init">Find Venue</option></select>';
  return div;
};

selector.addTo(map);

//have to use eachFeature (instead of onEachFeature) to create selector options
//because _leaflet_id doesn't exist until after each feature is created
markerLayer.eachLayer(function(layer) {
  //create option in selector element
  //with content set to city name
  //and value set to the layer's internal ID
  var optionElement = document.createElement("option");
  optionElement.innerHTML = layer.feature.properties.STATION;
  optionElement.value = layer._leaflet_id;
  L.DomUtil.get("marker_select").appendChild(optionElement);
});

////////////////////////////////////////////////////////////////////////////////////////////
//setting up event listeners//
////////////////////////////////////////////////////////////////////////////////////////////

var marker_select = L.DomUtil.get("marker_select");

//prevent clicks on the selector from propagating through to the map
//(otherwise popups will close immediately after opening)
L.DomEvent.addListener(marker_select, 'click', function(e) {
  L.DomEvent.stopPropagation(e);
});

L.DomEvent.addListener(marker_select, 'change', changeHandler);

function changeHandler(e) {
  if (e.target.value == "init") {
    map.closePopup();
  } else {
    markerLayer.getLayer(e.target.value).openPopup();
  }
}
