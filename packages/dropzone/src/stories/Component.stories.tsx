import * as React from 'react';
import {Dropzone} from '../Component';

export default {
  title: 'Components/Dropzone',
  component: Dropzone,
};

export const Default = () => {
  const [filesList, setFilesList] = React.useState([]);
  const handleDrop = (files) => {
    setFilesList(
      Array.from(files)
        .map((file: any) => file.name)
        .filter(Boolean)
    );
  };
  return (
    <Dropzone
      // error
      onDrop={handleDrop}
    >
      <div
        style={{
          width: 400,
          height: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {filesList.length > 0 ? (
          <ul>
            {filesList.map((file) => (
              <li key={file}>{file}</li>
            ))}
          </ul>
        ) : (
          <span>Drag & Drop</span>
        )}
      </div>
    </Dropzone>
  );
};

