export interface BlogPost {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  content: string[];
}

/** Every post describes what the Zyon apps do today. */
export const blogPosts: BlogPost[] = [
  {
    slug: "7-safety-layers-on-every-zyon-ride",
    category: "Safety",
    date: "Nov 19, 2026",
    title: "The 7 safety layers on every Zyon ride",
    excerpt:
      "Driver checks, a ride PIN, a live trip link, SOS and more. Here is what protects you from the moment you book to the moment you step out.",
    content: [
      "When you book a Zyon ride you think about where you are going and what it costs. Behind that, seven things are working to keep you safe. Here they are, in the order you meet them.",
      "1. Drivers checked by our team. Before a driver takes a single trip, our team reviews their driver's licence, vehicle licence, proof of ownership, roadworthiness certificate, insurance, hackney permit and photos of the car. Only then can they go online.",
      "2. You know who is coming. Before your driver arrives you see their name, their photo, the car and its plate number. If any of it does not match, do not get in.",
      "3. A ride PIN. Each ride has a 4-digit PIN on your trip screen. Your driver has to enter it to start the trip, so you only ever ride in the car that was sent for you.",
      "4. Your trip, shared live. Tap Share on the trip screen and send the live link on WhatsApp or any app. Whoever opens it can follow your ride on the map until you arrive. You can also keep up to five emergency contacts in your safety settings.",
      "5. SOS in one tap. If something goes wrong, press SOS. Our team sees the alert at once, with your trip, your driver and where you are, and your emergency contact is told. If you are in danger, call the police on 112 as well.",
      "6. Night check-ins. Turn them on and, late at night, the app checks that you are fine if your car stops for a while.",
      "7. Ratings both ways. After every trip you rate your driver and your driver rates you, with reasons. Problems get seen and dealt with.",
      "None of this costs extra and none of it needs setting up before your first ride, apart from night check-ins and your emergency contacts.",
    ],
  },
  {
    slug: "how-your-zyon-fare-is-worked-out",
    category: "Fares",
    date: "Nov 19, 2026",
    title: "How your Zyon fare is worked out",
    excerpt:
      "What goes into the price you see before you book, why it is higher at busy times, and the one case where it can change.",
    content: [
      "You see the price of every Zyon ride before you confirm it. Here is what is in that number.",
      "The fare comes from the distance and the time of your trip and the class you pick: Economy, Standard or Premium. Each class has its own rates and a minimum fare.",
      "At busy hours, and when few cars are near you, the fare is higher. That is already in the price you see. You never find out about it after you sit down.",
      "There is one case where the fare can change after you book: when the trip turns out much longer than planned, for example after a change of route. The fare is then worked out again for the distance actually driven.",
      "You pay the way you chose before you booked: cash to your driver, a debit card, or your Zyon wallet. Every trip gets a receipt in your trip history.",
      "Of every fare, 80% goes to your driver.",
    ],
  },
  {
    slug: "what-it-takes-to-become-a-zyon-driver",
    category: "Drivers",
    date: "Nov 19, 2026",
    title: "What it takes to become a Zyon driver",
    excerpt:
      "The documents you need, what our team checks, and what happens between signing up and your first request.",
    content: [
      "Every Zyon driver is checked by our team before their first trip. Here is how it works, step by step.",
      "Step 1: Sign up. Download the Zyon Driver app and create your account with your phone number and email. Then add your car: its make, model and year decide whether it drives Economy, Standard or Premium.",
      "Step 2: Upload your documents. The app asks for your driver's licence (front and back), vehicle licence, proof of ownership, roadworthiness certificate, vehicle insurance and hackney permit, plus five photos of your car and a clear photo of yourself.",
      "Step 3: We check them. Our team reviews every document. If something is unclear we ask you to upload it again. When you are approved, the app tells you and we send you an email.",
      "Step 4: Go online. Set how far you are willing to travel to a pickup, go online and take your first request. Turn-by-turn directions are read out in a clear Nigerian voice.",
      "You keep 80% of every fare. Card and wallet earnings go to your Zyon wallet, and you withdraw them to your bank from ₦100 with your own withdrawal PIN.",
    ],
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Safety", href: "/safety" },
  { label: "Drive", href: "/drive" },
  { label: "Contact", href: "/contact" },
];
