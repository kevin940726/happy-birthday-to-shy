import React, { cloneElement } from 'react';
import { COLOR_MAPPING } from './constants';

const RenderBits = ({ bits, children }) => (
  bits.map((row, r) => (
    <div key={r}>
      {row.split('').map((bit, b) => {
        let element = <span />;

        if (typeof children === 'function') {
          element = children(bit, r, b);
        } else if (children) {
          element = children;
        }

        return cloneElement(element, {
          key: b,
          className: ['bit', element.props.className].filter(Boolean).join(' '),
          style: {
            backgroundColor: COLOR_MAPPING[bit],
            ...(element.props.style || {}),
          },
        })
      })}
    </div>
  ))
);

export default RenderBits;
