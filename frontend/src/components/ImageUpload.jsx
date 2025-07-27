import React, { useState } from 'react';
import { uploadImage } from '../api/api';

const ImageUpload = ({ onResult }) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert('Please select a file!');
    
    const formData = new FormData();
    formData.append('image', file);

    setLoading(true);
    try {
      const result = await uploadImage(formData);
      onResult(result);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert('Upload failed!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-md space-y-4">
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="file:border file:border-gray-300 file:rounded file:px-4 file:py-2"
      />
      <button
        onClick={handleUpload}
        className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        disabled={loading}
      >
        {loading ? 'Uploading...' : 'Upload and Predict'}
      </button>
    </div>
  );
};

export default ImageUpload;
