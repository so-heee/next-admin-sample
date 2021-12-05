# Next Admin Sample

## プロジェクトを作成

```
npx create-next-app --example with-typescript-eslint-jest with-typescript-eslint-jest-app
```

## yarn でパッケージの再インストール

- node_module を削除
- package-lock.json を削除
- yarn install

## 自動デプロイ（CI/CD）

- GitHub にリポジトリを作成
- Vercel と Github を連携
- Vercel へ公開したあとは、GitHub へ push すると自動に Vercel に反映される

## ディレクトリの移動

- src ディレクトリを作成し、pages を移動
- index.test.tsx のエラーを修正

```
mkdir src && mv pages src
```

## vscode の設定を追加

- コマンドパレットから基本設定: ワークスペース設定を開く(JSON)を選択して setting.json を開き以下を追加

```
{
    "auto-rename-tag.activationOnLanguage": ["*"],
    // デフォルトのフォーマッタを prettier に設定
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    // ファイル保存時、prettier による自動フォーマット
    "editor.formatOnSave": true,
    // ファイル保存時、ESLint による自動フォーマット
    "editor.codeActionsOnSave": {
      "source.fixAll": true
    }
}
```

- コマンドパレットから推奨事項の拡張機能を表示（ワークスペース）を選択して extensions.json を開き以下を追加

```
  "recommendations": ["dbaeumer.vscode-eslint", "esbenp.prettier-vscode"],
```

## husky + lint-staged の導入

husky: git hooks の設定を package.json などからできるようにしてくれるツール
lint-staged: ステージングしたファイルに対して特定のコマンドを実行できるツール

husky で pre-commit フックに lint-staged を設定し、lint-staged から各種リントツールを実行する

```
yarn add -D husky lint-staged
```

- husky を初期化。.husky/pre-commit .husky/pre-push が自動で追加される

```
yarn husky install
yarn husky add .husky/pre-commit "yarn lint-staged"
yarn husky add .husky/pre-push "yarn type-check"
```

- lint-staged の設定を package.json に追加

```

 "lint:fix": "eslint src --ext ts --ext tsx --fix",

 "lint-staged": {
   "*.@(ts|tsx)": [
     "yarn lint",
     "yarn format",
     "yarn lint:fix"
   ]
 },
```

## パッケージを最新に更新

```
yarn upgrade --latest
```

## material-ui の導入

```
yarn add @mui/material @emotion/react @emotion/styled @emotion/server @emotion/cache @mui/icons-material
```

<https://mui.com/getting-started/installation/>
<https://github.com/mui-org/material-ui/tree/master/examples/nextjs-with-typescript>

- theme.ts, \_app.tsx,\_documet.tsx を作成

## next.config.js の作成

```
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}
```
