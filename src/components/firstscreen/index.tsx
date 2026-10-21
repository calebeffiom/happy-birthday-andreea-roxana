import background from "../../assets/images/start-background.jpg"
import bunny from "../../assets/images/rabbit.png"

interface Props {
    onNext: () => void
}

function FirstScreen({ onNext }: Props) {
    return (
        <div className="relative w-full h-screen">
            <div className="absolute w-full h-screen z-10">
                <img src={background} className="object-cover w-full h-full" alt="" />
            </div>
            <div className="absolute z-20 flex flex-col justify-center items-center w-full h-screen">
                <h2 className="text-3xl md:text-5xl text-[#4A3B32]">Happy 2nd Birthday 😚</h2>
                <img src={bunny} className="w-80 h-auto" alt="" />
                <button
                    onClick={onNext}
                    className="bg-[#fff] text-[#4A3B32] border-2 border-[#4A3B32] px-[30px] py-[10px] rounded-3xl cursor-pointer hover:bg-[#4A3B32] hover:text-white transition-colors duration-200"
                >
                    next :3
                </button>
            </div>
        </div>
    )
}

export default FirstScreen
