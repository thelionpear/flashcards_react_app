import React from 'react';



const Option = ({ id, name, value, optionClick }) => (
  <option
    onClick={() => optionClick(id)}
  >
    { name }
  </option>
)

export default Option; 