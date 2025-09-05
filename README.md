# RKM Finances - React.js Website

A modern, responsive React.js website for RKM Finances, a financial advisory company with 18+ years of expertise.

## Features

- **Modern React.js Architecture**: Built with functional components and hooks
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Responsive Design**: Mobile-first approach with responsive layouts
- **React Router**: Multi-page navigation with smooth transitions
- **Interactive Components**: 
  - Typing animation in hero section
  - Animated counters and progress bars
  - Expandable service cards
  - Testimonial carousel
  - FAQ accordion with search
  - Contact form with validation

## Tech Stack

- React 18.2.0
- React Router DOM 6.8.0
- Framer Motion 10.0.0
- React Intersection Observer 9.4.0
- CSS3 with CSS Variables
- Modern JavaScript (ES6+)

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.js       # Navigation header with mobile menu
│   ├── Hero.js         # Hero section with typing animation
│   ├── About.js        # About section with progress bars
│   ├── Services.js     # Services with expandable cards
│   ├── Team.js         # Team members showcase
│   ├── Testimonials.js # Client testimonials carousel
│   ├── FAQ.js          # FAQ accordion with search
│   ├── Contact.js      # Contact form and details
│   ├── Footer.js       # Footer with links
│   ├── LoadingOverlay.js # Loading animation
│   ├── ScrollToTop.js  # Scroll to top button
│   └── WhatsAppFloat.js # WhatsApp floating button
├── pages/              # Page components for routing
│   ├── HomePage.js     # Main landing page
│   ├── AboutPage.js    # Dedicated about page
│   ├── ServicesPage.js # Services page
│   ├── TeamPage.js     # Team page
│   ├── TestimonialsPage.js # Testimonials page
│   ├── ContactPage.js  # Contact page
│   └── FAQPage.js      # FAQ page
├── styles/             # CSS stylesheets
│   ├── index.css       # Main styles and variables
│   ├── components.css  # Component-specific styles
│   ├── sections.css    # Section-specific styles
│   └── responsive.css  # Mobile responsive styles
└── App.js              # Main app component with routing
```

## Installation & Setup

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```
   Opens [http://localhost:3000](http://localhost:3000) in your browser.

3. **Build for Production**
   ```bash
   npm run build
   ```
   Creates optimized production build in `build/` folder.

## Key Components

### Header
- Sticky navigation with scroll effects
- Mobile-responsive hamburger menu
- Contact information display
- Smooth scroll navigation

### Hero Section
- Typing animation effect
- Animated statistics counters
- Call-to-action buttons
- Parallax background image

### Services
- Expandable service cards
- Detailed service subcategories
- Hover animations and transitions
- Professional service imagery

### Team
- Team member profiles
- Hover overlay effects
- Social media links
- Expertise tags

### Testimonials
- Auto-rotating carousel
- Manual navigation controls
- Smooth slide transitions
- Client ratings display

### FAQ
- Searchable FAQ items
- Accordion-style answers
- Smooth expand/collapse animations
- Keyboard navigation support

### Contact
- Validated contact form
- Contact information cards
- Form submission handling
- Responsive layout

## Animations & Interactions

- **Framer Motion**: Smooth page transitions and component animations
- **Intersection Observer**: Scroll-triggered animations
- **CSS Transitions**: Hover effects and micro-interactions
- **Loading States**: Professional loading overlay
- **Responsive Animations**: Optimized for all screen sizes

## Responsive Design

- **Mobile-First**: Designed for mobile devices first
- **Breakpoints**: 
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px
- **Touch-Friendly**: Optimized for touch interactions
- **Performance**: Optimized images and lazy loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- **Code Splitting**: Automatic code splitting with React
- **Lazy Loading**: Components loaded on demand
- **Optimized Images**: Responsive image loading
- **CSS Optimization**: Minimal CSS with variables
- **Bundle Optimization**: Production build optimization

## Deployment

The project is ready for deployment to:
- **Netlify**: Drag and drop `build/` folder
- **Vercel**: Connect GitHub repository
- **AWS S3**: Upload build files to S3 bucket
- **GitHub Pages**: Use `gh-pages` package

## Business Information

**RKM Finances**
- Founded: October 2022
- Founder: Rajeev Kumar Mishra
- Experience: 18+ years in finance industry
- Services: Debt Syndication, Retail Loans, Insurance, Financial Advisory
- Coverage: North India, Mumbai, Indore (expanding across India)

## Contact Information

- **Phone**: +91 9999313053
- **Email**: rajeev@rkmfinance.com
- **WhatsApp**: Available via floating button
- **Business Hours**: Mon-Sat 9:00 AM - 7:00 PM

## License

This project is proprietary software developed for RKM Finances.

## Support

For technical support or questions about the website, please contact the development team.# rkm-finances
