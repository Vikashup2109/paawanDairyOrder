export default function ProductSkeleton() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
      <div className="skeleton w-full aspect-[4/3]" />
      <div className="p-3 space-y-2">
        <div className="skeleton h-4 w-3/4 rounded-lg" />
        <div className="skeleton h-3 w-1/2 rounded-lg" />
        <div className="skeleton h-5 w-1/3 rounded-lg mt-1" />
        <div className="skeleton h-8 w-full rounded-xl mt-1" />
      </div>
    </div>
  );
}
