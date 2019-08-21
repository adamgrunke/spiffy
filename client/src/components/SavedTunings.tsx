import React, {useEffect} from 'react';
import {ISavedTunings} from '../react-app-env'

const SavedTunings: React.FC<ISavedTunings> = ({savedTunings}) => {

    var showSaved = savedTunings.map((tuning, id) => {
        return (
            <div>
                <p>{id} : {tuning}</p>
                <p>test saved</p>
            </div>
        )
    })

    return(
        <div>
            <p>{showSaved}</p>
        </div>

    )
}

export default SavedTunings;