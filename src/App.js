import React, { useState } from "react";
import "./App.css";

function App() {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState('');

  const increment = () => setLikes(likes + 1);
  const decrement = () => setLikes(likes - 1);

  return (
    <div className="App">
      {likes}
        <input type="text" value={value} onChange={e => setValue(e.target.value)}/>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

export default App;
