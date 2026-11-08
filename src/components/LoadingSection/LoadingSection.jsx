import { gsap } from "gsap";
import { useNavigation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

import "./LoadingSectionStyle.css";

const LoadingSection = () => {
  const [loadingCount, setLoadingCount] = useState(0);

  const sectionRef = useRef(null);

  const navigation = useNavigation();

  const pageLoadedRef = useRef(document.readyState === "complete");

  const navigationStateRef = useRef(navigation.state);

  // Keep the latest React Router navigation state.
  useEffect(() => {
    navigationStateRef.current = navigation.state;
  }, [navigation.state]);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const scrollY = window.scrollY;

    const originalStyles = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
      bodyPosition: body.style.position,
      bodyTop: body.style.top,
      bodyLeft: body.style.left,
      bodyRight: body.style.right,
      bodyWidth: body.style.width,
    };

    let disposed = false;
    let unlocked = false;
    let rafId = null;

    let progressTween = null;
    let completionTween = null;
    let exitTween = null;

    const progress = { value: 0 };

    const preventTouch = (event) => {
      event.preventDefault();
    };

    const unlockScroll = () => {
      if (unlocked) return;

      unlocked = true;

      document.removeEventListener("touchmove", preventTouch);

      html.style.overflow = originalStyles.htmlOverflow;
      body.style.overflow = originalStyles.bodyOverflow;
      body.style.position = originalStyles.bodyPosition;
      body.style.top = originalStyles.bodyTop;
      body.style.left = originalStyles.bodyLeft;
      body.style.right = originalStyles.bodyRight;
      body.style.width = originalStyles.bodyWidth;

      window.scrollTo(0, scrollY);
    };

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";

    document.addEventListener("touchmove", preventTouch, { passive: false });

    const handleLoad = () => {
      pageLoadedRef.current = true;

      window.removeEventListener("load", handleLoad);
    };

    if (document.readyState === "complete") {
      pageLoadedRef.current = true;
    } else {
      window.addEventListener("load", handleLoad);
    }

    const updateCount = () => {
      if (disposed) return;

      setLoadingCount(Math.floor(progress.value));
    };

    const ctx = gsap.context(() => {
      progressTween = gsap.to(progress, {
        value: 95,
        duration: 1,
        ease: "power1.out",
        onUpdate: updateCount,

        onComplete: () => {
          if (disposed) return;

          const waitForEverything = () => {
            if (disposed) return;

            const browserReady = pageLoadedRef.current;
            const routerReady = navigationStateRef.current === "idle";

            if (!browserReady || !routerReady) {
              rafId = requestAnimationFrame(waitForEverything);
              return;
            }

            rafId = null;

            completionTween = gsap.to(progress, {
              value: 100,
              duration: 0.5,
              ease: "power2.out",
              onUpdate: updateCount,

              onComplete: () => {
                if (disposed) return;

                setLoadingCount(100);
                if (!sectionRef.current) return;

                exitTween = gsap.to(sectionRef.current, {
                  yPercent: -140,
                  duration: 1.2,
                  ease: "power4.inOut",

                  onComplete: () => {
                    if (!disposed) {
                      unlockScroll();
                    }
                  },
                });
              },
            });
          };

          waitForEverything();
        },
      });
    }, sectionRef);

    return () => {
      disposed = true;

      window.removeEventListener("load", handleLoad);

      document.removeEventListener("touchmove", preventTouch);

      if (rafId !== null) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }

      progressTween?.kill();
      completionTween?.kill();
      exitTween?.kill();

      ctx.revert();

      unlockScroll();
    };
  }, []);

  return (
    <section ref={sectionRef} className="loading-section">
      <h1>{loadingCount}%</h1>
    </section>
  );
};

export default LoadingSection;
