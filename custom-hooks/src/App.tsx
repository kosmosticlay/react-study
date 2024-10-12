import "./App.css";
import useInput from "./hooks/useInput";

function App() {
  const isValidLength = (value: string) => value.length < 15;
  const isValidEmail = (value: string) => value.includes("@");

  const { value: name, handleInput: handleName } = useInput("", isValidLength);
  const { value: email, handleInput: handleEmail } = useInput("", () => true); // 유효성 검사 없이 입력

  const validateEmailOnBlur = () => {
    if (!isValidEmail(email)) {
      alert("유효하지 않은 이메일 주소입니다.");
    }
  };

  return (
    <>
      <h1>working? </h1>
      <input
        id="name"
        placeholder="이름을 입력하세요."
        value={name}
        type="text"
        onChange={handleName}
      ></input>
      <input
        id="email"
        placeholder="이메일을 입력하세요."
        value={email}
        type="email"
        onChange={handleEmail}
        onBlur={validateEmailOnBlur} // 포커스 벗어날 때 유효성 검사
      ></input>
    </>
  );
}

export default App;
