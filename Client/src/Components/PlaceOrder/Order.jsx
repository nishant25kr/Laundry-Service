// import React, { useState } from "react";

// export default function Order() {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     // pickup_address: "",
//     // pickup_datetime: "",
//     // delivery_address: "",
//     // delivery_datetime: "",
//     // clothes: { shirt: 2, bedsheet: 1 }, // hardcoded for now
//     // services: ["wash", "iron"],        // hardcoded for now
//     // notes: "asdfadsfa",
//     // payment_mode: "COD",
//     // sameAddress: true,
//   });

//   const handleChange = (e) => {
    
//     try {
//       const { name, value, type, checked } = e.target;
//       console.log("hi")
//       if (name === "sameAddress") {
//         setForm((prev) => ({
//           ...prev,
//           sameAddress: checked,
//           delivery_address: checked ? prev.pickup_address : "",
//         }));
//       } else {
//         setForm((prev) => ({
//           ...prev,
//           [name]: value,
//         }));
//       }
//     } catch (error) {
//      console.log("error while handel change") 
//     }
//   };

//   const handleSubmit = async () => {
//     console.log("inside handle submit")
//     const orderData = {
//       name: form.name,
//       phone: form.phone,
//       email: form.email,
//       // pickup_address: form.pickup_address,
//       // pickup_datetime: form.pickup_datetime,
//       // delivery_address: form.sameAddress
//       //   ? form.pickup_address
//       //   : form.delivery_address,
//       // delivery_datetime: form.delivery_datetime,
//       // clothes: form.clothes,
//       // services: form.services,
//       // notes: form.notes,
//       // payment_mode: form.payment_mode,
//     };
//     console.log("hi")

//     try {
//       const response = await fetch("http://localhost:8000/api/place-order/", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(orderData),
//       });
//       // console.log(response)

//       const data = await response.json();
//       if (response.ok) {
//         alert(`Order placed! Your ID: ${data.order_id}`);
//       } else {
//         alert("Error: " + data.error);
//       }
//     } catch (err) {
//       console.error("Request failed:", err);
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row justify-center items-start p-6 gap-10">
//       {/* Info Section */}
//       <div className="rounded-lg p-6 max-w-xl w-full my-auto text-center">
//         <h1 className="text-3xl font-bold mb-4">
//           Welcome to the future of laundry! ✨
//         </h1>
//         <p className="text-xl font-medium mb-2">Join the revolution! ✊</p>
//         <ul className="list-disc text-left ml-6 space-y-2 text-gray-700">
//           <li>Certified Fabric Experts</li>
//           <li>Fastest Laundry Service EVER!</li>
//           <li>Hassle-Free Doorstep Pickups</li>
//           <li>Assured On-time Delivery</li>
//         </ul>
//       </div>

//       {/* Form Section */}
//       <div className="max-w-2xl w-full p-6 rounded-lg shadow-lg bg-gray-50">
//         <h2 className="text-2xl font-bold text-center mb-6 border-b pb-2">
//           PLACE YOUR ORDER
//         </h2>

//         <h3 className="text-lg font-semibold mb-2">Personal Details</h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//           <input
//             type="text"
//             name="name"
//             placeholder="Name"
//             value={form.name}
//             onChange={handleChange}
//             className="input input-bordered"
//           />
//           <input
//             type="tel"
//             name="phone"
//             placeholder="Phone"
//             value={form.phone}
//             onChange={handleChange}
//             className="input input-bordered"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email (optional)"
//             value={form.email}
//             onChange={handleChange}
//             className="input input-bordered sm:col-span-2"
//           />
//         </div>

//         <h3 className="text-lg font-semibold mb-2">Pickup & Delivery Info</h3>
//         {/* <div className="grid grid-cols-1 gap-4 mb-6">
//           <input
//             type="text"
//             name="pickup_address"
//             placeholder="Pickup Address"
//             value={form.pickup_address}
//             onChange={handleChange}
//             className="input input-bordered"
//           />
//           <input
//             type="datetime-local"
//             name="pickup_datetime"
//             value={form.pickup_datetime}
//             onChange={handleChange}
//             className="input input-bordered"
//           />
//           <div className="flex items-center space-x-2">
//             <input
//               type="checkbox"
//               name="sameAddress"
//               id="same"
//               checked={form.sameAddress}
//               onChange={handleChange}
//             />
//             <label htmlFor="same">Delivery Address Same as Pickup</label>
//           </div>
//           {!form.sameAddress && (
//             <input
//               type="text"
//               name="delivery_address"
//               placeholder="Delivery Address"
//               value={form.delivery_address}
//               onChange={handleChange}
//               className="input input-bordered"
//             />
//           )}
//           <input
//             type="datetime-local"
//             name="delivery_datetime"
//             value={form.delivery_datetime}
//             onChange={handleChange}
//             className="input input-bordered"
//           />
//         </div> */}

//         <h3 className="text-lg font-semibold mb-2">Payment Preference</h3>
//         {/* <div className="flex flex-col gap-2 mb-6">
//           <label className="flex items-center space-x-2">
//             <input
//               type="radio"
//               name="payment_mode"
//               value="COD"
//               checked={form.payment_mode === "COD"}
//               onChange={handleChange}
//             />
//             <span>Pay on Delivery</span>
//           </label>
//           <label className="flex items-center space-x-2 text-gray-400">
//             <input type="radio" name="payment_mode" disabled />
//             <span>Online Payment (Coming Soon)</span>
//           </label>
//         </div> */}

//         {/* Submit */}
//         <button
//           onClick={handleSubmit}
//           className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition"
//         >
//           ✅ Place Order
//         </button>
//         <p className="mt-4 text-center text-sm text-green-600">
//           ✔️ You’ll receive an SMS confirmation with tracking link
//         </p>
//       </div>
//     </div>
//   );
// }



import React, { useState } from "react";

export default function Order() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const orderData = {
      name: form.name,
      phone: form.phone,
      email: form.email,
    };

    try {
      const response = await fetch("http://localhost:8000/api/place-order/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();
      if (response.ok) {
        alert(`Order placed! Your ID: ${data.order_id || data.id}`);
      } else {
        alert("Error: " + data.error);
      }
    } catch (err) {
      console.error("Request failed:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 shadow-md bg-white rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Place Your Order</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Phone"
        value={form.phone}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Email (optional)"
        value={form.email}
        onChange={handleChange}
        className="w-full p-2 mb-4 border rounded"
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
      >
        ✅ Place Order
      </button>
    </div>
  );
}

