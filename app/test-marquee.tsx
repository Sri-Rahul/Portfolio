"use client";

import { SimpleMarquee } from "./components/eldoraui/simple-marquee-2";

export default function TestMarquee() {
  const items = [
    "Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"
  ];

  return (
    <div className="p-8 bg-black min-h-screen">
      <h1 className="text-white mb-8">Marquee Test</h1>
      
      {/* Pure CSS test */}
      <div className="mb-8">
        <h2 className="text-white mb-4">Pure CSS Marquee Test</h2>
        <div className="marquee-container bg-gray-800 p-2" style={{"--duration": "5s"} as React.CSSProperties}>
          <div className="marquee-content">
            {items.map((item, idx) => (
              <div key={idx} className="text-white px-4 py-2 bg-blue-500 rounded mx-2 whitespace-nowrap">
                {item}
              </div>
            ))}
          </div>
          <div className="marquee-content">
            {items.map((item, idx) => (
              <div key={idx} className="text-white px-4 py-2 bg-blue-500 rounded mx-2 whitespace-nowrap">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Simple component test */}
      <div className="mb-8">
        <h2 className="text-white mb-4">Simple Marquee Component</h2>
        <SimpleMarquee className="bg-gray-800 p-2" speed={5}>
          {items.map((item, idx) => (
            <div key={idx} className="text-white px-4 py-2 bg-red-500 rounded mx-2 whitespace-nowrap">
              {item}
            </div>
          ))}
        </SimpleMarquee>
      </div>
      
      {/* Inline style test */}
      <div className="mb-8">
        <h2 className="text-white mb-4">Inline Style Test</h2>
        <div className="overflow-hidden bg-gray-800 p-2">
          <div 
            className="flex whitespace-nowrap"
            style={{
              animation: "marquee 10s linear infinite",
              minWidth: "200%"
            }}
          >
            {items.map((item, idx) => (
              <div key={idx} className="text-white px-4 py-2 bg-green-500 rounded mx-2">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
