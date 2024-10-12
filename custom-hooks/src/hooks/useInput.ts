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
