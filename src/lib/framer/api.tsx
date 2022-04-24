const framerOnMessage = (msg) => {
  if (msg.type === "execute") {
    try {
      eval(msg.code);
    } catch (e) {
      const varName = e.message.substring(
        e.message.indexOf("'") + 1,
        e.message.lastIndexOf("'")
      );
      try {
        const newCode = msg.code.replaceAll(`${varName}.`, "figma.");
        eval(newCode);
      } catch (e) {
        console.log(e);
      }
    }
  }
};

export default framerOnMessage;
