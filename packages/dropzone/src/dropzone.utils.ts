import React from 'react';

export const preventAndStopEvent = (event: React.SyntheticEvent) => {
  event.preventDefault();
  event.stopPropagation();
};
