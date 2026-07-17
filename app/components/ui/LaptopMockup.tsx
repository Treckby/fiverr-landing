export default function LaptopMockup() {
  return (
    <div className="relative mx-auto w-full max-w-xl">

      {/* Glow */}
      <div className="absolute -inset-10 -z-10 rounded-full bg-blue-500/20 blur-3xl" />

      {/* Pantalla */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">

        {/* Barra */}
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-5 py-4">
          <span className="h-3 w-3 rounded-full bg-red-400"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
          <span className="h-3 w-3 rounded-full bg-green-400"></span>
        </div>

        {/* Landing */}
        <div className="space-y-6 p-8">

          <div className="h-6 w-40 rounded-full bg-blue-600"></div>

          <div className="space-y-3">
            <div className="h-4 w-full rounded bg-slate-200"></div>
            <div className="h-4 w-5/6 rounded bg-slate-200"></div>
            <div className="h-4 w-2/3 rounded bg-slate-200"></div>
          </div>

          <div className="grid grid-cols-3 gap-4">

            <div className="h-24 rounded-2xl bg-blue-100"></div>

            <div className="h-24 rounded-2xl bg-slate-100"></div>

            <div className="h-24 rounded-2xl bg-blue-100"></div>

          </div>

          <div className="h-12 rounded-xl bg-slate-900"></div>

        </div>

      </div>

      {/* Base laptop */}
      <div className="mx-auto h-4 w-[105%] rounded-b-full bg-slate-300"></div>

    </div>
  );
}