# 📧 EmailJS Setup Guide

## Quick Setup to Receive Emails at saqlainkharal39@gmail.com

### Step 1: Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up with your Gmail account (saqlainkharal39@gmail.com)
3. Verify your email

### Step 2: Connect Gmail Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail"
4. Connect your Gmail account (saqlainkharal39@gmail.com)
5. Copy the **Service ID** (something like `service_xxxxxxx`)

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```
Subject: New Portfolio Contact from {{from_name}}

Hi Saqlain,

You have a new message from your portfolio:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

4. Save and copy the **Template ID** (something like `template_xxxxxxx`)

### Step 4: Get Public Key
1. Go to "Account" → "General"
2. Copy your **Public Key** (something like `xxxxxxxxxxxxxxx`)
3eyY9SnbN3R_dCmMW
### Step 5: Update Your Code
Replace these values in `src/app/components/ContactForm.tsx`:

```typescript
await emailjs.send(
  'YOUR_SERVICE_ID',     // Replace with your Service ID
  'YOUR_TEMPLATE_ID',    // Replace with your Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_email: 'saqlainkharal39@gmail.com',
    reply_to: formData.email
  },
  'YOUR_PUBLIC_KEY'      // Replace with your Public Key
);
```

### Step 6: Test
1. Save the file
2. Go to your portfolio contact form
3. Fill it out and submit
4. Check your Gmail inbox!

## That's it! 🎉

Now when someone fills out your contact form saying "I want to work with you", it will be sent directly to your Gmail at saqlainkharal39@gmail.com.

### Example Email You'll Receive:
```
Subject: New Portfolio Contact from John Doe

Hi Saqlain,

You have a new message from your portfolio:

Name: John Doe
Email: john@example.com

Message:
Hi! I saw your portfolio and I want to work with you on a project. 
Can we discuss further?

---
Sent from your portfolio contact form
```

### Free Tier Limits:
- 200 emails per month (more than enough for a portfolio)
- No credit card required
