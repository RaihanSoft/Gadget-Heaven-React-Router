const ContactUs = () => {

  return (
    <>
      <div className="text-center py-10 bg-prime">
        <h1 className="text-5xl font-bold text-white ">Contact Us</h1>
        <p className="text-white mt-3 xl:w-6/12 mx-auto ">
          Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-8 p-8 bg-gray-50 w-11/12 mx-auto ">
        {/* FAQ Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-sm font-semibold text-gray-500">INFORMATION QUESTIONS</h2>
          <h1 className="text-2xl font-bold mt-2">FREQUENTLY ASKED QUESTIONS</h1>
          <div className="mt-4 space-y-4">
            <details className="border-b">
              <summary className="cursor-pointer text-lg font-semibold hover:text-orange-600">Will I receive the same product that I see in the picture?</summary>
              <p className="mt-2 text-gray-600">
                Consectetur cras scelerisque dis nec mi vestibulum ullamcorper turpis enim natoque
                tempus a malesuada suspendisse iaculis adipiscing himenaeos tincidunt.
              </p>
            </details>
            <details className="border-b">
              <summary className="cursor-pointer text-lg font-semibold hover:text-orange-600">Where can I view my sales receipt?</summary>
              <p className="mt-2 text-gray-600">
                View your sales receipts under the My Orders section in your account.
              </p>
            </details>
            <details className="border-b">
              <summary className="cursor-pointer text-lg font-semibold hover:text-orange-600">How can I return an item?</summary>
              <p className="mt-2 text-gray-600">
                You can return items by going to the Returns section in your account.
              </p>
            </details>
            <details className="border-b">
              <summary className="cursor-pointer text-lg font-semibold hover:text-orange-600">Will you restock items indicated as “out of stock?”</summary>
              <p className="mt-2 text-gray-600">
                Restock dates vary. Please check back regularly or sign up for notifications.
              </p>
            </details>
            <details className="border-b">
              <summary className="cursor-pointer text-lg font-semibold hover:text-orange-600">Where can I ship my order?</summary>
              <p className="mt-2 text-gray-600">
                We ship worldwide. Enter your address at checkout for available shipping options.
              </p>
            </details>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-sm font-semibold text-gray-500">INFORMATION ABOUT US</h2>
          <h1 className="text-2xl font-bold mt-2">CONTACT US FOR ANY QUESTIONS</h1>
          <form className="mt-4 space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <input type="text" placeholder="Your Name" className="input input-bordered w-full" />
              <input type="email" placeholder="Your Email" className="input input-bordered w-full" />
            </div>
            <div className="flex flex-col md:flex-row gap-4">
              <input type="text" placeholder="Phone Number" className="input input-bordered w-full" />
              <input type="text" placeholder="Company" className="input input-bordered w-full" />
            </div>
            <textarea placeholder="Your Message" className="textarea textarea-bordered w-full" rows="4"></textarea>
            <button type="submit" className="btn rounded-full border-prime border-2 text-prime hover:bg-prime  hover:text-white font-bold w-full md:w-auto">Ask a Question</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
