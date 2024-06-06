import React, { useRef } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

const GradientBgImage = ({ list }) => {
  const bgImageRef = useRef(null);

  const changeBgImage = (bgImage) => {
    bgImageRef.current.style.backgroundImage = `linear-gradient(${bgImage})`;
  };

  return (
    <CSSTransitionGroup>
      {list.map((item, index) => (
        <div
          key={index}
          ref={bgImageRef}
          style={{
            width: '100%',
            height: '100px',
            backgroundImage: `linear-gradient(${item.bgImage})`,
            transition: 'background-image 0.3s ease',
          }}
        >
          {/* 你的内容 */}
        </div>
      ))}
    </CSSTransitionGroup>
  );
};

export default GradientBgImage;