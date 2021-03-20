import React from "react";
import {useBlockProps} from '@wordpress/block-editor';
import {ReactRender} from "./ReactRender";
import {PanelBody, TextControl} from "@wordpress/components";
import {RichText, InspectorControls} from "@wordpress/editor";

export default function edit(props, blockName) {

  const {attributes: {borderColor, title}, setAttributes} = props;

  let blockProps = useBlockProps({
    className: blockName
  });

  const changeTitle = (value) => {
    setAttributes({title: value});
  }

  const changeBorderColor = (value) => {
    setAttributes({borderColor: value});
  }

  return (
    <>
      <InspectorControls>
      <PanelBody title={'Colors'} initialOpen={true}>
        <TextControl
          label={'Border Color'}
          onChange={changeBorderColor}
          value={borderColor}
        />
      </PanelBody>
      </InspectorControls>
      <div {...blockProps}>
        <div className={'inner-block'} style={{borderColor: borderColor}}>
        <RichText
            tagName="h2"
            value={title}
            onChange={changeTitle}
        />
      </div>
        {/*<ReactRender {...props.attributes} />*/}
      </div>
    </>
  )
}
