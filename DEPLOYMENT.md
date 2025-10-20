# Deployment Guide

This guide covers deploying your portfolio to production environments.

## Frontend Deployment

### Option 1: Vercel (Recommended)

Vercel is the easiest way to deploy React/Vite applications.

#### Steps:

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo.git
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to https://vercel.com
   - Click "New Project"
   - Import your GitHub repository
   - Configure project:
     - **Framework Preset**: Vite
     - **Build Command**: `npm run build`
     - **Output Directory**: `dist`
     - **Install Command**: `npm install`
   - Click "Deploy"

3. **Update API Endpoint**
   - After deploying backend, update the API URL in `src/components/Contact.jsx`:
   ```javascript
   const response = await fetch('https://your-backend-url.com/api/contact', {
   ```

#### Custom Domain (Optional)
- Go to your project settings in Vercel
- Navigate to "Domains"
- Add your custom domain
- Update DNS records as instructed

### Option 2: Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Go to https://netlify.com
   - Drag and drop the `dist` folder
   - Or connect your GitHub repository

3. **Configure build settings**
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`

### Option 3: GitHub Pages

1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/repository-name",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Update vite.config.js**
   ```javascript
   export default defineConfig({
     base: '/repository-name/',
     plugins: [react()],
   })
   ```

4. **Deploy**
   ```bash
   npm run deploy
   ```

## Backend Deployment

### Option 1: Render (Recommended)

Render offers free tier for web services.

#### Steps:

1. **Create New Web Service**
   - Go to https://render.com
   - Click "New +" → "Web Service"
   - Connect your GitHub repository

2. **Configure Service**
   - **Name**: portfolio-backend
   - **Root Directory**: `backend`
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

3. **Set Environment Variables**
   - Click "Environment" tab
   - Add variables:
     ```
     EMAIL_USER=your.email@gmail.com
     EMAIL_PASS=your-app-password
     NODE_ENV=production
     ```

4. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Copy the service URL

5. **Update Frontend**
   - Update API endpoint in `src/components/Contact.jsx`:
   ```javascript
   const response = await fetch('https://your-service.onrender.com/api/contact', {
   ```

### Option 2: Heroku

1. **Install Heroku CLI**
   ```bash
   # Windows
   # Download from https://devcenter.heroku.com/articles/heroku-cli
   
   # Mac
   brew tap heroku/brew && brew install heroku
   
   # Linux
   curl https://cli-assets.heroku.com/install.sh | sh
   ```

2. **Login to Heroku**
   ```bash
   heroku login
   ```

3. **Create Heroku App**
   ```bash
   cd backend
   heroku create your-portfolio-backend
   ```

4. **Add Procfile** (if not exists)
   Create `backend/Procfile`:
   ```
   web: node server.js
   ```

5. **Set Environment Variables**
   ```bash
   heroku config:set EMAIL_USER=your.email@gmail.com
   heroku config:set EMAIL_PASS=your-app-password
   heroku config:set NODE_ENV=production
   ```

6. **Deploy**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   heroku git:remote -a your-portfolio-backend
   git push heroku main
   ```

7. **Verify Deployment**
   ```bash
   heroku logs --tail
   heroku open
   ```

### Option 3: Railway

1. **Connect GitHub**
   - Go to https://railway.app
   - Click "New Project"
   - Select "Deploy from GitHub repo"

2. **Configure**
   - Select your repository
   - Set root directory to `backend`
   - Railway auto-detects Node.js

3. **Add Environment Variables**
   - Go to Variables tab
   - Add EMAIL_USER, EMAIL_PASS

4. **Deploy**
   - Railway automatically deploys
   - Copy the generated URL

## Post-Deployment Checklist

### Frontend
- [ ] All links work correctly
- [ ] Images load properly
- [ ] Dark mode toggle works
- [ ] Smooth scrolling functions
- [ ] Navigation highlights active section
- [ ] Mobile responsive design works
- [ ] API endpoint points to production backend

### Backend
- [ ] Health check endpoint responds (`/api/health`)
- [ ] Contact form sends emails
- [ ] CORS is properly configured
- [ ] Environment variables are set
- [ ] Error logging is enabled

### Security
- [ ] API keys are not exposed in frontend code
- [ ] Environment variables are properly secured
- [ ] CORS allows only your frontend domain (production)
- [ ] Rate limiting is implemented (optional)

## Update CORS for Production

Update `backend/server.js` to allow only your frontend domain:

```javascript
app.use(cors({
  origin: ['https://your-portfolio.vercel.app', 'http://localhost:5173'],
  credentials: true
}));
```

## Testing Production Build Locally

### Frontend
```bash
npm run build
npm run preview
```
Visit http://localhost:4173 to test the production build

### Backend
```bash
cd backend
NODE_ENV=production npm start
```

## Monitoring

### Frontend (Vercel)
- View deployment logs in Vercel dashboard
- Check Analytics tab for visitor statistics

### Backend (Render)
- View logs in Render dashboard
- Monitor resource usage
- Set up alerts for downtime

## Troubleshooting

### Frontend not loading
1. Check build logs for errors
2. Verify `base` path in vite.config.js
3. Clear browser cache
4. Check browser console for errors

### Backend not responding
1. Check server logs
2. Verify environment variables
3. Test health endpoint
4. Check CORS configuration

### Contact form not working
1. Verify backend URL in Contact.jsx
2. Check browser console for CORS errors
3. Verify email credentials
4. Check backend logs for errors

### Mixed Content Errors
- Ensure backend uses HTTPS in production
- Update API URLs to use HTTPS

## Cost Optimization

### Free Tier Options
- **Frontend**: Vercel (Free), Netlify (Free), GitHub Pages (Free)
- **Backend**: Render (Free with limitations), Railway (Free tier)

### Paid Options (if needed)
- Vercel Pro: $20/month
- Render Standard: $7/month
- Heroku Hobby: $7/month

## Performance Optimization

1. **Enable Compression**
   Add to backend:
   ```javascript
   import compression from 'compression';
   app.use(compression());
   ```

2. **Optimize Images**
   - Use WebP format
   - Compress images before upload
   - Use lazy loading

3. **Enable Caching**
   - Set proper cache headers
   - Use CDN for static assets

## Continuous Deployment

Both Vercel and Render support automatic deployments:
- Push to main branch → Automatic deployment
- Pull requests create preview deployments
- Rollback to previous versions if needed

## Support

For deployment issues:
- Vercel: https://vercel.com/docs
- Render: https://render.com/docs
- Heroku: https://devcenter.heroku.com/

---

**Note**: Keep your environment variables secure and never commit `.env` files to version control!
