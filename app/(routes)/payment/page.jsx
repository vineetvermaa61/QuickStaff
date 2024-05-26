// "use client";

// import React, { useEffect } from "react";

// const MakePayment = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://checkout.razorpay.com/v1/checkout.js";
//     script.async = true;
//     document.body.appendChild(script);

//     script.onload = () => {
//       var options = {
//         key: "rzp_test_MqIT71aSNxKOH9",
//         amount: "50000",
//         currency: "INR",
//         name: "Aryan wadhe",
//         description: "Test Transaction",
//         image:
//           "https://upload.wikimedia.org/wikipedia/commons/c/c8/Altja_j%C3%B5gi_Lahemaal.jpg",
//         order_id: "order_O5VzabcXngo6C5",
//         handler: function (response) {
//           alert(response.razorpay_payment_id);
//           alert(response.razorpay_order_id);
//           alert(response.razorpay_signature);
//         },
//         prefill: {
//           name: "Gaurav Kumar",
//           email: "gaurav.kumar@example.com",
//           contact: "9000090000",
//         },
//         notes: {
//           address: "Razorpay Corporate Office",
//         },
//         theme: {
//           color: "#7971cc",
//         },
//       };

//       var rzp1 = new Razorpay(options);

//       rzp1.on("payment.failed", function (response) {
//         alert(response.error.code);
//         alert(response.error.description);
//         alert(response.error.source);
//         alert(response.error.step);
//         alert(response.error.reason);
//         alert(response.error.metadata.order_id);
//         alert(response.error.metadata.payment_id);
//       });

//       document.getElementById("rzp-button1").onclick = function (e) {
//         rzp1.open();
//         e.preventDefault();
//       };
//     };

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <>
//       <div className="w-full overflow-x-hidden overscroll-none my-10">
//         <section className="relative  overflow-hidden">
//           <img
//             className="absolute top-[3rem] right-0 rotate-180 inline-block"
//             src="/feature-section1-dottedrows.png"
//             alt=""
//             width="233"
//             height="167"
//             loading="lazy"
//           />
//           <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">
//             <h2 className="font-mullish text-center font-bold leading-1.2 text-2xl hidden md:block mb-8">
//               Welcome to QuickStaff Payment Page
//             </h2>
//             <h2 className="font-mullish text-center font-bold leading-1.2 text-4xl md:hidden">
//               Welcome to Rajorpay Payment Suite
//             </h2>
//             <div className="w-full min-h-[520px] bg-white flex rounded-md relative px-10 py-12 border">
//               <div className="flex flex-col justify-between w-full">
//                 <h3 className="font-mullish text-[28px] leading-10 font-bold max-w-[500px]">
//                   Where Booking's a Breeze, No Hassle,
//                   <span className=" text-[#0B72E7]">Just Ease!</span>
//                 </h3>
//                 <ul class="space-y-2">
//                 <li class="font-mullish flex items-center space-x-2">
//                   <div class="flex flex-row space-x-5">
//                     <img
//                       class="max-w-4 object-contain"
//                       src="/checkmark.png"
//                       alt=""
//                     />
//                     <span>100+ Home Services</span>
//                   </div>
//                 </li>
//                 <li>
//                   <div class="flex flex-row space-x-5">
//                     <img
//                       class="max-w-4 object-contain"
//                       src="/checkmark.png"
//                       alt=""
//                     />
//                     <span>Solution for all your problems</span>
//                   </div>
//                 </li>
//                 <li>
//                   <div class="flex flex-row space-x-5">
//                     <img
//                       class="max-w-4 object-contain"
//                       src="/checkmark.png"
//                       alt=""
//                     />
//                     <span>Superior Customer Experience</span>
//                   </div>
//                 </li>
//                 <li>
//                   <div class="flex flex-row space-x-5">
//                     <img
//                       class="max-w-4 object-contain"
//                       src="/checkmark.png"
//                       alt=""
//                     />
//                     <span>Easy to Use</span>
//                   </div>
//                 </li>
//                 <li>
//                   <div class="flex flex-row space-x-5">
//                     <img
//                       class="max-w-4 object-contain"
//                       src="/checkmark.png"
//                       alt=""
//                     />
//                     <span>Instant Bookings</span>
//                   </div>
//                 </li>
//                 <li>
//                   <div class="flex flex-row space-x-5">
//                     <img
//                       class="max-w-4 object-contain"
//                       src="/checkmark.png"
//                       alt=""
//                     />
//                     <span>Lowest Service Charge</span>
//                   </div>
//                 </li>
//                 </ul>
//                 <div className="flex flex-col-reverse md:flex-row w-full items-center space-x-4">
//                   <button id="rzp-button1" className="relative bg-[#0B72E7] flex items-center md:justify-start place-content-center text-white  py-[14px] px-[18px] md:pr-[90px] rounded-md font-mullish font-bold hover:bg-[#4471b6] transition-all duration-200 self-stretch md:w-fit">
//                     Click here to Make Payment
//                     <div className="w-12 h-[60px] bg-greenLight absolute right-6 skew-x-[20deg] flex justify-center items-center">
//                       <svg
//                         viewBox="0 0 24 24"
//                         focusable="false"
//                         className="w-[20px] h-[20px] -skew-x-[20deg]"
//                       >
//                         <path
//                           fill="currentColor"
//                           d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
//                         ></path>
//                       </svg>
//                     </div>
//                   </button>
//                 </div>
//               </div>
//               <img
//                 className="absolute right-0 bottom-0 hidden md:max-w-[400px] lg:max-w-[600px] md:block"
//                 src="/payment-suite.png"
//                 alt=""
//               />
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default MakePayment;



