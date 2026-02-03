# UI 組件庫

這是家族辦公室網站的基礎 UI 組件庫，基於 Tailwind CSS 和 Framer Motion 構建。

## 📦 可用組件

### Button - 按鈕組件

功能完整的按鈕組件，支援多種變體、尺寸和狀態。

```tsx
import { Button } from '@/components/ui'

// 基本使用
<Button>點擊我</Button>

// 不同變體
<Button variant="primary">主要按鈕</Button>
<Button variant="secondary">次要按鈕</Button>
<Button variant="outline">外框按鈕</Button>
<Button variant="ghost">幽靈按鈕</Button>
<Button variant="danger">危險按鈕</Button>

// 不同尺寸
<Button size="sm">小按鈕</Button>
<Button size="md">中按鈕</Button>
<Button size="lg">大按鈕</Button>

// 載入狀態
<Button isLoading>載入中...</Button>

// 全寬
<Button fullWidth>全寬按鈕</Button>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
- `size`: 'sm' | 'md' | 'lg'
- `isLoading`: boolean
- `fullWidth`: boolean
- 支援所有原生 button 屬性

---

### Input - 輸入框組件

帶有標籤、驗證狀態和錯誤訊息的輸入框。

```tsx
import { Input } from '@/components/ui'

// 基本使用
<Input
  label="姓名"
  placeholder="請輸入姓名"
/>

// 必填欄位
<Input
  label="Email"
  type="email"
  required
  placeholder="name@example.com"
/>

// 帶驗證狀態
<Input
  label="密碼"
  type="password"
  error="密碼至少需要 8 個字元"
/>

<Input
  label="用戶名"
  isValid={true}
  helperText="用戶名可用"
/>
```

**Props:**
- `label`: string - 標籤文字
- `error`: string - 錯誤訊息
- `helperText`: string - 輔助文字
- `isValid`: boolean - 成功狀態
- `fullWidth`: boolean - 預設 true
- 支援所有原生 input 屬性

---

### Card - 卡片組件

靈活的卡片容器，包含多個子組件。

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui'

<Card variant="default">
  <CardHeader>
    <CardTitle>卡片標題</CardTitle>
    <CardDescription>卡片描述文字</CardDescription>
  </CardHeader>
  <CardContent>
    <p>卡片內容區域</p>
  </CardContent>
  <CardFooter>
    <Button>動作按鈕</Button>
  </CardFooter>
</Card>
```

**Props:**
- `variant`: 'default' | 'bordered' | 'elevated'
- `padding`: 'none' | 'sm' | 'md' | 'lg'
- `hover`: boolean - 預設 true（懸停效果）

---

### Modal - 彈窗組件

帶有動畫效果的模態對話框。

```tsx
'use client' // 必須標記為客戶端組件

import { useState } from 'react'
import { Modal, ModalFooter, Button } from '@/components/ui'

function MyComponent() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        打開彈窗
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="彈窗標題"
        description="描述文字"
        size="md"
      >
        <p>彈窗內容</p>

        <ModalFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)}>
            取消
          </Button>
          <Button onClick={() => setIsOpen(false)}>
            確認
          </Button>
        </ModalFooter>
      </Modal>
    </>
  )
}
```

**Props:**
- `isOpen`: boolean - 控制顯示
- `onClose`: () => void - 關閉回調
- `title`: string - 標題
- `description`: string - 描述
- `size`: 'sm' | 'md' | 'lg' | 'xl'
- `showCloseButton`: boolean - 預設 true
- `closeOnOverlayClick`: boolean - 預設 true

**特性:**
- ESC 鍵關閉
- 點擊遮罩關閉（可配置）
- 防止背景滾動
- Framer Motion 動畫

---

### Badge - 標籤組件

用於顯示狀態、標籤或計數。

```tsx
import { Badge } from '@/components/ui'

<Badge>Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>
<Badge variant="info">Info</Badge>

// 不同尺寸
<Badge size="sm">Small</Badge>
<Badge size="md">Medium</Badge>
<Badge size="lg">Large</Badge>
```

**Props:**
- `variant`: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
- `size`: 'sm' | 'md' | 'lg'

---

### ProgressBar - 進度條組件

用於顯示進度，支援動畫。

```tsx
'use client' // 必須標記為客戶端組件

import { ProgressBar } from '@/components/ui'

<ProgressBar
  value={60}
  label="完成度"
  showLabel={true}
/>

<ProgressBar
  value={80}
  variant="success"
  size="lg"
  animated={true}
/>
```

**Props:**
- `value`: number - 當前值（0-100）
- `max`: number - 最大值（預設 100）
- `size`: 'sm' | 'md' | 'lg'
- `variant`: 'default' | 'success' | 'warning' | 'danger'
- `showLabel`: boolean - 顯示標籤
- `label`: string - 自訂標籤文字
- `animated`: boolean - 預設 true

---

## 🎨 設計系統

### 色彩
- **Primary**: 溫暖藍 (#4a90e2)
- **Accent**: 溫暖綠 (#5cccaa)
- **Neutral**: 灰階

### 圓角
- `rounded-button`: 0.5rem（按鈕）
- `rounded-card`: 1rem（卡片）

### 陰影
- `shadow-card`: 標準卡片陰影
- `shadow-card-hover`: 懸停時陰影

---

## 🔧 最佳實踐

### 1. 客戶端組件
使用 `Modal` 和 `ProgressBar` 時，必須在文件頂部添加 `'use client'`：

```tsx
'use client'

import { Modal } from '@/components/ui'
```

### 2. 無障礙設計
所有組件都遵循 WCAG 2.2 AA 標準：
- 鍵盤導航支援
- 適當的 ARIA 標籤
- 足夠的色彩對比度
- Focus 指示器清晰可見

### 3. 響應式設計
組件預設為響應式，在移動裝置上自動調整。

### 4. 自訂樣式
使用 `className` prop 覆蓋樣式：

```tsx
<Button className="custom-class">
  自訂按鈕
</Button>
```

---

## 📝 查看展示頁面

訪問 `/ui-demo` 查看所有組件的完整展示：

```bash
npm run dev
# 然後訪問 http://localhost:3000/ui-demo
```

---

## 🚀 下一步

這些基礎組件將用於構建：
- 引導式問卷系統
- 多步驟預約表單
- 內容下載彈窗
- 電子報訂閱表單

所有組件都經過優化，支援：
- TypeScript 類型安全
- Framer Motion 動畫
- Tailwind CSS 樣式
- 無障礙標準
