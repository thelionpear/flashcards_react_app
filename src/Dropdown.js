import React from 'react'; 
import Option from './Option'; 

const Dropdown = ({ id, name, items, optionClick }) => (
    <select>
        { items.map ( item => 
            <Option 
                key={item.id} 
                {...item} 
                optionClick={optionClick}
            />    
            )
        }
    </select>
)

export default Dropdown; 