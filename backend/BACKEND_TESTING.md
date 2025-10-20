# Backend Testing Guide

Complete guide to check if your backend is running correctly.

## 🚀 Quick Start

### Step 1: Install Dependencies

```bash
cd backend
npm install
```

### Step 2: Configure Environment Variables

Make sure your `.env` file is set up:

```bash
# backend/.env
EMAIL_USER=your.email@gmail.com
EMAIL_PASS=your-gmail-app-password
PORT=5000
```

### Step 3: Start the Server

```bash
npm start
# or for development with auto-reload
npm run dev
```

**Expected Output:**
```
Server is running on port 5000
```

If you see this message, the backend is running! ✅

## ✅ Method 1: Check Terminal Output

### Good Signs:
```
✅ Server is running on port 5000
```

### Warning Signs:
```
❌ Error: listen EADDRINUSE: address already in use :::5000
   → Port 5000 is already in use
   
❌ Error: Missing credentials
   → .env file not configured
   
❌ Cannot find module 'express'
   → Dependencies not installed (run npm install)
```

## ✅ Method 2: Test Health Endpoint

The backend has a health check endpoint at `/api/health`.

### Using Browser:
1. Open your browser
2. Navigate to: `http://localhost:5000/api/health`
3. You should see:
   ```json
   {"status":"Server is running"}
   ```

### Using Command Line (PowerShell):
```powershell
Invoke-RestMethod -Uri http://localhost:5000/api/health
```

### Using Command Line (cmd or bash):
```bash
curl http://localhost:5000/api/health
```

**Expected Response:**
```json
{
  "status": "Server is running"
}
```

## ✅ Method 3: Test Contact Form Endpoint

### Using PowerShell:
```powershell
$body = @{
    name = "Test User"
    email = "test@example.com"
    message = "This is a test message"
} | ConvertTo-Json

Invoke-RestMethod -Uri http://localhost:5000/api/contact -Method POST -Body $body -ContentType "application/json"
```

### Using curl (Git Bash/WSL):
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

**Expected Response (Success):**
```json
{
  "message": "Email sent successfully"
}
```

**Expected Response (Error - Missing Fields):**
```json
{
  "error": "All fields are required"
}
```

## ✅ Method 4: Check from Frontend

1. Make sure frontend is running (`npm run dev` in main directory)
2. Navigate to the Contact section
3. Fill out the form with test data
4. Click "Send Message"
5. Check if you receive success message
6. Check your email inbox for the test message

## ✅ Method 5: Check Process/Port

### Check if port 5000 is in use:

**Windows (PowerShell):**
```powershell
Get-NetTCPConnection -LocalPort 5000
```

**Windows (cmd):**
```cmd
netstat -ano | findstr :5000
```

**Expected Output:**
```
TCP    0.0.0.0:5000          0.0.0.0:0              LISTENING       12345
```

If you see output, the port is in use (likely by your backend server).

## 🐛 Common Issues and Solutions

### Issue 1: Port Already in Use

**Error:**
```
Error: listen EADDRINUSE: address already in use :::5000
```

**Solutions:**

**Option A: Kill the process using port 5000**

Windows (PowerShell):
```powershell
# Find the process
Get-NetTCPConnection -LocalPort 5000 | Select-Object -ExpandProperty OwningProcess

# Kill it (replace PID with actual process ID)
Stop-Process -Id PID -Force
```

Windows (cmd):
```cmd
# Find process ID
netstat -ano | findstr :5000

# Kill it (replace PID with the number from the last column)
taskkill /PID PID /F
```

**Option B: Use a different port**

Edit `backend/.env`:
```
PORT=5001
```

Then update the API URL in `src/components/Contact.jsx`:
```javascript
const response = await fetch('http://localhost:5001/api/contact', {
```

### Issue 2: Email Not Sending

**Error:**
```
Error: Invalid login
```

**Solutions:**
1. Check `.env` has correct credentials
2. Verify you're using Gmail App Password, not regular password
3. Ensure 2-Step Verification is enabled for Gmail
4. Check if EMAIL_USER and EMAIL_PASS are set correctly

