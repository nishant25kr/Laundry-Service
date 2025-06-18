import React from 'react'
import { Link ,NavLink} from 'react-router-dom';
import { Outlet } from 'react-router-dom';


// export default function About() {
//   return (
//       <div className="py-16 bg-white">
//           <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
//               <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
//                   <div className="md:5/12 lg:w-5/12">
//                       <img
//                           src="https://images.pexels.com/photos/31350298/pexels-photo-31350298/free-photo-of-scenic-road-to-yosemite-s-half-dome-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load"
//                           alt="image"
//                       />
//                   </div>
//                   <div className="md:7/12 lg:w-6/12">
//                       <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
//                           React development is carried out by passionate developers
//                       </h2>
//                       <p className="mt-6 text-gray-600">
//                           Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
//                           accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
//                           aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
//                       </p>
//                       <p className="mt-4 text-gray-600">
//                           Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
//                           Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
//                       </p>
                     
//                       <li>
//                          <NavLink
//                                     to={"/about/nishant"}
//                                     className={({isActive}) =>
//                                         `${isActive?"text-orange":"text-gray"} 
//                                         block py-2 pr-4 pl-3 duration-200 
//                                         border-b border-gray-100 hover:bg-gray-50 
//                                         lg:hover:bg-transparent lg:border-0 
//                                         hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                    AboutNishant
//                             </NavLink>
//                       </li>
//                   </div>
//               </div>
//           </div>
//            <Outlet />
//       </div>
//   );
// }

export default function About() {
  return (
    <div className="font-sans text-gray-800">

      <section className="text-orange-400 py-20 text-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">We're here to make laundry simple, reliable, and stress-free.</h1>
        
      </section>


      <div className="py-24 px-4 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-lg leading-relaxed">
          We started our laundry service to help busy people take back their time.
          Whether you're a student racing between classes, a professional juggling deadlines, or a parent balancing it all—
          we’re here to take laundry off your to-do list with care, speed, and reliability.
        </p>
      </div>


      <div className="py-24 bg-gray-100 px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Who We Serve</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div>
            <h3 className="text-xl font-semibold mb-2">🎓 Students</h3>
            <p>Focus on studies—we’ll handle the laundry pile.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">💼 Working Professionals</h3>
            <p>No more late-night loads. Just clean, fresh clothes.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">👨‍👩‍👧‍👦 Families</h3>
            <p>More time together. Less time doing chores.</p>
          </div>
        </div>
      </div>


      <div className="py-24 px-4 text-center max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">What Makes Us Different</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-2">⚡ Fast Service</h4>
            <p>We promise 24-hour turnaround—always.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">🛡️ Verified Partners</h4>
            <p>All laundry partners are background-checked for your peace of mind.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">🧼 Premium Care</h4>
            <p>We use high-quality detergents to keep your clothes clean and safe.</p>
          </div>
        </div>
      </div>

      
    </div>
  );
}
