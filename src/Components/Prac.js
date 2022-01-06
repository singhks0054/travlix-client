import React from 'react';
import { useCountUp } from 'react-countup';

const Counter = (props) => {
  const countUpRef = React.useRef(null);
  useCountUp({
    ref: countUpRef,
    start: 0,
    end: props.till,
    delay: 2,
    duration: 8
  });
  return (
    <div>

      <div ref={countUpRef} style={{ padding: '5vh 0', fontSize: '30px' }} />
      <div>{props.title}</div>
    </div>
  );
};

export default Counter;