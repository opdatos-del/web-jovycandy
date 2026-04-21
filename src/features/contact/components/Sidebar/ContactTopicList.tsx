import { ContactTopicButton } from './ContactTopicButton';
import type { ContactTopic, ContactTopicId, ContactTopicSelectHandler } from '../../types/contact-modal.types';

type ContactTopicListProps = {
  topics: ContactTopic[];
  activeTopicId: ContactTopicId;
  onTopicSelect: ContactTopicSelectHandler;
};

export const ContactTopicList = ({ topics, activeTopicId, onTopicSelect }: ContactTopicListProps) => (
  <aside className="contact-topic-list rounded-lg border border-stone-200 bg-white p-5">
    <div className="border-b border-stone-100 pb-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-stone-500">Selecciona un canal</p>
      <h3 className="contact-topic-list-title mt-3 text-xl font-semibold tracking-[-0.02em] text-stone-900">¿Cuál es tu consulta?</h3>
      <p className="mt-2 text-base leading-relaxed text-stone-600">
        Elige el tema para que tu solicitud llegue directamente al equipo indicado.
      </p>
    </div>

    <div className="contact-topic-list-grid mt-4 grid">
      {topics.map((topic) => (
        <ContactTopicButton
          key={topic.id}
          topic={topic}
          isActive={topic.id === activeTopicId}
          onSelect={onTopicSelect}
        />
      ))}
    </div>
  </aside>
);
