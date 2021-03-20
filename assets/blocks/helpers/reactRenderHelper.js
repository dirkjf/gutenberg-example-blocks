import React from "react";
import ReactDOM from "react-dom";
import blockNameHelper from "./blockNameHelper";

const reactRenderHelper = (blockName, FrontEnd) => {
  const block = blockNameHelper.frontEndCase(blockName);
  document.querySelectorAll(`[data-react-render=${block}]`).forEach(
    blockNode => {
      const attributes = JSON.parse(blockNode.firstChild.dataset.attributes);
      ReactDOM.render(<FrontEnd className={block} {...attributes} />, blockNode);
    }
  )
}

export default reactRenderHelper;
