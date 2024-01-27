import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLenght] = useState(8);
  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charstersAlloed, setCharstersAlloed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let numbers = "0123456789";
    let speacialCharacters = "~!#$%&'()*+,-./{}|=?@";
    if (numbersAllowed) {
      str += numbers;
    }
    if (charstersAlloed) {
      str += speacialCharacters;
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numbersAllowed, charstersAlloed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numbersAllowed, charstersAlloed, passwordGenerator]);

  const passswordRef = useRef();
  const copyClipboardPassword = useCallback(() => {
    passswordRef.current.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="main bg-dark">
      <div className="bg-light p-4">
        <h3 className="text-center">Password Generator</h3>
        <div className="input-field my-4">
          <input
            type="text"
            className="form-control"
            value={password}
            readOnly
            placeholder="password"
            ref={passswordRef}
          />
          <button className="btn btn-primary" onClick={copyClipboardPassword}>
            Copy
          </button>
        </div>
        <div className="input-field">
          <input
            type="range"
            min={8}
            max={100}
            Value={8}
            onChange={(e) => {
              setLenght(e.target.value);
            }}
          />
          Range({length})
          <input
            className="ms-2"
            type="checkbox"
            defaultChecked={numbersAllowed}
            onChange={() => {
              setNumbersAllowed((prev) => !prev);
            }}
          />
          Numbers
          <input
            className="ms-2"
            type="checkbox"
            defaultChecked={charstersAlloed}
            onChange={() => {
              setCharstersAlloed((prev) => !prev);
            }}
          />
          Characters
        </div>
      </div>
    </div>
  );
}

export default App;
