import * as React from 'react';
import {Counter} from '../Component';

export default {
  title: 'Components/Counter',
  component: Counter,
};

export const Default = () => {

  return (
    <div>
      <Counter
        // value={22}
        // onChange={(v) => console.log('change', v)}
        // onAdd={(v) => console.log('add', v)}
        // onSub={(v) => console.log('sub', v)}
        // max={2}
        // min={-3}
      />
    </div>
  )
};

