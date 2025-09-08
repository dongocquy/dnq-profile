# DNQ Profile

Dự án profile cá nhân được xây dựng bằng Next.js với TypeScript và Tailwind CSS.

## 🚀 Tính năng

- ⚡ Next.js 14 với App Router
- 🎨 Tailwind CSS cho styling
- 📱 Responsive design
- 🔧 TypeScript support
- 🎯 ESLint configuration
- 🎨 Modern UI components
- 📦 Optimized build

## 🛠️ Công nghệ sử dụng

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Linting**: ESLint
- **Package Manager**: npm

## 📁 Cấu trúc dự án

```
src/
├── app/                 # App Router pages
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/         # Reusable components
│   └── ui/            # UI components
├── lib/               # Library functions
├── types/             # TypeScript type definitions
├── utils/             # Utility functions
├── hooks/             # Custom React hooks
├── services/          # API services
└── styles/            # Additional styles
```

## 🚀 Bắt đầu

### Yêu cầu hệ thống

- Node.js 18+ 
- npm hoặc yarn

### Cài đặt

1. Clone repository:
```bash
git clone <repository-url>
cd dnq-profile
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Tạo file môi trường:
```bash
cp .env.example .env.local
```

4. Cấu hình biến môi trường trong `.env.local`:
```env
NEXT_PUBLIC_APP_NAME=DNQ Profile
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Chạy dự án

**Development mode:**
```bash
npm run dev
```

**Production build:**
```bash
npm run build
npm start
```

**Linting:**
```bash
npm run lint
```

## 📝 Scripts có sẵn

- `npm run dev` - Chạy development server
- `npm run build` - Build dự án cho production
- `npm run start` - Chạy production server
- `npm run lint` - Chạy ESLint
- `npm run type-check` - Kiểm tra TypeScript types

## 🎨 Customization

### Thêm component mới

1. Tạo file trong `src/components/`
2. Export component
3. Import và sử dụng trong pages

### Thay đổi styling

- Sử dụng Tailwind CSS classes
- Tùy chỉnh trong `tailwind.config.js`
- Thêm custom CSS trong `src/app/globals.css`

## 📦 Deployment

Dự án có thể được deploy trên:

- **Vercel** (Recommended)
- **Netlify**
- **Railway**
- **AWS Amplify**

## 🤝 Đóng góp

1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Tạo Pull Request

## 📄 License

Dự án này được phân phối dưới MIT License. Xem `LICENSE` để biết thêm chi tiết.

## 📞 Liên hệ

- **Tác giả**: DNQ
- **Email**: [your-email@example.com]
- **Website**: [your-website.com]

---

Được tạo với ❤️ bằng Next.js
# Trigger deployment
