import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/Button";
import { Star } from "lucide-react";

const generateUsers = () => {
  const users = [];
  for (let i = 1; i <= 15; i++) {
    users.push({
      id: i,
      username: `User${i}`,
      email: `user${i}@example.com`,
      message: "Waa maxay shaqada chatbot-ka?",
      rating: Math.floor(Math.random() * 5) + 1,
      avatar: `https://i.pravatar.cc/150?img=${i}`
    });
  }
  return users;
}

const UsersPage = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      username: "AhmedAli",
      email: "ahmed@example.com",
      message: "Chatku aad buu iiga caawiyay su’aalo caafimaad.",
      rating: 5,
      profile: "https://i.pravatar.cc/150?img=1",
    },
    {
      id: 2,
      username: "FartuunN",
      email: "fartuun@example.com",
      message: "Jawaabaha aad baan u jeclaaday!",
      rating: 4,
      profile: "https://i.pravatar.cc/150?img=2",
    },
    {
      id: 3,
      username: "KhaalidX",
      email: "khaalid@example.com",
      message: "Chatbot-ku mararka qaar wuu degdegayaa.",
      rating: 3,
      profile: "https://i.pravatar.cc/150?img=3",
    },
    {
      id: 4,
      username: "NasteexoY",
      email: "nasteexo@example.com",
      message: "Way fududahay in la isticmaalo.",
      rating: 5,
      profile: "https://i.pravatar.cc/150?img=4",
    },
    {
      id: 5,
      username: "CumarJ",
      email: "cumar@example.com",
      message: "Waan jeclahay sida uu u shaqeeyo.",
      rating: 4,
      profile: "https://i.pravatar.cc/150?img=5",
    },
    {
      id: 6,
      username: "LaylaM",
      email: "layla@example.com",
      message: "Chatbot-kan wuu iga caawiyay shaqadayda.",
      rating: 5,
      profile: "https://i.pravatar.cc/150?img=6",
    },
    {
      id: 7,
      username: "YuusufK",
      email: "yuusuf@example.com",
      message: "Waxaa fiican in la horumariyo.",
      rating: 2,
      profile: "https://i.pravatar.cc/150?img=7",
    },
    {
      id: 8,
      username: "ZahraR",
      email: "zahra@example.com",
      message: "Waa sahlan tahay in la fahmo.",
      rating: 4,
      profile: "https://i.pravatar.cc/150?img=8",
    },
    {
      id: 9,
      username: "MustafaaD",
      email: "mustafa@example.com",
      message: "Si fudud baan ugu helay jawaabaha aan u baahnaa.",
      rating: 5,
      profile: "https://i.pravatar.cc/150?img=9",
    },
    {
      id: 10,
      username: "HodanS",
      email: "hodan@example.com",
      message: "Jawaabaha qaar wax ka yar bay ahaayeen.",
      rating: 3,
      profile: "https://i.pravatar.cc/150?img=10",
    },
    {
      id: 11,
      username: "AbdiN",
      email: "abdi@example.com",
      message: "Aad baan ugu qanacsanahay.",
      rating: 5,
      profile: "https://i.pravatar.cc/150?img=11",
    },
    {
      id: 12,
      username: "SaynabH",
      email: "saynab@example.com",
      message: "Waxaan jeclahay muuqaalka.",
      rating: 4,
      profile: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 13,
      username: "MahadO",
      email: "mahad@example.com",
      message: "Waxaa jira horumarin loo baahan yahay.",
      rating: 3,
      profile: "https://i.pravatar.cc/150?img=13",
    },
    {
      id: 14,
      username: "AyaanG",
      email: "ayaan@example.com",
      message: "Fariin diriddu waa mid deg deg ah.",
      rating: 5,
      profile: "https://i.pravatar.cc/150?img=14",
    },
    {
      id: 15,
      username: "CabdullahiF",
      email: "cabdi@example.com",
      message: "Shaqo wanaagsan!",
      rating: 5,
      profile: "https://i.pravatar.cc/150?img=15",
    },
  ]);

  const handleDelete = (id) => {
    const updated = users.filter((user) => user.id !== id);
    setUsers(updated);
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 bg-zinc-100 min-h-screen">
      {users.map((user) => (
        <Card key={user.id} className="shadow-xl rounded-2xl">
          <CardContent className="p-4">
            <div className="flex items-center gap-4">
              <img src={user.profile} alt="profile" className="w-14 h-14 rounded-full" />
              <div>
                <h2 className="font-bold text-lg">{user.username}</h2>
                <p className="text-sm text-zinc-500">{user.email}</p>
              </div>
            </div>
            <p className="mt-3 text-zinc-700">"{user.message}"</p>
            <div className="flex items-center gap-1 text-yellow-500 mt-2">
              {Array.from({ length: user.rating }, (_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-500" />
              ))}
            </div>
            <div className="flex justify-between mt-4">
              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                Update
              </Button>
              <Button
                variant="outline"
                className="text-red-600 border-red-600 hover:bg-red-50"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
      ....
    </div>
  );
};

export default UsersPage;
