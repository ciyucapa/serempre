import {useState, useEffect} from 'react';

const useGeo = () => {
    const [currentPosition, setCurrentPosition] = useState({
       lat: 0,
       lng: 0,
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setCurrentPosition({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            });
        });
    }, []);

    return {
        currentPosition,
    };
};

export default useGeo;
