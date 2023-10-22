import React, { useMemo } from "react";

function FilteredList({ list }) {
  const filteredList = useMemo(() => {
    return list.filter((item) => item.age > 18);
  }, [list]);

  return (
    <div>
      <h1>Lista Filtrata </h1>
      <h3>Solo con età maggiore di 18 anni</h3>
      <ul>
        {filteredList.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default FilteredList;