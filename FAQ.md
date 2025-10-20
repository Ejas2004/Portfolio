# Frequently Asked Questions (FAQ)

## General Questions

### Q: Do I need coding experience to customize this portfolio?
**A:** Basic knowledge of HTML/CSS and JavaScript is helpful, but the documentation is detailed enough for beginners. You can customize most content by simply editing text and URLs.

### Q: Is this portfolio free to use?
**A:** Yes! This is completely free to use for personal or commercial purposes. No attribution required, though it's appreciated!

### Q: Can I use this for my freelance/business portfolio?
**A:** Absolutely! This portfolio is perfect for freelancers, developers, designers, and any creative professionals.

## Setup & Installation

### Q: I'm getting npm errors during installation. What should I do?
**A:** Try these steps:
1. Delete `node_modules` folder and `package-lock.json`
2. Run `npm cache clean --force`
3. Run `npm install` again
4. Make sure you're using Node.js v14 or higher

### Q: The dev server won't start. Help!
**A:** Check:
- Port 5173 might be in use (Vite will use next available port)
- Run `npm install` first
- Check for error messages in terminal
- Try restarting your terminal/IDE

### Q: Dark mode isn't working. Why?
**A:** Ensure:
- Tailwind CSS is properly installed
- The `dark` class is being toggled on `<html>` element
- All components have `dark:` variant classes
- Browser DevTools shows dark classes being applied

## Email & Contact Form

### Q: How do I set up the contact form?
**A:** Follow these steps:
1. Go to `backend` folder
2. Copy `.env.example` to `.env`
3. Add your Gmail and app password
4. Run `npm install` in backend folder
5. Run `npm run dev` to start backend server

### Q: What is a Gmail App Password?
**A:** It's a 16-character password Google generates for apps to access your Gmail. Get it from:
Google Account → Security → 2-Step Verification → App passwords

### Q: Can I use Outlook/Yahoo instead of Gmail?
**A:** Yes! In `backend/server.js`, change:
```javascript
service: 'outlook' // or 'yahoo'
```

### Q: The contact form isn't sending emails. What's wrong?
**A:** Common issues:
- Backend server not running (start with `npm run dev` in backend folder)
- Incorrect email credentials in `.env`
- 2-Step Verification not enabled for Gmail
- Using regular password instead of App Password
- Firewall blocking port 5000

### Q: Can the contact form work without a backend?
**A:** Not with this setup. However, alternatives:
- Use Formspree (free email service)
- Use EmailJS (client-side email)
- Use Netlify Forms (if deployed on Netlify)

## Customization

### Q: How do I change the color scheme?
**A:** Edit `tailwind.config.js`:
```javascript
colors: {
  'primary': '#your-color',
}
```
Then replace `blue-600` with `primary` in components.

### Q: How do I add more projects?
**A:** In `src/components/Projects.jsx`, add new objects to the `projects` array:
```javascript
{
  title: 'New Project',
  description: 'Description...',
  techStack: ['React', 'Node.js'],
  image: '/path/to/image.jpg',
  github: 'https://github.com/...',
  live: 'https://...'
}
```

### Q: How do I add my own photo?
**A:** 
1. Add image to `public/images/` folder
2. In `src/components/About.jsx`, update:
```javascript
<img src="/images/your-photo.jpg" alt="Your Name" />
```

### Q: Can I remove the dark mode toggle?
**A:** Yes! 
1. Remove the toggle button in `Navbar.jsx`
2. Remove all `dark:` classes from components
3. Stick with one color scheme

### Q: How do I add a blog section?
**A:** 
1. Create `src/components/Blog.jsx`
2. Design similar to Projects section
3. Import and add to `App.jsx`
4. Add to navigation in `Navbar.jsx`

