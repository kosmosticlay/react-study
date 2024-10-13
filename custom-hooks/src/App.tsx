import "./App.css";
import { useState } from "react";
import UseInput from "./components/UseInput";
import UseTabs from "./components/UseTabs";
import UseTitle from "./components/UseTitle";

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
      <button onClick={handleHook} value="useTabs">
        useTabs
      </button>
      <button onClick={handleHook} value="useTitle">
        useTitle
      </button>
      {hook === "useInput" && <UseInput />}
      {hook === "useTabs" && <UseTabs />}
      {hook === "useTitle" && <UseTitle />}
    </>
  );
}

export default App;
