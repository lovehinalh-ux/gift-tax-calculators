'use client'

import { useState } from 'react'
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Modal,
  ModalFooter,
  Badge,
  ProgressBar,
} from '@/components/ui'

export default function UIDemo() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [inputError, setInputError] = useState('')
  const [isInputValid, setIsInputValid] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setInputValue(value)

    // 簡單驗證範例
    if (value.length === 0) {
      setInputError('')
      setIsInputValid(false)
    } else if (value.length < 3) {
      setInputError('至少需要 3 個字元')
      setIsInputValid(false)
    } else {
      setInputError('')
      setIsInputValid(true)
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container-fluid">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">UI 組件展示</h1>
            <p className="text-neutral-600">
              這是基礎 UI 組件的展示頁面
            </p>
          </div>

          {/* Buttons */}
          <section>
            <h2 className="text-2xl font-bold mb-6">按鈕組件</h2>
            <Card>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-3">變體</p>
                    <div className="flex flex-wrap gap-3">
                      <Button variant="primary">Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="danger">Danger</Button>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-3">尺寸</p>
                    <div className="flex flex-wrap items-center gap-3">
                      <Button size="sm">Small</Button>
                      <Button size="md">Medium</Button>
                      <Button size="lg">Large</Button>
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-3">狀態</p>
                    <div className="flex flex-wrap gap-3">
                      <Button isLoading>載入中...</Button>
                      <Button disabled>已停用</Button>
                      <Button fullWidth>全寬按鈕</Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Inputs */}
          <section>
            <h2 className="text-2xl font-bold mb-6">輸入框組件</h2>
            <Card>
              <CardContent>
                <div className="space-y-4">
                  <Input
                    label="標準輸入框"
                    placeholder="請輸入內容"
                    helperText="這是輔助文字"
                  />

                  <Input
                    label="必填欄位"
                    placeholder="請輸入內容"
                    required
                  />

                  <Input
                    label="即時驗證"
                    placeholder="輸入至少 3 個字元"
                    value={inputValue}
                    onChange={handleInputChange}
                    error={inputError}
                    isValid={isInputValid}
                  />

                  <Input
                    label="停用狀態"
                    placeholder="已停用"
                    disabled
                  />

                  <Input
                    type="email"
                    label="Email"
                    placeholder="name@example.com"
                  />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Cards */}
          <section>
            <h2 className="text-2xl font-bold mb-6">卡片組件</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card variant="default">
                <CardHeader>
                  <CardTitle>預設卡片</CardTitle>
                  <CardDescription>這是卡片描述文字</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600">卡片內容區域</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" fullWidth>
                    動作按鈕
                  </Button>
                </CardFooter>
              </Card>

              <Card variant="bordered">
                <CardHeader>
                  <CardTitle>邊框卡片</CardTitle>
                  <CardDescription>帶有邊框的樣式</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600">卡片內容區域</p>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardHeader>
                  <CardTitle>懸浮卡片</CardTitle>
                  <CardDescription>較深的陰影效果</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600">卡片內容區域</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Badges */}
          <section>
            <h2 className="text-2xl font-bold mb-6">標籤組件</h2>
            <Card>
              <CardContent>
                <div className="flex flex-wrap gap-3">
                  <Badge>Default</Badge>
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="danger">Danger</Badge>
                  <Badge variant="info">Info</Badge>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <Badge size="sm">Small</Badge>
                  <Badge size="md">Medium</Badge>
                  <Badge size="lg">Large</Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Progress Bars */}
          <section>
            <h2 className="text-2xl font-bold mb-6">進度條組件</h2>
            <Card>
              <CardContent>
                <div className="space-y-6">
                  <ProgressBar value={30} label="預設進度" showLabel />
                  <ProgressBar value={60} variant="success" label="成功狀態" showLabel />
                  <ProgressBar value={80} variant="warning" label="警告狀態" showLabel />
                  <ProgressBar value={100} variant="danger" label="危險狀態" showLabel />
                  <ProgressBar value={45} size="lg" label="大尺寸" showLabel />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Modal */}
          <section>
            <h2 className="text-2xl font-bold mb-6">彈窗組件</h2>
            <Card>
              <CardContent>
                <Button onClick={() => setIsModalOpen(true)}>
                  打開彈窗
                </Button>
              </CardContent>
            </Card>

            <Modal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              title="彈窗標題"
              description="這是彈窗的描述文字"
              size="md"
            >
              <div className="space-y-4">
                <p className="text-neutral-600">
                  這是彈窗的內容區域。您可以在這裡放置任何內容。
                </p>

                <Input
                  label="範例輸入框"
                  placeholder="在彈窗中的輸入框"
                />
              </div>

              <ModalFooter>
                <Button
                  variant="outline"
                  onClick={() => setIsModalOpen(false)}
                >
                  取消
                </Button>
                <Button onClick={() => setIsModalOpen(false)}>
                  確認
                </Button>
              </ModalFooter>
            </Modal>
          </section>
        </div>
      </div>
    </div>
  )
}
