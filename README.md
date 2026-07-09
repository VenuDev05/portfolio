# Venu K - MERN Stack Developer Portfolio

A professional, animated 3D portfolio built with **React.js**, **JavaScript**, and **GSAP** animations. This portfolio showcases your skills, projects, and contact information with smooth, engaging animations.

## 🚀 Tech Stack

- **Frontend Framework**: React.js (v19)
- **Build Tool**: Vite
- **Animations**: GSAP 3 (GreenSock Animation Platform)
- **3D Graphics**: Three.js + React Three Fiber
- **Styling**: CSS3 with responsive design
- **Package Manager**: pnpm

## ✨ Features

### 1. **Smooth Animations**
- Staggered text animations on hero section
- Floating card animations
- Skill bar progress animations on scroll
- Form submission animations with GSAP
- Smooth scroll-to-section navigation
- Scroll-to-top button with fade animations

### 2. **Responsive Design**
- Mobile-first approach
- Fully responsive across all devices
- Professional light theme with blue/gray color palette
- Glassmorphism effects on navigation

### 3. **Interactive Sections**
- **Hero**: Title, subtitle, description, and floating tech cards
- **Skills**: 10 skills with animated progress bars and category highlights
- **Projects**: Featured project showcase with hover effects
- **Contact**: Contact form with email validation and success animation
- **Footer**: Navigation links and social media

### 4. **Professional Features**
- Fixed navigation bar with smooth scroll triggers
- Mobile hamburger menu with GSAP animations
- Contact form with immediate feedback
- Scroll-to-top button for better UX
- Dark footer with light theme contrast

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx      # Fixed navbar with smooth scroll
│   ├── Hero.jsx           # Hero section with 3D text animations
│   ├── Skills.jsx         # Skills grid with progress bars
│   ├── Projects.jsx       # Featured projects showcase
│   ├── Contact.jsx        # Contact form with GSAP animations
│   └── Footer.jsx         # Footer with quick links
├── styles/
│   ├── index.css          # Global styles
│   ├── app.css            # App-level styles
│   ├── navigation.css     # Navigation styling
│   ├── hero.css           # Hero section animations
│   ├── skills.css         # Skills section styling
│   ├── projects.css       # Projects showcase styling
│   ├── contact.css        # Contact form styling
│   └── footer.css         # Footer styling
├── App.jsx                # Main app component
└── main.jsx              # React entry point
```

## 🎨 Color Scheme

- **Primary**: #5b7c99 (Professional Blue)
- **Secondary**: #7a9db5 (Light Blue)
- **Background**: #fafafa (Off-white)
- **Accent**: #f5f7fa (Light Blue-gray)
- **Text**: #1a1a1a (Near Black)
- **Muted**: #666 (Gray)

## 🚀 Getting Started

### Installation

1. **Install dependencies**:
   ```bash
   pnpm install
   ```

2. **Start development server**:
   ```bash
   pnpm dev
   ```

3. **Build for production**:
   ```bash
   pnpm build
   ```

4. **Preview production build**:
   ```bash
   pnpm preview
   ```

## 📝 Customization Guide

### Update Your Information

Edit `/src/components/` files to add your own content:

- **Navigation**: Modify the navigation links in `Navigation.jsx`
- **Hero**: Update your name and tagline in `Hero.jsx`
- **Skills**: Add/remove skills in the `skillsData` array in `Skills.jsx`
- **Projects**: Update projects in the `projectsData` array in `Projects.jsx`
- **Contact**: Update email and social links in `Contact.jsx`

### Change Colors

Edit `/src/styles/` CSS files to modify the color scheme:

```css
/* Primary color */
background: linear-gradient(135deg, #5b7c99 0%, #7a9db5 100%);

/* Change to your brand colors */
background: linear-gradient(135deg, #yourColor1 0%, #yourColor2 100%);
```

### Add More Animations

GSAP animations are used throughout. To add more:

1. Import GSAP in your component:
   ```jsx
   import gsap from 'gsap';
   import { ScrollTrigger } from 'gsap/ScrollTrigger';
   
   gsap.registerPlugin(ScrollTrigger);
   ```

2. Create animations in `useEffect`:
   ```jsx
   useEffect(() => {
     gsap.to('.element', { duration: 1, opacity: 1 });
   }, []);
   ```

## 🔧 Key Animation Techniques Used

1. **Staggered Animations**: Multiple elements animating with delays
2. **ScrollTrigger**: Animations triggered when elements enter viewport
3. **GSAP Timeline**: Sequenced animations using timeline
4. **Morphing Shapes**: Animated background shapes with pulse effect
5. **Form Feedback**: Instant visual feedback on form submission

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column layouts, hamburger menu)
- **Tablet**: 768px - 1024px (2-column grids)
- **Desktop**: > 1024px (full multi-column layouts)

## 🎯 Performance Considerations

- GSAP animations use GPU acceleration
- Smooth scroll behavior uses native browser APIs
- CSS transforms for better animation performance
- Responsive images and optimized assets

## 📧 Contact Form

The contact form includes:
- Input validation (required fields)
- GSAP form submission animation
- Success message display
- Reset functionality

To integrate with email backend, connect to a service like:
- EmailJS
- SendGrid
- Nodemailer
- AWS SES

## 🚢 Deployment

Deploy to Vercel with one click:

1. Push your code to GitHub
2. Import in Vercel
3. Vercel auto-detects Vite and deploys

Or deploy manually:
```bash
pnpm build
# Deploy the 'dist' folder
```

## 📄 License

This portfolio template is free to use and modify for your needs.

## 💡 Tips for Success

1. **Keep it Updated**: Regularly update your projects and skills
2. **Use High-Quality Images**: Add project screenshots/thumbnails
3. **Mobile First**: Always test on mobile devices
4. **Loading Performance**: Monitor and optimize bundle size
5. **SEO**: Update meta tags in `index.html`

## 🤝 Contributing

Feel free to fork and customize this portfolio for your needs!

---

Built with ❤️ using React.js, GSAP, and modern web technologies.
