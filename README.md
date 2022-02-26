## 项目基本使用命令

<details><summary>详情</summary>

<br />

* 安装依赖

```bash
yarn
```

* 项目运行

```bash
yarn start
```

* 项目打包

```bash
yarn package
```

</details>

## 项目历程

### 初始化以及图标修改

<details>
执行 `yarn` 安装依赖时 electron 安装失败，出现 404，需要更换 electron 安装相关路径信息，这是因为淘宝镜像的资源路径和官方的资源路径不同，官方的比淘宝的多了个 `v` 。

```bash
yarn config set electron_mirror http://npm.taobao.org/mirrors/electron/

yarn config set electron_custom_dir v13.1.2
```

---

图标修改：在项目的 `assets` 文件夹中添加 logo 文件，更改 `package.json` 和 `main.ts` 中有关 icon 的信息，更换为 logo 文件，执行打包命令即可，会生成对应的软件包。
</details>
