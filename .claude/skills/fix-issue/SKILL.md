---
name: fix-issue
description: GitHub issue を修正する
---

GitHub issue $ARGUMENTS を修正するワークフロー:

1. `gh issue view $ARGUMENTS` で issue 詳細を取得
2. 問題を理解し、関連コードを検索
3. 修正を実装
4. `npm run lint` でリントチェック
5. `npm run build` でビルド確認
6. わかりやすいコミットメッセージを作成
7. 変更をコミット
