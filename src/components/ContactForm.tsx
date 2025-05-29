
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Github, Linkedin, CheckCircle, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

interface ContactFormProps {
  contactRef: React.RefObject<HTMLElement>;
  contactInView: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({ contactRef, contactInView }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.message) {
        toast({
          title: "Error",
          description: "Please fill in all fields",
          variant: "destructive",
        });
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast({
          title: "Error",
          description: "Please enter a valid email address",
          variant: "destructive",
        });
        return;
      }

      // EmailJS configuration
      const serviceId = 'service_svdmbn8';
      const templateId = 'template_vzcwy0q';
      const publicKey = 'br2JuQuIBeUBjTrxR';

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'akshaykashyap7879@gmail.com'
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      // Reset form
      setFormData({ name: '', email: '', message: '' });
      
      toast({
        title: "Success!",
        description: "Your message has been sent successfully. I'll get back to you soon!",
      });

    } catch (error) {
      console.error('EmailJS Error:', error);
      
      // Fallback to mailto if EmailJS fails
      const { name, email, message } = formData;
      const subject = `Portfolio Contact from ${name}`;
      const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;
      const mailtoLink = `mailto:akshaykashyap0545@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = mailtoLink;
      
      toast({
        title: "Email client opened",
        description: "Please send the email to complete your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

 const downloadResume = () => {
  const link = document.createElement('a');
  link.href = '/Resume.pdf'; 
  link.download = 'Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


  return (
    <section ref={contactRef} className="py-20 px-4 bg-gray-800/20 relative overflow-hidden">
      {/* Enhanced background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-purple-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={contactInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300">Ready to bring your ideas to life</p>
        </motion.div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          <motion.div variants={itemVariants}>
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-blue-400">Send Me a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-gray-700/70 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-gray-700/70 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full p-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-gray-700/70 transition-all duration-300 resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white disabled:opacity-50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-[1.02]"
                  >
                    {isSubmitting ? (
                      <>Sending... <AlertCircle className="ml-2 h-4 w-4 animate-spin" /></>
                    ) : (
                      <>Send Message <Send className="ml-2 h-4 w-4" /></>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm hover:bg-gray-800/70 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-purple-400">Connect With Me</h3>
                <div className="space-y-6">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300 cursor-pointer group"
                  >
                    <Mail className="h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                    <span className="text-gray-300 group-hover:text-white transition-colors">akshaykashyap7879@gmail.com</span>
                  </motion.div>
                  
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-3 p-3 bg-gray-700/30 rounded-lg hover:bg-gray-700/50 transition-all duration-300 cursor-pointer group"
                  >
                    <MapPin className="h-5 w-5 text-purple-400 group-hover:text-purple-300 transition-colors" />
                    <span className="text-gray-300 group-hover:text-white transition-colors">Nagpur, India</span>
                  </motion.div>
                  
                  <div className="flex space-x-6 pt-4 justify-center">
                    <motion.a 
                      href="https://github.com/Akshay0545" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-blue-400 transition-all duration-300 p-3 bg-gray-700/30 rounded-full hover:bg-gray-700/50 hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      <Github className="h-8 w-8" />
                    </motion.a>
                    <motion.a 
                      href="https://www.linkedin.com/in/akshay-kashyap-33010b249" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-blue-400 transition-all duration-300 p-3 bg-gray-700/30 rounded-full hover:bg-gray-700/50 hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      <Linkedin className="h-8 w-8" />
                    </motion.a>
                  </div>
                  
                  <div className="pt-4">
                    <Button 
                      onClick={downloadResume}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 transform hover:scale-[1.02]"
                    >
                      Download Resume
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
