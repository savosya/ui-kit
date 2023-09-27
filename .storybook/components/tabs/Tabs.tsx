import React, {useCallback, useLayoutEffect, useMemo, useRef, useState} from 'react';
import {clsx} from 'clsx';

import {allTabs, TabType} from "./utils";
import cls from './styles.module.scss'


type Props = {
  docs: React.ReactNode
  props: React.ReactNode
  css: React.ReactNode

  canvas: React.ReactNode
}
export const Tabs = (
  {
    ...restTabs
  }: Props) => {
  const [tab, setTab] = useState<TabType>(Object.keys(restTabs)[0] as TabType)
  const trackerRef = useRef<HTMLDivElement | null>(null)
  const startingRef = useRef<HTMLDivElement | null>(null)

  useLayoutEffect(() => {
    document.querySelectorAll('[data-category-value]').forEach(node => {
      const nodeValue = node.getAttribute('data-category-value')

      if (nodeValue === tab && trackerRef?.current) {
        moveTracker(node)
      }
    })
  }, [])

  const handleCategoryClick = useCallback((event: any) => {
    const target = event.target as HTMLDivElement
    const newValue = target.getAttribute('data-category-value')

    if (newValue) {
      moveTracker(target)
      setTab(newValue as TabType)
    }
  }, [])

  const moveTracker = useCallback((node: Element) => {
    if (!trackerRef?.current || !startingRef?.current) return;

    const startingRect = startingRef?.current.getBoundingClientRect()
    const rect = node.getBoundingClientRect()
    const elementWidth = rect.right - rect.left;

    trackerRef.current.style.transform = `translateX(${rect.x - startingRect.x - 8}px)`
    trackerRef.current.style.width = `${elementWidth + 16}px`
  }, [])

  return (
    <>
      <div className={cls.categoryList} ref={startingRef}>
        {allTabs.map(({value, label}) => {
          const isTab = Boolean(restTabs[value])
          return isTab && (
            <div
              key={value}
              className={clsx(cls.categoryItem, {[cls.activeItem]: value === tab})}
              data-category-value={value}
              onClick={handleCategoryClick}
            >
              {label}
            </div>
          )
        })}
        <div ref={trackerRef} className={cls.categoryTracker}/>
      </div>

      <div className={cls.content}>
        {restTabs[tab]}
      </div>
    </>
  )
};
