import type { ContactTopic } from '../types/contact-modal.types';

type ContactSuccessStateProps = {
  topic: ContactTopic;
  onReset: () => void;
  onClose: () => void;
};

export const ContactSuccessState = ({ topic, onReset, onClose }: ContactSuccessStateProps) => (
  <div className="overflow-hidden rounded-[1.7rem] border border-[#edd8cf] bg-[#fffaf6]">
    <div className={`h-1.5 w-full bg-gradient-to-r ${topic.accentClassName}`} />

    <div className="flex min-h-[28rem] flex-col justify-between gap-8 p-6">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_16rem] lg:items-start">
        <div>
          <p className="text-[10px] uppercase tracking-[0.4em] text-stone-400">{topic.eyebrow}</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-stone-900">{topic.title}</h3>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-600">{topic.successMessage}</p>
        </div>

        <div className="rounded-[1.35rem] border border-[#efe0d7] bg-white p-4">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#00a39d]">Estado</p>
          <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-stone-900">Solicitud recibida</p>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            El siguiente paso sera responderte por el correo que capturaste en el formulario.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center justify-center rounded-full border border-[#e9d5cb] px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-stone-700 transition-colors hover:border-[#ffb79d]"
        >
          Nueva solicitud
        </button>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex items-center justify-center rounded-full bg-[#0f3daa] px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition-opacity hover:opacity-90"
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
);
