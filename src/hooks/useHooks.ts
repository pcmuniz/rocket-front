import { useState } from "react";

export const useHook = () => {
  const [count, setCount] = useState(0);

  return { count, setCount };
};