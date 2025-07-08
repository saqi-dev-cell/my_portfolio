"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { VscMail, VscCheck, VscError } from 'react-icons/vsc';
import emailjs from '@emailjs/browser';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState<FormStatus>({
    type: 'idle',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Name is required' });
      return false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus({ type: 'error', message: 'Valid email is required' });
      return false;
    }
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Message is required' });
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setStatus({ type: 'loading', message: 'Sending message...' });

    try {
      // Check if EmailJS is configured
      const serviceId = 'service_v1qen8b'; // Replace with your actual service ID
      const templateId = 'template_by24726'; // Replace with your actual template ID
      const publicKey = '3eyY9SnbN3R_dCmMW'; // Replace with your actual public key

      // Remove the validation check since you've configured EmailJS

      // Send email directly to your Gmail using EmailJS
      console.log('Sending email with:', { serviceId, templateId, publicKey });

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'saqlainkharal39@gmail.com',
        reply_to: formData.email
      };

      console.log('Template params:', templateParams);

      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setStatus({
        type: 'success',
        message: 'Thank you for reaching out! Your message has been sent directly to my email (saqlainkharal39@gmail.com). I\'ll get back to you within 24 hours!'
      });
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setStatus({ type: 'idle', message: '' });
      }, 3000);
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: 'error',
        message: `Failed to send message: ${error instanceof Error ? error.message : 'Unknown error'}. Please email me directly at saqlainkharal39@gmail.com`
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-blue-400/30 px-4 py-3 bg-blue-900/10 text-blue-100 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            required
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-blue-400/30 px-4 py-3 bg-blue-900/10 text-blue-100 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            required
          />
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <textarea
          name="message"
          placeholder="Your Message"
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className="w-full rounded-lg border border-blue-400/30 px-4 py-3 bg-blue-900/10 text-blue-100 placeholder-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300 resize-none"
          required
        />
      </motion.div>

      {status.message && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`flex items-center gap-2 p-3 rounded-lg ${
            status.type === 'success' 
              ? 'bg-green-900/30 text-green-300 border border-green-400/30' 
              : status.type === 'error'
              ? 'bg-red-900/30 text-red-300 border border-red-400/30'
              : 'bg-blue-900/30 text-blue-300 border border-blue-400/30'
          }`}
        >
          {status.type === 'success' && <VscCheck size={20} />}
          {status.type === 'error' && <VscError size={20} />}
          {status.type === 'loading' && (
            <div className="w-5 h-5 border-2 border-blue-300 border-t-transparent rounded-full animate-spin" />
          )}
          <span>{status.message}</span>
        </motion.div>
      )}
      
      <motion.button
        type="submit"
        disabled={status.type === 'loading'}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-4 rounded-lg shadow-lg hover:scale-105 hover:from-blue-700 hover:to-blue-500 transition-all duration-300 font-semibold text-lg border border-blue-400/40 focus:outline-none focus:ring-4 focus:ring-blue-400/40 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        whileHover={{ scale: status.type === 'loading' ? 1 : 1.02 }}
        whileTap={{ scale: status.type === 'loading' ? 1 : 0.98 }}
      >
        <VscMail size={22} />
        {status.type === 'loading' ? 'Sending...' : 'Send Message'}
      </motion.button>
    </form>
  );
}
