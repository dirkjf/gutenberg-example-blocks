import React from "react";

const {useBlockProps} = wp.blockEditor;


export default function save(props, blockName) {

  const {attributes: {borderColor, title} } = props;

  const blockProps = useBlockProps.save({
    className: blockName,
    style: {borderColor: borderColor}
  });

  return (
      <div {...blockProps}>
        <h2>
          {title}
        </h2>
      </div>
  )
}
