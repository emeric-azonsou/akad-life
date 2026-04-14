"use client"
import Image from "next/image";
import { CUSTOM_IMAGES } from "../constant/customImages";

interface CustomImageProps {
  imageKey: keyof typeof CUSTOM_IMAGES;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  style?: React.CSSProperties;
}

function CustomImage({ 
  imageKey, 
  alt, 
  className = "", 
  priority = false, 
  fill = false,
  width,
  height,
  style 
}: CustomImageProps) {
  const imageSrc = CUSTOM_IMAGES[imageKey];
  
  return (
    <Image
      src={imageSrc}
      alt={alt}
      className={className}
      priority={priority}
      fill={fill}
      width={width}
      height={height}
      style={style}
    />
  );
}

export default CustomImage;