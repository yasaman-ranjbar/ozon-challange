const SkeletonLoading = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200 animate-pulse">
      <div className="aspect-square bg-gray-200 rounded-md mb-4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-3 bg-gray-200 rounded w-1/2"></div>
        <div className="flex justify-between items-center">
          <div className="h-5 bg-gray-200 rounded w-16"></div>
          <div className="h-4 bg-gray-200 rounded w-20"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoading;
