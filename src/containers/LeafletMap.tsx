import React, { useEffect } from "react";
import Self from "components/LeafletMap";
import L from "leaflet";
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';

import { ActionTypes, useGlobalContext } from 'contexts/Global';


const Map: React.FC = () => {
    const { state, dispatch } = useGlobalContext();

    const handleOk = () => {
        handleCancel();
    }

    const handleCancel = () => {
        // dispatch({ type: ActionTypes.SET_MODAL_LIST, payload: [...state.ModalList, 'Map'] });
        dispatch({ type: ActionTypes.SET_MODAL_LIST, payload: state.ModalList.filter(item => item !== 'Map') });
    }

    useEffect(() => {
        // Initialize the map
        const map = L.map('map').setView([51.505, -0.09], 13);
    
        // Add a tile layer
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
            maxZoom: 19,
        }).addTo(map);
    
        // Add search functionality
        const provider = new OpenStreetMapProvider();
        const searchControl = GeoSearchControl({
            provider: provider,
            autoComplete: true,
            style: 'bar',
            showPopup: true,
            searchLabel: 'Enter address, place name, etc.',
            autoClose: true,
        });
        map.addControl(searchControl);
    
        // Clean up function to remove the map when component unmounts
        return () => {
            map.remove();
        };
    }, []);

    return(
        <Self visible={state.ModalList.includes('Map')} Ok={handleOk} Cancel={handleCancel}  />
    );
}

export default Map;