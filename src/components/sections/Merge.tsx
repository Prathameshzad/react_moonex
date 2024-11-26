import * as Accordion from "@radix-ui/react-accordion";

const Merge = () => {
  const comparisonPoints = [
    "Point no one",
    "Point no two this",
    "Point no three this",
    "Point no four this",
    "Point no five this",
  ];

  const features = [
    {
      icon: "$",
      title: "Cheapest TXs",
      description:
        "Exchange popular digital currencies at the cheapest possible transaction price",
    },
    {
      icon: "🛡",
      title: "CerTiK",
      description:
        "We are Audited by CerTik. CerTik is the leading security-focused ranking platform to",
    },
    {
      icon: "🔒",
      title: "No Contract Sells",
      description: "No contract sells to fund the marketing wallets",
    },
    {
      icon: "⚡",
      title: "CrossDex Support",
      description:
        "Exchange popular digital currencies at the cheapest possible transaction price",
    },
  ];

  return (
    <div className="text-white p-4 md:p-8 lg:p-44 z-10 relative overflow-hidden">
      {/* Features Section */}
      <div className="max-w-6xl mx-auto">
        <div className="flex">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 pt-10">
            Why <span className="text-yellow-500  font-neue-machina">MoonEX</span> ?
          </h1>
        </div>
        <div className="bg-[#ffffff07] p-8 rounded-2xl mb-16">
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse rounded-lg">
              <thead>
                <tr>
                  <th className="py-4 text-center w-1/4 border-r-2 border-gray-600 rounded-tl-lg">
                    <span className="text-yellow-500 text-lg">Comparison</span>
                  </th>
                  <th className="py-4 text-center w-1/4 border-b-2 border-gray-600">
                    <span className="text-yellow-500 text-lg">🌙 Moonex</span>
                  </th>
                  <th className="py-4 text-center w-1/4 border-l-2 border-gray-600 rounded-tr-lg">
                    <span className="text-pink-500 text-lg">🦄 UNISWAP</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonPoints.map((point, index) => (
                  <tr key={index}>
                    <td className="py-4 px-2 text-gray-400 border-y-2 border-r-2 border-gray-600 rounded-bl-lg  font-neue-machina">
                      {point}
                    </td>
                    <td className="py-4 text-center border-2 border-gray-600">
                      <span className="text-green-500">✓</span>
                    </td>
                    <td className="py-4 text-center border-y-2 border-l-2 border-gray-600 rounded-br-lg">
                      <span className="text-red-500">✕</span>
                    </td>
                  </tr>
                ))}
                <tr>
                  <td className="py-4 px-2 text-gray-400 rounded-bl-lg"></td>
                  <td className="py-4 text-center border-x-2 border-gray-600"></td>
                  <td className="py-4 text-center rounded-br-lg"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className=" font-neue-machina">
          <h2 className="text-2xl md:text-3xl mb-8 ">
            Our <span className="text-yellow-500">Features</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 bg-opacity-50 rounded-lg p-6 hover:bg-opacity-70 flex flex-col items-start"
              >
                <div className="relative mb-4">
                  <div className="absolute inset-0 w-12 h-12 bg-[#ffffff2d] rounded-full -z-10"></div>
                  <div className="text-2xl flex justify-center items-center w-12 h-12">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm text-left">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

        </div>
        <div className="absolute top-96 left-96 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl hidden md:flex"></div>
      </div>

      {/* FAQ Section */}
      <div className="py-10 text-white p-4 relative  font-neue-machina">
        <div className="max-w-3xl mx-auto relative z-10 bg-[#ffffff07] rounded-md p-10">
          <h2 className="text-2xl md:text-3xl text-yellow-500 font-bold mb-8">
            FAQs
          </h2>
          <Accordion.Root type="single" collapsible className="space-y-4">
            <Accordion.Item value="item-1" className="group">
              <Accordion.Header>
                <Accordion.Trigger className="flex items-center justify-between cursor-pointer py-4 text-base md:text-lg border-b border-gray-800 w-full text-left">
                  How do I get a Referral Code?
                  <svg
                    className="w-6 h-6 transform transition-transform duration-300 group-data-[state=open]:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="mt-4 text-gray-400 overflow-hidden transition-all duration-500 max-h-0 data-[state=open]:max-h-96 text-sm text-left">
                Contact our support team to get your unique referral code.
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-2" className="group">
              <Accordion.Header>
                <Accordion.Trigger className="flex items-center justify-between cursor-pointer py-4 text-base md:text-lg border-b border-gray-800 w-full text-left">
                  Do I get rewarded in tokens or ETH when I refer buyers?
                  <svg
                    className="w-6 h-6 transform transition-transform duration-300 group-data-[state=open]:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="mt-4 text-gray-400 overflow-hidden transition-all duration-500 max-h-0 data-[state=open]:max-h-96 text-sm text-left">
                You receive your rewards in ETH instantly once someone you refer
                makes a transaction!
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-3" className="group">
              <Accordion.Header>
                <Accordion.Trigger className="flex items-center justify-between cursor-pointer py-4 text-base md:text-lg border-b border-gray-800 w-full text-left">
                  Can I change my referral code after registration?
                  <svg
                    className="w-6 h-6 transform transition-transform duration-300 group-data-[state=open]:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="mt-4 text-gray-400 overflow-hidden transition-all duration-500 max-h-0 data-[state=open]:max-h-96 text-sm text-left">
                Referral codes cannot be changed after registration. Please
                ensure it is correct during sign-up.
              </Accordion.Content>
            </Accordion.Item>
          </Accordion.Root>
          <div className="absolute w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl hidden md:flex transform translate-x-0 translate-y-0 md:translate-x-[-26rem] md:translate-y-[-10rem]"></div>
          <div className="absolute top-0 -right-96 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl hidden md:flex transform translate-x-0 translate-y-0 md:translate-x-[-1rem] md:translate-y-[-10rem]"></div>
        </div>
      </div>
    </div>
  );
};

export default Merge;
