# Modern Portfolio Website

A minimalist, professional portfolio website built with React and Tailwind CSS. Features a clean design with smooth animations, dark mode toggle, and a fully functional contact form.

## ✨ Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Scrolling**: Navigate seamlessly between sections
- **Active Navigation**: Highlights current section in navbar
- **Projects Showcase**: Display projects with tech stack and links
- **Skills Grid**: Interactive grid of technologies with icons
- **Contact Form**: Working email form with backend integration
- **Modern Animations**: Subtle fade-in and slide-up effects
- **Professional Design**: Clean, minimalist aesthetic with neutral tones

## 🛠️ Tech Stack

### Frontend
- **React** - UI library
- **Tailwind CSS** - Styling
- **React Icons** - Icon library
- **Vite** - Build tool

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **Nodemailer** - Email handling
- **CORS** - Cross-origin resource sharing

## 📦 Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Frontend Setup

1. Navigate to the project directory:
```bash
cd protfolio-2
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure environment variables:
   - Copy `.env.example` to `.env`
   - Update with your email credentials:
     ```
     EMAIL_USER=your.email@gmail.com
     EMAIL_PASS=your-app-password
     PORT=5000
     ```

4. **Setting up Gmail App Password:**
   - Go to your Google Account settings
   - Navigate to Security → 2-Step Verification (must be enabled)
   - Scroll to "App passwords"
   - Generate a new app password for "Mail"
   - Copy the 16-character password to your `.env` file

5. Start the backend server:
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

## 🎨 Customization

### Personal Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Update your name
   - Change the title/role
   - Update social media links

2. **About Section** (`src/components/About.jsx`):
   - Add your profile image
   - Update education details
   - Modify the about text

3. **Projects Section** (`src/components/Projects.jsx`):
   - Replace with your actual projects
   - Update project images, descriptions, and links
   - Modify tech stacks

4. **Skills Section** (`src/components/Skills.jsx`):
   - Add or remove skills
   - Customize skill categories

5. **Contact Section** (`src/components/Contact.jsx`):
   - Update email address
   - Modify social media links

### Color Scheme

The portfolio uses a minimalist color palette defined in `tailwind.config.js`:
- Primary: Blue (#2563eb)
- Dark Background: #0a0a0a
- Light Background: #ffffff
- Neutral grays for text and accents

To customize, edit the `theme.extend.colors` in `tailwind.config.js`.

## 🚀 Deployment

### Frontend Deployment (Vercel)

1. Push your code to GitHub

2. Go to [Vercel](https://vercel.com)

3. Import your repository

4. Configure build settings:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`

5. Deploy!

### Backend Deployment (Render)

1. Create a new Web Service on [Render](https://render.com)

2. Connect your GitHub repository

3. Configure:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

4. Add environment variables:
   - `EMAIL_USER`
   - `EMAIL_PASS`
   - `PORT`

5. Deploy!

6. Update the contact form API endpoint in `src/components/Contact.jsx`:
   ```javascript
   const response = await fetch('YOUR_RENDER_URL/api/contact', {
   ```

### Alternative Backend Deployment (Heroku)

1. Install Heroku CLI

2. Login to Heroku:
```bash
heroku login
```

3. Create a new Heroku app:
```bash
cd backend
heroku create your-portfolio-backend
```

4. Set environment variables:
```bash
heroku config:set EMAIL_USER=your.email@gmail.com
heroku config:set EMAIL_PASS=your-app-password
```

5. Deploy:
```bash
git init
git add .
git commit -m "Initial commit"
git push heroku main
```

## 📱 Sections

1. **Home/Hero**: Introduction with social links
2. **About**: Personal information, education, and focus area
3. **Skills**: Technology stack and expertise
4. **Projects**: Portfolio projects with descriptions and links
5. **Contact**: Working contact form and social media links

## 🔧 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `npm start` - Start production server
- `npm run dev` - Start development server with auto-reload

## 📄 Project Structure

```
protfolio-2/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── .env.example
├── public/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## 🎯 Design Principles

- **Minimalist**: Clean and uncluttered layout
- **Professional**: Neutral color palette (white, black, gray, light blue)
- **Typography-focused**: Emphasis on clean fonts and spacing
- **Smooth Animations**: Subtle transitions and hover effects
- **Accessibility**: Semantic HTML and ARIA labels
- **Performance**: Optimized images and code splitting

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📧 Contact

For questions or feedback, reach out through the contact form on the live site.

---

**Note**: Remember to replace all placeholder content (name, email, social links, projects, images) with your actual information before deploying!
