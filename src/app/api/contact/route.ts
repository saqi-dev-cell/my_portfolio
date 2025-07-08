import { NextRequest, NextResponse } from 'next/server';

// Option 3: Store messages in a simple JSON file (for development)
// For production, use a proper database like MongoDB, PostgreSQL, etc.

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();
    
    // Validate the data
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create message object
    const messageData = {
      id: Date.now().toString(),
      name,
      email,
      message,
      timestamp: new Date().toISOString(),
      read: false
    };

    // Option A: Log to console (you can see in server logs)
    console.log('📧 New Contact Message:', messageData);

    // Option B: Store in database (implement your preferred database)
    /*
    // MongoDB example:
    const { MongoClient } = require('mongodb');
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    const db = client.db('portfolio');
    await db.collection('messages').insertOne(messageData);
    await client.close();
    */

    // Option C: Send email notification to yourself
    /*
    const nodemailer = require('nodemailer');
    const transporter = nodemailer.createTransporter({
      // Configure your email service
    });
    
    await transporter.sendMail({
      from: email,
      to: 'saqlainkharal39@gmail.com',
      subject: `Portfolio Contact: ${name}`,
      text: message,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });
    */

    return NextResponse.json(
      { message: 'Message sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
