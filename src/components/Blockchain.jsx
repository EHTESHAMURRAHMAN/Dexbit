const Blockchain = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 bg-gradient-to-r from-indigo-50 via-teal-50 to-pink-50 rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-indigo-700 mb-4">Blockchain Solutions</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Leverage the power of decentralized technology to build secure, transparent, and immutable applications.
            Our blockchain services include public & private blockchain development, DApps, and enterprise solutions.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Custom blockchain development</li>
            <li>Cryptocurrency & token creation</li>
            <li>Decentralized finance (DeFi) apps</li>
            <li>Blockchain consulting & auditing</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          {/* Replace with your image */}
          <img
            src=" https://static.vecteezy.com/system/resources/thumbnails/065/445/842/small_2x/3d-blockchain-network-icon-png.png"
            alt="Blockchain illustration"
            className=" h-full w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Blockchain;
