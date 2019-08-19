import React, {useState} from 'react';

const Tuning: React.FC =() => {
    const [inst, setInst] = useState<number>()
    // (JSX attribute) React.SelectHTMLAttributes<HTMLSelectElement>.onChange?: ((event: React.ChangeEvent<HTMLSelectElement>) => void) | undefined
    
    const handleChange = (e: React.SyntheticEvent) => {
        let value = parseFloat((e.target as HTMLSelectElement).value)
        setInst(value)
    }   

    return(
        <div>
            <div>Instrumentalnessssss
                <select name="instrumentalness" 
                        value='0.5'
                        onChange={handleChange}
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
                    <option value='1.0'>1.0</option>
                </select>
            </div>

            <div>dANceaBility
                <select name="danceability" value='0.5'>
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
                    <option value='1.0'>1.0</option>
                </select>
            </div>

            <div>EnerGY
                <select name="energy" value='0.5'>
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
                    <option value='1.0'>1.0</option>
                </select>
            </div>






        </div>

        

    );
}

export default Tuning;