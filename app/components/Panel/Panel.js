// components/Panel.js
import Link from 'next/link';
import React from 'react';

export default function Panel() {
  // Define distinct data for Gold & Platinum
  const plans = [
    {
      title: 'Gold',
      subtitle: 'Starting at $20K',
      // Embed HTML tags (e.g., <strong>...</strong>) to bold uppercase phrases
      description: `
        Gold Package: Perfect for those seeking <strong class='lowercase'>PERSONALIZED MATCHMAKING</strong>, 
        with exclusive events, dedicated concierge support, and curated introductions 
        for high-achieving individuals. Experience the next level of connection 
        with a <strong class='lowercase'>PERSONAL MATCH STRATEGY</strong>.
      `,
      features: [
        `<strong class='lowercase'>DEDICATED CONCIERGE SUPPORT</strong> for high-achieving individuals`,
        `Exclusive events for meaningful connections`,
        `Tailored introductions for personalized matchmaking`,
        `<strong class='lowercase'>100% DISCRETION GUARANTEED</strong>`,
      ],
      buttonText: 'Inquire Now',
      // A "gold" color scheme using Tailwind's yellow utilities
      borderColor: 'border-yellow-700',
      buttonStyle: 'bg-yellow-700 text-white hover:text-white border hover:bg-yellow-800',
        highlight: false,
        titleColor: 'text-yellow-700',
    },
    {
      title: 'Platinum',
      subtitle: 'Starting at $50K',
      // Embed HTML tags to bold uppercase phrases
      description: `
        Platinum Package: Designed for those who demand the very best, offering 
        an even more exclusive suite of <strong class='lowercase'>HIGH-END INTRODUCTIONS</strong>, 
        priority access to premium events, and a dedicated concierge team for 
        unmatched experiences. Achieve true exclusivity with an 
        <strong class='lowercase'>ULTIMATE ELITE EXPERIENCE</strong>.
      `,
      features: [
        `<strong class='lowercase'>PRIORITY MATCHMAKING</strong> for swift, high-quality connections`,
        `Access to premium events and exclusive benefits`,
        `<strong class='lowercase'>BESPOKE ATTENTION</strong> from a dedicated concierge team`,
        `<strong class='lowercase'>ELITE DISCRETION</strong> ensuring complete confidentiality`,
      ],
      buttonText: 'Inquire Now',
      // A "platinum" style using darker gray utilities
      borderColor: 'border-gray-500',
      buttonStyle: 'bg-gray-700 text-white hover:bg-gray-800',
      highlight: true, // Show "Most Popular" badge
      titleColor: 'text-gray-500',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-12 md:w-[60%] mx-auto">
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`relative flex flex-col rounded-md border p-6 shadow-sm ${plan.borderColor}`}
        >
          {/* "Most Popular" badge if highlight is true */}
          {plan.highlight && (
            <div className="absolute top-0 right-0 bg-gray-700 text-white text-xs font-semibold px-2 py-1 rounded-bl">
              Most Popular
            </div>
          )}

          {/* Title & Subtitle */}
          <h3 className={`text-xl font-semibold mb-1 ${plan.titleColor}`}>{plan.title}</h3>
          <p className="text-sm font-medium  mb-3">{plan.subtitle}</p>

          {/* Description (renders HTML for bolded phrases) */}
          <p
            className="text-sm mb-4"
            dangerouslySetInnerHTML={{ __html: plan.description }}
          />

          {/* Features List (each feature can have bolded text via HTML) */}
          <ul className="mb-6 space-y-2 min-h-[180px]">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                {/* Check icon */}
                <svg
                  className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p
                  className="text-sm "
                  dangerouslySetInnerHTML={{ __html: feature }}
                />
              </li>
            ))}
          </ul>

          {/* Button: "Inquire Now" (mailto link) */}
          <Link
            href="mailto:info@tribecadate.com"
            className={`text-center mx-auto absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[80%] py-2 rounded font-semibold transition-colors ${plan.buttonStyle}`}
          >
            {plan.buttonText}
          </Link>
        </div>
      ))}
    </div>
  );
}
