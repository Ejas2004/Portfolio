# Troubleshooting Guide

Common issues and their solutions.

## Installation Issues

### Error: `npm install` fails

**Symptoms**: Installation stops with errors

**Solutions**:
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Error: Node version incompatibility

**Symptoms**: "Unsupported engine" or version errors

**Solution**: Update Node.js to v14 or higher
```bash
node --version  # Check current version
```
Download latest from https://nodejs.org

## Development Server Issues

### Port already in use

**Symptoms**: "Port 5173 is in use"

**Solution**: Vite automatically uses next available port. Look for the actual port in terminal output.

Alternative: Kill the process using the port
```bash
# Windows
netstat -ano | findstr :5173
taskkill /PID <process_id> /F

# Mac/Linux
lsof -ti:5173 | xargs kill
```

### Dev server won't start

**Symptoms**: Server crashes immediately

**Check**:
1. All dependencies installed?
   ```bash
   npm install
   ```

2. No syntax errors in config files?
   - Check `vite.config.js`
   - Check `tailwind.config.js`

3. Port not blocked by firewall?

## Styling Issues

### Tailwind classes not working

**Symptoms**: Elements have no styling

**Solutions**:
1. Check `tailwind.config.js` content paths:
   ```javascript
   content: [
     "./index.html",
     "./src/**/*.{js,ts,jsx,tsx}",
   ],
   ```

2. Verify imports in `index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

3. Restart dev server

### Dark mode not working

**Symptoms**: Toggle button doesn't change theme

**Debug steps**:
1. Open browser DevTools
2. Inspect `<html>` element
3. Click dark mode toggle
4. Check if `class="dark"` appears on `<html>`

**Solutions**:
- Verify `darkMode: 'class'` in `tailwind.config.js`
- Check `useEffect` in `Navbar.jsx` runs
- Clear browser cache

### Styles look broken after build

**Symptoms**: Production build looks different from dev

**Solution**:
```bash
# Clear build folder
rm -rf dist

# Rebuild
npm run build

# Test locally
npm run preview
```

## Component Issues

### Components not displaying

**Symptoms**: Blank page or missing sections

**Check**:
1. Import paths correct?
   ```javascript
   import Navbar from './components/Navbar';
   ```

2. Component exported correctly?
   ```javascript
   export default ComponentName;
   ```

3. Check browser console for errors

### Icons not showing

**Symptoms**: Icon components render but show nothing

**Solutions**:
1. Verify react-icons installed:
   ```bash
   npm install react-icons
   ```

2. Check import statements:
   ```javascript
   import { FaGithub } from 'react-icons/fa';
   ```

3. Icon names are case-sensitive

### Navbar not sticky

**Symptoms**: Navbar scrolls with page

**Check**:
- `className="fixed"` is present
- `z-index` is high enough
- Not overridden by other styles

## Contact Form Issues

### Form submission errors

**Symptoms**: "Failed to send message" error

**Debug checklist**:
1. ✅ Backend server running?
   ```bash
   cd backend
   npm run dev
   ```

2. ✅ Backend logs show request?
   - Check terminal where backend is running
   - Look for POST /api/contact

3. ✅ CORS enabled in backend?
   - Check `server.js` has `app.use(cors())`

4. ✅ API URL correct in Contact.jsx?
   ```javascript
   fetch('http://localhost:5000/api/contact')
   ```

5. ✅ Check browser console for errors

### Emails not sending

**Symptoms**: Form submits but no email received

**Check**:
1. Environment variables set?
   ```bash
   # In backend/.env
   EMAIL_USER=your.email@gmail.com
   EMAIL_PASS=your-app-password
   ```

2. Using App Password (not regular password)?
   - Must be 16-character app password from Google

3. 2-Step Verification enabled?
   - Required for Gmail app passwords

4. Check backend logs for errors:
   ```bash
   cd backend
   npm run dev
   ```

### CORS errors

**Symptoms**: "CORS policy" error in browser console

**Solution**: Add to `backend/server.js`:
```javascript
app.use(cors({
  origin: 'http://localhost:5173',  // Your frontend URL
  credentials: true
}));
```

## Image Issues

### Images not loading

**Symptoms**: Broken image icons

**Solutions**:
1. Check file path:
   ```javascript
   // Public folder
   <img src="/images/photo.jpg" />
   
   // Import from src
   import photo from './assets/photo.jpg';
   <img src={photo} />
   ```

2. File exists in correct location?
3. File extension correct? (.jpg vs .jpeg)
4. Check browser Network tab for 404 errors

### Images too large/slow

**Symptoms**: Slow page load

**Solutions**:
- Compress images (TinyPNG, Squoosh)
- Convert to WebP format
- Resize to appropriate dimensions
- Max 200KB per image

## Build Issues

### Build fails

**Symptoms**: `npm run build` errors

**Common causes**:
1. TypeScript errors (can be ignored if using JS)
2. Unused imports
3. Syntax errors
4. Missing dependencies

**Solutions**:
```bash
# Check for errors
npm run build

# Fix ESLint issues
npm run lint

