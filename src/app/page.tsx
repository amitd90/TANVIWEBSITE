// use native <img> for SVG placeholders to avoid Next Image optimization issues

const instagramPhotos = [
  {
    src: "/instagram-1.svg",
    alt: "Smile transformation by Dr. Tanvi Ortho",
  },
  {
    src: "/instagram-2.svg",
    alt: "Modern orthodontic care at Dr. Tanvi Ortho",
  },
  {
    src: "/instagram-3.svg",
    alt: "Patient satisfaction at Dr. Tanvi Ortho",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen text-slate-900">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-10 lg:px-10">
        <header className="flex flex-col gap-6 rounded-3xl bg-white/70 backdrop-blur-sm p-8 shadow-xl ring-1 ring-violet-100 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl space-y-4">
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-violet-600">
                Dr Tanvi's Orthodontic and Dental Solutions
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                Smile with confidence at your trusted orthodontic clinic.
              </h1>
              <p className="text-lg leading-8 text-slate-600">
                Personalized orthodontic care for braces, clear aligners, and beautiful smile transformations in a warm, professional setting.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="https://wa.me/+919518369173"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:bg-violet-700"
                >
                  <svg className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.373 0 .5 4.873.5 11.5c0 2.03.53 4.01 1.53 5.77L0 24l7.1-2.14A11.93 11.93 0 0012 23.999c6.627 0 11.5-4.873 11.5-11.5 0-3.07-1.07-5.91-2.98-8.02zM12 21.5c-1.86 0-3.63-.5-5.17-1.39l-.37-.22-4.22 1.27 1.27-4.12-.24-.38A9.5 9.5 0 1112 21.5z" />
                    <path d="M17.35 14.65c-.27-.13-1.6-.79-1.85-.88-.24-.09-.42-.13-.6.14-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.13-1.15-.42-2.19-1.36-.81-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.41.12-.54.12-.12.27-.31.41-.46.14-.15.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.13-.6-1.44-.82-1.98-.22-.52-.44-.45-.6-.46-.15-.01-.33-.01-.51-.01-.18 0-.47.07-.72.34-.25.27-.95.92-.95 2.25 0 1.33.97 2.62 1.11 2.8.14.17 1.9 2.95 4.6 4.02 3.2 1.25 3.2.83 3.77.78.31-.03 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.27-.17-.55-.3z" />
                  </svg>
                  Chat on WhatsApp
                </a>
                <a
                  href="https://instagram.com/drtanvi.ortho?igshid=YTQwZjQ0NmI0OA=="
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  <svg className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.2c3.2 0 3.584.01 4.85.07 1.17.056 1.8.24 2.22.4.54.2.92.45 1.32.86.4.4.66.78.86 1.32.16.42.345 1.05.4 2.22.06 1.27.07 1.65.07 4.86s-.01 3.584-.07 4.85c-.056 1.17-.24 1.8-.4 2.22-.2.54-.45.92-.86 1.32-.4.4-.78.66-1.32.86-.42.16-1.05.345-2.22.4-1.27.06-1.65.07-4.86.07s-3.584-.01-4.85-.07c-1.17-.056-1.8-.24-2.22-.4-.54-.2-.92-.45-1.32-.86-.4-.4-.66-.78-.86-1.32-.16-.42-.345-1.05-.4-2.22C2.21 15.58 2.2 15.2 2.2 12s.01-3.584.07-4.85c.056-1.17.24-1.8.4-2.22.2-.54.45-.92.86-1.32.4-.4.78-.66 1.32-.86.42-.16 1.05-.345 2.22-.4C8.416 2.21 8.8 2.2 12 2.2zm0-2.2C8.73 0 8.332.012 7.052.07 5.782.128 4.98.308 4.28.57c-.73.27-1.35.62-1.97 1.23C1.6 2.66 1.26 3.28.99 4.01c-.262.7-.442 1.5-.5 2.77C.012 8.67 0 9.07 0 12c0 2.93.012 3.33.07 4.61.058 1.27.238 2.07.5 2.77.27.73.61 1.35 1.31 2.05.69.69 1.32 1.04 2.05 1.31.7.262 1.5.442 2.77.5C8.332 23.988 8.73 24 12 24c3.27 0 3.668-.012 4.95-.07 1.27-.058 2.07-.238 2.77-.5.73-.27 1.35-.62 2.05-1.31.69-.69 1.04-1.32 1.31-2.05.262-.7.442-1.5.5-2.77.058-1.28.07-1.68.07-4.95s-.012-3.668-.07-4.95c-.058-1.27-.238-2.07-.5-2.77-.27-.73-.62-1.35-1.31-2.05C20.33.62 19.71.27 18.98.01c-.7-.262-1.5-.442-2.77-.5C15.668.012 15.27 0 12 0z"/>
                    <path d="M12 5.838A6.162 6.162 0 1018.162 12 6.169 6.169 0 0012 5.838zm0 10.162A4 4 0 118 12a4 4 0 014 4zm6.406-11.845a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z"/>
                  </svg>
                  View Instagram
                </a>
              </div>
            </div>
            <div className="rounded-[2rem] bg-gradient-to-br from-violet-400 to-fuchsia-300 p-1 shadow-xl shadow-slate-300/60">
              <div className="overflow-hidden rounded-[1.75rem] bg-slate-950 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Smile care</p>
                    <h2 className="mt-4 text-2xl font-semibold">Book your consultation</h2>
                  </div>
                  <div className="flex items-center gap-3">
                    <img src="/images/face.jpg" alt="Dr. Tanvi profile" className="h-14 w-14 rounded-full object-cover ring-2 ring-white" />
                  </div>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-300">
                  Expert orthodontic guidance, support, and treatment plans tailored to your needs.
                </p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-3xl bg-white/10 p-4 ring-1 ring-violet-50 break-words">
                    <p className="text-sm text-slate-300">WhatsApp</p>
                    <p className="mt-2 text-lg font-semibold whitespace-normal break-words">+91 95183 69173</p>
                  </div>
                  <div className="rounded-3xl bg-white/10 p-4 ring-1 ring-violet-50 break-words">
                    <p className="text-sm text-slate-300">Instagram</p>
                    <p className="mt-2 text-lg font-semibold whitespace-normal truncate max-w-full">@drtanvi.ortho</p>
                  </div>
                </div>
                <a href="tel:+919518369173" className="mt-4 inline-flex w-max items-center justify-center rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/20">
                  Call +91 95183 69173
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1.5fr_0.5fr]">
          <div className="space-y-8 rounded-3xl bg-white/60 backdrop-blur-sm p-8 shadow-xl ring-1 ring-violet-50 sm:p-10">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-3xl bg-white/60 p-6 ring-1 ring-violet-50">
                <h3 className="text-xl font-semibold text-slate-950">Orthodontic treatments</h3>
                <p className="mt-3 text-slate-600">
                  Braces, clear aligners, and retainers designed to straighten teeth and improve bite.
                </p>
              </div>
              <div className="rounded-3xl bg-white/60 p-6 ring-1 ring-violet-50">
                <h3 className="text-xl font-semibold text-slate-950">Smile makeover</h3>
                <p className="mt-3 text-slate-600">
                  Beautiful, confident smiles with modern orthodontic solutions and caring support.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-slate-950">Why choose Dr. Tanvi Ortho?</h3>
                <p className="mt-3 text-slate-600 leading-8">
                  Experienced orthodontic care with a personalized treatment plan, patient comfort, and modern clinic amenities.
                </p>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                <li className="rounded-3xl bg-white/60 p-6 ring-1 ring-violet-50">
                  <p className="text-sm font-semibold text-violet-600">Personalized plans</p>
                  <p className="mt-2 text-slate-600">Individualized orthodontic treatment for every smile.</p>
                </li>
                <li className="rounded-3xl bg-white/60 p-6 ring-1 ring-violet-50">
                  <p className="text-sm font-semibold text-violet-600">Comfort first</p>
                  <p className="mt-2 text-slate-600">A friendly, calm clinic environment for your visit.</p>
                </li>
                <li className="rounded-3xl bg-white/60 p-6 ring-1 ring-violet-50">
                  <p className="text-sm font-semibold text-violet-600">Modern care</p>
                  <p className="mt-2 text-slate-600">Latest techniques for braces and aligners.</p>
                </li>
                <li className="rounded-3xl bg-white/60 p-6 ring-1 ring-violet-50">
                  <p className="text-sm font-semibold text-violet-600">Easy connect</p>
                  <p className="mt-2 text-slate-600">Reach us instantly on WhatsApp or Instagram.</p>
                </li>
              </ul>
            </div>
          </div>

          <aside className="space-y-6 rounded-3xl bg-white/60 backdrop-blur-sm p-8 shadow-xl ring-1 ring-violet-50 sm:p-10">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-600">Clinic details</p>
              <h2 className="text-2xl font-semibold text-slate-950">Book a consultation</h2>
            </div>
            <div className="space-y-4 rounded-3xl bg-white/60 p-6 ring-1 ring-violet-50">
              <p className="text-sm text-slate-500">Clinic</p>
              <h3 className="text-base font-semibold text-slate-900">Dr Tanvi's Orthodontic and Dental Solutions</h3>
              <address className="not-italic mt-2 text-sm text-slate-700">
                Shop no. 118, first floor, Adiamville, near Life Republic East Gate, opposite Cambridge International school, Gaikwad Nagar, Punawale, Pimpri-Chinchwad, Maharashtra 411033
              </address>
              <a
                href="https://maps.app.goo.gl/g8e41VVdS6AHKEq27"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-violet-600 hover:text-violet-800"
              >
                <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1112 6.5a2.5 2.5 0 010 5z" />
                </svg>
                Open Google Maps
              </a>
              <div className="mt-4 overflow-hidden rounded-2xl">
                <iframe
                  title="Clinic location"
                  src="https://www.google.com/maps?q=Shop+no+118+Adiamville+Punawale+Pimpri-Chinchwad+Maharashtra+411033&output=embed"
                  width="100%"
                  height="220"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full border-0"
                />
              </div>
            </div>
            <div className="space-y-4 rounded-3xl bg-white/60 p-6 ring-1 ring-violet-50">
              <p className="text-sm text-slate-500">Connect with us</p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://wa.me/+919518369173"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-violet-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
                >
                  <svg className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.373 0 .5 4.873.5 11.5c0 2.03.53 4.01 1.53 5.77L0 24l7.1-2.14A11.93 11.93 0 0012 23.999c6.627 0 11.5-4.873 11.5-11.5 0-3.07-1.07-5.91-2.98-8.02zM12 21.5c-1.86 0-3.63-.5-5.17-1.39l-.37-.22-4.22 1.27 1.27-4.12-.24-.38A9.5 9.5 0 1112 21.5z" />
                    <path d="M17.35 14.65c-.27-.13-1.6-.79-1.85-.88-.24-.09-.42-.13-.6.14-.18.27-.7.88-.86 1.06-.16.18-.31.2-.58.07-.27-.13-1.15-.42-2.19-1.36-.81-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.41.12-.54.12-.12.27-.31.41-.46.14-.15.18-.27.27-.45.09-.18.05-.34-.02-.47-.07-.13-.6-1.44-.82-1.98-.22-.52-.44-.45-.6-.46-.15-.01-.33-.01-.51-.01-.18 0-.47.07-.72.34-.25.27-.95.92-.95 2.25 0 1.33.97 2.62 1.11 2.8.14.17 1.9 2.95 4.6 4.02 3.2 1.25 3.2.83 3.77.78.31-.03 1.6-.65 1.83-1.28.23-.63.23-1.17.16-1.28-.07-.11-.27-.17-.55-.3z" />
                  </svg>
                  WhatsApp Chat
                </a>
                <a href="tel:+919518369173" className="inline-flex items-center justify-center rounded-full border border-violet-600 px-4 py-3 text-sm font-semibold text-violet-600 hover:bg-violet-50">
                  Call +91 95183 69173
                </a>
                <a
                  href="https://instagram.com/drtanvi.ortho?igshid=YTQwZjQ0NmI0OA=="
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  <svg className="h-5 w-5 mr-3" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 2.2c3.2 0 3.584.01 4.85.07 1.17.056 1.8.24 2.22.4.54.2.92.45 1.32.86.4.4.66.78.86 1.32.16.42.345 1.05.4 2.22.06 1.27.07 1.65.07 4.86s-.01 3.584-.07 4.85c-.056 1.17-.24 1.8-.4 2.22-.2.54-.45.92-.86 1.32-.4.4-.78.66-1.32.86-.42.16-1.05.345-2.22.4-1.27.06-1.65.07-4.86.07s-3.584-.01-4.85-.07c-1.17-.056-1.8-.24-2.22-.4-.54-.2-.92-.45-1.32-.86-.4-.4-.66-.78-.86-1.32-.16-.42-.345-1.05-.4-2.22C2.21 15.58 2.2 15.2 2.2 12s.01-3.584.07-4.85c.056-1.17.24-1.8.4-2.22.2-.54.45-.92.86-1.32.4-.4.78-.66 1.32-.86.42-.16 1.05-.345 2.22-.4C8.416 2.21 8.8 2.2 12 2.2zm0-2.2C8.73 0 8.332.012 7.052.07 5.782.128 4.98.308 4.28.57c-.73.27-1.35.62-1.97 1.23C1.6 2.66 1.26 3.28.99 4.01c-.262.7-.442 1.5-.5 2.77C.012 8.67 0 9.07 0 12c0 2.93.012 3.33.07 4.61.058 1.27.238 2.07.5 2.77.27.73.61 1.35 1.31 2.05.69.69 1.32 1.04 2.05 1.31.7.262 1.5.442 2.77.5C8.332 23.988 8.73 24 12 24c3.27 0 3.668-.012 4.95-.07 1.27-.058 2.07-.238 2.77-.5.73-.27 1.35-.62 2.05-1.31.69-.69 1.04-1.32 1.31-2.05.262-.7.442-1.5.5-2.77.058-1.28.07-1.68.07-4.95s-.012-3.668-.07-4.95c-.058-1.27-.238-2.07-.5-2.77-.27-.73-.62-1.35-1.31-2.05C20.33.62 19.71.27 18.98.01c-.7-.262-1.5-.442-2.77-.5C15.668.012 15.27 0 12 0z"/>
                    <path d="M12 5.838A6.162 6.162 0 1018.162 12 6.169 6.169 0 0012 5.838zm0 10.162A4 4 0 118 12a4 4 0 014 4zm6.406-11.845a1.44 1.44 0 11-1.44-1.44 1.44 1.44 0 011.44 1.44z"/>
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </aside>
        </section>

        <section className="mt-10 rounded-3xl bg-white/90 p-8 shadow-xl ring-1 ring-slate-200 sm:p-10">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-600">Instagram highlights</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">Latest clinic moments</h2>
            </div>
            <a
              href="https://instagram.com/drtanvi.ortho?igshid=YTQwZjQ0NmI0OA=="
              target="_blank"
              rel="noreferrer"
                className="text-sm font-semibold text-violet-600 transition hover:text-violet-800"
            >
              See full Instagram feed
            </a>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {instagramPhotos.map((photo) => (
              <div key={photo.src} className="overflow-hidden rounded-3xl bg-slate-100">
                <img src={photo.src} alt={photo.alt} className="h-60 w-full object-cover" />
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}