import React from 'react';

const LoadingBar = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
    </div>
  );
};

export default LoadingBar;
