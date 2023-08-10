import { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      return;
    }

    const apiUrl = 'https://api.cloudflare.com/client/v4/accounts/39aa4ea3c7a7d766adc4428933324787/images/v1';
    const authToken = 'Bearer LpMNSFUw7gmxpn4ZZ7P2ZAcReF6Q-HlbIWqthbO0';

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          Authorization: authToken,
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default Upload;
