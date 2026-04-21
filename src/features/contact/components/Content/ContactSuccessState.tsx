import type { ContactTopic } from '../../types/contact-modal.types';

type ContactSuccessStateProps = {
  topic: ContactTopic;
  onReset: () => void;
  onClose: () => void;
};

export const ContactSuccessState = ({ topic, onReset, onClose }: ContactSuccessStateProps) => (
  <div className="overflow-hidden rounded-[1.7rem] border border-[#edd8cf] bg-[#fffaf6]">
    <div className={`h-1.5 w-full bg-gradient-to-r ${topic.accentClassName}`} />

    <div className="contact-success-shell flex min-h-0 flex-col justify-between">
      <div className="contact-success-grid grid">
        <div>
          <p className="text-[10px] uppercase tracking-[0.24em] text-stone-400 sm:tracking-[0.4em]">{topic.eyebrow}</p>
          <h3 className="contact-topic-header-title mt-3 font-semibold tracking-[-0.05em] text-stone-900">{topic.title}</h3>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-600">{topic.successMessage}</p>
        </div>

        <div className="rounded-[1.35rem] border border-[#efe0d7] bg-white p-4">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#00a39d] sm:tracking-[0.35em]">Estado</p>
          <p className="mt-2 text-lg font-semibold tracking-[-0.03em] text-stone-900">Solicitud recibida</p>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">
            El siguiente paso sera responderte por el correo que capturaste en el formulario.
          </p>
        </div>
      </div>

      <div className="contact-success-actions flex flex-col">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex w-full items-center justify-center rounded-full border border-[#e9d5cb] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-stone-700 transition-colors hover:border-[#ffb79d] sm:w-auto sm:tracking-[0.24em]"
        >
          Nueva solicitud
        </button>
        <button
          type="button"
          onClick={onClose}
          className="inline-flex w-full items-center justify-center rounded-full bg-[#0f3daa] px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white transition-opacity hover:opacity-90 sm:w-auto sm:tracking-[0.24em]"
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
);
