import framerOnMessage from "../lib/api";

figma.showUI(__html__, {
  width: 300,
  height: 450,
});

figma.ui.onmessage = (msg) => {
  framerOnMessage(msg);
};
