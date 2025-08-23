import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
function Blog4() {
  return (
    <div>
    <div>
      <div className="bg-slate-200 min-h-screen">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-orange-300 p-4 gap-4">
                    <div className="flex justify-center sm:justify-start">
                      <img src="src/assets/ngbukalogo.jpg" className="w-24 sm:w-32" />
                    </div>
      
                    <div className="text-center font-bold text-gray-500 hover:text-blue-400 transition duration-300 hover:scale-105 text-sm sm:text-base">
                      <a href="https://app.ngbuka.com/">Our <br /> Services</a>
                    </div>
      
                    <div className="flex justify-center sm:justify-end gap-4 text-gray-500 text-2xl sm:text-3xl">
                      <a className="hover:text-blue-400 transition duration-300 hover:scale-105" href="https://web.facebook.com/profile.php?id=61562792144632"><FaFacebookSquare /></a>
                      <a className="hover:text-blue-400 transition duration-300 hover:scale-105" href="https://wa.me/07073042235"><FaSquareWhatsapp /></a>
                      <a className="hover:text-blue-400 transition duration-300 hover:scale-105" href="mailto:info@ngbuka.com.ng"><MdEmail /></a>
                      <a className="hover:text-blue-400 transition duration-300 hover:scale-105" href="tel:+2347072448434"><FaPhoneSquareAlt /></a>
                    </div>
                  </div>
<div className="max-w-3xl mx-auto p-8 bg-white rounded-2xl shadow-lg mt-8">
      <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
        How to Improve Your Car’s Resale Value with Simple Upgrades
      </h1>

      <p className="text-gray-700 leading-relaxed mb-4">
        Every car owner knows that vehicles are depreciating assets — but did you know that 
        with the right care and a few smart upgrades, you can significantly 
        <span className="font-semibold"> increase your car’s resale value</span>? 
        Whether you plan to sell your car in Nigeria or trade it in for a newer model, 
        these practical tips can help you maximize your return and attract more serious buyers.
      </p>

      {/* Section 1: First Impressions */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        1. First Impressions Matter: Exterior Upgrades
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The exterior is the first thing a buyer notices, and it strongly influences their 
        decision. Simple cosmetic improvements can instantly boost your car’s appeal:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li><span className="font-semibold">Repaint or touch-up scratches:</span> A fresh coat of paint or minor scratch repair makes the car look newer.</li>
        <li><span className="font-semibold">Replace worn-out headlights:</span> Cloudy headlights reduce both visibility and value.</li>
        <li><span className="font-semibold">Upgrade your rims and tires:</span> Alloy wheels or new tires can add style and safety points.</li>
        <li><span className="font-semibold">Professional detailing:</span> Washing, waxing, and polishing can transform an old-looking car into a head-turner.</li>
      </ul>

      {/* Section 2: Interior Upgrades */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        2. Refresh the Interior
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        A clean, modern interior makes a strong impression. Buyers often picture themselves 
        driving the car, so comfort and cleanliness are key.
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li><span className="font-semibold">Change seat covers:</span> Leather or high-quality fabric covers give the cabin a fresh look.</li>
        <li><span className="font-semibold">Fix dashboard cracks:</span> A cracked dashboard signals neglect; repairing it adds value.</li>
        <li><span className="font-semibold">Upgrade floor mats:</span> Stylish, durable mats make the car feel well-kept.</li>
        <li><span className="font-semibold">Install ambient lighting:</span> Simple LED strips can give a premium touch without costing much.</li>
      </ul>

      {/* Section 3: Tech Additions */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        3. Add Affordable Technology
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Modern buyers expect a certain level of tech in their cars. Even older cars can be 
        upgraded with budget-friendly gadgets that raise their appeal:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li><span className="font-semibold">Infotainment system:</span> Adding a touchscreen display with Bluetooth and navigation makes a big difference.</li>
        <li><span className="font-semibold">Reverse camera:</span> Enhances safety and convenience — many buyers now consider it essential.</li>
        <li><span className="font-semibold">Dashcam:</span> A small addition that signals responsibility and provides peace of mind.</li>
        <li><span className="font-semibold">Phone chargers & mounts:</span> Simple upgrades that show attention to modern needs.</li>
      </ul>

      {/* Section 4: Mechanical Maintenance */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        4. Prioritize Mechanical Health
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        No matter how shiny your car looks, buyers will always ask about its performance. 
        Keeping your vehicle mechanically sound is non-negotiable:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li><span className="font-semibold">Service regularly:</span> Oil changes, brake pads, and filters should be up to date.</li>
        <li><span className="font-semibold">Fix warning lights:</span> A dashboard full of warning signals can turn buyers away instantly.</li>
        <li><span className="font-semibold">Check suspension and steering:</span> Smooth handling reassures the buyer.</li>
        <li><span className="font-semibold">Replace worn-out batteries:</span> Nobody wants a car that struggles to start.</li>
      </ul>

      {/* Section 5: Paperwork */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        5. Keep Your Paperwork in Order
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        In Nigeria, clean documentation can make or break a car sale. Buyers are more 
        comfortable paying a higher price if they trust the paperwork is complete.
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li>Ensure your <span className="font-semibold">vehicle papers</span> (custom clearance, roadworthiness, insurance, etc.) are valid.</li>
        <li>Keep a <span className="font-semibold">service history record</span> — it shows consistent care.</li>
        <li>Transfer documents legally to avoid issues during resale.</li>
      </ul>

      {/* Section 6: Conclusion */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        Final Thoughts
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Improving your car’s resale value doesn’t always require huge investments. 
        With a combination of <span className="font-semibold">cosmetic touch-ups</span>, 
        <span className="font-semibold"> tech upgrades</span>, and <span className="font-semibold"> proper maintenance</span>, 
        you can attract serious buyers willing to pay more. 
        Remember — the goal is to make the buyer feel like your car has been 
        <span className="font-semibold"> loved, well-kept, and worth the asking price.</span>
      </p>
    </div>





                  <div>
      <hr className="border-t-2 border-purple-200 my-6 mx-auto" />
            <div className="p-4 text-center font-bold text-orange-500 text-sm sm:text-base pb-9">
              &#169; NGBUKA LIMITED 2025
            </div>
          </div>
      
    </div>
    </div>
    </div>
  );
}

export default Blog4;
