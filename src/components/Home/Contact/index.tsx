export default function Contact() {
  return (
    <section className="relative py-1 bg-cover bg-center overflow-hidde dark:bg-darkmode">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md)">
        <div className="relative rounded-2xl py-24 bg-faqBg bg-no-repeat bg-cover bg-primary">
          <h2 className="text-6xl font-semibold text-center text-white mx-72">
            Contact Us
          </h2>
          <div className="w-full px-4 pt-16">
            <div className="mx-auto w-full max-w-3xl rounded-2xl p-8 bg-white mb-5">
              <form className="max-w-sm mx-auto">
                <div className="mb-5">
                  <label
                    htmlFor="email"
                    className="block mb-2.5 text-sm font-medium text-heading"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                    placeholder="name@flowbite.com"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="password"
                    className="block mb-2.5 text-sm font-medium text-heading"
                  >
                    Your password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <label htmlFor="remember" className="flex items-center mb-5">
                  <input
                    id="remember"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
                    required
                  />
                  <p className="ms-2 text-sm font-medium text-heading select-none">
                    I agree with the{" "}
                    <a href="#" className="text-fg-brand hover:underline">
                      terms and conditions
                    </a>
                    .
                  </p>
                </label>
                <button
                  type="submit"
                  className="text-white bg-blue-500 box-border border border-transparent hover:bg-blue-300 focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-xl text-sm px-4 py-2.5 focus:outline-none"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
