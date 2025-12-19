import { useState } from "react";
import { createPortal } from "react-dom";

const ConfettiButton = ({ children, confettiImage, className = "" }) => {
  const [confetti, setConfetti] = useState([]);

  const handleConfettiClick = (e) => {
    const button = e.currentTarget.getBoundingClientRect();
    const newConfetti = [];

    // Use viewport coordinates (button.left and button.top are already viewport-relative)
    const viewportX = button.left + button.width / 2;
    const viewportY = button.top + button.height / 2;

    // Generate 15-20 confetti pieces
    for (let i = 0; i < 20; i++) {
      newConfetti.push({
        id: Date.now() + i + Math.random(),
        x: viewportX,
        y: viewportY,
        angle: Math.random() * 360,
        velocity: 1 + Math.random() * 2, // Reduced from 1-5 to 0.5-2
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 20,
      });
    }

    setConfetti([...confetti, ...newConfetti]);


    // Remove confetti after animation completes
    setTimeout(() => {
      setConfetti((prev) =>
        prev.filter((c) => !newConfetti.find((nc) => nc.id === c.id))
      );
    }, 2000);
  };

  return (
    <>
      <button onClick={handleConfettiClick} className={className}>
        {children}
      </button>

      {/* Confetti Container - rendered at body level using portal */}
      {createPortal(
        <div className="fixed inset-0 pointer-events-none z-50" style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}>
          {confetti.map((piece) => (
            <div
              key={piece.id}
              className="w-9 h-9 animate-confetti"
              style={{
                position: 'absolute',
                left: `${piece.x}px`,
                top: `${piece.y}px`,
                "--angle": `${piece.angle}deg`,
                "--velocity": piece.velocity,
                "--rotation": `${piece.rotation}deg`,
                "--rotation-speed": `${piece.rotationSpeed}deg`,
                animation: "confetti-burst 2s ease-out forwards",
              }}
            >
              <img
                src={confettiImage}
                alt="confetti"
                className="w-full h-full object-contain"
                style={{
                  transform: `rotate(var(--rotation))`,
                }}
              />
            </div>
          ))}
        </div>,
        document.body
      )}
    </>
  );
};

export default ConfettiButton;
