### 版本问题

node 版本使用 17 的话（最近更新 node 后），运行会出现如下报错

```bash
An unhandled rejection has occurred inside Forge:
Error: error:0308010C:digital envelope routines::unsupported
    at new Hash (node:internal/crypto/hash:67:19)
    at Object.createHash (node:crypto:135:10)
```

此时使用 nvm 切换回 16 的版本即可：

```bash
nvm use v16.3.0
```
