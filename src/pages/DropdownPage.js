import { useState } from 'react';

import Dropdown from '../components/DropDown';



function DropdownPage () {
   const [selection, setSetlection] = useState(null);

    const handleSelect = (option) => {
        setSetlection(option);
    };
    
    const options = [
    {label: 'Red', value: 'red'},
    {label: 'Green', value: 'green'},
    {label: 'Blue', value: 'blue'},
   ] 
   
    
    return(
        <div>
            <Dropdown options={options} onChange={handleSelect} value={selection}/>
        </div>

    )
};

export default DropdownPage;