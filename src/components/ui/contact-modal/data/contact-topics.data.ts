import { Download, Globe2, Headset, Store } from 'lucide-react';

import type { ContactTopic, ContactTopicId } from '../types/contact-modal.types';

export const CONTACT_TOPICS: ContactTopic[] = [
  {
    id: 'national-sales',
    label: 'National Sales',
    eyebrow: 'Area comercial',
    title: 'Ventas nacionales',
    description: 'Distribucion, cadenas, autoservicio y oportunidades dentro de Mexico.',
    accentClassName: 'from-[#ff9076] to-[#ff5f9a]',
    icon: Store,
    submitLabel: 'Enviar solicitud',
    successMessage: 'Tu solicitud para ventas nacionales fue registrada correctamente.',
    messagePlaceholder: 'Cuentanos que canal, volumen o formato te interesa.',
  },
  {
    id: 'international-sales',
    label: 'International Sales',
    eyebrow: 'Global outreach',
    title: 'Ventas internacionales',
    description: 'Exportacion, private label y desarrollo comercial para nuevos mercados.',
    accentClassName: 'from-[#00bdb8] to-[#4c8fff]',
    icon: Globe2,
    submitLabel: 'Enviar solicitud',
    successMessage: 'Tu solicitud para ventas internacionales fue registrada correctamente.',
    messagePlaceholder: 'Comparte mercado objetivo, volumen estimado o requerimientos de exportacion.',
  },
  {
    id: 'customer-service',
    label: 'Customer Service',
    eyebrow: 'Atencion directa',
    title: 'Servicio al cliente',
    description: 'Seguimiento, soporte, dudas de producto y atencion postventa.',
    accentClassName: 'from-[#ffb25e] to-[#ff7a7a]',
    icon: Headset,
    submitLabel: 'Enviar mensaje',
    successMessage: 'Tu mensaje para servicio al cliente fue enviado correctamente.',
    messagePlaceholder: 'Describe brevemente tu duda, pedido o seguimiento.',
  },
  {
    id: 'catalogue',
    label: 'Download Full Catalogue Jovy',
    eyebrow: 'Material comercial',
    title: 'Solicitar catalogo completo',
    description: 'Te compartimos por correo el material comercial de la marca segun tu interes.',
    accentClassName: 'from-[#ff5f9a] to-[#ff8f63]',
    icon: Download,
    submitLabel: 'Solicitar catalogo',
    successMessage: 'Tu solicitud de catalogo completo fue registrada correctamente.',
    messagePlaceholder: 'Indica que linea, mercado o tipo de catalogo necesitas.',
  },
];

export const CONTACT_TOPICS_BY_ID = CONTACT_TOPICS.reduce<Record<ContactTopicId, ContactTopic>>(
  (topicsById, topic) => {
    topicsById[topic.id] = topic;
    return topicsById;
  },
  {} as Record<ContactTopicId, ContactTopic>
);
