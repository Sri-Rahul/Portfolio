import React from 'react';

interface SectionProps {
  title?: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({
  title,
  subtitle,
  children,
  className = '',
}) => {
  return (
    <section className={`py-12 w-full ${className}`}>
      {(title || subtitle) && (
        <div className="mb-10 text-center">
          {title && (
            <h2 className="text-[40px] font-bold leading-tight text-[#e4ded7] sm:text-[45px] md:text-[60px] lg:text-[80px]">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-[#e4ded7]/80">
              {subtitle}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
};

export default Section;