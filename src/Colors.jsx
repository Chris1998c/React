import React from 'react';
import Color from './Color';

export function Colors({ items }) {
  return(
    <ul>
      {items.map((color, index) => (
        <Color key={index} color={color} />
      ))}
    </ul>
  );
};

