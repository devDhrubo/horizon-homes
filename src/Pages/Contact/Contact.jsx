import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Helmet } from "react-helmet";

const Contact = () => {
  const center = [23.801486790251566, 90.41280129427179];
  const zoom = 13;

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <div className="p-10 mt-6">
        <MapContainer
          center={center}
          zoom={zoom}
          style={{ height: "400px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; OpenStreetMap contributors"
          />

          <Marker position={center}>
            <Popup>Hey! i live Here</Popup>
          </Marker>
        </MapContainer>
      </div>
      <div>
        <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
        <section className="p-6 dark:text-gray-800">
	<form noValidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-50">
		<h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
		<div>
			<label htmlFor="name" className="block mb-1 ml-1">Name</label>
			<input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
		</div>
		<div>
			<label htmlFor="email" className="block mb-1 ml-1">Email</label>
			<input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100" />
		</div>
		<div>
			<label htmlFor="message" className="block mb-1 ml-1">Message</label>
			<textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-gray-100"></textarea>
		</div>
		<div>
			<button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-green-500 focus:dark:ring-green-500 hover:dark:ring-green-500 dark:text-gray-50">Send</button>
		</div>
	</form>
</section>
        </section>
      </div>
      <Helmet>
        <title>Contact Us</title>
      </Helmet>
    </div>
    
  );
};

export default Contact;
