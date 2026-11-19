/** Things the app does today (commission, ride PIN, SOS). No user counts until there are real ones. */
const facts = [
  { value: "80%", label: "of every fare goes to the driver" },
  { value: "4-digit", label: "ride PIN, so you get in the right car" },
  { value: "1 tap", label: "alerts our team if something goes wrong" },
];

export default function Facts() {
  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 rounded-[28px] bg-ink px-6 dark:bg-ink-raised py-12 text-white sm:px-10 lg:grid-cols-[1fr_2.4fr] lg:items-center lg:px-14 lg:py-14">
        <p className="text-xl font-semibold leading-snug sm:text-2xl">
          Fair on every ride,
          <br className="hidden lg:block" /> safe on every road.
        </p>
        <dl className="grid gap-8 sm:grid-cols-3">
          {facts.map((f) => (
            <div key={f.label} className="border-t border-white/15 pt-5">
              <dt className="sr-only">{f.label}</dt>
              <dd className="text-4xl font-bold tracking-tight text-lime sm:text-[2.75rem]">{f.value}</dd>
              <dd className="mt-2 text-sm text-white/65">{f.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
