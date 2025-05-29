
# EmailJS Setup Instructions

To make the contact form fully functional, you need to set up EmailJS:

## Steps:

1. **Create EmailJS Account**
   - Go to https://www.emailjs.com/
   - Sign up for a free account

2. **Create Email Service**
   - In EmailJS dashboard, go to "Email Services"
   - Add a new service (Gmail, Outlook, etc.)
   - Connect your email account
   - Note the Service ID (e.g., service_svdmbn8')

3. **Create Email Template**
   - Go to "Email Templates"
   - Create a new template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
     - `{{to_email}}` - Your email (akshaykashyap7879@gmail.com)
   - Note the Template ID (e.g., 'template_vzcwy0q')

4. **Get Public Key**
   - Go to "Account" → "General"
   - Copy your Public Key

5. **Update ContactForm.tsx**
   - Replace `'service_portfolio'` with your Service ID
   - Replace `'template_contact'` with your Template ID
   - Replace `'YOUR_EMAILJS_PUBLIC_KEY'` with your Public Key

## Example Template:
```
Subject: New Portfolio Contact from {{from_name}}

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
```

After setup, your contact form will send emails directly to your inbox!
