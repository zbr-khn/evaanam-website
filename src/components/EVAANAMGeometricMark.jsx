import React, { useState } from "react";

/**
 * EVAANAMGeometricMark
 * Displays the user's authentic official brand logo image (from /brand/logo.jpg or logo.png)
 * across the Navigation Bar, Header, Footer, and Platform interfaces.
 */
export default function EVAANAMGeometricMark({
  size = 36,
  className = "",
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      {!imageError ? (
        <img
          src="./brand/logo.jpg"
          alt="EVAANAM Official Brand Logo"
          style={{ width: `${size}px`, height: `${size}px` }}
          className="object-contain rounded-sm shadow-sm"
          onError={(e) => {
            if (e.target.src.endsWith(".jpg")) {
              e.target.src = "./brand/logo.png";
            } else {
              setImageError(true);
            }
          }}
        />
      ) : (
        <img
          src="./brand/logo.png"
          alt="EVAANAM Logo"
          style={{ width: `${size}px`, height: `${size}px` }}
          className="object-contain"
        />
      )}
    </div>
  );
}
