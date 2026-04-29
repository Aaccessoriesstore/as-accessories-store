import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'apikey'],
}))

// Serve the main store page
app.get('/', (c) => {
  return c.html(getStorePage())
})

// Serve admin page
app.get('/admin', (c) => {
  return c.html(getAdminPage())
})

app.get('/admin/*', (c) => {
  return c.html(getAdminPage())
})

function getStorePage() {
  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>A S Accessories | إكسسوارات ستانلس ستيل حريمي</title>
<meta name="description" content="A S Accessories - براند إكسسوارات ستانلس ستيل حريمي فاخرة - خواتم، قلايد، أساور، حلق وطقم. شبرا الخيمة، القاهرة.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<style>
:root {
  --gold: #C9A84C;
  --gold-light: #E8C97A;
  --gold-dark: #9C7A2E;
  --rose-gold: #D4A088;
  --black: #0D0D0D;
  --dark: #1A1A1A;
  --dark2: #242424;
  --dark3: #2E2E2E;
  --gray: #6B6B6B;
  --gray-light: #B0B0B0;
  --white: #FFFFFF;
  --cream: #FDF8F0;
  --cream2: #F9F3E8;
  --bg: #F5F0E8;
  --card-bg: #FFFFFF;
  --border: rgba(201,168,76,0.2);
  --shadow: 0 4px 24px rgba(0,0,0,0.08);
  --shadow-lg: 0 8px 40px rgba(0,0,0,0.12);
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

* { margin:0; padding:0; box-sizing:border-box; }

html { scroll-behavior: smooth; }

body {
  font-family: 'Cairo', sans-serif;
  background: var(--cream);
  color: var(--black);
  direction: rtl;
  overflow-x: hidden;
}

/* ===== SCROLLBAR ===== */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: var(--cream2); }
::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 3px; }

/* ===== HEADER ===== */
#top-bar {
  background: var(--gold);
  color: var(--black);
  text-align: center;
  padding: 8px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.5px;
}

#top-bar a { color: var(--black); text-decoration: none; font-weight: 700; }

header {
  background: var(--white);
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 2px 20px rgba(0,0,0,0.08);
}

.header-main {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  gap: 20px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-icon {
  width: 46px;
  height: 46px;
  background: linear-gradient(135deg, var(--gold), var(--gold-dark));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  box-shadow: 0 4px 15px rgba(201,168,76,0.4);
}

.logo-text { line-height: 1.2; }
.logo-name {
  font-size: 18px;
  font-weight: 900;
  color: var(--dark);
  letter-spacing: -0.5px;
}
.logo-sub {
  font-size: 11px;
  color: var(--gold);
  font-weight: 600;
  letter-spacing: 0.5px;
}

.search-box {
  flex: 1;
  max-width: 500px;
  position: relative;
}

.search-box input {
  width: 100%;
  padding: 10px 20px 10px 48px;
  border: 2px solid var(--border);
  border-radius: 50px;
  font-family: 'Cairo', sans-serif;
  font-size: 14px;
  background: var(--cream);
  color: var(--dark);
  transition: var(--transition);
  outline: none;
}

.search-box input:focus {
  border-color: var(--gold);
  background: var(--white);
  box-shadow: 0 0 0 4px rgba(201,168,76,0.1);
}

.search-box .search-btn {
  position: absolute;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: var(--gold);
  font-size: 16px;
  cursor: pointer;
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.header-btn {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  border: none;
  background: var(--cream);
  color: var(--dark);
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  position: relative;
  text-decoration: none;
}

.header-btn:hover { background: var(--gold); color: white; transform: translateY(-2px); }

.cart-badge {
  position: absolute;
  top: -4px;
  right: -4px;
  background: #E63946;
  color: white;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  font-size: 10px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
}

/* ===== NAV ===== */
nav {
  background: var(--dark);
  border-top: 2px solid var(--gold);
}

.nav-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 24px;
  display: flex;
  align-items: center;
  gap: 0;
  overflow-x: auto;
  scrollbar-width: none;
}

.nav-inner::-webkit-scrollbar { display: none; }

.nav-link {
  color: var(--gray-light);
  text-decoration: none;
  padding: 14px 18px;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  transition: var(--transition);
  border-bottom: 3px solid transparent;
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link:hover, .nav-link.active {
  color: var(--gold);
  border-bottom-color: var(--gold);
  background: rgba(201,168,76,0.05);
}

/* ===== HERO ===== */
.hero {
  background: linear-gradient(135deg, var(--dark) 0%, var(--dark2) 50%, #1a1208 100%);
  min-height: 520px;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 30% 50%, rgba(201,168,76,0.12) 0%, transparent 60%),
              radial-gradient(ellipse at 70% 20%, rgba(212,160,136,0.08) 0%, transparent 50%);
}

.hero-inner {
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(201,168,76,0.15);
  border: 1px solid rgba(201,168,76,0.3);
  color: var(--gold-light);
  padding: 6px 16px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 20px;
}

.hero h1 {
  color: var(--white);
  font-size: clamp(32px, 4vw, 52px);
  font-weight: 900;
  line-height: 1.15;
  margin-bottom: 16px;
}

.hero h1 span {
  background: linear-gradient(135deg, var(--gold-light), var(--gold));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero p {
  color: var(--gray-light);
  font-size: 16px;
  line-height: 1.7;
  margin-bottom: 32px;
}

.hero-btns { display: flex; gap: 16px; flex-wrap: wrap; }

.btn-primary {
  background: linear-gradient(135deg, var(--gold), var(--gold-dark));
  color: var(--white);
  padding: 14px 32px;
  border-radius: 50px;
  font-family: 'Cairo', sans-serif;
  font-size: 15px;
  font-weight: 700;
  border: none;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: var(--transition);
  box-shadow: 0 4px 20px rgba(201,168,76,0.4);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(201,168,76,0.5);
}

.btn-outline {
  background: transparent;
  color: var(--white);
  padding: 14px 32px;
  border-radius: 50px;
  font-family: 'Cairo', sans-serif;
  font-size: 15px;
  font-weight: 700;
  border: 2px solid rgba(255,255,255,0.3);
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: var(--transition);
}

.btn-outline:hover {
  border-color: var(--gold);
  color: var(--gold);
  transform: translateY(-3px);
}

.hero-stats {
  display: flex;
  gap: 32px;
  margin-top: 40px;
}

.stat { text-align: center; }
.stat-num {
  font-size: 28px;
  font-weight: 900;
  color: var(--gold);
  display: block;
}
.stat-label {
  font-size: 12px;
  color: var(--gray-light);
  font-weight: 500;
}

.hero-visual {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-img-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  max-width: 440px;
}

.hero-img-item {
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0,0,0,0.4);
  aspect-ratio: 3/4;
  position: relative;
}

.hero-img-item:first-child {
  grid-row: span 2;
  aspect-ratio: auto;
  min-height: 280px;
}

.hero-img-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.hero-img-item:hover img { transform: scale(1.05); }

.hero-badge-float {
  position: absolute;
  bottom: -10px;
  left: -10px;
  background: var(--gold);
  color: var(--dark);
  padding: 10px 16px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 800;
  box-shadow: 0 4px 20px rgba(201,168,76,0.5);
  z-index: 10;
}

/* ===== FEATURES BAR ===== */
.features-bar {
  background: var(--white);
  border-top: 3px solid var(--gold);
  padding: 24px;
}

.features-inner {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 0;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 24px;
  border-left: 1px solid var(--border);
}

.feature-item:last-child { border-left: none; }

.feature-icon {
  width: 46px;
  height: 46px;
  background: linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05));
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: var(--gold);
  flex-shrink: 0;
}

.feature-title { font-size: 14px; font-weight: 700; color: var(--dark); }
.feature-sub { font-size: 12px; color: var(--gray); margin-top: 2px; }

/* ===== SECTIONS ===== */
.section {
  padding: 64px 24px;
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 48px;
}

.section-label {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--gold);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.section-label::before,
.section-label::after {
  content: '';
  width: 30px;
  height: 1px;
  background: var(--gold);
}

.section-title {
  font-size: clamp(24px, 3vw, 36px);
  font-weight: 900;
  color: var(--dark);
  margin-bottom: 12px;
}

.section-desc {
  color: var(--gray);
  font-size: 15px;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.7;
}

/* ===== CATEGORIES ===== */
.categories-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
}

.category-card {
  background: var(--white);
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: var(--transition);
  border: 2px solid transparent;
  text-decoration: none;
  box-shadow: var(--shadow);
}

.category-card:hover {
  border-color: var(--gold);
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
}

.cat-img {
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  position: relative;
}

.cat-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.category-card:hover .cat-img img { transform: scale(1.1); }

.cat-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%);
}

.cat-info {
  padding: 14px 12px;
  text-align: center;
}

.cat-name {
  font-size: 14px;
  font-weight: 800;
  color: var(--dark);
  display: block;
}

.cat-count {
  font-size: 12px;
  color: var(--gold);
  font-weight: 600;
  margin-top: 2px;
}

/* ===== FILTER BAR ===== */
.filter-bar {
  background: var(--white);
  border-radius: 16px;
  padding: 20px 24px;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  box-shadow: var(--shadow);
}

.filter-label { font-weight: 700; color: var(--dark); font-size: 14px; flex-shrink: 0; }

.filter-tags { display: flex; gap: 8px; flex-wrap: wrap; flex: 1; }

.filter-tag {
  padding: 7px 18px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  border: 2px solid var(--border);
  background: var(--cream);
  color: var(--gray);
  transition: var(--transition);
  font-family: 'Cairo', sans-serif;
}

.filter-tag:hover, .filter-tag.active {
  background: var(--gold);
  color: var(--white);
  border-color: var(--gold);
}

.sort-select {
  padding: 8px 16px;
  border: 2px solid var(--border);
  border-radius: 50px;
  font-family: 'Cairo', sans-serif;
  font-size: 13px;
  color: var(--dark);
  background: var(--cream);
  outline: none;
  cursor: pointer;
}

/* ===== PRODUCTS GRID ===== */
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 24px;
}

.product-card {
  background: var(--white);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: var(--shadow);
  transition: var(--transition);
  position: relative;
  cursor: pointer;
  border: 2px solid transparent;
}

.product-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: rgba(201,168,76,0.3);
}

.product-badges {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.badge {
  padding: 4px 10px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.5px;
  display: inline-block;
}

.badge-new { background: var(--gold); color: var(--dark); }
.badge-sale { background: #E63946; color: white; }
.badge-featured { background: #6B48FF; color: white; }

.product-actions {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 5;
  display: flex;
  flex-direction: column;
  gap: 6px;
  opacity: 0;
  transform: translateX(10px);
  transition: var(--transition);
}

.product-card:hover .product-actions {
  opacity: 1;
  transform: translateX(0);
}

.action-btn {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  background: white;
  border: none;
  color: var(--dark);
  font-size: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 12px rgba(0,0,0,0.15);
  transition: var(--transition);
}

.action-btn:hover { background: var(--gold); color: white; }

.product-img {
  width: 100%;
  aspect-ratio: 1;
  overflow: hidden;
  position: relative;
  background: var(--cream2);
}

.product-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-img img { transform: scale(1.08); }

.product-info { padding: 18px; }

.product-category {
  font-size: 11px;
  color: var(--gold);
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 6px;
}

.product-name {
  font-size: 15px;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 6px;
  line-height: 1.4;
}

.product-material {
  font-size: 12px;
  color: var(--gray);
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 4px;
}

.product-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.product-price { display: flex; flex-direction: column; }

.price-current {
  font-size: 20px;
  font-weight: 900;
  color: var(--gold-dark);
}

.price-old {
  font-size: 13px;
  color: var(--gray);
  text-decoration: line-through;
}

.add-cart-btn {
  width: 42px;
  height: 42px;
  border-radius: 12px;
  background: linear-gradient(135deg, var(--gold), var(--gold-dark));
  border: none;
  color: white;
  font-size: 17px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  box-shadow: 0 4px 15px rgba(201,168,76,0.4);
  flex-shrink: 0;
}

.add-cart-btn:hover { transform: scale(1.1); box-shadow: 0 6px 20px rgba(201,168,76,0.5); }

/* ===== LOADING ===== */
.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 8px;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

/* ===== PROMO BANNER ===== */
.promo-section {
  background: linear-gradient(135deg, var(--dark) 0%, var(--dark2) 100%);
  padding: 64px 24px;
  position: relative;
  overflow: hidden;
}

.promo-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.1) 0%, transparent 60%);
}

.promo-inner {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;
}

.promo-text h2 {
  color: var(--white);
  font-size: 36px;
  font-weight: 900;
  margin-bottom: 16px;
  line-height: 1.3;
}

.promo-text h2 span {
  color: var(--gold-light);
}

.promo-text p {
  color: var(--gray-light);
  font-size: 15px;
  line-height: 1.7;
  margin-bottom: 28px;
}

.promo-features {
  list-style: none;
  margin-bottom: 32px;
}

.promo-features li {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--gray-light);
  font-size: 14px;
  margin-bottom: 12px;
}

.promo-features li i {
  color: var(--gold);
  font-size: 16px;
  width: 20px;
}

.promo-img {
  position: relative;
  display: flex;
  justify-content: center;
}

.promo-img-main {
  width: 100%;
  max-width: 420px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 16px 50px rgba(0,0,0,0.5);
}

.promo-img-main img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  aspect-ratio: 4/3;
}

.promo-tag {
  position: absolute;
  top: -15px;
  right: 20px;
  background: var(--gold);
  color: var(--dark);
  padding: 10px 20px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 900;
  box-shadow: 0 4px 20px rgba(201,168,76,0.5);
}

/* ===== TESTIMONIALS ===== */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.testimonial-card {
  background: var(--white);
  border-radius: 20px;
  padding: 28px;
  box-shadow: var(--shadow);
  border: 1px solid var(--border);
  transition: var(--transition);
}

.testimonial-card:hover {
  border-color: var(--gold);
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.test-stars {
  color: var(--gold);
  font-size: 16px;
  margin-bottom: 14px;
  letter-spacing: 2px;
}

.test-text {
  color: var(--gray);
  font-size: 14px;
  line-height: 1.7;
  margin-bottom: 20px;
  font-style: italic;
}

.test-author {
  display: flex;
  align-items: center;
  gap: 12px;
}

.test-avatar {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--gold), var(--rose-gold));
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 800;
  font-size: 16px;
  flex-shrink: 0;
}

.test-name { font-weight: 700; color: var(--dark); font-size: 14px; }
.test-location { font-size: 12px; color: var(--gold); font-weight: 600; }

/* ===== NEWSLETTER ===== */
.newsletter {
  background: linear-gradient(135deg, var(--gold), var(--gold-dark));
  border-radius: 24px;
  padding: 48px;
  text-align: center;
  margin: 0 24px;
}

.newsletter h2 {
  color: var(--white);
  font-size: 28px;
  font-weight: 900;
  margin-bottom: 8px;
}

.newsletter p {
  color: rgba(255,255,255,0.85);
  font-size: 15px;
  margin-bottom: 28px;
}

.newsletter-form {
  display: flex;
  gap: 12px;
  max-width: 480px;
  margin: 0 auto;
}

.newsletter-form input {
  flex: 1;
  padding: 14px 20px;
  border-radius: 50px;
  border: none;
  font-family: 'Cairo', sans-serif;
  font-size: 14px;
  outline: none;
}

.newsletter-form button {
  padding: 14px 28px;
  background: var(--dark);
  color: white;
  border: none;
  border-radius: 50px;
  font-family: 'Cairo', sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  white-space: nowrap;
  transition: var(--transition);
}

.newsletter-form button:hover { background: var(--black); transform: translateY(-2px); }

/* ===== FOOTER ===== */
footer {
  background: var(--dark);
  color: var(--gray-light);
  margin-top: 64px;
  border-top: 3px solid var(--gold);
}

.footer-main {
  max-width: 1400px;
  margin: 0 auto;
  padding: 56px 24px 40px;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 48px;
}

