import { useState } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: false,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: false });

    // Log submission attempt
    console.log('📨 Contact form submitted:', {
      name: formData.name,
      email: formData.email,
      messageLength: formData.message.length,
      timestamp: new Date().toISOString()
    });

    try {
      // Option 1: Try backend first
      const apiUrl = 'https://portfolio-backend-9hvq.onrender.com/api/contact';
      
      console.log('🔄 Sending to backend:', apiUrl);
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('📊 Backend response status:', response.status);

      if (response.ok) {
        const data = await response.json();
        console.log('✅ Backend success:', data);
        setStatus({ submitting: false, submitted: true, error: false });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => {
          setStatus({ submitting: false, submitted: false, error: false });
        }, 5000);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('❌ Backend failed:', response.status, errorData);
        
        // If backend fails, fallback to FormSubmit
        console.log('🔄 Trying FormSubmit fallback...');
        
        // FormSubmit requires form submission, not JSON
        const submitData = new FormData();
        submitData.append('name', formData.name);
        submitData.append('email', formData.email);
        submitData.append('message', formData.message);
        submitData.append('_subject', 'Portfolio Contact Form Submission');
        submitData.append('_captcha', 'false'); // Disable captcha for better UX
        
        const formSubmitResponse = await fetch('https://formsubmit.co/ejas.connect@gmail.com', {
          method: 'POST',
          body: submitData,
        });
        
        console.log('📊 FormSubmit response status:', formSubmitResponse.status);
        
        if (formSubmitResponse.ok) {
          console.log('✅ FormSubmit success');
          setStatus({ submitting: false, submitted: true, error: false });
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => {
            setStatus({ submitting: false, submitted: false, error: false });
          }, 5000);
        } else {
          console.error('❌ FormSubmit failed:', formSubmitResponse.status);
          throw new Error('Both backend and fallback failed');
        }
      }
    } catch (error) {
      console.error('💥 Contact form error:', error);
      console.error('Error details:', {
        message: error.message,
        stack: error.stack
      });
      setStatus({ submitting: false, submitted: false, error: true });
      setTimeout(() => {
        setStatus({ submitting: false, submitted: false, error: false });
      }, 5000);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center py-20 bg-gray-50 dark:bg-dark-card transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 dark:text-white mb-16 animate-fade-in">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8 animate-slide-in-left">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  Let's Connect
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                  Feel free to reach out through the form or connect with me on social media.
                </p>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Connect With Me
                </h4>
                <div className="space-y-3">
                  <a
                    href="https://github.com/Ejas2004"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-white dark:bg-dark-bg rounded-lg group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                      <FaGithub size={24} />
                    </div>
                    <span className="font-medium">GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/ejas-s-603b28296"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-white dark:bg-dark-bg rounded-lg group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                      <FaLinkedin size={24} />
                    </div>
                    <span className="font-medium">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:ejas.connect@gmail.com"
                    className="flex items-center space-x-4 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group"
                  >
                    <div className="p-3 bg-white dark:bg-dark-bg rounded-lg group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                      <FaEnvelope size={24} />
                    </div>
                    <span className="font-medium">ejas.connect@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-dark-bg rounded-lg p-8 shadow-lg animate-slide-in-right hover:shadow-2xl transition-shadow duration-500">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="transform transition-all duration-300 focus-within:scale-105">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-card text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="Your Name"
                  />
                </div>

                <div className="transform transition-all duration-300 focus-within:scale-105">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-card text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="transform transition-all duration-300 focus-within:scale-105">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-card text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Your message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={status.submitting}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:scale-105"
                >
                  {status.submitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="transition-transform duration-300 group-hover:translate-x-1" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {status.submitted && (
                  <div className="p-4 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg animate-scale-in">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}

                {status.error && (
                  <div className="p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-lg animate-scale-in">
                    <p className="font-semibold mb-2">Failed to send message</p>
                    <p className="text-sm">The backend server may be unavailable. Please email me directly at:</p>
                    <a href="mailto:ejas.connect@gmail.com" className="text-sm font-medium underline hover:text-red-800 dark:hover:text-red-200">
                      ejas.connect@gmail.com
                    </a>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
