import { useLocation, useNavigate, } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";
import a1 from "../assets/places/aus1.jpg"
import a2 from "../assets/places/aus2.jpg"
import a3 from "../assets/places/aus3.jpg"
import a4 from "../assets/places/aus4.jpg"
import a5 from "../assets/places/aus5.jpg"
import az1 from "../assets/places/az1.jpg"
import az2 from "../assets/places/az2.jpg"
import az3 from "../assets/places/az3.jpg"
import az4 from "../assets/places/az4.jpg"
import az5 from "../assets/places/az5.jpg"
import ay1 from "../assets/places/ay1.jpg"
import ay2 from "../assets/places/ay2.jpg"
import ay3 from "../assets/places/ay3.jpg"
import ay4 from "../assets/places/ay4.jpg"
import ay5 from "../assets/places/ay5.jpg"
import bali1 from "../assets/places/bali1.jpg"
import bali2 from "../assets/places/bali2.jpg"
import bali3 from "../assets/places/bali3.jpg"
import bali4 from "../assets/places/bali4.jpg"
import bali5 from "../assets/places/bali5.jpg"
import bhu1 from "../assets/places/bhu1.jpg"
import bhu2 from "../assets/places/bhu2.jpg"
import bhu3 from "../assets/places/bhu3.jpg"
import bhu4 from "../assets/places/bhu4.jpg"
import bhu5 from "../assets/places/bhu5.jpg"
import du1 from "../assets/places/du1.jpg"
import du2 from "../assets/places/du2.jpg"
import du3 from "../assets/places/du3.jpg"
import du4 from "../assets/places/du4.jpg"
import du5 from "../assets/places/du5.jpg"
import e1 from "../assets/places/e1.jpg"
import e2 from "../assets/places/e2.jpg"
import e3 from "../assets/places/e3.jpg"
import e4 from "../assets/places/e4.jpg"
import e5 from "../assets/places/e5.jpg"
import g1 from "../assets/places/g1.jpg"
import g2 from "../assets/places/g2.jpg"
import g3 from "../assets/places/g3.jpg"
import g4 from "../assets/places/g4.jpg"
import g5 from "../assets/places/g5.jpg"
import h1 from "../assets/places/h1.jpg"
import h2 from "../assets/places/h2.png"
import h3 from "../assets/places/h3.jpg"
import h4 from "../assets/places/h4.jpg"
import h5 from "../assets/places/h5.jpg"
import j1 from "../assets/places/j1.jpg"
import j2 from "../assets/places/j2.jpg"
import j3 from "../assets/places/j3.jpg"
import j4 from "../assets/places/j4.jpg"
import j5 from "../assets/places/j5.jpg"
import k1 from "../assets/places/k1.jpg"
import k2 from "../assets/places/k2.jpg"
import k3 from "../assets/places/k3.jpg"
import k4 from "../assets/places/k4.jpg"
import k5 from "../assets/places/k5.jpg"
import m1 from "../assets/places/m1.jpg"
import m2 from "../assets/places/m2.jpg"
import m3 from "../assets/places/m3.jpg"
import m4 from "../assets/places/m4.jpg"
import m5 from "../assets/places/m5.jpg"
import mal1 from "../assets/places/mal1.jpg"
import mal2 from "../assets/places/mal2.jpg"
import mal3 from "../assets/places/mal3.jpg"
import mal4 from "../assets/places/mal4.jpg"
import mal5 from "../assets/places/mal5.jpg"
import mau1 from "../assets/places/mau1.jpg"
import mau2 from "../assets/places/mau2.jpg"
import mau3 from "../assets/places/mau3.jpg"
import mau4 from "../assets/places/mau4.jpg"
import mau5 from "../assets/places/mau5.jpg"
import ne1 from "../assets/places/ne1.jpg"
import ne2 from "../assets/places/ne2.jpg"
import ne3 from "../assets/places/ne3.jpg"
import ne4 from "../assets/places/ne4.jpg"
import ne5 from "../assets/places/ne5.jpg"
import nz1 from "../assets/places/nz1.jpg"
import nz2 from "../assets/places/nz2.jpg"
import nz3 from "../assets/places/nz3.jpg"
import nz4 from "../assets/places/nz4.jpg"
import nz5 from "../assets/places/nz5.jpg"
import o1 from "../assets/places/o1.jpg"
import o2 from "../assets/places/o2.jpg"
import o3 from "../assets/places/o3.jpg"
import o4 from "../assets/places/o4.jpg"
import o5 from "../assets/places/o5.jpg"
import p1 from "../assets/places/p1.jpg"
import p2 from "../assets/places/p2.jpg"
import p3 from "../assets/places/p3.jpg"
import p4 from "../assets/places/p4.jpg"
import p5 from "../assets/places/p5.jpg"
import sr1 from "../assets/places/sr1.jpg"
import sr2 from "../assets/places/sr2.jpg"
import sr3 from "../assets/places/sr3.jpg"
import sr4 from "../assets/places/sr4.jpg"
import sr5 from "../assets/places/sr5.jpg"
import si1 from "../assets/places/si1.jpg"
import si2 from "../assets/places/si2.jpg"
import si3 from "../assets/places/si3.jpg"
import si4 from "../assets/places/si4.jpg"
import si5 from "../assets/places/si5.jpg"
import ta1 from "../assets/places/ta1.jpg"
import ta2 from "../assets/places/ta2.jpg"
import ta3 from "../assets/places/ta3.jpg"
import ta4 from "../assets/places/ta4.jpg"
import ta5 from "../assets/places/ta5.jpg"
import th1 from "../assets/places/th1.jpg"
import th2 from "../assets/places/th2.jpg"
import th3 from "../assets/places/th3.jpg"
import th4 from "../assets/places/th4.jpg"
import th5 from "../assets/places/th5.jpg"
import tu1 from "../assets/places/tu1.jpg"
import tu2 from "../assets/places/tu2.jpg"
import tu3 from "../assets/places/tu3.jpg"
import tu4 from "../assets/places/tu4.jpg"
import tu5 from "../assets/places/tu5.jpg"
import v1 from "../assets/places/v1.jpg"
import v2 from "../assets/places/v2.jpg"
import v3 from "../assets/places/v3.jpg"
import v4 from "../assets/places/v4.jpg"
import v5 from "../assets/places/v5.jpg"

