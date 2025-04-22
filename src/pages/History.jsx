import React from "react";
import { MessageSquare, Clock, CalendarDays } from "lucide-react";
import HistoryIntro from "../components/HistoryIntro";

const historyData = [
  {
    id: 1,
    date: "April 21, 2025",
    time: "10:30 PM",
    message: "Sideen u yareyn karaa caloosheyda?",
    change: "Waxaad bilaawday jimicsi habeen kasta. Isbeddel muuqda ayaa bilaabanaya.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b"
  },
  {
    id: 2,
    date: "April 20, 2025",
    time: "9:50 PM",
    message: "Miss wordd yaa qaaday ?",
    change: "waxaa qaatay jawaahir oo kasoo jeeda soomaliya .",
    image: "https://alchetron.com/cdn/jawahir-ahmed-81fe236f-afa5-4624-9332-6b662621a28-resize-750.jpeg"
  },
  {
    id: 3,
    date: "April 19, 2025",
    time: "8:45 PM",
    message: "Cunto noocee ah ayaan cunaa aan kaluun & digaag la’aan?",
    change: "Waxaa lagu taliyey bariis cad, khudaar & rooti adag.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SXFJr-MT7frRR3K6Gt42v_UPygxTP3q5ng&s"
  },
  {
    id: 4,
    date: "April 19, 2025",
    time: "8:45 PM",
    message: "Sidee Fullstak ku noqonkaraa ?",
    change: "Haa waad noqonkartnaa balse waa inaa barata fronent /backend.",
    image: "https://media.istockphoto.com/id/2148306092/photo/it-developer-with-stressful-overworked-in-creating-online-software-code-gusher.webp?a=1&b=1&s=612x612&w=0&k=20&c=FYmAPqiAxNsz7Sn6uP00aB3sxHbhCEcF4IUvOp6VGp0="
  },
  {
    id: 5,
    date: "April 19, 2025",
    time: "8:45 PM",
    message: "Hooyada Uurka leh ma qaadi kartaa culees ?",
    change: "my ma qaadi karto waa in laga taxataraa hooyada marka ay xaalas uurka ku jirto.",
    image: "https://media.istockphoto.com/id/1190394881/photo/the-beginning-of-a-beautiful-bond.webp?a=1&b=1&s=612x612&w=0&k=20&c=VNkTCHo_yxy33_uzqWY67BR6LoxOahUBskXBTx0n6_4="
  },
  // More data can be added here
];

const History = () => {
  return (
    <div className="p-6 bg-zinc-900 min-h-screen text-white overflow-y-auto">
      <h1 className="text-3xl font-bold mb-6">📜 Chat History & Progress</h1>
     

      
       <HistoryIntro/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {historyData.map((item) => (
          <div
            key={item.id}
            className="bg-zinc-800 rounded-2xl shadow-lg p-5 hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt="Chat Visual"
              className="w-full h-40 object-cover rounded-xl mb-4"
            />
            <div className="flex items-center text-sm text-zinc-400 mb-2">
              <CalendarDays className="w-4 h-4 mr-1" /> {item.date}
            </div>
            <div className="flex items-center text-sm text-zinc-400 mb-2">
              <Clock className="w-4 h-4 mr-1" /> {item.time}
            </div>
            <div className="flex items-start mb-2 text-zinc-300">
              <MessageSquare className="w-4 h-4 mr-2 mt-1" />
              <p>{item.message}</p>
            </div>
            <div className="text-green-400 text-sm mt-2 italic">{item.change}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;