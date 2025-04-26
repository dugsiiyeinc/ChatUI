import React from "react";
import { Card, CardContent } from "../components/ui/card";


const HistoryIntro = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <Card className="bg-white text-zinc-800 shadow-xl rounded-2xl">
        <CardContent className="p-6">
          <h1 className="text-2xl font-bold mb-4">🗂️ Waa Maxay <span className="text-blue-600">Chat History</span>?</h1>
          <p className="mb-2">
            <strong>Chat History</strong> waa taariikhda wada sheekaysiga ee dhex martay qofka isticmaala iyo chatbot-ka ama qof kale.
            Waxay muujisaa dhammaan fariimaha hore ee la is dhaafsaday — taasoo qofka ka caawineysa in uu:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>dib u akhriyo</li>
            <li>xasuusto</li>
            <li>ama barto wixii hore loo waday</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-white text-zinc-800 shadow-xl rounded-2xl">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">📜 Sidee Ayay Kusoo Bilaabatay?</h2>
          <p className="mb-2">
            Wada sheekaysiga hore wuxuu ahaa mid <strong>buug ku qoran</strong> ama <strong>warqado loo diro</strong>. Dadku waxay sugayeen
            <strong>maalmo ama toddobaad</strong> si ay u helaan jawaab.
          </p>
          <p className="mb-2">Markii tiknoolajiyadu soo korodhay:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Emails ayaa yimid</li>
            <li>Kadibna chatbots</li>
            <li>iyo ugu dambeyn apps sida <strong>WhatsApp, Messenger, Telegram</strong> iwm.</li>
            <li>Hadda, hal guji ayaa fariin diraysa!</li>
          </ul>
        </CardContent>
      </Card>

      <Card className="bg-white text-zinc-800 shadow-xl rounded-2xl">
        <CardContent className="p-6">
          <h2 className="text-xl font-bold mb-4">💡 Maxaa Faa’iido Ugu Jira?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Kaydinta Wada Sheekaysiga Hore:</strong> Waxaad dib u akhriyi kartaa wixii aad hore u sheegtay.</li>
            <li><strong>Helitaanka Xog Hore:</strong> Waa sahal in aad fahamto mowduuc hore loo soo qaaday.</li>
            <li><strong>Ka Faa’iidaysiga Jawaabaha Hore:</strong> Waxa aad su’aashay hore ayaa kaa badbaadin kara in aad mar kale weydiiso.</li>
            <li><strong>Xusuusin & Dib u Eegis:</strong> Waxay kaa caawin kartaa inaad horumar ka sameyso barashada, la-tashiga ama adeegyada aad isticmaalayso.</li>
          </ul>
        </CardContent>
      </Card>........
    </div>
  );
};

export default HistoryIntro;
