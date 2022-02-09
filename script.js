require(["esri/Map", "esri/views/MapView", "esri/layers/FeatureLayer"], function (Map, MapView, FeatureLayer) {
        var map = new Map({
          basemap: "topo-vector"
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 10,
          center: [-90.4423392383084,38.62829009276375] // longitude, latitude
        });
        
        var zip_codes = new FeatureLayer({
                url: "https://services2.arcgis.com/w657bnjzrjguNyOy/arcgis/rest/services/ZipCodes_StLouisCounty/FeatureServer/0"
        });

        map.add(zip_codes);

        var municipalities = new FeatureLayer({
                url: "https://maps.stlouisco.com/arcgis/rest/services/OpenData/OpenData/FeatureServer/6"
        });

        map.add(municipalities);
      });
