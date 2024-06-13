import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const SkeletonGalleryCard = () => {
  return (
    <div className="w-[250px] p-4">
      <Skeleton height={150} />
      <Skeleton count={3} style={{ marginTop: 10 }} />
    </div>
  );
};

export default SkeletonGalleryCard;
