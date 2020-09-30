import React from 'react';
import {Link} from "gatsby"

import {Assets} from '../../../resources';

const TabBar = () => {
    return (
        <div style={{backgroundColor: '#1f1e1e', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', width: '100%', height: 50, position: 'fixed', bottom: 0, paddingRight: 5, zIndex: 5}}>
            <div style={{width: 200, height: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFFFFF'}}>
                <Link to="/" style={{padding: 10}}>
                    <img src={Assets.images.list} style={{width: 30, height: 30}} />
                </Link>
                <Link to="/maps" style={{padding: 10}}>
                    <img src={Assets.images.map} style={{width: 30, height: 30}} />
                </Link>
            </div>
        </div>
    );
};

export default TabBar;
