// import { useState } from 'react'
import "./App.css";
import Main from "./components/BackGround";
import GridComponent from "./components/Grid";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        {/* <Main /> */}
        <GridComponent />
      </div>
    </>
  );
}

export default App;
