import React, {useEffect} from 'react';
import {ISavedTunings} from '../react-app-env'

interface savedTuningsAlt {
    savedTunings: ISavedTunings[]
}

const SavedTunings: React.FC<savedTuningsAlt> = (props) => {

    var showSaved = props.savedTunings.map((tuning, id) => {
        return (
            <div>
                <p>{tuning._id}: {tuning.dance} | {tuning.energy} | {tuning.inst}</p>
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