# deepl-proxy

DeepL API を簡単に利用するための Node.js 製プロキシサーバーです。

## 機能

- DeepL API へのリクエストを代理で送信
- JSON 形式で結果を返却

## 必要条件

- Node.js（v16 以上推奨）
- DeepL API キー（[公式サイト](https://www.deepl.com/pro-api)から取得）

## セットアップ

1. リポジトリをクローン

   ```bash
   git clone https://github.com/kaji0428/deepl-proxy.git
   cd deepl-proxy
   ```

2. 依存パッケージをインストール

   ```bash
   npm install
   ```

3. 環境変数を設定（`.env`ファイル）

   ```bash
   DEEPL_API_KEY=あなたのAPIキー
   ```

4. サーバーを起動

   ```bash
   npm start
   ```

5. デフォルトでは `http://localhost:3000` で起動します。

## デプロイ

Render などのサービスで簡単にデプロイできます。

- Build Command: `npm install`
- Start Command: `npm start`

## ライセンス

MIT
