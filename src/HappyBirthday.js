import React, { Fragment } from 'react';
import RenderBits from './RenderBits';
import { happy, birthday, to, shy } from './constants';

const HappyBirthday = () => (
  <Fragment>
    <div className="text">
      <RenderBits bits={happy} />
    </div>
    <div className="text">
      <RenderBits bits={birthday} />
    </div>
    <div className="flex-row">
      <div className="text">
        <RenderBits bits={to} />
      </div>
      <div className="text shy">
        <RenderBits bits={shy} />
      </div>
    </div>
  </Fragment>
);

export default HappyBirthday;
