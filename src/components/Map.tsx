import React from 'react'
import styled from 'styled-components';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from "react-google-maps"
import mapStyles from '../data/mapStyles';
import MapMarkerIcon from '../icon/map-marker.png'
import Responsive from '../tools/Responsive';



const MapSetting: React.FC<{}> = ({ }) => {
  return (
    <GoogleMap
      defaultZoom={12} // default map zoom
      defaultCenter={{ lat: 41.720287, lng: 44.740616 }} //location
      defaultOptions={{ styles: mapStyles }} //custom map json
    >
      <Marker
        position={{ lat: 41.720287, lng: 44.740616 }} //custom location
        icon={{
          url: `${MapMarkerIcon}`, // custom map marker
          scaledSize: { width: 32, height: 32 } //change size
        }}
      />
    </GoogleMap>
  )
};

const WrappedMap = withScriptjs(withGoogleMap(MapSetting)); //exported full map

const Map = () => {
  return (
    <Wrapper>
      <WrappedMap googleMapURL={'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyA4IQUYzP_Sb61zJwS8GKSKnmjoYxJkOC4'} //api url and key
        loadingElement={<div style={{ height: '100%' }}></div>} //needed for height
        containerElement={<div style={{ height: '100%' }}></div>} //needed for height
        mapElement={<div style={{ height: '100%' }}></div>} //needed for height
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 290px;
  width: 100%;
    ${Responsive.mobile} {
      height: 200px;
    }
`;

export default Map