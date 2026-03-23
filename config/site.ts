export const siteConfig = {
  name: "The Grand Table",
  tagline: "Where Every Meal Becomes a Memory",
  established: "1994",
  description: "San Francisco's most celebrated fine dining destination. An experience of culinary artistry, impeccable service, and unforgettable atmosphere.",
  phone: "(415) 555-0192",
  email: "reservations@thegrandtable.com",
  address: "1 Market Street, Suite 100",
  city: "San Francisco, CA 94105",
  notifyEmail: process.env.NOTIFY_EMAIL!,
  fromEmail: process.env.FROM_EMAIL!,
  defaultTheme: "warm",
//Images----------------------------------------------//
  images: {
    hero: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
    photoBreak: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&q=80",
    about: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1200&q=80",
  },
//Hours---------------------------------------------//
  hours: [
    { day: "Monday – Tuesday", hours: "Closed" },
    { day: "Wednesday – Thursday", hours: "5:30 PM – 10:00 PM" },
    { day: "Friday – Saturday", hours: "5:00 PM – 11:00 PM" },
    { day: "Sunday", hours: "5:00 PM – 9:30 PM" },
  ],
//Stats----------------------------------------------//
  stats: [
    { value: "30+", label: "Years of Excellence" },
    { value: "3", label: "Michelin Stars" },
    { value: "98%", label: "Guest Return Rate" },
    { value: "500+", label: "Wine Labels" },
  ],
//Menu---------------------------------------------//
  menuCategories: [
    {
      id: "starters",
      label: "Starters",
      items: [
        { name: "Oysters Rockefeller", description: "Spinach, Pernod, gruyère, crispy breadcrumb", price: "$32", image: "https://images.unsplash.com/photo-1606168094336-48f8b0b80a8f?w=600&q=80" },
        { name: "Foie Gras Torchon", description: "Brioche, Sauternes gelée, black truffle, micro herbs", price: "$48", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80" },
        { name: "Burrata & Heirloom", description: "Hand-pulled burrata, heirloom tomatoes, aged balsamic, basil oil", price: "$28", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80" },
        { name: "Tuna Tartare", description: "Bluefin tuna, avocado, cucumber, sesame, yuzu ponzu", price: "$38", image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80" },
        { name: "Lobster Bisque", description: "Maine lobster, cognac cream, tarragon, chive oil", price: "$26", image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80" },
      ],
    },
    {
      id: "mains",
      label: "Mains",
      items: [
        { name: "Wagyu Tenderloin", description: "A5 Japanese wagyu, bone marrow butter, truffle jus, pommes purée", price: "$165", image: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80" },
        { name: "Dover Sole Meunière", description: "Wild-caught Dover sole, brown butter, capers, lemon, parsley", price: "$98", image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&q=80" },
        { name: "Rack of Lamb", description: "Colorado lamb, herb crust, rosemary jus, ratatouille", price: "$88", image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80" },
        { name: "Butter-Poached Lobster", description: "Maine lobster tail, champagne beurre blanc, caviar, chive", price: "$125", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80" },
        { name: "Duck à l'Orange", description: "Moulard duck breast, classic orange sauce, haricots verts, pommes dauphine", price: "$72", image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80" },
      ],
    },
    {
      id: "desserts",
      label: "Desserts",
      items: [
        { name: "Soufflé au Chocolat", description: "Valrhona dark chocolate, crème anglaise, vanilla bean ice cream", price: "$22", image: "https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?w=600&q=80" },
        { name: "Crème Brûlée", description: "Madagascar vanilla, torched caramel, fresh raspberry", price: "$18", image: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&q=80" },
        { name: "Tarte Tatin", description: "Caramelized apple, puff pastry, calvados crème fraîche", price: "$19", image: "https://images.unsplash.com/photo-1568571780765-9276ac8b75a2?w=600&q=80" },
        { name: "Cheese Selection", description: "Seasonal artisan cheeses, honeycomb, quince paste, walnut crisps", price: "$28", image: "https://images.unsplash.com/photo-1452195100486-9cc7a1b87f08?w=600&q=80" },
      ],
    },
    {
      id: "wine",
      label: "Wine",
      items: [
        { name: "Château Pétrus 2015", description: "Pomerol, Bordeaux · Full-bodied, velvety tannins, dark fruit", price: "$980", image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&q=80" },
        { name: "Opus One 2019", description: "Napa Valley · Structured, complex, blackcurrant, cedar", price: "$420", image: "https://images.unsplash.com/photo-1568213816046-0ee1c42bd559?w=600&q=80" },
        { name: "Krug Grande Cuvée", description: "Champagne, France · Brioche, toasted almond, stone fruit", price: "$295", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80" },
        { name: "Burgundy by the Glass", description: "Rotating selection · Ask your sommelier for today's pour", price: "$38", image: "https://images.unsplash.com/photo-1569919659476-f0852f6834b7?w=600&q=80" },
      ],
    },
  ],
//Gallery---------------------------------------------//
  gallery: [
    { src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80", alt: "Restaurant interior", category: "Atmosphere" },
    { src: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80", alt: "Signature dish", category: "Food" },
    { src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80", alt: "Wine cellar", category: "Atmosphere" },
    { src: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80", alt: "Wagyu tenderloin", category: "Food" },
    { src: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&q=80", alt: "Wine selection", category: "Wine" },
    { src: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80", alt: "Dover sole", category: "Food" },
    { src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80", alt: "Plating artistry", category: "Food" },
    { src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80", alt: "Private dining", category: "Atmosphere" },
    { src: "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=800&q=80", alt: "Crème brûlée", category: "Food" },
    { src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80", alt: "Chef at work", category: "Events" },
    { src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80", alt: "Rack of lamb", category: "Food" },
    { src: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?w=800&q=80", alt: "Private event", category: "Events" },
  ],
//Testimonials--------------------------------------------//
  testimonials: [
  {
    name: "Sarah Mitchell",
    role: "Food Critic",
    publication: "The Daily Review",
    occasion: "Critical Review",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
    text: "An extraordinary dining experience that transcends the ordinary. Chef Marco's attention to detail and commitment to seasonal ingredients creates dishes that are truly unforgettable. The wagyu tenderloin is a masterpiece.",
  },
  {
    name: "James & Emily Chen",
    role: "Anniversary Dinner Guests",
    publication: "10th Anniversary",
    occasion: "Anniversary Dinner",
    rating: 5,
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&q=80",
    text: "We celebrated our 10th anniversary here and it was absolutely perfect. The staff went above and beyond to make it special. From the amuse-bouche to the dessert, every course was a revelation.",
  },
  {
    name: "Robert Fontaine",
    role: "Regular Guest",
    publication: "Frequent Diner",
    occasion: "Regular Visit",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    text: "I've dined at Michelin-starred restaurants around the world, and The Grand Table holds its own with the best of them. The sommelier's wine pairing recommendations are always spot-on.",
  },
  {
    name: "Lisa Park",
    role: "Private Event Host",
    publication: "Corporate Dinner",
    occasion: "Private Event",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80",
    text: "Hosted our company's annual dinner here and it was flawless. The private dining room is stunning, the service is impeccable, and the menu was customized perfectly for our group's dietary needs.",
  },
],

//Events========================================//
  events: [
    {
      date: "APR 12",
      name: "Spring Truffle Dinner",
      description: "A five-course celebration of Périgord black truffles paired with rare Burgundies from our private cellar.",
      price: "$295 per guest",
      seats: "12 seats remaining",
    },
    {
      date: "APR 19",
      name: "Chef's Table Evening",
      description: "An intimate dinner for eight guests at the kitchen counter. Watch the brigade at work as Chef prepares a bespoke tasting menu.",
      price: "$425 per guest",
      seats: "4 seats remaining",
    },
    {
      date: "MAY 3",
      name: "Napa Valley Wine Dinner",
      description: "Six courses alongside iconic Napa Valley producers. A vertical tasting of Opus One anchors the evening.",
      price: "$380 per guest",
      seats: "18 seats remaining",
    },
    {
      date: "MAY 18",
      name: "Mother's Day Brunch",
      description: "A luxurious Sunday brunch featuring tableside Champagne, a seafood tower, and our signature pastry selection.",
      price: "$145 per guest",
      seats: "Open seating",
    },
  ],

  map: {
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0!2d-122.3999!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064!2s1+Market+St+San+Francisco!5e0!3m2!1sen!2sus!4v1",
    label: "Find Us",
  },
//Social Links--------------------------------------------//
  social: {
    instagram: "https://instagram.com/thegrandtable",
    facebook: "https://facebook.com/thegrandtable",
    twitter: "",
  },
//SEO ---------------------------------------------//
  seo: {
    title: "The Grand Table — Fine Dining San Francisco",
    description: "San Francisco's most celebrated fine dining destination. Three Michelin stars. Reserve your table today.",
    keywords: "fine dining san francisco, michelin star restaurant, tasting menu, private dining",
  },
//Themes---------------------------------------------//
  themes: {
    warm: { label: "Warm & Rustic", primary: "#c9a96e", bg: "#0a0804" },
    modern: { label: "Modern & Minimal", primary: "#d4af37", bg: "#080808" },
    fresh: { label: "Fresh & Green", primary: "#7a9e6e", bg: "#060a06" },
    bold: { label: "Bold & Dramatic", primary: "#c0522a", bg: "#0a0604" },
  },
}
