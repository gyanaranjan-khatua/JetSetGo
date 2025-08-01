import { useLocation, useNavigate, } from "react-router-dom";
import { motion } from "framer-motion";
import React from "react";

// 🟢 Dummy data for destinations — add more as needed
const destinationDetails = {
  Australia: [
    { name: "Sydney", image: "/assets/australia1.jpg" },
    { name: "Melbourne", image: "/assets/australia2.jpg" },
    { name: "Gold Coast", image: "/assets/australia3.jpg" },
    { name: "Great Barrier Reef", image: "/assets/australia4.jpg" },
    { name: "Perth", image: "/assets/australia5.jpg" },
  ],
  Azerbaijan: [
    { name: "Baku", image: "/assets/azerbaijan1.jpg" },
    { name: "Gobustan", image: "/assets/azerbaijan2.jpg" },
    { name: "Sheki", image: "/assets/azerbaijan3.jpg" },
    { name: "Naftalan", image: "/assets/azerbaijan4.jpg" },
    { name: "Quba", image: "/assets/azerbaijan5.jpg" },
  ],
  Almaty: [
    { name: "Zenkov Cathedral", image: "/assets/almaty1.jpg" },
    { name: "Big Almaty Lake", image: "/assets/almaty2.jpg" },
    { name: "Kok Tobe Hill", image: "/assets/almaty3.jpg" },
    { name: "Shymbulak", image: "/assets/almaty4.jpg" },
    { name: "Medeu", image: "/assets/almaty5.jpg" },
  ],
  Bali: [
    { name: "Ubud", image: "/assets/bali1.jpg" },
    { name: "Kuta Beach", image: "/assets/bali2.jpg" },
    { name: "Tanah Lot", image: "/assets/bali3.jpg" },
    { name: "Uluwatu Temple", image: "/assets/bali4.jpg" },
    { name: "Tegallalang Rice Terrace", image: "/assets/bali5.jpg" },
  ],
  Bhutan: [
    { name: "Paro", image: "/assets/bhutan1.jpg" },
    { name: "Thimphu", image: "/assets/bhutan2.jpg" },
    { name: "Punakha", image: "/assets/bhutan3.jpg" },
    { name: "Phobjikha Valley", image: "/assets/bhutan4.jpg" },
    { name: "Tiger's Nest", image: "/assets/bhutan5.jpg" },
  ],
  Dubai: [
    { name: "Burj Khalifa", image: "/assets/dubai1.jpg" },
    { name: "Dubai Mall", image: "/assets/dubai2.jpg" },
    { name: "Desert Safari", image: "/assets/dubai3.jpg" },
    { name: "Palm Islands", image: "/assets/dubai4.jpg" },
    { name: "Dubai Frame", image: "/assets/dubai5.jpg" },
  ],
  Europe: [
    { name: "Paris", image: "/assets/europe1.jpg" },
    { name: "Rome", image: "/assets/europe2.jpg" },
    { name: "Amsterdam", image: "/assets/europe3.jpg" },
    { name: "Barcelona", image: "/assets/europe4.jpg" },
    { name: "Prague", image: "/assets/europe5.jpg" },
  ],
  Georgia: [
    { name: "Tbilisi", image: "/assets/georgia1.jpg" },
    { name: "Batumi", image: "/assets/georgia2.jpg" },
    { name: "Gudauri", image: "/assets/georgia3.jpg" },
    { name: "Kazbegi", image: "/assets/georgia4.jpg" },
    { name: "Mtskheta", image: "/assets/georgia5.jpg" },
  ],
  Hongkong: [
    { name: "Victoria Peak", image: "/assets/hongkong1.jpg" },
    { name: "Hong Kong Disneyland", image: "/assets/hongkong2.jpg" },
    { name: "Tsim Sha Tsui", image: "/assets/hongkong3.jpg" },
    { name: "Big Buddha", image: "/assets/hongkong4.jpg" },
    { name: "Ladies Market", image: "/assets/hongkong5.jpg" },
  ],
  Japan: [
    { name: "Tokyo", image: "/assets/japan1.jpg" },
    { name: "Kyoto", image: "/assets/japan2.jpg" },
    { name: "Osaka", image: "/assets/japan3.jpg" },
    { name: "Mount Fuji", image: "/assets/japan4.jpg" },
    { name: "Hiroshima", image: "/assets/japan5.jpg" },
  ],
  Kambodia: [
    { name: "Angkor Wat", image: "/assets/kambodia1.jpg" },
    { name: "Phnom Penh", image: "/assets/kambodia2.jpg" },
    { name: "Siem Reap", image: "/assets/kambodia3.jpg" },
    { name: "Kampot", image: "/assets/kambodia4.jpg" },
    { name: "Sihanoukville", image: "/assets/kambodia5.jpg" },
  ],
  Malaysia: [
    { name: "Kuala Lumpur", image: "/assets/malaysia1.jpg" },
    { name: "Langkawi", image: "/assets/malaysia2.jpg" },
    { name: "Penang", image: "/assets/malaysia3.jpg" },
    { name: "Cameron Highlands", image: "/assets/malaysia4.jpg" },
    { name: "Malacca", image: "/assets/malaysia5.jpg" },
  ],
  Maldives: [
    { name: "Male", image: "/assets/maldives1.jpg" },
    { name: "Maafushi", image: "/assets/maldives2.jpg" },
    { name: "Hulhumale", image: "/assets/maldives3.jpg" },
    { name: "Vaadhoo Island", image: "/assets/maldives4.jpg" },
    { name: "Fulhadhoo", image: "/assets/maldives5.jpg" },
  ],
  Mauritius: [
    { name: "Port Louis", image: "/assets/mauritius1.jpg" },
    { name: "Grand Baie", image: "/assets/mauritius2.jpg" },
    { name: "Chamarel", image: "/assets/mauritius3.jpg" },
    { name: "Le Morne", image: "/assets/mauritius4.jpg" },
    { name: "Flic en Flac", image: "/assets/mauritius5.jpg" },
  ],
  Nepal: [
    { name: "Kathmandu", image: "/assets/nepal1.jpg" },
    { name: "Pokhara", image: "/assets/nepal2.jpg" },
    { name: "Chitwan", image: "/assets/nepal3.jpg" },
    { name: "Lumbini", image: "/assets/nepal4.jpg" },
    { name: "Nagarkot", image: "/assets/nepal5.jpg" },
  ],
  Newzealand: [
    { name: "Auckland", image: "/assets/newzealand1.jpg" },
    { name: "Queenstown", image: "/assets/newzealand2.jpg" },
    { name: "Rotorua", image: "/assets/newzealand3.jpg" },
    { name: "Christchurch", image: "/assets/newzealand4.jpg" },
    { name: "Wellington", image: "/assets/newzealand5.jpg" },
  ],
  Oman: [
    { name: "Muscat", image: "/assets/oman1.jpg" },
    { name: "Nizwa", image: "/assets/oman2.jpg" },
    { name: "Salalah", image: "/assets/oman3.jpg" },
    { name: "Wahiba Sands", image: "/assets/oman4.jpg" },
    { name: "Sur", image: "/assets/oman5.jpg" },
  ],
  Philipines: [
    { name: "Manila", image: "/assets/philipines1.jpg" },
    { name: "Cebu", image: "/assets/philipines2.jpg" },
    { name: "Boracay", image: "/assets/philipines3.jpg" },
    { name: "Palawan", image: "/assets/philipines4.jpg" },
    { name: "Bohol", image: "/assets/philipines5.jpg" },
  ],
  Srilanka: [
    { name: "Colombo", image: "/assets/srilanka1.jpg" },
    { name: "Kandy", image: "/assets/srilanka2.jpg" },
    { name: "Galle", image: "/assets/srilanka3.jpg" },
    { name: "Nuwara Eliya", image: "/assets/srilanka4.jpg" },
    { name: "Sigiriya", image: "/assets/srilanka5.jpg" },
  ],
    Singapore: [
    { name: "Marina Bay Sands", image: "/assets/singapore1.jpg" },
    { name: "Gardens by the Bay", image: "/assets/singapore2.jpg" },
    { name: "Sentosa Island", image: "/assets/singapore3.jpg" },
    { name: "Universal Studios", image: "/assets/singapore4.jpg" },
    { name: "Singapore Flyer", image: "/assets/singapore5.jpg" },
  ],
  Tajikistan: [
    { name: "Dushanbe", image: "/assets/tajikistan1.jpg" },
    { name: "Iskanderkul Lake", image: "/assets/tajikistan2.jpg" },
    { name: "Pamir Mountains", image: "/assets/tajikistan3.jpg" },
    { name: "Fann Mountains", image: "/assets/tajikistan4.jpg" },
    { name: "Khorog", image: "/assets/tajikistan5.jpg" },
  ],
  Thailand: [
    { name: "Bangkok", image: "/assets/thailand1.jpg" },
    { name: "Phuket", image: "/assets/thailand2.jpg" },
    { name: "Chiang Mai", image: "/assets/thailand3.jpg" },
    { name: "Pattaya", image: "/assets/thailand4.jpg" },
    { name: "Krabi", image: "/assets/thailand5.jpg" },
  ],
  Turkey: [
    { name: "Istanbul", image: "/assets/turkey1.jpg" },
    { name: "Cappadocia", image: "/assets/turkey2.jpg" },
    { name: "Pamukkale", image: "/assets/turkey3.jpg" },
    { name: "Antalya", image: "/assets/turkey4.jpg" },
    { name: "Ephesus", image: "/assets/turkey5.jpg" },
  ],
  Vietnam: [
    { name: "Hanoi", image: "/assets/vietnam1.jpg" },
    { name: "Halong Bay", image: "/assets/vietnam2.jpg" },
    { name: "Ho Chi Minh City", image: "/assets/vietnam3.jpg" },
    { name: "Hoi An", image: "/assets/vietnam4.jpg" },
    { name: "Sapa", image: "/assets/vietnam5.jpg" },
  ],
   "Guwahati - Shillong": [
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
  "Sikkim - Darjeeling": [
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
  HyderabadTelangana: [
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