**Verify .env:**
```bash
# backend/.env should look like:
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=abcd efgh ijkl mnop  # 16-character app password (spaces are OK)
PORT=5000
```

### Issue 3: CORS Errors

**Error in browser console:**
```
Access to fetch at 'http://localhost:5000/api/contact' from origin 'http://localhost:5173' has been blocked by CORS policy
```

**Solution:**
This should already be fixed in `server.js`, but verify CORS is enabled:

```javascript
// In server.js
app.use(cors());
```

### Issue 4: Dependencies Not Installed

**Error:**
```
Cannot find module 'express'
```

**Solution:**
```bash
cd backend
npm install
```

### Issue 5: Environment Variables Not Loading

**Error:**
```
Email credentials not configured
```

**Solution:**
1. Check `.env` file exists in `backend` folder
2. File should be named exactly `.env` (not `.env.txt`)
3. No spaces around `=` sign
4. Restart the server after changing `.env`

## 📊 Backend Status Checklist

Use this checklist to verify everything is working:

- [ ] Dependencies installed (`npm install` completed successfully)
- [ ] `.env` file configured with email credentials
- [ ] Server starts without errors
- [ ] Terminal shows "Server is running on port 5000"
- [ ] Health endpoint responds: `http://localhost:5000/api/health`
- [ ] Can send POST request to `/api/contact`
- [ ] Email is received when testing contact form
- [ ] No CORS errors in browser console
- [ ] Frontend can communicate with backend

## 🔍 Detailed Logging

To see more detailed logs, modify `server.js` temporarily:

```javascript
// Add after line 12 (after app.use(express.json()))
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});
```

This will log every request to the console.

## 📝 Test Script

Create a test file `test-backend.js` in the backend folder:

```javascript
// test-backend.js
import fetch from 'node-fetch';

async function testBackend() {
  console.log('🧪 Testing Backend...\n');

  // Test 1: Health Check
  try {
    const health = await fetch('http://localhost:5000/api/health');
    const data = await health.json();
    console.log('✅ Health Check:', data);
  } catch (error) {
    console.log('❌ Health Check Failed:', error.message);
  }

  // Test 2: Contact Form
  try {
    const contact = await fetch('http://localhost:5000/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        message: 'Test message'
      })
    });
    const data = await contact.json();
    console.log('✅ Contact Form:', data);
  } catch (error) {
    console.log('❌ Contact Form Failed:', error.message);
  }
}

testBackend();
```

Run it:
```bash
node test-backend.js
```

## 🎯 Quick Verification Command

For a quick check, run this one-liner in PowerShell:

```powershell
try { (Invoke-RestMethod http://localhost:5000/api/health).status } catch { "Backend not running" }
```

**Expected Output:**
```
Server is running
```

## 📱 Testing from Another Device

To test from your phone or another computer on the same network:

1. Find your local IP address:
   ```powershell
   ipconfig
   ```
   Look for "IPv4 Address" (e.g., 192.168.1.100)

2. Update CORS in `server.js`:
   ```javascript
   app.use(cors({
     origin: '*'  // Allow all origins for testing
   }));
   ```

3. Access from other device:
   ```
   http://YOUR-IP-ADDRESS:5000/api/health
   ```

## 🔒 Security Note

**Before deploying to production:**
1. Remove test endpoints
2. Configure CORS properly (specific origins only)
3. Add rate limiting
4. Use environment variables for sensitive data
5. Enable HTTPS

## 📚 Additional Resources

- **Nodemailer Docs**: https://nodemailer.com/
- **Express Docs**: https://expressjs.com/
- **CORS Docs**: https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

## 🆘 Still Having Issues?

1. Check the server terminal for error messages
2. Check browser console for frontend errors
3. Verify all dependencies are installed
4. Ensure `.env` file is configured correctly
5. Try restarting both frontend and backend
6. Check firewall isn't blocking port 5000

---

**Your backend is working correctly when:**
- ✅ Server starts without errors
- ✅ Health endpoint responds
- ✅ Contact form sends emails
- ✅ No errors in terminal or browser console

**Happy testing! 🚀**
