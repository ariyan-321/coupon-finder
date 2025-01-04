import React, { useState, useEffect } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { toast } from "react-hot-toast"; 
import AOS from "aos";
import "aos/dist/aos.css"; 

export default function BrandDetails() {
  const brand = useLoaderData();
  const [copiedCoupon, setCopiedCoupon] = useState(null); 

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,
    });
  }, []);

  const handleCopy = (couponCode) => {
    setCopiedCoupon(couponCode);
    toast.success(`Coupon code "${couponCode}" copied to clipboard!`);
  };

  return (
    <div className="mt-12">
      <div className="logo text-center" data-aos="fade-down">
        <img
          className="w-[90%] md:w-[60%] lg:w-[50%] 2xl:w-[40%] mx-auto"
          src={brand.brand_logo}
          alt={brand.brand_name}
        />
        <h1 className="font-bold text-4xl my-3">{brand.brand_name}</h1>
        <div className="flex text-3xl justify-center mt-2 text-yellow-500">
          {"★".repeat(Math.floor(brand.rating))} {/* Displaying stars for rating */}
          {brand.rating % 1 !== 0 && "☆"}
        </div>
      </div>

      <div
        className="coupons mt-12 grid justify-items-center grid-cols-1 md:grid-cols-2 gap-8"
        data-aos="fade-up"
      >
        {brand.coupons.map((coupon, index) => (
          <div
            className="bg-green-300 m-5 p-12 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            key={coupon.coupon_code}
            data-aos="zoom-in" 
            data-aos-delay={index * 200} 
          >
            <h1 className="font-semibold text-2xl">{coupon.description}</h1>
            <div className="texts space-y-3 mt-3">
              <p>Expiry Date: {coupon.expiry_date}</p>
              <p>Coupon type: {coupon.coupon_type}</p>
              <p>Condition: {coupon.condition}</p>
            </div>
            <div className="mt-5 flex gap-5 items-center justify-center">
              <CopyToClipboard
                text={coupon.coupon_code}
                onCopy={() => handleCopy(coupon.coupon_code)}
              >
                <button className="btn btn-outline">
                  {copiedCoupon === coupon.coupon_code ? "Copied!" : "Copy Code"}
                </button>
              </CopyToClipboard>
              <Link
                target="_blank"
                to={brand.shop_link}
                className="btn btn-primary"
              >
                Use Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
