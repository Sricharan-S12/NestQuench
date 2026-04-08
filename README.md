# NestQuench
 Students struggle to find reliable off-campus housing due to scattered and unverified information . So this webapp helps you to find offcampus housings through our webapp . (for this instance we choose small scale usage for fast building of prototype  i.e our college )

# 🏠 NestMate

> The housing platform built exclusively for **VIT Bhopal students** — find verified PGs, hostels & flats near Ashta, Kotri, and Sehore.

---

## 📌 Overview

NestMate is a student-first housing discovery platform designed for VIT Bhopal students. It helps students find safe, verified accommodations near campus, connect with potential roommates, and gives parents peace of mind through a dedicated portal.

---

## ✨ Features

| Feature | Description |
|---|---|
| 🔍 **Smart Search** | Filter PGs, hostels & flats by price, type, and trust score |
| 🗺️ **VITian Heat Map** | Visualize where students are living across Ashta, Kotri & Sehore |
| 👥 **Find Roommates** | Connect with fellow VITians looking to share accommodation |
| 💬 **Parent Portal** | Parents can directly contact landlords about food, safety & maintenance |
| 📍 **Nearby Amenities** | Explore bus stops, railways, hospitals & shops near campus areas |
| ⭐ **Trust & Reviews** | Anonymous reviews and trust scores to help avoid bad landlords |

---

## 📊 Platform Stats

- **50+** Verified Listings
- **3,000+** VIT Bhopal Students
- **4** Areas Covered
- **98%** Trust Rate

---

## 🛠️ Tech Stack

- **Framework:** React with React Router (`react-router-dom`)
- **UI Components:** Custom component library (`@/components/ui`)
- **Icons:** Lucide React
- **Styling:** Tailwind CSS (utility-first)
- **Data:** Mock data layer (`@/data/mockData`)

---

## 📁 Project Structure

```
src/
├── assets/
│   └── hero-bg.jpg          # Hero section background image
├── components/
│   ├── ui/
│   │   ├── button.tsx
│   │   └── card.tsx
│   └── ListingCard.tsx      # Reusable listing card component
├── data/
│   └── mockData.ts          # Mock listings and data
└── pages/
    └── Index.tsx            # Home page
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or above)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/nestmate.git
cd nestmate

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## 🗺️ Pages & Routes

| Route | Description |
|---|---|
| `/` | Home / Landing page |
| `/listings` | Browse all verified listings |
| `/heatmap` | VITian student heat map |
| `/roommates` | Find & connect with roommates |
| `/parents` | Parent portal |
| `/amenities` | Nearby amenities explorer |

---

## 🎨 Design Highlights

- Warm gradient theme (`gradient-warm`) tailored for a friendly, student-focused feel
- Responsive layout — mobile-first with `sm`, `md`, `lg` breakpoints
- Animated hero section with fade-up effect
- Glassmorphism-style buttons on the hero overlay
- Elevated shadow cards with hover interactions

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m 'Add your feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

> Built with ❤️ for VIT Bhopal students by VITians, for VITians.
