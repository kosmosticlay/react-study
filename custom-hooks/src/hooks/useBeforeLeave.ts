import { useEffect } from "react";

export default function useBeforeLeave(callback: () => void) {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // 브라우저 창이 안 보이게 되었을 때 (탭 전환 또는 창 숨김)
        callback();
      }
    };

    const handleBlur = () => {
      // 창 포커스를 잃었을 때 (다른 창으로 전환, 창 최소화 등)
      callback();
    };

    /* 참고: 화면에서 마우스가 없어질 때 바로 전환하려면 mouseleave 이벤트 사용 */

    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("blur", handleBlur);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("blur", handleBlur);
    };
  }, [callback]);
}
