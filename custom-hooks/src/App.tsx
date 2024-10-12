import "./App.css";
import { useState } from "react";
import UseInput from "./components/useInput";

function App() {
  const [hook, setHook] = useState<string | null>(null);

  const handleHook = (event: React.MouseEvent<HTMLButtonElement>) => {
    setHook(event.currentTarget.value);
  };

  return (
    <>
      <button onClick={handleHook} value="useInput">
        useInput
      </button>
      {hook === "useInput" && <UseInput />}
    </>
  );
}

export default App;
