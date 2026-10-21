import background from "../../assets/videos/cherry-background.mp4"
import cta from "../../assets/images/cta-gif.gif"
import cake from "../../assets/images/cake.png"

interface Props {
    onNext: () => void
}

function ThirdScreen({ onNext }: Props) {
    return (
        <div className="relative w-full h-screen">
            <div className="absolute w-full h-screen z-10">
                <video
                    src={background}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                    disablePictureInPicture
                    className="object-cover w-full h-full"></video>
            </div>

            <div className="absolute z-20 flex flex-col justify-center items-center w-full h-screen">
                <div className="relative w-[full] h-1/2 md:w-1/2 flex flex-col justify-center items-center">
                    <img src={cta} className="h-full w-full lg:w-[60%]" alt="" />
                    <div
                        className="absolute h-[120px] w-[200px] bottom-10 md:bottom-25 cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-95 group"
                        onClick={onNext}
                        title="Click the cake!"
                    >
                        <img src={cake} className="h-full w-full object-cover" alt="Click me!" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThirdScreen
