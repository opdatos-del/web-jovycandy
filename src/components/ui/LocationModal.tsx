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
    contentClassName="location-modal-body"
  >
    <div className="location-modal-grid grid items-start gap-6">
      <section className="overflow-hidden rounded-lg border border-stone-200 bg-stone-50">
        <div className="location-modal-intro grid border-b border-stone-100 p-6">
          <div>
            <h3 className="location-modal-title text-2xl font-semibold tracking-[-0.02em] text-stone-900">
              Coordinamos visitas comerciales y reuniones
            </h3>

            <p className="location-modal-description mt-3 max-w-3xl text-base leading-relaxed text-stone-600">
              Procesadora De Alimentos Cale, S.A. De C.V. abre sus puertas bajo coordinación previa. Contáctanos para preparar tu visita.
            </p>
          </div>
        </div>

        <div className="location-modal-frame">
          <div className="overflow-hidden rounded-lg p-4">
            <div className="overflow-hidden rounded-lg border border-stone-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.509968206114!2d-103.3385265!3d20.5672215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842f4d35d2caa443%3A0x66f965bdd0d653f!2sProcesadora%20De%20Alimentos%20Cale%2C%20S.A.%20De%20C.V.!5e0!3m2!1ses-419!2smx!4v1775055084684!5m2!1ses-419!2smx"
                width="800"
                height="600"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa de ubicación de Procesadora De Alimentos Cale"
                className="location-modal-map w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <aside className="location-modal-aside grid gap-4">
        <div className="rounded-lg border border-stone-200 bg-white p-6">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600">
              <Building2 size={20} />
            </span>

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">Datos de ubicación</p>
              <h4 className="mt-2 text-lg font-semibold tracking-[-0.02em] text-stone-900">
                Procesadora De Alimentos Cale, S.A. De C.V.
              </h4>
            </div>
          </div>

          <div className="mt-4 flex gap-3 rounded-lg border border-stone-200 bg-stone-50 p-4">
            <MapPin size={18} className="mt-0.5 shrink-0 text-stone-400" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-stone-700">Dirección</p>
              <p className="mt-2 text-base leading-relaxed text-stone-700">
                Antigua Carretera a Chapala 6730, Juan de La Barrera, 45618 San Pedro Tlaquepaque, Jal.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-lg border border-stone-200 bg-white p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">Próximo paso</p>
          <h4 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-stone-900">Agenda tu contacto</h4>
          <p className="mt-2 text-base leading-relaxed text-stone-600">
            Para cotizar, solicitar una visita o pedir material comercial.
          </p>

          <div className="mt-5 flex flex-col gap-2">
            <button
              type="button"
              onClick={onOpenContact}
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Ir a contacto <ArrowRight size={16} />
            </button>

            <a
              href="https://www.google.com/maps?q=Procesadora+De+Alimentos+Cale,+S.A.+De+C.V."
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-blue-600 transition-all hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Abrir mapa <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </aside>
    </div>
  </ModalShell>
);
