import { useEffect } from "react";

const useFramerMessage = () => {
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

export default useFramerMessage;
