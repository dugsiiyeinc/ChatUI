import React from "react";
import { Star } from "lucide-react";

const testimonialData = [
  {
    id: 1,
    username: "Ahmed Ali",
    email: "ahmed@example.com",
    message: "Chatbot-ka Dugsiiye wuxuu iga caawiyay inaan si fudud u fahmo su’aalaha caafimaad, gaar ahaan marka aanan haysan dhakhtar si degdeg ah.",
    rating: 5,
    profile: "https://i.pravatar.cc/150?img=10",
  },
  {
    id: 2,
    username: "Fartuun Noor",
    email: "fartuun@example.com",
    message: "Waan ka helay habka chatbot-ku u sharxayo macluumaadka. Dugsiiye wuxuu igu dhiirrigeliyay inaan barto JavaScript si aan chatbot u sameeyo.",
    rating: 4,
    profile: "https://i.pravatar.cc/150?img=20",
  },
  {
    id: 3,
    username: "Khaalid Xassan",
    email: "khaalid@example.com",
    message: "Dugsiiye wuxuu i siiyay aragti cusub oo ku saabsan sida chatbot-ku u shaqeeyo. Waxa aan bilaabay inaan raaco course-ka JavaScript ka dib markaan la hadlay bot-ka.",
    rating: 4,
    profile: "https://i.pravatar.cc/150?img=30",
  },
  {
    id: 4,
    username: "Zahra Ahmed",
    email: "zahra@example.com",
    message: "Waa la yaab! Jawaabaha aad buu u fiican yahay. Waxa aan u arkaa Dugsiiye inuu yahay barayaal online ah."
    ,
    rating: 5,
    profile: "https://i.pravatar.cc/150?img=40",
  },
  {
    id: 5,
    username: "Mohamed Aweis",
    email: "aweys@example.com",
    message: "Dugsiiye chatbot wuxuu i tusay sida AI loo isticmaalo waxbarashada. JavaScript course-ka uu soo jeediyay wuxuu ahaa mid waxtar leh.",
    rating: 4,
    profile: "https://i.pravatar.cc/150?img=50",
  },
  {
    id: 6,
    username: "Hodan M",
    email: "hodan@example.com",
    message: "Waxaan jecleystay sida chatbot-ka Dugsiiye uu u fahmay su’aalaha aan waydiiyay. Wuxuu iga caawiyay inaan barto ereyo cusub.",
    rating: 5,
    profile: "https://i.pravatar.cc/150?img=60",
  }
  // {
  //   id: 7,
  //   username: "Samiira Bile",
  //   email: "samiira@example.com",
  //   message: "Waan ku mahadsan tihiin Dugsiiye. JavaScript course-kii uu ii soo jeediyay wuxuu iga dhigay developer bilaabaya.",
  //   rating: 5,
  //   profile: "https://i.pravatar.cc/150?img=70",
  // }
];

export default function Users() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 px-6 py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {testimonialData.map((user) => (
        <div key={user.id} className="bg-white dark:bg-zinc-800 rounded-xl shadow-md p-4 flex flex-col gap-2">
          <div className="flex items-center gap-4">
            <img src={user.profile} alt="Profile" className="w-14 h-14 rounded-full object-cover" />
            <div>
              <h3 className="font-bold text-lg text-zinc-800 dark:text-white">{user.username}</h3>
              <p className="text-sm text-zinc-500">{user.email}</p>
            </div>
          </div>
          <p className="text-sm text-zinc-700 dark:text-zinc-300 mt-2">{user.message}</p>
          <div className="flex items-center text-yellow-500 gap-2 mt-auto">
            {Array.from({ length: user.rating }, (_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-500" />
            ))}
            <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
              {user.rating}.0 Rating
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
