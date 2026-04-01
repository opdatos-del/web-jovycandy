import { ArrowRight } from 'lucide-react';

import { ModalShell } from './ModalShell';

type LocationModalProps = {
  open: boolean;
  onClose: () => void;
  onOpenContact: () => void;
};

export const LocationModal = ({ open, onClose, onOpenContact }: LocationModalProps) => (
  <ModalShell open={open} onClose={onClose} title="Ubicacion" subtitle="Visitas y coordinacion" size="xl">
    <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1.6fr)_17rem]">
      <section className="rounded-[1.9rem] border border-[#eedcd3] bg-[#fffaf7] p-6 md:p-8">
        <span className="inline-flex rounded-full border border-[#e4e1dc] bg-white px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-stone-500">
          Mexico
        </span>

        <h3 className="mt-5 max-w-2xl text-3xl font-semibold leading-[0.95] tracking-[-0.05em] text-stone-900 md:text-4xl">
          Coordinamos visitas comerciales y reuniones con cita previa.
        </h3>

        <p className="mt-4 max-w-3xl text-sm leading-relaxed text-stone-600 md:text-base">
          Esta es la ubicacion de Procesadora De Alimentos Cale, S.A. De C.V. para referencia comercial y coordinacion de visitas.
        </p>

        <div className="mt-6 overflow-hidden rounded-[1.6rem] border border-[#ead8cf] bg-white p-2 shadow-[0_12px_32px_rgba(42,33,28,0.06)]">
          <div className="overflow-hidden rounded-[1.2rem]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.509968206114!2d-103.3385265!3d20.5672215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f4d35d2caa443%3A0x66f965bdd0d653f!2sProcesadora%20De%20Alimentos%20Cale%2C%20S.A.%20De%20C.V.!5e0!3m2!1ses-419!2smx!4v1775055084684!5m2!1ses-419!2smx"
              width="800"
              height="600"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicacion de Procesadora De Alimentos Cale"
              className="h-[24rem] w-full md:h-[30rem]"
            />
          </div>
        </div>
      </section>

      <aside className="flex flex-col justify-between rounded-[1.9rem] border border-[#eedcd3] bg-white p-6">
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-stone-400">Proximo paso</p>
          <h4 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-stone-900">Agenda tu contacto.</h4>
          <p className="mt-3 text-sm leading-relaxed text-stone-600">
            Si quieres cotizar, pedir una visita o solicitar material comercial, te abrimos el formulario correcto.
          </p>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          <button
            type="button"
            onClick={onOpenContact}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition-transform hover:-translate-y-0.5"
          >
            Ir a contacto <ArrowRight size={16} />
          </button>

          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center justify-center rounded-full border border-[#e7d7ce] px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-stone-700 transition-colors hover:border-[#ffb79d]"
          >
            Cerrar
          </button>
        </div>
      </aside>
    </div>
  </ModalShell>
);
