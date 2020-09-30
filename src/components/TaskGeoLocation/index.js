import React from 'react';
import GoogleMapReact from 'google-map-react';
import {connect} from 'react-redux';

import useGeo from '../../hooks/useGeo';
import {GOOGLE_MAP_KEY} from '../../config/constants';

const TaskGeoLocation = (props) => {
    const {tasks} = props;
    const {currentPosition} = useGeo();

    const AnyReactComponent = ({ text }) => <div>{text}</div>;

    return (
        <div style={{width: 500, height: 500}}>
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
