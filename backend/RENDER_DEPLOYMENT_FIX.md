# Fixing 500 Error on Render Deployment

## Problem
Your contact form is showing a **500 Internal Server Error** when trying to send emails through the deployed backend on Render.

## Root Cause
The backend server is deployed but **environment variables** (EMAIL_USER and EMAIL_PASS) are not configured or are incorrect on Render.

## ✅ Solution: Configure Environment Variables on Render

### Step 1: Go to Your Render Dashboard
1. Visit https://dashboard.render.com
2. Click on your backend service: **portfolio-backend-9hvq**

### Step 2: Add Environment Variables
1. Click on **"Environment"** in the left sidebar
2. Click **"Add Environment Variable"**
3. Add the following variables:

| Key | Value | Notes |
|-----|-------|-------|
| `EMAIL_USER` | `ejas.connect@gmail.com` | Your Gmail address |
| `EMAIL_PASS` | `your-16-char-app-password` | Gmail App Password (NOT your regular password) |
| `NODE_ENV` | `production` | Optional but recommended |

### Step 3: Get Gmail App Password

If you don't have a Gmail App Password:

1. Go to https://myaccount.google.com/security
2. Enable **"2-Step Verification"** (if not already enabled)
3. Scroll down to **"App passwords"**
4. Click **"App passwords"**
5. Select:
   - **App**: Mail
   - **Device**: Other (Custom name) → Enter "Portfolio Backend"
6. Click **Generate**
7. **Copy the 16-character password** (format: `xxxx xxxx xxxx xxxx`)
8. Paste this into the `EMAIL_PASS` variable on Render

### Step 4: Save and Redeploy

1. Click **"Save Changes"** on Render
2. Render will automatically redeploy your service
3. Wait for deployment to complete (usually 1-2 minutes)

### Step 5: Test the Contact Form

1. Go to your portfolio website
2. Fill out the contact form
3. Submit the form
4. You should see a success message!

---

## 🔍 Verify Environment Variables

### Check Render Logs

1. Go to your Render dashboard
2. Click on **"Logs"** tab
3. Look for these messages:

**✅ Good (Email configured):**
```
✅ Email transporter configured successfully
Server is running on port 5000
```

**❌ Bad (Email NOT configured):**
```
⚠️  Email credentials not configured. Contact form will not work.
Set EMAIL_USER and EMAIL_PASS in environment variables.
```

### Test Health Endpoint

Visit: https://portfolio-backend-9hvq.onrender.com/api/health

**Expected Response:**
```json
{"status":"Server is running"}
```

---

## 🐛 Common Issues

### Issue 1: "Invalid login" Error

**Cause:** Using regular Gmail password instead of App Password

**Solution:**
- Generate a Gmail App Password (see Step 3 above)
- Update `EMAIL_PASS` on Render with the 16-character code

### Issue 2: "Authentication failed"

**Cause:** App Password is incorrect or 2-Step Verification is not enabled

**Solution:**
1. Enable 2-Step Verification on your Google Account
2. Generate a new App Password
3. Update the `EMAIL_PASS` variable on Render

### Issue 3: Changes Not Taking Effect

**Cause:** Service not redeployed after adding environment variables

**Solution:**
1. After adding/changing environment variables
2. Click **"Manual Deploy"** → **"Deploy latest commit"**
3. Wait for deployment to complete

### Issue 4: Service Sleeping

**Cause:** Render free tier puts inactive services to sleep after 15 minutes

**Solution:**
- First request may be slow (service waking up)
- Consider using a service like UptimeRobot to ping your backend periodically
- Or upgrade to Render paid tier

---

## 📊 Quick Checklist

Before the contact form works, ensure:

- [ ] `EMAIL_USER` is set on Render
- [ ] `EMAIL_PASS` is set on Render (use App Password, not regular password)
- [ ] 2-Step Verification is enabled on Gmail
- [ ] App Password is generated from Google
- [ ] Environment variables are saved on Render
- [ ] Service has been redeployed
- [ ] Logs show "✅ Email transporter configured successfully"
- [ ] Health endpoint returns 200 OK

---

## 🔄 Alternative: Test Locally First

Before fixing on Render, test locally to ensure the backend works:

### 1. Set up local `.env` file:

```bash
cd backend
```

Create `.env`:
```
EMAIL_USER=ejas.connect@gmail.com
EMAIL_PASS=your-16-char-app-password
PORT=5000
```

### 2. Run backend locally:

```bash
npm start
```

### 3. Update frontend to use local backend:

In `src/components/Contact.jsx`, temporarily change:
```javascript
const apiUrl = 'http://localhost:5000/api/contact';
```

### 4. Test the form

If it works locally but not on Render, the issue is definitely environment variables.

---

## 📝 After Fixing

Once environment variables are configured on Render:

1. **Check Logs:** Look for successful email sending messages
2. **Test Form:** Submit a test message through your portfolio
3. **Check Email:** Verify you receive the email
4. **Check Auto-reply:** Verify the sender receives an auto-reply

---

## 💡 Pro Tips

1. **Keep App Password Secure**: Never commit it to Git
2. **Test Before Deploy**: Always test locally first
3. **Monitor Logs**: Check Render logs for errors
4. **Add Logging**: Enhanced logging is now in your server.js
5. **Backup Contact Method**: The error message now shows your email as fallback

---

## 🆘 Still Not Working?

If you've followed all steps and it still doesn't work:

1. **Check Render Logs** for specific error messages
2. **Verify App Password** is copied correctly (no spaces)
3. **Try Regenerating** the Gmail App Password
4. **Check Gmail Settings** - ensure IMAP/SMTP is enabled
5. **Contact Render Support** if server issues persist

---

## ✅ Success Indicators

You'll know it's working when:

- ✅ Form submits without errors
- ✅ Success message appears in green
- ✅ You receive an email with the form submission
- ✅ Sender receives an auto-reply
- ✅ Render logs show "✅ Email sent to yourself"

---

**Your backend URL:** https://portfolio-backend-9hvq.onrender.com

**Next Step:** Configure environment variables on Render dashboard now!