### Q: Can I change the font?
**A:** Yes! 
1. Import font in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet">
```
2. Update `tailwind.config.js`:
```javascript
fontFamily: {
  sans: ['Inter', 'sans-serif']
}
```

## Deployment

### Q: Where should I deploy my portfolio?
**A:** Recommended:
- **Frontend**: Vercel (free, automatic deployments)
- **Backend**: Render (free tier available)

### Q: Do I need a custom domain?
**A:** No, but it's more professional. Providers like:
- Namecheap
- Google Domains
- GoDaddy
Cost: ~$10-15/year

### Q: Is deployment free?
**A:** Yes! 
- Vercel: Free for personal projects
- Render: Free tier available (with limitations)
- Netlify: Free tier available

### Q: How do I connect a custom domain?
**A:** On Vercel:
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed
4. Wait for propagation (up to 48 hours)

### Q: After deployment, my contact form doesn't work. Why?
**A:** Update the API endpoint in `src/components/Contact.jsx`:
```javascript
const response = await fetch('https://your-backend-url.com/api/contact', {
```

## Performance

### Q: My portfolio loads slowly. How can I fix this?
**A:** 
- Compress images (use TinyPNG or WebP format)
- Optimize image sizes (max 200KB per image)
- Use lazy loading for images
- Build for production (`npm run build`)

### Q: Images are too large. How do I optimize them?
**A:** 
- Use online tools: TinyPNG, Squoosh
- Recommended: WebP format
- Max size: 1920x1080 for full-width images
- Max size: 600x400 for project cards
- Profile photo: 400x400

### Q: Should I use animations?
**A:** Yes, but keep them subtle:
- Current animations are already optimized
- Don't add more heavy animations
- Keep duration under 1 second

## Technical Issues

### Q: I see TypeScript errors but I'm using JavaScript. Why?
**A:** Your IDE might be checking types. This is normal and won't affect functionality. You can ignore them or disable TypeScript checking in IDE settings.

### Q: Tailwind classes aren't working. What's wrong?
**A:** Check:
- Tailwind is installed: `npm list tailwindcss`
- `tailwind.config.js` includes correct content paths
- PostCSS is configured correctly
- Dev server is restarted after config changes

### Q: Icons aren't showing. Help!
**A:** 
- Ensure `react-icons` is installed
- Check import statements
- Verify icon names at https://react-icons.github.io
- Icons are case-sensitive

### Q: Mobile menu isn't working. What do I do?
**A:** 
- Check `Navbar.jsx` for state management
- Ensure `mobileMenuOpen` state toggles correctly
- Check z-index of mobile menu
- Test on actual mobile device, not just browser resize

## Content & SEO

### Q: How do I improve my portfolio's SEO?
**A:** 
- Update meta tags in `index.html`
- Use descriptive page title
- Add Open Graph tags for social sharing
- Create a sitemap
- Submit to Google Search Console
- Add Google Analytics

### Q: What should I write in my About section?
**A:** Include:
- Your current role/focus
- Education background
- Key skills or expertise
- What makes you unique
- Your goals or interests
Keep it concise (2-3 paragraphs)

### Q: How many projects should I showcase?
**A:** 
- Minimum: 3 projects
- Ideal: 5-6 projects
- Quality over quantity!
- Show your best work only

### Q: Should I include all my skills?
**A:** No, include only:
- Technologies you're comfortable with
- Skills relevant to your target role
- Tools you've used in real projects
- Don't add skills you've only tried once

## Pricing & Costs

### Q: What does it cost to run this portfolio?
**A:** 
- **Completely Free** with:
  - Vercel (frontend)
  - Render free tier (backend)
  - No custom domain

- **With custom domain**: ~$10-15/year

- **With premium hosting**: 
  - Vercel Pro: $20/month (unnecessary for most)
  - Render Standard: $7/month (unnecessary if free tier works)

### Q: Are there any hidden costs?
**A:** No hidden costs! Everything can run on free tiers.

## Maintenance

### Q: How often should I update my portfolio?
**A:** 
- Add new projects as you complete them
- Update skills when you learn new technologies
- Refresh content every 3-6 months
- Keep dependencies updated quarterly

### Q: How do I update dependencies?
**A:** 
```bash
npm update
npm audit fix
```
Test thoroughly after updates!

### Q: My portfolio works locally but not after deployment. Why?
**A:** Common issues:
- Environment variables not set in deployment platform
- Build errors (check deployment logs)
- API URLs still pointing to localhost
- CORS not configured for production domain

## Browser Support

### Q: Which browsers are supported?
**A:** Modern browsers:
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

### Q: Does this work on Internet Explorer?
**A:** No, IE is not supported. Focus on modern browsers.

## Legal

### Q: Do I need to give credit for using this template?
**A:** No, attribution is not required, but appreciated!

### Q: Can I sell portfolios made with this template?
**A:** Yes, you can use this for commercial purposes.

### Q: Can I modify and redistribute this template?
**A:** Yes, feel free to modify and share!

## Getting Help

### Q: I'm stuck. Where can I get help?
**A:** 
1. Check all documentation files (README, SETUP, etc.)
2. Search GitHub Issues for similar problems
3. Check browser console for error messages
4. Check terminal for error messages
5. Google the specific error message

### Q: Can you add feature X?
**A:** This is a template for you to customize. Add any features you need!

### Q: I found a bug. What should I do?
**A:** Check the documentation first - it might be a configuration issue. If it's genuinely a bug, you can fix it yourself or report it.

## Still Have Questions?

If your question isn't answered here:
1. Check the comprehensive documentation files
2. Review the code comments
3. Search online for specific technical issues
4. Test different approaches

---

**Remember**: The best way to learn is by experimenting. Make changes, see what happens, and learn from it!

Good luck with your portfolio! 🚀
