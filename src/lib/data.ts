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

export interface BlogPost {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  content: string[];
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
    role: "Pilot Rider, Wuse 2",
    text: "I requested a ride from Wuse to Maitama during rush hour. The driver arrived in 3 minutes, the fare was exactly what the app showed, and I got there faster than I expected. This is what Abuja has been waiting for.",
    rating: 5,
  },
  {
    name: "Chinedu A.",
    role: "Pilot Driver, Abuja",
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
    role: "Pilot Driver, Abuja",
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
      "We are launching first in Abuja, with Lagos and Port Harcourt following shortly after. Join the waitlist to get notified the moment we go live in your city. Early waitlist members get priority access and exclusive launch offers.",
  },
  {
    question: "How much can I earn as a BGlory driver?",
    answer:
      "Earnings depend on how often you drive, but our pilot drivers in Abuja averaged ₦8,000 to ₦15,000 per day. You keep a higher percentage of each fare compared to other platforms, and you get paid every week directly to your bank account.",
  },
  {
    question: "What do I need to become a driver?",
    answer:
      "A valid driver's license (at least 1 year old), a vehicle in good condition (2015 or newer), valid insurance and registration, and a smartphone. The application takes under 10 minutes and most drivers get approved within 48 hours.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "7-safety-layers-on-every-bglory-ride",
    category: "Safety",
    date: "Feb 12, 2026",
    title: "The 7 safety layers you do not see on every BGlory ride",
    excerpt:
      "Real-time trip monitoring, driver background checks, panic buttons, and more. Here is a look inside the safety systems working behind the scenes every time you book a ride.",
    content: [
      "When you open the BGlory app and tap \"Request Ride,\" you probably think about your destination, the fare, and how long you will wait. What you do not see are the seven layers of protection running in the background from the moment your trip begins to the moment you step out of the car.",
      "Layer 1: Driver identity verification. Before a driver ever accepts a ride on BGlory, they complete a multi-step identity check. We verify their government-issued ID, match it against their selfie using facial recognition, and confirm their driving credentials. If anything does not match, they do not get on the platform.",
      "Layer 2: Background checks. Every driver goes through a comprehensive criminal background check and driving record review. We screen for major violations, DUI history, and any record that could put riders at risk. These checks are not one-time either. We run periodic re-checks to make sure nothing has changed.",
      "Layer 3: Vehicle inspection. Your driver's car is inspected before it is approved for the platform. We check brakes, tires, lights, seat belts, and overall condition. If a vehicle fails inspection, it does not carry passengers until the issue is fixed.",
      "Layer 4: Real-time GPS tracking. Every trip is tracked second by second on our system. Our operations team can see the route, speed, and any unexpected stops. If something looks unusual, we can intervene before a rider even needs to press the emergency button.",
      "Layer 5: Trip sharing. You can share your live trip with up to five trusted contacts. They see your driver's name, vehicle details, and your real-time location on a map. If you forget to share, our system can send automatic updates to your emergency contacts.",
      "Layer 6: In-app emergency button. One tap connects you directly to emergency services and shares your GPS coordinates with them instantly. At the same time, our safety team is alerted and begins monitoring your situation. Your emergency contacts also receive a notification with your location.",
      "Layer 7: 24/7 safety monitoring. Our dedicated safety team watches for anomalies around the clock. Sudden route changes, extended stops in unusual locations, and speed irregularities all trigger alerts. If something does not look right, we reach out to check on you.",
      "These seven layers work together so you can focus on getting where you need to go. You should not have to think about safety on every ride. That is our job.",
    ],
  },
  {
    slug: "why-your-bglory-fare-never-changes",
    category: "Product",
    date: "Jan 28, 2026",
    title: "Why your BGlory fare never changes after you confirm",
    excerpt:
      "No surprise charges. No hidden fees. We break down exactly how BGlory pricing works and why you will always know what you are paying before you tap \"Book.\"",
    content: [
      "You have probably experienced this before. You book a ride, and the price you see on the screen is not the price you pay when you arrive. Surge pricing kicks in. A \"booking fee\" appears. The route changes and suddenly your fare doubles. At BGlory, we decided that was not acceptable.",
      "Here is how our pricing works. When you enter your destination, our system calculates your fare based on three factors: distance, estimated trip duration, and the ride type you select (Go, Comfort, or XL). That number you see on screen is exactly what you will pay. Period.",
      "We do not use surge pricing. During peak hours, when demand goes up and other apps multiply your fare by 2x or 3x, your BGlory fare stays the same. We believe that punishing riders for needing a ride at a popular time is not fair. You should not have to check three different apps to find the cheapest option during rush hour.",
      "There are no hidden fees either. No \"booking fee,\" no \"platform fee,\" no \"safe ride fee\" quietly tacked onto your receipt. The fare you confirm is the fare you pay. We show you a complete breakdown before you book: base fare, distance charge, and time charge. That is it.",
      "What happens if your driver takes a longer route? You still pay the original fare. Our system quotes based on the optimal route, and if your driver deviates, we absorb the difference. You are not penalized for traffic detours or wrong turns.",
      "The only thing that can change your fare is if you change your destination mid-trip. If you add a stop or switch where you are going, the app will show you the updated fare before applying it. You always confirm before you are charged.",
      "Transparent pricing is not a feature we advertise to sound nice. It is a core principle of how BGlory works. We believe that when you know exactly what you are paying, you trust the platform more, you ride more often, and you recommend us to friends. That is the kind of growth we want to build on.",
    ],
  },
  {
    slug: "what-it-takes-to-become-a-bglory-driver",
    category: "Operations",
    date: "Jan 15, 2026",
    title: "What it actually takes to become a BGlory driver (and why most apps skip these steps)",
    excerpt:
      "Every BGlory driver passes a multi-step verification before their first trip. We walk you through what we check, why we check it, and what it means for your safety.",
    content: [
      "Not everyone who applies to drive with BGlory gets approved. That is intentional. We built a verification process that is thorough enough to keep riders safe, but fast enough that qualified drivers can start earning within 48 hours. Here is exactly what happens when you apply.",
      "Step 1: Document upload. You submit your driver's license, vehicle registration, proof of insurance, and a recent photo. This takes about 10 minutes. Our system scans the documents for authenticity and cross-references them against national databases.",
      "Step 2: Background check. We run a comprehensive check that covers criminal history, driving record, and any history of major traffic violations. This is the step most other platforms rush through or skip entirely. We do not. A clean record is non-negotiable.",
      "Step 3: Vehicle inspection. Your car has to meet our standards. We check that it is a 2015 model or newer, has working air conditioning, functioning seat belts in all seats, and no significant body damage. If your vehicle does not pass, we tell you exactly what needs fixing so you can re-apply once it is sorted.",
      "Step 4: Identity verification. We match your selfie against your submitted ID using facial recognition technology. This prevents identity fraud, which is a real problem on some platforms where one person signs up and someone else drives under their account.",
      "Step 5: Safety orientation. Before your first trip, you complete a short training module covering BGlory's safety protocols, rider interaction guidelines, and how to use the driver app effectively. It takes under an hour and covers everything you need to know.",
      "Why do we go through all of this? Because every rider who gets into a BGlory car deserves to know that their driver has been properly vetted. It costs us more time and money to run this process, but it builds the kind of trust that makes riders come back.",
      "If you meet the requirements, the whole process from application to your first fare takes about 48 hours. We move fast, but we never cut corners on verification. That is the balance we are committed to.",
    ],
  },
  {
    slug: "routing-that-works-in-abuja-traffic",
    category: "Engineering",
    date: "Dec 20, 2025",
    title: "How we built routing that actually works in Abuja traffic",
    excerpt:
      "Abuja does not follow the rules of other cities. Our engineering team explains how they built ETAs, routing, and surge logic for a city that never stops moving.",
    content: [
      "If you have ever tried to navigate Abuja during peak hours, you know that standard mapping tools do not always get it right. Traffic patterns shift by the hour, roads flood during rainy season, and alternative routes that work on Monday might be gridlocked by Wednesday. Building a ride-hailing app for this city required us to rethink routing from scratch.",
      "Most ride-hailing apps rely heavily on third-party mapping services for their ETAs and routing. Those services work well in cities with predictable traffic, consistent road conditions, and comprehensive map data. Abuja has none of those things consistently. So we built a layer on top.",
      "Our routing engine combines standard map data with real-time signals from active drivers on the road. When a BGlory driver is on a trip, their speed, route, and stops feed back into our system. Over time, this builds a living picture of how traffic actually flows across the city, not how a map says it should flow.",
      "For ETAs, we use a machine learning model trained on thousands of completed trips. Instead of calculating distance and dividing by average speed, our model factors in time of day, day of week, weather conditions, and real-time congestion data from active drivers. The result is ETAs that are accurate within a few minutes, even during rush hour.",
      "We also built custom logic for common Abuja scenarios. If a road is flooded, drivers can flag it in the app and our routing engine immediately redirects other drivers around the affected area. If a particular intersection is known for delays during certain hours, we pre-route around it before drivers even get close.",
      "Surge logic was another challenge. In most cities, demand spikes are predictable: morning commute, evening commute, weekend nights. Abuja has its own rhythms. Market days, church schedules, university schedules, and local events all create demand spikes that a generic surge algorithm would miss. Our system learns from historical patterns specific to different neighborhoods.",
      "The result is a routing system that feels like it was built by someone who actually lives in Abuja. Because it was. Our engineering team spent months driving the city, mapping problem areas, and testing routes before writing a single line of code. That local knowledge is baked into every trip you take.",
    ],
  },
  {
    slug: "500-free-rides-pilot-lessons",
    category: "Community",
    date: "Dec 5, 2025",
    title: "We gave 500 Abuja residents free rides. Here is what they told us.",
    excerpt:
      "Our closed pilot changed the product in ways we never expected. From pickup UX to driver ratings, here are the biggest lessons from the people who tested BGlory first.",
    content: [
      "Before we launched BGlory to the public, we needed to know if the product actually worked for real people in real traffic. So we invited 500 residents of Abuja to take free rides over a four-week pilot. Their feedback changed everything.",
      "The first thing we learned was that our pickup experience was broken. In testing, finding a rider at a GPS pin seemed simple. In practice, especially in dense areas like Wuse and Garki, the pin would drop in the middle of a road with no obvious pickup spot. Riders would wait on one side of the street while drivers circled on the other. We redesigned the pickup flow to include a text description field where riders can add landmarks (\"I am at the gate of the shopping complex\" or \"next to the yellow building\"). Pickup accuracy improved by 40%.",
      "The second big lesson was about pricing transparency. Our pilot riders told us they wanted to see the fare breakdown before booking, not after. The original app showed a total fare and that was it. Riders wanted to know how much was base fare, how much was distance, and how much was time. We added a detailed breakdown screen. Booking rates went up immediately because riders felt more confident about what they were paying for.",
      "Driver ratings taught us something unexpected. We started with a 5-star rating system, and almost every ride got 5 stars. That made it impossible to tell which drivers were truly excellent and which were just adequate. So we added specific feedback categories: cleanliness, driving, conversation, and route choice. This gave us much more useful data and helped us identify our best drivers for the Comfort tier.",
      "The fourth lesson was about wait time expectations. Our system showed an ETA, but riders told us they wanted more context. \"5 minutes\" felt different depending on whether the driver was 2 blocks away in traffic or 2 kilometers away on an open road. We added a live map view showing the driver's real-time position and updated the ETA every 15 seconds. Rider satisfaction with wait times improved by 25%, even though actual wait times did not change.",
      "Finally, safety features. We built trip sharing and an emergency button before the pilot, but we did not realize how important the perception of safety was for adoption. Many pilot riders, especially women, told us they would not have tried the app at all if those features were not prominently visible on the booking screen. We moved the safety features from a settings menu to the main ride screen. First-time rider retention went up by 18%.",
      "These 500 riders did not just test our product. They rebuilt it with us. Every major feature in the BGlory app today was shaped by their honest feedback. When we launch publicly, we are not launching a guess. We are launching something that real people in Abuja already validated.",
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
