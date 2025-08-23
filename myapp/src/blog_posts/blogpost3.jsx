import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
function Blog3() {
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
        Electric Vehicles: What You Need to Know!
      </h1>

      <p className="text-gray-700 leading-relaxed mb-4">
        The automotive industry is undergoing a revolution, and at the heart of it is the rise of 
        <span className="font-semibold"> Electric Vehicles (EVs)</span>. From Tesla to traditional 
        automakers like Toyota, Hyundai, and Ford, almost every manufacturer is investing heavily in 
        EV technology. But what exactly are electric vehicles, why are they becoming so popular, and 
        what do you need to know before considering one? Let’s break it down.
      </p>

      {/* Section 1: What is an EV */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        1. What Exactly Is an Electric Vehicle?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        An electric vehicle is a car that runs on electricity stored in rechargeable batteries, 
        instead of relying on petrol or diesel. EVs use electric motors which provide instant torque, 
        making them very smooth and often faster in acceleration compared to traditional internal 
        combustion engine (ICE) vehicles.
      </p>

      {/* Section 2: Types of EVs */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        2. Types of Electric Vehicles
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Not all EVs are the same. There are different categories depending on how they use electricity:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li>
          <span className="font-semibold">Battery Electric Vehicles (BEVs):</span> Fully electric, 
          with no petrol engine. Examples: Tesla Model 3, Nissan Leaf.
        </li>
        <li>
          <span className="font-semibold">Plug-in Hybrid Electric Vehicles (PHEVs):</span> Combine 
          a petrol engine with an electric motor. Can run short distances on electricity alone. 
          Example: Toyota Prius PHEV.
        </li>
        <li>
          <span className="font-semibold">Hybrid Electric Vehicles (HEVs):</span> Not plugged in. 
          They use both an engine and electric motor, with the battery charged through driving. 
          Example: Honda Accord Hybrid.
        </li>
      </ul>

      {/* Section 3: Advantages */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        3. Why Are EVs Becoming Popular?
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The shift towards EVs is driven by several important benefits:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li><span className="font-semibold">Environmental impact:</span> EVs produce zero tailpipe emissions, reducing pollution.</li>
        <li><span className="font-semibold">Lower running costs:</span> Electricity is often cheaper than petrol, and EVs have fewer moving parts.</li>
        <li><span className="font-semibold">Quiet and smooth driving:</span> No engine noise, just instant torque.</li>
        <li><span className="font-semibold">Government incentives:</span> In many countries, EV buyers enjoy tax breaks, reduced registration fees, or charging subsidies.</li>
      </ul>

      {/* Section 4: Challenges */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        4. Challenges of Electric Vehicles
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Despite their benefits, EVs are not without drawbacks:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li><span className="font-semibold">Charging infrastructure:</span> In places like Nigeria, charging stations are still very limited.</li>
        <li><span className="font-semibold">Range anxiety:</span> Many buyers worry about how far an EV can go before needing a recharge.</li>
        <li><span className="font-semibold">Upfront cost:</span> EVs are often more expensive than traditional cars, though prices are slowly falling.</li>
        <li><span className="font-semibold">Battery life:</span> Over time, EV batteries degrade, though most last 8–10 years on average.</li>
      </ul>

      {/* Section 5: Things to Consider Before Buying */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        5. What to Consider Before Buying an EV
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        If you’re thinking of buying an electric vehicle, here are a few key points:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li>Check if there are charging stations in your area.</li>
        <li>Look at the car’s range and compare it with your daily driving needs.</li>
        <li>Research government incentives available in your country.</li>
        <li>Factor in maintenance costs, which are usually lower than petrol cars.</li>
      </ul>

      {/* Section 6: The Future of EVs */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        6. The Future of Electric Vehicles
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The EV market is expanding rapidly. More automakers are transitioning to all-electric lineups, 
        and advancements in battery technology are making EVs cheaper, faster, and more reliable. 
        Countries are also setting ambitious goals to phase out petrol cars in the next decade. 
        In Nigeria and Africa at large, EV adoption may take longer due to infrastructure challenges, 
        but eventually, the shift is inevitable.
      </p>

      {/* Conclusion */}
      <p className="text-gray-700 leading-relaxed mt-6">
        Electric vehicles are not just a trend — they are the future of transportation. While they 
        come with both benefits and challenges, being informed helps you make the right decision. 
        Whether you’re an early adopter or just curious, one thing is clear: the road ahead is electric!
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

export default Blog3;
