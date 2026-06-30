export default function VolunteerForm() {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-white/10 pb-12">
          <h2 className="text-base/7 font-semibold text-white"> Contact Form </h2>
          <p className="mt-1 text-sm/6 text-gray-300"> Please provide your contact information to get in touch with ASRS </p>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className= "block text-sm/6 font-semibold text-white">
                First name
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-asrs-lightInk px-3 py-1.5 text-white outline-none hover:outline hover:outline-2 hover:outline-white focus:outline-solid  focus:outline-2 focus:outline-white"/>
              </div>
            </div>


            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm/6 font-semibold text-white">
                Last name
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-asrs-lightInk px-3 py-1.5 text-white outline-none hover:outline hover:outline-2 hover:outline-white focus:outline-solid  focus:outline-2 focus:outline-white"/>

              </div>
            </div>

            <div className="sm:col-span-3 sm:col-start-1">
              <label htmlFor="email" className="block text-sm/6 font-semibold text-white"> Email address </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-asrs-lightInk px-3 py-1.5 text-white outline-none hover:outline hover:outline-2 hover:outline-white focus:outline-solid  focus:outline-2 focus:outline-white"/>
              </div>
            </div>

            <div className="sm:col-span-3 ">
              <label htmlFor="phoneNum" className="block text-sm/6 font-semibold text-white"> Phone Number </label>
              <div className="mt-2">
                <input
                  id="phoneNum"
                  name="phoneNum"
                  type="tel"
                  autoComplete="tel"
                  className="block w-full rounded-md bg-asrs-lightInk px-3 py-1.5 text-white outline-none hover:outline hover:outline-2 hover:outline-white focus:outline-solid  focus:outline-2 focus:outline-white"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button type="button" className="text-sm/6 font-semibold text-white">
          Cancel
        </button>
        <button
          type="submit"
          className="rounded-md bg-asrs-orange px-3 py-2 text-sm/6 font-semibold text-white shadow-sm hover:bg-asrs-orangeDark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-asrs-orange"
        >
          Submit
        </button>
      </div>
    </form>
  )
}