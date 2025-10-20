# Resend Email Setup Guide

## 🎯 **Why Resend?**

- ✅ **Simple**: Just one API key, no complex SMTP configuration
- ✅ **Reliable**: Built for modern cloud platforms like Render
- ✅ **Free**: 100 emails per day (more than enough for a portfolio)
- ✅ **Fast**: Works instantly, no connection timeouts
- ✅ **Modern**: Better API than traditional email services

---

## 🚀 **Quick Setup (5 minutes)**

### **Step 1: Sign Up for Resend**

1. Go to: https://resend.com/signup
2. Sign up with your email or GitHub
3. Verify your email address

### **Step 2: Get Your API Key**

1. After logging in, you'll be on the Dashboard
2. Click **"API Keys"** in the left sidebar
3. Click **"Create API Key"**
4. Name it: **"Portfolio Backend"**
5. Select permissions: **"Sending access"**
6. Click **"Create"**
7. **Copy the API key** - it starts with `re_`
   - Example: `re_123abc456def789ghi`
   - ⚠️ **Save it now!** You won't see it again

### **Step 3: Add API Key to Render**

1. Go to: https://dashboard.render.com
2. Click on your backend service: **portfolio-backend-9hvq**
3. Click **"Environment"** in left sidebar
4. Click **"Add Environment Variable"**
5. Add:
   ```
   Key: RESEND_API_KEY
   Value: re_your-actual-api-key-here
   ```
6. Click **"Save Changes"**
7. Render will automatically redeploy (takes 1-2 minutes)

### **Step 4: Test It!**

1. Wait for Render to finish deploying
2. Go to your portfolio website
3. Fill out the contact form
4. Click "Send Message"
5. ✅ **Success!** You should see a green success message

---

## 📧 **How It Works**

### **Email Flow:**

1. Visitor fills out contact form on your website
2. Frontend sends data to your backend
3. Backend uses Resend API to send emails:
   - **To you:** `ejas.connect@gmail.com` with the message
   - **To visitor:** Auto-reply thanking them
4. Both parties receive emails instantly!

### **From Address:**

By default, Resend uses: `onboarding@resend.dev`

This is fine for testing! To use your own domain (like `contact@yourdomain.com`):
1. Add your domain in Resend dashboard
2. Add DNS records
3. Update `from` field in `server.js`

---

## 🔧 **Local Development Setup**

### **Install Dependencies:**

```bash
cd backend
npm install
```

This installs the `resend` package.

### **Update .env File:**

```bash
RESEND_API_KEY=re_your-api-key-here
PORT=5000
```

### **Start Backend:**

```bash
npm start
# or for auto-reload
npm run dev
```

### **Test Locally:**

```powershell
$body = @{
    name = "Test User"
    email = "test@example.com"
    message = "Testing Resend integration"
} | ConvertTo-Json

Invoke-RestMethod -Uri http://localhost:5000/api/contact -Method POST -Body $body -ContentType "application/json"
```

---

## ✅ **Verification Checklist**

After setup, verify:

- [ ] Resend account created
- [ ] API key obtained
- [ ] API key added to Render environment variables
- [ ] Backend redeployed on Render
- [ ] Render logs show: `✅ Resend email service configured successfully`
- [ ] Contact form submits successfully
- [ ] You receive email at `ejas.connect@gmail.com`
- [ ] Visitor receives auto-reply

---

## 📊 **Check Render Logs**

### **Good (Working):**
```
✅ Resend email service configured successfully
Server is running on port 5000
📧 Attempting to send email from: John (john@example.com)
✅ Email sent successfully via Resend
✅ Auto-reply sent successfully
```

### **Bad (Not Working):**
```
⚠️  Resend API key not configured
```

If you see this, the API key isn't set in Render's environment variables.

---

## 🐛 **Troubleshooting**

### **Issue: "Resend API key not configured"**

**Solution:**
1. Check Render environment variables
2. Make sure key is named exactly: `RESEND_API_KEY`
3. Save and wait for redeploy

### **Issue: "Invalid API key"**

**Solution:**
1. Copy the API key again from Resend dashboard
2. Make sure you copied the entire key (starts with `re_`)
3. Update the key in Render
4. Save and redeploy

### **Issue: "From email not verified"**

**Solution:**
This is normal! `onboarding@resend.dev` is pre-verified.
If using custom domain, verify it in Resend dashboard first.

### **Issue: Contact form still shows error**

**Solutions:**
1. Clear browser cache
2. Wait 2-3 minutes for Render to fully redeploy
3. Check Render logs for specific errors
4. Test the health endpoint: `https://portfolio-backend-9hvq.onrender.com/api/health`

---

## 💰 **Pricing**

### **Free Tier:**
- 100 emails per day
- 3,000 emails per month
- **Perfect for a portfolio!**

### **Paid Plans:**
Only needed if you get A LOT of contact form submissions:
- Pro: $20/month (50,000 emails/month)
- Business: $80/month (100,000 emails/month)

For a personal portfolio, **free tier is more than enough**!

---

## 🔒 **Security Best Practices**

✅ **Do:**
- Keep API key secret
- Add to `.gitignore` (already done)
- Use environment variables
- Regenerate if exposed

❌ **Don't:**
- Commit API key to Git
- Share API key publicly
- Use same key for multiple projects

---

## 📚 **Additional Resources**

- **Resend Docs:** https://resend.com/docs
- **API Reference:** https://resend.com/docs/api-reference
- **Dashboard:** https://resend.com/dashboard
- **Email Logs:** https://resend.com/emails (see all sent emails)

---

## 🎉 **Benefits Over Gmail SMTP**

| Feature | Resend | Gmail SMTP |
|---------|--------|------------|
| Setup Complexity | ⭐ Very Easy | ⭐⭐⭐ Complex |
| Works on Render Free | ✅ Yes | ❌ No (port blocked) |
| Connection Speed | ⚡ Instant | 🐢 Can timeout |
| API vs SMTP | 🚀 Modern API | 📧 Old SMTP |
| Free Tier | 100/day | Limited |
| Reliability | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |

---

## 📝 **Summary**

**What you need:**
1. Resend account (free)
2. API key from Resend
3. Add key to Render environment

**What you get:**
- ✅ Working contact form
- ✅ Instant email delivery
- ✅ Auto-replies to visitors
- ✅ No connection timeouts
- ✅ Simple, modern setup

**Total setup time: ~5 minutes**

---

## 🆘 **Still Need Help?**

If you run into issues:

1. **Check Resend email logs:** https://resend.com/emails
2. **Check Render logs:** Look for error messages
3. **Test health endpoint:** https://portfolio-backend-9hvq.onrender.com/api/health
4. **Verify API key:** Make sure it's correct in Render

---

**Your portfolio contact form is about to work perfectly! 🎊**

Next step: Get your API key and add it to Render!
