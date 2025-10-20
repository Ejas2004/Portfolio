# Quick Start Guide

## Getting Your Portfolio Running in 5 Minutes

### Step 1: Install Frontend Dependencies
```bash
npm install
```

### Step 2: Start the Frontend
```bash
npm run dev
```
Your portfolio will open at http://localhost:5173 (or next available port)

### Step 3: Set Up Backend (For Contact Form)

Open a new terminal and run:

```bash
cd backend
npm install
```

### Step 4: Configure Email

1. Copy the example environment file:
```bash
# In the backend directory
copy .env.example .env
```

2. Open `.env` and update with your Gmail:
```
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your-16-character-app-password
PORT=5000
```

**Getting Gmail App Password:**
- Visit: https://myaccount.google.com/security
- Enable "2-Step Verification"
- Scroll to "App passwords"
- Generate a new password for "Mail"
- Copy the 16-character password to your `.env` file

### Step 5: Start the Backend
```bash
# In the backend directory
npm run dev
```

Backend runs at http://localhost:5000

## ✅ You're Done!

Your portfolio is now running with:
- ✨ Beautiful minimalist design
- 🌓 Dark mode toggle
- 📱 Fully responsive layout
- 📧 Working contact form
- 🎨 Smooth animations

## Next Steps

### Customize Your Portfolio

1. **Update Personal Info**: Edit `src/components/Hero.jsx`
2. **Add Your Photo**: Replace image in `src/components/About.jsx`
3. **Update Projects**: Modify `src/components/Projects.jsx`
4. **Adjust Skills**: Edit `src/components/Skills.jsx`
5. **Social Links**: Update links in all components

### Test Contact Form

1. Make sure both frontend and backend are running
2. Fill out the contact form
3. Check your email for the message!

### Build for Production

```bash
npm run build
```

Then deploy to Vercel (frontend) and Render/Heroku (backend).

See `DEPLOYMENT.md` for detailed deployment instructions.

## Troubleshooting

**Port already in use?**
- Vite automatically finds the next available port

**Contact form not working?**
- Make sure backend is running on port 5000
- Check browser console for errors
- Verify email credentials in `.env`

**Styling issues?**
- Clear browser cache
- Restart the dev server

## Need Help?

Check these files:
- `README.md` - Complete project documentation
- `SETUP.md` - Detailed setup instructions
- `DEPLOYMENT.md` - Production deployment guide

---

**Enjoy building your amazing portfolio! 🚀**