.footer-brand .logo-name { color: var(--white); }
.footer-brand .logo-sub { color: var(--gold); }
.footer-brand p {
  color: var(--gray);
  font-size: 14px;
  line-height: 1.7;
  margin: 16px 0 24px;
}

.social-links { display: flex; gap: 10px; }

.social-link {
  width: 40px;
  height: 40px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 17px;
  transition: var(--transition);
  text-decoration: none;
}

.social-fb { background: #1877F2; color: white; }
.social-wa { background: #25D366; color: white; }
.social-ig { background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); color: white; }

.social-link:hover { transform: translateY(-4px) scale(1.1); }

.footer-col h4 {
  color: var(--white);
  font-size: 15px;
  font-weight: 800;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid rgba(201,168,76,0.3);
}

.footer-links { list-style: none; }

.footer-links li {
  margin-bottom: 10px;
}

.footer-links a {
  color: var(--gray);
  text-decoration: none;
  font-size: 14px;
  transition: var(--transition);
  display: flex;
  align-items: center;
  gap: 6px;
}

.footer-links a:hover { color: var(--gold); padding-right: 4px; }

.footer-contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--gray);
  font-size: 13px;
  margin-bottom: 12px;
}

.footer-contact-item i {
  color: var(--gold);
  width: 16px;
  font-size: 14px;
}

.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.08);
  padding: 20px 24px;
  text-align: center;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-bottom p { font-size: 13px; color: var(--gray); }

.footer-bottom a {
  color: var(--gold);
  text-decoration: none;
  font-weight: 700;
}

/* ===== CART DRAWER ===== */
.cart-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.6);
  z-index: 9000;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);
  backdrop-filter: blur(4px);
}

.cart-overlay.open { opacity: 1; visibility: visible; }

.cart-drawer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-width: 440px;
  height: 100%;
  background: var(--white);
  z-index: 9001;
  transform: translateX(-100%);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
}

.cart-overlay.open .cart-drawer { transform: translateX(0); }

.cart-header {
  padding: 24px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--cream);
}

.cart-header h3 { font-size: 18px; font-weight: 800; color: var(--dark); }

.cart-close {
  width: 36px;
  height: 36px;
  border-radius: 10px;
  border: none;
  background: var(--white);
  color: var(--dark);
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.cart-close:hover { background: var(--gold); color: white; }

.cart-items {
  flex: 1;
  overflow-y: auto;
  padding: 20px;
}

.cart-item {
  display: flex;
  gap: 14px;
  padding: 16px 0;
  border-bottom: 1px solid var(--border);
}

.cart-item-img {
  width: 72px;
  height: 72px;
  border-radius: 12px;
  object-fit: cover;
  flex-shrink: 0;
}

.cart-item-info { flex: 1; }

.cart-item-name {
  font-size: 14px;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 4px;
}

.cart-item-price {
  font-size: 15px;
  font-weight: 800;
  color: var(--gold-dark);
  margin-bottom: 8px;
}

.cart-item-qty {
  display: flex;
  align-items: center;
  gap: 10px;
}

.qty-btn {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: 2px solid var(--border);
  background: var(--cream);
  color: var(--dark);
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  transition: var(--transition);
}

.qty-btn:hover { border-color: var(--gold); color: var(--gold); }

.qty-num { font-weight: 700; font-size: 15px; min-width: 24px; text-align: center; }

.cart-item-del {
  width: 32px;
  height: 32px;
  border-radius: 10px;
  border: none;
  background: #FFE5E5;
  color: #E63946;
  font-size: 14px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  transition: var(--transition);
}

.cart-item-del:hover { background: #E63946; color: white; }

.cart-footer {
  padding: 20px 24px;
  border-top: 1px solid var(--border);
  background: var(--cream);
}

.cart-total-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
  color: var(--gray);
}

.cart-total-row.final {
  font-size: 18px;
  font-weight: 900;
  color: var(--dark);
  margin-top: 12px;
  padding-top: 12px;
  border-top: 2px solid var(--border);
}

.checkout-btn {
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, var(--gold), var(--gold-dark));
  color: white;
  border: none;
  border-radius: 14px;
  font-family: 'Cairo', sans-serif;
  font-size: 16px;
  font-weight: 800;
  cursor: pointer;
  margin-top: 16px;
  transition: var(--transition);
  box-shadow: 0 4px 20px rgba(201,168,76,0.4);
}

.checkout-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(201,168,76,0.5);
}

.empty-cart {
  text-align: center;
  padding: 60px 20px;
  color: var(--gray);
}

.empty-cart i {
  font-size: 64px;
  color: var(--border);
  margin-bottom: 16px;
  display: block;
}

.empty-cart p { font-size: 16px; font-weight: 600; }

/* ===== PRODUCT MODAL ===== */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.7);
  z-index: 8000;
  opacity: 0;
  visibility: hidden;
  transition: var(--transition);
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.modal-overlay.open { opacity: 1; visibility: visible; }

.product-modal {
  background: var(--white);
  border-radius: 24px;
  max-width: 880px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  box-shadow: 0 24px 80px rgba(0,0,0,0.4);
}

.modal-close {
  position: absolute;
  top: 16px;
  left: 16px;
  z-index: 10;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  border: none;
  background: rgba(0,0,0,0.6);
  color: white;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
  backdrop-filter: blur(4px);
}

.modal-close:hover { background: var(--gold); }

.modal-img {
  position: relative;
  overflow: hidden;
  border-radius: 24px 0 0 24px;
}

.modal-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 400px;
}

.modal-img-thumbs {
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
}

.img-thumb {
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: cover;
  cursor: pointer;
  border: 2px solid transparent;
  transition: var(--transition);
}

.img-thumb.active, .img-thumb:hover { border-color: var(--gold); }

.modal-info {
  padding: 36px 32px;
  display: flex;
  flex-direction: column;
}

.modal-category {
  font-size: 12px;
  font-weight: 700;
  color: var(--gold);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.modal-name {
  font-size: 24px;
  font-weight: 900;
  color: var(--dark);
  margin-bottom: 8px;
  line-height: 1.3;
}

.modal-rating {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
}

.stars { color: var(--gold); font-size: 14px; }
.rating-count { font-size: 13px; color: var(--gray); }

.modal-price-row {
  display: flex;
  align-items: baseline;
  gap: 12px;
  margin-bottom: 20px;
}

.modal-price {
  font-size: 32px;
  font-weight: 900;
  color: var(--gold-dark);
}

.modal-price-old {
  font-size: 18px;
  color: var(--gray);
  text-decoration: line-through;
}

.modal-discount {
  background: #E63946;
  color: white;
  padding: 3px 10px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 800;
}

.modal-desc {
  color: var(--gray);
  font-size: 14px;
  line-height: 1.8;
  margin-bottom: 24px;
  padding: 16px;
  background: var(--cream);
  border-radius: 12px;
}

.modal-meta {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  margin-bottom: 24px;
}

.meta-item {
  background: var(--cream2);
  border-radius: 10px;
  padding: 10px 14px;
}

.meta-label {
  font-size: 11px;
  color: var(--gray);
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: block;
}

.meta-value {
  font-size: 13px;
  font-weight: 700;
  color: var(--dark);
  margin-top: 2px;
}

.modal-qty-row {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.modal-qty-label { font-size: 14px; font-weight: 700; color: var(--dark); }

.modal-qty-controls {
  display: flex;
  align-items: center;
  gap: 0;
  border: 2px solid var(--border);
  border-radius: 12px;
  overflow: hidden;
}

.modal-qty-btn {
  width: 40px;
  height: 40px;
  border: none;
  background: var(--cream);
  font-size: 18px;
  cursor: pointer;
  transition: var(--transition);
  font-weight: 700;
}

.modal-qty-btn:hover { background: var(--gold); color: white; }

.modal-qty-num {
  width: 48px;
  text-align: center;
  font-size: 16px;
  font-weight: 800;
  border: none;
  outline: none;
  font-family: 'Cairo', sans-serif;
}

.modal-btns {
  display: flex;
  gap: 12px;
  margin-top: auto;
}

.modal-cart-btn {
  flex: 1;
  padding: 14px;
  background: linear-gradient(135deg, var(--gold), var(--gold-dark));
  color: white;
  border: none;
  border-radius: 14px;
  font-family: 'Cairo', sans-serif;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: 0 4px 20px rgba(201,168,76,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.modal-cart-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(201,168,76,0.5);
}

.modal-wa-btn {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  border: none;
  background: #25D366;
  color: white;
  font-size: 22px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: var(--transition);
}

.modal-wa-btn:hover { transform: scale(1.1); }

/* ===== CHECKOUT MODAL ===== */
.checkout-modal {
  background: var(--white);
  border-radius: 24px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 24px 80px rgba(0,0,0,0.4);
}

.checkout-header {
  padding: 24px 28px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(135deg, var(--dark), var(--dark2));
}

.checkout-header h3 { color: white; font-size: 20px; font-weight: 800; }

.checkout-body { padding: 28px; }

.form-group {
  margin-bottom: 18px;
}

.form-group label {
  display: block;
  font-size: 13px;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 6px;
}

.form-group label span { color: var(--gold); }

.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid var(--border);
  border-radius: 12px;
  font-family: 'Cairo', sans-serif;
  font-size: 14px;
  color: var(--dark);
  background: var(--cream);
  outline: none;
  transition: var(--transition);
}

.form-input:focus {
  border-color: var(--gold);
  background: white;
  box-shadow: 0 0 0 4px rgba(201,168,76,0.1);
}

.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }

.order-summary {
  background: var(--cream);
  border-radius: 16px;
  padding: 20px;
  margin: 20px 0;
}

.order-summary h4 {
  font-size: 15px;
  font-weight: 800;
  color: var(--dark);
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  color: var(--gray);
  margin-bottom: 8px;
}

.summary-total {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 900;
  color: var(--dark);
  padding-top: 12px;
  border-top: 2px solid var(--border);
  margin-top: 8px;
}

.place-order-btn {
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, var(--gold), var(--gold-dark));
  color: white;
  border: none;
  border-radius: 14px;
  font-family: 'Cairo', sans-serif;
  font-size: 17px;
  font-weight: 800;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: 0 4px 20px rgba(201,168,76,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.place-order-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 30px rgba(201,168,76,0.5);
}

/* ===== SUCCESS MODAL ===== */
.success-modal {
  background: var(--white);
  border-radius: 24px;
  max-width: 440px;
  width: 100%;
  padding: 48px 32px;
  text-align: center;
  box-shadow: 0 24px 80px rgba(0,0,0,0.4);
}

.success-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, var(--gold), var(--gold-dark));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: white;
  margin: 0 auto 24px;
  animation: bounceIn 0.6s ease;
}

@keyframes bounceIn {
  0% { transform: scale(0); }
  60% { transform: scale(1.15); }
  100% { transform: scale(1); }
}

.success-modal h3 { font-size: 24px; font-weight: 900; color: var(--dark); margin-bottom: 12px; }
.success-modal p { color: var(--gray); font-size: 15px; line-height: 1.7; margin-bottom: 8px; }
.success-order-num {
  background: var(--cream);
  border-radius: 12px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 800;
  color: var(--gold-dark);
  margin: 16px 0 24px;
}

/* ===== TOAST ===== */
.toast-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.toast {
  background: var(--dark);
  color: white;
  padding: 14px 20px;
  border-radius: 14px;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 8px 30px rgba(0,0,0,0.3);
  display: flex;
  align-items: center;
  gap: 10px;
  animation: slideInRight 0.4s ease;
  min-width: 260px;
  border-right: 4px solid var(--gold);
}

