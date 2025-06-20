import React, { useEffect, useState } from "react";

export default function GetAllOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/all-orders/")
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((err) => console.error("Error fetching orders:", err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-4">🧺 Laundry Orders</h2>
      <table className="w-full table-auto border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Name</th>
            <th className="p-2">Phone</th>
            <th className="p-2">Pickup</th>
            <th className="p-2">Delivery</th>
            <th className="p-2">Services</th>
            <th className="p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border-t">
              <td className="p-2">{order.name}</td>
              <td className="p-2">{order.phone}</td>
              <td className="p-2">{new Date(order.pickup_datetime).toLocaleString()}</td>
              <td className="p-2">{new Date(order.delivery_datetime).toLocaleString()}</td>
              <td className="p-2">{order.services.join(", ")}</td>
              <td className="p-2 font-semibold text-blue-600">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
