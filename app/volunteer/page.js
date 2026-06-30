import VolunteerForm from "../../components/volunteerForm";

export const metadata = { title: "Volunteer — ASRS" };

export default function VolunteerPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-4 py-16">
        <h1 className="text-3xl font-black tracking-tight text-asrs-ink">
          Volunteer
        </h1>
        <p className="mt-4 text-lg text-asrs-ink/70">
          We are always looking for volunteers to help us! If you are interested, please fill out the form below.
        </p>

        <div className="mt-8 mx-auto max-w-2xl rounded-xl bg-asrs-ink p-8">
          <VolunteerForm />
        </div>
      </section>
    </>
  );
}