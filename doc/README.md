# npm private publish

## 目的

`npm publish` によるprivate module誤爆公開を防止する必要がある。

最終的にはnpm側で吸収してもらえれば、このコマンドは不要になりより良い。

## scoped packages

`--scope` を使って `@scope` が名前に入ってるならば、
npm publishするとエラーとなるため公開誤爆は起きない。

## Why wrapper command?

`npm publish`をhookする方法は用意されていないため、
ラッパコマンドを書く必要がある。

### package.jsonのチェック箇所

- `publishConfig` **optional**
    - npm configで設定されているならpackage.jsonには不要
- `name` - start with `@`
    - `/`までチェックするべきかは微妙

if you added register with `--scope`, then you not have to `pushConfig` on `pacakge.json`.

```
npm adduser --registry http://my-internal-registry.loca --scope=@example
```

OR

```
"publishConfig":{"registry":"http://my-internal-registry.local"}
```

## NPM

[npm/npm](https://github.com/npm/npm "npm/npm") をモジュールとして利用する。
npmがsemverなので、メジャーアップデート時には更新が必要。
