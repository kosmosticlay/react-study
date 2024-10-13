/* 문서 제목을 업데이트 (Instead of React Helmet)*/
import { useEffect, useState } from "react";

export default function useTitle(initialTitle: string) {
  const [title, setTitle] = useState(initialTitle);

  useEffect(() => {
    const $title = document.querySelector("title");

    if (!$title) return; // early return

    $title.textContent = title;

    return () => {
      $title.textContent = "Custom Hooks";
    };
  }, [title]);

  /*
  useEffect(() => {
    const $title = document.querySelector("title");
    $title && ($title.textContent = title);

    return () => {
      $title && ($title.textContent = "Custom Hooks");
    };
  }, [title]);
*/
  return setTitle;
}
