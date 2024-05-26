import React from "react";

const Slider = () => {
  return (
    <>
      <div className="">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b  text-white">
          <section
            id="testimonials"
            aria-label="What our customers are saying"
            className="bg-slate-50 py-20 sm:py-32"
          >
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
              <div className="mx-auto max-w-2xl md:text-center">
                <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
                  What Our Customers Are Saying
                </h2>
              </div>
              <ul
                role="list"
                className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
              >
                <li>
                  <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                    <li>
                      <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                        <svg
                          aria-hidden="true"
                          width={105}
                          height={78}
                          className="absolute left-6 top-6 fill-slate-100"
                        >
                          <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                        </svg>
                        <blockquote className="relative">
                          <p className="text-lg tracking-tight text-slate-900">
                            I love the fitness apparel and gear I purchased from
                            this site. The quality is exceptional and the prices
                            are unbeatable.
                          </p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                          <div>
                            <div className="font-display text-base text-slate-900">
                              Sheryl Berge
                            </div>
                          </div>
                          <div className="overflow-hidden rounded-full bg-slate-50">
                            <img
                              alt
                              className="h-14 w-14 object-cover"
                              style={{ color: "transparent" }}
                              src="https://randomuser.me/api/portraits/men/15.jpg"
                            />
                          </div>
                        </figcaption>
                      </figure>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                    <li>
                      <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                        <svg
                          aria-hidden="true"
                          width={105}
                          height={78}
                          className="absolute left-6 top-6 fill-slate-100"
                        >
                          <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                        </svg>
                        <blockquote className="relative">
                          <p className="text-lg tracking-tight text-slate-900">
                            As a professional athlete, I rely on
                            high-performance gear for my training. This site
                            offers a great selection of top-notch products.
                          </p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                          <div>
                            <div className="font-display text-base text-slate-900">
                              Leland Kiehn
                            </div>
                          </div>
                          <div className="overflow-hidden rounded-full bg-slate-50">
                            <img
                              alt
                              className="h-14 w-14 object-cover"
                              style={{ color: "transparent" }}
                              src="https://randomuser.me/api/portraits/women/15.jpg"
                            />
                          </div>
                        </figcaption>
                      </figure>
                    </li>
                  </ul>
                </li>
                <li>
                  <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                    <li>
                      <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
                        <svg
                          aria-hidden="true"
                          width={105}
                          height={78}
                          className="absolute left-6 top-6 fill-slate-100"
                        >
                          <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.13 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z"></path>
                        </svg>
                        <blockquote className="relative">
                          <p className="text-lg tracking-tight text-slate-900">
                            The fitness apparel I bought here fits perfectly and
                            feels amazing. I highly recommend this store to
                            anyone looking for quality gear.
                          </p>
                        </blockquote>
                        <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
                          <div>
                            <div className="font-display text-base text-slate-900">
                              Peter Renolds
                            </div>
                          </div>
                          <div className="overflow-hidden rounded-full bg-slate-50">
                            <img
                              alt
                              className="h-14 w-14 object-cover"
                              style={{ color: "transparent" }}
                              src="https://randomuser.me/api/portraits/men/10.jpg"
                            />
                          </div>
                        </figcaption>
                      </figure>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>
        </div>
        <div className=" bg-slate-50 w-full sticky top-0 h-screen flex flex-col items-center justify-center bg-gradient-to-b rounded">
          <div class="relative mx-auto w-full px-4 lg:px-8 bg-white mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
            <div class="mx-auto px-5">
              <div class="flex flex-col items-center">
                <h2 class="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
                  FAQ
                </h2>
                <p class="mt-3 text-lg text-neutral-500 md:text-xl">
                  Frequenty asked questions
                </p>
              </div>
              <div class="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
                <div class="py-5">
                  <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                      <span> How does the billing work with Quick Staff?</span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                      Quick Staff provides flexible billing options for its
                      services. Customers can choose between hourly rates for
                      on-demand services or opt for subscription plans for
                      regular services. Payment can be conveniently made online
                      through the Quick Staff website or app using various
                      secure payment methods such as credit/debit cards or
                      digital wallets.
                    </p>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                      <span>
                        {" "}
                        Am I eligible for a refund if I cancel my subscription
                        with Quick Staff?
                      </span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                      Quick Staff offers a refund policy for its subscription
                      plans. If you decide to cancel your subscription within
                      the specified refund period, you can request a full
                      refund. However, refunds for subscriptions that have been
                      active beyond this period may be considered on a
                      case-by-case basis.
                    </p>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                      <span>
                        {" "}
                        How can I cancel my subscription with Quick Staff?
                      </span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                      To cancel your subscription with Quick Staff, simply log
                      in to your account on the Quick Staff website or app. From
                      there, navigate to the subscription management section,
                      where you'll find an option to cancel your subscription.
                      Once canceled, future billing will cease, and your
                      subscription benefits will end at the conclusion of the
                      current billing cycle.
                    </p>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                      <span> Does Quick Staff offer a free trial period?</span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                      Yes, Quick Staff provides a free trial period for its
                      services. During this trial period, customers can explore
                      a limited set of features and services offered by Quick
                      Staff at no cost. Please note that access to certain
                      premium features may be restricted during
                      the trial period.
                    </p>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                      <span> How do I contact support?</span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                      If you need help with our platform or have any other
                      questions, you can contact the company's support team by
                      submitting a support request through the website or by
                      emailing support@ourwebsite.com.
                    </p>
                  </details>
                </div>
                <div class="py-5">
                  <details class="group">
                    <summary class="flex cursor-pointer list-none items-center justify-between font-medium">
                      <span> Do you offer any discounts or promotions?</span>
                      <span class="transition group-open:rotate-180">
                        <svg
                          fill="none"
                          height="24"
                          shape-rendering="geometricPrecision"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1.5"
                          viewBox="0 0 24 24"
                          width="24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </summary>
                    <p class="group-open:animate-fadeIn mt-3 text-neutral-600">
                      We may offer discounts or promotions from time to time. To
                      stay up-to-date on the latest deals and special offers,
                      you can sign up for the company's newsletter or follow it
                      on social media.
                    </p>
                  </details>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
