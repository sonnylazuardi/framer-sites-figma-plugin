const { useEffect } = require("react");

const useFramerMessage = () => {
  useEffect(() => {
    window.addEventListener(
      "message",
      (event) => {
        parent.postMessage(event.data, "*");
      },
      false
    );
  }, []);
};

module.exports = useFramerMessage;
