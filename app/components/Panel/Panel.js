// components/PricingCard.js
export default function Panel() {
    // data/plans.js
    const plan = [
        {
            title: 'BASIC',
            subtitle: 'Same-Day Consult',
            description:
                'Unlimited access to YesLawyer legal platform. Includes unlimited legal chat and access to certified lawyer to work your needs.',
            features: [
                '24/7 Legal Chat & Q&A',
                'Document Review and Filings',
                'Unlimited Calls with YesLawyer Team',
                'Access to Lawyers in 85+ Fields',
            ],
            buttonText: 'Start Now',
            buttonStyle: 'bg-black text-white hover:bg-gray-800',
            highlight: false, // Not highlighted
        },
        {
            title: 'PRO',
            subtitle: 'Free Same-Day Consult',
            description:
                'Unlimited access to YesLawyer legal platform. Includes unlimited legal chat and access to certified lawyer to work your needs.',
            features: [
                'Initial Consultation',
                '24/7 Legal Chat & Q&A',
                'Document Review and Filings',
                'Unlimited Calls with YesLawyer Team',
                'Access to Lawyers in 85+ Fields',
            ],
            buttonText: 'Get Free Case Evaluation',
            buttonStyle:  'bg-black text-white hover:bg-gray-800',
            highlight: true, // Will display "Most Popular" badge
        },
    ];

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 my-12 w-[60%] mx-auto'>
            {plan.map((plan, index) => (
                <div key={index}
                    className={`relative flex flex-col rounded-md border p-6 shadow-sm
          ${plan.highlight ? 'border-black' : 'border-gray-300'}`}
                >
                    {/* "Most Popular" badge if highlight is true */}
                    {plan.highlight && (
                        <div className="absolute top-0 right-0 bg-black text-white text-xs font-semibold px-2 py-1 rounded-bl">
                            Most Popular
                        </div>
                    )}

                    <h3 className="text-subheading font-semibold mb-1">{plan.title}</h3>
                    <p className="text-sm font-medium text-light text-gray-600 mb-3">{plan.subtitle}</p>
                    <p className="text-gray-800 text-sm text-light mb-4">{plan.description}</p>

                    <ul className="mb-6 space-y-2 min-h-[180px]">
                        {plan.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                                {/* Check icon or any icon you prefer */}
                                <svg
                                    className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                </svg>
                                <p className="text-sm text-gray-700">{feature}</p>
                            </li>
                        ))}
                    </ul>

                    <button
                        className={`mx-auto absolute bottom-4 left-[50%]  translate-x-[-50%] w-[80%] py-2 rounded font-semibold transition-colors
            ${plan.buttonStyle}`}
                    >
                        {plan.buttonText}
                    </button>
                </div>))}
        </div>
    );
}
