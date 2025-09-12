import React, { useState } from 'react';
import p1 from "../../assets/Presentation/1.jpg";
import p2 from "../../assets/Presentation/2.jpg";
import p3 from "../../assets/Presentation/3.jpg";
import p4 from "../../assets/Presentation/4.jpg";
import p5 from "../../assets/Presentation/5.jpg";
import p6 from "../../assets/Presentation/6.jpg";
import p7 from "../../assets/Presentation/7.jpg";
import p8 from "../../assets/Presentation/8.jpg";
import p9 from "../../assets/Presentation/9.jpg";
import p10 from "../../assets/Presentation/10.jpg";
import p11 from "../../assets/Presentation/11.jpg";
import p12 from "../../assets/Presentation/12.jpg";

const PresentationBook = () => {
  const [currentPage, setCurrentPage] = useState(0);
  
  const presentationImages = [
    p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12
  ];

  const nextPage = () => {
    setCurrentPage(prev => (prev < presentationImages.length - 1 ? prev + 1 : prev));
  };

  const prevPage = () => {
    setCurrentPage(prev => (prev > 0 ? prev - 1 : prev));
  };

  const goToPage = (index) => {
    setCurrentPage(index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Final Presentation</h2>
      <p className="text-center text-gray-600 mb-8">Page {currentPage + 1} of {presentationImages.length}</p>
      
      {/* Main presentation view */}
      <div className="relative bg-white rounded-xl shadow-2xl p-4 mb-8 border border-gray-200">
        <div className="flex justify-center items-center min-h-[500px]">
          <img 
            src={presentationImages[currentPage]} 
            alt={`Presentation page ${currentPage + 1}`}
            className="max-h-[480px] max-w-full object-contain rounded-lg shadow-md"
          />
        </div>
        
        {/* Navigation arrows */}
        <button 
          onClick={prevPage}
          disabled={currentPage === 0}
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-all ${
            currentPage === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={nextPage}
          disabled={currentPage === presentationImages.length - 1}
          className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-all ${
            currentPage === presentationImages.length - 1 ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
          }`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Thumbnail navigation */}
      <div className="bg-white rounded-xl shadow-md p-4">
        <h3 className="text-lg font-semibold text-gray-700 mb-3">Navigation</h3>
        <div className="grid grid-cols-6 gap-2">
          {presentationImages.map((img, index) => (
            <div 
              key={index}
              onClick={() => goToPage(index)}
              className={`cursor-pointer border-2 rounded-lg overflow-hidden transition-all ${
                index === currentPage ? 'border-blue-500 scale-105' : 'border-gray-200 hover:border-gray-400'
              }`}
            >
              <img 
                src={img} 
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-20 object-cover"
              />
              <div className="text-xs text-center py-1 bg-gray-100">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Keyboard navigation hint */}
      <div className="mt-4 text-center text-sm text-gray-500">
        <p>Use keyboard arrows ← → to navigate between pages</p>
      </div>
    </div>
  );
};

// Add keyboard navigation
const PresentationBookWithKeyboard = () => {
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        document.querySelector('[aria-label="Next page"]')?.click();
      } else if (e.key === 'ArrowLeft') {
        document.querySelector('[aria-label="Previous page"]')?.click();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return <PresentationBook />;
};

export default PresentationBookWithKeyboard;