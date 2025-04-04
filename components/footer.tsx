"use client";

import { usePathname } from "next/navigation";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const pathname = usePathname();
  const isServicePage = pathname.includes("/service");

  // Helper function to scroll to a specific section by ID
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // When on a service page, quick links will redirect to home ("/")
  const handleLinkClick = (sectionId: string) => {
    if (isServicePage) {
      window.location.href = "/";
    } else {
      scrollToSection(sectionId);
    }
  };

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <button
                  onClick={() => handleLinkClick("about")}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("services")}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Products
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("customers")}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Customers
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLinkClick("contact")}
                  className="text-sm text-muted-foreground hover:text-foreground"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="mt-4 space-y-2">
              <li className="text-sm text-muted-foreground">
                Shed No. 19 &amp; 20, Phase-II, IDA, Cherlapally, Kapra
              </li>
              <li className="text-sm text-muted-foreground">
                Hyderabad, Medchal Malkajgiri Dist- 500051, Telangana State
              </li>
              <li className="text-sm text-muted-foreground">
                Email: info@yvsmechotronics.com
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Follow Us</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} YVS MECHATRONICS. All rights reserved.
          </p>
          <p className="text-center text-sm text-muted-foreground mt-2">
            Developed By Argonix Labs.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
