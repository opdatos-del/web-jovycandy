import type { ContactTopic } from '../types/contact-modal.types';

type ContactTopicHeaderProps = {
  topic: ContactTopic;
};

export const ContactTopicHeader = ({ topic }: ContactTopicHeaderProps) => (
  <div className={`rounded-[1.5rem] bg-gradient-to-r ${topic.accentClassName} p-[1px]`}>
    <div className="rounded-[calc(1.5rem-1px)] bg-[#fff7f2] px-5 py-5">
      <p className="text-[10px] uppercase tracking-[0.4em] text-stone-400">{topic.eyebrow}</p>
      <h3 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-stone-900">{topic.title}</h3>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-600 md:text-base">{topic.description}</p>
    </div>
  </div>
);
