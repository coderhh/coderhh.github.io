# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository serves as a GitHub Pages site with dual functionality:
1. **Hugo Blog**: A PaperMod-themed blog with content in `content/posts/`
2. **Portfolio Landing**: A modern portfolio page (`index.html`) showcasing GitHub repositories

## Development Commands

### Hugo Blog Development
```bash
hugo server -D            # Run Hugo development server with drafts
hugo                       # Build static site to ./public/
hugo new posts/title.md    # Create new blog post
```

### Deployment
- **Automatic**: GitHub Actions workflow (`.github/workflows/pages.yml`) builds and deploys on push to `master`
- **Manual**: Can be triggered via GitHub Actions tab

## Architecture

### Hugo Blog Structure
- `config.yml`: Hugo configuration with PaperMod theme settings
- `content/posts/`: Blog post markdown files with frontmatter
- `archetypes/default.md`: Template for new posts
- Uses Hugo version 0.99.0 (defined in GitHub workflow)

### Portfolio Page
- `index.html`: Standalone modern portfolio page
- `styles.css`: CSS styling with gradient background and responsive grid
- Portfolio designed to showcase GitHub repositories with search/filter functionality
- Uses Font Awesome icons and Inter font family

### Key Configuration
- **Base URL**: `https://coderhh.github.io/`
- **Hugo Theme**: PaperMod with profile mode enabled
- **Deployment**: GitHub Actions builds both Hugo content and serves `index.html`
- **Analytics**: Google Analytics configured (UA-123-45)

## Content Management

### Blog Posts
- Frontmatter format: `title`, `date`
- Located in `content/posts/`
- Supports Hugo's standard markdown features

### Portfolio Updates
- Profile info hardcoded in `index.html`
- Repository data intended to be populated via JavaScript (referenced but not implemented)
- Stats manually maintained in HTML

## Styling Approach
- Modern CSS with CSS Grid and Flexbox
- Gradient backgrounds and card-based layouts
- Responsive design with mobile-first approach
- Inter font family for clean typography