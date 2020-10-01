import React from 'react';
import renderer from 'react-test-renderer';

import InputField from '../../../../src/components/commons/InputField';

describe('InputField', () => {
    it('renders correctly', () => {
        const props = {
            value: 'test',
            onChange: () => {},
            placeholder: 'test placeholder',
            error: '',
        };

        const tree = renderer
            .create(<InputField {...props} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
