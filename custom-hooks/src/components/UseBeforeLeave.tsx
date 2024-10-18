import { useState } from "react";
import useBeforeLeave from "../hooks/useBeforeLeave";

export default function UseBeforeLeave() {
  const [showModal, setShowModal] = useState(false);

  const handleLeave = () => {
    setShowModal(true);
  };

  useBeforeLeave(handleLeave);

  return (
    <div>
      <h1>useBeforeLeave</h1>

      {showModal && (
        <div className="modal">
          <p>다른 애플리케이션에서 돌아왔습니다. 작업을 계속하시겠습니까?</p>
          <button
            onClick={() => {
              setShowModal(false);
            }}
          >
            확인
          </button>
          <button onClick={() => setShowModal(false)}>취소</button>
        </div>
      )}
    </div>
  );
}
