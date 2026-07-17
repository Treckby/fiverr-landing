import Glow from "./Glow";

export default function LaptopMockup() {
  return (
    <div className="relative mx-auto w-full max-w-3xl">

      <Glow className="-left-24 top-16 h-72 w-72" />
      <Glow className="-right-16 bottom-10 h-80 w-80 bg-cyan-400/20" />

      {/* Laptop */}
      <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-2xl">

        {/* Browser */}
        <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-6 py-4">
          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-400"></div>

          <div className="ml-6 h-8 flex-1 rounded-full bg-white"></div>
        </div>

        {/* Página */}
        <div className="bg-gradient-to-br from-slate-50 to-white p-8">

          {/* Hero */}
          <div className="space-y-5">

            <div className="h-5 w-36 rounded-full bg-blue-600"></div>

            <div className="space-y-3">
              <div className="h-8 w-full rounded-xl bg-slate-900"></div>

              <div className="h-8 w-3/4 rounded-xl bg-slate-900"></div>
            </div>

            <div className="space-y-2">
              <div className="h-4 rounded bg-slate-200"></div>
              <div className="h-4 w-5/6 rounded bg-slate-200"></div>
              <div className="h-4 w-2/3 rounded bg-slate-200"></div>
            </div>

            <div className="mt-8 flex gap-4">
              <div className="h-12 w-40 rounded-xl bg-blue-600"></div>

              <div className="h-12 w-32 rounded-xl border border-slate-300"></div>
            </div>

          </div>

          {/* Cards */}
          <div className="mt-12 grid grid-cols-3 gap-4">

            <div className="rounded-2xl bg-blue-100 p-5">
              <div className="mb-3 h-10 w-10 rounded-xl bg-blue-600"></div>

              <div className="h-4 rounded bg-blue-300"></div>

              <div className="mt-2 h-4 w-2/3 rounded bg-blue-300"></div>
            </div>

            <div className="rounded-2xl bg-slate-100 p-5">
              <div className="mb-3 h-10 w-10 rounded-xl bg-slate-800"></div>

              <div className="h-4 rounded bg-slate-300"></div>

              <div className="mt-2 h-4 w-2/3 rounded bg-slate-300"></div>
            </div>

            <div className="rounded-2xl bg-cyan-100 p-5">
              <div className="mb-3 h-10 w-10 rounded-xl bg-cyan-500"></div>

              <div className="h-4 rounded bg-cyan-300"></div>

              <div className="mt-2 h-4 w-2/3 rounded bg-cyan-300"></div>
            </div>

          </div>

        </div>

      </div>

      {/* Base Laptop */}
      <div className="mx-auto h-4 w-[104%] rounded-b-full bg-slate-300 shadow-lg"></div>

    </div>
  );
}