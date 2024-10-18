import "./App.css";
import { useState } from "react";
import UseInput from "./components/UseInput";
import UseTabs from "./components/UseTabs";
import UseTitle from "./components/UseTitle";
import UseClick from "./components/UseClick";
import UtilityFunc from "./components/UtilityFunc";
import UseBeforeLeave from "./components/UseBeforeLeave";

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
      <button onClick={handleHook} value="useClick">
        useClick
      </button>
      <button onClick={handleHook} value="utility">
        Utility Functions
      </button>
      <button onClick={handleHook} value="useBeforeLeave">
        useBeforeLeave
      </button>
      {hook === "useInput" && <UseInput />}
      {hook === "useTabs" && <UseTabs />}
      {hook === "useTitle" && <UseTitle />}
      {hook === "useClick" && <UseClick />}
      {hook === "utility" && <UtilityFunc />}
      {hook === "useBeforeLeave" && <UseBeforeLeave />}
    </>
  );
}

export default App;
