import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [base64String, setBase64String] = useState(null);

  const fileSelectedHandler = (event) => {
    const file = event.target.files[0];

    // Read the selected file as a data URL
    const reader = new FileReader();
    reader.onload = () => {
      // Convert the data URL to a base64 string
      const base64 = reader.result;
      setBase64String(base64);
    };
    reader.readAsDataURL(file);
  };

  const fileUploadHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('image', selectedFile);
    try {
      const response = await axios.post('/upload', formData);
      console.log(response);
      alert('File uploaded successfully');
    } catch (error) {
      console.error(error);
      alert('File upload failed');
    }
  };

  return (
    <div>
      <form onSubmit={fileUploadHandler}>
        <input type="file" onChange={fileSelectedHandler} />
        {base64String && <img style={{width: "90%", height: "auto"}} src={base64String} alt="Preview" />}
        <button type="submit" disabled={!selectedFile}>
          Upload
        </button>
      </form>
    </div>
  );
};

export default FileUpload
