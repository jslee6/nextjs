'use client';

import { useEffect, useState } from 'react';

export default function ImageList({ userId }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const res = await fetch(`/api/images/${userId}`);
      const data = await res.json();
      setImages(data);
    };

    fetchImages();
  }, [userId]);

  return (
    <div>
      {images.map((image) => (
        <img key={image.id} src={image.url} alt={`Image ${image.id}`} />
      ))}
    </div>
  );
}
