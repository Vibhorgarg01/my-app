import React from "react";
import ReactDOM from "react-dom/client";

function Greeting() {
  return <h2>My First Component</h2>;
}
import React from 'react'

function index() {
  return (
    <div>index</div>
  )
}
import React from 'react'

const index = () => {
  return (
    <div>index</div>
  )
}

export default index

export default index

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
