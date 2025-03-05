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
                <h1 className="mb-4 max-w-2xl text-heading-mobile md:text-heading-mobile  lg:text-heading font-semibold ">
                    Helping You Connect with the Exceptional
                </h1>
                <p className="max-w-2xl text-xs font-light md:text-body-mobile lg:text-lg mb-12">
                    Our club curates personal introductions between ambitious, handsome, and highly driven individuals, ensuring connections of substance, vision, and aligned values. Tribeca Date provides a refined experience tailored to the lifestyles and expectations of extraordinary entrepreneurs, delivering meaningful relationships among elite peers.
                </p>
                <div className="absolute bottom-0 left-0 right-0 z-20 md:flex items-center justify-center bg-black/50 lg:backdrop-blur-md py-4">
                    <div className="grid grid-cols-2 gap-4 md:gap-0 mx-auto md:flex lg:flex  items-center justify-center md:space-x-16 lg:space-x-22 px-8 text-white">
                        {/* Example placeholder logos. Replace with your own images */}
                        <div className="col-span-2  items-center ">
                            <span className="text-[11px] lg:text-xs uppercase">Matchmakers Reported In</span>
                        </div>
                        <div className='flex justify-center'>
                            <DynamicImage
                                image="https://images.squarespace-cdn.com/content/v1/66f4261885444f286787c561/1733313321675-U94K9CY3ZLRX907DF2K7/17333131928488559-4.png?format=300w"
                                alt="Today"
                                width={60}
                                height={40}
                                className="object-contain w-12 md:w-16 lg:w-20"
                            />
                        </div>
                        <div className='flex justify-center'>
                            <DynamicImage
                                image="https://images.squarespace-cdn.com/content/v1/66f4261885444f286787c561/1733313322437-NWP4Q2NSAYLFJMC3N5LP/17333131928488559-3.png?format=300w"
                                alt="NBC"
                                width={60}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                       
                        <div className='flex justify-center'>
                            <DynamicImage
                                image="https://images.squarespace-cdn.com/content/v1/66f4261885444f286787c561/1733313323682-73KXANCEH6C3387UZ2B9/17333131928488559-1.png?format=500w"
                                alt="Forbes"
                                width={60}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                        <div className='flex justify-center'>
                            <DynamicImage
                                image="https://images.squarespace-cdn.com/content/v1/66f4261885444f286787c561/1733313323819-57EK1JPD5U7OV49D4ILV/17333131928488559.png?format=500w"
                                alt="CNBC"
                                width={60}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                        <div className='flex justify-center'>
                            <DynamicImage
                                image="https://images.squarespace-cdn.com/content/v1/66f4261885444f286787c561/1733828380314-F2MEL9MV66HIONWJJWW3/79-791002_the-new-york-times-new-york-times-logo-2237004972.png?format=500w"
                                alt="The New York Times"
                                width={60}
                                height={40}
                                className="object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
