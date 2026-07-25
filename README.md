# inudesu Website

A cinematic promotional website for **inudesu** — a wearable motion interface that transforms natural human movement into real-time robotic behavior.

## Project Overview

**inudesu** is an ADVX 2026 hackathon project showcasing human–robot interaction through gesture control using a smart ring (Zilo) and a quadruped robot (Dimension).

### Core Concept

> **Your Motion. Its Instinct.**

The website communicates how natural hand gestures—captured by an IMU-enabled wearable ring—are processed in real time and translated into robot commands, enabling intuitive embodied human-robot collaboration.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP with ScrollTrigger
- **3D/Visualization**: Three.js (optional), Canvas-based particles
- **Icons**: Lucide React
- **Fonts**: Inter, IBM Plex Mono, Space Mono

## Features

✨ **Cinematic Hero Section** — Full-screen immersive introduction with animated ring and telemetry display

📊 **Motion Pipeline Visualization** — Scroll-driven animation showing the signal path from sensing to action

🎮 **Interactive Gesture Cards** — Six configurable gesture mappings with visual feedback

🏗️ **System Architecture Diagram** — Interactive node graph showing the complete technical stack

💡 **Responsive Design** — Mobile-first approach with smooth performance

🎨 **Premium Aesthetics** — Dark theme inspired by Apple, Tesla, NVIDIA, and futuristic interfaces

## Installation

### Prerequisites

- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone or navigate to the project
cd inudesu-website

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
inudesu-website/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main homepage
│   ├── globals.css         # Global styles
│
├── components/
│   ├── Navbar.tsx          # Navigation header
│   ├── HeroSection.tsx     # Hero section with ring visualization
│   ├── MotionPipeline.tsx  # 5-stage pipeline animation
│   ├── GestureDemo.tsx     # 6 gesture cards
│   ├── SystemArchitecture.tsx  # Architecture diagram
│   ├── WhyItMatters.tsx    # Value propositions
│   ├── UseCases.tsx        # 4 real-world use cases
│   ├── Footer.tsx          # Footer with CTA
│   └── ParticleBackground.tsx  # Animated particle system
│
├── public/                 # Static assets (favicon, images)
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Dependencies and scripts
```

## Key Components

### HeroSection
- Animated ring with rotation
- Live telemetry display (IMU data)
- Coordinate axes visualization
- Call-to-action buttons
- Smooth text reveals

### MotionPipeline
- 5-stage signal flow visualization
- Scroll-triggered animations
- Terminal-style command output
- SVG connecting lines with GSAP

### GestureDemo
- 6 interactive gesture cards
- Color-coded status indicators
- Hover animations
- Command mapping display

### SystemArchitecture
- Interactive node graph
- Categorized by hardware/signal/intelligence/robot
- Hover state descriptions
- Color legend

## Customization

### Colors & Theme

Edit `tailwind.config.ts` to customize the cyber theme:

```ts
colors: {
  cyber: {
    bg: '#0a0e27',        // Background
    accent: '#00d9ff',    // Primary (cyan)
    secondary: '#7c3aed', // Purple
    tertiary: '#10b981',  // Green
  },
}
```

### Typography

Fonts are loaded from Google Fonts:
- **Display**: Space Mono (headings)
- **Body**: Inter (body text)
- **Mono**: IBM Plex Mono (code/telemetry)

### Animations

- **Framer Motion**: Component-level animations (fade, scale, slide)
- **GSAP**: Scroll-based animations via `ScrollTrigger`
- **Canvas**: Particle system for background

## Performance Optimizations

- ✅ Dynamic imports for heavy components
- ✅ Lazy-loaded 3D/particle backgrounds
- ✅ Optimized images and SVG
- ✅ CSS animations instead of JS where possible
- ✅ Minimal JavaScript bundle
- ✅ Respects `prefers-reduced-motion`

## Browser Support

- Modern browsers with ES2020+ support
- Chrome, Firefox, Safari, Edge (latest versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Accessibility

- ✅ Semantic HTML
- ✅ Keyboard navigation support
- ✅ Focus states on interactive elements
- ✅ Color contrast compliance (WCAG AA)
- ✅ Respects `prefers-reduced-motion` preference
- ✅ Alt text on images
- ✅ ARIA labels where needed

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Other Platforms

The site is a standard Next.js app and can be deployed to:
- Netlify
- AWS Amplify
- Docker containers
- Any Node.js hosting

## Development Guidelines

### Code Style

- Use TypeScript for type safety
- Avoid `any` types
- Prefer functional components
- Use hooks over class components
- Comment only non-obvious logic

### Component Guidelines

- Keep components modular and reusable
- One component per file
- Use compound components pattern when needed
- Export default and named exports

### Tailwind Usage

- Use Tailwind utilities first
- Create component classes in `globals.css` for reusable patterns
- Avoid custom CSS unless necessary
- Use the theme colors from `tailwind.config.ts`

## Known Limitations & Future Enhancements

- **3D Ring Model**: Currently using SVG rotation; could enhance with Three.js model
- **Real-time Data**: Telemetry values are simulated; integrate with actual ring API
- **Video Embedding**: Demo video placeholder; integrate actual hardware demo
- **Multilingual**: Currently English-only; could add i18n support
- **CMS Integration**: Could add Contentful/Sanity for easy content updates

## Contributing

This is a hackathon project. Contributions are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License — feel free to use and modify for your project.

## Credits

**inudesu Team** — ADVX 2026 Hackathon
- **Hardware**: Zilo smart ring + Dimension quadruped
- **ML/Signal Processing**: Ring gesture recognition pipeline
- **Website**: Cinematic promotional experience

## Contact


- **GitHub**: [github.com/inudesu/](https://github.com/)
- **ADVX 2026**: https://advx2026.com

---

**inudesu**: From wearable gesture to embodied robot behavior. 🤖✨
