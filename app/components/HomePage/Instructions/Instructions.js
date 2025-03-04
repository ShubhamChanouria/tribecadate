import React from 'react'
import DynamicImage from '@/app/components/Modules/Image/DynamicImage'
import PrimaryButton from '@/app/components/Modules/Button/PrimaryButton'
const Instructions = ({ onClick }) => {
    return (
        <div className=' md:w-[80%] my-12 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                    <h3 className='text-subheading font-semibold '>Tribeca Date is New York's most exclusive network, bringing together accomplished, attractive young tech founders with winning personalities, seeking the perfect partner.
                    </h3>
                    <p className='mt-8 text-body text-gray-500 font-light'>
                        Our white-glove, concierge-style service introduces you to extraordinary individuals who embody your ambition, vision, and values, ensuring you find nothing less than ‘The One.’ At Tribeca Date, exclusivity defines our approach. Unlike impersonal franchise organizations, our elite clientele enjoys being part of a carefully curated community, with bespoke attention and absolute discretion guaranteed. Our expert team meticulously manages every detail of your matchmaking journey, crafting an experience as unique and refined as you are. With a commitment to exceeding expectations, Tribeca Date transforms your search for meaningful connections into a luxurious and transformative endeavor.
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
                        We understand that your demanding, high-achieving lifestyle requires connections with equally extraordinary individuals. The true challenge lies not merely in meeting people but in accessing a meticulously curated community of remarkable singles who match your elevated standards and aspirations. This is precisely what distinguishes Tribeca Date, along with our unparalleled global reach. With an exclusive international network that spans the most cosmopolitan cities and elite circles worldwide, we grant access to exceptional individuals who might otherwise remain beyond reach.
                        For those seeking an elevated experience, our bespoke approach extends far beyond simple introductions. Tribeca Date provides a sophisticated, concierge-style service tailored specifically for young, visionary tech founders. Our expert team meticulously handles each detail, guiding you confidently through the matchmaking process. We offer personalized support, empowering you to refine your choices and make decisions aligned with your relationship aspirations.
                        At Tribeca Date, we offer more than exclusive access—we deliver an unparalleled, sophisticated matchmaking experience. Our global network, relationship expertise, and white-glove coaching converge seamlessly to create a uniquely elevated service. This exceptional blend of luxury, insight, and discretion solidifies our reputation as the premier matchmaking service for elite tech entrepreneurs.
                    </p>
                    <h3 className='mt-8 text-subheading font-semibold '>This is the world’s most exclusive network, bringing together accomplished and attractive people with winning personalities, in search of the perfect partner.
                    </h3>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-8 mt-8'>
                <h3 className='text-subheading font-semibold '>Are you Tribeca for Soho Date Club?</h3>
                <PrimaryButton text='Discover more' className={"uppercase text-sm py-3.5 px-8 cursor-pointer hover:bg-black hover:text-white"} onClick={onClick} />
            </div>
        </div>
    )
}

export default Instructions