import React from "react";
import { Link } from "react-router-dom";

// export default function Home() {
//   return (
//     <div
//       className="mx-auto w-full max-w-10xl h-[400px] bg-cover bg-center"
//       style={{
//         backgroundImage: `url("https://images.pexels.com/photos/4414/black-and-white-clean-housework-launderette.jpg?_gl=1*11wkmuj*_ga*MTc2NzQ5Mzg3NS4xNzQ2NzE2Mzk4*_ga_8JE65Q40S6*czE3NTAxNjMxNDUkbzIkZzEkdDE3NTAxNjQ2MTQkajU5JGwwJGgw")`,
//       }}
//     >
//       <div className="flex justify-center items-center h-full ">

//           <span className="bg-orange-700 text-white  text-xl p-5 rounded-xl">
//             “Laundry Pickup & Delivery at Your Doorstep”
//           </span>

//         <div>
          
//         </div>
//       </div>
//     </div>

//     // <div className="mx-auto w-full max-w-7xl">
//     //   <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
//     //     <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8 " >
//     //       <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
//     //         <h2 className="text-4xl font-bold sm:text-5xl">
//     //           Download Now
//     //           <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
//     //         </h2>

//     //         <Link
//     //           className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
//     //           to="/"
//     //         >
//     //           <svg
//     //             fill="white"
//     //             width="24"
//     //             height="24"
//     //             xmlns="http://www.w3.org/2000/svg"
//     //             fillRule="evenodd"
//     //             clipRule="evenodd"
//     //           >
//     //             <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
//     //           </svg>
//     //           &nbsp; Download now
//     //         </Link>
//     //       </div>
//     //     </div>

//     //     <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12">
//     //       {/* <img
//     //         className="w-96"
//     //         src="https://images.pexels.com/photos/11739438/pexels-photo-11739438.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
//     //         alt="image1"
//     //       /> */}
//     //       <h1>hi</h1>
//     //     </div>
//     //   </aside>

//     //   <div className="grid  place-items-center sm:mt-20">
//     //     <img
//     //       className="sm:w-96 w-48"
//     //       src="https://images.pexels.com/photos/31862298/pexels-photo-31862298/free-photo-of-aerial-view-of-workers-harvesting-lotus-flowers.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
//     //       alt="image2"
//     //     />
//     //   </div>

//     //   <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
//     //     Lorem Ipsum Yojo
//     //   </h1>

//     //   <div id="contact">
//     //     <h2>Contact Section</h2>
//     //     <p>This is the contact section.</p>
//     //   </div>
//     // </div>
//   );
// }


export default function Home() {
  return (
    <div className="font-sans text-gray-800">
      <section
        className="h-[90vh] bg-cover bg-center flex flex-col justify-center items-center text-white text-center px-4"
        style={{
          backgroundImage: `url("https://images.pexels.com/photos/4414/black-and-white-clean-housework-launderette.jpg")`,
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Laundry Pickup & Delivery at Your Doorstep
        </h1>
        <div className="flex gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white py-2 px-6 rounded-lg">
            Book Now
          </button>
          <button className="bg-white text-orange-600 hover:text-orange-700 border border-orange-500 py-2 px-6 rounded-lg">
            Sign Up
          </button>
        </div>
      </section>

      <section className="py-24 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Schedule Pickup</h3>
            <p>Pick a time and place that works best for you.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2. We Wash & Fold</h3>
            <p>Your laundry is cleaned, folded, and packaged with care.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Delivery at Your Convenience</h3>
            <p>We bring your fresh laundry back—fast and contact-free.</p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
          <div>
            <h4 className="text-lg font-semibold mb-2">🚚 Contactless Pickup & Delivery</h4>
            <p>Safe, easy service from your doorstep.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">⏱️ 24-Hour Turnaround</h4>
            <p>Fast, reliable service when you need it.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">💰 Affordable Pricing</h4>
            <p>Transparent and budget-friendly rates.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">🌱 Eco-Friendly Washing</h4>
            <p>We care about your clothes and the planet.</p>
          </div>
        </div>
      </section>

      
    </div>
  );
}
