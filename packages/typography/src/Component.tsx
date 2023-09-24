import * as React from 'react'

import {Title, TitleProps} from './parts'
import {Text, TextProps} from './parts'
export {TitleProps, TextProps}

export const Typography: {
  Title: typeof Title;
  Text: typeof Text;
} = {
  Title,
  Text,
};
// export const Typography = () => {
//   return null
// }
// Typography.Title = Title
// Typography.Text = Text
