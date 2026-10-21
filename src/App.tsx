import { useState } from 'react'
import FirstScreen from "./components/firstscreen"
import SecondScreen from "./components/seconscreen"
import ThirdScreen from "./components/thirdscreen"
import FourthScreen from "./components/fourthScreen"

function App() {
  const [current, setCurrent] = useState(0)
  const [sliding, setSliding] = useState(false)

  const goTo = (index: number) => {
    if (sliding) return
    setSliding(true)
    setTimeout(() => {
      setCurrent(index)
      setSliding(false)
    }, 500)
  }

  return (
    <div className="w-full h-screen overflow-hidden relative">
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(calc(-${current} * 100vw))`, width: '400vw' }}
      >
        {/* Screen 1 */}
        <div className="w-screen h-full flex-shrink-0">
          <FirstScreen onNext={() => goTo(1)} />
        </div>

        {/* Screen 2 */}
        <div className="w-screen h-full flex-shrink-0">
          <SecondScreen onNext={() => goTo(2)} />
        </div>

        {/* Screen 3 */}
        <div className="w-screen h-full flex-shrink-0">
          <ThirdScreen onNext={() => goTo(3)} />
        </div>

        {/* Screen 4 */}
        <div className="w-screen h-full flex-shrink-0">
          <FourthScreen />
        </div>
      </div>
    </div>
  )
}

export default App
