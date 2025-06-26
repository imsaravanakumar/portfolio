import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { IoLogoWhatsapp } from "react-icons/io";

export default function Contactus() {
  return (
    <section id="contact" className="text-white py-20 px-4 bg sec-up">
      <h1 className="text-3xl font-bold text-center mb-6">Contact</h1>
      <p className="text-center mb-4">
        If you want to discuss more in detail, feel free to reach out.
      </p>

      <div className="max-w-xl mx-auto text-center space-y-3 mb-8">
        <p>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:saravana03tmg@gmail.com"
            className="text-blue-400 hover:underline"
          >
            saravana03tmg@gmail.com
          </a>
        </p>
        <p>
          <strong>Phone:</strong> +91 9655617827
        </p>
        <p>
          <strong>Location:</strong> Madurai, Tamil Nadu
        </p>
        <div className="flex justify-center gap-4 text-2xl">
          <a
            className="hover:scale-110 transition-transform"
            href="https://www.linkedin.com/in/saravana-kumar-96473428b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
            className="hover:scale-110 transition-transform"
            href="https://wa.me/qr/LAINYP26JK52D1"
            target="_blank"
            rel="noreferrer"
          >
            <IoLogoWhatsapp />
          </a>
          <a
            className="hover:scale-110 transition-transform"
            href="https://www.instagram.com/_saravana.03_?igsh=amlncG90MzN0eGlo"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram />
          </a>
        </div>
      </div>

      <div className="max-w-xl mx-auto border border-gray-500 rounded-lg shadow-lg p-6">
        <p className="text-center text-2xl font-semibold mb-4">Send a Message</p>
        <form className="space-y-4">
          <input
            className="w-full p-3 border border-gray-300 bg-transparent rounded focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="w-full p-3 border border-gray-300 bg-transparent rounded focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="Your Email"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 border border-gray-300 bg-transparent rounded focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <input
            className="w-full bg-gradient-to-r from-purple-500 to-blue-500 text-white p-2 rounded hover:opacity-90 cursor-pointer"
            type="submit"
            value="Send Message"
          />
        </form>
      </div>
    </section>
  );
}
