import React, { useState } from "react";
import FilteredList from "./FilteredList";

function App() {
  const [data, setData] = useState([
    { id: 1, name: "Alice", age: 23 },
    { id: 2, name: "Christian", age: 24 },
    { id: 3, name: "Carlo", age: 17 },
    { id: 4, name: "Francesco", age: 29 },
    { id: 4, name: "Marco", age: 34 },
    { id: 4, name: "Giovanni", age: 56 }
  ]);

  return (
    <div>
      <FilteredList list={data} />
    </div>
  );
}

export default App;

