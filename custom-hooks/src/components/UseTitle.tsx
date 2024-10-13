import { useEffect } from "react";
import useTitle from "../hooks/useTitle";

export default function UseTitle() {
  const changeTitle = useTitle("Loading...");

  useEffect(() => {
    const timer = setTimeout(() => changeTitle("useTitle"), 3000);
    return () => clearTimeout(timer);
  }, [changeTitle]);

  return (
    <>
      <h1>useTitle</h1>
      <p>페이지 제목이 3초 후에 useTitle로 바뀝니다.</p>
    </>
  );
}
