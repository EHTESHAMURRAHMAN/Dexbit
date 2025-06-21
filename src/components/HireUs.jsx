import { useState } from "react";
import emailjs from "@emailjs/browser";

const HireUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    requirements: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.requirements) {
      setStatus("❗ Please fill all required fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      message: formData.requirements,
    };

    try {
      await emailjs.send(
        "service_na6wwxb",     // replace with actual
        "template_arlog0n",    // replace with actual
        templateParams,
        "FsckLhbvrScspr1Rw"      // replace with actual
      );

      setStatus("✅ Your request has been sent successfully!");
      setFormData({ name: "", email: "", phone: "", requirements: "" });
    } catch (error) {
      setStatus("❌ Failed to send the message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6">Work With Us</h1>
      <p className="text-center text-gray-600 mb-8">
        “We build powerful and visually stunning solutions. Our recent project transformed a travel startup into a global booking platform with live updates, admin dashboards, and blazing fast performance.”
      </p>

      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <div>
          <label className="block font-medium mb-1">Name *</label>
          <input
            type="text"
            name="name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Email *</label>
          <input
            type="email"
            name="email"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Requirements *</label>
          <textarea
            name="requirements"
            rows="4"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.requirements}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Request"}
        </button>

        {status && (
          <p className="mt-3 text-center text-sm text-gray-700">{status}</p>
        )}
      </form>
    </div>
  );
};

export default HireUs;
