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
    title: "Lightning Fast Pickups",
    description:
      "Average pickup time of under 4 minutes. We match you with the nearest available driver so you spend less time waiting.",
  },
  {
    title: "Safe and Secure",
    description:
      "Every driver is background-checked and verified. Real-time trip tracking and an emergency button keep you protected.",
  },
  {
    title: "Transparent Pricing",
    description:
      "No surge surprises. See your fare upfront before you confirm. Pay with card, cash, or your BGlory wallet.",
  },
  {
    title: "Go Anywhere",
    description:
      "From quick errands across town to long-distance trips between cities, BGlory Rides gets you there comfortably.",
  },
  {
    title: "Top-Rated Drivers",
    description:
      "We hold our drivers to a high standard. Professional, courteous, and committed to getting you there safely.",
  },
  {
    title: "24/7 Support",
    description:
      "Our support team is always available. Whether you have a question, feedback, or need help, we are here for you.",
  },
];

export const howItWorks: HowItWorksStep[] = [
  {
    step: "01",
    title: "Open the App",
    description:
      "Download BGlory Rides once it launches. Sign up in seconds with your phone number or email.",
  },
  {
    step: "02",
    title: "Set Your Destination",
    description:
      "Enter where you want to go. You will see your fare upfront, estimated arrival time, and available ride options.",
  },
  {
    step: "03",
    title: "Match with a Driver",
    description:
      "We connect you with a verified driver nearby. Track their arrival in real time on the map.",
  },
  {
    step: "04",
    title: "Enjoy the Ride",
    description:
      "Sit back, relax, and arrive at your destination safely. Rate your driver and share your experience.",
  },
];

export const rideOptions: RideOption[] = [
  {
    name: "BGlory Go",
    description:
      "Affordable everyday rides. Perfect for solo trips and daily commutes.",
    capacity: "1-3 passengers",
    priceLabel: "From ₦1,500",
  },
  {
    name: "BGlory Comfort",
    description:
      "Premium vehicles with extra legroom. For when you want a little more comfort.",
    capacity: "1-3 passengers",
    priceLabel: "From ₦3,000",
  },
  {
    name: "BGlory XL",
    description:
      "Spacious rides for groups and families. Room for everyone and their luggage.",
    capacity: "1-6 passengers",
    priceLabel: "From ₦5,000",
  },
];

export const testimonials: Testimonial[] = [
  {
    name: "Amara Johnson",
    role: "Beta Tester, Lagos",
    text: "I tested the app during the pilot and the experience was smooth. The interface is clean, the driver showed up on time, and the fare was shown upfront. Really looking forward to the full launch.",
    rating: 5,
  },
  {
    name: "David Okonkwo",
    role: "Beta Tester, Abuja",
    text: "Tried BGlory Comfort during the pilot program. The vehicle was great, the driver was professional, and the trip tracking worked perfectly. This is going to be a solid option when it launches.",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "Beta Tester, Port Harcourt",
    text: "What stood out to me was the safety features. Being able to share my trip in real time with my family gave me confidence. The app is intuitive and easy to use.",
    rating: 5,
  },
  {
    name: "James Adeyemi",
    role: "Pilot Driver, Lagos",
    text: "The driver app is straightforward. I signed up, got verified quickly, and started accepting rides during the pilot. The payout process was clear and the support team was responsive.",
    rating: 4,
  },
];

export const stats: Stat[] = [
  { value: "10K+", label: "Waitlist Signups" },
  { value: "500+", label: "Drivers Registered" },
  { value: "15+", label: "Launch Cities" },
  { value: "24/7", label: "Support Ready" },
];

export const faqs: FAQ[] = [
  {
    question: "How do I request a ride?",
    answer:
      "Once the app launches, you will download it, create an account, enter your destination, choose your ride type, and tap 'Request Ride'. A driver will be matched with you in seconds.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept credit/debit cards, mobile wallets, and cash. You can also load your BGlory Wallet for faster checkout and exclusive discounts.",
  },
  {
    question: "How are drivers verified?",
    answer:
      "All drivers go through a multi-step verification process including background checks, driving record review, vehicle inspection, and identity verification. We also conduct periodic re-checks.",
  },
  {
    question: "Can I schedule a ride in advance?",
    answer:
      "Yes. You can schedule rides up to 7 days in advance. Just select your pickup time when booking, and a driver will be assigned ahead of time.",
  },
  {
    question: "What happens if I leave something in the car?",
    answer:
      "Use the 'Lost Item' feature in the app to contact your driver directly. Our support team can also help coordinate the return of your belongings.",
  },
  {
    question: "Is BGlory Rides available in my city?",
    answer:
      "We are launching in select cities first and expanding from there. Join the waitlist to be notified when BGlory Rides is available in your area.",
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
