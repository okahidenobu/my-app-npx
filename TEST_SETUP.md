# テスト環境セットアップ

このプロジェクトでは、vitest と React Testing Library を使用したインテグレーションテストが設定されています。

## インストールされたパッケージ

- `vitest`: 高速なテストランナー
- `@vitejs/plugin-react`: React コンポーネントのテストに必要なプラグイン
- `@testing-library/react`: React コンポーネントのテスト用ライブラリ
- `@testing-library/jest-dom`: DOM 要素のアサーション用マッチャー
- `@testing-library/user-event`: ユーザーインタラクションのシミュレーション
- `jsdom`: ブラウザ環境のシミュレーション
- `happy-dom`: 軽量なブラウザ環境のシミュレーション（代替オプション）
- `@vitest/ui`: テスト結果の UI ビューア

## テストの実行方法

### 通常のテスト実行
```bash
npm test
```

### UI モードでのテスト実行
```bash
npm run test:ui
```

### カバレッジ付きテスト実行
```bash
npm run test:coverage
```

## ファイル構成

- `vitest.config.ts`: vitest の設定ファイル
- `vitest.setup.ts`: テスト実行前のセットアップファイル
- `app/__tests__/`: テストファイルを配置するディレクトリ

## テストの書き方

テストファイルは `__tests__` ディレクトリ内に配置し、`.test.tsx` または `.test.ts` の拡張子を使用します。

例:
```typescript
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import MyComponent from '../MyComponent'

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />)
    expect(screen.getByText('Hello')).toBeInTheDocument()
  })
})
```

## サンプルテスト

`app/__tests__/page.test.tsx` にホームページのサンプルテストが含まれています。
