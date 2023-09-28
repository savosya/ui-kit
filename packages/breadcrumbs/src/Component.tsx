import * as React from 'react';
import { useMemo } from 'react';

import clsx from 'clsx';

import { ChevroneLeft } from './components';
import { BreadcrumbsProps, Crumb } from './breadcrumbs.types';
import cls from './index.module.scss';

export const Breadcrumbs = ({
  home,
  crumbs = [],
  onCrumbClick,
  separator,
  classes,
  type = 'default',
  withEnter = true,
  withSpace = false
}: BreadcrumbsProps) => {
  const RouterMap = useMemo(() => {
    return crumbs.reduce(
      (acc: any, curr) => {
        acc.fullRoute = acc.fullRoute + curr.route;
        acc[curr.route.slice(1)] = acc.fullRoute;
        return acc;
      },
      {
        fullRoute: ''
      }
    );
  }, [crumbs]);

  const handleKeyDown = (e: any, route: string) => {
    if ((withEnter && e.code === 'Enter') || (withSpace && e.code === 'Space')) {
      onCrumbClick?.(route);
    }
  };

  const getCrumbClass = (crumb: Crumb) => {
    return clsx(cls.crumb, classes?.crumb, {
      [cls.alternative]: type === 'alternative',
      [cls.disabled]: crumb.disabled
    });
  };

  const getCrumbHandler = (crumb: Crumb, route: string) => {
    if (crumb.disabled) return undefined;
    return onCrumbClick ? () => onCrumbClick(route) : undefined;
  };

  return (
    <div className={clsx(cls.root, classes?.root)}>
      <span
        onKeyDown={e => handleKeyDown(e, home.route)}
        className={getCrumbClass(home)}
        onClick={getCrumbHandler(home, home.route)}
        tabIndex={home.disabled ? -1 : 1}
      >
        {home.label}
      </span>

      {crumbs?.map((crumb, index) => {
        const route = RouterMap[crumb.route.slice(1)];

        return (
          <React.Fragment key={crumb.route}>
            {separator ? separator : <ChevroneLeft />}

            <span
              onKeyDown={!crumb.disabled ? e => handleKeyDown(e, route) : undefined}
              className={getCrumbClass(crumb)}
              onClick={getCrumbHandler(crumb, route)}
              tabIndex={crumb?.disabled ? -1 : index + 1}
            >
              {crumb.label}
            </span>
          </React.Fragment>
        );
      })}
    </div>
  );
};
