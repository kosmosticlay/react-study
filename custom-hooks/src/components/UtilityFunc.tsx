import confirmAction from "../utils/confirmAction";
import preventLeave from "../utils/preventLeave";

export default function UtilityFunc() {
  const handleConfirm = () => alert("성공 메시지");
  const handleCancel = () => alert("취소 메시지");

  const handleClick = () => {
    confirmAction("확인 또는 취소를 누르세요.", handleConfirm, handleCancel);
  };

  const { enablePrevent, disablePrevent } = preventLeave();
  return (
    <>
      <h1>Utility Functions</h1>
      <p>confirm 창을 띄워 사용자 입력에 따라 다른 함수를 실핼합니다.</p>
      <button onClick={handleClick}>Confirm 메세지를 확인하기</button>
      <br />
      <br />
      <br />
      <p>아래 버튼을 통해 페이지 이탈 기능을 ON/OFF할 수 있다.</p>
      <button onClick={enablePrevent}>ON</button>
      <button onClick={disablePrevent}>OFF</button>
    </>
  );
}
