import * as React from 'react';
import {Accordion} from '../Component';

export default {
  title: 'Components/Accordion',
  component: Accordion,
};

export const Default = () => {

  return (
    <div style={{
      boxSizing: "border-box",
      width: 1200,
      height: 600,
      padding: 16,
      backgroundColor: '#cccccc'
    }}>
      <Accordion
        title={'Star Wars'}
        description={'A long time ago in a galaxy far, far away... .'}
        extra={'Imma help-p-p-er cos text of help am I'}
      >
        <div>
          The dead speak! The galaxy has heard a mysterious broadcast, a threat of REVENGE in the sinister voice of the late EMPEROR PALPATINE.
          GENERAL LEIA ORGANA dispatches secret agents to gather intelligence, while REY, the last hope of the Jedi, trains for battle against the diabolical FIRST ORDER.
          Meanwhile, Supreme Leader KYLO REN rages in search of the phantom Emperor, determined to destroy any threat to his power....
        </div>
      </Accordion>
    </div>
  )
};

