import React, { useState, useEffect } from "react";


function ComponentePrueba() {



const [count, setCount] = useState(0);

useEffect(() => {
  document.title = `You clicked ${count} times`;
});

return (
  <div>
    
    <p style={{ color: "#000" }}>You clicked {count} times</p>
    <button onClick={() =>  setCount(count + 1)}>Click me</button>
  </div>
);
}
export default ComponentePrueba;
