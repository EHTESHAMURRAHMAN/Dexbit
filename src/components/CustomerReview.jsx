 

const reviews = [
  {
    name: "Muhammad ,UK",
    feedback: "Outstanding experience! Very professional, delivered on time and exceeded expectations.",
    rating: 5,
  },
  {
    name: "Shane W,USA",
    feedback: "Great communication and excellent work. Highly recommended!",
    rating: 5,
  },
  {
    name: "Akram PCBTech,INDIA",
    feedback: "Reliable developer with deep knowledge of smart contracts and Web3 tech.",
    rating: 5,
  },
];

const CustomerReview = () => {
  return (
    <section className="bg-gradient-to-br from-purple-100 via-blue-100 to-pink-100 py-20 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
          What Our <span className="text-blue-600">Clients Say</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition border-t-4 border-blue-500"
            >
              <div className="text-3xl text-yellow-400 mb-2">
                {"★".repeat(Math.floor(review.rating))}
                {review.rating % 1 !== 0 ? "½" : "" }
              </div>
              <p className="text-gray-700 mb-4 italic">"{review.feedback}"</p>
              <h4 className="text-lg font-semibold text-gray-900">- {review.name}</h4>
            </div>
          ))}
        </div>

        <a
          href="https://www.upwork.com/freelancers/~01abe26530a3ff7fd6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transition"
        >
          View Profile on Upwork
        </a>
      </div>

      {/* Decorative Circle */}
      <div className="absolute top-10 right-[-100px] w-80 h-80 bg-gradient-to-br from-blue-400 to-pink-500 rounded-full opacity-30 blur-2xl z-0" />
    </section>
  );
};

export default CustomerReview;
