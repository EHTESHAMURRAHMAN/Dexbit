import { useNavigate } from 'react-router-dom';
import tokenlogo from "../assets/images/tokenlogo.png";
import dapplogo from "../assets/images/dapplogo.png";
import smartcontractlogo from "../assets/images/smart-contractlogo.png";
import squareimgg from "../assets/images/squareimgg.png";

const HomePage = () => {
  const navigate = useNavigate();

  const logos = [
    "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/eth.png",
    "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/sol.png",
    "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/bnb.png",
    "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/matic.png",
    "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/avax.png",
    "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/ada.png",
    // "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/arb.png",
    // "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/op.png",
    "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/trx.png",
    // "https://raw.githubusercontent.com/spothq/cryptocurrency-icons/master/128/color/near.png"
  ];

  return (
    <main className="bg-white min-h-screen text-gray-900 relative overflow-hidden font-sans">
      {/* Gradient Backgrounds */}
      <div className="absolute w-[300px] h-[300px] rounded-full bg-gradient-to-br from-pink-500 via-yellow-400 to-blue-500 right-[-120px] top-[30%] opacity-80 z-0 hidden sm:block"></div>
      <div className="absolute w-[200px] h-[100px] bg-gradient-to-br from-pink-500 via-yellow-400 to-blue-500 rounded-t-full right-[-60px] top-[60%] opacity-80 z-0 hidden sm:block"></div>
      <div className="absolute bottom-0 right-0 w-[250px] h-[200px] z-0 hidden sm:block">
        {/* <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path
            fill="#2563EB"
            d="M44.8,-58.4C56.6,-48.5,63.4,-31.4,68.1,-13.5C72.8,4.4,75.4,22.9,67.1,36.1C58.8,49.3,39.5,57.3,21.6,59.4C3.6,61.5,-12.8,57.6,-27.5,50.1C-42.2,42.6,-55.2,31.4,-63.3,16.4C-71.4,1.4,-74.5,-17.4,-67.4,-31.7C-60.3,-46,-43.1,-56,-25.4,-63.6C-7.7,-71.1,10.6,-76.2,27.1,-71.4C43.6,-66.6,59.3,-51.9,44.8,-58.4Z"
            transform="translate(100 100)"
          />
        </svg> */}
      </div>

      {/* Main Content */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="absolute top-10 right-0 z-0 w-48 h-48 sm:w-80 sm:h-80 opacity-80">
          <img
            src={squareimgg}
            alt="Decorative Square"
            className="w-full h-full object-contain"
          />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight text-gray-900 relative z-10 max-w-3xl">
          Build the Future with{" "}
          <span className="bg-gradient-to-r from-red-500 via-yellow-400 to-red-500 text-transparent bg-clip-text">
            Blockchain & IT Solutions
          </span>
        </h1>

        <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-2xl relative z-10">
          Dexbit Technologies delivers modern IT and Blockchain products for startups and enterprises.
        </p>

        {/* Glass Buttons */}
        <div className="flex flex-wrap gap-4 relative z-10">
          <button
            onClick={() => navigate('/contact')}
            className="px-6 py-3 bg-white/30 backdrop-blur-md border border-white/40 text-blue-800 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all hover:bg-white/40"
          >
            Start a Project
          </button>

          <button
            onClick={() => navigate('/about')}
            className="px-6 py-3 bg-white/20 backdrop-blur-md border border-blue-200 text-blue-700 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all hover:bg-white/30"
          >
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-50 to-white relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-orange-600 mb-12">
            What We Offer
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="p-6 sm:p-8 bg-white/30 backdrop-blur-md border border-blue-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
              <div className="mb-4">
                <div className="w-14 h-14 bg-white/40 backdrop-blur-md flex items-center justify-center rounded-full border border-blue-200">
                  <img src={smartcontractlogo} alt="Smart Contract" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Custom DApps</h3>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                Scalable and secure decentralized applications tailored to your business goals.
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-white/30 backdrop-blur-md border border-pink-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
              <div className="mb-4">
                <div className="w-14 h-14 bg-white/40 backdrop-blur-md flex items-center justify-center rounded-full border border-pink-200">
                  <img src={dapplogo} alt="Dapp" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Token Launch</h3>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                From ERC20 to BEP20, launch your token with robust contracts and tokenomics.
              </p>
            </div>

            <div className="p-6 sm:p-8 bg-white/30 backdrop-blur-md border border-yellow-200 rounded-3xl shadow-xl hover:shadow-2xl transition-all">
              <div className="mb-4">
                <div className="w-14 h-14 bg-white/40 backdrop-blur-md flex items-center justify-center rounded-full border border-yellow-200">
                  <img src={tokenlogo} alt="Token" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Tech Consulting</h3>
              <p className="text-gray-800 text-sm sm:text-base leading-relaxed">
                Overcome challenges with security, scalability, and integration via expert consulting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Logos */}
      <section className="bg-white py-6 overflow-hidden">
        <div className="whitespace-nowrap animate-marquee flex items-center gap-10">
          {logos.concat(logos).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`blockchain-${index}`}
              className="h-16 sm:h-20 w-auto object-contain"
            />
          ))}
        </div>
      </section>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </main>
  );
};

export default HomePage;
