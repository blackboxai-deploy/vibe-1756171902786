export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center space-y-6 p-8">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-gray-800 tracking-tight">
            Hello World!
          </h1>
          <p className="text-xl text-gray-600 max-w-md mx-auto leading-relaxed">
            Welcome to your first Next.js application. This is a simple, clean, 
            and modern Hello World page built with Tailwind CSS.
          </p>
        </div>
        
        <div className="space-y-4 pt-8">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-white shadow-lg">
            <span className="text-sm font-medium text-gray-700">
              Built with Next.js & Tailwind CSS
            </span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-2xl mx-auto">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Fast
            </h3>
            <p className="text-gray-600 text-sm">
              Built with Next.js for optimal performance and user experience.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Modern
            </h3>
            <p className="text-gray-600 text-sm">
              Uses the latest React features and modern development practices.
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Responsive
            </h3>
            <p className="text-gray-600 text-sm">
              Designed to work perfectly on all devices and screen sizes.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}