// 🟢 Dummy data for destinations — add more as needed
const destinationDetails = {
  Australia: [
    { name: "Sydney", image: a1 },
    { name: "Melbourne", image: a2 },
    { name: "Gold Coast", image: a3 },
    { name: "Great Barrier Reef", image: a4 },
    { name: "Perth", image: a5 },
  ],
  Azerbaijan: [
    { name: "Baku", image: az1 },
    { name: "Gobustan", image: az2 },
    { name: "Sheki", image: az3 },
    { name: "Naftalan", image: az4 },
    { name: "Quba", image: az5 },
  ],
  Almaty: [
    { name: "Zenkov Cathedral", image: ay1 },
    { name: "Big Almaty Lake", image: ay2 },
    { name: "Kok Tobe Hill", image: ay3 },
    { name: "Shymbulak", image: ay4 },
    { name: "Medeu", image: ay5 },
  ],
  Bali: [
    { name: "Ubud", image: bali1 },
    { name: "Kuta Beach", image: bali2 },
    { name: "Tanah Lot", image: bali3 },
    { name: "Uluwatu Temple", image: bali4 },
    { name: "Tegallalang Rice Terrace", image: bali5 },
  ],
  Bhutan: [
    { name: "Paro", image: bhu1 },
    { name: "Thimphu", image: bhu2 },
    { name: "Punakha", image: bhu3 },
    { name: "Phobjikha Valley", image: bhu4 },
    { name: "Tiger's Nest", image: bhu5 },
  ],
  Dubai: [
    { name: "Burj Khalifa", image: du1 },
    { name: "Dubai Mall", image: du2 },
    { name: "Desert Safari", image: du3 },
    { name: "Palm Islands", image: du4 },
    { name: "Dubai Frame", image: du5 },
  ],
  Europe: [
    { name: "Paris", image: e1 },
    { name: "Rome", image: e2 },
    { name: "Amsterdam", image: e3 },
    { name: "Barcelona", image: e4 },
    { name: "Prague", image: e4 },
  ],
  Georgia: [
    { name: "Tbilisi", image: g1 },
    { name: "Batumi", image: g2 },
    { name: "Gudauri", image: g3 },
    { name: "Kazbegi", image: g4 },
    { name: "Mtskheta", image: g5 },
  ],
  Hongkong: [
    { name: "Victoria Peak", image: h1 },
    { name: "Hong Kong Disneyland", image: h2 },
    { name: "Tsim Sha Tsui", image: h3 },
    { name: "Big Buddha", image: h4 },
    { name: "Ladies Market", image: h5 },
  ],
  Japan: [
    { name: "Tokyo", image: j1 },
    { name: "Kyoto", image: j2 },
    { name: "Osaka", image: j3 },
    { name: "Mount Fuji", image: j4 },
    { name: "Hiroshima", image: j5 },
  ],
  Kambodia: [
    { name: "Angkor Wat", image: k1 },
    { name: "Phnom Penh", image: k2 },
    { name: "Siem Reap", image: k3 },
    { name: "Kampot", image: k4 },
    { name: "Sihanoukville", image: k5 },
  ],
  Malaysia: [
    { name: "Kuala Lumpur", image: m1 },
    { name: "Langkawi", image: m2 },
    { name: "Penang", image: m3 },
    { name: "Cameron Highlands", image: m4 },
    { name: "Malacca", image: m5 },
  ],
  Maldives: [
    { name: "Male", image: mal1 },
    { name: "Maafushi", image: mal2 },
    { name: "Hulhumale", image: mal3 },
    { name: "Vaadhoo Island", image: mal4 },
    { name: "Fulhadhoo", image: mal5 },
  ],
  Mauritius: [
    { name: "Port Louis", image: mau1 },
    { name: "Grand Baie", image: mau2 },
    { name: "Chamarel", image: mau3 },
    { name: "Le Morne", image: mau4 },
    { name: "Flic en Flac", image: mau5 },
  ],
  Nepal: [
    { name: "Kathmandu", image: ne1 },
    { name: "Pokhara", image: ne2 },
    { name: "Chitwan", image: ne3 },
    { name: "Lumbini", image: ne4 },
    { name: "Nagarkot", image: ne5 },
  ],
  Newzealand: [
    { name: "Auckland", image: nz1 },
    { name: "Queenstown", image: nz2 },
    { name: "Rotorua", image: nz3 },
    { name: "Christchurch", image: nz4 },
    { name: "Wellington", image: nz5 },
  ],
  Oman: [
    { name: "Muscat", image: o1 },
    { name: "Nizwa", image: o2 },
    { name: "Salalah", image: o3 },
    { name: "Wahiba Sands", image: o4 },
    { name: "Sur", image: o5 },
  ],
  Philipines: [
    { name: "Manila", image: p1 },
    { name: "Cebu", image: p2 },
    { name: "Boracay", image: p3 },
    { name: "Palawan", image: p4 },
    { name: "Bohol", image: p5 },
  ],
  Srilanka: [
    { name: "Colombo", image: sr1 },
    { name: "Kandy", image: sr2 },
    { name: "Galle", image: sr3 },
    { name: "Nuwara Eliya", image: sr4 },
    { name: "Sigiriya", image: sr5 },
  ],
    Singapore: [
    { name: "Marina Bay Sands", image: si1 },
    { name: "Gardens by the Bay", image: si2 },
    { name: "Sentosa Island", image: si3 },
    { name: "Universal Studios", image: si4 },
    { name: "Singapore Flyer", image: si5 },
  ],
  Tajikistan: [
    { name: "Dushanbe", image: ta1 },
    { name: "Iskanderkul Lake", image: ta2 },
    { name: "Pamir Mountains", image: ta3 },
    { name: "Fann Mountains", image: ta4 },
    { name: "Khorog", image: ta5 },
  ],
  Thailand: [
    { name: "Bangkok", image: th1 },
    { name: "Phuket", image: th2 },
    { name: "Chiang Mai", image: th3 },
    { name: "Pattaya", image: th4 },
    { name: "Krabi", image: th5 },
  ],
  Turkey: [
    { name: "Istanbul", image: tu1 },
    { name: "Cappadocia", image: tu2 },
    { name: "Pamukkale", image: tu3 },
    { name: "Antalya", image: tu4 },
    { name: "Ephesus", image: tu5 },
  ],
  Vietnam: [
    { name: "Hanoi", image: v1 },
    { name: "Halong Bay", image: v2 },
    { name: "Ho Chi Minh City", image: v3 },
    { name: "Hoi An", image: v4 },
    { name: "Sapa", image: v5 },
  ],
   "Guwahati Shillong": [
    { name: "Kamakhya Temple", image: "/assets/guwahati1.jpg" },
    { name: "Umiam Lake", image: "/assets/shillong1.jpg" },
    { name: "Elephant Falls", image: "/assets/shillong2.jpg" },
    { name: "Shillong Peak", image: "/assets/shillong3.jpg" },
    { name: "Cherrapunji", image: "/assets/shillong4.jpg" },
  ],
  "Arunachal Pradesh": [
    { name: "Tawang Monastery", image: "/assets/arunachal1.jpg" },
    { name: "Ziro Valley", image: "/assets/arunachal2.jpg" },
    { name: "Bomdila", image: "/assets/arunachal3.jpg" },
    { name: "Dirang", image: "/assets/arunachal4.jpg" },
    { name: "Sela Pass", image: "/assets/arunachal5.jpg" },
  ],
  "Sikkim Darjeeling": [
    { name: "Tsomgo Lake", image: "/assets/sikkim1.jpg" },
    { name: "Nathula Pass", image: "/assets/sikkim2.jpg" },
    { name: "Darjeeling Himalayan Railway", image: "/assets/darjeeling1.jpg" },
    { name: "Tiger Hill", image: "/assets/darjeeling2.jpg" },
    { name: "Batasia Loop", image: "/assets/darjeeling3.jpg" },
  ],
  Kolkata: [
    { name: "Victoria Memorial", image: "/assets/kolkata1.jpg" },
    { name: "Howrah Bridge", image: "/assets/kolkata2.jpg" },
    { name: "Dakshineswar Temple", image: "/assets/kolkata3.jpg" },
    { name: "Eco Park", image: "/assets/kolkata4.jpg" },
    { name: "Science City", image: "/assets/kolkata5.jpg" },
  ],
  Odisha: [
    { name: "Puri Jagannath Temple", image: "/assets/odisha1.jpg" },
    { name: "Konark Sun Temple", image: "/assets/odisha2.jpg" },
    { name: "Chilika Lake", image: "/assets/odisha3.jpg" },
    { name: "Simlipal National Park", image: "/assets/odisha4.jpg" },
    { name: "Lingaraj Temple", image: "/assets/odisha5.jpg" },
  ],
  "Madhya Pradesh": [
    { name: "Khajuraho Temples", image: "/assets/mp1.jpg" },
    { name: "Kanha National Park", image: "/assets/mp2.jpg" },
    { name: "Bhedaghat Marble Rocks", image: "/assets/mp3.jpg" },
    { name: "Sanchi Stupa", image: "/assets/mp4.jpg" },
    { name: "Ujjain Mahakaleshwar", image: "/assets/mp5.jpg" },
  ],
  Visakhapatnam: [
    { name: "RK Beach", image: "/assets/vizag1.jpg" },
    { name: "Araku Valley", image: "/assets/vizag2.jpg" },
    { name: "Kailasagiri", image: "/assets/vizag3.jpg" },
    { name: "Submarine Museum", image: "/assets/vizag4.jpg" },
    { name: "Borra Caves", image: "/assets/vizag5.jpg" },
  ],
  Tamilnadu: [
    { name: "Meenakshi Temple", image: "/assets/tamilnadu1.jpg" },
    { name: "Ooty", image: "/assets/tamilnadu2.jpg" },
    { name: "Kodaikanal", image: "/assets/tamilnadu3.jpg" },
    { name: "Rameswaram", image: "/assets/tamilnadu4.jpg" },
    { name: "Mahabalipuram", image: "/assets/tamilnadu5.jpg" },
  ],
  Kerala: [
    { name: "Alleppey Backwaters", image: "/assets/kerala1.jpg" },
    { name: "Munnar", image: "/assets/kerala2.jpg" },
    { name: "Kumarakom", image: "/assets/kerala3.jpg" },
    { name: "Thekkady", image: "/assets/kerala4.jpg" },
    { name: "Kovalam Beach", image: "/assets/kerala5.jpg" },
  ],
    Kashmir: [
    { name: "Srinagar", image: "/assets/kashmir1.jpg" },
    { name: "Gulmarg", image: "/assets/kashmir2.jpg" },
    { name: "Pahalgam", image: "/assets/kashmir3.jpg" },
    { name: "Sonamarg", image: "/assets/kashmir4.jpg" },
    { name: "Dal Lake", image: "/assets/kashmir5.jpg" },
  ],
  "Hyderabad Telangana": [
    { name: "Charminar", image: "/assets/hyderabad1.jpg" },
    { name: "Golconda Fort", image: "/assets/hyderabad2.jpg" },
    { name: "Ramoji Film City", image: "/assets/hyderabad3.jpg" },
    { name: "Hussain Sagar", image: "/assets/hyderabad4.jpg" },
    { name: "Birla Mandir", image: "/assets/hyderabad5.jpg" },
  ],
  Maharashtra: [
    { name: "Mumbai", image: "/assets/maharashtra1.jpg" },
    { name: "Pune", image: "/assets/maharashtra2.jpg" },
    { name: "Lonavala", image: "/assets/maharashtra3.jpg" },
    { name: "Mahabaleshwar", image: "/assets/maharashtra4.jpg" },
    { name: "Ajanta & Ellora", image: "/assets/maharashtra5.jpg" },
  ],
  Uttarakhand: [
    { name: "Dehradun", image: "/assets/uttarakhand1.jpg" },
    { name: "Mussoorie", image: "/assets/uttarakhand2.jpg" },
    { name: "Nainital", image: "/assets/uttarakhand3.jpg" },
    { name: "Rishikesh", image: "/assets/uttarakhand4.jpg" },
    { name: "Haridwar", image: "/assets/uttarakhand5.jpg" },
  ],
  Gujarat: [
    { name: "Ahmedabad", image: "/assets/gujarat1.jpg" },
    { name: "Gir National Park", image: "/assets/gujarat2.jpg" },
    { name: "Dwarka", image: "/assets/gujarat3.jpg" },
    { name: "Somnath", image: "/assets/gujarat4.jpg" },
    { name: "Statue of Unity", image: "/assets/gujarat5.jpg" },
  ],
  Rajasthan: [
    { name: "Jaipur", image: "/assets/rajasthan1.jpg" },
    { name: "Udaipur", image: "/assets/rajasthan2.jpg" },
    { name: "Jaisalmer", image: "/assets/rajasthan3.jpg" },
    { name: "Jodhpur", image: "/assets/rajasthan4.jpg" },
    { name: "Pushkar", image: "/assets/rajasthan5.jpg" },
  ],
  Himachal: [
    { name: "Shimla", image: "/assets/himachal1.jpg" },
    { name: "Manali", image: "/assets/himachal2.jpg" },
    { name: "Dharamshala", image: "/assets/himachal3.jpg" },
    { name: "Kullu", image: "/assets/himachal4.jpg" },
    { name: "Spiti Valley", image: "/assets/himachal5.jpg" },
  ],
  Uttarpradesh: [
    { name: "Varanasi", image: "/assets/uttarpradesh1.jpg" },
    { name: "Agra", image: "/assets/uttarpradesh2.jpg" },
    { name: "Lucknow", image: "/assets/uttarpradesh3.jpg" },
    { name: "Mathura", image: "/assets/uttarpradesh4.jpg" },
    { name: "Prayagraj", image: "/assets/uttarpradesh5.jpg" },
  ],
  GoldenTriangle: [
    { name: "Delhi", image: "/assets/golden1.jpg" },
    { name: "Agra", image: "/assets/golden2.jpg" },
    { name: "Jaipur", image: "/assets/golden3.jpg" },
    { name: "Fatehpur Sikri", image: "/assets/golden4.jpg" },
    { name: "Amber Fort", image: "/assets/golden5.jpg" },
  ],
  LehLadakh: [
    { name: "Leh", image: "/assets/leh1.jpg" },
    { name: "Nubra Valley", image: "/assets/leh2.jpg" },
    { name: "Pangong Lake", image: "/assets/leh3.jpg" },
    { name: "Magnetic Hill", image: "/assets/leh4.jpg" },
    { name: "Tso Moriri", image: "/assets/leh5.jpg" },
  ],
};

const DestinationDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const rawTitle = location.state?.title;
  const title = rawTitle || "";

  const destinations = destinationDetails[title];

  if (!destinations) {
    return (
      <div className="text-red-500 text-center mt-10">
        Destination not found
      </div>
    );
  }

  return (
    <div className="p-4 min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">
        {title} Tour Packages
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            className="bg-white shadow-md rounded-xl overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
              <button
                onClick={() =>
                  navigate("/booking", {
                    state: {
                      country: title,
                      place: item.name,
                      image: item.image,
                    },
                  })
                }
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Book Now
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DestinationDetails;