// src/index.tsx
var figma = {
  apiVersion: "1.0.0",
  command: "",
  editorType: "figma",
  fileKey: void 0,
  skipInvisibleInstanceChildren: false,
  viewport: void 0,
  currentUser: null,
  activeUsers: [],
  closePlugin: function (message) {
    throw new Error("Function not implemented.");
  },
  notify: function (message, options) {
    throw new Error("Function not implemented.");
  },
  commitUndo: function () {
    throw new Error("Function not implemented.");
  },
  triggerUndo: function () {
    throw new Error("Function not implemented.");
  },
  saveVersionHistoryAsync: function (title, description) {
    throw new Error("Function not implemented.");
  },
  showUI: function (html, options) {
    throw new Error("Function not implemented.");
  },
  ui: void 0,
  clientStorage: void 0,
  parameters: void 0,
  getNodeById: function (id) {
    throw new Error("Function not implemented.");
  },
  getStyleById: function (id) {
    throw new Error("Function not implemented.");
  },
  root: void 0,
  currentPage: void 0,
  on: function (type, callback) {
    throw new Error("Function not implemented.");
  },
  once: function (type, callback) {
    throw new Error("Function not implemented.");
  },
  off: function (type, callback) {
    throw new Error("Function not implemented.");
  },
  mixed: void 0,
  createRectangle: function () {
    throw new Error("Function not implemented.");
  },
  createLine: function () {
    throw new Error("Function not implemented.");
  },
  createEllipse: function () {
    throw new Error("Function not implemented.");
  },
  createPolygon: function () {
    throw new Error("Function not implemented.");
  },
  createStar: function () {
    throw new Error("Function not implemented.");
  },
  createVector: function () {
    throw new Error("Function not implemented.");
  },
  createText: function () {
    throw new Error("Function not implemented.");
  },
  createFrame: function () {
    throw new Error("Function not implemented.");
  },
  createComponent: function () {
    throw new Error("Function not implemented.");
  },
  createPage: function () {
    throw new Error("Function not implemented.");
  },
  createSlice: function () {
    throw new Error("Function not implemented.");
  },
  createSticky: function () {
    throw new Error("Function not implemented.");
  },
  createConnector: function () {
    throw new Error("Function not implemented.");
  },
  createShapeWithText: function () {
    throw new Error("Function not implemented.");
  },
  createCodeBlock: function () {
    throw new Error("Function not implemented.");
  },
  createSection: function () {
    throw new Error("Function not implemented.");
  },
  createBooleanOperation: function () {
    throw new Error("Function not implemented.");
  },
  createPaintStyle: function () {
    throw new Error("Function not implemented.");
  },
  createTextStyle: function () {
    throw new Error("Function not implemented.");
  },
  createEffectStyle: function () {
    throw new Error("Function not implemented.");
  },
  createGridStyle: function () {
    throw new Error("Function not implemented.");
  },
  getLocalPaintStyles: function () {
    throw new Error("Function not implemented.");
  },
  getLocalTextStyles: function () {
    throw new Error("Function not implemented.");
  },
  getLocalEffectStyles: function () {
    throw new Error("Function not implemented.");
  },
  getLocalGridStyles: function () {
    throw new Error("Function not implemented.");
  },
  moveLocalPaintStyleAfter: function (targetNode, reference) {
    throw new Error("Function not implemented.");
  },
  moveLocalTextStyleAfter: function (targetNode, reference) {
    throw new Error("Function not implemented.");
  },
  moveLocalEffectStyleAfter: function (targetNode, reference) {
    throw new Error("Function not implemented.");
  },
  moveLocalGridStyleAfter: function (targetNode, reference) {
    throw new Error("Function not implemented.");
  },
  moveLocalPaintFolderAfter: function (targetFolder, reference) {
    throw new Error("Function not implemented.");
  },
  moveLocalTextFolderAfter: function (targetFolder, reference) {
    throw new Error("Function not implemented.");
  },
  moveLocalEffectFolderAfter: function (targetFolder, reference) {
    throw new Error("Function not implemented.");
  },
  moveLocalGridFolderAfter: function (targetFolder, reference) {
    throw new Error("Function not implemented.");
  },
  importComponentByKeyAsync: function (key) {
    throw new Error("Function not implemented.");
  },
  importComponentSetByKeyAsync: function (key) {
    throw new Error("Function not implemented.");
  },
  importStyleByKeyAsync: function (key) {
    throw new Error("Function not implemented.");
  },
  listAvailableFontsAsync: function () {
    throw new Error("Function not implemented.");
  },
  loadFontAsync: function (fontName) {
    throw new Error("Function not implemented.");
  },
  hasMissingFont: false,
  createNodeFromSvg: function (svg) {
    throw new Error("Function not implemented.");
  },
  createImage: function (data) {
    throw new Error("Function not implemented.");
  },
  getImageByHash: function (hash) {
    throw new Error("Function not implemented.");
  },
  createLinkPreviewAsync: function (url) {
    throw new Error("Function not implemented.");
  },
  createGif: function (hash) {
    throw new Error("Function not implemented.");
  },
  combineAsVariants: function (nodes, parent2, index) {
    throw new Error("Function not implemented.");
  },
  group: function (nodes, parent2, index) {
    throw new Error("Function not implemented.");
  },
  flatten: function (nodes, parent2, index) {
    throw new Error("Function not implemented.");
  },
  union: function (nodes, parent2, index) {
    throw new Error("Function not implemented.");
  },
  subtract: function (nodes, parent2, index) {
    throw new Error("Function not implemented.");
  },
  intersect: function (nodes, parent2, index) {
    throw new Error("Function not implemented.");
  },
  exclude: function (nodes, parent2, index) {
    throw new Error("Function not implemented.");
  },
  base64Encode: function (data) {
    throw new Error("Function not implemented.");
  },
  base64Decode: function (data) {
    throw new Error("Function not implemented.");
  },
  getFileThumbnailNode: function () {
    throw new Error("Function not implemented.");
  },
  setFileThumbnailNodeAsync: function (node) {
    throw new Error("Function not implemented.");
  },
};
var getCodeString = (func) => {
  const code = func.toString();
  const body = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));
  return body;
};
var postFigmaMessage = (func) => {
  parent.postMessage(
    {
      pluginMessage: {
        type: "execute",
        code: getCodeString(func),
      },
    },
    "*"
  );
};
export { figma, getCodeString, postFigmaMessage };
