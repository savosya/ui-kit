import * as React from 'react';
import {Breadcrumbs} from '../Component';
import {Meta, StoryObj} from "@storybook/react";

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs
};

type Story = StoryObj<typeof Breadcrumbs>;
export default meta;



export const Sandbox: Story = {
  args: {
    home: {route: '/', label: '/'},
    crumbs: [
      {route: '/crumb_1', label: 'Crumb 1'},
      {route: '/crumb_2', label: 'Crumb 2'},
      {route: '/crumb_3', label: 'Crumb 3'},
      {route: '/crumb_4', label: 'Crumb 4'},
      {route: '/crumb_5', label: 'Crumb 5'},
      {route: '/crumb_6', label: 'Crumb 6'},
    ]
  }
}

export const Example: Story = {
  render: () => {

    const home = {
      route: '/',
      label: '/'
    }

    const routes = [
      {
        route: '/search',
        label: 'Поиск'
      },
      {
        route: '/settings',
        label: 'Настройки',
        disabled: true
      },
      {
        route: '/1',
        label: 'Product 1'
      },
    ]

    const onClick = (route: string) => {
      alert(`[route]: ${route}`)
      console.log('route', route)
    }

    return <Breadcrumbs home={home} crumbs={routes} onCrumbClick={onClick}/>
  }
}

