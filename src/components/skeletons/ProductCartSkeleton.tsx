export default function ProductCardSkeleton() {
  return (
    <div className="border border-gray-300 rounded-lg p-5 text-center shadow-md animate-pulse">
      <div className="text-left">
        <div className="bg-gray-300 h-6 w-3/4 rounded mb-2"></div>
        <div className="bg-gray-300 h-4 w-1/2 rounded mb-4"></div>
        <div className="bg-gray-300 h-8 w-2/3 rounded"></div>
      </div>
    </div>
  );
}