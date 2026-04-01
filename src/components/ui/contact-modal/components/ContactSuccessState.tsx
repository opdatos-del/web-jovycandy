import type { ContactTopic } from '../types/contact-modal.types';

type ContactSuccessStateProps = {
  topic: ContactTopic;
  onReset: () => void;
  onClose: () => void;
};

export const ContactSuccessState = ({ topic, onReset, onClose }: ContactSuccessStateProps) => (
  <div className="flex min-h-[28rem] flex-col justify-between rounded-[1.5rem] bg-[linear-gradient(145deg,#fff1f2_0%,#fffaf5_100%)] p-6">
    <div>
      <p className="text-[10px] uppercase tracking-[0.4em] text-stone-400">{topic.eyebrow}</p>
      <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-stone-900">{topic.title}</h3>
      <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-600">{topic.successMessage}</p>
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
        className="inline-flex items-center justify-center rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-white transition-opacity hover:opacity-90"
      >
        Cerrar
      </button>
    </div>
  </div>
);
