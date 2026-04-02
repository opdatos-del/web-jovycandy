import type { ContactTopic } from '../types/contact-modal.types';

type ContactTopicHeaderProps = {
  topic: ContactTopic;
};

export const ContactTopicHeader = ({ topic }: ContactTopicHeaderProps) => {
  const Icon = topic.icon;

  return (
    <div className="overflow-hidden rounded-[1.7rem] border border-[#edd8cf] bg-[#fffaf6]">
      <div className={`h-1.5 w-full bg-gradient-to-r ${topic.accentClassName}`} />

      <div className="flex flex-col gap-5 p-5 md:flex-row md:items-start md:justify-between md:p-6">
        <div className="max-w-2xl">
          <p className="text-[10px] uppercase tracking-[0.4em] text-stone-400">{topic.eyebrow}</p>
          <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-stone-900">{topic.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-stone-600 md:text-base">{topic.description}</p>
        </div>

        <div className="flex items-center gap-3 md:pl-4">
          <span
            className={`inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.15rem] bg-gradient-to-br ${topic.accentClassName} text-white shadow-[0_18px_40px_rgba(255,127,105,0.2)]`}
          >
            <Icon size={24} />
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
