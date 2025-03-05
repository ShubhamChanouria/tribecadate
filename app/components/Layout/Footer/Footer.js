// components/Footer.jsx

import DynamicImage from '@/app/components/Modules/Image/DynamicImage'
export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-200 bg-white py-6">
            <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-center space-y-4 px-4 text-center">
                {/* Logo / Brand */}
                <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold italic">Tribeca Date Club</span>
                </div>

                {/* Contact Info */}
                <div className="text-sm text-gray-600">
                    EMAIL:{' '}
                    <a
                        href="mailto:info@tribecadate.com"
                        className="font-medium text-gray-800 hover:underline"
                    >
                        info@tribecadate.com
                    </a>{' '}
                    {/* | PHONE:{' '}
                    <a
                        href="tel:+13107717362"
                        className="font-medium text-gray-800 hover:underline"
                    >
                        +1 (310) 771-7362
                    </a> */}
                </div>

                {/* Navigation Links */}
                {/* <nav className="flex flex-wrap items-center justify-center space-x-4 text-sm font-medium">
                    <a href="#" className="hover:underline">
                        HOME
                    </a>
                    <a href="#" className="hover:underline">
                        ABOUT
                    </a>
                    <a href="#" className="hover:underline">
                        TESTIMONIALS
                    </a>
                    <a href="#" className="hover:underline">
                        MEMBERSHIP
                    </a>
                    <a href="#" className="hover:underline">
                        CELEB SERVICES
                    </a>
                    <a href="#" className="hover:underline">
                        TERMS
                    </a>
                </nav> */}

                {/* Copyright & Designer Info */}
                <div className="text-xs text-gray-500">
                    © Tribeca Date Club. All rights reserved.
                </div>
                {/* <div className="text-xs text-gray-500">SIDE DESIGN</div>     */}

                {/* Icons (BBB rating, Instagram, etc.) */}
                <div className="flex items-center space-x-4">
                    {/* Replace /bbb-a-plus.png with your actual path */}
                    <div className=''>
                        <DynamicImage image={'/social-logos/fb.webp'} alt={'image1'} width={40} height={40} />
                    </div>

                    {/* Instagram Icon */}
                    <div className=''>
                        <DynamicImage image={'/social-logos/instagram.webp'} alt={'image1'} width={45} height={45} />
                    </div>

                </div>
            </div>
        </footer>
    )
}
