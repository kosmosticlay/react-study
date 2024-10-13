/* 입력값을 검증하여 유효한 값만 상태로 업데이트 */
import { useState } from "react";

export default function useInput(
  inputValue: string,
  validator: (inputValue: string) => boolean
) {
  const [value, setValue] = useState(inputValue);

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;

    if (validator(value)) {
      setValue(value);
    }
  };

  return { value, handleInput };
}
