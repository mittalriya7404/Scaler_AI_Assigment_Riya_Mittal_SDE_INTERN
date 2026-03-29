export default function Footer() {
  return (
    <div className="bg-[#172337] text-gray-300 text-sm mt-10">
      {/* TOP SECTION */}
      <div className="max-w-[1200px] mx-auto px-6 py-10 grid grid-cols-5 gap-8 border-b border-gray-600">
        {/* ABOUT */}
        <div>
          <h3 className="text-gray-400 mb-3">ABOUT</h3>
          <p className="hover:underline cursor-pointer">Contact Us</p>
          <p className="hover:underline cursor-pointer">About Us</p>
          <p className="hover:underline cursor-pointer">Careers</p>
          <p className="hover:underline cursor-pointer">Flipkart Stories</p>
          <p className="hover:underline cursor-pointer">Press</p>
        </div>

        {/* GROUP COMPANIES */}
        <div>
          <h3 className="text-gray-400 mb-3">GROUP COMPANIES</h3>
          <p>Myntra</p>
          <p>Cleartrip</p>
          <p>Shopsy</p>
        </div>

        {/* HELP */}
        <div>
          <h3 className="text-gray-400 mb-3">HELP</h3>
          <p>Payments</p>
          <p>Shipping</p>
          <p>Cancellation & Returns</p>
          <p>FAQ</p>
        </div>

        {/* POLICY */}
        <div>
          <h3 className="text-gray-400 mb-3">CONSUMER POLICY</h3>
          <p>Terms Of Use</p>
          <p>Security</p>
          <p>Privacy</p>
          <p>Sitemap</p>
        </div>

        {/* ADDRESS */}
        <div>
          <h3 className="text-gray-400 mb-3">Mail Us:</h3>
          <p>
            Flipkart Internet Private Limited, <br />
            Bengaluru, India
          </p>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="max-w-[1200px] mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-4 text-gray-400">
        <div className="flex gap-6">
          <span>🛍 Become a Seller</span>
          <span>⭐ Advertise</span>
          <span>🎁 Gift Cards</span>
          <span>❓ Help Center</span>
        </div>

        <div>© 2026 Flipkart Clone</div>

        <div className="flex gap-2">
          <span className="bg-white text-black px-2 py-1 rounded text-xs">
            VISA
          </span>
          <span className="bg-white text-black px-2 py-1 rounded text-xs">
            Mastercard
          </span>
          <span className="bg-white text-black px-2 py-1 rounded text-xs">
            UPI
          </span>
        </div>
      </div>
    </div>
  );
}
