import React from 'react';
import renderer from 'react-test-renderer';

import TextField, {NORMAL_SIZE} from '../../../../src/components/commons/TextField';

describe('TextField', () => {
    it('renders correctly', () => {
        const props = {
            text: 'test',
            type: NORMAL_SIZE,
            style: {
                paddingBottom: 20,
            },
        };

        const tree = renderer
            .create(<TextField {...props} />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
