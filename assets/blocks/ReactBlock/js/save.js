import React from "react";

const {useBlockProps} = wp.blockEditor;


export default function save(props, blockName) {

  const blockProps = useBlockProps.save({
    className: blockName,
    'data-react-render': blockName,

  });

  return (
      <div {...blockProps}>
        <div data-attributes={JSON.stringify(props.attributes)}>Please enable JavaScript to display this section.</div>
      </div>
  )
}
