# GoodFood Dashboard - Quick Start

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd "c:\Users\PC\Desktop\adeleke_good_food"
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Step 3: Deploy to Vercel
```bash
# Login to Vercel (one time)
npx vercel login

# Deploy to production
npx vercel --prod
```

## 📦 What's Included

- ✅ Next.js 14 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Recharts for data visualization
- ✅ Lucide React for icons
- ✅ Fully responsive design
- ✅ Production-ready code

## 🎨 Features

- **Revenue Card**: Bar chart tracking daily sales
- **Order Time Card**: Pie chart showing order distribution
- **Rating Card**: Circular progress indicators
- **Most Ordered Card**: Top food items list
- **Order Card**: Line chart with trend comparison
- **Sidebar Navigation**: Interactive menu
- **Header**: Search bar and notifications

## 📱 Responsive Design

The dashboard automatically adapts to:
- 📱 Mobile (< 768px)
- 💻 Tablet (768px - 1024px)
- 🖥️ Desktop (1024px+)

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Check for code issues
```

## 🌐 Deploy Options

### Vercel (Recommended)
```bash
npx vercel --prod
```

### Netlify
```bash
npm run build
npx netlify-cli deploy --prod
```

## 📁 File Structure

```
app/
  ├── globals.css           # Global styles
  ├── layout.tsx            # Root layout
  └── page.tsx              # Home page

components/
  ├── Dashboard.tsx         # Main container
  ├── Sidebar.tsx           # Navigation
  ├── Header.tsx            # Top bar
  ├── RevenueCard.tsx       # Revenue stats
  ├── OrderTimeCard.tsx     # Time distribution
  ├── OrderCard.tsx         # Order trends
  ├── RatingCard.tsx        # Performance ratings
  ├── RatingCircle.tsx      # Progress circle
  └── MostOrderedCard.tsx   # Food items

types/
  └── dashboard.ts          # TypeScript types
```

## 🐛 Troubleshooting

### Dependencies Not Installing?
```bash
npm cache clean --force
npm install
```

### Port 3000 Already in Use?
```bash
# Kill the process
npx kill-port 3000

# Or use different port
npm run dev -- -p 3001
```

### Build Errors?
```bash
# Clear cache
rm -rf .next node_modules
npm install
npm run build
```

## 📝 Submission Checklist

- [ ] Dependencies installed (`npm install`)
- [ ] Runs locally (`npm run dev`)
- [ ] Builds successfully (`npm run build`)
- [ ] Pushed to GitHub
- [ ] Deployed to Vercel/Netlify
- [ ] Live URL tested
- [ ] README updated with URLs
- [ ] Submitted to recruiter

## 🎯 Next Steps

1. **Test locally**:
   ```bash
   npm install
   npm run dev
   ```

2. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Complete GoodFood Dashboard - Fortledge Assessment"
   git branch -M main
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

3. **Deploy**:
   ```bash
   npx vercel --prod
   ```

4. **Submit**:
   - Live URL from Vercel
   - GitHub repository link
   - Within 24-hour deadline ✅

## 💡 Tips

- The dashboard uses **mock data** - perfect for demonstration
- All components are **client-side** for interactivity
- **TypeScript** ensures type safety
- **Tailwind** makes styling maintainable
- **Recharts** provides smooth animations

## 📧 Submission Email Template

```
Subject: Technical Assessment Submission - [Your Name]

Dear Fortledge Technologies Team,

I have completed the technical assessment. Here are the links:

Live Demo: [Your Vercel URL]
GitHub Repository: [Your GitHub URL]

Technology Stack:
- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Recharts for data visualization

The dashboard is fully responsive and matches the Figma design specifications.

Best regards,
[Your Name]
```

---

**Ready to deploy!** 🚀  
**Estimated setup time**: 5 minutes  
**Deployment time**: 2 minutes
