
//import characters, { Rick } from './data.js';
import React from "react";

export default function SearchBar(props) {
   //* props = { onSearch: (characterID) => window.alert(characterID)}
   
   const [id, setId] = React.useState("");
   const handleChange = event =>{
      const {value} = event.target; // = const value = event.target.value
      // console.log(value);
      setId(value);
   }

   const handleClick = event => {
      event.preventDefault();
      props.onSearch(id);
      setId("");
   }

   return (
      <div>
         <input type="text"
         name="search" 
         id="search"
         onChange={handleChange}
         value={id}
         />
         <button onClick={handleClick}>Agregar</button>
      </div>
   );
}
