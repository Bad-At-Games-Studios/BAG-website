import { useEffect, useRef, useState } from "react";

import { count } from "../../../../data/counts";

import "./style/CountSectionResStyle.css";

const CountSection = () => {
  const data = count;

  const sectionRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || hasStarted) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.3,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted || !data?.length) return;

    const duration = 2000;
    const startTime = performance.now();

    let animationFrame;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;

      const currentProgress = Math.min(elapsed / duration, 1);

      const easedProgress = 1 - Math.pow(1 - currentProgress, 3);

      setProgress(easedProgress);

      if (currentProgress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [hasStarted, data]);

  return (
    <section className="count-section" ref={sectionRef}>
      {data?.map((each) => {
        const target = Number(each.countnumbers);

        const currentNumber = Math.floor(target * progress);

        return (
          <div className="count-cnt" key={each.id}>
            <h1 className="big-text">
              {currentNumber}

              <span>{each.countname === "years making games" ? "+" : ""}</span>
            </h1>

            <div className="title">
              <p>{each.countname}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default CountSection;
