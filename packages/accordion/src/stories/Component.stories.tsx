import * as React from 'react'
import type { Meta, StoryObj } from '@storybook/react'

import { Accordion } from '../Component'
import { Button } from '../../../button/src'
import { Loader } from '../../../loader/src'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion
}

type Story = StoryObj<typeof Accordion>
export default meta

/** description */
export const Sandbox: Story = {
  args: {
    title: 'Star Wars',
    description: 'A long time ago in a galaxy far, far away... .',
    extra: 'Imma help-p-p-er cos text of help am I',
    children: (
      <div>
        The dead speak! The galaxy has heard a mysterious broadcast, a threat of REVENGE in the sinister voice of the
        late EMPEROR PALPATINE. GENERAL LEIA ORGANA dispatches secret agents to gather intelligence, while REY, the last
        hope of the Jedi, trains for battle against the diabolical FIRST ORDER. Meanwhile, Supreme Leader KYLO REN rages
        in search of the phantom Emperor, determined to destroy any threat to his power....
      </div>
    )
  }
}

export const Controlled: Story = {
  render: () => {
    const [expanded, setExpanded] = React.useState(false)

    return (
      <div style={{ display: 'flex', gap: 12, alignItems: 'start' }}>
        <Button onClick={() => setExpanded(!expanded)}>{expanded ? 'Закрыть' : 'Открыть'}</Button>

        <Accordion title="Подробнее" open={expanded}>
          По состоянию на 30 июня 2020 года имеет 17 региональных филиалов и 117 расчетно-кассовых отделений на
          территории Республики Казахстан и Российской Федерации
        </Accordion>
      </div>
    )
  }
}

export const Dynamic: Story = {
  render: () => {
    const Content = () => (
      <div>
        <div>Content...</div>
        <div>Content...</div>
        <div>Content...</div>
      </div>
    )

    const [expanded, setExpanded] = React.useState(false)
    const [loaded, setLoaded] = React.useState(false)

    const handleToggle = () => {
      if (!expanded) {
        setTimeout(() => setLoaded(true), 2000)
      }

      setExpanded(!expanded)
    }

    const handleTransitionEnd = visible => {
      if (visible) {
        setTimeout(() => setLoaded(false), 500)
      }
    }

    return (
      <div style={{ display: 'flex', gap: 12, alignItems: 'start' }}>
        <Button onClick={handleToggle}>{expanded ? 'Свернуть' : 'Развернуть'}</Button>

        <Accordion title="Аккордион" open={expanded} onVisibleChange={handleTransitionEnd}>
          <div>{loaded ? <Content /> : <Loader />}</div>
        </Accordion>
      </div>
    )
  }
}
