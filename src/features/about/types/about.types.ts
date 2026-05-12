import type { RefObject } from 'react';

export type AboutValue = {
  title: string;
  description: string;
};

export type AboutLayer = {
  id: string;
  kicker: string;
  title: string;
  body: string;
  detail: string;
  tone: string;
  iconType: 'target' | 'rocket' | 'heart' | 'sparkles';
  values?: AboutValue[];
};

export type AboutMetric = {
  label: string;
  value: string;
};

export type AboutContent = {
  eyebrow: string;
  titleLines: readonly [string, string];
  description: string;
};

export type AboutAnimationRefs = {
  sectionRef: RefObject<HTMLElement | null>;
  contentRef: RefObject<HTMLDivElement | null>;
  layersRef: RefObject<HTMLDivElement | null>;
};
