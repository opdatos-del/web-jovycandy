import { motion } from 'motion/react';

type AppFinalCtaProps = {
  onContactClick: () => void;
};

export const AppFinalCta = ({ onContactClick }: AppFinalCtaProps) => (
  <section className="app-final-cta bg-[#fff3c7]">
    <div className="page-shell flex flex-col items-center justify-center">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="app-final-cta-title max-w-4xl text-center font-light tracking-tighter text-stone-900"
      >
        El sabor tambien puede ser diseno.
      </motion.h2>
      <motion.button
        type="button"
        onClick={onContactClick}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="app-final-cta-button inline-flex items-center justify-center border border-[#ff7f69] py-4 uppercase text-stone-900 transition-all duration-500 hover:bg-[#0f3daa] hover:text-white"
      >
        Contactar con el atelier
      </motion.button>
    </div>
  </section>
);
