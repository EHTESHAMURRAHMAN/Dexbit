const AboutUs = () => {
  return (
    <main className="relative overflow-hidden bg-gradient-to-br from-[#f8faff] via-white to-blue-50 min-h-screen py-20 px-6 font-sans">
      {/* Background Effects */}
      <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-teal-300 to-blue-300 rounded-full blur-3xl opacity-20 right-[-100px] top-[-100px]" />
      <div className="absolute w-[300px] h-[300px] bg-gradient-to-tr from-yellow-200 to-pink-300 rounded-full blur-2xl opacity-30 left-[-100px] bottom-[-100px]" />

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-teal-600">
          About <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500">Dexbit Technologies</span>
        </h1>
        <p className="text-lg text-gray-800 max-w-3xl mx-auto mb-16 leading-relaxed tracking-wide">
          We are a next-generation technology company delivering cutting-edge IT and Blockchain solutions to startups and enterprises. Our mission is to decentralize innovation and empower businesses with scalable, secure, and future-ready technologies.
        </p>
      </div>

      {/* Mission, Vision, Values */}
      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-3 gap-8 px-6">
        {/* Mission */}
        <div className="bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl p-6 shadow-2xl transition hover:shadow-blue-300/40">
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 mb-3">
            🚀 Our Mission
          </h3>
          <p className="text-gray-800 text-base leading-relaxed tracking-wide">
            To transform businesses through intelligent software and blockchain-powered transparency. We strive to make decentralized technology accessible, efficient, and secure for every industry.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl p-6 shadow-2xl transition hover:shadow-blue-300/40">
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 mb-3">
            🌐 Our Vision
          </h3>
          <p className="text-gray-800 text-base leading-relaxed tracking-wide">
            A world where trust is programmable, software is sovereign, and every digital experience is seamless, decentralized, and user-first.
          </p>
        </div>

        {/* Values */}
        <div className="bg-white/20 backdrop-blur-2xl border border-white/30 rounded-3xl p-6 shadow-2xl transition hover:shadow-blue-300/40">
          <h3 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600 mb-3">
            💡 Our Values
          </h3>
          <ul className="list-disc text-gray-800 pl-5 space-y-2 text-base leading-relaxed">
            <li>Innovation with Integrity</li>
            <li>Security by Design</li>
            <li>User-Centered Solutions</li>
            <li>Open Collaboration</li>
            <li>Continuous Learning</li>
          </ul>
        </div>
      </div>

      {/* Quote Section */}
      <div className="relative z-10 mt-20 max-w-4xl mx-auto text-center px-4">
        <blockquote className="italic text-xl text-gray-800">
          "We believe the future is decentralized — and we're here to build it with you."
        </blockquote>
        <p className="mt-3 text-gray-600 font-medium">— Team Dexbit Technologies</p>
      </div>
    </main>
  );
};

export default AboutUs;
