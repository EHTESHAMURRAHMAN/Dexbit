const SmartContracts = () => {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 bg-gradient-to-r from-green-50 via-teal-50 to-cyan-50 rounded-xl shadow-lg">
      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold text-green-700 mb-4">Smart Contracts Development</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Automate your business processes with secure, transparent smart contracts on Ethereum, Binance Smart Chain, and more.
            Our expert developers write, audit, and deploy contracts that power decentralized applications.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Smart contract coding & testing</li>
            <li>Auditing & security reviews</li>
            <li>Custom decentralized apps</li>
            <li>Integration with frontends & wallets</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          {/* Replace with your image */}
          <img
            src="https://www.nadcab.com/public/animation/img/ethereum-smart-contract/ethereum-blockchain-platform.png"
            alt="Smart Contracts illustration"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default SmartContracts;
