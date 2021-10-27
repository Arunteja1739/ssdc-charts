import React from 'react';
import GoogleMapReact from "google-map-react";
import markers from '../../data/MarkersData.json';
import './index.scss';
import {FaMapMarkerAlt} from 'react-icons/fa';

const MyMarker = ({ tooltip }) => {
    const handleClick = () => {
        console.log(`You clicked on ${tooltip}`);
    };

    return (
        <div className="marker" onClick={handleClick}>
            {/* <i className="fas fa-map-marker-alt " ></i> */}
            <FaMapMarkerAlt />
        </div>
    );
};

class Maps extends React.Component {
    constructor(props) {
        super(props);
        this.state= { 
            center:{ lat: 51.506, lng: -0.169 },
            zoom:2,
        }
        this.getMapBounds = this.getMapBounds.bind(this);
        this.initGeocoder = this.initGeocoder.bind(this);
    }
    getMapBounds(map, maps){
        const bounds = new maps.LatLngBounds();
        markers.forEach((marker) => {
            bounds.extend(new maps.LatLng(
            marker.lat,
            marker.lng,
            ));
        });
        return bounds;
    };
    bindResizeListener(map, maps, bounds){
        maps.event.addDomListenerOnce(map, 'idle', () => {
          maps.event.addDomListener(window, 'resize', () => {
            map.fitBounds(bounds);
          });
        });
      };
    initGeocoder({map,maps}){
        const Geocoder = new maps.Geocoder();
        Geocoder.geocode({"address":"12561"},(results, status)=>{
            console.log("==========>",status)
            if (status) {
                //Got result, center the map and put it out there
                // map.setCenter(results[0].geometry.location);
                // var marker = new google.maps.Marker({
                //     map: map,
                //     position: results[0].geometry.location
                // });
              } else {
                alert("Geocode was not successful for the following reason: " + status);
              }
        })
        const bounds = this.getMapBounds(map,maps);
        map.fitBounds(bounds);
        this.bindResizeListener(map, maps, bounds);
    }
    render() {
        const {zoom,center} = this.state;
        return (<div className="map-wrapper">
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyDCVOt7XcKCLoq558_q5zwn7qSPu-QTNFA",
                    language: "en",
                    libaries:['geocode'],
                    region: "US"
                }}
                defaultCenter={center}
                defaultZoom={zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={this.initGeocoder}
            >
                {markers.map(({ lat, lng, state },id) => (
                    <MyMarker key={id} lat={lat} lng={lng} text={id} tooltip={state} />
                ))}
            </GoogleMapReact>
        </div>)
    }
}

export default Maps;