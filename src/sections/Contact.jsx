import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="Get in Touch — Let's Connect"
          sub="💬 Have questions or want to collaborate? Let's talk!"
        />
        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="flex-center card-border rounded-xl p-10">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-7"
              >
                <div>
                  <label htmlFor="name">Your name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="What's your good name?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="What's your email address?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows="5"
                    required
                  />
                </div>

                <button type="submit">
                  <div className="cta-button group">
                    <div className="bg-circle" />
                    <p className="text">
                      {loading ? "Sending..." : "Send Message"}
                    </p>
                    <div className="arrow-wrapper">
                      <img src="/images/arrow-down.svg" alt="arrow" />
                    </div>
                  </div>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="mt-6 card-border rounded-xl p-6">
              <h3 className="text-white text-lg font-semibold mb-4">
                Contact Information
              </h3>
              <div className="flex flex-col gap-3 text-white-50 text-sm">
                <p>
                  📧{" "}
                  <a
                    href="mailto:meriyei.manfer@gmail.com"
                    className="hover:text-white underline transition-colors"
                  >
                    meriyei.manfer@gmail.com
                  </a>
                </p>
                <p>
                  📱{" "}
                  <a
                    href="tel:+573242417672"
                    className="hover:text-white underline transition-colors"
                  >
                    +57 3242417672
                  </a>
                </p>
                <p>
                  🔗{" "}
                  <a
                    href="http://www.linkedin.com/in/meriyei-manosalva-ferrer-b9a159389"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white underline transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </p>
                <p>
                  🐙{" "}
                  <a
                    href="https://github.com/mmanosaslva"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white underline transition-colors"
                  >
                    GitHub Profile
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-[#cd7c2e] w-full h-full hover:cursor-grab rounded-3xl overflow-hidden">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
