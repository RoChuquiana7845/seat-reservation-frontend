export default function ProductDetailSkeleton() {
  return (
    <div className="container mx-auto p-4">
      <section className="flex flex-col md:flex-row items-start justify-center w-full space-y-4 md:space-y-0 md:space-x-4">
  
        <figure className="w-full md:w-2/3 lg:w-1/2 flex justify-center">
            <div className="w-full max-w-full max-h-80 bg-gray-300 animate-pulse rounded-lg shadow-lg">
                <svg className="w-full h-full text-gray-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M21 11V3H3v8H1v10h22V11h-2zm-2 0H5v-6h14v6zm-2 8H7v-2h12v2z"/>
                </svg>
            </div>
        </figure>

        <aside className="w-full md:w-1/3 lg:w-1/3 p-6 rounded-lg shadow-lg border border-gray-200">
            <div className="h-8 bg-gray-300 animate-pulse rounded mb-4"></div>
            <div className="h-6 bg-gray-300 animate-pulse rounded mb-4 w-1/2"></div>
            <button className="w-full py-3 px-4 bg-gray-300 text-white font-semibold rounded-lg shadow-md hover:bg-gray-400">
                <div className="h-6 bg-gray-400 animate-pulse rounded w-1/2 mx-auto"></div>
            </button>
        </aside>
      </section>

      <section className="mt-8 p-6 rounded-lg shadow-lg border border-gray-200">
        <header>
            <div className="h-8 bg-gray-300 animate-pulse rounded mb-4 w-1/4"></div>
        </header>
        <article className="prose max-w-none text-gray-700">
            <div className="h-4 bg-gray-300 animate-pulse rounded mb-4"></div>
            <div className="h-4 bg-gray-300 animate-pulse rounded mb-4"></div>
            <div className="h-4 bg-gray-300 animate-pulse rounded mb-4 w-3/4"></div>
        </article>
      </section>
    </div>
  );
}
