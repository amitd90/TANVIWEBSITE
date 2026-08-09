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
              <div className="flex items-center gap-4">
                <img src="/images/logo-transparent.png" alt="Clinic logo" className="h-12 w-12 rounded-md object-cover" />
                <div>
                  <p className="text-base sm:text-lg font-semibold uppercase tracking-[0.12em] text-violet-600">
                    Dr Tanvi's Orthodontic and Dental Solutions
                  </p>
                  <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
                    Smile with confidence at your trusted orthodontic clinic.
                  </h1>
                </div>
              </div>
              <p className="text-lg leading-8 text-slate-600">
                Personalized orthodontic care for braces, clear aligners, and beautiful smile transformations in a warm, professional setting.
              </p>
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
                <div className="mt-8 grid gap-3">
                  <div className="rounded-3xl bg-white/10 p-4 ring-1 ring-violet-50">
                    <a
                        href="https://wa.me/+919518369173"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:from-violet-700 hover:to-fuchsia-400"
                        >
                        <img src="/images/whatsapp%20Logo.png" alt="WhatsApp" className="h-5 w-5 mr-3 object-contain" />
                        Chat on WhatsApp
                    </a>
                  </div>
                  <div className="rounded-3xl bg-white/10 p-4 ring-1 ring-violet-50">
                    <a
                        href="https://instagram.com/drtanvi.ortho?igshid=YTQwZjQ0NmI0OA=="
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:from-violet-700 hover:to-fuchsia-400"
                        >
                        <img src="/images/instagram%20logo.jpg" alt="Instagram" className="h-5 w-5 mr-3 object-contain" />
                        @drtanvi.ortho
                    </a>
                  </div>
                </div>
                <a href="tel:+919518369173" className="mt-4 inline-flex w-max items-center justify-center rounded-full bg-white/10 px-5 py-2 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/20">
                  <img src="/images/phonecallLogo.jpg" alt="Phone call" className="h-4 w-4 mr-2 object-contain" />
                  Call +91 95183 69173
                </a>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-10">
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
                <h3 className="text-2xl font-semibold text-slate-950">Why choose us?</h3>
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

        </section>

        <section className="mt-10 rounded-3xl bg-white/60 backdrop-blur-sm p-8 shadow-xl ring-1 ring-violet-50 sm:p-10">
          <div className="space-y-3 mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-600">Services</p>
            <h2 className="text-2xl font-semibold text-slate-950">Dental Services</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white/60 p-5 ring-1 ring-violet-50">
              <h3 className="font-semibold text-slate-900">Clear Aligners</h3>
              <p className="mt-2 text-sm text-slate-600">Removable and custom-fitted aligners providing better oral hygiene. Effectiveness depends on 22+ hours daily wear time.</p>
            </div>
            <div className="rounded-2xl bg-white/60 p-5 ring-1 ring-violet-50">
              <h3 className="font-semibold text-slate-900">Metal and Ceramic Braces</h3>
              <p className="mt-2 text-sm text-slate-600">Fixed braces with wire-based tooth movement. Metal braces have silver metallic color; ceramic braces match tooth color.</p>
            </div>
            <div className="rounded-2xl bg-white/60 p-5 ring-1 ring-violet-50">
              <h3 className="font-semibold text-slate-900">Myofunctional Appliances</h3>
              <p className="mt-2 text-sm text-slate-600">Assists in jaw growth modification during growing age. Specialized treatment for dentofacial orthopedics.</p>
            </div>
            <div className="rounded-2xl bg-white/60 p-5 ring-1 ring-violet-50">
              <h3 className="font-semibold text-slate-900">Surgical Orthodontics</h3>
              <p className="mt-2 text-sm text-slate-600">For adults requiring surgery to improve jaw aesthetics and function. Our orthodontists coordinate pre and post-surgical care.</p>
            </div>
            <div className="rounded-2xl bg-white/60 p-5 ring-1 ring-violet-50">
              <h3 className="font-semibold text-slate-900">Jaw Growth Modulation</h3>
              <p className="mt-2 text-sm text-slate-600">Treatment during growing age for balanced occlusion, esthetics, form and function. Specialized dentofacial orthopedics care.</p>
            </div>
            <div className="rounded-2xl bg-white/60 p-5 ring-1 ring-violet-50">
              <h3 className="font-semibold text-slate-900">Composite Fillings</h3>
              <p className="mt-2 text-sm text-slate-600">Tooth-colored fillings for cavities. Matches tooth color and provides aesthetic protection against further decay.</p>
            </div>
            <div className="rounded-2xl bg-white/60 p-5 ring-1 ring-violet-50">
              <h3 className="font-semibold text-slate-900">Crown, Bridge and Veneers</h3>
              <p className="mt-2 text-sm text-slate-600">Dental crowns cap teeth, bridges replace missing teeth, and veneers enhance appearance. Custom-made for each patient.</p>
            </div>
            <div className="rounded-2xl bg-white/60 p-5 ring-1 ring-violet-50">
              <h3 className="font-semibold text-slate-900">Pediatric Dentistry</h3>
              <p className="mt-2 text-sm text-slate-600">Comprehensive dental care for children from birth through adolescence including fillings, extractions, and root canals.</p>
            </div>
            <div className="rounded-2xl bg-white/60 p-5 ring-1 ring-violet-50">
              <h3 className="font-semibold text-slate-900">Smile Designing</h3>
              <p className="mt-2 text-sm text-slate-600">Artistic dental procedure creating straighter, whiter and naturally beautiful smiles. Restores dental health and appearance.</p>
            </div>
            <div className="rounded-2xl bg-white/60 p-5 ring-1 ring-violet-50">
              <h3 className="font-semibold text-slate-900">Aesthetic Dentistry</h3>
              <p className="mt-2 text-sm text-slate-600">Improves color, shape, size, position and alignment of teeth, gums and jaw. Focuses on naturally-beautiful smile results.</p>
            </div>
            <div className="rounded-2xl bg-white/60 p-5 ring-1 ring-violet-50">
              <h3 className="font-semibold text-slate-900">Full Mouth Rehabilitation</h3>
              <p className="mt-2 text-sm text-slate-600">Combines esthetics with restorative dentistry to enhance oral health, function and desired appearance of teeth.</p>
            </div>
            <div className="rounded-2xl bg-white/60 p-5 ring-1 ring-violet-50">
              <h3 className="font-semibold text-slate-900">Dental X-ray</h3>
              <p className="mt-2 text-sm text-slate-600">Visualizes internal tooth structure and bone. Essential for diagnostic purposes and root canal or extraction procedures.</p>
            </div>
            <div className="rounded-2xl bg-white/60 p-5 ring-1 ring-violet-50">
              <h3 className="font-semibold text-slate-900">Teeth Cleaning and Whitening</h3>
              <p className="mt-2 text-sm text-slate-600">Professional cleaning improves oral health every 3-6 months. Whitening procedure improves shade and brightness cosmetically.</p>
            </div>
            <div className="rounded-2xl bg-white/60 p-5 ring-1 ring-violet-50">
              <h3 className="font-semibold text-slate-900">Root Canal Treatment</h3>
              <p className="mt-2 text-sm text-slate-600">Removes infected pulp from tooth interior, then cleans, disinfects and seals. Eliminates bacteria, relieves pain and saves tooth.</p>
            </div>
            <div className="rounded-2xl bg-white/60 p-5 ring-1 ring-violet-50">
              <h3 className="font-semibold text-slate-900">Oral Surgery and Extractions</h3>
              <p className="mt-2 text-sm text-slate-600">Painless tooth removal under local anesthesia. Wisdom teeth extractions and other oral surgical procedures performed with care.</p>
            </div>
            <div className="rounded-2xl bg-white/60 p-5 ring-1 ring-violet-50">
              <h3 className="font-semibold text-slate-900">Dentures and Implants</h3>
              <p className="mt-2 text-sm text-slate-600">Removable dentures and fixed implants replace missing teeth. Improves esthetics and function for confident smiles.</p>
            </div>
          </div>
        </section>

        <section className="mt-10 rounded-3xl bg-white/60 backdrop-blur-sm p-8 shadow-xl ring-1 ring-violet-50 sm:p-10">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-600">Clinic details</p>
            <h2 className="text-2xl font-semibold text-slate-950">Book a consultation</h2>
          </div>
          <div className="mt-8 space-y-4 rounded-3xl bg-white/60 p-6 ring-1 ring-violet-50">
            <p className="text-sm text-slate-500">Clinic</p>
            <h3 className="text-base font-semibold text-slate-900">
              <img src="/images/logo-transparent.png" alt="Clinic logo" className="inline-block h-6 w-6 mr-2 rounded-sm object-cover align-middle" />
              Dr Tanvi's Orthodontic and Dental Solutions
            </h3>
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
          </div>
          <div className="mt-6 space-y-4 rounded-3xl bg-white/60 p-6 ring-1 ring-violet-50">
            <p className="text-sm text-slate-500">Connect with us</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/+919518369173"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500 px-4 py-3 text-sm font-semibold text-white transition hover:from-violet-700 hover:to-fuchsia-400"
              >
                <img src="/images/whatsapp%20Logo.jpg" alt="WhatsApp" className="h-5 w-5 mr-3 object-contain" />
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
                <img src="/images/instagram%20logo.jpg" alt="Instagram" className="h-5 w-5 mr-3 object-contain" />
                Instagram
              </a>
            </div>
          </div>
        </section>

        <section className="mt-10 w-full rounded-3xl bg-white/90 p-6 shadow-xl ring-1 ring-slate-200 sm:p-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-violet-600">Find us</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-900">Clinic location</h2>
            </div>
            <a
              href="https://maps.app.goo.gl/wkABV5SnksFrKXnw7?g_st=aw"
              target="_blank"
              rel="noreferrer"
              className="text-sm font-semibold text-violet-600 hover:text-violet-800"
            >
              Open in Google Maps
            </a>
          </div>
          <div className="overflow-hidden rounded-2xl">
            <iframe
              title="Clinic location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.8768701580707!2d73.72489297465468!3d18.624607165989165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb96f088190b%3A0x5cb10690bdeab7ab!2sDr.%20Tanvi's%20Orthodontic%20%26%20Dental%20Solutions!5e0!3m2!1sen!2sus!4v1786283604913!5m2!1sen!2sus" 
              width="100%"
              height="360"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full border-0 h-96 sm:h-[420px]"
            />
          </div>
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