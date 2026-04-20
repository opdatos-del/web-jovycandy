type SectionColorTransitionProps = {
  fromColor: string;
  toColor: string;
  heightClassName?: string;
  invert?: boolean;
};

export const SectionColorTransition = ({
  fromColor,
  toColor,
  heightClassName = 'h-16 md:h-20 lg:h-24',
  invert = false,
}: SectionColorTransitionProps) => (
  <section aria-hidden="true" className={`relative overflow-hidden ${heightClassName}`} style={{ backgroundColor: fromColor }}>
    <svg
      viewBox="0 0 1440 160"
      preserveAspectRatio="none"
      className={`absolute -inset-x-px h-[calc(100%+2px)] w-[calc(100%+2px)] ${invert ? '-top-px rotate-180' : '-bottom-px'}`}
      shapeRendering="geometricPrecision"
      role="presentation"
    >
      <path
        fill={toColor}
        d="M0 132C110 102 216 95 319 100C422 105 517 129 629 136C741 143 853 133 962 118C1071 103 1177 83 1286 81C1346 80 1397 85 1440 92V160H0Z"
      />
    </svg>
  </section>
);
