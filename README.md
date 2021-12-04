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

```
mkdir src && mv pages src
```
