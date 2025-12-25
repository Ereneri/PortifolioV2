import React, { useState } from "react";

const Sticker = ({ png, alt = "Sticker" }) => {
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 15;
    const rotateX = ((centerY - y) / centerY) * 15;

    setTransform({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div
      className="relative inline-block perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative transition-transform duration-300 ease-out hover:scale-110"
        style={{
          transform: `rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* Shimmer overlay */}
        <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
          <div className="shimmer absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 hover-parent:opacity-30"></div>
        </div>

        {/* Image with white stroke and shadow */}
        <img
          src={png}
          alt={alt}
          className="relative drop-shadow-md hover:drop-shadow-lg transition-all duration-300"
          style={{
            filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
            WebkitFilter:
              "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))",
            borderRadius: "0.5rem",
            backgroundColor: "white",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        .shimmer {
          animation: shimmer 2s infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        div:hover .shimmer {
          opacity: 0.3;
        }
      `}</style>
    </div>
  );
};

export default Sticker;
