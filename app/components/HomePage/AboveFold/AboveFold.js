// components/HeroVideoSection.jsx
import React from 'react'
import NavBar from '../../Layout/Header/Navbar'
import DynamicImage from '../../Modules/Image/DynamicImage'
export default function AboveFold() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            {/* Background Video */}
            <NavBar />
            <video
                className="absolute top-0 left-0 h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            >
                <source src="/love/couple.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Optional dark overlay to increase text visibility */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Text Overlay */}
            <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center text-white">
                <h1 className="mb-4 max-w-2xl text-3xl font-semibold md:text-4xl">
                    Helping you to find &lsquo;the one&rsquo;
                </h1>
                <p className="max-w-xl text-base md:text-lg">
                    Curating exclusive connections for distinguished individuals around the world.
                    Soho Date Club, specialists in bringing together exceptional individuals of
                    discerning taste.
                </p>
                <div className="absolute bottom-0 left-0 right-0 z-20 md:flex items-center justify-center bg-black/50 backdrop-blur-md py-4">
                    <div className="grid grid-cols-2 md:flex flex-wrap items-center justify-center space-x-16 md:space-x-22 px-8 text-white">
                        {/* Example placeholder logos. Replace with your own images */}
                        {/* <div className="flex flex-col items-center space-y-1">
                            <span className="text-xs uppercase">As seen on</span>
                        </div> */}
                        <DynamicImage
                            image="https://images.squarespace-cdn.com/content/v1/66f4261885444f286787c561/1733313321675-U94K9CY3ZLRX907DF2K7/17333131928488559-4.png?format=300w"
                            alt="Today"
                            width={70}
                            height={40}
                            className="object-contain"
                        />
                        <DynamicImage
                            image="https://images.squarespace-cdn.com/content/v1/66f4261885444f286787c561/1733313322437-NWP4Q2NSAYLFJMC3N5LP/17333131928488559-3.png?format=300w"
                            alt="NBC"
                            width={60}
                            height={40}
                            className="object-contain"
                        />
                        <DynamicImage
                            image="https://images.squarespace-cdn.com/content/v1/66f4261885444f286787c561/1733313322616-SNTKYIAQR5PFYWTO42VR/17333131928488559-2.png?format=500w"
                            alt="Nasdaq"
                            width={80}
                            height={40}
                            className="object-contain"
                        />
                        <DynamicImage
                            image="https://images.squarespace-cdn.com/content/v1/66f4261885444f286787c561/1733313323682-73KXANCEH6C3387UZ2B9/17333131928488559-1.png?format=500w"
                            alt="Forbes"
                            width={80}
                            height={40}
                            className="object-contain"
                        />
                        <DynamicImage
                            image="https://images.squarespace-cdn.com/content/v1/66f4261885444f286787c561/1733313323819-57EK1JPD5U7OV49D4ILV/17333131928488559.png?format=500w"
                            alt="CNBC"
                            width={60}
                            height={40}
                            className="object-contain"
                        />
                        <DynamicImage
                            image="https://images.squarespace-cdn.com/content/v1/66f4261885444f286787c561/1733828380314-F2MEL9MV66HIONWJJWW3/79-791002_the-new-york-times-new-york-times-logo-2237004972.png?format=500w"
                            alt="The New York Times"
                            width={80}
                            height={40}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
