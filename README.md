# A S Accessories Store 💎

## نظرة عامة
متجر إلكتروني احترافي لبراند **A S Accessories** - متخصص في إكسسوارات الستانلس ستيل الحريمي الفاخرة.
شبرا الخيمة، القاهرة، مصر 🇪🇬

---

## 🔗 الروابط المهمة

| الخدمة | الرابط |
|--------|--------|
| 🌐 الموقع الحي | https://as-accessories-store.netlify.app |
| 🛡️ لوحة التحكم | https://as-accessories-store.netlify.app/admin |
| 📦 GitHub Repo | https://github.com/Aaccessoriesstore/as-accessories-store |
| 🗄️ Supabase Dashboard | https://supabase.com/dashboard/project/wuvoudelairlhcehrdec |
| 📘 صفحة فيسبوك | https://www.facebook.com/people/A-S-accessories/61578616294623/ |

---

## ✅ المميزات المكتملة

### صفحة المتجر الرئيسية
- ✅ هيرو سكشن مع صور إكسسوارات فاخرة
- ✅ بار الفئات (خواتم / قلايد / أساور / حلق / طقم / خلاخيل)
- ✅ تصفية وفرز المنتجات ديناميكياً
- ✅ كارت منتج احترافي مع صورة + سعر + زر إضافة للسلة
- ✅ مودال تفاصيل المنتج
- ✅ سلة تسوق جانبية (Drawer)
- ✅ نموذج طلب كامل (اسم + عنوان + هاتف)
- ✅ زر واتساب عائم + روابط تواصل اجتماعي
- ✅ قسم التقييمات
- ✅ نشرة بريدية
- ✅ فوتر كامل مع معلومات المتجر
- ✅ Toast notifications احترافية
- ✅ تصميم responsive لجميع الشاشات
- ✅ RTL عربي كامل

### لوحة التحكم Admin
- ✅ تسجيل دخول محمي بكلمة سر
- ✅ Dashboard مع إحصائيات المنتجات / الطلبات / الفئات
- ✅ إدارة المنتجات (إضافة / تعديل / حذف)
- ✅ إدارة الطلبات (عرض / تغيير الحالة)
- ✅ إدارة الفئات
- ✅ إعدادات المتجر (اسم / واتساب / عنوان / شحن)
- ✅ رفع صور المنتجات بالرابط

---

## 🗄️ قاعدة البيانات - Supabase

**Project:** as-accessories-store  
**URL:** https://wuvoudelairlhcehrdec.supabase.co

### الجداول
| الجدول | الوصف | العدد |
|--------|-------|-------|
| `products` | المنتجات | 30 منتج |
| `categories` | الفئات | 6 فئات |
| `orders` | الطلبات | 0 (جاهز) |
| `settings` | إعدادات المتجر | 11 إعداد |
| `reviews` | التقييمات | - |
| `coupons` | كوبونات خصم | - |
| `banners` | بانرات الموقع | - |

### المنتجات حسب الفئة
- 🔵 خواتم: 6 منتجات
- 💎 قلايد: 6 منتجات
- ✨ أساور: 5 منتجات
- 💫 حلق: 5 منتجات
- 👑 طقم: 5 منتجات
- 🌟 خلاخيل: 3 منتجات

---

## 🔐 بيانات الوصول

### لوحة التحكم
- **URL:** https://as-accessories-store.netlify.app/admin
- **كلمة السر:** `Basel.1611`

### Supabase API Keys
- **Project Ref:** `wuvoudelairlhcehrdec`
- **Anon Key:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

---

## 🛠️ Stack التقني

| التقنية | الاستخدام |
|---------|-----------|
| **Hono** | Backend framework (Cloudflare Pages/Workers) |
| **TypeScript** | لغة البرمجة |
| **Supabase** | قاعدة البيانات PostgreSQL |
| **Netlify** | استضافة الموقع |
| **TailwindCSS-like** | تصميم CSS مخصص |
| **Font Awesome** | الأيقونات |
| **Google Fonts (Cairo)** | خط عربي |
| **GitHub** | إدارة الكود |

---

## 📁 هيكل المشروع

```
webapp/
├── src/
│   └── index.tsx          # كود الموقع الكامل (متجر + admin)
├── public/
│   └── static/
│       ├── style.css      # CSS إضافي
│       ├── favicon.svg    # أيقونة الموقع
│       └── favicon.ico
├── dist/                  # Build output
│   ├── _worker.js        # Cloudflare Worker
│   └── _routes.json
├── netlify.toml           # إعدادات Netlify
├── ecosystem.config.cjs   # PM2 للتطوير
├── wrangler.jsonc         # إعدادات Cloudflare
└── README.md
```

---

## 🚀 تشغيل محلياً

```bash
# تثبيت التبعيات
cd /home/user/webapp && npm install

# البناء
npm run build

# التشغيل مع PM2
pm2 start ecosystem.config.cjs

# الاختبار
curl http://localhost:3000
```

---

## 📊 حالة النشر

| المنصة | الحالة | الرابط |
|--------|--------|--------|
| Netlify | ✅ منشور | https://as-accessories-store.netlify.app |
| GitHub | ✅ مرفوع | https://github.com/Aaccessoriesstore/as-accessories-store |
| Supabase | ✅ نشط | https://wuvoudelairlhcehrdec.supabase.co |

**آخر تحديث:** 2026-04-29
