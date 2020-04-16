import React from 'react';

import { TILE_SIZE } from '../../settings/constants';

import './index.css';

const Hero = () => {
    return (
        <div
            style={{
                bottom: 48 * 2,
                left: 48 * 1,
                width:TILE_SIZE,
                height: 100,
                backgroundImage: "url(./assets/HERO.png)",
                backgroundRepeat: 'no-repeat',
                animation: 'hero-animation 1s steps(4) infinite',
                position: 'absolute'
            }}
        />
    )
}

export default Hero;