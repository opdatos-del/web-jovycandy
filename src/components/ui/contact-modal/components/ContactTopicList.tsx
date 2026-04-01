import { ContactTopicCard } from './ContactTopicCard';
import type { ContactTopic, ContactTopicId, ContactTopicSelectHandler } from '../types/contact-modal.types';

type ContactTopicListProps = {
  topics: ContactTopic[];
  activeTopicId: ContactTopicId;
  onTopicSelect: ContactTopicSelectHandler;
};

export const ContactTopicList = ({ topics, activeTopicId, onTopicSelect }: ContactTopicListProps) => (
  <aside className="space-y-3 lg:sticky lg:top-0 lg:self-start">
    {topics.map((topic) => (
      <ContactTopicCard
        key={topic.id}
        topic={topic}
        isActive={topic.id === activeTopicId}
        onSelect={onTopicSelect}
      />
    ))}
  </aside>
);
