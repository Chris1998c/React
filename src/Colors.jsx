


export function Colors({items}){
  return (
    <ul>
      {items.map((color) => (
        <li className="list" key= {color} >{color.id} {color.name} </li>
      ))}
    </ul>
  );
};

 