"use client";
import { useState, useEffect, useRef, useId, cloneElement, ReactElement } from "react";

interface AnimatedProps {
  children: ReactElement;
  size?: number;
  fillColor?: string;
  hoverColor?: string;
  className?: string;
}

export default function Animatedicon({
  children,
  size = 30,
  fillColor = "#FF0000",
  className = "",
}: AnimatedProps) {
  const hiddenRef = useRef<HTMLDivElement>(null);
  const [ paths, setIconPaths ] = useState<string[]>([]);
  const [ viewBox, setViewBox ] = useState("0 0 24 24");
  const [ isHovered, setHovered ] = useState(false);

  const uid = useId().replace(/:/g, "");
  const maskId = `bx-mask-${uid}`;

  useEffect(() => {
    const container = hiddenRef.current;
    if (!container) return;

    function extractFromContainer() {
      const svg = container?.querySelector("svg");
      if (!svg) return false;

      const vb = svg.getAttribute("viewBox");
      if (vb) setViewBox(vb);

      const paths = Array.from(svg.querySelectorAll("path"))
        .map((p) => p.getAttribute("d") ?? "")
        .filter(Boolean);

      if (paths.length > 0) {
        setIconPaths(paths);
        return true;
      }
      return false;
    }

    if (extractFromContainer()) return;

    const observer = new MutationObserver(() => {
      if (extractFromContainer()) observer.disconnect();
    });

    observer.observe(container, { childList: true, subtree: true, attributes: true });
    return () => observer.disconnect();
  }, [ children ]);

  const [ , , vbW, vbH ] = viewBox.split(" ").map(Number);

  return (
    <div
      className={`inline-block cursor-pointer relative ${className}`}
      style={{ width: size, height: size }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div ref={hiddenRef} className="absolute invisible pointer-events-none" aria-hidden>
        { cloneElement(children as ReactElement<{ size?: number }>, { size }) }
      </div>

      { paths.length > 0 && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={ size }
          height={ size }
          viewBox={ viewBox }
        >
          <defs>
            <mask id={maskId}>
              <rect width={vbW} height={vbH} fill="black" />
              {paths.map((d, i) => (
                <path key={ i } fill="white" d={ d } />
              ))}
            </mask>
          </defs>

          {paths.map((d, i) => (
            <path
              key={ i }
              fill="currentColor"
              d={ d }
            />
          ))}

          <rect
            x="0" y="0"
            width={ vbW } height={ vbH }
            fill={ fillColor }
            mask={ `url(#${maskId})` }
            style={{
              clipPath: isHovered ? "circle(100% at 50% 50%)" : "circle(0% at 50% 50%)",
              transition: "clip-path 1s cubic-bezier(0.34, 1.56, 0.64, 1)",
            }}
          />
        </svg>
      ) }
    </div>
  );
}
