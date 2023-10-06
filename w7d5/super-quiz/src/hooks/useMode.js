import { useState } from "react";

export default function useMode(initialMode) {
  const [mode, setMode] = useState(initialMode);

  const changeMode = (newMode) => {
    const availableModes = { CREATE: "CREATE", VIEW: "VIEW" };

    if (availableModes[newMode]) {
      setMode(newMode);
    }
  };

  return { mode, changeMode };
}
