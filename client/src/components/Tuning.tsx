import React, {useState} from 'react';
import {ITuning} from '../react-app-env'
const Tuning: React.FC<ITuning> =({inst, dance, energy, handleChangeInst, handleChangeDance, handleChangeEnergy}) => {
    
    // (JSX attribute) React.SelectHTMLAttributes<HTMLSelectElement>.onChange?: ((event: React.ChangeEvent<HTMLSelectElement>) => void) | undefined

    return(
        <div>
            <div>Instrumentalnessssss
                <select name="instrumentalness" 
                        value={inst}
                        onChange={handleChangeInst}
                >
                    <option value='0.0'>0.0</option>
                    <option value='0.1'>0.1</option>
                    <option value='0.2'>0.2</option>
                    <option value='0.3'>0.3</option>
                    <option value='0.4'>0.4</option>
                    <option value='0.5'>0.5</option>
                    <option value='0.6'>0.6</option>
                    <option value='0.7'>0.7</option>
                    <option value='0.8'>0.8</option>
                    <option value='0.9'>0.9</option>
                    {/* <option value='1.0'>1.0</option> */}
                </select>
            </div>

            <div>dANceaBility
                <select name="danceability" 
                        value={dance}
                        onChange={handleChangeDance}
                >
                    <option value='0.0'>0.0</option>
                    <option value='0.1'>0.1</option>
                    <option value='0.2'>0.2</option>
                    <option value='0.3'>0.3</option>
                    <option value='0.4'>0.4</option>
                    <option value='0.5'>0.5</option>
                    <option value='0.6'>0.6</option>
                    <option value='0.7'>0.7</option>
                    <option value='0.8'>0.8</option>
                    <option value='0.9'>0.9</option>
                    {/* <option value='1.0'>1.0</option> */}
                </select>
            </div>

            <div>EnerGY
                <select name="energy" 
                        value={energy} 
                        onChange={handleChangeEnergy}
                >
                    <option value='0.0'>0.0</option>
                    <option value='0.1'>0.1</option>
                    <option value='0.2'>0.2</option>
                    <option value='0.3'>0.3</option>
                    <option value='0.4'>0.4</option>
                    <option value='0.5'>0.5</option>
                    <option value='0.6'>0.6</option>
                    <option value='0.7'>0.7</option>
                    <option value='0.8'>0.8</option>
                    <option value='0.9'>0.9</option>
                    {/* <option value='1.0'>1.0</option> */}
                </select>
            </div>
        </div>
    );
}

export default Tuning;