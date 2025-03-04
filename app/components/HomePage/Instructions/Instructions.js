import React from 'react'
import DynamicImage from '@/app/components/Modules/Image/DynamicImage'
import PrimaryButton from '@/app/components/Modules/Button/PrimaryButton'
const Instructions = () => {
    return (
        <div className=' w-[80%] my-12 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                    <h3 className='text-subheading font-semibold '>This is the world’s most exclusive network, bringing together accomplished and attractive people with winning personalities, in search of the perfect partner.
                    </h3>
                    <p className='mt-8 text-body text-gray-500 font-light'>
                        Our white-glove, concierge-style service is designed to introduce you to extraordinary individuals who embody your ambition, vision, and values, ensuring you find nothing less than ‘The One.’ At Soho Date, exclusivity is the hallmark of our approach. Unlike impersonal franchise organizations, our elite clientele appreciates the privilege of being among a select few, where bespoke attention and absolute discretion are guaranteed. Our highly accomplished team of experts crafts every detail of your matchmaking journey, tailoring a program as unique and refined as you are. With an unwavering commitment to surpassing expectations, Soho Date delivers an unparalleled experience, elevating your search for meaningful connections into a luxurious and transformative endeavour.
                    </p>
                    <div className='mt-8'>
                        <DynamicImage image={'https://images.squarespace-cdn.com/content/v1/66f4261885444f286787c561/038c06bf-3ac7-4ee3-8c63-8273f0930f64/shutterstock_2251938397.jpg?format=2500w'} alt={'image1'} width={500} height={200} />
                    </div>
                </div>
                <div>
                    <div className=''>
                        <DynamicImage image={'https://images.squarespace-cdn.com/content/v1/66f4261885444f286787c561/1b878e79-81b0-4d5c-bc14-629046fd30b6/shutterstock_1862081374.jpg?format=2500w'} alt={'image1'} width={500} height={200} />
                    </div>

                    <p className='mt-8 text-body text-gray-500 font-light'>
                        Our white-glove, concierge-style service is designed to introduce you to extraordinary individuals who embody your ambition, vision, and values, ensuring you find nothing less than ‘The One.’ At Soho Date, exclusivity is the hallmark of our approach. Unlike impersonal franchise organizations, our elite clientele appreciates the privilege of being among a select few, where bespoke attention and absolute discretion are guaranteed. Our highly accomplished team of experts crafts every detail of your matchmaking journey, tailoring a program as unique and refined as you are. With an unwavering commitment to surpassing expectations, Soho Date delivers an unparalleled experience, elevating your search for meaningful connections into a luxurious and transformative endeavour.
                    </p>
                    <h3 className='mt-8 text-subheading font-semibold '>This is the world’s most exclusive network, bringing together accomplished and attractive people with winning personalities, in search of the perfect partner.
                    </h3>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-8 mt-8'>
            <h3 className='text-subheading font-semibold '>Are you eligible for Soho Date Club?</h3>
                <PrimaryButton text='Discover more'  className={"uppercase text-sm py-3.5 px-8 "}/>
            </div>
        </div>
    )
}

export default Instructions