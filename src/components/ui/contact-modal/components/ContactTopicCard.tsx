import type { ContactTopic, ContactTopicSelectHandler } from '../types/contact-modal.types';

type ContactTopicCardProps = {
  topic: ContactTopic;
  isActive: boolean;
  onSelect: ContactTopicSelectHandler;
};

export const ContactTopicCard = ({ topic, isActive, onSelect }: ContactTopicCardProps) => {
  const Icon = topic.icon;

  return (
    <button
      type="button"
      onClick={() => onSelect(topic.id)}
      className={`w-full rounded-[1.6rem] border px-4 py-4 text-left transition-all ${
        isActive
          ? 'border-transparent bg-[linear-gradient(135deg,#ff2a78_0%,#ff5d91_45%,#ff6d63_100%)] text-white shadow-[0_22px_60px_rgba(255,70,120,0.28)]'
          : 'border-[#edd9cf] bg-white/72 text-stone-700 hover:border-[#ffb69e]'
      }`}
    >
      <div className="flex items-center gap-3">
        <span
          className={`inline-flex h-10 w-10 items-center justify-center rounded-full ${
            isActive ? 'bg-white/18 text-white' : 'bg-[#fff3ed] text-[#ff6b71]'
          }`}
        >
          <Icon size={18} />
        </span>
        <div>
          <p className={`text-[10px] uppercase tracking-[0.32em] ${isActive ? 'text-white/70' : 'text-stone-400'}`}>
            {topic.eyebrow}
          </p>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.08em]">{topic.label}</p>
        </div>
      </div>
    </button>
  );
};