# Clean and rebuild
rm -rf dist node_modules
npm install
npm run build
```

### Build succeeds but site broken

**Symptoms**: Production build doesn't work

**Check**:
1. Test build locally:
   ```bash
   npm run preview
   ```

2. Check base path in `vite.config.js`:
   ```javascript
   base: '/',  // Adjust for deployment
   ```

3. Environment variables set?

## Deployment Issues

### Frontend deployment fails (Vercel)

**Common issues**:
1. Build command wrong
   - Should be: `npm run build`

2. Output directory wrong
   - Should be: `dist`

3. Node version too old
   - Set Node version in Vercel settings

4. Environment variables missing

**Debug**:
- Check deployment logs in Vercel dashboard
- Test build locally first

### Backend deployment fails (Render)

**Common issues**:
1. Root directory wrong
   - Should be: `backend`

2. Start command wrong
   - Should be: `npm start`

3. Environment variables not set
   - Add in Render dashboard

4. Port configuration
   - Use `process.env.PORT`

**Debug**:
- Check logs in Render dashboard
- Test with `NODE_ENV=production npm start` locally

### Site deployed but contact form broken

**Cause**: API endpoint still pointing to localhost

**Solution**: Update in `src/components/Contact.jsx`:
```javascript
const response = await fetch('https://your-backend-url.onrender.com/api/contact', {
```

### Custom domain not working

**Check**:
1. DNS records updated?
   - Can take up to 48 hours
2. SSL certificate issued?
   - Usually automatic
3. Domain verified in platform?

## Performance Issues

### Slow page load

**Solutions**:
1. Optimize images
2. Remove unused dependencies
3. Enable compression in backend
4. Use production build
5. Check Network tab in DevTools

### Animations janky

**Solutions**:
1. Reduce animation complexity
2. Use CSS transforms (not width/height)
3. Use will-change CSS property sparingly
4. Reduce number of animated elements

## Browser Compatibility

### Works in Chrome but not Safari

**Common issues**:
1. CSS not prefixed (autoprefixer should handle this)
2. Modern JavaScript features
3. WebP images (Safari support varies)

**Solution**: Test in multiple browsers during development

### Mobile Safari issues

**Common issues**:
1. 100vh includes address bar
2. Touch events differ
3. Fixed positioning behaves differently

**Solutions**:
- Use `min-h-screen` instead of `h-screen`
- Test on actual device, not just DevTools
- Add `-webkit-` prefixes if needed

## Production Issues

### Environment variables not working

**Frontend (Vercel)**:
- Must prefix with `VITE_`
- Example: `VITE_API_URL`
- Set in Vercel dashboard

**Backend (Render)**:
- No prefix needed
- Set in Render dashboard
- Redeploy after adding

### API calls fail in production

**Check**:
1. Using HTTPS (not HTTP)?
2. CORS configured for production domain?
3. Environment variables set?
4. Backend actually deployed and running?

**Debug**:
```javascript
// Add logging
console.log('API URL:', apiUrl);
```

## Debugging Tips

### Enable verbose logging

**Frontend**:
```javascript
// Add to components
console.log('Component state:', state);
```

**Backend**:
```javascript
// Add to routes
console.log('Request received:', req.body);
```

### Use browser DevTools

1. **Console**: Check for errors
2. **Network**: Monitor API calls
3. **Elements**: Inspect DOM and styles
4. **Application**: Check localStorage, cookies

### Check all logs

1. Frontend terminal
2. Backend terminal
3. Browser console
4. Deployment platform logs

## Common Error Messages

### "Cannot find module"

**Cause**: Import path wrong or dependency missing

**Solution**:
```bash
npm install <missing-package>
```
Or fix import path

### "Unexpected token"

**Cause**: Syntax error in JavaScript

**Solution**: Check the file and line mentioned in error

### "Failed to compile"

**Cause**: Various build errors

**Solution**: Read full error message, usually points to exact issue

### "Network Error"

**Cause**: Backend not reachable

**Solution**: 
1. Check backend running
2. Check URL correct
3. Check CORS configured

## Still Having Issues?

### Systematic debugging:

1. **Read the error message carefully**
   - Often tells you exactly what's wrong

2. **Check the obvious first**
   - Is server running?
   - Are dependencies installed?
   - Is file saved?

3. **Isolate the problem**
   - Does it work in a new browser?
   - Does it work for others?
   - Did it work before?

4. **Search for error message**
   - Google exact error
   - Check Stack Overflow
   - Check GitHub issues

5. **Simplify**
   - Comment out code until it works
   - Add back piece by piece
   - Find what breaks it

6. **Ask for help**
   - Provide error messages
   - Describe what you tried
   - Share relevant code

## Quick Checklist

When something doesn't work:

- [ ] Dependencies installed? (`npm install`)
- [ ] Dev server running?
- [ ] Backend running (if testing forms)?
- [ ] Browser console checked?
- [ ] Terminal checked for errors?
- [ ] Files saved?
- [ ] Browser cache cleared?
- [ ] Tried in incognito mode?
- [ ] Tried different browser?
- [ ] Environment variables set?
- [ ] Restarted dev server?

---

**Remember**: Most issues are simple fixes. Stay calm, read error messages, and debug systematically!
