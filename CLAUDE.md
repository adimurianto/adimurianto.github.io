# Portfolio Website - adi m urianto

## Overview
Personal portfolio website for **Adi Murianto**, a Full Stack Developer specializing in backend APIs, front-end integration, and database management.

**Live URL:** https://adimurianto.com

---

## Tech Stack

| Technology | Version |
|------------|---------|
| Next.js | 12.1.0 |
| Chakra UI | 1.6.5 |
| Framer Motion | 4 |
| React | 17.0.2 |
| TypeScript | 4.3.5 |
| React Icons | 4.2.0 |

### Additional Libraries
- `react-intersection-observer` - For scroll-based animations
- `gh-pages` - For deployment

---

## Project Structure

```
adimurianto/
├── pages/
│   ├── index.tsx          # Main portfolio page
│   ├── _app.tsx          # App wrapper
│   └── _document.tsx     # Document template
├── components/
│   ├── Avatar/           # Profile avatar component
│   ├── Layout/
│   │   └── FadeWhenVisible.tsx  # Scroll animation wrapper
│   ├── Logo/             # Site logo
│   ├── Menu/
│   │   ├── index.tsx     # Mobile menu container
│   │   └── Navigation.tsx # Navigation links
│   ├── Misc/
│   │   ├── OpenGraphHead.tsx   # SEO meta tags
│   │   ├── ScrollMore.tsx       # Scroll indicator
│   │   └── FavIconProvider.tsx  # Favicon
│   ├── Sections/
│   │   ├── About/
│   │   │   ├── index.tsx        # About section wrapper
│   │   │   ├── Detail.tsx       # Bio, skills display
│   │   │   └── SkillSetModal.tsx # Full tech stack modal
│   │   ├── Experience/
│   │   │   └── ExperienceTab.tsx # Work history tabs
│   │   ├── FeaturedWorks/
│   │   │   └── FeaturedCard.tsx # Project cards
│   │   └── GetInTouch/
│   │       └── index.tsx        # Contact section & footer
│   └── Sidebar/
│       └── index.tsx     # Left sidebar with profile info
├── config/
│   ├── theme.ts         # Chakra UI theme configuration
│   ├── sidebar.ts       # Social media links
│   ├── experience.tsx   # Work experience data
│   └── animations.ts    # Animation variants
├── hooks/
│   └── useScrollDirection.ts  # Scroll detection hook
├── styles/               # CSS modules
├── types/               # TypeScript type definitions
└── public/
    ├── works/           # Project screenshots
    ├── worked_at_logos/  # Company logos
    ├── AMC_avatar.png    # Profile images
    ├── logo.png          # Site logo
    └── CV_Adi_Murianto.pdf
```

---

## Current Layout Structure

### Grid System
- **Mobile (base):** 1 column
- **Tablet (lg):** 3 columns
- **Desktop (xl):** 5 columns

### Sections (in order)
1. **Header** - Logo + Navigation (sticky on mobile)
2. **Sidebar** - Fixed on desktop, contains:
   - Avatar image
   - Name (Adi Murianto)
   - Title (Full Stack Developer)
   - Short bio
   - CTA buttons (Get in touch, CV & Portfolio)
   - Social media icons
3. **About Me** - Bio and tech stack skills
4. **Dev Info** - GitHub stats (streak, top languages)
5. **Experience** - Tabbed work history
6. **GetInTouch** - Contact CTA and footer

---

## Configuration Files

### `config/experience.tsx`
Contains work experience data:
- **JTU** (CV. Jadi Teknologi Utama) - Apr 2025 - Present
- **TSG** (PT. Tristar Surya Gemilang) - Mar 2023 - Apr 2025
- **Aptavis** (PT. Digital Apta Media) - May 2018 - Feb 2023

### `config/sidebar.ts`
Social media links:
- Twitter, LinkedIn, GitHub, Dev.to

