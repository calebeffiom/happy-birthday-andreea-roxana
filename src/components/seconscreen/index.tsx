import { useState } from "react"
import background from "../../assets/images/start-background.jpg"
import bunny from "../../assets/images/rabbit-gif-infinite-loop.gif"

interface Props {
    onNext: () => void
}

function SecondScreen({ onNext }: Props) {
    const [showModal, setShowModal] = useState(false)

    return (
        <div className="relative w-full h-screen">
            <div className="absolute w-full h-screen z-10">
                <img src={background} className="object-cover w-full h-full" alt="" />
            </div>

            <div className="absolute z-20 flex flex-col justify-center items-center w-full h-screen">
                <h2 className="text-3xl text-center bold-text mb-12 tracking-wide [word-spacing:4px] md:[word-spacing:8px] text-[#4A3B32]">
                    i have a surprise for <br /> you, wanna see it? 🤭
                </h2>

                <div className="flex gap-6">
                    <button
                        onClick={onNext}
                        className="text-[#4A3B32] bg-[#fff] border-2 border-[#4A3B32] px-[30px] py-[10px] rounded-3xl cursor-pointer hover:bg-[#4A3B32] hover:text-white transition-colors duration-200"
                    >
                        yes!!
                    </button>
                    <button
                        onClick={() => setShowModal(true)}
                        className="text-[#4A3B32] bg-[#fff] border-2 border-[#4A3B32] px-[30px] py-[10px] rounded-3xl cursor-pointer hover:bg-[#4A3B32] hover:text-white transition-colors duration-200"
                    >
                        no thanks
                    </button>
                </div>
                <img src={bunny} className="w-80 h-auto" alt="" />
            </div>

            {/* "No Thanks" Modal */}
            {showModal && (
                <div className="absolute inset-0 z-50 flex items-center justify-center">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                        onClick={() => setShowModal(false)}
                    />

                    {/* Modal Card */}
                    <div className="relative bg-white rounded-3xl shadow-2xl px-10 py-8 flex flex-col items-center gap-5 max-w-xs w-full mx-4 border-2 border-[#4A3B32]/20 animate-[fadeScaleIn_0.25s_ease-out]">
                        <span className="text-5xl">🙅‍♀️</span>
                        <p className="text-2xl font-bold text-[#4A3B32] text-center leading-snug">
                            you have no choice 😋
                        </p>
                        <p className="text-sm text-[#4A3B32]/60 text-center">
                            resistance is futile!
                        </p>
                        <button
                            onClick={() => {
                                setShowModal(false)
                                onNext()
                            }}
                            className="mt-1 bg-[#4A3B32] text-white px-8 py-3 rounded-3xl cursor-pointer hover:bg-[#6b5244] transition-colors duration-200 font-semibold tracking-wide"
                        >
                            ok fine 🎀
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SecondScreen
