<details><summary>"碟中谍" 😼</summary>

<br />

<ul>

<details><summary>项目基本使用命令</summary>

---

<ul>

* 安装依赖 `yarn`

* 项目运行 `yarn start`

* 项目打包 `yarn package`

</ul>

</details>

<span>项目历程</span>

<ul>

<details><summary>初始化以及图标修改</summary>

<br />

<ul>

执行 `yarn` 安装依赖时 electron 安装失败，出现 404，需要更换 electron 安装相关路径信息，这是因为淘宝镜像的资源路径和官方的资源路径不同，官方的比淘宝的多了个 `v` 。

```bash
yarn config set electron_mirror http://npm.taobao.org/mirrors/electron/

yarn config set electron_custom_dir v13.1.2
```

图标修改 --> 在项目的 `assets` 文件夹中添加 logo 文件，更改 `package.json` 和 `main.ts` 中有关 icon 的信息，更换为 logo 文件，执行打包命令即可，会生成对应的软件包。

</ul>

</details>

<details><summary>开发者工具扩展</summary>

<br />

<ul>

在开发，在 `main.ts` 文件中添加这段代码即可；

```js
mainWindow.webContents.openDevTools()
```

</ul>

</details>

<details><summary>UI 组件库</summary>

<br />

<ul>

目前使用的是 [MUI](https://mui.com/)

</ul>

</details>

<details><summary>静态资源</summary>

<br />

<ul>

所有静态资源存放在 `assets` 文件夹中

注意引入写法 git-commit->[add Welcome Page](https://github.com/kok-s0s/just-do-it/commit/aac846155d157bc9d5d95c1f76be6644db269602)

</ul>

</details>

<details><summary>路由配置</summary>

<br />

<ul>

引入 `react router v6`

注意 electron 使用的是 `HashRouter`

git-commit->[add React Router v6 && make a test file](https://github.com/kok-s0s/just-do-it/commit/d0ce34bf0f9adffd23b82ed49dfa06530ad6129e)

</ul>

</details>

<details><summary>Dexie.js</summary>

<br />

<ul>

用于在本地存储长期数据

git-commit->[add Todo Function](https://github.com/kok-s0s/just-do-it/commit/b6b2c0f5e02684aa63076e919b46553dede4798f)

</ul>

</details>

<details><summary>规范引用</summary>

<br />

<ul>

便于维护代码 git-commit->[canonical reference](https://github.com/kok-s0s/just-do-it/commit/739e011a705f12b05a8f6ff325742cfc16704461)

规则：

* `styles.ts` 样式最优先引入
* 其次引入 `mui` 的组件
* 引入 `components` 中的组件
* 有用到数据库的就在此引入
* 再引入 `utils` 中的自定义的工具函数
* 引入 `yarn add` 下载的包里的方法
* `axios` 需要放在最后的引入位置 

</ul>

</details>

<details><summary>项目打包</summary>

<br />

<ul>

项目直接执行 `yarn release` 生成打包后的文件

其中 mac 的很难搞，有个安全问题导致的报错，就算下载相关的功能包进行打包，在 mac 中打开会出现 `已损坏，无法打开。 您应该将它移到废纸篓。` 这个问题。

`electron-forge` [官方](https://www.electronforge.io/config/makers/dmg)也建议最好在 mac 直接编译生成应用程序来使用即可；

> dmg 中的背景图片要设置为 658 × 489 -> [原因](https://github.com/electron-userland/electron-installer-dmg/issues/23)

git-commit->[dmg set up](https://github.com/kok-s0s/just-do-it/commit/5f20b1a27f8b6c95d5a94e927d3ad9085c1c651c)

</ul>

</details>

<details><summary>CSS 书写顺序</summary>

<br />

<ul>

正确的 CSS 书写顺序能够减少浏览器回流（reflow），提高浏览器渲染dom的性能 🌟

[HOW TO ORGANIZE CSS @ 9ELEMENTS](https://9elements.com/css-rule-order/)

</ul>

</details>

</ul>

<span>项目 Bug<span>

[子文件-->Bugs](./Bugs.md)

</ul>

</details>

---

Just-Do-It
  
一个~~用户自我驱动~~的应用，不，就是我自己做着玩，自己做着用，我想做就做，不过我做着做着我就会了很多东西，所以就是「自我驱动」了。
  
目前已经实现的功能如下：

* [x] Todo 记录 && Github Info
* [x] 天气获取（仅有实时数据，无预报）
* [x] 知识分享专区（仅本人分享，个人数据库）
  + [x] 技术前沿 (仅本人认为平日休闲可以冲浪的网站论坛和推送好文章来阅读)
  + [x] 书籍推荐 (仅本人目前所阅读过的书籍)
  + [x] 项目推荐（仅本人推荐适合探索一些领域的项目）
  + [x] 码无止境（仅本人个人刷题记录 && 可时不时随机刷三题回顾）

分支说明

* master 分支记录到码无止境，可投入使用；
* explore-dev 分支用于开发新功能；
* refactor 分支用于重构（查漏补缺）

额外说明

* ~~用户驱动~~ --> 可自定义（只要你对 Web 开发感兴趣）

* 前后端分离开发 --> 后端项目 [backend-just-do-it](https://github.com/kok-s0s/backend-just-do-it)

---

**建议想自定义的开发者使用自己的数据库以及自己的服务器；**

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

### function 和 箭头函数

项目中所有的组件都是函数声明的，有朋友建议可以直接把组件写成箭头函数的形式，而我拒绝的原因是都是 const 开头的话，感觉很奇怪，代码阅读体验不好

```js
export function CodeBlock() {
    const [difficulty, setDifficulty] = useLocalStorage('difficulty', [])
    const [degree, setDegree] = useLocalStorage('degree', [])
    const [topictype, setTopicType] = useState([])
```

```js
export const CodeBlock = () => {
        const [difficulty, setDifficulty] = useLocalStorage('difficulty', [])
        const [degree, setDegree] = useLocalStorage('degree', [])
        const [topictype, setTopicType] = useState([])
```

看起来有个 function 更直观；

这两种不同写法有什么不同吗？[搜索下](https://stackoverflow.com/questions/54331084/function-or-fat-arrow-for-a-react-functional-component)

1. 箭头函数 return 关键词不是必备的；
2. 箭头函数不支持 this 无法做相关 bind 的操作；

箭头函数也可以用来写组件，但是在我这个项目我更倾向于使用 function 关键词表示组件的意思，箭头函数更多用于表示一个功能函数。

### 同步问题

实践得出，用 React Hooks 定义的变量，在接口调用阶段，即使我对它进行了赋值，无法在接口中对它做任何操作，仍是默认它为空; 记录下，这是个思维误区，以为对某个变量赋值就能立即对它做处理；

git-commit->[fix -- get the data right](https://github.com/kok-s0s/just-do-it/commit/546dc3d5480cc2edaa6d1865c05863a66223bf29)

### node-gyp 报错

遇到 gyp ERR! 错误

项目通过指令 `yarn add node-gyp` 重新安装 `node-gyp` 解决掉报错信息；
