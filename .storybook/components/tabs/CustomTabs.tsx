import React, { useCallback, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { clsx } from 'clsx';

import { allTabs, TabType } from './utils';
import cls from './styles.module.scss';

type Props = {
  custom?: { component: React.ReactNode; value: string; label: string }[];
};
export const CustomTabs = ({ custom, ...restTabs }: Props) => {
  const trackerRef = useRef<HTMLDivElement | null>(null);
  const startingRef = useRef<HTMLDivElement | null>(null);

  const [customTab, setCustomTab] = useState<string>(custom[0].value);
  const customMap = useMemo(() => {
    let map: any = {};
    custom.forEach(c => {
      map[c.value] = c.component;
    });
    return map;
  }, []);

  useLayoutEffect(() => {
    document.querySelectorAll('[data-category-value]').forEach(node => {
      const nodeValue = node.getAttribute('data-category-value');

      if (nodeValue === customTab && trackerRef?.current) {
        moveTracker(node);
      }
    });
  }, []);

  const handleCustomClick = useCallback((event: any) => {
    const target = event.target as HTMLDivElement;
    const newValue = target.getAttribute('data-category-value');

    if (newValue) {
      moveTracker(target);
      setCustomTab(newValue as TabType);
    }
  }, []);

  const moveTracker = useCallback((node: Element) => {
    if (!trackerRef?.current || !startingRef?.current) return;

    const startingRect = startingRef?.current.getBoundingClientRect();
    const rect = node.getBoundingClientRect();
    const elementWidth = rect.right - rect.left;

    trackerRef.current.style.transform = `translateX(${rect.x - startingRect.x - 8}px)`;
    trackerRef.current.style.width = `${elementWidth + 16}px`;
  }, []);

  return (
    <>
      <div className={cls.categoryList} ref={startingRef}>
        {custom.map(({ value, label }) => {
          return (
            <div
              key={value}
              className={clsx(cls.categoryItem, { [cls.activeItem]: value === customTab })}
              data-category-value={value}
              onClick={handleCustomClick}
            >
              {label}
            </div>
          );
        })}
        <div ref={trackerRef} className={cls.categoryTracker} />
      </div>

      <div className={cls.content}>{customMap[customTab]}</div>
    </>
  );
};
