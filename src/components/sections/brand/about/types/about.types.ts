import type { RefObject } from 'react';

export type AboutLayer = {
  id: string;
  kicker: string;
  title: string;
  body: string;
  detail: string;
  tone: string;
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

export type AboutScrollRefs = {
  sectionRef: RefObject<HTMLElement | null>;
  viewportRef: RefObject<HTMLDivElement | null>;
  trackRef: RefObject<HTMLDivElement | null>;
};
