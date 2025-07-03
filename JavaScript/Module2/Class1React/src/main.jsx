import React from "react";
import ReactDOM from "react-dom/client";
import { HolaMundo } from "./HolaMundo";

function App() {
  console.log("hola a la consola desde react");
  
  return (
    <div></div>

  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <HolaMundo />
  </React.StrictMode>
);
