import { useEffect } from "react";

export const useFramerMessage = () => {
  useEffect(() => {
    window.addEventListener(
      "message",
      (event: any) => {
        parent.postMessage(event.data, "*");
      },
      false
    );
  }, []);
};
