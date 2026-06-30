export default function ContactForm() {
  return (
    <form action="/contact">
      <div className="space-y-12">
        <div className="border-b border-white/10 pb-12">
          <h2 className="text-base/7 font-semibold text-white"> Contact Form </h2>
          <p className="mt-1 text-sm/6 text-gray-300"> Please provide your contact information to get in touch with ASRS </p>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first_name" className= "block text-sm/6 font-semibold text-white"> First name </label>
              <div className="mt-2">
                <input
                  type="text" name="first_name" id="first_name" placeholder="John" autoComplete="first_name " required
                  className="block w-full rounded-md bg-asrs-lightInk px-3 py-1.5 text-white outline-none hover:outline hover:outline-2 hover:outline-white focus:outline-solid  focus:outline-2 focus:outline-white"/>
              </div>
            </div>


            <div className="sm:col-span-3">
              <label htmlFor="last_name" className="block text-sm/6 font-semibold text-white"> Last name </label>
              <div className="mt-2">
                <input
                  type="text" name="last_name" id="last_name" placeholder="Doe" autoComplete="last_name" required
                  className="block w-full rounded-md bg-asrs-lightInk px-3 py-1.5 text-white outline-none hover:outline hover:outline-2 hover:outline-white focus:outline-solid  focus:outline-2 focus:outline-white"/>
              </div>
            </div>

            <div className="sm:col-span-3 sm:col-start-1">
              <label htmlFor="email" className="block text-sm/6 font-semibold text-white"> Email address  </label>
              <div className="mt-2">
                <input
                  type="email" name="email" id="email" placeholder="john.doe@example.com" autoComplete="email" required
                  className="block w-full rounded-md bg-asrs-lightInk px-3 py-1.5 text-white outline-none hover:outline hover:outline-2 hover:outline-white focus:outline-solid  focus:outline-2 focus:outline-white"/>
              </div>
            </div>

            <div className="sm:col-span-3 ">
              <label htmlFor="phone_number" className="block text-sm/6 font-semibold text-white"> Phone Number </label>
              <div className="mt-2">
                <input
                  type="tel" name="phone_number" id="phone_number" placeholder="(123) 456-7890" autoComplete="tel" required
                  className="block w-full rounded-md bg-asrs-lightInk px-3 py-1.5 text-white outline-none hover:outline hover:outline-2 hover:outline-white focus:outline-solid  focus:outline-2 focus:outline-white"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="reset" className="text-sm/6 font-semibold text-white"> 
          Cancel 
          </button>
        
        <button type="submit" className="rounded-md bg-asrs-orange px-3 py-2 text-sm/6 font-semibold text-white shadow-sm hover:bg-asrs-orangeDark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-asrs-orange">
          Submit
          </button>
      </div>
    </form>
  )
}