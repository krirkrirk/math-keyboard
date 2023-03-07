import React, { FunctionComponent, ReactElement, useEffect, useRef, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Keyboard } from "./keyboard";

function App() {
  const [latex, setLatex] = useState("\\frac{1}{\\sqrt{2}}\\cdot 2");

  const [loaded, setLoaded] = useState(false);
  const Mathfield = useRef<any>();

  useEffect(() => {
    window.global ||= window;
    const load = async () => {
      const module = await import(`react-mathquill`);
      module.addStyles();

      Mathfield.current = module.EditableMathField;

      setLoaded(true);
    };
    load();
  }, []);

  const [showKeyboard, setShowKeyboard] = useState(false);
  useEffect(() => {
    if (!loaded) return;
    const textArea = window.jQuery.find("textarea")[0];
    textArea.addEventListener("focusin", () => setShowKeyboard(true));
    textArea.addEventListener("focusout", () => setShowKeyboard(false));
  }, [loaded]);

  return (
    <div className="App">
      {loaded && (
        <div>
          <Mathfield.current
            latex={"zefze"}
            config={
              {
                // substituteTextarea: () => <span tabIndex={0}></span>,
              }
            }
            onChange={(mathField: any) => {
              setLatex(mathField.latex());
            }}
          />
        </div>
      )}
      <p>{latex}</p>
      {loaded && showKeyboard && <Keyboard />}
    </div>
  );
}

export default App;
