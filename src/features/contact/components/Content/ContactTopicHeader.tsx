import type { ContactTopic } from '../../types/contact-modal.types';

type ContactTopicHeaderProps = {
  topic: ContactTopic;
};

export const ContactTopicHeader = ({ topic }: ContactTopicHeaderProps) => {
  const Icon = topic.icon;

  return (
    <div className="overflow-hidden rounded-[1.7rem] border border-[#edd8cf] bg-[#fffaf6]">
      <div className={`h-1.5 w-full bg-gradient-to-r ${topic.accentClassName}`} />

      <div className="contact-topic-header-inner flex flex-col">
        <div className="max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.24em] text-stone-400 sm:tracking-[0.4em]">{topic.eyebrow}</p>
          <h3 className="contact-topic-header-title mt-3 font-semibold tracking-[-0.05em] text-stone-900">{topic.title}</h3>
          <p className="contact-topic-header-description mt-3 leading-relaxed text-stone-600">{topic.description}</p>
        </div>

        <div className="flex items-center gap-3 md:pl-4">
          <span
            className={`contact-topic-icon inline-flex shrink-0 items-center justify-center rounded-[1.15rem] bg-gradient-to-br ${topic.accentClassName} text-white shadow-[0_18px_40px_rgba(255,127,105,0.2)]`}
          >
            <Icon size={22} />
          </span>

          <div className="hidden rounded-[1.15rem] border border-[#efe0d7] bg-white px-4 py-3 md:block">
            <p className="text-[10px] uppercase tracking-[0.35em] text-stone-400">Canal activo</p>
            <p className="mt-2 text-sm font-semibold text-stone-900">{topic.label}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
