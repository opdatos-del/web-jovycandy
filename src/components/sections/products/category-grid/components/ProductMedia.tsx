import { motion } from 'motion/react';

type ProductMediaProps = {
  src: string;
  sampleImage?: string;
  alt: string;
  variant: 'primary' | 'secondary';
  mediaKey?: string;
};

export const ProductMedia = ({ src, sampleImage, alt, variant, mediaKey }: ProductMediaProps) => {
  if (variant === 'primary') {
    return (
      <motion.div
        key={mediaKey}
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="group relative w-full max-w-[240px] md:max-w-[320px]"
      >
        <img
          src={src}
          alt={alt}
          className={`w-full object-contain drop-shadow-xl transition-all duration-500 ${
            sampleImage ? 'opacity-100 group-hover:scale-[0.97] group-hover:opacity-0' : ''
          }`}
        />

        {sampleImage && (
          <img
            src={sampleImage}
            alt={`${alt} sample detail`}
            className="absolute inset-0 h-full w-full scale-[0.97] object-contain opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100"
          />
        )}
      </motion.div>
    );
  }

  return <img src={src} alt={alt} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />;
};
