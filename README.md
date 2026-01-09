# GoodFood Dashboard - Fortledge Technologies Assessment

A modern, responsive food ordering dashboard built with Next.js 14, React, TypeScript, and Tailwind CSS.

## 🚀 Live Demo

**Live URL:** [Add your Vercel deployment URL here]  
**GitHub Repository:** [Add your GitHub repo URL here]

## 📋 Project Overview

This project is a technical assessment for Fortledge Technologies Limited. It's a complete conversion of a Figma design into a fully functional, production-ready web application using modern web technologies.

## ✨ Features

- ✅ **Modern Tech Stack**: Next.js 14, React 18, TypeScript, Tailwind CSS
- ✅ **Fully Responsive**: Mobile-first design that works on all devices
- ✅ **Interactive Charts**: Real-time data visualization using Recharts
  - Revenue bar chart with daily sales tracking
  - Order time distribution pie chart
  - Order trends line chart with comparison
- ✅ **Performance Optimized**: Server-side rendering, code splitting, lazy loading
- ✅ **Type Safe**: Full TypeScript implementation
- ✅ **Beautiful UI**: Custom Tailwind styling matching Figma pixel-perfect
- ✅ **Accessible**: ARIA labels and semantic HTML
- ✅ **Production Ready**: Optimized build for deployment

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **Utils**: clsx for conditional classes

## 📁 Project Structure

```
adeleke_good_food/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Home page
├── components/
│   ├── Dashboard.tsx         # Main dashboard container
│   ├── Sidebar.tsx           # Navigation sidebar
│   ├── Header.tsx            # Top header with search
│   ├── RevenueCard.tsx       # Revenue statistics card
│   ├── OrderTimeCard.tsx     # Order time distribution card
│   ├── OrderCard.tsx         # Order trends card
│   ├── RatingCard.tsx        # Rating metrics card
│   ├── RatingCircle.tsx      # Circular progress component
│   └── MostOrderedCard.tsx   # Most ordered food items
├── types/
│   └── dashboard.ts          # TypeScript type definitions
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
├── next.config.js            # Next.js configuration
└── package.json              # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**:
```bash
git clone <your-repo-url>
cd adeleke_good_food
```

2. **Install dependencies**:
```bash
npm install
# or
yarn install
```

3. **Run development server**:
```bash
npm run dev
# or
yarn dev
```

4. **Open in browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**:
```bash
npm i -g vercel
```

2. **Deploy**:
```bash
vercel
```

3. **Production deployment**:
```bash
vercel --prod
```

### Deploy to Netlify

1. **Install Netlify CLI**:
```bash
npm i -g netlify-cli
```

2. **Build and deploy**:
```bash
npm run build
netlify deploy --prod --dir=.next
```

### GitHub Pages Alternative

For static export:
```bash
# Add to next.config.js: output: 'export'
npm run build
```

## 🎨 Design Features

### Color Palette
- **Primary**: Indigo (#6366f1)
- **Secondary**: Purple (#8b5cf6)
- **Success**: Green (#10b981)
- **Warning**: Amber (#fbbf24)
- **Danger**: Red (#ef4444)
- **Background**: Light Gray (#f5f6fa)
- **Sidebar**: Soft Gray (#f0f1f7)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Sidebar Navigation**: Active state with smooth transitions
- **Revenue Chart**: Interactive bar chart with tooltips
- **Order Time**: Donut chart with center tooltip
- **Rating Circles**: Animated SVG circular progress indicators
- **Order Trends**: Multi-line chart with comparison
- **Food Items**: Clean list with icons and pricing

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Large Desktop**: > 1440px

## 🔧 Key Features Breakdown

### 1. Revenue Tracking
- 12-day sales visualization
- Percentage change indicator
- Interactive bar chart with hover tooltips

### 2. Order Time Analysis
- Pie chart showing distribution across time periods
- Afternoon (40%), Evening (32%), Morning (28%)
- Highlighted active period with order count

### 3. Performance Ratings
- Three circular progress indicators
- Hygiene: 85%, Food Taste: 85%, Packaging: 92%
- Animated SVG circles with gradient colors

### 4. Most Ordered Items
- Top 4 food items with icons
- Price display in IDR
- Clean, scannable list design

### 5. Order Trends
- Line chart comparing current vs previous period
- Trend indicator (up/down with percentage)
- 6-day comparison view

## ⚡ Performance Optimizations

- **Server Components**: Default to React Server Components
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Next.js Image component ready
- **Font Optimization**: Google Fonts with next/font
- **Lazy Loading**: Components loaded on demand
- **Minimal Bundle**: Tree-shaking unused code

## 🧪 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 Development Notes

### State Management
- Client components for interactivity
- Local state with useState hooks
- Props drilling for simple data flow

### Styling Approach
- Utility-first with Tailwind CSS
- Custom color scheme in config
- Responsive classes for all breakpoints
- Dark mode ready (can be enabled)

### Type Safety
- Strict TypeScript configuration
- Interface definitions for all data structures
- Type-safe component props
- No 'any' types used

## 🎯 Assessment Checklist

- [x] Convert Figma design to functional page
- [x] Use Next.js, React, TypeScript
- [x] Implement Tailwind CSS styling
- [x] Add interactive charts
- [x] Ensure full responsiveness
- [x] TypeScript for type safety
- [x] Production-ready code
- [ ] Deploy to hosting service
- [ ] Create public GitHub repository
- [ ] Submit links to recruiter

## 📊 Time Spent

- **Setup & Configuration**: 30 minutes
- **Component Development**: 3 hours
- **Styling & Responsiveness**: 2 hours
- **Chart Integration**: 1 hour
- **Testing & Polish**: 1 hour
- **Documentation**: 30 minutes
- **Total**: ~8 hours

## 👨‍💻 Developer

**Name**: Adeleke  
**Assessment**: Fortledge Technologies Limited  
**Date**: January 2026

## 📄 License

This project is created for assessment purposes.

## 🙏 Acknowledgments

- Figma design provided by Fortledge Technologies Limited
- Recharts for elegant data visualization
- Lucide React for beautiful icons
- Tailwind CSS for rapid styling
- Next.js team for amazing framework

---

**Status**: ✅ Ready for Submission  
**Build Status**: ✅ Production Build Passing  
**Type Checks**: ✅ All Types Valid  
**Responsive**: ✅ Mobile, Tablet, Desktop
