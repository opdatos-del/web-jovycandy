import { socialLinks } from '../config/navigation';

type AppSocialLinksProps = {
  className: string;
  containerClassName?: string;
};

export const AppSocialLinks = ({
  className,
  containerClassName = 'flex items-center gap-2',
}: AppSocialLinksProps) => (
  <div className={containerClassName}>
    {socialLinks.map(({ href, label, Icon }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={label}
        className={className}
      >
        <Icon size={16} strokeWidth={2.1} />
      </a>
    ))}
  </div>
);
