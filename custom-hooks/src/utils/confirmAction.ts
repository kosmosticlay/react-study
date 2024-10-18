/* confirm 창을 띄워 사용자 입력에 따라 callback 함수를 실행 */
export default function confirmAction(
  message: string,
  onConfirm: () => void,
  onCancel: () => void
) {
  if (confirm(message)) {
    onConfirm();
  } else {
    onCancel();
  }
}
