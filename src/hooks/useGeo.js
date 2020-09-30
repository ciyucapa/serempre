import {useState, useEffect} from 'react';

const useGeo = () => {
    const [currentPosition, setCurrentPosition] = useState({
        lat: 59.95,
        lng: 30.33,
        isReady: false,
    });

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setCurrentPosition({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                isReady: true,
            });
        });
    }, []);

    return {
        currentPosition,
    };
};

export default useGeo;
