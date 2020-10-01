import React from 'react';
import {Link} from "gatsby"

import {Assets} from '../../../resources';
import styled from "styled-components"

const BoxTabBar = styled.div`
        background: #1f1e1e;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50px;
        position: fixed;
        bottom: 0;
        padding-right: 5px;
        z-index: 5;
        @media (max-width: 768px) {
        
        }
`

const ContainTabBar = styled.div`
        background: #1f1e1e;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 200px;
        height: 100%;
        background: #FFFFFF;
        @media (max-width: 768px) {
 
        }
`

const ImageTabBar = styled.img`
        width: 30px;
        height: 30px;
        padding: 10px;
        @media (max-width: 768px) {
 
        }
`

const TabBar = () => {
    return (
        <BoxTabBar>
            <ContainTabBar>
                <Link to="/">
                    <ImageTabBar src={Assets.images.list}/>
                </Link>
                <Link to="/maps">
                    <ImageTabBar src={Assets.images.map}/>
                </Link>
            </ContainTabBar>
        </BoxTabBar>
    );
};

export default TabBar;
