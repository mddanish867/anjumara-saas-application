import { Search } from "lucide-react";
import Navbar from "../Navbar";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function APIListings() {
  const navigate = useNavigate();

  const apis = [
    { id: 1, name: "Weather API", category: "Weather", price: "Free" },
    {
      id: 2,
      name: "Payment Gateway API",
      category: "Finance",
      price: "$50/month",
    },
    {
      id: 3,
      name: "Image Recognition API",
      category: "AI",
      price: "$0.01/call",
    },
    // Add more API listings as needed
  ];

  const handlePurchase = () => {
    navigate("/soora-api/all-checkout");
  };

  const handleAPIDetails = () => {
    navigate("/soora-api/api-details");
  };

  return (
    <>
      <Navbar />
      <div
        className="container min-h-screen mx-auto px-4 py-8 bg-black cursor-pointer"
        onClick={handlePurchase}
      >
        <h1 className="text-3xl font-bold mb-6 text-orange-200">API Catalog</h1>
        <div className="mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search APIs..."
              className="w-full p-2 pl-10 border rounded bg-transparent"
            />
            <Search className="absolute left-3 top-2.5 text-muted-foreground" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {apis.map((api) => (
            <APICard key={api.id} api={api} />
          ))}
        </div>
      </div>
    </>
  );
}
function APICard({
  api,
}: {
  api: { name: string; category: string; price: string };
}) {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-semibold mb-2 text-orange-200">{api.name}</h2>
      <p className="text-white mb-2">Category: {api.category}</p>
      <p className="text-white mb-4">Price: {api.price}</p>
      <Button
        size="lg"
        className="bg-transparent py-2 border border-orange-200 hover:bg-orange-400 hover:border-n text-white"
        onClick={handleAPIDetails}
      >
        View Details
      </Button>
    </div>
  );
}
