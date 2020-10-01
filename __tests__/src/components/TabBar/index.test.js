import React from 'react';
import renderer from 'react-test-renderer';

import TabBar from '../../../../src/components/commons/TabBar';

describe('TabBar', () => {
    it('renders correctly', () => {
        const tree = renderer
            .create(<TabBar />)
            .toJSON();

        expect(tree).toMatchSnapshot();
    });
});
