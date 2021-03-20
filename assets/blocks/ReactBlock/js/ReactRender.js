import React from 'react';

export function ReactRender(props) {

  const {title, borderColor} = props;

  return (
      <div className={'inner-block'} style={{borderColor: borderColor}}>
        <h2>{title}</h2>
      </div>
  );
}
