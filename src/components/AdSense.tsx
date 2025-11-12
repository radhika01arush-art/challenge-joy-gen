import { useEffect, useRef } from 'react';

interface AdSenseProps {
  adSlot: string;
  adFormat?: 'auto' | 'fluid' | 'rectangle' | 'vertical' | 'horizontal';
  fullWidthResponsive?: boolean;
  className?: string;
}

export const AdSense = ({ 
  adSlot, 
  adFormat = 'auto',
  fullWidthResponsive = true,
  className = ''
}: AdSenseProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let timeout: number | undefined;
    const tryPush = () => {
      const width = containerRef.current?.offsetWidth ?? 0;
      if (width > 0) {
        try {
          // @ts-ignore
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
          console.error('AdSense error:', err);
        }
      } else {
        timeout = window.setTimeout(tryPush, 500);
      }
    };

    tryPush();
    return () => {
      if (timeout) window.clearTimeout(timeout);
    };
  }, []);

  return (
    <div ref={containerRef} className={`adsense-container ${className}`}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '100%' }}
        data-ad-client="ca-pub-9191244880954800"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive={fullWidthResponsive.toString()}
      />
    </div>
  );
};
