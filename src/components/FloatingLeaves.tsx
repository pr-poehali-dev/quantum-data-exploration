import { useEffect, useState } from "react";

const LEAF_IMAGES = [
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/25fc0832-9201-4583-a290-ddc9bf5d4c9f.png",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/1cfc5dba-8011-4928-aa10-5eebd751c577.png",
  "https://cdn.poehali.dev/projects/15ec8a0b-bce5-45ef-9e7c-5faa77ada60e/bucket/d480b191-4553-451f-ba58-ef2332dd2ca3.png",
];

interface Leaf {
  id: number;
  image: string;
  size: number;
  startX: number;
  duration: number;
  delay: number;
  rotationDuration: number;
  rotationDirection: number;
  swingAmplitude: number;
  opacity: number;
}

function generateLeaf(id: number): Leaf {
  return {
    id,
    image: LEAF_IMAGES[id % LEAF_IMAGES.length],
    size: 40 + Math.random() * 60,
    startX: Math.random() * 100,
    duration: 12 + Math.random() * 14,
    delay: Math.random() * 20,
    rotationDuration: 3 + Math.random() * 5,
    rotationDirection: Math.random() > 0.5 ? 1 : -1,
    swingAmplitude: 60 + Math.random() * 100,
    opacity: 0.55 + Math.random() * 0.35,
  };
}

const TOTAL_LEAVES = 12;

export const FloatingLeaves = () => {
  const [leaves] = useState<Leaf[]>(() =>
    Array.from({ length: TOTAL_LEAVES }, (_, i) => generateLeaf(i))
  );

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 9999,
        overflow: "hidden",
      }}
    >
      <style>{`
        @keyframes leafFall {
          0% {
            top: -120px;
            opacity: 0;
          }
          5% {
            opacity: var(--leaf-opacity);
          }
          90% {
            opacity: var(--leaf-opacity);
          }
          100% {
            top: 110vh;
            opacity: 0;
          }
        }

        @keyframes leafSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(var(--leaf-rotation-end)); }
        }

        @keyframes leafSwing {
          0%   { margin-left: 0px; }
          25%  { margin-left: var(--leaf-swing); }
          50%  { margin-left: 0px; }
          75%  { margin-left: calc(-1 * var(--leaf-swing)); }
          100% { margin-left: 0px; }
        }

        .leaf-container {
          position: absolute;
          animation: leafFall var(--fall-duration) var(--fall-delay) infinite linear;
          opacity: 0;
        }

        .leaf-swing {
          animation: leafSwing var(--swing-duration) infinite ease-in-out;
        }

        .leaf-image {
          animation: leafSpin var(--rotation-duration) infinite linear;
          transform-origin: center center;
        }
      `}</style>

      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="leaf-container"
          style={{
            left: `${leaf.startX}%`,
            "--fall-duration": `${leaf.duration}s`,
            "--fall-delay": `${leaf.delay}s`,
            "--leaf-opacity": leaf.opacity,
            "--swing-duration": `${leaf.duration * 0.4}s`,
            "--leaf-swing": `${leaf.swingAmplitude}px`,
          } as React.CSSProperties}
        >
          <div className="leaf-swing">
            <img
              src={leaf.image}
              alt=""
              className="leaf-image"
              style={{
                width: `${leaf.size}px`,
                height: `${leaf.size}px`,
                objectFit: "contain",
                display: "block",
                "--rotation-duration": `${leaf.rotationDuration}s`,
                "--leaf-rotation-end": `${leaf.rotationDirection * 360}deg`,
              } as React.CSSProperties}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingLeaves;
