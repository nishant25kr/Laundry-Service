// import React from 'react'

// function Order() {
//   return (
//     <div>
//       <h1>order page</h1>
//     </div>
//   )
// }

// export default Order
import React from "react";

export default function Order() {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-start p-6 gap-10">
      
      <div className=" rounded-lg p-6 max-w-xl w-full my-auto text-center">
        <h1 className="text-3xl font-bold mb-4">
          Welcome to the future of laundry! ✨
        </h1>
        <p className="text-xl font-medium mb-2">Join the revolution! ✊</p>
        <ul className="list-disc text-left ml-6 space-y-2 text-gray-700">
          <li>Certified Fabric Experts</li>
          <li>Fastest Laundry Service EVER!</li>
          <li>Hassle-Free Doorstep Pickups</li>
          <li>Assured On-time Delivery</li>
        </ul>
      </div>

      <div className=" max-w-2xl w-full p-6  rounded-lg shadow-lg bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-6 border-b pb-2">
          PLACE YOUR ORDER
        </h2>
        

        <h3 className="text-lg font-semibold mb-2">Personal Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <input type="text" placeholder="Name" className="input input-bordered" />
          <input type="tel" placeholder="Phone" className="input input-bordered" />
          <input type="email" placeholder="Email (optional)" className="input input-bordered sm:col-span-2" />
        </div>

        <h3 className="text-lg font-semibold mb-2">Pickup & Delivery Info</h3>
        <div className="grid grid-cols-1 gap-4 mb-6">
          <input type="text" placeholder="Pickup Address" className="input input-bordered" />
          <input type="datetime-local" className="input input-bordered" />
          <div className="flex items-center space-x-2">
            <input type="checkbox" id="same" defaultChecked />
            <label htmlFor="same">Delivery Address Same as Pickup</label>
          </div>
          <input type="datetime-local" className="input input-bordered" />
        </div>

        

        
        {/* <h3 className="text-lg font-semibold mb-2">Step 5: Payment Preference</h3> */}
        <div className="flex flex-col gap-2 mb-6">
          <label className="flex items-center space-x-2">
            <input type="radio" name="payment" />
            <span>Pay on Delivery</span>
          </label>
          <label className="flex items-center space-x-2 text-gray-400">
            <input type="radio" name="payment" disabled />
            <span>Online Payment (Coming Soon)</span>
          </label>
        </div>

        {/* Submit */}
        <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition">
          ✅ Place Order
        </button>
        <p className="mt-4 text-center text-sm text-green-600">
          ✔️ You’ll receive an SMS confirmation with tracking link
        </p>
      </div>
    </div>
  );
}
