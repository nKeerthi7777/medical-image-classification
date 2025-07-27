import React, { useState } from 'react';
import ImageUpload from '../components/ImageUpload';
import PredictionResult from './PredictionResult';

const Home = () => {
  const [result, setResult] = useState(null);

  return (
    <div className="flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Medical Image Classifier</h1>
      <ImageUpload onResult={setResult} />
      {result && <PredictionResult result={result} />}
    </div>
  );
};

export default Home;
