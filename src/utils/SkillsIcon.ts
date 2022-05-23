import C from '../../assets/images/skills/C.svg'
import Cpp from '../../assets/images/skills/Cpp.svg'
import Java from '../../assets/images/skills/Java-Dark.svg'
import Py from '../../assets/images/skills/Python-Dark.svg'
import Linux from '../../assets/images/skills/Linux-Dark.svg'
import Latex from '../../assets/images/skills/LaTeX-Dark.svg'
import HTML from '../../assets/images/skills/HTML.svg'
import CSS from '../../assets/images/skills/CSS.svg'
import JavaScript from '../../assets/images/skills/JavaScript.svg'
import TypeScript from '../../assets/images/skills/TypeScript.svg'
import Markdown from '../../assets/images/skills/Markdown-Dark.svg'
import React from '../../assets/images/skills/React-Dark.svg'
import VueJS from '../../assets/images/skills/VueJS-Dark.svg'
import NestJS from '../../assets/images/skills/NestJS-Dark.svg'
import Electron from '../../assets/images/skills/Electron.svg'
import MUI from '../../assets/images/skills/MaterialUI-Dark.svg'
import MongoDB from '../../assets/images/skills/MongoDB.svg'
import NextJS from '../../assets/images/skills/NextJS-Dark.svg'
import NodeJS from '../../assets/images/skills/NodeJS-Dark.svg'
import Prisma from '../../assets/images/skills/Prisma.svg'
import Tailwind from '../../assets/images/skills/TailwindCSS-Dark.svg'
import Vite from '../../assets/images/skills/Vite-Dark.svg'
import sass from '../../assets/images/skills/Sass.svg'
import styledcomponents from '../../assets/images/skills/StyledComponents.svg'
import Bash from '../../assets/images/skills/Bash-Dark.svg'
import vim from '../../assets/images/skills/Vim-Dark.svg'
import VSCode from '../../assets/images/skills/VSCode-Dark.svg'
import CodePen from '../../assets/images/skills/CodePen-Dark.svg'
import Git from '../../assets/images/skills/Git.svg'
import Github from '../../assets/images/skills/Github-Dark.svg'
import PhotoShop from '../../assets/images/skills/Photoshop.svg'

const icons = new Map([
  ['c', C],
  ['cpp', Cpp],
  ['java', Java],
  ['py', Py],
  ['linux', Linux],
  ['latex', Latex],
  ['html', HTML],
  ['css', CSS],
  ['js', JavaScript],
  ['ts', TypeScript],
  ['md', Markdown],
  ['react', React],
  ['vuejs', VueJS],
  ['nestjs', NestJS],
  ['electron', Electron],
  ['materialui', MUI],
  ['mongodb', MongoDB],
  ['nextjs', NextJS],
  ['nodejs', NodeJS],
  ['prisma', Prisma],
  ['tailwind', Tailwind],
  ['vite', Vite],
  ['sass', sass],
  ['styledcomponents', styledcomponents],
  ['bash', Bash],
  ['vim', vim],
  ['vscode', VSCode],
  ['codepen', CodePen],
  ['git', Git],
  ['github', Github],
  ['photoshop', PhotoShop],
])

export const giveSkillsIcon = (name: string) => {
  return icons.get(name)
}
