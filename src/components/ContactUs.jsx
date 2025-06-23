import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill all required fields.");
      return;
    }

    setStatus("");
    setLoading(true);

    try {
      // Simulate sending email or API call
      await new Promise((r) => setTimeout(r, 1500));

      setStatus("Thank you! Your message has been sent successfully.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("Oops! Something went wrong, please try again later.");
    }

    setLoading(false);
  };

  return (
    <section className="relative bg-gradient-to-tr from-blue-50 via-white to-pink-50 py-20 px-6">
      {/* Decorative blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-blue-300 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute top-[50%] right-[-120px] w-72 h-72 bg-pink-300 rounded-full filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl p-10 md:p-16 relative z-10">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
          Contact <span className="text-blue-600">Us</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-xl mx-auto">
          Have a question or want to work together? Fill out the form below and we'll get back to you as soon as possible!
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="name"
              type="text"
              placeholder="Your Name *"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
            />
            <input
              name="email"
              type="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
            />
          </div>

          <input
            name="subject"
            type="text"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-5 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message *"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
          ></textarea>

          {status && (
            <p
              className={`text-center font-semibold ${status.toLowerCase().includes("thank") ? "text-green-600" : "text-red-600"
                }`}
            >
              {status}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white font-bold py-4 rounded-full shadow-lg hover:scale-105 transition transform"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>

      {/* Blob animation keyframes */}
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default ContactUs;