### `config/theme.ts`
Chakra UI theme with:
- Dark/Light mode (default: dark)
- Custom colors: purple.600 (light), cyan.300 (dark)
- Text variants: emphasis, description, accent
- Button variants: outline, outlineAlternative

---

## Theme Colors

| Mode | Emphasis Color | Background |
|------|---------------|------------|
| Light | purple.600 (#805AD5) | gray.100 (#F7FAFC) |
| Dark | cyan.300 (#23F9FE) | #121212 |

---

## Key Components to Modify

### 1. Sidebar (`components/Sidebar/index.tsx`)
- Controls profile display on left side
- Has fixed position on xl screens
- Contains avatar, name, title, bio, CTA buttons, social links

### 2. About Section (`components/Sections/About/Detail.tsx`)
- Displays years of experience (calculated from 2018)
- Shows tech stack in 2-column grid
- Has modal for full skills list

### 3. Experience Tab (`components/Sections/Experience/ExperienceTab.tsx`)
- Tabbed interface for work history
- Responsive: horizontal tabs on mobile, vertical on desktop
- Shows company logo, position, duration, roles

### 4. FeaturedWorks (`components/Sections/FeaturedWorks/`)
- **NOTE:** Currently NOT rendered in main page
- Can be enabled by importing and adding to `pages/index.tsx`

### 5. GitHub Stats Section (`pages/index.tsx` lines 84-113)
- Shows GitHub streak and top languages
- Uses external images from vercel.app

---

## Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run export   # Static export to /out
npm run start    # Start production server
npm run lint     # ESLint check
```

---

## Deployment

The site uses `gh-pages` for GitHub Pages deployment via the `/out` static export directory.

---

## Design Patterns

### Animation Pattern
Uses Framer Motion with predefined variants:
- `scaleUp` - Scale animation
- `fadeInUp` - Fade + slide up
- `stagger` - Staggered children animation
- `simpleOpacity` - Simple fade
- `letterSpace` - Letter spacing on hover

### Responsive Breakpoints
```typescript
base: < 768px   // Mobile
md: 768px+       // Tablet
lg: 992px+       // Desktop
xl: 1280px+      // Large desktop
```

### Color Mode
Dark mode is default. Toggle available via Chakra UI built-in toggle.

---

## Planned Upgrades (for Agent Reference)

When upgrading this portfolio, consider:

### Layout Improvements
- [ ] Make sidebar more compact on mobile
- [ ] Add smooth scroll behavior
- [ ] Improve spacing consistency
- [ ] Add progress indicator for reading

### New Features
- [ ] Enable FeaturedWorks section (currently commented out)
- [ ] Add blog section
- [ ] Add testimonials section
- [ ] Add project filter/categories
- [ ] Add dark/light mode toggle animation
- [ ] Add typing animation for role title
- [ ] Add scroll-triggered animations for each section
- [ ] Add project modal with details
- [ ] Add contact form
- [ ] Add analytics integration
- [ ] Add accessibility improvements (ARIA labels, focus states)

### Performance
- [ ] Upgrade to Next.js 14+ for App Router
- [ ] Implement image optimization with next/image
- [ ] Add lazy loading for below-fold content
- [ ] Add loading skeletons

### Content Updates
- [ ] Update years of experience calculation
- [ ] Add recent projects to FeaturedWorks
- [ ] Update social media links if changed
- [ ] Add certifications section

---

## Important Notes for Agent

1. **Next.js Version:** This is Next.js 12 (old). Consider upgrading to 14+ for App Router support.

2. **Chakra UI Version:** Using Chakra UI 1.6.5 (old). Version 2.x has breaking changes.

3. **FeaturedWorks Not Visible:** The FeaturedWorks section exists but is not imported/rendered in pages/index.tsx.

4. **GitHub Stats Images:** Using external service (vercel.app) for GitHub stats - may need updates or replacements.

5. **Static Export:** Site uses `next export` for static HTML export to `/out` directory.

6. **File Paths:** Uses absolute imports via `config/` and `components/` paths (configured in tsconfig.json).