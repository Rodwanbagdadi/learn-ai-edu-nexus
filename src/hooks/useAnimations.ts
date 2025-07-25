import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export const useGSAPAnimation = () => {
  const ref = useRef<HTMLElement>(null);

  const fadeInUp = (delay = 0) => {
    useEffect(() => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay,
            ease: 'power3.out',
          }
        );
      }
    }, [delay]);
  };

  const slideInLeft = (delay = 0) => {
    useEffect(() => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          {
            x: -100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            delay,
            ease: 'power3.out',
          }
        );
      }
    }, [delay]);
  };

  const slideInRight = (delay = 0) => {
    useEffect(() => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          {
            x: 100,
            opacity: 0,
          },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            delay,
            ease: 'power3.out',
          }
        );
      }
    }, [delay]);
  };

  const scaleIn = (delay = 0) => {
    useEffect(() => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          {
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1,
            delay,
            ease: 'back.out(1.7)',
          }
        );
      }
    }, [delay]);
  };

  const scrollReveal = () => {
    useEffect(() => {
      if (ref.current) {
        gsap.fromTo(
          ref.current,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: ref.current,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, []);
  };

  const floatingAnimation = () => {
    useEffect(() => {
      if (ref.current) {
        gsap.to(ref.current, {
          y: -20,
          duration: 2,
          ease: 'power2.inOut',
          yoyo: true,
          repeat: -1,
        });
      }
    }, []);
  };

  const rotateOnHover = () => {
    useEffect(() => {
      if (ref.current) {
        const element = ref.current;
        
        const handleMouseEnter = () => {
          gsap.to(element, {
            rotation: 360,
            duration: 0.8,
            ease: 'power2.out',
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            rotation: 0,
            duration: 0.8,
            ease: 'power2.out',
          });
        };

        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
          element.removeEventListener('mouseenter', handleMouseEnter);
          element.removeEventListener('mouseleave', handleMouseLeave);
        };
      }
    }, []);
  };

  return {
    ref,
    fadeInUp,
    slideInLeft,
    slideInRight,
    scaleIn,
    scrollReveal,
    floatingAnimation,
    rotateOnHover,
  };
};

export const useScrollAnimations = () => {
  useEffect(() => {
    // Parallax backgrounds
    gsap.utils.toArray('.parallax-bg').forEach((element: any) => {
      gsap.to(element, {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    });

    // Stagger animations for cards
    gsap.utils.toArray('.stagger-card').forEach((element: any, index) => {
      gsap.fromTo(
        element,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: index * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // Text reveal animations
    gsap.utils.toArray('.text-reveal').forEach((element: any) => {
      gsap.fromTo(
        element,
        {
          clipPath: 'inset(0 100% 0 0)',
        },
        {
          clipPath: 'inset(0 0% 0 0)',
          duration: 1.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
};

export const useHoverAnimations = () => {
  const createHoverEffect = (element: HTMLElement) => {
    const handleMouseEnter = () => {
      gsap.to(element, {
        scale: 1.05,
        y: -10,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  };

  return { createHoverEffect };
};
