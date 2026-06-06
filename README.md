# Movie App

Ứng dụng mobile xem phim được xây dựng bằng **React Native + Expo + TypeScript**.

---

## 1. Tạo project

```bash
npx create-expo-app@latest app_mobile --template blank-typescript
cd app_mobile
```

---

## 2. Cài thư viện cần thiết

```bash
npm install -D typescript @types/react
npm install axios

npx expo install @react-native-async-storage/async-storage
npx expo install @expo/vector-icons
npx expo install expo-font
npx expo install expo-image-picker
npx expo install expo-location
npx expo install react-native-safe-area-context

npm install @react-navigation/native
npm install @react-navigation/native-stack
npx expo install react-native-screens react-native-safe-area-context

npm install -D prettier
```

---

## 3. Chức năng từng thư viện

| Thư viện | Chức năng |
|---|---|
| `typescript` | Hỗ trợ viết code TypeScript |
| `@types/react` | Bổ sung kiểu dữ liệu cho React |
| `axios` | Gọi API từ backend |
| `AsyncStorage` | Lưu token, user, trạng thái đăng nhập |
| `@expo/vector-icons` | Dùng icon trong app |
| `expo-font` | Load font chữ custom |
| `expo-image-picker` | Chọn ảnh từ thư viện hoặc camera |
| `expo-location` | Lấy vị trí người dùng |
| `safe-area-context` | Tránh giao diện dính tai thỏ/status bar |
| `React Navigation` | Chuyển màn hình |
| `prettier` | Tự động format code |

---

## 4. Cấu trúc project đề xuất

```text
app_mobile/
│
├── App.tsx
├── index.ts
├── app.json
├── package.json
├── tsconfig.json
│
├── assets/
│
└── src/
    ├── components/
    ├── screens/
    ├── navigation/
    ├── services/
    ├── hooks/
    ├── utils/
    ├── constants/
    └── types/
```

---

## 5. Tạo thư mục src

```bash
mkdir src
cd src
mkdir components screens navigation services hooks utils constants types
cd ..
```

Giải thích ngắn:

| Thư mục | Chức năng |
|---|---|
| `components` | Component dùng lại |
| `screens` | Các màn hình chính |
| `navigation` | Cấu hình chuyển màn hình |
| `services` | File gọi API |
| `hooks` | Custom hooks |
| `utils` | Hàm xử lý phụ |
| `constants` | Màu sắc, config cố định |
| `types` | Type/interface TypeScript |

---

## 6. Tự format code khi Ctrl + S

Cài extension trong VS Code:

```text
Prettier - Code formatter
```

Mở `settings.json` của VS Code rồi thêm:
(Open User Settings)
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

Format thủ công toàn bộ code:

```bash
npx prettier --write .
```

---

## 7. Chạy app

Chạy bình thường:

```bash
npx expo start
```

Nếu điện thoại không quét được QR hoặc không kết nối được thì chạy:

```bash
npm install --global @expo/ngrok@^4.1.0
npx expo start --tunnel

npx expo start --lan
```

Sau đó mở **Expo Go** trên điện thoại và quét lại QR.

---

## 8. Lỗi TypeScript JSX

Nếu bị lỗi:

```text
Module './App' was resolved to 'App.tsx', but '--jsx' is not set.
```

Sửa file `tsconfig.json`:

```json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "jsx": "react-native"
  }
}
```

Sau đó trong VS Code bấm:

```text
Ctrl + Shift + P
```

Gõ:

```text
TypeScript: Restart TS Server
```