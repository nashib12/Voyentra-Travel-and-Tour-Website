import React from "react";
import WesternUnionIcon from "../../../public/Icons/Brand Icons/western-union.png";
import PaymentImage from "../../../public/Images/payment.jpg";
import ApproveIcon from "../../../public/Icons/approve.png";
import SecurityIcon from "../../../public/Icons/security.png";
import LocationIcon from '../../../public/Icons/location.png';

const PaymentSection = () => {
  return (
    <section className="px-6 sm:px-12 lg:px-24 pb-12 md:pb-24">
      <div className="grid md:grid-cols-2 gap-x-0 gap-y-6 md:gap-12">
        <div className="relative w-full rounded-3xl overflow-hidden">
          <img
            src={PaymentImage}
            alt="mountain background image"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[var(--primary-500)]/40" />
          <div className="absolute inset-0 flex flex-col justify-between px-4 py-6 md:px-6 md:py-16">
            <div>
              <div className="flex items-center w-fit px-4 md:px-8 gap-6 rounded-full bg-white py-2 border-white h-fit mb-3 md:mb-6">
                <img
                  src={WesternUnionIcon}
                  alt="western union icon"
                  className="h-8 w-8 md:h-12 md:w-12 object-contain"
                />
                <h5 className="text-yellow-500">Western Union Support</h5>
              </div>
              <h3 className="text-[var(--neutral-100)] max-w-md mb-2 md:mb-4">
                Send your advance payment with confidence
              </h3>
              <p className="max-w-md text-white mb-6">
                We make the transfer process feel simple and personal, with
                direct guidance from our team before you send anything.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div className="bg-white rounded-md w-full h-fit px-2 md:px-6 py-4">
                <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-3">
                  <img
                    src={SecurityIcon}
                    alt="security icon"
                    className="h-4 w-4 md:h-8 md:w-8 object-contain"
                  />
                  <h6 className="text-[var(--tertiary-500)]">Security Firts</h6>
                </div>
                <span className="text-[var(--neutral-500)]">
                  Receiver details are shared only after your trip is confirmed
                  so your booking stays protected and accurate.
                </span>
              </div>
              <div className="bg-white rounded-md w-full h-fit px-2 md:px-6 py-4">
                <div className="flex items-center gap-2 md:gap-3 mb-1 md:mb-3">
                  <img
                    src={ApproveIcon}
                    alt="approve icon"
                    className="h-4 w-4 md:h-8 md:w-8 object-contain"
                  />
                  <h6 className="text-[var(--tertiary-500)]">
                    Quick Validation
                  </h6>
                </div>
                <span className="text-[var(--neutral-500)]">
                  Once you share the receipt or MTCN, we can confirm your
                  reservation and continue planning the trip with you.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <span className="text-[var(--secondary-500)]">Payment Guide</span>
          <h3 className="text-[var(--neutral-900)] mt-1 mb-3">
            A polished, traveler-friendly way to handle your booking deposit.
          </h3>
          <p className="text-[var(--neutral-700)]">
            Our payment guidance is presented with clarity and professionalism,
            helping travelers complete their booking confidently while
            maintaining the refined standard of our brand.
          </p>
          <div className="bg-[var(--primary-100)] w-fit h-fit px-6 py-6 flex items-start gap-4 shadow-xl rounded-2xl mt-6">
            <div className="bg-[var(--primary-500)] h-14 w-14 rounded-full flex items-center justify-center">
              <h5 className="text-[var(--neutral-100)]">01</h5>
            </div>
            <div className="max-w-md">
              <h5 className="text-[var(--neutral-900)] mb-2">
                Confirm Your Trip
              </h5>
              <span className="text-[var(--nautral-700)]">
                Chat with our team first so we can confirm dates, availability,
                and the amount due for your reservation.
              </span>
            </div>
          </div>
          <div className="bg-[var(--primary-100)] w-fit h-fit px-6 py-6 flex items-start gap-4 shadow-xl rounded-2xl mt-6">
            <div className="bg-[var(--primary-500)] h-14 w-14 rounded-full flex items-center justify-center">
              <h5 className="text-[var(--neutral-100)]">02</h5>
            </div>
            <div className="max-w-md">
              <h5 className="text-[var(--neutral-900)] mb-2">
                Receive Secure Details
              </h5>
              <span className="text-[var(--nautral-700)]">
                We share the latest receiver details directly after confirmation
                to keep the transfer accurate and secure.
              </span>
            </div>
          </div>
          <div className="bg-[var(--primary-100)] w-fit h-fit px-6 py-6 flex items-start gap-4 shadow-xl rounded-2xl mt-6">
            <div className="bg-[var(--primary-500)] h-14 w-14 rounded-full flex items-center justify-center">
              <h5 className="text-[var(--neutral-100)]">03</h5>
            </div>
            <div className="max-w-md">
              <h5 className="text-[var(--neutral-900)] mb-2">
                Send And Share Receipt
              </h5>
              <span className="text-[var(--nautral-700)]">
                Complete the Western Union transfer and send us the MTCN number
                or payment receipt for quick verification.
              </span>
            </div>
          </div>
          <div className="bg-[var(--secondary-100)] max-w-xl h-fit px-6 py-6 mt-6 rounded-2xl shadow-xl">
            <div className="flex items-center gap-3 mb-3">
                <img src={LocationIcon} alt="location icon" className="h-8 w-8 object-contain" />
                <h5 className="text-[var(--neutral-900)] ">Why this fits your brand ?</h5>
            </div>
                <ul className="ml-8  list-disc">
                    <li className="mb-2 text-[var(--neutral-700)]">Fast reservation support from our Pokhara team</li>
                    <li className="mb-2 text-[var(--neutral-700)]">Clear guidance before and after the transfer</li>
                    <li className="text-[var(--neutral-700)]">Confirmation once your payment has been verified</li>
                </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;
