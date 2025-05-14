import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-secondary text-primary px-6 py-12 mt-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-8 text-sm">
        {/* Columns */}
        <div>
          <h4 className="font-bold mb-2">Business Registration</h4>
          <ul className="space-y-1">
            <li>Private Limited Company</li>
            <li>Limited Liability Partnership</li>
            <li>One Person Company</li>
            <li>Public Limited Company</li>
            <li>Section 8 Company</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Licenses</h4>
          <ul className="space-y-1">
            <li>FSSAI [Food License]</li>
            <li>FSSAI Renewal</li>
            <li>IEC [Import/Export Code]</li>
            <li>IEC Certificate Modification</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Registration</h4>
          <ul className="space-y-1">
            <li>TM Registration</li>
            <li>TM Objection</li>
            <li>TM Renewal</li>
            <li>Copyright Registration</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">GST</h4>
          <ul className="space-y-1">
            <li>GST Registration</li>
            <li>GST Filing</li>
            <li>GST Modification</li>
            <li>GST Cancellation</li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Accounting & Tax</h4>
          <ul className="space-y-1">
            <li>PF-ESIC Registration</li>
            <li>PF-ESIC Return Filing</li>
            <li>Online Bookkeeping</li>
          </ul>
        </div>
      </div>

      <div className="max-w-5xl mx-auto text-center mt-12">
        {/* Logo */}
        <div className="font-bold text-xl mb-2">PlanMyTax</div>
        <p className="text-sm font-medium mb-6">
          Online Legal India is a part of PlanMyTax Legal Services Pvt Ltd. Registered under the Companies Act, 2013.
        </p>

        {/* Disclaimer */}
        <p className="text-xs text-gray-700 max-w-4xl mx-auto mb-6">
          This website is privately operated and not affiliated with any government entity. The forms are not for official use but
          to gather business info and assist. We may outsource certain services and are in the process of rebranding.
        </p>

        {/* Social + Store */}
        <div className="flex justify-center items-center gap-4 mb-4 text-lg">
          <FaFacebookF />
          <FaXTwitter />
          <FaLinkedinIn />
          <FaInstagram />
          <FaYoutube />
        </div>

        <div className="flex justify-center items-center gap-4 mt-4">
          <img src="/assets/google-play.svg" alt="Google Play" className="h-10" />
          <img src="/assets/app-store.svg" alt="App Store" className="h-10" />
        </div>

        {/* Bottom Links */}
        <div className="text-xs mt-6">
          <p>
            Careers | Contact Us | Email:{" "}
            <a href="mailto:hello@planmytax.com" className="underline">
              hello@planmytax.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
