import Image from "next/image";
import TextModifier from "react-text-modifier";

const SingleHero = ({ slider = {} }) => {
    const { bg, title } = slider;
    return (
        <>
            <div
                className="banner relative z-0"
            >
                <Image
                    src={bg}
                    width={1500}
                    height={700}
                    alt="banner-image"
                    className="absolute top-0 -z-10"
                />
                <div className="h-full w-full flex justify-center items-center" style={{ background: "rgba(69,69,69,.4)" }}>
                    {/* <h1 >{title}</h1> */}
                    <TextModifier
                        text={title}
                        as="h1"
                        className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white"
                        highlight={["World!","experience"]}
                        highlightClassName="text-4xl md:text-5xl lg:text-6xl font-semibold text-orange-500"
                    />
                </div>
            </div>
        </>
    );
};

export default SingleHero;