export const siteConfig = {
  name: "The Grand Table",
  tagline: "Fine Dining Restaurant",
  phone: "(555) 123-4567",
  email: "hello@thegrandtable.com",
  address: "123 Fine Dining Avenue, New York, NY 10001",
  // For demo this goes to you — swap to client email on delivery
  notifyEmail: process.env.NOTIFY_EMAIL!,
  fromEmail: process.env.FROM_EMAIL!,
}