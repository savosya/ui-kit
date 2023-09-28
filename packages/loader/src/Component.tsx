import * as React from 'react'

import clsx from 'clsx'

import { LoaderProps } from './loader.types'
import cls from './index.module.scss'

export const Loader = (props: LoaderProps) => {
  const {
    size = 24,
    color = 'currentColor',
    secondaryColor = '#B7B9BD',
    className,
    fill = true,
    spinner,
    classes = {},
    ...rest
  } = props

  const loader = React.useMemo(
    () => (
      <svg
        fill="none"
        width={size}
        height={size}
        viewBox="0 0 72 72"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx(cls.root, classes?.loader)}
        style={{ width: size, height: size }}
        {...rest}
      >
        <path
          d="M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36ZM11.4368 36C11.4368 49.5659 22.4341 60.5632 36 60.5632C49.5659 60.5632 60.5632 49.5659 60.5632 36C60.5632 22.4341 49.5659 11.4368 36 11.4368C22.4341 11.4368 11.4368 22.4341 11.4368 36Z"
          fill={spinner ? 'transparent' : secondaryColor}
        />
        <path
          d="M36 5.61143C36 2.51232 38.5273 -0.0446725 41.5888 0.436455C45.5564 1.05997 49.405 2.34515 52.9703 4.25083C58.1914 7.0416 62.6438 11.077 65.9329 15.9994C69.222 20.9219 71.2464 26.5796 71.8266 32.4713C72.4069 38.363 71.5253 44.307 69.2597 49.7765C66.9941 55.2461 63.4146 60.0726 58.8382 63.8283C54.2618 67.5841 48.8298 70.1533 43.0234 71.3083C37.2169 72.4632 31.2152 72.1684 25.5499 70.4499C21.6813 69.2764 18.0512 67.4638 14.8048 65.0992C12.2997 63.2746 12.3207 59.6795 14.5121 57.4881C16.7035 55.2966 20.234 55.3635 22.8615 57.0068C24.7087 58.1621 26.7071 59.0731 28.8077 59.7103C32.7068 60.8931 36.8375 61.096 40.8339 60.301C44.8302 59.5061 48.5688 57.7379 51.7185 55.153C54.8682 52.568 57.3318 49.2462 58.8911 45.4818C60.4504 41.7173 61.0572 37.6264 60.6578 33.5714C60.2584 29.5164 58.8652 25.6225 56.6014 22.2345C54.3377 18.8466 51.2733 16.0693 47.6799 14.1485C45.744 13.1138 43.6867 12.3448 41.5636 11.8556C38.5437 11.1597 36 8.71054 36 5.61143Z"
          fill={color}
        />
      </svg>
    ),
    [props]
  )

  if (fill) {
    return <div className={clsx(cls.wrapper, className, classes?.wrapper)}>{loader}</div>
  }

  return loader
}