.toast.success { border-right-color: #25D366; }
.toast.error { border-right-color: #E63946; }

@keyframes slideInRight {
  from { transform: translateX(120%); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}

/* ===== WHATSAPP FLOAT ===== */
.wa-float {
  position: fixed;
  bottom: 28px;
  left: 28px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #25D366;
  color: white;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(37,211,102,0.5);
  z-index: 8000;
  text-decoration: none;
  animation: pulse 2s infinite;
  transition: var(--transition);
}

.wa-float:hover { transform: scale(1.1); }

@keyframes pulse {
  0%, 100% { box-shadow: 0 4px 20px rgba(37,211,102,0.5); }
  50% { box-shadow: 0 4px 40px rgba(37,211,102,0.8); }
}

/* ===== RESPONSIVE ===== */
@media (max-width: 1100px) {
  .categories-grid { grid-template-columns: repeat(3, 1fr); }
  .footer-main { grid-template-columns: 1fr 1fr; gap: 32px; }
}

@media (max-width: 900px) {
  .hero-inner { grid-template-columns: 1fr; text-align: center; }
  .hero-visual { display: none; }
  .hero-btns { justify-content: center; }
  .hero-stats { justify-content: center; }
  .features-inner { grid-template-columns: repeat(2, 1fr); }
  .feature-item { border-left: none; border-bottom: 1px solid var(--border); padding: 16px; }
  .promo-inner { grid-template-columns: 1fr; text-align: center; }
  .testimonials-grid { grid-template-columns: 1fr 1fr; }
  .product-modal { grid-template-columns: 1fr; }
  .modal-img { border-radius: 24px 24px 0 0; min-height: 250px; }
  .modal-img img { min-height: 250px; }
}

@media (max-width: 640px) {
  .header-main { padding: 0 16px; height: 60px; }
  .search-box { display: none; }
  .hero h1 { font-size: 28px; }
  .categories-grid { grid-template-columns: repeat(3, 1fr); gap: 10px; }
  .products-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
  .product-info { padding: 12px; }
  .features-inner { grid-template-columns: repeat(2, 1fr); }
  .testimonials-grid { grid-template-columns: 1fr; }
  .footer-main { grid-template-columns: 1fr; gap: 28px; }
  .newsletter { margin: 0 16px; padding: 32px 20px; }
  .newsletter-form { flex-direction: column; }
  .footer-bottom { flex-direction: column; gap: 8px; text-align: center; }
  .section { padding: 48px 16px; }
  .cart-drawer { max-width: 100%; }
  .form-row { grid-template-columns: 1fr; }
}
</style>
</head>
<body>

<!-- TOP BAR -->
<div id="top-bar">
  🌹 مرحباً بك في A S Accessories | <a href="https://wa.me/201000000000">تواصل معنا عبر واتساب</a> | شحن لجميع محافظات مصر 🚚
</div>

<!-- HEADER -->
<header>
  <div class="header-main">
    <a href="/" class="logo">
      <div class="logo-icon">💎</div>
      <div class="logo-text">
        <div class="logo-name">A S Accessories</div>
        <div class="logo-sub">STAINLESS STEEL JEWELRY</div>
      </div>
    </a>
    
    <div class="search-box">
      <input type="text" id="searchInput" placeholder="ابحث عن إكسسوارك المفضل..." oninput="handleSearch(this.value)">
      <button class="search-btn"><i class="fas fa-search"></i></button>
    </div>
    
    <div class="header-actions">
      <a href="https://wa.me/201000000000" target="_blank" class="header-btn" title="واتساب">
        <i class="fab fa-whatsapp" style="color:#25D366"></i>
      </a>
      <button class="header-btn" id="cartBtn" title="سلة التسوق" onclick="toggleCart()">
        <i class="fas fa-shopping-bag"></i>
        <span class="cart-badge" id="cartBadge" style="display:none">0</span>
      </button>
    </div>
  </div>
</header>

<!-- NAV -->
<nav>
  <div class="nav-inner">
    <a href="#" class="nav-link active" onclick="filterByCategory('all', this)">
      <i class="fas fa-th-large"></i> الكل
    </a>
    <a href="#" class="nav-link" onclick="filterByCategory('rings', this)">
      <i class="fas fa-ring"></i> خواتم
    </a>
    <a href="#" class="nav-link" onclick="filterByCategory('necklaces', this)">
      <i class="fas fa-gem"></i> قلايد
    </a>
    <a href="#" class="nav-link" onclick="filterByCategory('bracelets', this)">
      <i class="fas fa-circle-notch"></i> أساور
    </a>
    <a href="#" class="nav-link" onclick="filterByCategory('earrings', this)">
      <i class="fas fa-star"></i> حلق
    </a>
    <a href="#" class="nav-link" onclick="filterByCategory('sets', this)">
      <i class="fas fa-box"></i> طقم
    </a>
    <a href="#" class="nav-link" onclick="filterByCategory('anklets', this)">
      <i class="fas fa-link"></i> خلاخيل
    </a>
    <a href="#" class="nav-link" onclick="filterFeatured(this)" style="color:var(--gold)">
      <i class="fas fa-fire"></i> الأكثر مبيعاً
    </a>
  </div>
</nav>

<!-- HERO -->
<section class="hero">
  <div class="hero-inner">
    <div class="hero-content">
      <div class="hero-badge">
        <i class="fas fa-certificate"></i>
        براند إكسسوارات ستانلس ستيل
      </div>
      <h1>
        أناقتك<br>
        <span>تعريف آخر</span><br>
        للجمال
      </h1>
      <p>إكسسوارات ستانلس ستيل حريمي فاخرة لا تتأكسد ولا تغير لونها — تصاميم عصرية بأسعار مناسبة. احني شكلك مع أجمل مجموعاتنا.</p>
      <div class="hero-btns">
        <a href="#products" class="btn-primary">
          <i class="fas fa-shopping-bag"></i> تسوقي الآن
        </a>
        <a href="https://www.facebook.com/people/A-S-accessories/61578616294623/" target="_blank" class="btn-outline">
          <i class="fab fa-facebook"></i> صفحتنا
        </a>
      </div>
      <div class="hero-stats">
        <div class="stat">
          <span class="stat-num">500+</span>
          <span class="stat-label">عميلة سعيدة</span>
        </div>
        <div class="stat">
          <span class="stat-num">100+</span>
          <span class="stat-label">تصميم فريد</span>
        </div>
        <div class="stat">
          <span class="stat-num">6</span>
          <span class="stat-label">فئات متنوعة</span>
        </div>
      </div>
    </div>

    <div class="hero-visual">
      <div class="hero-img-grid">
        <div class="hero-img-item" style="min-height:280px">
          <img src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80" alt="إكسسوارات فاخرة" loading="lazy">
          <div class="cat-overlay"></div>
          <div class="hero-badge-float">✨ جديد</div>
        </div>
        <div class="hero-img-item">
          <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&q=80" alt="خواتم ستانلس" loading="lazy">
        </div>
        <div class="hero-img-item">
          <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&q=80" alt="قلايد" loading="lazy">
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FEATURES -->
<div class="features-bar">
  <div class="features-inner">
    <div class="feature-item">
      <div class="feature-icon"><i class="fas fa-truck"></i></div>
      <div>
        <div class="feature-title">شحن لكل مصر</div>
        <div class="feature-sub">توصيل لجميع المحافظات</div>
      </div>
    </div>
    <div class="feature-item">
      <div class="feature-icon"><i class="fas fa-shield-alt"></i></div>
      <div>
        <div class="feature-title">ستانلس أصلي 100%</div>
        <div class="feature-sub">لا يتأكسد ولا يغير اللون</div>
      </div>
    </div>
    <div class="feature-item">
      <div class="feature-icon"><i class="fas fa-undo-alt"></i></div>
      <div>
        <div class="feature-title">استبدال مضمون</div>
        <div class="feature-sub">في حالة أي عيب مصنعي</div>
      </div>
    </div>
    <div class="feature-item">
      <div class="feature-icon"><i class="fas fa-headset"></i></div>
      <div>
        <div class="feature-title">دعم على مدار الساعة</div>
        <div class="feature-sub">واتساب وفيسبوك</div>
      </div>
    </div>
  </div>
</div>

<!-- CATEGORIES -->
<section class="section">
  <div class="section-header">
    <div class="section-label">تسوقي حسب الفئة</div>
    <h2 class="section-title">اكتشفي مجموعاتنا</h2>
    <p class="section-desc">كل فئة مختارة بعناية لتناسب كل إطلالة وكل مناسبة</p>
  </div>
  <div class="categories-grid" id="categoriesGrid">
    <!-- Loaded by JS -->
  </div>
</section>

<!-- PRODUCTS -->
<section class="section" id="products" style="padding-top:0">
  <div class="section-header">
    <div class="section-label">منتجاتنا المميزة</div>
    <h2 class="section-title" id="productsTitle">أحدث الإكسسوارات</h2>
    <p class="section-desc">مجموعة مختارة من أجمل الإكسسوارات بأفضل الأسعار</p>
  </div>
  
  <div class="filter-bar">
    <span class="filter-label"><i class="fas fa-sliders-h"></i> تصفية:</span>
    <div class="filter-tags">
      <button class="filter-tag active" onclick="setFilter('all', this)">الكل</button>
      <button class="filter-tag" onclick="setFilter('new', this)">جديد 🆕</button>
      <button class="filter-tag" onclick="setFilter('sale', this)">عروض 🔥</button>
      <button class="filter-tag" onclick="setFilter('featured', this)">الأكثر مبيعاً ⭐</button>
    </div>
    <select class="sort-select" onchange="sortProducts(this.value)">
      <option value="default">الترتيب الافتراضي</option>
      <option value="price-asc">السعر: من الأقل للأعلى</option>
      <option value="price-desc">السعر: من الأعلى للأقل</option>
      <option value="newest">الأحدث أولاً</option>
    </select>
  </div>
  
  <div class="products-grid" id="productsGrid">
    <!-- Loaded by JS -->
  </div>
  
  <div style="text-align:center;margin-top:40px" id="loadMoreContainer" style="display:none">
    <button class="btn-primary" id="loadMoreBtn" onclick="loadMoreProducts()" style="display:none">
      <i class="fas fa-plus"></i> عرض المزيد
    </button>
  </div>
</section>

<!-- PROMO -->
<div class="promo-section">
  <div class="promo-inner">
    <div class="promo-text">
      <div class="hero-badge" style="margin-bottom:20px">
        <i class="fas fa-star"></i> لماذا نختار ستانلس ستيل؟
      </div>
      <h2>إكسسوارات تدوم <span>معك للأبد</span></h2>
      <p>الستانلس ستيل هو الخيار الأمثل للإكسسوارات الحديثة — يجمع بين الأناقة والمتانة والعملية.</p>
      <ul class="promo-features">
        <li><i class="fas fa-check-circle"></i> لا يتأكسد أو يصدأ مع الوقت</li>
        <li><i class="fas fa-check-circle"></i> مقاوم للماء والعرق وكل الظروف</li>
        <li><i class="fas fa-check-circle"></i> لا يسبب حساسية للبشرة</li>
        <li><i class="fas fa-check-circle"></i> يحافظ على لمعانه لسنوات طويلة</li>
        <li><i class="fas fa-check-circle"></i> بأسعار في متناول الجميع</li>
      </ul>
      <a href="#products" class="btn-primary">
        <i class="fas fa-shopping-bag"></i> تسوقي الكوليكشن
      </a>
    </div>
    <div class="promo-img">
      <div class="promo-img-main">
        <img src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80" alt="إكسسوارات ستانلس ستيل" loading="lazy">
      </div>
      <div class="promo-tag">🛡️ جودة مضمونة</div>
    </div>
  </div>
</div>

<!-- TESTIMONIALS -->
<section class="section">
  <div class="section-header">
    <div class="section-label">آراء عميلاتنا</div>
    <h2 class="section-title">قالوا عنا</h2>
    <p class="section-desc">رأي عميلاتنا هو أكبر دليل على جودتنا</p>
  </div>
  <div class="testimonials-grid">
    <div class="testimonial-card">
      <div class="test-stars">★★★★★</div>
      <p class="test-text">"الأسوارة جميلة جداً والجودة ممتازة! لبستها من أسبوعين ومفيش أي تغيير في اللون. هشتري تاني بالتأكيد."</p>
      <div class="test-author">
        <div class="test-avatar">ن</div>
        <div>
          <div class="test-name">نور أحمد</div>
          <div class="test-location">القاهرة</div>
        </div>
      </div>
    </div>
    <div class="testimonial-card">
      <div class="test-stars">★★★★★</div>
      <p class="test-text">"اشتريت طقم العروسة وكان روعة! الشحن وصل بسرعة والتغليف كان أنيق جداً. شكراً A S Accessories!"</p>
      <div class="test-author">
        <div class="test-avatar">س</div>
        <div>
          <div class="test-name">سلمى محمود</div>
          <div class="test-location">الإسكندرية</div>
        </div>
      </div>
    </div>
    <div class="testimonial-card">
      <div class="test-stars">★★★★★</div>
      <p class="test-text">"القلادة تحفة فعلاً! مختلفة عن أي حاجة شفتها قبل كده. والسعر معقول جداً مقارنة بالجودة العالية."</p>
      <div class="test-author">
        <div class="test-avatar">م</div>
        <div>
          <div class="test-name">مريم خالد</div>
          <div class="test-location">الجيزة</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- NEWSLETTER -->
<div style="padding:0 0 64px">
  <div class="newsletter">
    <i class="fas fa-bell" style="font-size:40px;color:rgba(255,255,255,0.9);margin-bottom:16px;display:block"></i>
    <h2>ابقي على اطلاع بأحدث المجموعات</h2>
    <p>سجّلي إيميلك واحصلي على أول علم بالعروض والكوليكشنات الجديدة</p>
    <form class="newsletter-form" onsubmit="subscribeNewsletter(event)">
      <input type="email" placeholder="ادخلي إيميلك..." required>
      <button type="submit">اشتركي 💌</button>
    </form>
  </div>
</div>

<!-- FOOTER -->
<footer>
  <div class="footer-main">
    <div class="footer-brand">
      <div class="logo">
        <div class="logo-icon">💎</div>
        <div class="logo-text">
          <div class="logo-name">A S Accessories</div>
          <div class="logo-sub">STAINLESS STEEL JEWELRY</div>
        </div>
      </div>
      <p>براند متخصص في إكسسوارات الستانلس ستيل الحريمي الفاخرة. نقدم أجمل التصاميم العصرية بجودة لا تُقارن وأسعار في متناول الجميع.</p>
      <div class="social-links">
        <a href="https://www.facebook.com/people/A-S-accessories/61578616294623/" target="_blank" class="social-link social-fb" title="فيسبوك">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://wa.me/201000000000" target="_blank" class="social-link social-wa" title="واتساب">
          <i class="fab fa-whatsapp"></i>
        </a>
        <a href="#" class="social-link social-ig" title="انستجرام">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </div>
    
    <div class="footer-col">
      <h4>تسوقي</h4>
      <ul class="footer-links">
        <li><a href="#" onclick="filterByCategory('rings',null)"><i class="fas fa-chevron-left"></i> خواتم</a></li>
        <li><a href="#" onclick="filterByCategory('necklaces',null)"><i class="fas fa-chevron-left"></i> قلايد</a></li>
        <li><a href="#" onclick="filterByCategory('bracelets',null)"><i class="fas fa-chevron-left"></i> أساور</a></li>
        <li><a href="#" onclick="filterByCategory('earrings',null)"><i class="fas fa-chevron-left"></i> حلق</a></li>
        <li><a href="#" onclick="filterByCategory('sets',null)"><i class="fas fa-chevron-left"></i> طقم</a></li>
        <li><a href="#" onclick="filterFeatured(null)"><i class="fas fa-fire" style="color:var(--gold)"></i> الأكثر مبيعاً</a></li>
      </ul>
    </div>
    
    <div class="footer-col">
      <h4>معلومات</h4>
      <ul class="footer-links">
        <li><a href="#"><i class="fas fa-chevron-left"></i> عنّا</a></li>
        <li><a href="#"><i class="fas fa-chevron-left"></i> سياسة الشحن</a></li>
        <li><a href="#"><i class="fas fa-chevron-left"></i> سياسة الاستبدال</a></li>
        <li><a href="#"><i class="fas fa-chevron-left"></i> الأسئلة الشائعة</a></li>
        <li><a href="/admin"><i class="fas fa-chevron-left"></i> لوحة الإدارة</a></li>
      </ul>
    </div>
    
    <div class="footer-col">
      <h4>تواصلي معنا</h4>
      <div class="footer-contact-item">
        <i class="fab fa-whatsapp"></i>
        <span>واتساب: 201000000000+</span>
      </div>
      <div class="footer-contact-item">
        <i class="fab fa-facebook"></i>
        <span>A S Accessories</span>
      </div>
      <div class="footer-contact-item">
        <i class="fas fa-map-marker-alt"></i>
        <span>شبرا الخيمة، القاهرة</span>
      </div>
      <div class="footer-contact-item">
        <i class="fas fa-clock"></i>
        <span>يومياً من 10ص - 10م</span>
      </div>
    </div>
  </div>
  
  <div class="footer-bottom">
    <p>© 2025 A S Accessories. جميع الحقوق محفوظة.</p>
    <p>صُنع بـ ❤️ في مصر 🇪🇬</p>
  </div>
</footer>

<!-- CART DRAWER -->
<div class="cart-overlay" id="cartOverlay" onclick="toggleCart()">
  <div class="cart-drawer" onclick="event.stopPropagation()">
    <div class="cart-header">
      <h3><i class="fas fa-shopping-bag" style="color:var(--gold)"></i> سلة التسوق</h3>
      <button class="cart-close" onclick="toggleCart()"><i class="fas fa-times"></i></button>
    </div>
    <div class="cart-items" id="cartItems"></div>
    <div class="cart-footer" id="cartFooter" style="display:none">
      <div class="cart-total-row">
        <span>المجموع</span>
        <span id="cartSubtotal">0 جنيه</span>
      </div>
      <div class="cart-total-row">
        <span>الشحن</span>
        <span id="cartShipping">50 جنيه</span>
      </div>
      <div class="cart-total-row final">
        <span>الإجمالي</span>
        <span id="cartTotal">0 جنيه</span>
      </div>
      <button class="checkout-btn" onclick="openCheckout()">
        <i class="fas fa-credit-card"></i> إتمام الطلب
      </button>
    </div>
  </div>
</div>

<!-- PRODUCT MODAL -->
<div class="modal-overlay" id="productModal" onclick="closeProductModal(event)">
  <div class="product-modal" id="productModalContent">
    <button class="modal-close" onclick="closeModal('productModal')"><i class="fas fa-times"></i></button>
    <div class="modal-img" id="modalImgSection">
      <img id="modalMainImg" src="" alt="">
      <div class="modal-img-thumbs" id="modalThumbs"></div>
    </div>
    <div class="modal-info" id="modalInfo"></div>
  </div>
</div>

<!-- CHECKOUT MODAL -->
<div class="modal-overlay" id="checkoutModal" onclick="closeProductModal(event)">
  <div class="checkout-modal" onclick="event.stopPropagation()">
    <div class="checkout-header">
      <h3><i class="fas fa-shopping-cart"></i> إتمام الطلب</h3>
      <button class="cart-close" onclick="closeModal('checkoutModal')"><i class="fas fa-times"></i></button>
    </div>
    <div class="checkout-body">
      <form onsubmit="placeOrder(event)">
        <div class="form-row">
          <div class="form-group">
            <label>الاسم الكامل <span>*</span></label>
            <input type="text" class="form-input" id="custName" placeholder="اسمك الكامل" required>
          </div>
          <div class="form-group">
            <label>رقم الهاتف <span>*</span></label>
            <input type="tel" class="form-input" id="custPhone" placeholder="01xxxxxxxxx" required>
          </div>
        </div>
        <div class="form-group">
          <label>البريد الإلكتروني (اختياري)</label>
          <input type="email" class="form-input" id="custEmail" placeholder="example@email.com">
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>المحافظة <span>*</span></label>
            <select class="form-input" id="custGov" required onchange="updateShipping()">
              <option value="">اختر المحافظة</option>
              <option value="القاهرة">القاهرة</option>
              <option value="الجيزة">الجيزة</option>
              <option value="الإسكندرية">الإسكندرية</option>
              <option value="الشرقية">الشرقية</option>
              <option value="الدقهلية">الدقهلية</option>
              <option value="القليوبية">القليوبية</option>
              <option value="المنيا">المنيا</option>
              <option value="أسيوط">أسيوط</option>
              <option value="سوهاج">سوهاج</option>
              <option value="الأقصر">الأقصر</option>
              <option value="أسوان">أسوان</option>
              <option value="الإسماعيلية">الإسماعيلية</option>
              <option value="بور سعيد">بور سعيد</option>
              <option value="السويس">السويس</option>
              <option value="دمياط">دمياط</option>
              <option value="كفر الشيخ">كفر الشيخ</option>
              <option value="الغربية">الغربية</option>
              <option value="المنوفية">المنوفية</option>
              <option value="البحيرة">البحيرة</option>
              <option value="الفيوم">الفيوم</option>
              <option value="بني سويف">بني سويف</option>
              <option value="مرسى مطروح">مرسى مطروح</option>
              <option value="شمال سيناء">شمال سيناء</option>
              <option value="جنوب سيناء">جنوب سيناء</option>
              <option value="البحر الأحمر">البحر الأحمر</option>
              <option value="الوادي الجديد">الوادي الجديد</option>
            </select>
          </div>
          <div class="form-group">
            <label>المدينة/المنطقة <span>*</span></label>
            <input type="text" class="form-input" id="custCity" placeholder="اسم المدينة" required>
          </div>
        </div>
        <div class="form-group">
          <label>العنوان التفصيلي <span>*</span></label>
          <input type="text" class="form-input" id="custAddress" placeholder="الشارع، رقم المبنى، الشقة..." required>
        </div>
        <div class="form-group">
          <label>ملاحظات (اختياري)</label>
          <textarea class="form-input" id="custNotes" placeholder="أي ملاحظات خاصة بطلبك..." rows="2" style="resize:vertical"></textarea>
        </div>
        
        <div class="order-summary">
          <h4><i class="fas fa-receipt" style="color:var(--gold)"></i> ملخص الطلب</h4>
          <div id="checkoutItems"></div>
          <div class="summary-item">
            <span>الشحن</span>
            <span id="checkoutShipping">50 جنيه</span>
          </div>
          <div class="summary-total">
            <span>الإجمالي</span>
            <span id="checkoutTotal">0 جنيه</span>
          </div>
        </div>
        
        <div style="background:var(--cream);border-radius:12px;padding:14px;margin-bottom:20px;display:flex;align-items:center;gap:10px">
          <i class="fas fa-truck" style="color:var(--gold);font-size:20px"></i>
          <div>
            <div style="font-weight:700;font-size:13px">الدفع عند الاستلام</div>
            <div style="font-size:12px;color:var(--gray)">الدفع كاش عند وصول الطلب</div>
          </div>
        </div>
        
        <button type="submit" class="place-order-btn" id="placeOrderBtn">
          <i class="fas fa-check-circle"></i> تأكيد الطلب
        </button>
      </form>
    </div>
  </div>
</div>

<!-- SUCCESS MODAL -->
<div class="modal-overlay" id="successModal">
  <div class="success-modal" id="successContent"></div>
</div>

<!-- TOAST -->
<div class="toast-container" id="toastContainer"></div>

<!-- WHATSAPP -->
<a href="https://wa.me/201000000000" target="_blank" class="wa-float" title="تواصلي معنا عبر واتساب">
  <i class="fab fa-whatsapp"></i>
</a>

<script>
// ============================================================
// CONFIG
// ============================================================
const SUPABASE_URL = 'https://wuvoudelairlhcehrdec.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1dm91ZGVsYWlybGhjZWhyZGVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0MzczMjAsImV4cCI6MjA5MzAxMzMyMH0.wIMc7mo_vtdZnU8bXpOC7rl09V8_rDdCBJG95YfS40Q';
const WA_NUMBER = '201000000000';

// ============================================================
// STATE
// ============================================================
let allProducts = [];
let filteredProducts = [];
let displayedCount = 0;
const PER_PAGE = 12;
let cart = JSON.parse(localStorage.getItem('as_cart') || '[]');
let currentCategory = 'all';
let currentFilter = 'all';
let currentSort = 'default';
let selectedProduct = null;
let selectedQty = 1;
let shippingCost = 50;

// ============================================================
// API
// ============================================================
async function apiFetch(endpoint, options = {}) {
  const res = await fetch(SUPABASE_URL + endpoint, {
    ...options,
    headers: {
      'apikey': SUPABASE_ANON_KEY,
      'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
      'Content-Type': 'application/json',
      'Prefer': options.prefer || 'return=representation',
      ...options.headers
    }
  });
  const text = await res.text();
  if (!text) return [];
  try { return JSON.parse(text); } catch { return []; }
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', async () => {
  await Promise.all([loadCategories(), loadProducts()]);
  updateCartUI();
});

// ============================================================
// CATEGORIES
// ============================================================
async function loadCategories() {
  const cats = await apiFetch('/rest/v1/categories?select=*,products(count)&is_active=eq.true&order=sort_order');
  const grid = document.getElementById('categoriesGrid');
  if (!cats || !cats.length) { grid.innerHTML = '<p style="text-align:center;color:var(--gray)">لا توجد فئات</p>'; return; }
  grid.innerHTML = cats.map(cat => \`
    <a href="#products" class="category-card" onclick="filterByCategory('\${cat.slug}', null)">
      <div class="cat-img">
        <img src="\${cat.image_url || 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80'}" 
             alt="\${cat.name_ar}" loading="lazy"
             onerror="this.src='https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&q=80'">
        <div class="cat-overlay"></div>
      </div>
      <div class="cat-info">
        <span class="cat-name">\${cat.name_ar}</span>
        <span class="cat-count">\${cat.products?.[0]?.count || 0} منتج</span>
      </div>
    </a>
  \`).join('');
}

// ============================================================
// PRODUCTS
// ============================================================
async function loadProducts() {
  showProductSkeletons();
  const products = await apiFetch('/rest/v1/products?select=*,categories(name_ar,slug)&is_active=eq.true&order=created_at.desc');
  allProducts = products || [];
  filteredProducts = [...allProducts];
  applyFiltersAndSort();
}

function showProductSkeletons() {
  const grid = document.getElementById('productsGrid');
  grid.innerHTML = Array(8).fill('').map(() => \`
    <div style="background:white;border-radius:20px;overflow:hidden;box-shadow:var(--shadow)">
      <div class="skeleton" style="width:100%;aspect-ratio:1"></div>
      <div style="padding:18px">
        <div class="skeleton" style="height:12px;width:60%;margin-bottom:8px;border-radius:6px"></div>
        <div class="skeleton" style="height:16px;width:90%;margin-bottom:8px;border-radius:6px"></div>
        <div class="skeleton" style="height:12px;width:70%;margin-bottom:16px;border-radius:6px"></div>
        <div class="skeleton" style="height:40px;border-radius:12px"></div>
      </div>
    </div>
  \`).join('');
}

function applyFiltersAndSort() {
  let products = [...allProducts];

  // Category filter
  if (currentCategory !== 'all') {
    products = products.filter(p => p.categories?.slug === currentCategory || p.category_id === currentCategory);
  }

  // Tag filter
  if (currentFilter === 'new') products = products.filter(p => p.is_new);
  else if (currentFilter === 'sale') products = products.filter(p => p.sale_price);
  else if (currentFilter === 'featured') products = products.filter(p => p.is_featured);

  // Sort
  if (currentSort === 'price-asc') products.sort((a,b) => (a.sale_price || a.price) - (b.sale_price || b.price));
  else if (currentSort === 'price-desc') products.sort((a,b) => (b.sale_price || b.price) - (a.sale_price || a.price));
  else if (currentSort === 'newest') products.sort((a,b) => new Date(b.created_at) - new Date(a.created_at));

  filteredProducts = products;
  displayedCount = 0;
  renderProducts(true);
}

function renderProducts(reset = false) {
  const grid = document.getElementById('productsGrid');
  const slice = filteredProducts.slice(0, displayedCount + PER_PAGE);
  displayedCount = slice.length;

  if (filteredProducts.length === 0) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px 20px"><i class="fas fa-box-open" style="font-size:56px;color:var(--border);display:block;margin-bottom:16px"></i><p style="color:var(--gray);font-size:16px;font-weight:600">لا توجد منتجات في هذه الفئة</p></div>';
    document.getElementById('loadMoreBtn').style.display = 'none';
    return;
  }

  if (reset) {
    grid.innerHTML = slice.map(renderProductCard).join('');
  } else {
    grid.innerHTML += filteredProducts.slice(displayedCount - PER_PAGE, displayedCount).map(renderProductCard).join('');
  }

  const btn = document.getElementById('loadMoreBtn');
  btn.style.display = displayedCount < filteredProducts.length ? 'inline-flex' : 'none';
}

function renderProductCard(p) {
  const price = p.sale_price ? p.sale_price : p.price;
  const discountPct = p.sale_price ? Math.round((1 - p.sale_price/p.price)*100) : 0;
  const img = p.thumbnail || (p.images && p.images[0]) || 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80';
  const catName = p.categories?.name_ar || '';
  
  return \`
    <div class="product-card" onclick="openProductModal(\${p.id})">
      <div class="product-badges">
        \${p.is_new ? '<span class="badge badge-new">جديد</span>' : ''}
        \${p.sale_price ? '<span class="badge badge-sale">-\${discountPct}%</span>' : ''}
        \${p.is_featured ? '<span class="badge badge-featured">⭐ مميز</span>' : ''}
      </div>
      <div class="product-actions">
        <button class="action-btn" onclick="event.stopPropagation(); shareProduct(\${p.id})" title="مشاركة">
          <i class="fas fa-share-alt"></i>
        </button>
        <button class="action-btn" onclick="event.stopPropagation(); quickWhatsApp(\${p.id})" title="واتساب">
          <i class="fab fa-whatsapp" style="color:#25D366"></i>
        </button>
      </div>
      <div class="product-img">
        <img src="\${img}" alt="\${p.name_ar}" loading="lazy"
             onerror="this.src='https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=600&q=80'">
      </div>
      <div class="product-info">
        \${catName ? \`<div class="product-category">\${catName}</div>\` : ''}
        <div class="product-name">\${p.name_ar}</div>
        <div class="product-material"><i class="fas fa-shield-alt"></i> \${p.material || 'Stainless Steel'}</div>
        <div class="product-footer">
          <div class="product-price">
            <span class="price-current">\${formatPrice(price)}</span>
            \${p.sale_price ? \`<span class="price-old">\${formatPrice(p.price)}</span>\` : ''}
          </div>
          <button class="add-cart-btn" onclick="event.stopPropagation(); addToCart(\${p.id})" title="أضف للسلة">
            <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
  \`;
}

function loadMoreProducts() {
  renderProducts(false);
}

// ============================================================
// FILTERS
// ============================================================
function filterByCategory(slug, el) {
  currentCategory = slug;
  // Update nav
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  if (el) el.classList.add('active');
  // Update title
  const titles = {
    all: 'أحدث الإكسسوارات', rings: 'الخواتم', necklaces: 'القلايد',
    bracelets: 'الأساور', earrings: 'الحلق', sets: 'الطقم', anklets: 'الخلاخيل'
  };
  document.getElementById('productsTitle').textContent = titles[slug] || 'المنتجات';
  applyFiltersAndSort();
  document.getElementById('products').scrollIntoView({behavior:'smooth'});
}

function filterFeatured(el) {
  currentCategory = 'all';
  currentFilter = 'featured';
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  if (el) el.classList.add('active');
  document.getElementById('productsTitle').textContent = 'الأكثر مبيعاً';
  applyFiltersAndSort();
  document.getElementById('products').scrollIntoView({behavior:'smooth'});
}

function setFilter(f, el) {
  currentFilter = f;
  document.querySelectorAll('.filter-tag').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
  applyFiltersAndSort();
}

function sortProducts(val) {
  currentSort = val;
  applyFiltersAndSort();
}

function handleSearch(q) {
  if (!q) {
    filteredProducts = [...allProducts];
  } else {
    const low = q.toLowerCase();
    filteredProducts = allProducts.filter(p =>
      p.name_ar.includes(q) || p.name?.toLowerCase().includes(low) ||
      (p.description_ar && p.description_ar.includes(q)) ||
      (p.categories?.name_ar && p.categories.name_ar.includes(q))
    );
  }
  displayedCount = 0;
  renderProducts(true);
  document.getElementById('products').scrollIntoView({behavior:'smooth'});
}

// ============================================================
// PRODUCT MODAL
// ============================================================
async function openProductModal(id) {
  const product = allProducts.find(p => p.id === id);
  if (!product) return;
  selectedProduct = product;
  selectedQty = 1;

  const price = product.sale_price || product.price;
  const discountPct = product.sale_price ? Math.round((1 - product.sale_price/product.price)*100) : 0;
  const imgs = product.images?.length ? product.images : [product.thumbnail || 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=800&q=80'];
  const catName = product.categories?.name_ar || 'إكسسوارات';

  document.getElementById('modalMainImg').src = imgs[0];

  document.getElementById('modalThumbs').innerHTML = imgs.length > 1 ?
    imgs.map((img, i) => \`<img class="img-thumb \${i===0?'active':''}" src="\${img}" alt="" onclick="changeModalImg('\${img}', this)">\`).join('') : '';

  document.getElementById('modalInfo').innerHTML = \`
    <div class="modal-category">\${catName}</div>
    <h2 class="modal-name">\${product.name_ar}</h2>
    <div class="modal-rating">
      <div class="stars">★★★★★</div>
      <span class="rating-count">(مراجعات العملاء)</span>
    </div>
    <div class="modal-price-row">
      <span class="modal-price">\${formatPrice(price)}</span>
      \${product.sale_price ? \`
        <span class="modal-price-old">\${formatPrice(product.price)}</span>
        <span class="modal-discount">خصم \${discountPct}%</span>
      \` : ''}
    </div>
    \${product.description_ar ? \`<div class="modal-desc">\${product.description_ar}</div>\` : ''}
    <div class="modal-meta">
      <div class="meta-item">
        <span class="meta-label">الخامة</span>
        <div class="meta-value">\${product.material || 'Stainless Steel'}</div>
      </div>
      <div class="meta-item">
        <span class="meta-label">الحالة</span>
        <div class="meta-value" style="color:\${product.stock_quantity > 0 ? '#25D366' : '#E63946'}">
          \${product.stock_quantity > 0 ? '✅ متاح' : '❌ غير متاح'}
        </div>
      </div>
      \${product.sku ? \`<div class="meta-item">
        <span class="meta-label">الكود</span>
        <div class="meta-value">\${product.sku}</div>
      </div>\` : ''}
      <div class="meta-item">
        <span class="meta-label">الشحن</span>
        <div class="meta-value">50 جنيه</div>
      </div>
    </div>
    <div class="modal-qty-row">
      <span class="modal-qty-label">الكمية:</span>
      <div class="modal-qty-controls">
        <button class="modal-qty-btn" onclick="changeQty(-1)">-</button>
        <span class="modal-qty-num" id="modalQtyNum">1</span>
        <button class="modal-qty-btn" onclick="changeQty(1)">+</button>
      </div>
    </div>
    <div class="modal-btns">
      <button class="modal-cart-btn" onclick="addToCartFromModal()">
        <i class="fas fa-shopping-cart"></i> أضف للسلة
      </button>
      <button class="modal-wa-btn" onclick="quickWhatsApp(\${product.id})" title="اطلب عبر واتساب">
        <i class="fab fa-whatsapp"></i>
      </button>
    </div>
  \`;

  document.getElementById('productModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function changeModalImg(src, el) {
  document.getElementById('modalMainImg').src = src;
  document.querySelectorAll('.img-thumb').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
}

function changeQty(delta) {
  selectedQty = Math.max(1, selectedQty + delta);
  const el = document.getElementById('modalQtyNum');
  if (el) el.textContent = selectedQty;
}

function closeProductModal(e) {
  if (e.target === e.currentTarget) closeModal(e.currentTarget.id);
}

function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}

// ============================================================
// CART
// ============================================================
function addToCart(productId) {
  const product = allProducts.find(p => p.id === productId);
  if (!product) return;
  
  const existing = cart.find(i => i.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      id: product.id,
      name: product.name_ar,
      price: product.sale_price || product.price,
      img: product.thumbnail || product.images?.[0] || 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=300&q=80',
      qty: 1
    });
  }
  
  saveCart();
  updateCartUI();
  showToast('تمت الإضافة إلى السلة! 🛍️', 'success');
}

function addToCartFromModal() {
  if (!selectedProduct) return;
  const existing = cart.find(i => i.id === selectedProduct.id);
  if (existing) {
    existing.qty += selectedQty;
  } else {
    cart.push({
      id: selectedProduct.id,
      name: selectedProduct.name_ar,
      price: selectedProduct.sale_price || selectedProduct.price,
      img: selectedProduct.thumbnail || selectedProduct.images?.[0] || 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=300&q=80',
      qty: selectedQty
    });
  }
  saveCart();
  updateCartUI();
  closeModal('productModal');
  toggleCart();
  showToast(\`تمت إضافة \${selectedQty} قطعة إلى السلة! 🛍️\`, 'success');
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function saveCart() {
  localStorage.setItem('as_cart', JSON.stringify(cart));
}

function updateCartUI() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById('cartBadge');
  badge.textContent = total;
  badge.style.display = total > 0 ? 'flex' : 'none';
}

function toggleCart() {
  const overlay = document.getElementById('cartOverlay');
  const isOpen = overlay.classList.contains('open');
  if (isOpen) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  } else {
    renderCartItems();
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  
  if (!cart.length) {
    container.innerHTML = \`
      <div class="empty-cart">
        <i class="fas fa-shopping-bag"></i>
        <p>سلة التسوق فارغة</p>
        <p style="font-size:14px;margin-top:8px">ابدئي التسوق وأضيفي منتجاتك المفضلة</p>
      </div>
    \`;
    footer.style.display = 'none';
    return;
  }
  
  container.innerHTML = cart.map(item => \`
    <div class="cart-item">
      <img class="cart-item-img" src="\${item.img}" alt="\${item.name}"
           onerror="this.src='https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=300&q=80'">
      <div class="cart-item-info">
        <div class="cart-item-name">\${item.name}</div>
        <div class="cart-item-price">\${formatPrice(item.price)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateCartQty(\${item.id}, -1)">-</button>
          <span class="qty-num">\${item.qty}</span>
          <button class="qty-btn" onclick="updateCartQty(\${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-del" onclick="removeFromCart(\${item.id})"><i class="fas fa-trash"></i></button>
    </div>
  \`).join('');
  
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const total = subtotal + shippingCost;
  
  document.getElementById('cartSubtotal').textContent = formatPrice(subtotal);
  document.getElementById('cartShipping').textContent = subtotal >= 500 ? 'مجاناً 🎉' : formatPrice(shippingCost);
  document.getElementById('cartTotal').textContent = formatPrice(subtotal >= 500 ? subtotal : total);
  footer.style.display = 'block';
}

// ============================================================
// CHECKOUT
// ============================================================
function openCheckout() {
  if (!cart.length) return;
  toggleCart();
  
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal >= 500 ? 0 : shippingCost;
  const total = subtotal + shipping;
  
  document.getElementById('checkoutItems').innerHTML = cart.map(item => \`
    <div class="summary-item">
      <span>\${item.name} × \${item.qty}</span>
      <span>\${formatPrice(item.price * item.qty)}</span>
    </div>
  \`).join('') + \`
    <div class="summary-item">
      <span>المجموع الجزئي</span>
      <span>\${formatPrice(subtotal)}</span>
    </div>
  \`;
  
  document.getElementById('checkoutShipping').textContent = shipping === 0 ? 'مجاناً 🎉' : formatPrice(shipping);
  document.getElementById('checkoutTotal').textContent = formatPrice(total);
  
  document.getElementById('checkoutModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function updateShipping() {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal >= 500 ? 0 : shippingCost;
  document.getElementById('checkoutShipping').textContent = shipping === 0 ? 'مجاناً 🎉' : formatPrice(shipping);
  document.getElementById('checkoutTotal').textContent = formatPrice(subtotal + shipping);
}

async function placeOrder(e) {
  e.preventDefault();
  const btn = document.getElementById('placeOrderBtn');
  btn.disabled = true;
  btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري تأكيد الطلب...';
  
  const name = document.getElementById('custName').value;
  const phone = document.getElementById('custPhone').value;
  const email = document.getElementById('custEmail').value;
  const gov = document.getElementById('custGov').value;
  const city = document.getElementById('custCity').value;
  const address = document.getElementById('custAddress').value;
  const notes = document.getElementById('custNotes').value;
  
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal >= 500 ? 0 : shippingCost;
  const total = subtotal + shipping;
  const orderNum = 'AS-' + Date.now().toString().slice(-8);
  
  const orderData = {
    order_number: orderNum,
    customer_name: name,
    customer_phone: phone,
    customer_email: email || null,
    customer_address: address,
    customer_city: city,
    customer_governorate: gov,
    notes: notes || null,
    items: cart,
    subtotal: subtotal,
    shipping_cost: shipping,
    total: total,
    status: 'pending',
    payment_method: 'cash_on_delivery',
    payment_status: 'unpaid'
  };
  
  try {
    const res = await fetch(SUPABASE_URL + '/rest/v1/orders', {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': 'Bearer ' + SUPABASE_ANON_KEY,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify(orderData)
    });
    
    if (res.ok) {
      cart = [];
      saveCart();
      updateCartUI();
      closeModal('checkoutModal');
      
      document.getElementById('successContent').innerHTML = \`
        <div class="success-icon"><i class="fas fa-check"></i></div>
        <h3>تم تأكيد طلبك! 🎉</h3>
        <p>شكراً لثقتك في A S Accessories</p>
        <p>سيتم التواصل معك قريباً لتأكيد التفاصيل</p>
        <div class="success-order-num">رقم الطلب: \${orderNum}</div>
        <p style="font-size:13px;color:var(--gray)">احتفظي برقم الطلب للمتابعة</p>
        <div style="display:flex;gap:12px;justify-content:center;margin-top:24px">
          <a href="https://wa.me/\${WA_NUMBER}?text=طلبت من موقعكم ورقم طلبي: \${orderNum}" 
             target="_blank" class="btn-primary" style="font-size:14px;padding:12px 24px">
            <i class="fab fa-whatsapp"></i> تواصل عبر واتساب
          </a>
          <button onclick="closeModal('successModal')" class="btn-outline" style="color:var(--dark);font-size:14px;padding:12px 24px">
            متابعة التسوق
          </button>
        </div>
      \`;
      
      document.getElementById('successModal').classList.add('open');
      document.body.style.overflow = 'hidden';
    } else {
      throw new Error('Order failed');
    }
  } catch (err) {
    showToast('حدث خطأ، يرجى المحاولة مرة أخرى', 'error');
    btn.disabled = false;
    btn.innerHTML = '<i class="fas fa-check-circle"></i> تأكيد الطلب';
  }
}

// ============================================================
// UTILITIES
// ============================================================
function formatPrice(p) {
  return Number(p).toLocaleString('ar-EG') + ' جنيه';
}

function showToast(msg, type = '') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = \`toast \${type}\`;
  const icons = { success: 'fa-check-circle', error: 'fa-exclamation-circle', '': 'fa-info-circle' };
  toast.innerHTML = \`<i class="fas \${icons[type] || 'fa-info-circle'}"></i> \${msg}\`;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(120%)'; setTimeout(() => toast.remove(), 400); }, 3500);
}

function quickWhatsApp(productId) {
  const p = allProducts.find(x => x.id === productId);
  if (!p) return;
  const price = p.sale_price || p.price;
  const msg = encodeURIComponent(\`مرحباً! أنا مهتمة بشراء:\n📦 \${p.name_ar}\n💰 السعر: \${formatPrice(price)}\nهل متاح؟\`);
  window.open(\`https://wa.me/\${WA_NUMBER}?text=\${msg}\`, '_blank');
}

function shareProduct(productId) {
  const p = allProducts.find(x => x.id === productId);
  if (!p) return;
  if (navigator.share) {
    navigator.share({ title: p.name_ar, text: \`شوفي \${p.name_ar} من A S Accessories\`, url: window.location.href });
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => showToast('تم نسخ الرابط!'));
  }
}

function subscribeNewsletter(e) {
  e.preventDefault();
  showToast('تم الاشتراك بنجاح! 💌', 'success');
  e.target.reset();
}
</script>
</body>
</html>`;
}

function getAdminPage() {
  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>لوحة التحكم | A S Accessories</title>
<link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">
<style>
:root{--gold:#C9A84C;--gold-dark:#9C7A2E;--dark:#1A1A1A;--dark2:#242424;--green:#25D366;--red:#E63946;--blue:#4361EE;--orange:#F4A261;--white:#FFFFFF;--cream:#F9F7F2;--border:rgba(201,168,76,0.2);--shadow:0 2px 12px rgba(0,0,0,0.08)}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Cairo',sans-serif;background:var(--cream);color:var(--dark);direction:rtl;min-height:100vh}
/* LOGIN */
.login-page{min-height:100vh;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--dark),var(--dark2))}
.login-card{background:white;border-radius:24px;padding:40px;width:380px;box-shadow:0 20px 60px rgba(0,0,0,0.3);text-align:center}
.login-logo{font-size:48px;margin-bottom:16px}
.login-title{font-size:22px;font-weight:900;color:var(--dark);margin-bottom:6px}
.login-sub{font-size:13px;color:#999;margin-bottom:32px}
.login-input{width:100%;padding:12px 16px;border:2px solid var(--border);border-radius:12px;font-family:'Cairo',sans-serif;font-size:14px;outline:none;margin-bottom:14px;transition:all 0.3s;background:var(--cream)}
.login-input:focus{border-color:var(--gold);background:white}
.login-btn{width:100%;padding:14px;background:linear-gradient(135deg,var(--gold),var(--gold-dark));color:white;border:none;border-radius:12px;font-family:'Cairo',sans-serif;font-size:16px;font-weight:800;cursor:pointer;transition:all 0.3s}
.login-btn:hover{transform:translateY(-2px);box-shadow:0 8px 25px rgba(201,168,76,0.4)}
.login-err{color:var(--red);font-size:13px;margin-top:10px;display:none}
/* ADMIN */
.admin-layout{display:flex;min-height:100vh}
.sidebar{width:260px;background:var(--dark);flex-shrink:0;display:flex;flex-direction:column;position:sticky;top:0;height:100vh;overflow-y:auto}
.sidebar-logo{padding:24px;border-bottom:1px solid rgba(255,255,255,0.1);display:flex;align-items:center;gap:12px}
.sidebar-logo .icon{width:44px;height:44px;background:linear-gradient(135deg,var(--gold),var(--gold-dark));border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0}
.sidebar-logo .name{font-size:15px;font-weight:800;color:white;line-height:1.2}
.sidebar-logo .sub{font-size:11px;color:var(--gold);font-weight:600}
.sidebar-nav{padding:16px 0;flex:1}
.nav-section{padding:8px 20px;font-size:11px;font-weight:700;color:#666;letter-spacing:1.5px;text-transform:uppercase;margin-top:8px}
.sidebar-link{display:flex;align-items:center;gap:12px;padding:12px 20px;color:#999;text-decoration:none;font-size:14px;font-weight:600;transition:all 0.2s;border-right:3px solid transparent;cursor:pointer}
.sidebar-link:hover,.sidebar-link.active{background:rgba(201,168,76,0.1);color:var(--gold);border-right-color:var(--gold)}
.sidebar-link i{width:20px;text-align:center;font-size:16px}
.sidebar-bottom{padding:16px;border-top:1px solid rgba(255,255,255,0.1)}
.main-area{flex:1;overflow-y:auto}
.topbar{background:white;padding:16px 28px;display:flex;align-items:center;justify-content:space-between;box-shadow:var(--shadow);position:sticky;top:0;z-index:100;border-bottom:3px solid var(--gold)}
.topbar-title{font-size:20px;font-weight:800;color:var(--dark)}
.topbar-actions{display:flex;gap:10px;align-items:center}
.topbar-btn{padding:9px 18px;border-radius:10px;font-family:'Cairo',sans-serif;font-size:13px;font-weight:700;cursor:pointer;border:none;transition:all 0.2s;display:flex;align-items:center;gap:6px}
.btn-gold{background:linear-gradient(135deg,var(--gold),var(--gold-dark));color:white;box-shadow:0 4px 15px rgba(201,168,76,0.3)}
.btn-gold:hover{transform:translateY(-2px)}
.btn-red{background:#FFE5E5;color:var(--red)}
.btn-red:hover{background:var(--red);color:white}
.btn-green{background:#E5F9EE;color:var(--green)}
.btn-green:hover{background:var(--green);color:white}
.btn-blue{background:#EEF2FF;color:var(--blue)}
.btn-blue:hover{background:var(--blue);color:white}
.content{padding:28px}
/* STATS */
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;margin-bottom:28px}
.stat-card{background:white;border-radius:18px;padding:24px;box-shadow:var(--shadow);display:flex;align-items:center;gap:16px;border-left:4px solid transparent;transition:all 0.3s}
.stat-card:hover{transform:translateY(-4px);box-shadow:0 8px 30px rgba(0,0,0,0.12)}
.stat-card.gold{border-left-color:var(--gold)}
.stat-card.green{border-left-color:var(--green)}
.stat-card.blue{border-left-color:var(--blue)}
.stat-card.red{border-left-color:var(--red)}
.stat-icon{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0}
.stat-icon.gold{background:rgba(201,168,76,0.15);color:var(--gold)}
.stat-icon.green{background:rgba(37,211,102,0.15);color:var(--green)}
.stat-icon.blue{background:rgba(67,97,238,0.15);color:var(--blue)}
.stat-icon.red{background:rgba(230,57,70,0.15);color:var(--red)}
.stat-value{font-size:26px;font-weight:900;color:var(--dark)}
.stat-label{font-size:12px;color:#999;font-weight:600;margin-top:2px}
/* CARDS */
.card{background:white;border-radius:18px;box-shadow:var(--shadow);margin-bottom:24px;overflow:hidden}
.card-header{padding:20px 24px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between}
.card-title{font-size:16px;font-weight:800;color:var(--dark);display:flex;align-items:center;gap:8px}
.card-body{padding:24px}
/* TABLE */
.data-table{width:100%;border-collapse:collapse}
.data-table th{background:var(--cream);padding:12px 16px;text-align:right;font-size:12px;font-weight:800;color:#666;letter-spacing:0.5px;text-transform:uppercase;white-space:nowrap}
.data-table td{padding:12px 16px;font-size:13px;border-bottom:1px solid var(--border);vertical-align:middle}
.data-table tr:hover td{background:var(--cream)}
.data-table tr:last-child td{border-bottom:none}
/* STATUS */
.status-badge{padding:4px 12px;border-radius:20px;font-size:11px;font-weight:800;display:inline-block}
.status-pending{background:#FFF3CD;color:#856404}
.status-confirmed{background:#D1ECF1;color:#0C5460}
.status-processing{background:#EEF2FF;color:var(--blue)}
.status-shipped{background:#E5F9EE;color:#155724}
.status-delivered{background:#D4EDDA;color:#155724}
.status-cancelled{background:#FFE5E5;color:var(--red)}
/* FORM */
.form-group{margin-bottom:18px}
.form-label{display:block;font-size:13px;font-weight:700;color:var(--dark);margin-bottom:6px}
.form-label span{color:var(--gold)}
.form-ctrl{width:100%;padding:11px 14px;border:2px solid var(--border);border-radius:12px;font-family:'Cairo',sans-serif;font-size:13px;color:var(--dark);background:var(--cream);outline:none;transition:all 0.3s}
.form-ctrl:focus{border-color:var(--gold);background:white}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.form-check{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:600;cursor:pointer}
.form-check input{width:18px;height:18px;accent-color:var(--gold);cursor:pointer}
/* MODAL */
.overlay{position:fixed;inset:0;background:rgba(0,0,0,0.6);z-index:9000;display:none;align-items:center;justify-content:center;padding:20px;backdrop-filter:blur(4px)}
.overlay.open{display:flex}
.modal-box{background:white;border-radius:20px;width:100%;max-width:640px;max-height:90vh;overflow-y:auto;box-shadow:0 20px 60px rgba(0,0,0,0.3)}
.modal-box.wide{max-width:800px}
.modal-head{padding:20px 24px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;background:linear-gradient(135deg,var(--dark),var(--dark2));color:white;border-radius:20px 20px 0 0}
.modal-head h3{font-size:18px;font-weight:800}
.modal-close-btn{width:36px;height:36px;border-radius:10px;border:none;background:rgba(255,255,255,0.15);color:white;font-size:18px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.2s}
.modal-close-btn:hover{background:var(--red)}
.modal-body{padding:24px}
.modal-foot{padding:16px 24px;border-top:1px solid var(--border);display:flex;justify-content:flex-end;gap:12px;background:var(--cream)}
/* PRODUCT IMG */
.product-thumb{width:48px;height:48px;border-radius:10px;object-fit:cover}
/* TABS */
.tab-nav{display:flex;gap:0;border-bottom:2px solid var(--border);margin-bottom:24px}
.tab-btn{padding:10px 24px;font-family:'Cairo',sans-serif;font-size:14px;font-weight:700;border:none;background:none;cursor:pointer;color:#999;border-bottom:3px solid transparent;margin-bottom:-2px;transition:all 0.2s}
.tab-btn.active{color:var(--gold);border-bottom-color:var(--gold)}
/* IMG PREVIEW */
.img-preview{width:100%;height:180px;border-radius:12px;border:2px dashed var(--border);display:flex;align-items:center;justify-content:center;overflow:hidden;position:relative;background:var(--cream)}
.img-preview img{width:100%;height:100%;object-fit:cover}
.img-preview-placeholder{text-align:center;color:#999}
.img-preview-placeholder i{font-size:36px;margin-bottom:8px;display:block}
/* EMPTY */
.empty-state{text-align:center;padding:60px 20px;color:#999}
.empty-state i{font-size:56px;display:block;margin-bottom:16px;opacity:0.4}
/* TOAST */
.admin-toast{position:fixed;bottom:24px;right:24px;background:var(--dark);color:white;padding:14px 20px;border-radius:12px;font-size:13px;font-weight:600;z-index:99999;display:flex;align-items:center;gap:10px;box-shadow:0 8px 30px rgba(0,0,0,0.3);border-right:4px solid var(--gold);animation:slideIn 0.3s ease}
@keyframes slideIn{from{transform:translateX(120%);opacity:0}to{transform:translateX(0);opacity:1}}
/* SEARCH */
.search-input{padding:9px 14px 9px 36px;border:2px solid var(--border);border-radius:10px;font-family:'Cairo',sans-serif;font-size:13px;outline:none;background:var(--cream) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='%23999'%3E%3Cpath d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'/%3E%3C/svg%3E") no-repeat 10px center;width:220px;transition:all 0.3s}
.search-input:focus{border-color:var(--gold);background-color:white;width:280px}
/* RESPONSIVE */
@media(max-width:900px){.sidebar{width:220px}.stats-grid{grid-template-columns:repeat(2,1fr)}}
@media(max-width:640px){.admin-layout{flex-direction:column}.sidebar{width:100%;height:auto;position:relative}.stats-grid{grid-template-columns:1fr 1fr}.content{padding:16px}}
</style>
</head>
<body>

<!-- LOGIN -->
<div id="loginPage" class="login-page">
  <div class="login-card">
    <div class="login-logo">💎</div>
    <div class="login-title">لوحة التحكم</div>
    <div class="login-sub">A S Accessories Dashboard</div>
    <input class="login-input" type="password" id="loginPass" placeholder="كلمة المرور" onkeydown="if(event.key==='Enter')doLogin()">
    <button class="login-btn" onclick="doLogin()">
      <i class="fas fa-sign-in-alt"></i> دخول
    </button>
    <div class="login-err" id="loginErr">كلمة المرور غلط!</div>
  </div>
</div>

<!-- ADMIN -->
<div id="adminPage" class="admin-layout" style="display:none">
  <!-- SIDEBAR -->
  <aside class="sidebar">
    <div class="sidebar-logo">
      <div class="icon">💎</div>
      <div>
        <div class="name">A S Accessories</div>
        <div class="sub">Admin Panel</div>
      </div>
    </div>
    <nav class="sidebar-nav">
      <div class="nav-section">الرئيسية</div>
      <div class="sidebar-link active" onclick="showSection('dashboard')">
        <i class="fas fa-chart-pie"></i> لوحة التحكم
      </div>
      
      <div class="nav-section">المتجر</div>
      <div class="sidebar-link" onclick="showSection('products')">
        <i class="fas fa-box"></i> المنتجات
      </div>
      <div class="sidebar-link" onclick="showSection('categories')">
        <i class="fas fa-tags"></i> الفئات
      </div>
      <div class="sidebar-link" onclick="showSection('orders')">
        <i class="fas fa-shopping-cart"></i> الطلبات
        <span id="pendingBadge" style="margin-right:auto;background:var(--red);color:white;padding:2px 8px;border-radius:20px;font-size:11px;font-weight:800;display:none">0</span>
      </div>
      
      <div class="nav-section">الإعدادات</div>
      <div class="sidebar-link" onclick="showSection('settings')">
        <i class="fas fa-cog"></i> إعدادات المتجر
      </div>
    </nav>
    <div class="sidebar-bottom">
      <a href="/" target="_blank" class="sidebar-link" style="border-right:none;border-radius:10px">
        <i class="fas fa-external-link-alt"></i> عرض المتجر
      </a>
      <div class="sidebar-link" onclick="doLogout()" style="border-right:none;color:var(--red)">
        <i class="fas fa-sign-out-alt"></i> تسجيل الخروج
      </div>
    </div>
  </aside>

  <!-- MAIN -->
  <main class="main-area">
    <div class="topbar">
      <div class="topbar-title" id="pageTitle">لوحة التحكم</div>
      <div class="topbar-actions">
        <span style="font-size:12px;color:#999">مرحباً، Basel 👋</span>
      </div>
    </div>
    <div class="content" id="mainContent"></div>
  </main>
</div>

<!-- PRODUCT MODAL -->
<div class="overlay" id="productModal">
  <div class="modal-box wide">
    <div class="modal-head">
      <h3 id="productModalTitle">إضافة منتج جديد</h3>
      <button class="modal-close-btn" onclick="closeOverlay('productModal')"><i class="fas fa-times"></i></button>
    </div>
    <div class="modal-body">
      <form id="productForm" onsubmit="saveProduct(event)">
        <div class="tab-nav">
          <button type="button" class="tab-btn active" onclick="switchProductTab('basic',this)">المعلومات الأساسية</button>
          <button type="button" class="tab-btn" onclick="switchProductTab('price',this)">السعر والمخزون</button>
          <button type="button" class="tab-btn" onclick="switchProductTab('images',this)">الصور</button>
        </div>
        
        <div id="tabBasic">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">اسم المنتج (عربي) <span>*</span></label>
              <input class="form-ctrl" id="pNameAr" placeholder="مثال: خاتم روز جولد" required>
            </div>
            <div class="form-group">
              <label class="form-label">اسم المنتج (إنجليزي)</label>
              <input class="form-ctrl" id="pName" placeholder="Rose Gold Ring">
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">الوصف</label>
            <textarea class="form-ctrl" id="pDescAr" rows="3" placeholder="وصف المنتج باللغة العربية..."></textarea>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">الفئة <span>*</span></label>
              <select class="form-ctrl" id="pCategory" required>
                <option value="">اختر الفئة</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">الخامة</label>
              <input class="form-ctrl" id="pMaterial" value="Stainless Steel" placeholder="Stainless Steel">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">كود المنتج (SKU)</label>
              <input class="form-ctrl" id="pSku" placeholder="مثال: RNG-001">
            </div>
            <div class="form-group">
              <label class="form-label">الوزن</label>
              <input class="form-ctrl" id="pWeight" placeholder="مثال: 15 جرام">
            </div>
          </div>
          <div style="display:flex;gap:20px;flex-wrap:wrap;margin-top:8px">
            <label class="form-check"><input type="checkbox" id="pActive" checked> <span>منتج نشط</span></label>
            <label class="form-check"><input type="checkbox" id="pFeatured"> <span>منتج مميز ⭐</span></label>
            <label class="form-check"><input type="checkbox" id="pNew" checked> <span>منتج جديد 🆕</span></label>
          </div>
        </div>
        
        <div id="tabPrice" style="display:none">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">السعر الأصلي (جنيه) <span>*</span></label>
              <input class="form-ctrl" type="number" id="pPrice" min="0" step="0.01" placeholder="149.00" required>
            </div>
            <div class="form-group">
              <label class="form-label">سعر الخصم (جنيه)</label>
              <input class="form-ctrl" type="number" id="pSalePrice" min="0" step="0.01" placeholder="اتركه فارغاً إن لم يكن هناك خصم">
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">الكمية المتاحة</label>
            <input class="form-ctrl" type="number" id="pStock" min="0" value="10" placeholder="0">
          </div>
        </div>
        
        <div id="tabImages" style="display:none">
          <div class="form-group">
            <label class="form-label">رابط الصورة الرئيسية (Thumbnail)</label>
            <input class="form-ctrl" id="pThumbnail" placeholder="https://..." oninput="previewMainImg(this.value)">
            <div class="img-preview" style="margin-top:12px" id="thumbPreview">
              <div class="img-preview-placeholder">
                <i class="fas fa-image"></i>
                <div style="font-size:12px">أدخل رابط الصورة</div>
              </div>
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">روابط صور إضافية (سطر واحد لكل رابط)</label>
            <textarea class="form-ctrl" id="pImages" rows="4" placeholder="https://image1.jpg&#10;https://image2.jpg&#10;https://image3.jpg"></textarea>
          </div>
        </div>
      </form>
    </div>
    <div class="modal-foot">
      <button class="topbar-btn btn-red" onclick="closeOverlay('productModal')">
        <i class="fas fa-times"></i> إلغاء
      </button>
      <button class="topbar-btn btn-gold" onclick="document.getElementById('productForm').dispatchEvent(new Event('submit',{bubbles:true,cancelable:true}))">
        <i class="fas fa-save"></i> حفظ المنتج
      </button>
    </div>
  </div>
</div>

<!-- ORDER MODAL -->
<div class="overlay" id="orderModal">
  <div class="modal-box">
    <div class="modal-head">
      <h3>تفاصيل الطلب</h3>
      <button class="modal-close-btn" onclick="closeOverlay('orderModal')"><i class="fas fa-times"></i></button>
    </div>
    <div class="modal-body" id="orderModalBody"></div>
    <div class="modal-foot">
      <button class="topbar-btn btn-red" onclick="closeOverlay('orderModal')">إغلاق</button>
    </div>
  </div>
</div>

<!-- CATEGORY MODAL -->
<div class="overlay" id="categoryModal">
  <div class="modal-box">
    <div class="modal-head">
      <h3 id="catModalTitle">إضافة فئة جديدة</h3>
      <button class="modal-close-btn" onclick="closeOverlay('categoryModal')"><i class="fas fa-times"></i></button>
    </div>
    <div class="modal-body">
      <form id="categoryForm" onsubmit="saveCategory(event)">
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">اسم الفئة (عربي) <span>*</span></label>
            <input class="form-ctrl" id="cNameAr" placeholder="مثال: خواتم" required>
          </div>
          <div class="form-group">
            <label class="form-label">اسم الفئة (إنجليزي) <span>*</span></label>
            <input class="form-ctrl" id="cName" placeholder="Rings" required>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Slug (للرابط) <span>*</span></label>
            <input class="form-ctrl" id="cSlug" placeholder="rings" required>
          </div>
          <div class="form-group">
            <label class="form-label">ترتيب العرض</label>
            <input class="form-ctrl" type="number" id="cOrder" value="0">
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">الوصف</label>
          <textarea class="form-ctrl" id="cDesc" rows="2" placeholder="وصف الفئة..."></textarea>
        </div>
        <div class="form-group">
          <label class="form-label">رابط صورة الفئة</label>
          <input class="form-ctrl" id="cImg" placeholder="https://...">
        </div>
        <label class="form-check"><input type="checkbox" id="cActive" checked> <span>فئة نشطة</span></label>
      </form>
    </div>
    <div class="modal-foot">
      <button class="topbar-btn btn-red" onclick="closeOverlay('categoryModal')">إلغاء</button>
      <button class="topbar-btn btn-gold" onclick="document.getElementById('categoryForm').dispatchEvent(new Event('submit',{bubbles:true,cancelable:true}))">
        <i class="fas fa-save"></i> حفظ
      </button>
    </div>
  </div>
</div>

<script>
const SUPABASE_URL = 'https://wuvoudelairlhcehrdec.supabase.co';
const ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1dm91ZGVsYWlybGhjZWhyZGVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0MzczMjAsImV4cCI6MjA5MzAxMzMyMH0.wIMc7mo_vtdZnU8bXpOC7rl09V8_rDdCBJG95YfS40Q';
const SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind1dm91ZGVsYWlybGhjZWhyZGVjIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc3NzQzNzMyMCwiZXhwIjoyMDkzMDEzMzIwfQ.OItcF3NUP6jz7r9hzNC3nO1Oy73pXwsBn81b_KlHpdQ';

let currentSection = 'dashboard';
let editingProductId = null;
let editingCategoryId = null;
let allProducts = [], allOrders = [], allCategories = [];

// ============================================================
// AUTH
// ============================================================
const ADMIN_PASS = 'Basel.1611';

function doLogin() {
  const pass = document.getElementById('loginPass').value;
  if (pass === ADMIN_PASS) {
    sessionStorage.setItem('admin_auth', '1');
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('adminPage').style.display = 'flex';
    initAdmin();
  } else {
    document.getElementById('loginErr').style.display = 'block';
    setTimeout(() => document.getElementById('loginErr').style.display = 'none', 2000);
  }
}

function doLogout() {
  sessionStorage.removeItem('admin_auth');
  location.reload();
}

// ============================================================
// INIT
// ============================================================
window.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem('admin_auth')) {
    document.getElementById('loginPage').style.display = 'none';
    document.getElementById('adminPage').style.display = 'flex';
    initAdmin();
  }
  document.getElementById('loginPass').addEventListener('keydown', e => {
    if (e.key === 'Enter') doLogin();
  });
});

async function initAdmin() {
  await Promise.all([loadAllProducts(), loadAllOrders(), loadAllCategories()]);
  showSection('dashboard');
}

// ============================================================
// API
// ============================================================
async function api(endpoint, options = {}) {
  const useService = options.useService || false;
  const key = useService ? SERVICE_KEY : ANON_KEY;
  const res = await fetch(SUPABASE_URL + endpoint, {
    ...options,
    headers: {
      'apikey': key,
      'Authorization': 'Bearer ' + key,
      'Content-Type': 'application/json',
      'Prefer': options.prefer || 'return=representation',
      ...options.headers
    }
  });
  const text = await res.text();
  if (!text) return { ok: res.ok, data: [] };
  try { return { ok: res.ok, data: JSON.parse(text) }; } catch { return { ok: res.ok, data: [] }; }
}

async function loadAllProducts() {
  const r = await api('/rest/v1/products?select=*,categories(name_ar,slug)&order=created_at.desc', { useService: true });
  allProducts = r.data || [];
}

async function loadAllOrders() {
  const r = await api('/rest/v1/orders?select=*&order=created_at.desc', { useService: true });
  allOrders = r.data || [];
  const pending = allOrders.filter(o => o.status === 'pending').length;
  const badge = document.getElementById('pendingBadge');
  badge.textContent = pending;
  badge.style.display = pending > 0 ? 'inline-block' : 'none';
}

async function loadAllCategories() {
  const r = await api('/rest/v1/categories?select=*&order=sort_order', { useService: true });
  allCategories = r.data || [];
}

// ============================================================
// NAVIGATION
// ============================================================
function showSection(section) {
  currentSection = section;
  document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
  document.querySelectorAll('.sidebar-link').forEach(l => {
    if (l.textContent.includes(getSectionLabel(section))) l.classList.add('active');
  });
  const titles = {
    dashboard: 'لوحة التحكم', products: 'المنتجات', categories: 'الفئات',
    orders: 'الطلبات', settings: 'إعدادات المتجر'
  };
  document.getElementById('pageTitle').textContent = titles[section] || section;
  const renderers = { dashboard: renderDashboard, products: renderProducts, categories: renderCategories, orders: renderOrders, settings: renderSettings };
  (renderers[section] || renderDashboard)();
}

function getSectionLabel(s) {
  const m = { dashboard: 'لوحة', products: 'المنتجات', categories: 'الفئات', orders: 'الطلبات', settings: 'إعدادات' };
  return m[s] || s;
}

// ============================================================
// DASHBOARD
// ============================================================
function renderDashboard() {
  const revenue = allOrders.filter(o => o.status !== 'cancelled').reduce((s, o) => s + Number(o.total), 0);
  const pending = allOrders.filter(o => o.status === 'pending').length;
  const delivered = allOrders.filter(o => o.status === 'delivered').length;
  
  document.getElementById('mainContent').innerHTML = \`
    <div class="stats-grid">
      <div class="stat-card gold">
        <div class="stat-icon gold"><i class="fas fa-box"></i></div>
        <div>
          <div class="stat-value">\${allProducts.length}</div>
          <div class="stat-label">إجمالي المنتجات</div>
        </div>
      </div>
      <div class="stat-card blue">
        <div class="stat-icon blue"><i class="fas fa-shopping-cart"></i></div>
        <div>
          <div class="stat-value">\${allOrders.length}</div>
          <div class="stat-label">إجمالي الطلبات</div>
        </div>
      </div>
      <div class="stat-card green">
        <div class="stat-icon green"><i class="fas fa-pound-sign"></i></div>
        <div>
          <div class="stat-value">\${Number(revenue).toLocaleString('ar-EG')}</div>
          <div class="stat-label">الإيرادات (جنيه)</div>
        </div>
      </div>
      <div class="stat-card red">
        <div class="stat-icon red"><i class="fas fa-clock"></i></div>
        <div>
          <div class="stat-value">\${pending}</div>
          <div class="stat-label">طلبات معلقة</div>
        </div>
      </div>
    </div>
    
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px">
      <div class="card">
        <div class="card-header">
          <div class="card-title"><i class="fas fa-shopping-cart" style="color:var(--gold)"></i> أحدث الطلبات</div>
          <button class="topbar-btn btn-blue" onclick="showSection('orders')" style="font-size:12px;padding:7px 14px">عرض الكل</button>
        </div>
        <div class="card-body" style="padding:0">
          <table class="data-table">
            <thead><tr><th>رقم الطلب</th><th>العميل</th><th>الإجمالي</th><th>الحالة</th></tr></thead>
            <tbody>
              \${allOrders.slice(0,5).map(o => \`
                <tr style="cursor:pointer" onclick="viewOrder(\${o.id})">
                  <td style="font-weight:700">\${o.order_number}</td>
                  <td>\${o.customer_name}</td>
                  <td style="color:var(--gold-dark);font-weight:700">\${Number(o.total).toLocaleString()} ج</td>
                  <td><span class="status-badge status-\${o.status}">\${getStatusLabel(o.status)}</span></td>
                </tr>
              \`).join('') || '<tr><td colspan="4" style="text-align:center;padding:30px;color:#999">لا توجد طلبات بعد</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="card">
        <div class="card-header">
          <div class="card-title"><i class="fas fa-box" style="color:var(--gold)"></i> أحدث المنتجات</div>
          <button class="topbar-btn btn-gold" onclick="openProductModal()" style="font-size:12px;padding:7px 14px">+ إضافة</button>
        </div>
        <div class="card-body" style="padding:0">
          <table class="data-table">
            <thead><tr><th>الصورة</th><th>المنتج</th><th>السعر</th><th>المخزون</th></tr></thead>
            <tbody>
              \${allProducts.slice(0,5).map(p => \`
                <tr>
                  <td><img class="product-thumb" src="\${p.thumbnail || 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=100&q=60'}" 
                       onerror="this.src='https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=100&q=60'" alt=""></td>
                  <td style="font-weight:600">\${p.name_ar}</td>
                  <td style="color:var(--gold-dark);font-weight:700">\${Number(p.sale_price || p.price).toLocaleString()} ج</td>
                  <td>
                    <span style="color:\${p.stock_quantity > 5 ? 'var(--green)' : p.stock_quantity > 0 ? 'var(--orange)' : 'var(--red)'}; font-weight:700">
                      \${p.stock_quantity}
                    </span>
                  </td>
                </tr>
              \`).join('') || '<tr><td colspan="4" style="text-align:center;padding:30px;color:#999">لا توجد منتجات</td></tr>'}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    
    <div class="card" style="margin-top:24px">
      <div class="card-header">
        <div class="card-title"><i class="fas fa-chart-bar" style="color:var(--gold)"></i> إحصائيات الطلبات</div>
      </div>
      <div class="card-body">
        <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:16px;text-align:center">
          \${[
            ['معلق','pending','#FFC107'],['مؤكد','confirmed','#17A2B8'],
            ['قيد التجهيز','processing','var(--blue)'],['تم الشحن','shipped','#6F42C1'],
            ['تم التسليم','delivered','var(--green)']
          ].map(([label, status, color]) => {
            const count = allOrders.filter(o => o.status === status).length;
            return \`<div style="background:var(--cream);border-radius:14px;padding:20px">
              <div style="font-size:26px;font-weight:900;color:\${color}">\${count}</div>
              <div style="font-size:12px;color:#999;margin-top:4px">\${label}</div>
            </div>\`;
          }).join('')}
        </div>
      </div>
    </div>
  \`;
}

// ============================================================
// PRODUCTS
// ============================================================
function renderProducts() {
  document.getElementById('mainContent').innerHTML = \`
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
      <input class="search-input" placeholder="ابحث في المنتجات..." oninput="filterProductsTable(this.value)">
      <button class="topbar-btn btn-gold" onclick="openProductModal()">
        <i class="fas fa-plus"></i> إضافة منتج جديد
      </button>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="card-title"><i class="fas fa-box" style="color:var(--gold)"></i> كل المنتجات (\${allProducts.length})</div>
      </div>
      <div style="overflow-x:auto">
        <table class="data-table" id="productsTable">
          <thead>
            <tr>
              <th>الصورة</th><th>المنتج</th><th>الفئة</th>
              <th>السعر</th><th>المخزون</th><th>الحالة</th><th>إجراءات</th>
            </tr>
          </thead>
          <tbody id="productsTableBody">
            \${renderProductsRows(allProducts)}
          </tbody>
        </table>
      </div>
    </div>
  \`;
}

function renderProductsRows(products) {
  if (!products.length) return '<tr><td colspan="7" style="text-align:center;padding:40px;color:#999"><i class="fas fa-box-open" style="font-size:36px;display:block;margin-bottom:10px;opacity:0.3"></i>لا توجد منتجات</td></tr>';
  return products.map(p => \`
    <tr>
      <td><img class="product-thumb" src="\${p.thumbnail || 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=100&q=60'}" 
           onerror="this.src='https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=100&q=60'" alt="\${p.name_ar}"></td>
      <td>
        <div style="font-weight:700;font-size:13px">\${p.name_ar}</div>
        \${p.sku ? \`<div style="font-size:11px;color:#999">\${p.sku}</div>\` : ''}
      </td>
      <td style="color:var(--gold);font-weight:600">\${p.categories?.name_ar || '-'}</td>
      <td>
        <div style="font-weight:800;color:var(--gold-dark)">\${Number(p.sale_price || p.price).toLocaleString()} ج</div>
        \${p.sale_price ? \`<div style="font-size:11px;color:#999;text-decoration:line-through">\${Number(p.price).toLocaleString()} ج</div>\` : ''}
      </td>
      <td>
        <span style="font-weight:700;color:\${p.stock_quantity > 5 ? 'var(--green)' : p.stock_quantity > 0 ? 'var(--orange)' : 'var(--red)'}">
          \${p.stock_quantity}
        </span>
      </td>
      <td>
        <span class="status-badge" style="background:\${p.is_active ? '#D4EDDA' : '#FFE5E5'};color:\${p.is_active ? '#155724' : 'var(--red)'}">
          \${p.is_active ? '✅ نشط' : '❌ مخفي'}
        </span>
      </td>
      <td>
        <div style="display:flex;gap:6px">
          <button class="topbar-btn btn-blue" onclick="editProduct(\${p.id})" style="font-size:12px;padding:6px 12px">
            <i class="fas fa-edit"></i>
          </button>
          <button class="topbar-btn btn-red" onclick="deleteProduct(\${p.id})" style="font-size:12px;padding:6px 12px">
            <i class="fas fa-trash"></i>
          </button>
        </div>
      </td>
    </tr>
  \`).join('');
}

function filterProductsTable(q) {
  const filtered = allProducts.filter(p =>
    p.name_ar.includes(q) || p.name?.toLowerCase().includes(q.toLowerCase()) ||
    (p.sku && p.sku.toLowerCase().includes(q.toLowerCase())) ||
    (p.categories?.name_ar && p.categories.name_ar.includes(q))
  );
  document.getElementById('productsTableBody').innerHTML = renderProductsRows(filtered);
}

function openProductModal(id = null) {
  editingProductId = id;
  document.getElementById('productModalTitle').textContent = id ? 'تعديل المنتج' : 'إضافة منتج جديد';
  
  // Fill categories
  const catSelect = document.getElementById('pCategory');
  catSelect.innerHTML = '<option value="">اختر الفئة</option>' + 
    allCategories.map(c => \`<option value="\${c.id}">\${c.name_ar}</option>\`).join('');
  
  // Reset form
  ['pNameAr','pName','pDescAr','pMaterial','pSku','pWeight','pThumbnail','pImages'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  document.getElementById('pPrice').value = '';
  document.getElementById('pSalePrice').value = '';
  document.getElementById('pStock').value = '10';
  document.getElementById('pActive').checked = true;
  document.getElementById('pFeatured').checked = false;
  document.getElementById('pNew').checked = true;
  document.getElementById('pMaterial').value = 'Stainless Steel';
  document.getElementById('thumbPreview').innerHTML = '<div class="img-preview-placeholder"><i class="fas fa-image"></i><div style="font-size:12px">أدخل رابط الصورة</div></div>';
  
  if (id) {
    const p = allProducts.find(x => x.id === id);
    if (p) {
      document.getElementById('pNameAr').value = p.name_ar || '';
      document.getElementById('pName').value = p.name || '';
      document.getElementById('pDescAr').value = p.description_ar || '';
      document.getElementById('pCategory').value = p.category_id || '';
      document.getElementById('pMaterial').value = p.material || 'Stainless Steel';
      document.getElementById('pSku').value = p.sku || '';
      document.getElementById('pWeight').value = p.weight || '';
      document.getElementById('pPrice').value = p.price || '';
      document.getElementById('pSalePrice').value = p.sale_price || '';
      document.getElementById('pStock').value = p.stock_quantity || 0;
      document.getElementById('pActive').checked = p.is_active;
      document.getElementById('pFeatured').checked = p.is_featured;
      document.getElementById('pNew').checked = p.is_new;
      document.getElementById('pThumbnail').value = p.thumbnail || '';
      document.getElementById('pImages').value = (p.images || []).join('\\n');
      if (p.thumbnail) previewMainImg(p.thumbnail);
    }
  }
  
  switchProductTab('basic', document.querySelector('.tab-btn'));
  document.getElementById('productModal').classList.add('open');
}

function switchProductTab(tab, btn) {
  ['Basic','Price','Images'].forEach(t => document.getElementById('tab'+t).style.display = 'none');
  document.getElementById('tab' + tab.charAt(0).toUpperCase() + tab.slice(1)).style.display = 'block';
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

function previewMainImg(url) {
  const preview = document.getElementById('thumbPreview');
  if (url) {
    preview.innerHTML = \`<img src="\${url}" onerror="this.parentNode.innerHTML='<div class=img-preview-placeholder><i class=fas fa-exclamation-triangle></i><div style=font-size:12px>رابط غير صحيح</div></div>'">\`;
  }
}

async function saveProduct(e) {
  e.preventDefault();
  const data = {
    name_ar: document.getElementById('pNameAr').value,
    name: document.getElementById('pName').value || document.getElementById('pNameAr').value,
    description_ar: document.getElementById('pDescAr').value || null,
    category_id: Number(document.getElementById('pCategory').value) || null,
    material: document.getElementById('pMaterial').value || 'Stainless Steel',
    sku: document.getElementById('pSku').value || null,
    weight: document.getElementById('pWeight').value || null,
    price: Number(document.getElementById('pPrice').value),
    sale_price: document.getElementById('pSalePrice').value ? Number(document.getElementById('pSalePrice').value) : null,
    stock_quantity: Number(document.getElementById('pStock').value) || 0,
    is_active: document.getElementById('pActive').checked,
    is_featured: document.getElementById('pFeatured').checked,
    is_new: document.getElementById('pNew').checked,
    thumbnail: document.getElementById('pThumbnail').value || null,
    images: document.getElementById('pImages').value.split('\\n').filter(s => s.trim()).map(s => s.trim()),
    updated_at: new Date().toISOString()
  };
  
  let result;
  if (editingProductId) {
    result = await api(\`/rest/v1/products?id=eq.\${editingProductId}\`, {
      method: 'PATCH', body: JSON.stringify(data), prefer: 'return=representation', useService: true
    });
  } else {
    result = await api('/rest/v1/products', {
      method: 'POST', body: JSON.stringify(data), prefer: 'return=representation', useService: true
    });
  }
  
  if (result.ok) {
    closeOverlay('productModal');
    await loadAllProducts();
    renderProducts();
    showAdminToast(editingProductId ? 'تم تحديث المنتج ✅' : 'تم إضافة المنتج ✅');
  } else {
    showAdminToast('حدث خطأ، تحقق من البيانات', 'error');
  }
}

async function editProduct(id) {
  openProductModal(id);
}

async function deleteProduct(id) {
  const p = allProducts.find(x => x.id === id);
  if (!confirm(\`هل تريد حذف "\${p?.name_ar}"؟\`)) return;
  const r = await api(\`/rest/v1/products?id=eq.\${id}\`, { method: 'DELETE', useService: true });
  if (r.ok) {
    await loadAllProducts();
    renderProducts();
    showAdminToast('تم حذف المنتج');
  }
}

// ============================================================
// CATEGORIES
// ============================================================
function renderCategories() {
  document.getElementById('mainContent').innerHTML = \`
    <div style="display:flex;justify-content:flex-end;margin-bottom:20px">
      <button class="topbar-btn btn-gold" onclick="openCategoryModal()">
        <i class="fas fa-plus"></i> إضافة فئة جديدة
      </button>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="card-title"><i class="fas fa-tags" style="color:var(--gold)"></i> الفئات (\${allCategories.length})</div>
      </div>
      <div style="overflow-x:auto">
        <table class="data-table">
          <thead><tr><th>الصورة</th><th>الاسم</th><th>Slug</th><th>الترتيب</th><th>الحالة</th><th>إجراءات</th></tr></thead>
          <tbody>
            \${allCategories.map(cat => \`
              <tr>
                <td><img class="product-thumb" src="\${cat.image_url || 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=100&q=60'}" 
                     onerror="this.src='https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=100&q=60'" alt=""></td>
                <td>
                  <div style="font-weight:700">\${cat.name_ar}</div>
                  <div style="font-size:11px;color:#999">\${cat.name}</div>
                </td>
                <td style="font-family:monospace;font-size:12px;color:var(--blue)">\${cat.slug}</td>
                <td style="text-align:center;font-weight:700">\${cat.sort_order}</td>
                <td>
                  <span class="status-badge" style="background:\${cat.is_active ? '#D4EDDA' : '#FFE5E5'};color:\${cat.is_active ? '#155724' : 'var(--red)'}">
                    \${cat.is_active ? '✅ نشطة' : '❌ مخفية'}
                  </span>
                </td>
                <td>
                  <div style="display:flex;gap:6px">
                    <button class="topbar-btn btn-blue" onclick="editCategory(\${cat.id})" style="font-size:12px;padding:6px 12px"><i class="fas fa-edit"></i></button>
                    <button class="topbar-btn btn-red" onclick="deleteCategory(\${cat.id})" style="font-size:12px;padding:6px 12px"><i class="fas fa-trash"></i></button>
                  </div>
                </td>
              </tr>
            \`).join('') || '<tr><td colspan="6" style="text-align:center;padding:40px;color:#999">لا توجد فئات</td></tr>'}
          </tbody>
        </table>
      </div>
    </div>
  \`;
}

function openCategoryModal(id = null) {
  editingCategoryId = id;
  document.getElementById('catModalTitle').textContent = id ? 'تعديل الفئة' : 'إضافة فئة جديدة';
  ['cNameAr','cName','cSlug','cDesc','cImg'].forEach(fid => { const el = document.getElementById(fid); if(el) el.value = ''; });
  document.getElementById('cOrder').value = '0';
  document.getElementById('cActive').checked = true;
  if (id) {
    const cat = allCategories.find(c => c.id === id);
    if (cat) {
      document.getElementById('cNameAr').value = cat.name_ar || '';
      document.getElementById('cName').value = cat.name || '';
      document.getElementById('cSlug').value = cat.slug || '';
      document.getElementById('cDesc').value = cat.description || '';
      document.getElementById('cImg').value = cat.image_url || '';
      document.getElementById('cOrder').value = cat.sort_order || 0;
      document.getElementById('cActive').checked = cat.is_active;
    }
  }
  document.getElementById('categoryModal').classList.add('open');
}

async function saveCategory(e) {
  e.preventDefault();
  const data = {
    name_ar: document.getElementById('cNameAr').value,
    name: document.getElementById('cName').value,
    slug: document.getElementById('cSlug').value.toLowerCase().replace(/\s+/g,'-'),
    description: document.getElementById('cDesc').value || null,
    image_url: document.getElementById('cImg').value || null,
    sort_order: Number(document.getElementById('cOrder').value) || 0,
    is_active: document.getElementById('cActive').checked
  };
  let r;
  if (editingCategoryId) {
    r = await api(\`/rest/v1/categories?id=eq.\${editingCategoryId}\`, { method: 'PATCH', body: JSON.stringify(data), prefer: 'return=representation', useService: true });
  } else {
    r = await api('/rest/v1/categories', { method: 'POST', body: JSON.stringify(data), prefer: 'return=representation', useService: true });
  }
  if (r.ok) {
    closeOverlay('categoryModal');
    await loadAllCategories();
    renderCategories();
    showAdminToast('تم حفظ الفئة ✅');
  } else {
    showAdminToast('خطأ: تأكد أن الـ slug فريد', 'error');
  }
}

async function editCategory(id) { openCategoryModal(id); }

async function deleteCategory(id) {
  const cat = allCategories.find(c => c.id === id);
  if (!confirm(\`هل تريد حذف "\${cat?.name_ar}"؟\`)) return;
  const r = await api(\`/rest/v1/categories?id=eq.\${id}\`, { method: 'DELETE', useService: true });
  if (r.ok) { await loadAllCategories(); renderCategories(); showAdminToast('تم حذف الفئة'); }
}

// ============================================================
// ORDERS
// ============================================================
function renderOrders() {
  document.getElementById('mainContent').innerHTML = \`
    <div style="display:flex;gap:12px;align-items:center;margin-bottom:20px;flex-wrap:wrap">
      <input class="search-input" placeholder="ابحث بالاسم أو رقم الطلب..." oninput="filterOrdersTable(this.value)">
      <select onchange="filterOrdersByStatus(this.value)" style="padding:9px 14px;border:2px solid var(--border);border-radius:10px;font-family:'Cairo',sans-serif;font-size:13px;background:white;outline:none">
        <option value="">كل الحالات</option>
        <option value="pending">معلق</option>
        <option value="confirmed">مؤكد</option>
        <option value="processing">قيد التجهيز</option>
        <option value="shipped">تم الشحن</option>
        <option value="delivered">تم التسليم</option>
        <option value="cancelled">ملغي</option>
      </select>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="card-title"><i class="fas fa-shopping-cart" style="color:var(--gold)"></i> الطلبات (\${allOrders.length})</div>
      </div>
      <div style="overflow-x:auto">
        <table class="data-table" id="ordersTable">
          <thead>
            <tr><th>رقم الطلب</th><th>العميل</th><th>الهاتف</th><th>المحافظة</th><th>الإجمالي</th><th>الحالة</th><th>التاريخ</th><th>إجراءات</th></tr>
          </thead>
          <tbody id="ordersTableBody">
            \${renderOrdersRows(allOrders)}
          </tbody>
        </table>
      </div>
    </div>
  \`;
}

function renderOrdersRows(orders) {
  if (!orders.length) return '<tr><td colspan="8" style="text-align:center;padding:40px;color:#999">لا توجد طلبات</td></tr>';
  return orders.map(o => \`
    <tr style="cursor:pointer" onclick="viewOrder(\${o.id})">
      <td style="font-weight:800;color:var(--blue)">\${o.order_number}</td>
      <td style="font-weight:600">\${o.customer_name}</td>
      <td dir="ltr" style="font-family:monospace">\${o.customer_phone}</td>
      <td>\${o.customer_governorate}</td>
      <td style="font-weight:800;color:var(--gold-dark)">\${Number(o.total).toLocaleString()} ج</td>
      <td><span class="status-badge status-\${o.status}">\${getStatusLabel(o.status)}</span></td>
      <td style="font-size:12px;color:#999">\${new Date(o.created_at).toLocaleDateString('ar-EG')}</td>
      <td onclick="event.stopPropagation()">
        <select onchange="updateOrderStatus(\${o.id}, this.value)" style="padding:5px 10px;border:1px solid var(--border);border-radius:8px;font-family:'Cairo',sans-serif;font-size:12px;cursor:pointer">
          \${['pending','confirmed','processing','shipped','delivered','cancelled'].map(s => \`<option value="\${s}" \${s===o.status?'selected':''}>\${getStatusLabel(s)}</option>\`).join('')}
        </select>
      </td>
    </tr>
  \`).join('');
}

function filterOrdersTable(q) {
  const filtered = allOrders.filter(o =>
    o.order_number.toLowerCase().includes(q.toLowerCase()) ||
    o.customer_name.includes(q) || o.customer_phone.includes(q) ||
    o.customer_governorate.includes(q)
  );
  document.getElementById('ordersTableBody').innerHTML = renderOrdersRows(filtered);
}

function filterOrdersByStatus(status) {
  const filtered = status ? allOrders.filter(o => o.status === status) : allOrders;
  document.getElementById('ordersTableBody').innerHTML = renderOrdersRows(filtered);
}

function viewOrder(id) {
  const o = allOrders.find(x => x.id === id);
  if (!o) return;
  const items = Array.isArray(o.items) ? o.items : (typeof o.items === 'string' ? JSON.parse(o.items) : []);
  document.getElementById('orderModalBody').innerHTML = \`
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px">
      <div><div style="font-size:11px;color:#999;font-weight:700">رقم الطلب</div><div style="font-weight:800;color:var(--blue)">\${o.order_number}</div></div>
      <div><div style="font-size:11px;color:#999;font-weight:700">الحالة</div><span class="status-badge status-\${o.status}">\${getStatusLabel(o.status)}</span></div>
      <div><div style="font-size:11px;color:#999;font-weight:700">الاسم</div><div style="font-weight:700">\${o.customer_name}</div></div>
      <div><div style="font-size:11px;color:#999;font-weight:700">الهاتف</div><div dir="ltr" style="font-weight:700">\${o.customer_phone}</div></div>
      <div><div style="font-size:11px;color:#999;font-weight:700">المحافظة</div><div>\${o.customer_governorate}</div></div>
      <div><div style="font-size:11px;color:#999;font-weight:700">المدينة</div><div>\${o.customer_city}</div></div>
      <div style="grid-column:1/-1"><div style="font-size:11px;color:#999;font-weight:700">العنوان</div><div>\${o.customer_address}</div></div>
      \${o.notes ? \`<div style="grid-column:1/-1"><div style="font-size:11px;color:#999;font-weight:700">ملاحظات</div><div style="color:#666">\${o.notes}</div></div>\` : ''}
    </div>
    <div style="background:var(--cream);border-radius:12px;padding:16px;margin-bottom:16px">
      <div style="font-weight:800;margin-bottom:12px">المنتجات المطلوبة:</div>
      \${items.map(i => \`
        <div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border)">
          <span>\${i.name} × \${i.qty}</span>
          <span style="font-weight:700;color:var(--gold-dark)">\${Number(i.price * i.qty).toLocaleString()} ج</span>
        </div>
      \`).join('')}
      <div style="display:flex;justify-content:space-between;padding:8px 0;color:#999">
        <span>الشحن</span><span>\${Number(o.shipping_cost).toLocaleString()} ج</span>
      </div>
      <div style="display:flex;justify-content:space-between;font-size:18px;font-weight:900;color:var(--dark);padding-top:10px;border-top:2px solid var(--border);margin-top:4px">
        <span>الإجمالي</span><span style="color:var(--gold-dark)">\${Number(o.total).toLocaleString()} ج</span>
      </div>
    </div>
    <div style="display:flex;gap:10px;flex-wrap:wrap">
      <a href="https://wa.me/\${o.customer_phone.replace(/\\D/g,'')}?text=مرحباً \${o.customer_name}! طلبك رقم \${o.order_number} من A S Accessories" 
         target="_blank" class="topbar-btn btn-green">
        <i class="fab fa-whatsapp"></i> تواصل مع العميل
      </a>
      <div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:13px;font-weight:700">تغيير الحالة:</span>
        <select onchange="updateOrderStatus(\${o.id}, this.value)" style="padding:8px 14px;border:2px solid var(--border);border-radius:10px;font-family:'Cairo',sans-serif;font-size:13px">
          \${['pending','confirmed','processing','shipped','delivered','cancelled'].map(s => \`<option value="\${s}" \${s===o.status?'selected':''}>\${getStatusLabel(s)}</option>\`).join('')}
        </select>
      </div>
    </div>
  \`;
  document.getElementById('orderModal').classList.add('open');
}

async function updateOrderStatus(id, status) {
  const r = await api(\`/rest/v1/orders?id=eq.\${id}\`, {
    method: 'PATCH',
    body: JSON.stringify({ status, updated_at: new Date().toISOString() }),
    prefer: 'return=minimal',
    useService: true
  });
  if (r.ok) {
    await loadAllOrders();
    renderOrders();
    showAdminToast('تم تحديث حالة الطلب ✅');
  }
}

function getStatusLabel(s) {
  const m = { pending:'معلق', confirmed:'مؤكد', processing:'قيد التجهيز', shipped:'تم الشحن', delivered:'تم التسليم', cancelled:'ملغي', returned:'مرتجع' };
  return m[s] || s;
}

// ============================================================
// SETTINGS
// ============================================================
async function renderSettings() {
  const r = await api('/rest/v1/settings?select=*', { useService: true });
  const settings = {};
  (r.data || []).forEach(s => settings[s.key] = s.value);
  
  document.getElementById('mainContent').innerHTML = \`
    <div class="card">
      <div class="card-header">
        <div class="card-title"><i class="fas fa-cog" style="color:var(--gold)"></i> إعدادات المتجر</div>
      </div>
      <div class="card-body">
        <form onsubmit="saveSettings(event)">
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">اسم المتجر (عربي)</label>
              <input class="form-ctrl" id="sNameAr" value="\${settings.store_name_ar || 'A S اكسسوارات'}">
            </div>
            <div class="form-group">
              <label class="form-label">اسم المتجر (إنجليزي)</label>
              <input class="form-ctrl" id="sName" value="\${settings.store_name || 'A S Accessories'}">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">رقم واتساب</label>
              <input class="form-ctrl" id="sWa" value="\${settings.whatsapp_number || ''}" placeholder="201000000000">
            </div>
            <div class="form-group">
              <label class="form-label">البريد الإلكتروني</label>
              <input class="form-ctrl" id="sEmail" value="\${settings.store_email || ''}">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">رقم الهاتف</label>
              <input class="form-ctrl" id="sPhone" value="\${settings.store_phone || ''}">
            </div>
            <div class="form-group">
              <label class="form-label">العنوان</label>
              <input class="form-ctrl" id="sAddress" value="\${settings.store_address || ''}">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label class="form-label">تكلفة الشحن (جنيه)</label>
              <input class="form-ctrl" type="number" id="sShipping" value="\${settings.shipping_cost || '50'}">
            </div>
            <div class="form-group">
              <label class="form-label">حد الشحن المجاني (جنيه)</label>
              <input class="form-ctrl" type="number" id="sFreeShipping" value="\${settings.free_shipping_min || '500'}">
            </div>
          </div>
          <div class="form-group">
            <label class="form-label">رابط صفحة الفيسبوك</label>
            <input class="form-ctrl" id="sFb" value="\${settings.store_facebook || ''}">
          </div>
          <div style="display:flex;justify-content:flex-end;margin-top:8px">
            <button type="submit" class="topbar-btn btn-gold" style="font-size:15px;padding:12px 28px">
              <i class="fas fa-save"></i> حفظ الإعدادات
            </button>
          </div>
        </form>
      </div>
    </div>
  \`;
}

async function saveSettings(e) {
  e.preventDefault();
  const updates = [
    ['store_name_ar', document.getElementById('sNameAr').value],
    ['store_name', document.getElementById('sName').value],
    ['whatsapp_number', document.getElementById('sWa').value],
    ['store_email', document.getElementById('sEmail').value],
    ['store_phone', document.getElementById('sPhone').value],
    ['store_address', document.getElementById('sAddress').value],
    ['shipping_cost', document.getElementById('sShipping').value],
    ['free_shipping_min', document.getElementById('sFreeShipping').value],
    ['store_facebook', document.getElementById('sFb').value],
  ];
  for (const [key, value] of updates) {
    await api(\`/rest/v1/settings?key=eq.\${key}\`, {
      method: 'PATCH', body: JSON.stringify({ value }), prefer: 'return=minimal', useService: true
    });
  }
  showAdminToast('تم حفظ الإعدادات ✅');
}

// ============================================================
// UTIL
// ============================================================
function closeOverlay(id) { document.getElementById(id).classList.remove('open'); }

function showAdminToast(msg, type = '') {
  const t = document.createElement('div');
  t.className = 'admin-toast';
  t.style.borderRightColor = type === 'error' ? 'var(--red)' : 'var(--green)';
  t.innerHTML = \`<i class="fas fa-\${type==='error'?'exclamation-circle':'check-circle'}" style="color:\${type==='error'?'var(--red)':'var(--green)'}"></i> \${msg}\`;
  document.body.appendChild(t);
  setTimeout(() => { t.style.opacity='0'; t.style.transform='translateX(120%)'; setTimeout(()=>t.remove(),400); }, 3000);
}
</script>
</body>
</html>`;
}

export default app
