import * as React from 'react';


type Props = {
  className?: string
  size?: number
  onClick?: () => void
}
// 848D98
export const ChevronIcon = ({className, size = 24, onClick}: Props) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} onClick={onClick}>
      <path
        d="M5.00006 14.4982C4.9996 14.7319 5.08098 14.9583 5.23006 15.1382C5.31401 15.2395 5.41711 15.3232 5.53346 15.3846C5.6498 15.4459 5.77711 15.4837 5.90809 15.4958C6.03906 15.5079 6.17114 15.494 6.29674 15.4549C6.42234 15.4159 6.53901 15.3524 6.64006 15.2682L12.0001 10.7882L17.3701 15.1082C17.4723 15.1913 17.59 15.2533 17.7164 15.2908C17.8427 15.3282 17.9752 15.3403 18.1062 15.3264C18.2373 15.3124 18.3643 15.2727 18.4799 15.2095C18.5955 15.1464 18.6975 15.061 18.7801 14.9582C18.8711 14.8548 18.9398 14.7336 18.9818 14.6023C19.0237 14.4711 19.0381 14.3326 19.0241 14.1955C19.01 14.0584 18.9677 13.9257 18.8999 13.8057C18.8321 13.6857 18.7402 13.581 18.6301 13.4982L12.6301 8.66824C12.4511 8.52116 12.2267 8.44075 11.9951 8.44075C11.7634 8.44075 11.539 8.52116 11.3601 8.66824L5.36006 13.6682C5.23904 13.7686 5.14338 13.896 5.08083 14.0402C5.01828 14.1844 4.99061 14.3413 5.00006 14.4982Z"
        fill="currentColor"/>
    </svg>
  );
};
