export interface Feature {
  title: string;
  description: string;
}

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
}

export interface RideOption {
  name: string;
  description: string;
  capacity: string;
  priceLabel: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface Stat {
  value: string;
  label: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export const features: Feature[] = [
  {
    title: "4-Minute Pickups",
    description:
      "Your driver arrives in under 4 minutes on average. We match you with the closest verified driver so you spend less time waiting and more time moving.",
  },
  {
    title: "Know Your Fare Before You Ride",
    description:
      "See exactly what you will pay before you confirm. No surge pricing, no hidden charges, no surprises when the trip ends. What you see is what you pay.",
  },
  {
    title: "Every Driver Is Verified",
    description:
      "Background checks, vehicle inspections, identity verification, and ongoing performance reviews. You will always know who is behind the wheel.",
  },
  {
    title: "Track Every Trip in Real Time",
    description:
      "Follow your driver on the map from the moment they accept your ride. Share your live trip with family and friends for extra peace of mind.",
  },
  {
    title: "Pay However You Want",
    description:
      "Card, cash, bank transfer, or your BGlory Wallet. Choose the payment method that works for you. Top up your wallet for faster checkout and bonus rewards.",
  },
  {
    title: "Help Whenever You Need It",
    description:
      "Real humans, not bots. Our support team is available 24/7 by phone, chat, or email. If something goes wrong on a ride, we resolve it fast.",
  },
];

export const howItWorks: HowItWorksStep[] = [
  {
    step: "01",
    title: "Download the App",
    description:
      "Get BGlory Rides from the App Store or Google Play. Create your account in under 30 seconds with your phone number or email.",
  },
  {
    step: "02",
    title: "Enter Where You Are Going",
    description:
      "Type your destination and see your exact fare, estimated pickup time, and available ride options before you confirm anything.",
  },
  {
    step: "03",
    title: "Get Matched with a Driver",
    description:
      "A verified driver nearby accepts your request. Watch them arrive on the map in real time. You will see their name, photo, plate number, and rating.",
  },
  {
    step: "04",
    title: "Arrive Safely",
    description:
      "Enjoy the ride with real-time tracking and in-app safety tools. Pay seamlessly when you arrive. Rate your driver and help keep the community strong.",
  },
];

export const rideOptions: RideOption[] = [
  {
    name: "BGlory Go",
    description:
      "The everyday ride that saves you money. Quick pickups, clean cars, and the fastest route to where you are going. Perfect for commutes and errands.",
    capacity: "1-3 passengers",
    priceLabel: "From ₦1,500",
  },
  {
    name: "BGlory Comfort",
    description:
      "A step up when you want it. Premium vehicles, top-rated drivers, and extra legroom. Ideal for meetings, airport runs, and date nights.",
    capacity: "1-3 passengers",
    priceLabel: "From ₦3,000",
  },
  {
    name: "BGlory XL",
    description:
      "Room for the whole crew. Spacious SUVs and minivans for up to 6 passengers with luggage. Great for families, group outings, and airport trips.",
    capacity: "1-6 passengers",
    priceLabel: "From ₦5,000",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Amara O.",
    role: "Pilot Rider, Victoria Island",
    text: "I requested a ride from VI to Ikeja during rush hour. The driver arrived in 3 minutes, the fare was exactly what the app showed, and I got there faster than I expected. This is what Lagos has been waiting for.",
    rating: 5,
  },
  {
    name: "Chinedu A.",
    role: "Pilot Driver, Lekki",
    text: "I signed up, got verified in two days, and earned ₦47,000 in my first week driving part-time. The payout hits my account every Friday without delays. The app is simple and the support team actually responds.",
    rating: 5,
  },
  {
    name: "Blessing E.",
    role: "Pilot Rider, Abuja",
    text: "I travel alone at night for work. Being able to share my live trip with my husband and having that emergency button gives me real peace of mind. The drivers are professional and the cars are clean.",
    rating: 5,
  },
  {
    name: "Tunde K.",
    role: "Pilot Driver, Port Harcourt",
    text: "I drive between 6AM and 2PM while my kids are at school. No boss, no fixed shifts. I set my own hours and still earn enough to handle my responsibilities. This is the flexibility I was looking for.",
    rating: 5,
  },
];

export const stats: Stat[] = [
  { value: "4 min", label: "Average Pickup Time" },
  { value: "₦0", label: "Hidden Fees" },
  { value: "98%", label: "Pilot Rider Satisfaction" },
  { value: "24/7", label: "Customer Support" },
];

export const faqs: FAQ[] = [
  {
    question: "How do I request a ride with BGlory?",
    answer:
      "Download the app, create an account, and enter your destination. You will see your fare upfront before you confirm. Tap 'Request Ride' and a verified driver will be matched with you in seconds. The whole process takes under a minute.",
  },
  {
    question: "What does a ride cost?",
    answer:
      "Fares start from ₦1,500 for BGlory Go. You see the exact price before you confirm your ride, and that price does not change. No surge pricing, no hidden charges. Pay with card, cash, bank transfer, or your BGlory Wallet.",
  },
  {
    question: "How do I know my driver is safe?",
    answer:
      "Every driver passes a comprehensive background check, vehicle inspection, and identity verification before their first trip. We also run ongoing checks and monitor driver ratings. If a driver falls below our standards, they are removed from the platform.",
  },
  {
    question: "When is BGlory launching in my city?",
    answer:
      "We are launching first in Lagos, with Abuja and Port Harcourt following shortly after. Join the waitlist to get notified the moment we go live in your city. Early waitlist members get priority access and exclusive launch offers.",
  },
  {
    question: "How much can I earn as a BGlory driver?",
    answer:
      "Earnings depend on how often you drive, but our pilot drivers in Lagos averaged ₦8,000 to ₦15,000 per day. You keep a higher percentage of each fare compared to other platforms, and you get paid every week directly to your bank account.",
  },
  {
    question: "What do I need to become a driver?",
    answer:
      "A valid driver's license (at least 1 year old), a vehicle in good condition (2015 or newer), valid insurance and registration, and a smartphone. The application takes under 10 minutes and most drivers get approved within 48 hours.",
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
