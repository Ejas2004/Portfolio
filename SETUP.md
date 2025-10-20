# Portfolio Setup Guide

## Quick Start

### 1. Frontend Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```
The frontend will be available at http://localhost:5173 (or next available port)

### 2. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Configure environment variables
# Copy .env.example to .env and update with your credentials
cp .env.example .env

# Edit .env file with your email credentials
# EMAIL_USER=your.email@gmail.com
# EMAIL_PASS=your-gmail-app-password

# Start the server
npm run dev
```
The backend will be available at http://localhost:5000

## Email Configuration

### Gmail App Password Setup:
1. Go to https://myaccount.google.com/
2. Click on "Security" in the left sidebar
3. Enable "2-Step Verification" if not already enabled
4. Scroll down to "App passwords"
5. Click "App passwords"
6. Select "Mail" and your device
7. Click "Generate"
8. Copy the 16-character password
9. Paste it in your `.env` file as `EMAIL_PASS`

### Alternative Email Providers:
If not using Gmail, update the `service` field in `backend/server.js`:
```javascript
const transporter = nodemailer.createTransport({
  service: 'outlook', // or 'yahoo', 'hotmail', etc.
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
```

## Customization Checklist

- [ ] Update your name in Hero section
- [ ] Add your profile photo in About section
- [ ] Update education details
- [ ] Replace projects with your actual projects
- [ ] Add your project images
- [ ] Update GitHub, LinkedIn, and email links
- [ ] Customize skills based on your expertise
- [ ] Update email configuration in backend
- [ ] Test contact form

## Production Build

### Frontend
```bash
npm run build
npm run preview  # Test production build locally
```

### Backend
```bash
cd backend
npm start  # Production mode
```

## Deployment

See README.md for detailed deployment instructions for:
- Vercel (Frontend)
- Render or Heroku (Backend)

## Troubleshooting

### Port already in use
If port 5173 is in use, Vite will automatically use the next available port.

### Backend not receiving form submissions
1. Check if backend server is running
2. Verify CORS is enabled
3. Check browser console for errors
4. Ensure API endpoint URL is correct in Contact.jsx

### Email not sending
1. Verify email credentials in .env
2. Check if 2-Step Verification is enabled for Gmail
3. Use App Password, not regular password
4. Check backend console for error messages

## Additional Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [Nodemailer Documentation](https://nodemailer.com)

## Support

If you encounter any issues, check the browser console and backend terminal for error messages.
