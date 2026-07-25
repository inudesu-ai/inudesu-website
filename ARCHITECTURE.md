# Architecture Documentation

## System Overview

```
┌─────────────────────────────────────────────────────────┐
│                    User's Browser                        │
│  ┌────────────────────────────────────────────────────┐  │
│  │           Next.js App (React 19)                   │  │
│  │  ┌──────────────────────────────────────────────┐  │  │
│  │  │ app/layout.tsx (Root Layout)                 │  │  │
│  │  │  ├─ Metadata (SEO, Open Graph)               │  │  │
│  │  │  ├─ Global CSS (Tailwind)                    │  │  │
│  │  │  └─ ParticleBackground (Canvas)              │  │  │
│  │  └──────────────────────────────────────────────┘  │  │
│  │                       ↓                              │  │
│  │  ┌──────────────────────────────────────────────┐  │  │
│  │  │ app/page.tsx (Home Page)                     │  │  │
│  │  │  ├─ Navbar (Fixed Navigation)                │  │  │
│  │  │  ├─ HeroSection (Animated Ring)              │  │  │
│  │  │  ├─ MotionPipeline (5-stage Flow)            │  │  │
│  │  │  ├─ GestureDemo (6 Cards)                    │  │  │
│  │  │  ├─ SystemArchitecture (Node Graph)          │  │  │
│  │  │  ├─ WhyItMatters (Value Props)               │  │  │
│  │  │  ├─ UseCases (4 Scenarios)                   │  │  │
│  │  │  └─ Footer (Contact)                         │  │  │
│  │  └──────────────────────────────────────────────┘  │  │
│  └────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                Server (Next.js)                          │
│  ┌────────────────────────────────────────────────────┐  │
│  │ API Routes (future: /api/...)                      │  │
│  └────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

## Component Hierarchy

```
App
├── ParticleBackground (Canvas-based)
│   └── Particle System (60 particles, interactive)
│
├── Navbar (Fixed)
│   ├── Logo
│   ├── NavLinks (client-side smooth scroll)
│   └── CTA Button
│
├── Main Content
│   │
│   ├─ HeroSection
│   │  ├─ Ring (SVG, rotating)
│   │  ├─ Telemetry Display (8 data points)
│   │  ├─ Coordinate Axes
│   │  └─ CTA Buttons
│   │
│   ├─ MotionPipeline
│   │  ├─ 5 Stage Nodes
│   │  ├─ SVG Connector Lines (GSAP animated)
│   │  ├─ Terminal Output
│   │  └─ ScrollTrigger (linked to scroll)
│   │
│   ├─ GestureDemo
│   │  ├─ 6 Gesture Cards
│   │  ├─ Hover States
│   │  ├─ Status Indicators
│   │  └─ Command Mappings
│   │
│   ├─ SystemArchitecture
│   │  ├─ SVG Node Graph
│   │  ├─ Interactive Nodes
│   │  ├─ Node Details Grid
│   │  └─ Legend
│   │
│   ├─ WhyItMatters
│   │  ├─ 3 Value Props
│   │  ├─ Emotional Message
│   │  └─ Philosophy Quote
│   │
│   ├─ UseCases
│   │  ├─ 4 Use Case Cards
│   │  ├─ Gradient Overlays
│   │  └─ Hover Effects
│   │
│   └─ Footer
│       ├─ Final CTA
│       ├─ Links
│       └─ Contact Info
│
└── Metadata & SEO
    └─ next/head, Open Graph, Twitter
```

## Data Flow

```
User Interaction
    ↓
React State (Framer Motion)
    ↓
Component Re-render
    ↓
CSS Updates / DOM Changes
    ↓
Browser Render
    ↓
Visual Feedback
```

## Animation System

### Framer Motion (React-based)
- Component-level animations
- Entry/exit animations
- Hover states
- Scroll-triggered reveals

### GSAP (Timeline-based)
- Ring rotation (continuous)
- SVG line drawing (scroll-linked)
- Node highlights
- Advanced easing functions

### Canvas (Performance)
- Particle system (60 particles)
- Mouse interaction
- Connection lines
- Requestanimationframe loop

### CSS Animations
- Pulse effects
- Gradient shifts
- Scanlines
- Micro-interactions

## Styling Architecture

```
globals.css
├── @tailwind directives
├── Custom @layer components
│   ├── .btn-primary
│   ├── .btn-secondary
│   ├── .card-glass
│   ├── .text-glow
│   └── More...
├── Custom @layer utilities
├── CSS variables
└── Animations (@keyframes)
         ↓
tailwind.config.ts
├── Theme extension
│   ├── Custom colors (cyber theme)
│   ├── Shadow definitions
│   ├── Animation keyframes
│   └── Responsive breakpoints
         ↓
