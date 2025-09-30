# 格言アドバイスアプリ（日本語翻訳付き）

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://deepl-proxy-nine.vercel.app/)
[![Backend](https://img.shields.io/badge/Backend-Render-blue)](https://deepl-proxy-g1ex.onrender.com/)

英語の格言を自動取得し、DeepL API で日本語翻訳して表示する Web アプリケーションです。

## 🎯 アプリケーション概要

- **フロントエンド**: 純粋な HTML/CSS/JavaScript（フレームワークなし）
- **バックエンド**: Node.js + Express（プロキシサーバー）
- **データ保存**: ブラウザの LocalStorage（サーバーレス）
- **デプロイ**: Vercel (Frontend) + Render (Backend)
- **API 連携**: Advice Slip API + DeepL Translation API

## 🚀 ライブデモ

**🌐 アプリ URL**: [https://deepl-proxy-nine.vercel.app/](https://deepl-proxy-nine.vercel.app/)

> ⏰ **初回起動について**: Vercel と Render の無料プランを使用しているため、初回アクセス時はサーバーの起動に **30 秒〜1 分程度** かかる場合があります。

## ✨ 主な機能

### 🎲 格言取得・翻訳機能

- **Advice Slip API**から英語の格言をランダム取得
- **DeepL API**による高精度日本語翻訳
- 原文と翻訳文の同時表示

### 💾 お気に入り機能

- 気に入った格言を**ブラウザの LocalStorage**に保存
- **サーバー不要**のクライアントサイドデータ管理
- お気に入り一覧の表示・削除機能
- ブラウザごとのデータ永続化（プライベートな保存）

## 🏗️ 技術スタック・アーキテクチャ

### フロントエンド

- **HTML5/CSS3**: セマンティックな構造とモダンなスタイリング
- **純粋な JavaScript**: フレームワーク不使用、ES6+構文、async/await、Fetch API
- **LocalStorage API**: ブラウザネイティブのデータ永続化機能
- **静的ファイル**: 単一の HTML ファイル（No Build Process）
- **Vercel**: 静的サイトホスティング

### バックエンド

- **Node.js**: JavaScript 実行環境
- **Express.js**: Web アプリケーションフレームワーク
- **CORS**: クロスオリジンリソース共有対応
- **Render**: サーバーサイドアプリケーションホスティング

### 外部 API 連携

- **Advice Slip API**: 格言データ取得
- **DeepL API**: 機械翻訳サービス

## 📱 使用方法

1. **アプリにアクセス**: [https://deepl-proxy-nine.vercel.app/](https://deepl-proxy-nine.vercel.app/)

2. **格言取得**:

   - 「新しいアドバイス」ボタンをクリック
   - 自動的に英語格言を取得 → 日本語翻訳 → 表示

3. **お気に入り登録**:

   - 気に入った格言の「お気に入りに追加」ボタンをクリック
   - 下部のお気に入りリストに追加される

4. **お気に入り管理**:
   - お気に入りリストから不要な項目を「削除」ボタンで除去

## 🔧 ローカル開発環境

### バックエンド起動

```bash
# リポジトリクローン
git clone https://github.com/kaji0428/deepl-proxy.git
cd deepl-proxy

# 依存関係インストール
npm install

# 環境変数設定（.envファイル作成）
DEEPL_API_KEY=あなたのDeepL APIキー

# サーバー起動
npm start
# → http://localhost:3000 で起動
```

### フロントエンド（純粋な HTML/CSS/JavaScript）

```bash
# 方法1: ブラウザで直接開く
# index.htmlをダブルクリックまたはブラウザにドラッグ&ドロップ

# 方法2: VS Code Live Server拡張機能使用
# 1. VS Codeでプロジェクトフォルダを開く
# 2. index.htmlを右クリック→「Open with Live Server」

# 方法3: Python簡易サーバー（CORS対策）
python -m http.server 8000
# → http://localhost:8000 でアクセス
```

**特徴:**

- **ビルドプロセス不要**: そのままブラウザで実行可能
- **依存関係なし**: npm install などの事前準備不要
- **軽量**: 単一 HTML ファイルで完結

## 🌍 デプロイ構成

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Vercel        │    │     Render       │    │  External APIs  │
│  (Frontend)     │────│   (Backend)      │────│                 │
│ - index.html    │    │ - Express Server │    │ - Advice Slip   │
│ - Static Assets │    │ - DeepL Proxy    │    │ - DeepL API     │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

### デプロイ環境詳細

- **フロントエンド**: Vercel（CDN 配信、自動デプロイ）
- **バックエンド**: Render（無料プラン、自動スリープ機能あり）
- **ドメイン**: 独自ドメインまたはサブドメイン使用可能

## 💼 開発スキル・技術的ポイント

### JavaScript 技術

- **非同期処理**: async/await, Promise, Fetch API
- **DOM 操作**: 動的要素生成・イベントハンドリング
- **エラーハンドリング**: try-catch、ユーザーフレンドリーなエラー表示
- **LocalStorage 活用**:
  - JSON.stringify/JSON.parse でオブジェクトの永続化
  - ブラウザネイティブ API 使用（No Database）
  - クライアントサイドでの完結したデータ管理

### Web 開発技術

- **RESTful API**: HTTP 通信、JSON データ処理
- **CORS 対応**: クロスオリジン問題の解決
- **レスポンシブデザイン**: CSS Grid, Flexbox
- **UX 設計**: ローディング状態、フィードバック機能

### DevOps・インフラ

- **Git/GitHub**: バージョン管理、リモートリポジトリ
- **CI/CD**: Vercel/Render の自動デプロイ
- **環境変数管理**: API キーなどの秘匿情報管理
- **クラウドサービス**: 複数プラットフォームでのデプロイ経験

## 🔒 セキュリティ対策

- **API キー保護**: サーバーサイドでの環境変数管理
- **CORS 設定**: 適切なオリジン制限
- **入力検証**: XSS 対策、データサニタイゼーション

## 📈 今後の改善予定

- [ ] ユーザー認証機能
- [ ] データベース連携（お気に入りのクラウド同期）
- [ ] 多言語翻訳対応
- [ ] PWA 対応（オフライン機能）
- [ ] テスト自動化（Jest, Cypress）

## 🤝 コントリビューション

Issues、Pull Requests を歓迎します。

## 📄 ライセンス

MIT License

---

**開発者**: [kaji0428](https://github.com/kaji0428)  
**リポジトリ**: [https://github.com/kaji0428/deepl-proxy](https://github.com/kaji0428/deepl-proxy)
