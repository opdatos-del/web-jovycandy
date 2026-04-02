import { ArrowRight, ArrowUpRight, Building2, MapPin } from 'lucide-react';

import { ModalShell } from './ModalShell';

type LocationModalProps = {
  open: boolean;
  onClose: () => void;
  onOpenContact: () => void;
};

export const LocationModal = ({ open, onClose, onOpenContact }: LocationModalProps) => (
  <ModalShell
    open={open}
    onClose={onClose}
    title="Ubicacion"
    subtitle="Visitas y coordinacion"
    size="xl"
    contentScrollable={false}
    contentClassName="px-4 py-4 md:px-6 md:py-5"
  >
    <div className="grid items-start gap-4 lg:grid-cols-[minmax(0,1.55fr)_17.5rem]">
      <section className="overflow-hidden rounded-[1.8rem] border border-[#eedcd3] bg-white shadow-[0_24px_64px_rgba(42,33,28,0.07)]">
        <div className="grid gap-4 border-b border-[#f1e1d7] px-4 py-4 md:px-5 md:py-5 xl:grid-cols-[minmax(0,1fr)_13rem] xl:items-start">
          <div>
            <span className="inline-flex rounded-full border border-[#ffe0a2] bg-[#fff5d4] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.35em] text-[#cf6f4f]">
              Mexico
            </span>

            <h3 className="mt-4 max-w-2xl text-2xl font-semibold leading-[0.95] tracking-[-0.05em] text-stone-900 md:text-[2.15rem]">
              Coordinamos visitas comerciales y reuniones con cita previa.
            </h3>

            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone-600 md:text-[0.96rem]">
              Esta es la ubicacion de Procesadora De Alimentos Cale, S.A. De C.V. para referencia comercial y coordinacion de visitas.
            </p>
          </div>

          <div className="grid gap-3">
            <div className="rounded-[1.25rem] border border-[#ffe0a2] bg-[#fff8e6] p-3.5">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#cf6f4f]">Referencia</p>
              <p className="mt-2 text-sm font-semibold text-stone-900">Tlaquepaque, Jalisco</p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">Punto de referencia comercial de la planta.</p>
            </div>

            <div className="rounded-[1.25rem] border border-[#cdebe7] bg-[#e8fbf7] p-3.5">
              <p className="text-[10px] uppercase tracking-[0.35em] text-[#009f98]">Coordinacion</p>
              <p className="mt-2 text-sm font-semibold text-stone-900">Visitas con cita</p>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">Te guiamos por el canal correcto antes de programar.</p>
            </div>
          </div>
        </div>

        <div className="p-2.5 md:p-3">
          <div className="overflow-hidden rounded-[1.45rem] border border-[#ead8cf] bg-[#fffaf7] p-2 shadow-[0_12px_32px_rgba(42,33,28,0.06)]">
            <div className="overflow-hidden rounded-[1.1rem]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.509968206114!2d-103.3385265!3d20.5672215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f4d35d2caa443%3A0x66f965bdd0d653f!2sProcesadora%20De%20Alimentos%20Cale%2C%20S.A.%20De%20C.V.!5e0!3m2!1ses-419!2smx!4v1775055084684!5m2!1ses-419!2smx"
                width="800"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicacion de Procesadora De Alimentos Cale"
                className="h-[18rem] w-full sm:h-[20rem] md:h-[min(22rem,34vh)] xl:h-[min(24rem,38vh)]"
              />
            </div>
          </div>
        </div>
      </section>

      <aside className="flex h-full flex-col gap-4">
        <div className="rounded-[1.8rem] border border-[#eedcd3] bg-[#fffaf6] p-5">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-[1rem] bg-[#0f3daa] text-white">
              <Building2 size={20} />
            </span>

            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#cf6f4f]">Punto de referencia</p>
              <h4 className="mt-2 text-xl font-semibold tracking-[-0.04em] text-stone-900">
                Procesadora De Alimentos Cale, S.A. De C.V.
              </h4>
            </div>
          </div>

          <div className="mt-4 rounded-[1.35rem] border border-[#efe0d7] bg-white p-4">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 shrink-0 text-[#ff6a86]" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-stone-400">Direccion</p>
                <p className="mt-2 text-sm leading-relaxed text-stone-700">
                  Antigua Carretera a Chapala 6730, Juan de La Barrera, 45618 San Pedro Tlaquepaque, Jal.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[1.8rem] border border-[#eedcd3] bg-white p-5">
          <p className="text-[10px] uppercase tracking-[0.4em] text-stone-400">Proximo paso</p>
          <h4 className="mt-3 text-[1.7rem] font-semibold tracking-[-0.05em] text-stone-900">Agenda tu contacto.</h4>
          <p className="mt-2.5 text-sm leading-relaxed text-stone-600">
            Si quieres cotizar, pedir una visita o solicitar material comercial, te abrimos el formulario correcto.
          </p>

          <div className="mt-5 flex flex-col gap-3">
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0f3daa] px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition-transform hover:-translate-y-0.5"
            >
              Ir a contacto <ArrowRight size={16} />
            </button>

            <a
              href="https://www.google.com/maps?q=Procesadora+De+Alimentos+Cale,+S.A.+De+C.V."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cde1ff] bg-[#edf5ff] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#0f3daa] transition-colors hover:bg-[#e1efff]"
            >
              Abrir mapa <ArrowUpRight size={16} />
            </a>

            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center rounded-full border border-[#e7d7ce] px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-stone-700 transition-colors hover:border-[#ffb79d]"
            >
              Cerrar
            </button>
          </div>
        </div>
      </aside>
    </div>
  </ModalShell>
);
