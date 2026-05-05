import Link from "next/link";
import { ShoppingCart, Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const links = {
  Shop: ["All Products", "Categories", "Brands", "Electronics", "Men's Fashion", "Women's Fashion"],
  Account: ["My Account", "Order History", "Wishlist", "Shopping Cart", "Sign In", "Create Account"],
  Support: ["Contact Us", "Help Center", "Shipping Info", "Returns & Refunds", "Track Order"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const contactInfo = [
  { Icon: Phone, text: "+1 (800) 123-4567" },
  { Icon: Mail, text: "support@freshcart.com" },
  { Icon: MapPin, text: "123 Commerce Street, New York, NY 10001" },
];

const socials = [FaFacebookF, FaTwitter, FaInstagram, FaYoutube];

export default function Footer() {
  return (
    <footer className="bg-[#0d1117] text-gray-400 text-sm">
      <div className="max-w-7xl px-9 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Brand */}
        <div className="space-y-5 lg:col-span-1">
          <Link href="/" className="inline-flex items-center gap-2 bg-white rounded-xl px-4 py-2">
            <ShoppingCart className="text-green-500 w-5 h-5" />
            <span className="text-[#0d1117] font-bold text-lg">FreshCart</span>
          </Link>

          <p className="leading-relaxed">
            FreshCart is your one-stop destination for quality products. From fashion to electronics,
            we bring you the best brands at competitive prices with a seamless shopping experience.
          </p>

          <ul className="space-y-2">
            {contactInfo.map(({ Icon, text }, i) => (
              <li key={i} className="flex items-center gap-2">
                <Icon className="text-green-500 w-4 h-4 shrink-0" />
                {text}
              </li>
            ))}
          </ul>

          <div className="flex gap-2">
            {socials.map((Icon, i) => (
              <Link key={i} href="#" className="w-9 h-9 rounded-full bg-white/5 grid place-items-center hover:bg-green-600 hover:text-white transition-colors">
                <Icon />
              </Link>
            ))}
          </div>
        </div>

        {/* Nav Columns */}
        {Object.entries(links).map(([title, items]) => (
          <div key={title}>
            <h4 className="text-white font-semibold mb-4">{title}</h4>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-2">
          <p className="text-xs text-gray-500">© 2026 FreshCart. All rights reserved.</p>
          <div className="flex items-center gap-2 opacity-50">
            <span className="border border-gray-700 rounded px-2 py-1 text-[9px] font-bold">VISA</span>
            <span className="border border-gray-700 rounded px-2 py-1 text-[9px] font-bold">MASTERCARD</span>
            <span className="border border-gray-700 rounded px-2 py-1 text-[9px] font-bold">PAYPAL</span>
          </div>
        </div>
      </div>
    </footer>
  );
}