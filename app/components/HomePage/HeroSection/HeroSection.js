// components/HeroSection.jsx

import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative h-[60vh] w-full overflow-hidden bg-black bg-cover bg-center" style={{ backgroundImage: "url('/love/rings.webp')", backgroundColor: 'rgba(0,0,0,0.6)', backgroundBlendMode: 'darken' }}>
      {/* Background image using Next.js Image with fill layout */}
      

      {/* Content Overlay */}
      <div className="flex h-full flex-col items-center justify-center px-4 text-center text-white">
        <h2 className="mb-6 max-w-2xl text-2xl font-semibold md:text-3xl">
          Isn&apos;t it time to refine the search for your ultimate partner?
        </h2>
        <button className=" bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-200 md:text-base">
          JOIN THE WAITLIST
        </button>
      </div>
    </section>
  )
}
