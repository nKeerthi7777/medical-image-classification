import React from 'react';

const PredictionResult = ({ result, confidence }) => {
  if (!result) return null;

  return (
    <div className="w-full max-w-md mx-auto mt-6 p-6 bg-white rounded-xl shadow-lg text-center">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Prediction Result</h3>

      <p className="text-lg font-medium text-blue-600 mb-2">
        Diagnosis: <span className="font-bold">{result}</span>
      </p>

      {confidence !== undefined && (
        <p className="text-sm text-gray-600">
          Confidence: <span className="font-semibold">{(confidence * 100).toFixed(2)}%</span>
        </p>
      )}
    </div>
  );
};

export default PredictionResult;
