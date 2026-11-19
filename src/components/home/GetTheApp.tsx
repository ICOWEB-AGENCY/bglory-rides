import { Smartphone } from "lucide-react";
import WaitlistForm from "@/components/WaitlistForm";

/** The apps are not in the stores yet: plain platform cards, no store badge art and no links that lead nowhere. */
const apps = [
  { name: "Zyon", who: "For riders", text: "Book a ride, see the fare first, share your trip." },
  { name: "Zyon Driver", who: "For drivers", text: "Go online, take requests, follow the turns out loud." },
];

/** A store the app is not in yet: its name and "Coming soon", never a badge or a dead link. */
function ComingSoonBadge({ store }: { store: string }) {
  return (
    <div className="flex w-full items-center justify-between rounded-lg border border-dark-200 px-4 py-3 sm:w-auto sm:min-w-44 sm:gap-6 dark:border-dark-700">
      <span className="text-sm font-semibold text-dark-900 dark:text-white">{store}</span>
      <span className="text-xs font-medium text-dark-400">Coming soon</span>
    </div>
  );
}

export default function GetTheApp() {
  return (
    <section id="get-the-app" className="scroll-mt-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[28px] bg-mist px-6 py-12 sm:px-10 lg:px-14 lg:py-16 dark:bg-ink-raised">
        <h2 className="text-3xl font-bold tracking-tight text-dark-900 sm:text-4xl dark:text-white">Get the app</h2>
        <p className="mt-3 max-w-lg text-dark-500 dark:text-dark-300">Both apps are on their way to the App Store and Google Play.</p>
        <div className="mt-10 grid gap-3 lg:grid-cols-2">
          {apps.map((a) => (
            <div key={a.name} className="flex flex-col gap-6 rounded-2xl bg-white p-6 sm:p-8 dark:bg-ink">
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand text-lime">
                  <Smartphone className="h-6 w-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-primary-700 dark:text-lime">{a.who}</p>
                  <h3 className="text-xl font-semibold text-dark-900 dark:text-white">{a.name}</h3>
                  <p className="mt-1 text-sm text-dark-500 dark:text-dark-300">{a.text}</p>
                </div>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <ComingSoonBadge store="App Store" />
                <ComingSoonBadge store="Google Play" />
              </div>
            </div>
          ))}
        </div>
        <div id="notify" className="mt-10 scroll-mt-28 border-t border-dark-200 pt-8 dark:border-dark-800">
          <h3 className="text-lg font-semibold text-dark-900 dark:text-white">Get an email on launch day</h3>
          <p className="mt-1 text-sm text-dark-500 dark:text-dark-300">One email when the apps are live. Nothing else.</p>
          <WaitlistForm />
        </div>
      </div>
    </section>
  );
}
