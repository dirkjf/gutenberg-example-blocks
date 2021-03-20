/*
This file contains all the entries for Webpack (both for development and production).
It is recommended to group assets that are always used together with an index.js file (including style files).
For example, you can have an entry "Main" that includes all assets that are used everywhere on the front-end.
*/
const entries = {
  'editor-index': "./assets/blocks/editorIndex.js",
  'static-block': "./assets/blocks/StaticBlock/publicIndex.js",
  'react-block': "./assets/blocks/ReactBlock/publicIndex.js",
  'server-side-block': "./assets/blocks/ServerSideBlock/publicIndex.js",
};
module.exports = entries;
