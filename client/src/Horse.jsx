import React, {useState, useEffect} from 'react';
import {GiHorseHead} from 'react-icons/all';

const Horse = ({horse}) => {
    return (
        <div className='horse-container'>
            <div className='horse-name'>
              <label for="file"><GiHorseHead fill={horse.color}/>{horse.name}:</label>
            </div>
            <progress id="file" max="1000" value={horse.distance} style={{"accentColor": horse.color}}></progress>
            <div>{horse.distance}m</div>
        </div>
    )
}

export default Horse;
