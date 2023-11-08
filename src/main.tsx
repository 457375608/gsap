import '@/assets/global.css'
import ReactDOM from 'react-dom/client'
import scrollTo from './components/scrollTo'
import Slide from './components/Slide'
import Statistic from './components/Statistic'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <div className="ml-40">
    <button
      onClick={() => {
        scrollTo({ x: 5000, y: 600 })
      }}
    >
      按钮
    </button>
    <div className="mt-[1000px]">
      <Slide option={{ y: 30, opacity: 0, scale: 1.2 }}>
        <div className="w-10 h-10 bg-sky-500 flex place-content-center place-items-center">
          <Statistic number={100} />
        </div>
      </Slide>
    </div>
  </div>,
)
