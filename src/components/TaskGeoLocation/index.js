import React from 'react';
import GoogleMapReact from 'google-map-react';
import {connect} from 'react-redux';
import styled from 'styled-components';

import useGeo from '../../hooks/useGeo';
import useWindowSize from '../../hooks/useWindowSize';
import {GOOGLE_MAP_KEY} from '../../config/constants';

const ContainerMap = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 20px;
        border-radius: 5px;
        background: #FF0000;
        color: #FFFFFF;
`;

const TaskGeoLocation = (props) => {
    const {tasks} = props;
    const size = useWindowSize();
    const {currentPosition} = useGeo();
    const {isReady} = currentPosition;

    const AnyReactComponent = ({ text }) => <ContainerMap>{text}</ContainerMap>;

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
