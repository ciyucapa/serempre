import React from 'react';
import GoogleMapReact from 'google-map-react';
import {connect} from 'react-redux';

import useGeo from '../../hooks/useGeo';
import useWindowSize from '../../hooks/useWindowSize';
import {GOOGLE_MAP_KEY} from '../../config/constants';

const TaskGeoLocation = (props) => {
    const {tasks} = props;
    const size = useWindowSize();
    const {currentPosition} = useGeo();
    const {isReady} = currentPosition;

    const AnyReactComponent = ({ text }) => <div style={{width: 100, textAlign: 'center', borderRadius: 5, height: 30, backgroundColor: '#FF0000', color: '#FFFFFF'}}>{text}</div>;

    return (
        <div style={size}>
            {isReady && (
                <GoogleMapReact
                    bootstrapURLKeys={{key: GOOGLE_MAP_KEY}}
                    defaultCenter={currentPosition}
                    defaultZoom={11}
                >
                    {tasks.map((task) => (
                        <AnyReactComponent
                            {...task.position}
                            text={task.title}
                        />
                    ))}
                </GoogleMapReact>
            )}
        </div>
    );
};

const mapStateToProps = (state) => {
    const {task} = state;
    return {
        tasks: task.tasks,
    };
};

export default connect(mapStateToProps, null)(TaskGeoLocation);
