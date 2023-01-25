import React, { useEffect } from "react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./Dropzone.scss";
function Dropzone(props, { open }) {
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({ disabled: props.isDisabled });

  useEffect(() => {
    acceptedFiles[0] !== undefined && props.updateDropzoneValues(acceptedFiles);
  }, [acceptedFiles]);

  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const fileName = acceptedFiles.map((file) => file.name);
  useEffect(() => {
    acceptedFiles[0] !== undefined &&
      props.setFileName((prev) => {
        return [
          {
            ...prev,
            fileName: fileName[0],
            atField: props.currectUploadIndex,
          },
        ];
      });
  }, [props.currectUploadIndex]);

  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <input className="input-zone" {...getInputProps()} />
      <div className="text-center">
        <div id="upload-icon"></div>
        {!isDragActive ? (
          <p className="dropzone-content">
            גררו את הקובץ או{" "}
            <span className="press-to-upload" onClick={open}>
              לחצו כאן
            </span>{" "}
            כדי להעלות מסמך
          </p>
        ) : (
          <p className="dropzone-content">שחררו את הקובץ</p>
        )}
      </div>
    </div>
  );
}
export default Dropzone;
