import {
  MapContainer,
  TileLayer,
  LayersControl,
  Pane,
  ZoomControl,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import * as L from 'leaflet'
import { Loading } from '../Loading'

interface MapProps {
  mpData: any
  setLoading: any
}

function MapHome1({mpData, setLoading}: MapProps) {
  const MAPBOX_API_KEY = import.meta.env.VITE_MAPBOX_API_KEY
  const MAPBOX_USERID = 'mapbox/satellite-v9'

  const [map, setMap] = useState<any>(null)

  const defaultView = [55.3, -3]
  // const defaultView = [38.5, -10]
  const [mapCenter, setMapCenter] = useState(
    new L.LatLng(defaultView[0], defaultView[1]),
  )

  function createPopupText(mpData: any) {
    return `
    <div>
      <h2>${mpData.Name}</h2>
      <h3>${mpData.SubjectName}</h3>
      <p>${mpData.UniName}</p>
      <div className="flex justify-center items-center">
        <img src=${mpData.PhotoURL} alt=${mpData.Name} height="100"/>
      </div>
    </div>
    `
  }

  var defaultIcon = L.icon({
    iconUrl: 'marker-icon_red.png',
    iconSize:     [27, 27], // size of the icon
    iconAnchor:   [0, 0], // point of the icon which will correspond to marker's location
    // popupAnchor:  [0, -76] // point from which the popup should open relative to the iconAnchor
});

  useEffect(() => {
    if(mpData){
      if(map){
        mpData.forEach(mpData =>{
          const marker = L.marker([mpData.lat, mpData.lng], {icon: defaultIcon}).addTo(map)
          const popupText = createPopupText(mpData)
          marker.bindPopup(popupText);
        })
      }
    }
    setLoading(false)
  }, [mpData])


  console.log(mpData)
  const displayMap = useMemo(
    () => (
      <MapContainer
        style={{ height: '100vh', width: '100vw' }}
        center={new L.LatLng(defaultView[0], defaultView[1])}
        zoom={6}
        zoomSnap={0.1}
        maxZoom={30}
        // minZoom={10}
        scrollWheelZoom={true}
        zoomControl={false}
        ref={setMap}
      >
        <ZoomControl position="topright" />
        {/* <ScaleControl position="topright" /> */}
        <LayersControl>
          <LayersControl.BaseLayer name="Esti Satellite">
            <Pane name="ESRI" style={{ zIndex: -1 }}>
              <TileLayer
                url={`https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}`}
                attribution="MAPBOX"
              />
            </Pane>
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Mapbox Satellite">
            <Pane name="MAPBOX" style={{ zIndex: -1 }}>
              <TileLayer
                url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/tiles/256/{z}/{x}/{y}@2x?access_token=${MAPBOX_API_KEY}`}
                attribution="MAPBOX"
              />
            </Pane>
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer  checked name="OSM">
            <Pane name="OSM" style={{ zIndex: -1 }}>
              <TileLayer
                attribution={'© OpenStreetMap'}
                maxZoom={30}
                url={'https://tile.openstreetmap.org/{z}/{x}/{y}.png'}
              />
            </Pane>
          </LayersControl.BaseLayer>
          {/* <LayersControl.Overlay checked name="Bathymetry">
            <WMSTileLayer
              attribution="Bathymetry - Hidrografico"
              url="https://webgeo2.hidrografico.pt/geoserver/ows?"
              params={{
                service: 'wms',
                request: 'GetMap',
                version: '1.1.1',
                layers: 'isobat:isobatimetria_8_16_30',
                format: 'image/png',
                transparent: true,
                // bbox: '-1017529.7205322665,4774562.534805251,-939258.203568246,4852834.051769271',
                // srs: 'EPSG:3857',
                width: 256,
                height: 256,
              }}
              opacity={1}
              zIndex={9999}
            />
          </LayersControl.Overlay> */}
        </LayersControl>
      </MapContainer>
    ),
    [map],
  )

  return (
    <div>
      {displayMap}
    </div>
  )
}

function mapPropsAreEqual(prevMap: any, nextMap: any) {
  return (
    prevMap.mpData === nextMap.mpData
  )
}

export const MapHome = React.memo(MapHome1, mapPropsAreEqual)
