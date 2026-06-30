import ContactForm from "../../components/contactForm";

export const metadata = { title: "Contact — ASRS" };

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-3xl font-black tracking-tight text-asrs-ink">
        Contact
      </h1>

      <p className="mt-4 max-w-2xl text-lg strong text-asrs-ink/70">
        <strong>Reach out to the ASRS team:</strong>
      </p>

      <p className="mt-2 max-w-2xl text-lg text-asrs-ink/70">
        Advance Student Resource Systems, Inc.
      </p>
      
      <p className="max-w-2xl text-lg text-asrs-ink/70">
        801 Woods Rd, Solvay, NY 13209​
      </p>    


      <p className="max-w-2xl text-lg text-asrs-ink/70">
        (315)-450-3027
      </p>    

      <p className=" max-w-2xl text-lg text-asrs-ink/70">
        contact@asrssuccess.org
      </p>

      <a href="https://www.facebook.com/asrsnonprofit" target="_blank" rel="noopener noreferrer">
        <button class="mt-4 bg-white hover:bg-asrs-ink hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Facebook
        </button>
      </a>

      <a href="https://www.instagram.com/asrs.success" target="_blank" rel="noopener noreferrer">
        <button class="ml-4 bg-white hover:bg-asrs-ink hover:text-white text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Instagram
        </button>
      </a>

      <div className="mt-12 mx-auto max-w-2xl rounded-xl bg-asrs-ink p-8">
        <ContactForm />
      </div>

    </section>
  );
}
