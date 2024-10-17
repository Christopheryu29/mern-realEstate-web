export default function About() {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      {/* Hero Section with Background Image */}
      <div className="relative bg-gray-900 text-white rounded-lg shadow-xl overflow-hidden">
        {/* Full Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('photo.jpg')` }} // Updated path to the uploaded image
        ></div>

        {/* Overlay and Content */}
        <div className="relative p-12 bg-black bg-opacity-30 backdrop-blur-sm">
          <h1 className="text-5xl font-extrabold mb-6 tracking-tight text-center text-white drop-shadow-lg">
            About <span className="text-indigo-400">Ardell Estate</span>
          </h1>
          <p className="text-lg text-gray-200 text-center mb-12 max-w-3xl mx-auto">
            Your trusted partner in finding the perfect place to call home. We
            strive to exceed expectations, delivering personalized service and
            expert advice.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="mt-16 space-y-10 text-gray-700 leading-relaxed text-lg">
        <p className="text-xl max-w-4xl mx-auto">
          <p className="text-2xl font-semibold text-gray-900 text-center mb-4 tracking-wide animate-fadeInUp">
            Our Mission
          </p>
          is to help our clients achieve their real estate goals by providing
          expert advice, personalized service, and a deep understanding of the
          local market.
        </p>
      </div>

      {/* Call to Action Section */}
      <div className="mt-20 p-12 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl shadow-2xl text-center text-white transform transition-all duration-500 hover:scale-105 hover:shadow-3xl">
        <h2 className="text-4xl font-extrabold mb-6 tracking-tight leading-tight animate-fadeInUp">
          Ready to find your dream home?
        </h2>
        <p className="text-lg mb-8 max-w-xl mx-auto animate-fadeInUp delay-100">
          Contact Ardell Estate today and let us help turn your real estate
          dreams into reality. Experience premium service and personalized
          solutions for your ideal home.
        </p>
        <a
          href="/contact"
          className="inline-block px-12 py-4 bg-white text-indigo-700 font-bold uppercase tracking-wider rounded-full shadow-lg hover:bg-indigo-50 hover:shadow-2xl transition-all duration-300 transform hover:scale-110 hover:rotate-1"
        >
          Get in Touch
        </a>
        <div className="absolute top-0 left-0 w-full h-full opacity-40 pointer-events-none bg-gradient-to-r from-blue-600 via-transparent to-pink-600 transform skew-y-6"></div>
      </div>
    </div>
  );
}
