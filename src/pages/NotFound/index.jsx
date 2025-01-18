import React from 'react';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-customLightBlue/50 via-customGreen/50 to-customOrange/50">
      <div className="text-center p-6 bg-white rounded-lg shadow-lg max-w-md mx-auto">
        <div className="mb-6">
          <img 
            src="https://animalcorner.org/wp-content/uploads/2022/03/sad-cat.jpeg" 
            alt="Sad Cat" 
            className="w-32 mx-auto" 
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-800">Oops! Page Not Found</h1>
        <p className="text-lg text-gray-600 mt-4">
          The page you're looking for doesn't seem to exist.
        </p>
        <button
          onClick={() => window.location.href = '/'}
          className="mt-6 bg-customLightBlue text-white py-2 px-6 rounded-full hover:bg-customBlue transition duration-300"
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
}

export default NotFound;
