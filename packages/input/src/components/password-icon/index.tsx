import React from 'react';

type Props = {
  size?: number
  className?: string
}
// 4683C8
export const PasswordIcon = ({className, size = 22}: Props) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.25 7.71423C18.7526 7.71423 19.2547 7.82681 19.7425 8.04863C19.8736 8.10849 20.0269 8.09507 20.1462 8.01054C20.265 7.92685 20.3337 7.78578 20.3272 7.63765C20.2873 6.71942 19.5578 6 18.6667 6H3.66664C2.74746 6 2 6.7688 2 7.71423V11.9999C2 12.9453 2.74746 13.7141 3.66668 13.7141H13.25C13.4803 13.7141 13.6667 13.5225 13.6667 13.2856V12.857C13.6667 12.3087 13.93 11.7881 14.3702 11.4641C14.4671 11.393 14.5297 11.2829 14.5423 11.1616C14.7478 9.19623 16.3421 7.71423 18.25 7.71423ZM5.84684 9.91441C6.04622 10.0329 6.11458 10.2949 5.99942 10.4999C5.92212 10.6372 5.78212 10.7142 5.63809 10.7142C5.56727 10.7142 5.49567 10.6958 5.43016 10.6569L5.33333 10.5994V10.7142C5.33333 10.9511 5.14696 11.1428 4.91665 11.1428C4.68637 11.1428 4.50001 10.9511 4.50001 10.7142V10.5994L4.40317 10.6569C4.33766 10.6958 4.26606 10.7142 4.19524 10.7142C4.05118 10.7142 3.91121 10.6372 3.83391 10.4999C3.71875 10.2949 3.78711 10.0329 3.98649 9.91441L4.08309 9.85707L3.98649 9.79974C3.78711 9.68129 3.71875 9.41929 3.83391 9.21423C3.94907 9.00916 4.20418 8.93885 4.40317 9.05729L4.50001 9.11475V8.99992C4.50001 8.76303 4.68637 8.57134 4.91669 8.57134C5.147 8.57134 5.33337 8.76303 5.33337 8.99992V9.11475L5.4302 9.05725C5.62798 8.93881 5.88391 9.00912 5.99946 9.21419C6.11462 9.41925 6.04626 9.68125 5.84688 9.7997L5.75028 9.85703L5.84684 9.91441ZM9.18021 9.91441C9.37959 10.0329 9.44794 10.2949 9.33279 10.4999C9.25548 10.6372 9.11548 10.7142 8.97146 10.7142C8.90064 10.7142 8.82904 10.6958 8.76353 10.6569L8.66669 10.5994V10.7142C8.66669 10.9511 8.48033 11.1428 8.25001 11.1428C8.0197 11.1428 7.83333 10.9511 7.83333 10.7142V10.5994L7.7365 10.6569C7.67099 10.6958 7.59939 10.7142 7.52857 10.7142C7.3845 10.7142 7.24454 10.6372 7.16724 10.4999C7.05208 10.2949 7.12044 10.0329 7.31981 9.91441L7.41642 9.85707L7.31981 9.79974C7.12044 9.68129 7.05208 9.41929 7.16724 9.21423C7.282 9.00916 7.53669 8.93885 7.7365 9.05729L7.83333 9.11479V8.99996C7.83333 8.76307 8.0197 8.57138 8.25001 8.57138C8.48033 8.57138 8.66669 8.76307 8.66669 8.99996V9.11479L8.76353 9.05729C8.96169 8.93885 9.21681 9.00916 9.33279 9.21423C9.44794 9.41929 9.37959 9.68129 9.18021 9.79974L9.08361 9.85707L9.18021 9.91441ZM12.5135 9.91441C12.7129 10.0329 12.7813 10.2949 12.6661 10.4999C12.5888 10.6372 12.4488 10.7142 12.3048 10.7142C12.234 10.7142 12.1624 10.6958 12.0969 10.6569L12 10.5994V10.7142C12 10.9511 11.8137 11.1428 11.5833 11.1428C11.353 11.1428 11.1667 10.9511 11.1667 10.7142V10.5994L11.0698 10.6569C11.0043 10.6958 10.9327 10.7142 10.8619 10.7142C10.7178 10.7142 10.5779 10.6372 10.5006 10.4999C10.3854 10.2949 10.4538 10.0329 10.6531 9.91441L10.7497 9.85707L10.6531 9.79974C10.4538 9.68129 10.3854 9.41929 10.5006 9.21423C10.6153 9.00916 10.8704 8.93885 11.0698 9.05729L11.1667 9.11479V8.99996C11.1667 8.76307 11.353 8.57138 11.5833 8.57138C11.8137 8.57138 12 8.76307 12 8.99996V9.11479L12.0969 9.05729C12.2954 8.93885 12.5506 9.00916 12.6661 9.21423C12.7813 9.41929 12.7129 9.68129 12.5135 9.79974L12.4169 9.85707L12.5135 9.91441Z"
        fill="currentColor"/>
      <path
        d="M21.1667 12.0001V11.5715C21.1667 9.91754 19.8581 8.57159 18.25 8.57159C16.6419 8.57159 15.3333 9.91754 15.3333 11.5715V12.0001C14.874 12.0001 14.5 12.3847 14.5 12.8572V17.1429C14.5 17.6154 14.874 18 15.3333 18H21.1667C21.6261 18 22 17.6154 22 17.1429V12.8572C22 12.3847 21.6261 12.0001 21.1667 12.0001ZM18.6667 15.2968V15.8572C18.6667 16.0941 18.4803 16.2858 18.25 16.2858C18.0197 16.2858 17.8334 16.0941 17.8334 15.8572V15.2968C17.5889 15.1472 17.4167 14.8845 17.4167 14.5715C17.4167 14.099 17.7906 13.7144 18.25 13.7144C18.7094 13.7144 19.0833 14.099 19.0833 14.5715C19.0834 14.8846 18.9111 15.1472 18.6667 15.2968ZM19.5 12.0001H17V11.5715C17 10.8626 17.5607 10.2859 18.25 10.2859C18.9393 10.2859 19.5 10.8626 19.5 11.5715V12.0001Z"
        fill="currentColor"/>
    </svg>
  );
};