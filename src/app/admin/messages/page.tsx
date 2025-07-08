"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { VscMail, VscCalendar, VscAccount, VscArrowLeft } from 'react-icons/vsc';
import Link from 'next/link';

interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
  read: boolean;
}

export default function MessagesPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // For demo purposes, showing sample messages
    // In real implementation, fetch from your database/API
    const sampleMessages: Message[] = [
      {
        id: '1',
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hi Saqlain! I saw your portfolio and I\'m impressed with your work. I have a project that might interest you. Would love to discuss further!',
        timestamp: new Date().toISOString(),
        read: false
      },
      {
        id: '2',
        name: 'Sarah Johnson',
        email: 'sarah@company.com',
        message: 'Hello! We are looking for a full-stack developer for our startup. Your skills in MERN stack are exactly what we need. Can we schedule a call?',
        timestamp: new Date(Date.now() - 86400000).toISOString(), // 1 day ago
        read: true
      },
      {
        id: '3',
        name: 'Mike Chen',
        email: 'mike@tech.com',
        message: 'Great portfolio! I\'m working on an IoT project and noticed your Arduino/ESP32 experience. Would you be interested in collaborating?',
        timestamp: new Date(Date.now() - 172800000).toISOString(), // 2 days ago
        read: false
      }
    ];

    setTimeout(() => {
      setMessages(sampleMessages);
      setLoading(false);
    }, 1000);
  }, []);

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const markAsRead = (id: string) => {
    setMessages(prev => 
      prev.map(msg => 
        msg.id === id ? { ...msg, read: true } : msg
      )
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-blue-400 text-xl">Loading messages...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link href="/" className="text-blue-400 hover:text-blue-300 transition-colors">
            <VscArrowLeft size={24} />
          </Link>
          <h1 className="text-3xl font-bold text-blue-400">Contact Messages</h1>
          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
            {messages.filter(m => !m.read).length} unread
          </span>
        </div>

        {/* Messages List */}
        <div className="space-y-4">
          {messages.length === 0 ? (
            <div className="text-center py-12">
              <VscMail size={48} className="text-neutral-600 mx-auto mb-4" />
              <p className="text-neutral-400">No messages yet</p>
            </div>
          ) : (
            messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-neutral-900/60 border rounded-xl p-6 transition-all duration-300 hover:bg-neutral-900/80 ${
                  !message.read ? 'border-blue-400/50 bg-blue-900/10' : 'border-neutral-800'
                }`}
                onClick={() => markAsRead(message.id)}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <VscAccount className="text-blue-400" size={20} />
                    <div>
                      <h3 className="font-semibold text-blue-300">{message.name}</h3>
                      <p className="text-neutral-400 text-sm">{message.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-neutral-400 text-sm">
                    <VscCalendar size={16} />
                    {formatDate(message.timestamp)}
                    {!message.read && (
                      <span className="w-2 h-2 bg-blue-400 rounded-full ml-2"></span>
                    )}
                  </div>
                </div>
                
                <div className="bg-neutral-800/50 rounded-lg p-4">
                  <p className="text-neutral-200 leading-relaxed">{message.message}</p>
                </div>
                
                <div className="flex gap-2 mt-4">
                  <a
                    href={`mailto:${message.email}?subject=Re: Your message&body=Hi ${message.name},%0D%0A%0D%0AThank you for reaching out!%0D%0A%0D%0ABest regards,%0D%0ASaqlain`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                  >
                    Reply via Email
                  </a>
                  {!message.read && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        markAsRead(message.id);
                      }}
                      className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-4 py-2 rounded-lg text-sm transition-colors"
                    >
                      Mark as Read
                    </button>
                  )}
                </div>
              </motion.div>
            ))
          )}
        </div>

        {/* Instructions */}
        <div className="mt-12 bg-neutral-900/40 border border-neutral-800 rounded-xl p-6">
          <h2 className="text-xl font-semibold text-blue-400 mb-4">📝 How to Set Up Real Message Collection:</h2>
          <div className="space-y-3 text-neutral-300 text-sm">
            <p><strong>Option 1 - EmailJS (Easiest):</strong> Messages sent directly to your email</p>
            <p><strong>Option 2 - Database:</strong> Store in MongoDB/PostgreSQL and view here</p>
            <p><strong>Option 3 - Server Logs:</strong> Check your deployment logs for console.log messages</p>
            <p className="text-blue-300 mt-4">Currently showing demo data. Check the ContactForm.tsx and /api/contact/route.ts files for implementation options.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
