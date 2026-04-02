import { ContactTopicCard } from './ContactTopicCard';
import type { ContactTopic, ContactTopicId, ContactTopicSelectHandler } from '../types/contact-modal.types';

type ContactTopicListProps = {
  topics: ContactTopic[];
  activeTopicId: ContactTopicId;
  onTopicSelect: ContactTopicSelectHandler;
};

export const ContactTopicList = ({ topics, activeTopicId, onTopicSelect }: ContactTopicListProps) => (
  <aside className="rounded-[2rem] border border-[#f1deb5] bg-[#fff4d9] p-4 xl:sticky xl:top-0 xl:self-start">
    <div className="border-b border-[#f0dfb5] pb-4">
      <p className="text-[10px] uppercase tracking-[0.4em] text-[#cf6f4f]">Canales de contacto</p>
      <h3 className="mt-3 text-2xl font-semibold tracking-[-0.05em] text-stone-900">Elige el tema correcto.</h3>
      <p className="mt-3 text-sm leading-relaxed text-stone-600">
        Un solo formulario para ventas, soporte y material comercial, con el contexto correcto desde el inicio.
      </p>
    </div>

    <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
      {topics.map((topic) => (
        <ContactTopicCard
          key={topic.id}
          topic={topic}
          isActive={topic.id === activeTopicId}
          onSelect={onTopicSelect}
        />
      ))}
    </div>

    <div className="mt-4 rounded-[1.5rem] border border-[#f0e1d3] bg-white/85 p-4">
      <p className="text-[10px] uppercase tracking-[0.35em] text-[#00a39d]">Flujo directo</p>
      <p className="mt-2 text-sm leading-relaxed text-stone-600">
        Selecciona un area y completa una sola solicitud. Nosotros la dirigimos al equipo adecuado.
      </p>
    </div>
  </aside>
);