"use client";

import React, { useEffect } from "react";

const MakePayment = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      var options = {
        key: "rzp_test_MqIT71aSNxKOH0",
        amount: "50000",
        currency: "INR",
        name: "QuickStaff",
        description: "Test Transaction",
        image:
          "https://res.cloudinary.com/dlevzyz21/image/upload/v1714628687/Logo_zwgtvw.png",
        order_id: "order_O5VNrpmPTqYHyu",
        handler: function (response) {
          alert(response.razorpay_payment_id);
          alert(response.razorpay_order_id);
          alert(response.razorpay_signature);
        },
        prefill: {
          name: "Gaurav Kumar",
          email: "gaurav.kumar@example.com",
          contact: "9000090000",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#7971cc",
        },
      };

      var rzp1 = new Razorpay(options);

      rzp1.on("payment.failed", function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });

      document.getElementById("rzp-button1").onclick = function (e) {
        rzp1.open();
        e.preventDefault();
      };
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="w-full overflow-x-hidden overscroll-none my-10">
        <section className="relative  overflow-hidden">
          <img
            className="absolute top-[3rem] right-0 rotate-180 inline-block"
            src="/feature-section1-dottedrows.png"
            alt=""
            width="233"
            height="167"
            loading="lazy"
          />
          <div className="relative w-11/12 max-w-[1080px] mx-auto pt-4">
            <h2 className="font-mullish text-center font-bold leading-1.2 text-2xl hidden md:block mb-8">
              Welcome to QuickStaff Payment Page
            </h2>
            <h2 className="font-mullish text-center font-bold leading-1.2 text-4xl md:hidden">
              Welcome to Rajorpay Payment Suite
            </h2>
            <div className="w-full min-h-[520px] bg-white flex rounded-md relative px-10 py-12 border">
              <div className="flex flex-col justify-between w-full">
                <h3 className="font-mullish text-[28px] leading-10 font-bold max-w-[500px]">
                  Where Booking's a Breeze, No Hassle,
                  <span className=" text-[#0B72E7]">Just Ease!</span>
                </h3>
                <ul class="space-y-2">
                  <li class="font-mullish flex items-center space-x-2">
                    <div class="flex flex-row space-x-5">
                      <img
                        class="max-w-4 object-contain"
                        src="/checkmark.png"
                        alt=""
                      />
                      <span>100+ Home Services</span>
                    </div>
                  </li>
                  <li>
                    <div class="flex flex-row space-x-5">
                      <img
                        class="max-w-4 object-contain"
                        src="/checkmark.png"
                        alt=""
                      />
                      <span>Solution for all your problems</span>
                    </div>
                  </li>
                  <li>
                    <div class="flex flex-row space-x-5">
                      <img
                        class="max-w-4 object-contain"
                        src="/checkmark.png"
                        alt=""
                      />
                      <span>Superior Customer Experience</span>
                    </div>
                  </li>
                  <li>
                    <div class="flex flex-row space-x-5">
                      <img
                        class="max-w-4 object-contain"
                        src="/checkmark.png"
                        alt=""
                      />
                      <span>Easy to Use</span>
                    </div>
                  </li>
                  <li>
                    <div class="flex flex-row space-x-5">
                      <img
                        class="max-w-4 object-contain"
                        src="/checkmark.png"
                        alt=""
                      />
                      <span>Instant Bookings</span>
                    </div>
                  </li>
                  <li>
                    <div class="flex flex-row space-x-5">
                      <img
                        class="max-w-4 object-contain"
                        src="/checkmark.png"
                        alt=""
                      />
                      <span>Lowest Service Charge</span>
                    </div>
                  </li>
                </ul>
                <div className="flex flex-col-reverse md:flex-row w-full items-center space-x-4">
                  <button
                    id="rzp-button1"
                    className="relative bg-[#0B72E7] flex items-center md:justify-start place-content-center text-white  py-[14px] px-[18px] md:pr-[90px] rounded-md font-mullish font-bold hover:bg-[#4471b6] transition-all duration-200 self-stretch md:w-fit"
                  >
                    Click here to Make Payment
                    <div className="w-12 h-[60px] bg-greenLight absolute right-6 skew-x-[20deg] flex justify-center items-center">
                      <svg
                        viewBox="0 0 24 24"
                        focusable="false"
                        className="w-[20px] h-[20px] -skew-x-[20deg]"
                      >
                        <path
                          fill="currentColor"
                          d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
              <img
                className="absolute right-0 bottom-0 hidden md:max-w-[400px] lg:max-w-[600px] md:block"
                src="/payment-suite.png"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MakePayment;
