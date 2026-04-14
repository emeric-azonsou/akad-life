"use client"
import { useState } from "react";
import Image from "next/image";
import { CUSTOM_IMAGES } from "../constant/customImages";

interface CustomGalleryProps {
  images: Array<{
    key: keyof typeof CUSTOM_IMAGES;
    alt: string;
    title?: string;
    description?: string;
  }>;
  title?: string;
  subtitle?: string;
}

function CustomGallery({ images, title, subtitle }: CustomGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="section-full bg-white content-inner-2">
      {(title || subtitle) && (
        <div className="section-head text-center">
          {title && <h2 className="title">{title}</h2>}
          {subtitle && <p>{subtitle}</p>}
        </div>
      )}
      
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div 
            key={index}
            className="gallery-item"
            onClick={() => setSelectedImage(index)}
          >
            <div className="gallery-media">
              <Image
                src={CUSTOM_IMAGES[image.key]}
                alt={image.alt}
                width={400}
                height={300}
                className="gallery-image"
              />
              {(image.title || image.description) && (
                <div className="gallery-overlay">
                  {image.title && <h4>{image.title}</h4>}
                  {image.description && <p>{image.description}</p>}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedImage !== null && (
        <div className="gallery-modal" onClick={() => setSelectedImage(null)}>
          <div className="gallery-modal-content">
            <button 
              className="gallery-close"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <Image
              src={CUSTOM_IMAGES[images[selectedImage].key]}
              alt={images[selectedImage].alt}
              width={800}
              height={600}
              className="gallery-modal-image"
            />
            <div className="gallery-modal-info">
              {images[selectedImage].title && (
                <h3>{images[selectedImage].title}</h3>
              )}
              {images[selectedImage].description && (
                <p>{images[selectedImage].description}</p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomGallery;