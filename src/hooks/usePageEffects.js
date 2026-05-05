import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function usePageEffects(scope) {
  useGSAP(
    () => {
      // Small timeout to ensure the DOM has settled after Framer Motion transitions
      const timer = setTimeout(() => {
        // Clear any existing triggers for this scope to prevent duplicates
        ScrollTrigger.getAll().forEach(t => {
          if (t.vars.trigger && scope.current?.contains(t.vars.trigger)) {
            t.kill();
          }
        });

        // Reveal items - optimized for performance
        const revealItems = gsap.utils.toArray(".reveal", scope.current);
        revealItems.forEach((item) => {
          const delay = parseFloat(item.dataset.delay) || 0;
          
          gsap.fromTo(
            item,
            { opacity: 0, y: 30, scale: 0.98 },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.2,
              delay: delay,
              ease: "expo.out",
              overwrite: "auto",
              scrollTrigger: {
                trigger: item,
                start: "top 92%",
                toggleActions: "play none none none",
                once: true, // Performance boost: stop tracking after reveal
              },
            }
          );
        });

        // Parallax effect - optimized for smoothness
        const parallaxItems = gsap.utils.toArray(".parallax", scope.current);
        parallaxItems.forEach((item) => {
          gsap.fromTo(
            item,
            { yPercent: -10 },
            {
              yPercent: 10,
              ease: "none",
              overwrite: "auto",
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: 1, // Reduced scrub for more immediate response
                fastScrollEnd: true,
                preventOverlaps: true,
              },
            }
          );
        });

        // Floating hero image animation
        const heroImages = gsap.utils.toArray(".hero-image", scope.current);
        if (heroImages.length > 0) {
          gsap.to(heroImages, {
            scale: 1.05,
            duration: 8,
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
            overwrite: "auto",
          });
        }

        ScrollTrigger.refresh();
      }, 50); // Reduced delay for faster interaction

      return () => {
        clearTimeout(timer);
        ScrollTrigger.getAll().forEach(t => t.kill());
      };
    },
    { scope, dependencies: [scope] }
  );
}
