export default function VolunteerForm() {
  return (
    <form>
      <div className="space-y-12">
        <div className="border-b border-white/10 pb-12">
          <h2 className="text-base/7 font-semibold text-white"> Volunteer Form </h2>
          <p className="mt-1 text-sm/6 text-gray-300"> Please provide your personal information to volunteer for ASRS </p>

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

            <div className="sm:col-span-2 sm:col-start-1">
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

            <div className="sm:col-span-2  sm:col-start-1">
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

            <div className="sm:col-span-2 sm:col-start-1">
              <label htmlFor="city" className="block text-sm/6 font-semibold text-white">
                City
              </label>
              <div className="mt-2">
                <input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  className="block w-full rounded-md bg-asrs-lightInk px-3 py-1.5 text-white outline-none hover:outline hover:outline-2 hover:outline-white focus:outline-solid  focus:outline-2 focus:outline-white"/>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="region" className="block text-sm/6 font-semibold text-white">
                State / Province
              </label>
              <div className="mt-2">
                <input
                  id="region"
                  name="region"
                  type="text"
                  autoComplete="address-level1"
                  className="block w-full rounded-md bg-asrs-lightInk px-3 py-1.5 text-white outline-none hover:outline hover:outline-2 hover:outline-white focus:outline-solid  focus:outline-2 focus:outline-white"/>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postal-code" className="block text-sm/6 font-semibold text-white">
                ZIP / Postal code
              </label>
              <div className="mt-2">
                <input
                  id="postal-code"
                  name="postal-code"
                  type="text"
                  autoComplete="postal-code"
                  className="block w-full rounded-md bg-asrs-lightInk px-3 py-1.5 text-white outline-none hover:outline hover:outline-2 hover:outline-white focus:outline-solid  focus:outline-2 focus:outline-white"/>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="employer" className="block text-sm/6 font-semibold text-white"> Employer </label>
              <div className="mt-2">
                <input
                  id="employer"
                  name="employer"
                  type="text"
                  autoComplete="organization"
                  className="block w-full rounded-md bg-asrs-lightInk px-3 py-1.5 text-white outline-none hover:outline hover:outline-2 hover:outline-white focus:outline-solid  focus:outline-2 focus:outline-white"/>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="title" className="block text-sm/6 font-semibold text-white"> Title </label>
              <div className="mt-2">
                <input
                  id="title"
                  name="title"
                  type="text"
                  autoComplete="organization-title"
                  className="block w-full rounded-md bg-asrs-lightInk px-3 py-1.5 text-white outline-none hover:outline hover:outline-2 hover:outline-white focus:outline-solid  focus:outline-2 focus:outline-white"/>
              </div>
            </div>

                        <div className="col-span-full">
              <label htmlFor="about" className="block text-sm/6 font-semibold text-white"> Why are you interested in ASRS? </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block w-full rounded-md bg-asrs-lightInk px-3 py-1.5 text-white outline-none hover:outline hover:outline-2 hover:outline-white focus:outline-solid  focus:outline-2 focus:outline-white"
                  defaultValue={''}
                />
              </div>
            </div>


          </div>
        </div>
      </div>

      <div className="mt-2 flex items-center justify-end gap-x-6">
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