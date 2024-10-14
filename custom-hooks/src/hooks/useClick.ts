/* DOM 요소에 클릭 이벤트를 추가 및 제거 */
import { useEffect, useRef } from "react";

export default function useClick<T extends HTMLElement>(
  handleClick: (title: string) => void
) {
  const element = useRef<T | null>(null);

  useEffect(() => {
    const currentElement = element.current;
    if (!currentElement) return;

    currentElement.addEventListener("click", () => handleClick("useClick"));

    return () => {
      currentElement.removeEventListener("click", () =>
        handleClick("useClick")
      );
    };
  }, [handleClick]);

  return element;
}
