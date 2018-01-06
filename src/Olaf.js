import React, { PureComponent } from 'react';
import RenderBits from './RenderBits';
import { olaf, COLOR_MAPPING } from './constants';

const waitFor = ms => new Promise(resolve => setTimeout(resolve, ms));

class Olaf extends PureComponent {
  state = {
    isBlinking: false,
  };

  componentDidMount() {
    this.timer = setInterval(async () => {
      await this.toggleBlink();
      await waitFor(150);
      await this.toggleBlink();
      await waitFor(150);
      await this.toggleBlink();
      await waitFor(150);
      await this.toggleBlink();
    }, 5000);
  }

  componentWillUnmount() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  toggleBlink = () => (
    new Promise((resolve) => {
      this.setState(({ isBlinking }) => ({
        isBlinking: !isBlinking,
      }), resolve);
    })
  )

  render() {
    const { isBlinking } = this.state;

    return (
      <div className="olaf">
        <RenderBits bits={olaf}>
          {(bit, r, b) => {
            const isBlinkingBit = r === 13 && (b === 9 || b === 14) && isBlinking;
          
            return (
              <span
                className={isBlinkingBit && 'blink'}
                style={isBlinkingBit ? {
                  backgroundColor: COLOR_MAPPING['-'],
                } : {}}
              />
            );
          }}
        </RenderBits>
      </div>
    );
  }
}

export default Olaf;
