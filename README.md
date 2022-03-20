## 项目基本使用命令

<details><summary>Details</summary>

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

<details><summary>Details</summary>

<br />

执行 `yarn` 安装依赖时 electron 安装失败，出现 404，需要更换 electron 安装相关路径信息，这是因为淘宝镜像的资源路径和官方的资源路径不同，官方的比淘宝的多了个 `v` 。

<br />

```bash
yarn config set electron_mirror http://npm.taobao.org/mirrors/electron/

yarn config set electron_custom_dir v13.1.2
```

<br />

图标修改 --> 在项目的 `assets` 文件夹中添加 logo 文件，更改 `package.json` 和 `main.ts` 中有关 icon 的信息，更换为 logo 文件，执行打包命令即可，会生成对应的软件包。

</details>

### 开发者工具扩展

<details><summary>Details</summary>

<br />

在开发，在 `main.ts` 文件中添加这段代码即可；

<br >

```js
  mainWindow.webContents.openDevTools()
```

</details>

### UI 组件库

<details><summary>Details</summary>

<br />

目前使用的是 [MUI](https://mui.com/)

</details>

### 静态资源

<details><summary>Details</summary>

<br />

所有静态资源存放在 `assets` 文件夹中

注意引入写法 git-commit->[add Welcome Page](https://github.com/kok-s0s/just-do-it/commit/aac846155d157bc9d5d95c1f76be6644db269602)

</details>

### 路由配置

<details><summary>Details</summary>

<br />

引入 `react router v6`

注意 electron 使用的是 `HashRouter`

git-commit->[add React Router v6 && make a test file](https://github.com/kok-s0s/just-do-it/commit/d0ce34bf0f9adffd23b82ed49dfa06530ad6129e)

</details>

### Dexie.js

<details><summary>Details</summary>

<br />

用于在本地存储长期数据

git-commit->[add Todo Function](https://github.com/kok-s0s/just-do-it/commit/b6b2c0f5e02684aa63076e919b46553dede4798f)

</details>

### 规范引用

<details><summary>Details</summary>

<br />

便于维护代码

规则：

1. `styles.ts` 样式最优先引入
2. 其次引入 `mui` 的组件
3. 引入 `components` 中的组件
4. 有用到数据库的就在此引入
5. 再引入 `utils` 中的自定义的工具函数
6. 引入 `yarn add` 下载的包里的方法
7. `axios` 需要放在最后的引入位置 

git-commit->[add Todo Function](https://github.com/kok-s0s/just-do-it/commit/739e011a705f12b05a8f6ff325742cfc16704461)

</details>

### 项目打包

<details><summary>Details</summary>

<br />

项目直接执行 `yarn release` 生成打包后的文件

其中 mac 的很难搞，有个安全问题导致的报错，就算下载相关的功能包进行打包，在 mac 中打开会出现 `已损坏，无法打开。 您应该将它移到废纸篓。` 这个问题。

`electron-forge` [官方](https://www.electronforge.io/config/makers/dmg)也建议最好在 mac 直接编译生成应用程序来使用即可；

> dmg 中的背景图片要设置为 658 × 489 -> [原因](https://github.com/electron-userland/electron-installer-dmg/issues/23)

git-commit->[dmg set up](https://github.com/kok-s0s/just-do-it/commit/5f20b1a27f8b6c95d5a94e927d3ad9085c1c651c)

</details>

## 项目 Bug

[子文件-->Bugs](./Bugs.md)
