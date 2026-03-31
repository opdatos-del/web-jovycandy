export const AboutBackground = () => (
  <>
    <div className="pointer-events-none absolute left-1/2 top-14 h-[24rem] w-[24rem] -translate-x-1/2 rounded-full">
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,_rgba(41,37,36,0.08)_0%,_rgba(255,255,255,0)_72%)] blur-3xl" />
    </div>

    <div className="pointer-events-none absolute inset-x-6 top-0 hidden h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent lg:block" />
    <div className="pointer-events-none absolute inset-x-6 bottom-0 hidden h-px bg-gradient-to-r from-transparent via-stone-200 to-transparent lg:block" />
  </>
);
