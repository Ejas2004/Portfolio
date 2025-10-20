# API Endpoints Guide

## Available Endpoints

### 1. Health Check (GET)
**URL:** `/api/health`  
**Method:** `GET`  
**Purpose:** Check if the server is running

**Test in Browser:**
```
http://localhost:5000/api/health
```

**Expected Response:**
```json
{
  "status": "Server is running"
}
```

---

### 2. Contact Form (POST)
**URL:** `/api/contact`  
**Method:** `POST`  
**Purpose:** Send contact form emails

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to get in touch!"
}
```

**Success Response (200):**
```json
{
  "message": "Email sent successfully"
}
```

**Error Responses:**

- **400 Bad Request** (Missing fields):
```json
{
  "error": "All fields are required"
}
```

- **503 Service Unavailable** (Email not configured):
```json
{
  "error": "Email service not configured. Please contact directly at the email provided on the website."
}
```

- **500 Internal Server Error** (Email sending failed):
```json
{
  "error": "Failed to send email. [specific error message]"
}
```

---

### 3. Contact Form Info (GET)
**URL:** `/api/contact`  
**Method:** `GET`  
**Purpose:** Explains that this endpoint only accepts POST

**Test in Browser:**
```
http://localhost:5000/api/contact
```

**Response (405 Method Not Allowed):**
```json
{
  "error": "Method Not Allowed",
  "message": "This endpoint only accepts POST requests. Please use the contact form on the website.",
  "hint": "To test, send a POST request with JSON: { \"name\": \"Test\", \"email\": \"test@example.com\", \"message\": \"Test message\" }"
}
```

---

## Testing the API

### Using PowerShell (Windows):

**Test Health Endpoint:**
```powershell
Invoke-RestMethod -Uri http://localhost:5000/api/health
```

**Test Contact Form:**
```powershell
$body = @{
    name = "Test User"
    email = "test@example.com"
    message = "This is a test message"
} | ConvertTo-Json

Invoke-RestMethod -Uri http://localhost:5000/api/contact -Method POST -Body $body -ContentType "application/json"
```

### Using curl (Git Bash/WSL/Mac/Linux):

**Test Health Endpoint:**
```bash
curl http://localhost:5000/api/health
```

**Test Contact Form:**
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

### Using Browser:

**Health Check (works):**
- Just visit: `http://localhost:5000/api/health`

**Contact Form (shows error - expected):**
- Visit: `http://localhost:5000/api/contact`
- You'll see "Method Not Allowed" message
- This is CORRECT behavior - contact endpoint must use POST, not GET

---

## Common Errors Explained

### "Cannot GET /api/contact"
**What it means:** You tried to access `/api/contact` in your browser  
**Why it happens:** Browsers use GET requests, but this endpoint only accepts POST  
**Is this bad?:** No! This is correct behavior  
**Solution:** Use the contact form on your website, or test with POST request (see above)

### "404 Not Found"
**What it means:** The endpoint doesn't exist  
**Solution:** Check the URL spelling and make sure the server is running

### "500 Internal Server Error"
**What it means:** Server error, usually email configuration issue  
**Solution:** Check environment variables (EMAIL_USER, EMAIL_PASS)

### "503 Service Unavailable"
**What it means:** Email service not configured  
**Solution:** Set EMAIL_USER and EMAIL_PASS in .env file

---

## Production URLs (Render)

When deployed on Render, replace `localhost:5000` with your Render URL:

**Health Check:**
```
https://portfolio-backend-9hvq.onrender.com/api/health
```

**Contact Form (POST only):**
```
https://portfolio-backend-9hvq.onrender.com/api/contact
```

---

## Summary

| Endpoint | Method | Browser Test | Purpose |
|----------|--------|--------------|---------|
| `/api/health` | GET | ✅ Yes | Check server status |
| `/api/contact` | GET | ⚠️ Shows "Method Not Allowed" | Information only |
| `/api/contact` | POST | ❌ No (use form) | Send emails |

**Remember:** The contact form on your website automatically sends POST requests to `/api/contact`, so you don't need to test it manually. Just use the form!
