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
