import { useEffect } from 'react';
import { footerPolicyLinks, footerSectionLinks } from '../config/navigation';
import { AppSocialLinks } from '../navigation/AppSocialLinks';
import { BRAND_LOGO_PATH, INSTAGRAM_POST_PATHS } from '@/shared/assets/publicAssets';
import { ScrollReveal } from '@/shared/ui/ScrollReveal';
import "../../styles/responsive/AppFooter.css";

type AppFooterProps = {
    onContactClick: () => void;
};

declare global {
    interface Window {
        FB?: {
            XFBML: {
                parse: () => void;
            };
        };
    }
}

export const AppFooter = ({ onContactClick }: AppFooterProps) => {
    useEffect(() => {
        const scriptId = 'facebook-jssdk';

        const loadFacebookSDK = () => {
            if (window.FB) {
                window.FB.XFBML.parse();
                return;
            }

            if (!document.getElementById(scriptId)) {
                const script = document.createElement('script');
                script.id = scriptId;
                script.async = true;
                script.defer = true;
                script.crossOrigin = 'anonymous';
                script.src =
                    'https://connect.facebook.net/es_LA/sdk.js#xfbml=1&version=v25.0';

                script.onload = () => {
                    if (window.FB) {
                        window.FB.XFBML.parse();
                    }
                };

                document.body.appendChild(script);
            }
        };

        loadFacebookSDK();
    }, []);

    return (
        <footer className="app-footer bg-gradient-to-b from-[#00afaa] to-[#008b7f] text-white">
            <div className="pb-2 sm:pb-4 lg:pb-6 xl:pb-8 2xl:pb-10">
                <div className="page-shell">
                    <ScrollReveal>
                        <div className="app-footer-logo-section flex justify-center">
                            <img
                                src={BRAND_LOGO_PATH}
                                alt="Jovy"
                                className="h-[clamp(4rem,12vw,5rem)] w-auto object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.1)] sm:h-[clamp(4.75rem,8vw,5.5rem)] lg:h-[clamp(5.4rem,6vw,6.25rem)] 2xl:h-[7rem]"
                                draggable={false}
                            />
                        </div>
                    </ScrollReveal>
                </div>
            </div>

            <div className="flex flex-col gap-4 pb-4 sm:gap-6 sm:pb-6 lg:gap-8 lg:pb-8 xl:pb-10">
                <div className="page-shell">
                    <ScrollReveal>
                        <nav className="app-footer-nav flex flex-wrap justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-10">
                            {footerSectionLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="app-footer-nav-link text-sm font-medium transition-colors hover:text-white/75 sm:text-base lg:text-lg"
                                >
                                    {link.label}
                                </a>
                            ))}

                            <button
                                type="button"
                                onClick={onContactClick}
                                className="app-footer-nav-link text-sm font-medium transition-colors hover:text-white/75 sm:text-base lg:text-lg"
                            >
                                Contacto
                            </button>
                        </nav>
                    </ScrollReveal>
                </div>
            </div>

            <div className="pb-6 sm:pb-8 lg:pb-10">
                <div className="page-shell">
                    <ScrollReveal>
                        <>
                            {/* Espacio de trabajo de Redes */}
                            <section className="social-feed-section">
                                <h2 className="social-title">SIGUENOS EN REDES</h2>

                                <div className="social-grid">
                                    {/* Tarjeta Instagram */}
                                    <div className="social-card instagram-card">
                                        <div className="social-card-header">
                                            <div className="social-avatar">
                                                <i className="fab fa-instagram"></i>
                                            </div>
                                            <div>
                                                <h3>Instagram</h3>
                                                <p>Últimas publicaciones</p>
                                            </div>
                                        </div>

                                        <div className="instagram-feed-wrap">
                                            <div className="instagram-feed-inner">
                                                <div className="instagram-profile-bar">
                                                    <div className="instagram-profile-left">
                                                        <div className="instagram-profile-photo">
                                                            <img src={BRAND_LOGO_PATH} alt="Instagram Jovy" />
                                                        </div>

                                                        <div className="instagram-profile-info">
                                                            <h4>@jovymx</h4>
                                                            <span>Jovy Candy</span>
                                                        </div>
                                                    </div>

                                                    <a
                                                        href="https://www.instagram.com/jovymx/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="instagram-follow-btn"
                                                    >
                                                        Seguir
                                                    </a>
                                                </div>

                                                <div className="instagram-grid">
                                                    <a
                                                        href="https://www.instagram.com/jovymx/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="instagram-post"
                                                    >
                                                        <img src={INSTAGRAM_POST_PATHS[0]} alt="Publicación 1" />
                                                    </a>

                                                    <a
                                                        href="https://www.instagram.com/jovymx/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="instagram-post"
                                                    >
                                                        <img src={INSTAGRAM_POST_PATHS[1]} alt="Publicación 2" />
                                                    </a>

                                                    <a
                                                        href="https://www.instagram.com/jovymx/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="instagram-post"
                                                    >
                                                        <img src={INSTAGRAM_POST_PATHS[2]} alt="Publicación 3" />
                                                    </a>

                                                    <a
                                                        href="https://www.instagram.com/jovymx/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="instagram-post"
                                                    >
                                                        <img src={INSTAGRAM_POST_PATHS[3]} alt="Publicación 4" />
                                                    </a>

                                                    <a
                                                        href="https://www.instagram.com/jovymx/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="instagram-post"
                                                    >
                                                        <img src={INSTAGRAM_POST_PATHS[4]} alt="Publicación 5" />
                                                    </a>

                                                    <a
                                                        href="https://www.instagram.com/jovymx/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="instagram-post"
                                                    >
                                                        <img src={INSTAGRAM_POST_PATHS[5]} alt="Publicación 6" />
                                                    </a>
                                                </div>

                                                <div className="instagram-footer-link">
                                                    <a
                                                        href="https://www.instagram.com/jovymx/"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        Ver perfil completo
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Tarjeta Facebook */}
                                    <div className="social-card facebook-card">
                                        <div className="social-card-header">
                                            <div className="social-avatar">
                                                <i className="fab fa-facebook-f"></i>
                                            </div>
                                            <div>
                                                <h3>Facebook</h3>
                                                <p>Últimas actualizaciones</p>
                                            </div>
                                        </div>

                                        <div className="facebook-feed-wrap">
                                            <div className="facebook-feed-inner">
                                                <div id="fb-root"></div>

                                                <div
                                                    className="fb-page"
                                                    data-href="https://www.facebook.com/jovymx"
                                                    data-tabs="timeline"
                                                    data-width="500"
                                                    data-height="520"
                                                    data-small-header="false"
                                                    data-adapt-container-width="true"
                                                    data-hide-cover="false"
                                                    data-show-facepile="false"
                                                >
                                                    <blockquote
                                                        cite="https://www.facebook.com/jovymx"
                                                        className="fb-xfbml-parse-ignore"
                                                    >
                                                        <a href="https://www.facebook.com/jovymx">
                                                            Facebook
                                                        </a>
                                                    </blockquote>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Fin espacio de trabajo de Redes */}
                        </>
                    </ScrollReveal>
                </div>
            </div>

            <div className="pt-6 sm:pt-8 lg:pt-10">
                <div className="page-shell">
                    <ScrollReveal>
                        <div className="flex flex-col gap-4 sm:gap-6">
                            <div className="flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:justify-between sm:gap-4 sm:text-left lg:gap-6">
                                {footerPolicyLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        className="text-xs font-semibold uppercase tracking-widest transition-colors hover:text-white/75 sm:text-sm"
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </div>

                            <div className="pt-3 text-center sm:pt-4">
                                <p className="text-xs uppercase tracking-wide text-white/70 2xl:text-sm">
                                    &copy; 2026 Jovy. Todos los derechos reservados.
                                </p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </footer>
    );
};
