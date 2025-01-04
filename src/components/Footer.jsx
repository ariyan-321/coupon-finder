import React from 'react';

export default function Footer() {
  return (
    <div className="mt-[60vh]">
      <footer className="footer bg-gradient-to-r from-blue-500 via-blue-300 to-blue-200 text-white p-10">
        <aside>
          {/* Snowflake Icon */}
          <svg
            width="50"
            height="50"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            className="fill-current text-white mb-3"
          >
            <path
              d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"
            ></path>
          </svg>
          <p>
            <span className="font-bold text-lg">Frosty Solutions Ltd.</span>
            <br />
            Delivering cool innovations since 1992
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-lg font-semibold mb-2">Services</h6>
          <a className="link link-hover">Snowflake Branding</a>
          <a className="link link-hover">Winter Design</a>
          <a className="link link-hover">Cold Marketing</a>
          <a className="link link-hover">Holiday Advertisements</a>
        </nav>
        <nav>
          <h6 className="footer-title text-lg font-semibold mb-2">Company</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Press Kit</a>
        </nav>
        <nav>
          <h6 className="footer-title text-lg font-semibold mb-2">Legal</h6>
          <a className="link link-hover">Terms of Use</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
        <div>
          <h6 className="footer-title text-lg font-semibold mb-2">Follow Us</h6>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6">
                <path d="M18 2h-3a6 6 0 00-6 6v3H7a1 1 0 00-1 1v4a1 1 0 001 1h2v6a1 1 0 001 1h4a1 1 0 001-1v-6h3a1 1 0 001-1v-4a1 1 0 00-1-1h-3V8a1 1 0 011-1h2a1 1 0 001-1V3a1 1 0 00-1-1z" />
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.46 2a9.86 9.86 0 01-3.17 1.24 4.53 4.53 0 00-7.86 4.13A12.88 12.88 0 013 4.1a4.51 4.51 0 001.41 6.05A4.48 4.48 0 012 9.7v.05a4.53 4.53 0 003.63 4.43 4.52 4.52 0 01-2 .07 4.53 4.53 0 004.22 3.13A9.06 9.06 0 010 21a12.79 12.79 0 007 2.05c8.4 0 13-7 13-13v-.59A9.33 9.33 0 0024 4.56a9.49 9.49 0 01-2.7.74A4.48 4.48 0 0023 3z" />
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6">
                <path d="M7.75 2h8.5A5.76 5.76 0 0122 7.75v8.5A5.76 5.76 0 0116.25 22h-8.5A5.76 5.76 0 012 16.25v-8.5A5.76 5.76 0 017.75 2zM12 7a5 5 0 100 10 5 5 0 000-10zm5.5-.38a1.13 1.13 0 100 2.25 1.13 1.13 0 000-2.25zM12 9.13a2.88 2.88 0 11-2.88 2.88A2.88 2.88 0 0112 9.13z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
      <div className="bg-blue-700 text-center text-white p-4">
        <p>
          © {new Date().getFullYear()} Frosty Solutions Ltd. | All Rights Reserved
        </p>
        <p>
          Crafted with ❄️ by Winter Devs
        </p>
      </div>
    </div>
  );
}
