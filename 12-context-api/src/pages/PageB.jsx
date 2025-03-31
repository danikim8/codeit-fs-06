import React from "react";
import Modal from "../components/Modal";
import { useAuth } from "../contexts/auth.context";
import { useModal } from "../contexts/modal.context";

function PageB() {
  const auth = useAuth();
  const modal = useModal();

  return (
    <div>
      <span>PageB</span> | <span>로그인 여부 {auth.isLoggedIn.toString()}</span>
      <button onClick={() => modal.open(<Modal>PageB에서 연 모달</Modal>)}>
        모달 열기
      </button>
    </div>
  );
}

export default PageB;
