
export function Colors({items}){
  return (
    <ul>
      {items.map((color, i) => (
        <li className="list" key={i} > {color}</li>
      ))}
    </ul>
  );
};

 