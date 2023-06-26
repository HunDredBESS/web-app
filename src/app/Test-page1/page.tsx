"use client"
import React, { useState } from 'react';

const FileUpload: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    setSelectedFile(file || null);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      // Send the file to the server using fetch or axios
      fetch('http://127.0.0.1/uploads/', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          // Handle the response from the server
          console.log('File uploaded successfully: ', response);
        })
        .catch((error) => {
          // Handle error
          console.error('Error uploading file:', error);
        });
    }
  };
  console.log('file : ',selectedFile)
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} className='bg-white'>Upload</button>
    </div>
  );
};

export default FileUpload;

