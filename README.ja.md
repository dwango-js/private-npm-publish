# npm private publish

## 目的

`nom publish` によるprivate module誤爆公開を防止する必要がある

## scope

`--scope` を使って `@scope` が名前に入ってるならば、
npm publishによる公開誤爆は起きない

[socped_example.bash](https://gist.github.com/watilde/7f11eab81822415c0111 "socped_example.bash")


## Why wrapper command?

`npm publish`をhookする方法は用意されていないため、
ラッパコマンドを書く必要がある。

### チェック箇所

- `publishConfig` **optional**
- `name` - start with `@`

if you added register with `--scope`, then you not have to `pushConfig` on `pacakge.json`.

```
npm adduser --registry http://my-internal-registry.loca --scope=@example
```

```
"publishConfig":{"registry":"http://my-internal-registry.local"}
```

## NPM

use local [npm/npm](https://github.com/npm/npm "npm/npm") as command.