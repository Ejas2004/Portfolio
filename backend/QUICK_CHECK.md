# Quick Backend Check Reference

## ⚡ Fastest Way to Check Backend Status

### Option 1: Run Health Check Script (Recommended)
```powershell
cd backend
.\check-backend.ps1
```

**Expected Output:**
```
[SUCCESS] Backend is RUNNING and HEALTHY
```

---

### Option 2: Browser Check (Simplest)
1. Open browser
2. Go to: **http://localhost:5000/api/health**
3. You should see:
   ```json
   {"status":"Server is running"}
   ```

---

### Option 3: Command Line (Quick)
```powershell
Invoke-RestMethod http://localhost:5000/api/health
```

**Expected Response:**
```
status
------
Server is running
```

---

## 🚀 Start Backend Server

```bash
# Navigate to backend folder
cd backend

# Install dependencies (first time only)
npm install

# Start server
npm start
```

**Expected Terminal Output:**
```
Server is running on port 5000
```

---

## ✅ Quick Checklist

| Check | Command | Expected Result |
|-------|---------|-----------------|
| **Port Active** | `Get-NetTCPConnection -LocalPort 5000` | Shows connection info |
| **Health Endpoint** | Visit `http://localhost:5000/api/health` | `{"status":"Server is running"}` |
| **Env File** | Check `backend/.env` exists | File should exist |
| **Dependencies** | `backend/node_modules` exists | Folder should exist |

---

## 🐛 Quick Fixes

### Backend won't start?
```bash
cd backend
npm install
npm start
```

### Port 5000 in use?
**Find and kill the process:**
```powershell
# Find process
Get-NetTCPConnection -LocalPort 5000

# Kill it (replace PID with actual number)
Stop-Process -Id PID -Force
```

### Email not working?
1. Check `backend/.env` has correct credentials
2. Use Gmail App Password (not regular password)
3. Enable 2-Step Verification in Gmail

---

## 📊 Status Indicators

| Message | Meaning | Action |
|---------|---------|--------|
| `Server is running on port 5000` | ✅ Everything OK | Continue working |
| `EADDRINUSE` | ⚠️ Port already used | Kill other process or use different port |
| `Missing credentials` | ❌ No .env file | Create and configure .env |
| `Cannot find module` | ❌ Dependencies missing | Run `npm install` |

---

## 🔗 Quick Links

- **Health Check**: http://localhost:5000/api/health
- **Contact Endpoint**: http://localhost:5000/api/contact (POST)
- **Full Testing Guide**: [BACKEND_TESTING.md](BACKEND_TESTING.md)

---

## 💡 Pro Tips

1. **Keep backend terminal open** to see request logs
2. **Run health check script** before testing contact form
3. **Check browser console** for CORS or network errors
4. **Restart server** after changing .env file

---

**Your backend is healthy when:**
- ✅ Server starts without errors
- ✅ Health endpoint responds
- ✅ Port 5000 is listening
- ✅ .env file is configured

**Happy coding! 🚀**
