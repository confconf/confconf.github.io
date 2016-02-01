var colors = d3.scale.category10();

function drawMap(){
  var basic_choropleth = new Datamap({
    element: document.getElementById("basic_choropleth"),
    geographyConfig: {
      popupOnHover: false,
      highlightOnHover: false
    },
    setProjection: function(element) {
      var projection = d3.geo.mercator()
            .center([15, 40])
            .rotate([4.4, 0])
            .scale(230)
            .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
      var path = d3.geo.path()
            .projection(projection);

      return {path: path, projection: projection};
    },
    fills: {
      defaultFill: "#eeeeee",
      authorHasTraveledTo: "#cccccc",
      color: colors(5000)
    },
    data: {
      CAN: { fillKey: "authorHasTraveledTo" },
      USA: { fillKey: "authorHasTraveledTo" },
      JPN: { fillKey: "authorHasTraveledTo" },
      KOR: { fillKey: "authorHasTraveledTo" },
      DEU: { fillKey: "authorHasTraveledTo" },
      GBR: { fillKey: "authorHasTraveledTo" }
    }
  });
  
  basic_choropleth.bubbles([
    {
      name: 'Montreal',
      conf: 'Pycon 2015',
      radius: 20,
      fillKey: 'color',
      latitude: 45.5,
      longitude: -73.56
    },
    {
      name: 'Gwangju',
      conf: 'Act Festival',
      radius: 10,
      fillKey: 'color',
      latitude: 35.155,
      longitude: 126.83
    },
    {
      name: 'Tokyo',
      conf: 'Ruby Kaigi 2015',
      radius: 10,
      fillKey: 'color',
      latitude: 34.682,
      longitude: 139.758
    },
    {
      name: 'Frankfurt',
      conf: 'Frankfurt Book Fair 2015',
      radius: 20,
      fillKey: 'color',
      latitude: 50.1106,
      longitude: 8.6820
    },
    {
      name: 'Seoul',
      conf: 'The Plan B Barcamp',
      radius: 10,
      fillKey: 'color',
      latitude: 37.559,
      longitude: 126.9733
    },
    {
      name: 'Las Vegas',
      conf: 'AWS re:invent 2015',
      radius: 20,
      fillKey: 'color',
      latitude: 35.5938,
      longitude: -105.2215
    },
    {
      name: 'Korea',
      conf: '지방 서점 여행기',
      radius: 10,
      fillKey: 'color',
      latitude: 36.018,
      longitude: 129.342
    },
    {
      name: 'Tokyo',
      conf: 'YAPC::Asia Tokyo 2015',
      radius: 10,
      fillKey: 'color',
      latitude: 36.682,
      longitude: 140.758
    },
    {
      name: 'San Francisco',
      conf: 'GitHub Universe 2015',
      radius: 20,
      fillKey: 'color',
      latitude: 37.7889,
      longitude: -122.6754
    },
    {
      name: 'London',
      conf: 'Mozilla Festival 2015',
      radius: 20,
      fillKey: 'color',
      latitude: 51.4889,
      longitude: -0.0845
    }
  ], {
    popupTemplate: function(geo, data) {
      return '<div class="hoverinfo">' + data.conf + ' <br /> ' + data.name + '</div>';
    }
  });
}

function updateWindow(){
  d3.select('#basic_choropleth svg').remove();
  drawMap();
}

drawMap();
window.onresize = updateWindow;
