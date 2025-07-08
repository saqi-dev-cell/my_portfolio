// src/app/contact/page.tsx
import { personalData } from '@/lib/data/personal';

export default function Contact() {
  return (
    <main className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Contact Me</h1>
      <div className="space-y-4">
        <p><strong>Email:</strong> {personalData.contact.email}</p>
        <p><strong>Phone:</strong> {personalData.contact.phone}</p>
        <p><strong>Location:</strong> {personalData.contact.location}</p>
      </div>
    </main>
  );
}