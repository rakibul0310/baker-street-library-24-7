import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

function DropzoneImage({ setImage, image }) {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    setImage(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div
      className="w-[100%] bg-gray-200 h-[200px] border border-gray-300 flex flex-col justify-center items-center"
      {...getRootProps()}
    >
      <i class="ri-download-cloud-2-line text-6xl"></i>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
      <div className="w-[30%] h-[30%]"></div>
    </div>
  );
}

export default DropzoneImage;
