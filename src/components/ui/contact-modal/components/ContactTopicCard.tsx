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
      className={`group relative w-full overflow-hidden rounded-[1.6rem] border px-4 py-4 text-left transition-all ${
        isActive
          ? 'border-[#ffba9e] bg-white text-stone-900 shadow-[0_22px_60px_rgba(255,125,105,0.18)]'
          : 'border-[#edd9cf] bg-white/80 text-stone-700 hover:border-[#ffb69e] hover:bg-white'
      }`}
    >
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${topic.accentClassName} ${isActive ? 'opacity-100' : 'opacity-0 transition-opacity group-hover:opacity-70'}`} />

      <div className="flex items-center gap-3">
        <span
          className={`inline-flex h-10 w-10 items-center justify-center rounded-[1rem] ${
            isActive ? `bg-gradient-to-br ${topic.accentClassName} text-white` : 'bg-[#fff3ed] text-[#ff6b71]'
          }`}
        >
          <Icon size={18} />
        </span>
        <div>
          <p className={`text-[10px] uppercase tracking-[0.32em] ${isActive ? 'text-[#cf6f4f]' : 'text-stone-400'}`}>
            {topic.eyebrow}
          </p>
          <p className="mt-1 text-sm font-semibold uppercase tracking-[0.08em]">{topic.label}</p>
        </div>
      </div>
    </button>
  );
};
