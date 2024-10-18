/* 페이지 이탈을 방지하기 위해 beforeunload 이벤트 리스너를 추가하거나 제거하는 기능 */
export default function preventLeave() {
  const listener = (event: BeforeUnloadEvent) => {
    event.preventDefault();
    event.returnValue = ""; // deprecated (페이지 이탈 방지 메시지)
  };

  const enablePrevent = () => window.addEventListener("beforeunload", listener);
  const disablePrevent = () =>
    window.removeEventListener("beforeunload", listener);

  return { enablePrevent, disablePrevent };
}
