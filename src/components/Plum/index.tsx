import { useEffect, useRef } from 'react'
import { Artboard } from './styles'

interface Point {
  x: number
  y: number
}

interface Branch {
  start: Point
  length: number
  theta: number
}

function draw(ctx: any) {
  let pendingTasks: Function[] = []

  function step(b: Branch, depth = 0) {
    const end = getEndPoint(b)
    drawBranch(b)

    if (depth < 4 || Math.random() < 0.5) {
      pendingTasks.push(() => step({
        start: end,
        length: b.length + (Math.random() * 2 - 1),
        theta: b.theta - 0.2 * Math.random(),
      }, depth + 1))
    }
    if (depth < 4 || Math.random() < 0.5) {
      pendingTasks.push(() => step({
        start: end,
        length: b.length + (Math.random() * 2 - 1),
        theta: b.theta + 0.2 * Math.random(),
      }, depth + 1))
    }
  }

  function frame() {
    const tasks: Function[] = []
    pendingTasks = pendingTasks.filter((i) => {
      if (Math.random() > 0.4) {
        tasks.push(i)
        return false
      }
      return true
    })
    tasks.forEach(fn => fn())
  }

  let framesCount = 0
  function startFrame() {
    requestAnimationFrame(() => {
      framesCount += 1
      if (framesCount % 3 === 0)
        frame()
      startFrame()
    })
  }

  startFrame()

  function lineTo(p1: Point, p2: Point) {
    ctx.beginPath()
    ctx.moveTo(p1.x, p1.y)
    ctx.lineTo(p2.x, p2.y)
    ctx.stroke()
  }

  function getEndPoint(b: Branch): Point {
    return {
      x: b.start.x + b.length * Math.cos(b.theta),
      y: b.start.y + b.length * Math.sin(b.theta),
    }
  }

  function drawBranch(b: Branch) {
    lineTo(b.start, getEndPoint(b))
  }

  function init() {
    ctx.strokeStyle = '#fffffe'

    step({
      start: { x: 0, y: Math.random() * window.innerHeight },
      length: 5,
      theta: Math.PI / 4,
    })

    step({
      start: { x: Math.random() * window.innerWidth, y: 0 },
      length: 5,
      theta: Math.PI / 4,
    })

    step({
      start: { x: window.innerWidth, y: Math.random() * window.innerHeight },
      length: 5,
      theta: Math.PI / 4,
    })

    step({
      start: { x: Math.random() * window.innerWidth, y: window.innerHeight },
      length: 5,
      theta: Math.PI / 4,
    })
  }

  init()
}

export function Plum() {
  const canvasRef = useRef(null as HTMLCanvasElement | null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    draw(ctx)
  })

  return (
    <Artboard>
      <canvas ref={canvasRef} width="2000" height="2000" scale-50 origin-top-left onClick={() => {
        const canvas = canvasRef.current
        const ctx = canvas?.getContext('2d')
        draw(ctx)
      }} />
    </Artboard>
  )
}
