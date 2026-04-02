import { motion } from 'motion/react';

type AppFinalCtaProps = {
  onContactClick: () => void;
};

export const AppFinalCta = ({ onContactClick }: AppFinalCtaProps) => (
  <section className="bg-[#fff3c7] py-20 sm:py-24 lg:py-32">
    <div className="page-shell flex flex-col items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-4xl text-center text-3xl font-light tracking-tighter text-stone-900 sm:text-4xl md:text-5xl lg:text-6xl"
      >
        El sabor tambien puede ser diseno.
      </motion.h2>
      <motion.button
        type="button"
        onClick={onContactClick}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-10 inline-flex w-full items-center justify-center border border-[#ff7f69] px-8 py-4 text-xs uppercase tracking-[0.3em] text-stone-900 transition-all duration-500 hover:bg-[#0f3daa] hover:text-white sm:mt-12 sm:w-auto sm:px-12"
      >
        Contactar con el atelier
      </motion.button>
    </div>
  </section>
);
