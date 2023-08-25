import React from 'react';
import Button from './Button';

const list = [ "Gaming","Songs", "💻 ", "Live", "Cricket", "Cooking","All",];

const ButtonList = () => {


  return (
    <div className=" flex ">
      {list.map((ListItem) => (
        <Button name={ListItem} key={ListItem}></Button>
      ))}
    </div>
  );
}

export default ButtonList;