Component Styling
├── Tailwind classes
├── Framer Motion props
├── GSAP animations
└── Inline styles (rare)
```

## Color System

```
Cyber Theme (tailwind.config.ts)
│
├─ bg: #0a0e27 (Primary background)
├─ dark: #0f1629 (Dark panels)
├─ border: #1a2847 (Subtle borders)
├─ text: #e0e6ff (Body text)
├─ accent: #00d9ff (Cyan - primary UI)
├─ secondary: #7c3aed (Violet - highlights)
├─ tertiary: #10b981 (Green - status)
└─ warning: #f97316 (Orange - alerts)
```

## Responsive Design

```
Mobile (< 640px)
├─ Single column layouts
├─ Simplified animations
├─ Vertical stacking
└─ Optimized touch targets

Tablet (640px - 1024px)
├─ Two column layouts
├─ Full animations
├─ Grid spacing
└─ Desktop-like experience

Desktop (> 1024px)
├─ Multi-column layouts
├─ All animations enabled
├─ Hover states active
└─ Maximum visual richness
```

## Performance Optimizations

### Code Splitting
```
app/page.tsx
├─ Static: Navbar, HeroSection
├─ Dynamic: ParticleBackground
└─ Lazy-loaded: IMUVisualizer (if used)
```

### Caching Strategy
```
Static Assets
├─ Fonts (Google Fonts CDN)
├─ Tailwind (embedded in CSS)
├─ Icons (Lucide React)
└─ SVGs (inline)

Dynamic Content
├─ React components (rendered)
├─ Animations (JavaScript)
└─ Canvas (GPU-accelerated)
```

### Bundle Analysis
```
React + Next.js:       ~50 KB
Framer Motion:         ~40 KB
GSAP:                  ~30 KB
Other deps:            ~20 KB
CSS (Tailwind):        ~30 KB
──────────────────────────────
Total Initial Load:     ~170 KB
Gzipped:                ~50 KB
```

## Accessibility Architecture

```
Semantic HTML
├─ <header> (Navbar)
├─ <main> (Content sections)
├─ <section id="..."> (Anchor targets)
├─ <footer> (Footer)
└─ Proper heading hierarchy

ARIA Labels
├─ Button roles
├─ Link descriptions
├─ Form accessibility
└─ Icon labels

Keyboard Navigation
├─ Tab order
├─ Focus states
├─ Skip links (implicit)
└─ Escape key handling

Color Contrast
├─ WCAG AA compliance
├─ Text on background
├─ UI elements
└─ Interactive states

Motion Preferences
├─ prefers-reduced-motion
├─ Disabled animations
├─ Static alternatives
└─ No blocking transitions
```

## Type Safety

```
TypeScript (strict mode)
├─ All files: .tsx / .ts
├─ No implicit 'any'
├─ Strict null checks
├─ Strict property initialization
└─ Component props typed

Type Definitions
├─ Interface for props
├─ Union types for states
├─ Generic components (rare)
└─ Utility types for extraction

Error Handling
├─ Type validation at build
├─ Runtime safety
├─ No undefined references
└─ ESLint enforcement
```

## Build Process

```
Development (npm run dev)
├─ SWC compilation
├─ Hot module reloading
├─ Source maps
├─ Fast refresh
└─ Server on port 3000

Production (npm run build)
├─ Minification
├─ Code splitting
├─ Image optimization
├─ CSS purging
├─ Tree shaking
└─ Output to .next/

Deployment
├─ .next/ directory
├─ public/ folder
├─ package.json
├─ node_modules/ (via npm install)
└─ Environment setup
```

## Browser Support

```
✅ Chrome 90+
✅ Firefox 88+
✅ Safari 14+
✅ Edge 90+
✅ Mobile Safari 14+
✅ Chrome Android 90+
```

## Security Considerations

```
No Backend Required
├─ Static generation
├─ Client-side only
├─ No API secrets needed
└─ No database exposure

Content Security
├─ No external scripts
├─ Fonts from trusted CDN
├─ No user input processing
└─ No data collection

Environment
├─ No .env secrets
├─ No API keys embedded
├─ No auth required
└─ Public deployment safe
```

## Scalability Path

```
Current (Static Site)
└─ Perfect for demo/hackathon

Phase 2 (Add Backend)
├─ /api/gesture (POST real IMU data)
├─ /api/robot (POST commands)
└─ Real-time data streaming

Phase 3 (Real Integration)
├─ WebSocket for live data
├─ Database for telemetry
├─ User authentication
└─ Advanced analytics

Phase 4 (Production Scale)
├─ CDN everywhere
├─ Edge functions
├─ Database replication
└─ Load balancing
```

## Maintenance Checklist

### Weekly
- [ ] Check for errors in console
- [ ] Verify all links work
- [ ] Test on 2-3 browsers

### Monthly
- [ ] Update dependencies
- [ ] Run Lighthouse audit
- [ ] Check Core Web Vitals
- [ ] Review error logs

### Quarterly
- [ ] Full accessibility audit
- [ ] Performance review
- [ ] Browser compatibility test
- [ ] Content accuracy check

---

**Architecture Style**: Modular, scalable, type-safe, accessible

**Design Pattern**: React functional components with hooks

**State Management**: React hooks (useState, useRef)

**Animation Framework**: Framer Motion + GSAP

**Styling**: Tailwind CSS + custom CSS

**Deployment**: Serverless-friendly (Vercel/Netlify optimal)
