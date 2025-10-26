import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppButton = () => {
  const phoneNumber = "919876543210"; // Replace with actual number
  const message = "Hi! I'm interested in your furniture collection.";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      size="lg"
      className="fixed bottom-6 right-6 rounded-full shadow-elegant bg-[#25D366] hover:bg-[#20BA5A] text-white w-16 h-16 p-0 z-50 animate-in slide-in-from-bottom-4"
    >
      <MessageCircle className="h-7 w-7" />
    </Button>
  );
};

export default WhatsAppButton;
