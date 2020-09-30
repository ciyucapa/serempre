import React from 'react';
import PropTypes from 'prop-types';

import {sizesFonts} from '../../../utils';

export const HIGH_SIZE = 'high';
export const NORMAL_SIZE = 'normal';
export const SMALL_SIZE = 'small';

const TextField = (props) => {
    const {text, type, style} = props;
    return (
        <div style={{
            fontSize: sizesFonts[type],
            ...style,
        }}>
            {text}
        </div>
    );
};

TextField.propTypes = {
  text: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.shape({}),
};

TextField.defaultProps = {
  text: '',
  type: NORMAL_SIZE,
  style: {},
};

export default TextField;
