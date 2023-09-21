import * as React from 'react';
import {Breadcrumbs} from '../Component';

export default {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
};

export const Default = () => {
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
    console.log('route', route)
  }

  return <Breadcrumbs home={home} crumbs={routes} onCrumbClick={onClick}/>
};

