import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CheckCircle } from "lucide-react";
import rekuperaciaImg from "@/assets/rekuperacia-icon.png";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

const benefits = [
  "Až 95% rekuperácia tepla",
  "Kontinuálny prívod čerstvého vzduchu",
  "Filtrácia vzdušných nečistôt",
  "Zníženie vlhkosti a plesní",
];

const Rekuperacie = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <Header />
      <main className="flex-1 w-full flex flex-col items-center justify-center px-4 py-16">
        <img
          src={rekuperaciaImg}
          alt="Rekuperácia"
          className="w-32 h-32 md:w-48 md:h-48 object-contain rounded-2xl shadow-lg bg-blue-100 p-4 mb-6"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-blue-700 mb-4">
          Rekuperácie
        </h1>
        <p className="text-lg text-gray-800 mb-6 text-center max-w-xl">
          Zdravý vzduch bez tepelných strát pre moderné bývanie. Ideálne pre
          novostavby aj rekonštrukcie.
        </p>
        <ul className="mb-6 space-y-2">
          {benefits.map((benefit, idx) => (
            <li
              key={idx}
              className="flex items-center text-base text-gray-900 justify-center"
            >
              <CheckCircle className="text-blue-500 mr-2" /> {benefit}
            </li>
          ))}
        </ul>
        <Button
          size="lg"
          className="bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          Získať cenovú ponuku
        </Button>
      </main>
      <Footer />
    </div>
  );
};

export default Rekuperacie;
