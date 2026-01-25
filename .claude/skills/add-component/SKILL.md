---
name: add-component
description: 新しいReactコンポーネントを作成する
---

新しいコンポーネント「$ARGUMENTS」を作成するワークフロー:

1. `src/components/$ARGUMENTS.tsx` にコンポーネントを作成
   - TypeScript + React の関数コンポーネント
   - Props の型定義を含める
   - Tailwind CSS でスタイリング

2. `src/components/$ARGUMENTS.stories.tsx` にStorybookストーリーを作成
   - autodocs を有効化
   - 主要なバリエーションのストーリーを定義

3. `npm run storybook` でStorybookで確認

4. `npm run lint` でリントチェック

5. `npm run build` でビルド確認

## 参照ファイル

既存のコンポーネント例: @src/components/Button.tsx
既存のストーリー例: @src/components/Button.stories.tsx
