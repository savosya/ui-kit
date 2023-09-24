import * as React from 'react';
import {Typography} from '../Component';

export default {
  title: 'Components/Typography',
  component: Typography,
};

const canvasStyles = {
  display: 'flex',
  gap: '64px',
  height: 300,
  padding: 16,
}

export const Default = () => {

  return (
    <div style={canvasStyles}>
      <div>
        <Typography.Title tag={"div"}>Heading div</Typography.Title>
        <Typography.Title tag={"h6"}>Heading h6</Typography.Title>
        <Typography.Title tag={"h5"}>Heading h5</Typography.Title>
        <Typography.Title tag={"h4"}>Heading h4</Typography.Title>
        <Typography.Title tag={"h3"}>Heading h3</Typography.Title>
        <Typography.Title tag={"h2"}>Heading h2</Typography.Title>
        <Typography.Title tag={"h1"}>Heading h1</Typography.Title>
      </div>

      <div>
        <Typography.Text level={1} block>Text level 1</Typography.Text>
        <Typography.Text level={2} block>Text level 2</Typography.Text>
        <Typography.Text level={3} block>Text level 3</Typography.Text>
        <Typography.Text level={4} block>Text level 4</Typography.Text>
        <Typography.Text level={5} block>Text level 5</Typography.Text>
        <Typography.Text level={6} block>Text level 6</Typography.Text>
        <Typography.Text level={7} block>Text level 7</Typography.Text>
        <Typography.Text level={8} block>Text level 8</Typography.Text>
        <Typography.Text level={9} block>Text level 9</Typography.Text>
        <Typography.Text level={10} block>Text level 10</Typography.Text>
        <Typography.Text level={11} block>Text level 11</Typography.Text>
      </div>
    </div>
  )
};

