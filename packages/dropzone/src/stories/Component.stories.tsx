import * as React from 'react'
import { Dropzone } from '../Component'
import { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Dropzone> = {
  title: 'Dropzone',
  component: Dropzone
}

type Story = StoryObj<typeof Dropzone>
export default meta

const styles: React.CSSProperties = {
  width: 400,
  height: 180,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}

export const Sandbox: Story = {
  render: args => {
    const [filesList, setFilesList] = React.useState([])
    const handleDrop = files => {
      setFilesList(
        Array.from(files)
          .map((file: any) => file.name)
          .filter(Boolean)
      )
    }
    return (
      <Dropzone onDrop={handleDrop} {...args}>
        <div style={styles}>
          {filesList.length > 0 ? (
            <ul>
              {filesList.map(file => (
                <li key={file}>{file}</li>
              ))}
            </ul>
          ) : (
            <span>Drag & Drop</span>
          )}
        </div>
      </Dropzone>
    )
  },
  argTypes: {}
}
