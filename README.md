# 🧱 LEGO-Themed GitHub Portfolio

[![Deploy Static Site to Pages](https://github.com/coderhh/coderhh.github.io/actions/workflows/pages.yml/badge.svg)](https://github.com/coderhh/coderhh.github.io/actions/workflows/pages.yml)

> A vibrant, interactive portfolio showcasing GitHub repositories as colorful LEGO bricks

## ✨ Live Demo

Visit the live site: **[https://coderhh.github.io/](https://coderhh.github.io/)**

## 🎨 Features

### Interactive Word Cloud
- **Dynamic Repository Display**: All GitHub repositories rendered as an animated word cloud
- **LEGO Brick Styling**: Each repository appears as a 3D LEGO brick with authentic colors
- **Size-Based Importance**: Repository size determined by stars + forks count
- **Hover Animations**: 3D transformations, glowing effects, and scaling on hover

### Official LEGO Brand Colors
- **Primary Colors**: Yellow (#FFD502), Blue (#005AD2), Red (#C91A09)
- **Authentic Styling**: Colors sourced from official LEGO website
- **High Contrast**: White text on colored backgrounds for optimal readability

### Technical Features
- **GitHub API Integration**: Real-time repository data fetching
- **Rate Limit Handling**: Automatic fallback to demo data when API limits exceeded
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Progressive Enhancement**: Works even with JavaScript disabled

## 🛠 Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: CSS Grid, Flexbox, CSS Animations, 3D Transforms
- **API**: GitHub REST API v3
- **Deployment**: GitHub Pages with GitHub Actions
- **Design**: Based on official LEGO website color palette and styling

## 🚀 Architecture

```
coderhh.github.io/
├── index.html          # Main portfolio page
├── script.js           # GitHub API integration & interactions
├── styles-new.css      # LEGO-themed styling and animations
├── CLAUDE.md          # Development documentation
└── .github/
    └── workflows/
        └── pages.yml   # GitHub Pages deployment workflow
```

## 🎯 Key Components

### Word Cloud Generator
- Fetches repositories from GitHub API
- Sorts by popularity (stars + forks)
- Randomly assigns LEGO colors
- Creates animated, clickable word cloud

### LEGO Brick Styling
- 3D CSS effects with shadows and highlights
- Authentic LEGO color palette
- Hover animations with scaling and rotation
- Glass morphism and backdrop filters

### API Resilience
- Handles GitHub API rate limits gracefully
- Provides fallback demo data
- Error boundaries prevent crashes
- Smooth user experience regardless of API status

## 🎨 Design Philosophy

The portfolio combines:
- **Playful LEGO aesthetic** for memorable user experience
- **Professional presentation** of technical projects
- **Interactive elements** encouraging exploration
- **Modern web technologies** showcasing development skills

## 📱 Responsive Features

- **Desktop**: Full word cloud with hover effects
- **Tablet**: Optimized grid layout
- **Mobile**: Single-column responsive design
- **Touch Devices**: Touch-friendly interactions

## 🔧 Local Development

```bash
# Clone the repository
git clone https://github.com/coderhh/coderhh.github.io.git
cd coderhh.github.io

# Start local server
python3 -m http.server 8000

# Visit http://localhost:8000
```

## 📊 Performance

- **Lightweight**: Pure HTML/CSS/JS with no frameworks
- **Fast Loading**: Optimized assets and minimal dependencies
- **Efficient API Usage**: Intelligent caching and fallbacks
- **Cross-Browser**: Compatible with modern browsers

## 🎯 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Repository filtering and search
- [ ] Detailed repository modal views
- [ ] GitHub contribution graph integration
- [ ] Animated loading states

---

**Built with ❤️ and LEGO bricks** | **Powered by GitHub Pages**
