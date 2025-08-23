import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneSquareAlt } from "react-icons/fa";
function Blog2() {
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
        How to Check a Used Car Before Buying – A Complete Guide
      </h1>

      <p className="text-gray-700 leading-relaxed mb-4">
        Buying a used car can be one of the smartest financial decisions you make,
        but it can also be a nightmare if you don’t know what to look for. In Nigeria
        and many other countries, the used car market is huge, and unfortunately,
        not every seller is honest. Whether you’re buying from a dealer or directly
        from an individual, doing a proper inspection can save you from wasting money
        on a problematic car.
      </p>

      <p className="text-gray-700 leading-relaxed mb-4">
        This complete guide walks you through the most important things to check 
        before paying for a used car. From documents to physical inspection to test driving,
        these steps will help you make an informed decision.
      </p>

      {/* Step 1: Documentation */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        1. Verify All Documents
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        The very first thing you should check is the car’s paperwork. Without proper documents, 
        you risk buying a stolen vehicle or one with unpaid duties. Confirm the following:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li><span className="font-semibold">Proof of ownership</span> – such as the purchase receipt.</li>
        <li><span className="font-semibold">Customs papers</span> – especially for Tokunbo (imported) cars.</li>
        <li><span className="font-semibold">Vehicle license & registration</span>.</li>
        <li><span className="font-semibold">Roadworthiness certificate</span>.</li>
        <li><span className="font-semibold">Insurance papers</span>.</li>
      </ul>

      {/* Step 2: Exterior */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        2. Inspect the Car’s Exterior
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Walk around the car and take your time. Look for dents, scratches, and signs of repainting 
        which might indicate previous accidents. Pay close attention to the alignment of the doors, 
        bonnet, and boot — uneven gaps can suggest the car was involved in a collision.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Also, check the tires. Uneven tire wear can point to alignment issues or suspension problems. 
        Good tires mean the previous owner likely cared about maintenance.
      </p>

      {/* Step 3: Interior */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        3. Inspect the Interior
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Sit inside and check the condition of the seats, dashboard, and controls. Test the air 
        conditioning, radio, and windows. Make sure all lights and indicators work. 
        A well-kept interior often reflects how much care the owner gave to the vehicle overall.
      </p>

      {/* Step 4: Under the Hood */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        4. Check Under the Hood
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        This is one of the most critical parts of your inspection. Pop the bonnet and look at the engine. 
        Check for:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li>Oil level and color (milky oil may mean engine trouble).</li>
        <li>Coolant level and any leaks.</li>
        <li>Battery condition (no corrosion on terminals).</li>
        <li>Strange smells or visible damage to belts and hoses.</li>
      </ul>

      {/* Step 5: Test Drive */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        5. Take It for a Test Drive
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Never buy a used car without test-driving it. During the drive:
      </p>
      <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
        <li>Listen for unusual noises from the engine or suspension.</li>
        <li>Check if the gear shifts smoothly (manual or automatic).</li>
        <li>Test the brakes for responsiveness.</li>
        <li>Pay attention to steering — it should not pull to one side.</li>
      </ul>

      {/* Step 6: Mileage */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        6. Check the Mileage
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        Mileage gives a rough idea of how much the car has been used. A very low mileage might 
        sound attractive, but sometimes odometers are tampered with. Always compare the mileage 
        with the age of the car and the condition of its interior and exterior.
      </p>

      {/* Step 7: Mechanic Inspection */}
      <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
        7. Bring a Trusted Mechanic
      </h2>
      <p className="text-gray-700 leading-relaxed mb-4">
        No matter how much you know about cars, it’s always wise to have a trusted mechanic 
        inspect the vehicle before you pay. They can spot hidden issues that you might miss, 
        such as transmission faults, engine knocks, or suspension wear.
      </p>

      {/* Conclusion */}
      <p className="text-gray-700 leading-relaxed mt-6">
        Buying a used car doesn’t have to be risky if you follow these steps. By checking 
        documents, inspecting the car inside and out, test-driving, and consulting a mechanic, 
        you protect yourself from scams and unexpected repair costs. Remember, patience and 
        thoroughness are your best friends when shopping for a used car. It’s better to walk away 
        from a bad deal than to regret it later.
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

export default Blog2;
