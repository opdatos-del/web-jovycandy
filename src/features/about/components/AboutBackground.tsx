export const AboutBackground = () => (
  <>
    <div className="pointer-events-none absolute left-1/2 top-16 h-[26rem] w-[26rem] -translate-x-1/2 rounded-full">
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,_rgba(255,127,105,0.14)_0%,_rgba(255,255,255,0)_72%)] blur-3xl" />
    </div>
    <div className="pointer-events-none absolute right-[-6rem] top-1/3 h-[22rem] w-[22rem] rounded-full">
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,_rgba(15,61,170,0.08)_0%,_rgba(255,255,255,0)_72%)] blur-3xl" />
    </div>

    <div className="pointer-events-none absolute inset-x-6 top-0 hidden h-px bg-gradient-to-r from-transparent via-[#ffcf92] to-transparent lg:block" />
    <div className="pointer-events-none absolute inset-x-6 bottom-0 hidden h-px bg-gradient-to-r from-transparent via-[#7adfd9] to-transparent lg:block" />
  </>
);
