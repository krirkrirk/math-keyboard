import { FunctionComponent, ReactElement, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { addStyles, EditableMathFieldProps } from "react-mathquill";
import { EditableMathField } from "react-mathquill";

addStyles();

function App() {
  const [count, setCount] = useState(0);
  const [latex, setLatex] = useState("\\frac{1}{\\sqrt{2}}\\cdot 2");

  const [loaded, setLoaded] = useState(false);
  // const ref = useRef<any>();
  // useEffect(() => {
  //   const load = async () => {
  //     const module = await import(`react-mathquill`);
  //     setLoaded(true);
  //     ref.current = module.EditableMathField;
  //   };
  //   load();
  // }, []);
  return (
    <div className="App">
      <p>Test</p>
      <EditableMathField
        latex={latex}
        onChange={() => {
          setLatex(latex);
        }}
      />
      <p>{latex}</p>
    </div>
  );
}

export default App;
