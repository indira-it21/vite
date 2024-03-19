//listgroup component
// <>  </> means Fragment-> used for wrapping the text like into <div>
// render items dynamically

import { useState } from "react";
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}


function ListGroup({items, heading, onSelectItem }: Props) {
    
    
    // Hook -> it is a function that allows us to tap into built-in function in react
    const [selectedIndex, setSelectedIndex] = useState(-1); // data and state will change overtime -> usestate hook tells us 
    
   
    
  return (
    <>
        <h1>{heading}</h1>
        
        {items.length === 0 && <p>No item found</p>}
        <ul className="list-group">
        {items.map((item, index) =>( 
            <li className = { selectedIndex === index ? 'list-group-item active' : 'list-group-item'}key = {item} onClick = {() => { setSelectedIndex(index); onSelectItem(item);}}>{item}</li>
        ))}
        </ul>
    </>
  );
}

export default ListGroup;
