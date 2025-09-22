import './global.css'
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'

function Circle({ s }) {
  return (
    <div
      className="absolute w-full h-full"
      style={{ transform: `rotate(${s * 18}deg)` }}
    >
      <div
        className="absolute top-0 left-0 w-[15px] h-[15px] rounded-full bg-blue-600 shadow-[0_0_10px_#00f,0_0_20px_#00f,0_0_40px_#00f,0_0_80px_#00f] animate-[changeScale_2s_linear_2_both]"
        style={{ animationDelay: `${-s * 0.1}s` }}
      />
    </div>
  )
}

function Loader({ size }) {
  const circles = Array.from({ length: 20 }, (_, i) => i + 1)
  const sizeMap = { 1: 200, 2: 150, 3: 100 }
  const dimension = sizeMap[size] || 120
  return (
    <section
      className={`relative animate-[changeColor_6s_linear_infinite] ${size === 1 ? '' : 'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}`}
      style={{ width: `${dimension}px`, height: `${dimension}px` }}
    >
      {circles.map(s => (
        <Circle key={s} s={s} />
      ))}
    </section>
  )
}

function App() {
  return (
    <div className="h-screen w-full flex flex-wrap place-content-center bg-black relative">
      <Loader size={1} />
      <Loader size={2} />
      <Loader size={3} />
    </div>
  )
}

const root = createElement('div')
document.body.appendChild(root)
createRoot(root).render(<App />)
