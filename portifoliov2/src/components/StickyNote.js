import React from "react";

export const stickyNoteColors = {
  yellow: "yellow",
  pink: "pink",
  blue: "blue",
  green: "green",
  purple: "purple",
  orange: "orange",
}

const StickyNote = ({
  children,
  color = "yellow",
  rotate = 0,
  className = "",
}) => {
  // Color variants for sticky notes - muted pastel colors
  const colorClasses = {
    yellow: "bg-gradient-to-br from-yellow-50 to-yellow-100",
    pink: "bg-gradient-to-br from-pink-50 to-pink-100",
    blue: "bg-gradient-to-br from-blue-50 to-blue-100",
    green: "bg-gradient-to-br from-green-50 to-green-100",
    purple: "bg-gradient-to-br from-purple-50 to-purple-100",
    orange: "bg-gradient-to-br from-orange-50 to-orange-100",
  };

  return (
    <div
      className={`
        relative p-6 
        ${colorClasses[color] || colorClasses.yellow}
        shadow-lg
        transition-all duration-300
        hover:shadow-2xl hover:scale-105
        ${className}
      `}
      style={{
        transform: `rotate(${rotate}deg)`,
        minWidth: "200px",
        minHeight: "200px",
        boxShadow:
          "0 10px 20px rgba(0, 0, 0, 0.15), 0 6px 6px rgba(0, 0, 0, 0.1), 0 -1px 4px rgba(0, 0, 0, 0.02)",
      }}
    >
      {/* Top tape effect */}
      <div
        className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-20 h-6 bg-white opacity-40 rounded-sm"
        style={{
          boxShadow: "inset 0 1px 2px rgba(0, 0, 0, 0.1)",
        }}
      />

      {/* Slight paper texture overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 1px,
            rgba(0, 0, 0, 0.03) 1px,
            rgba(0, 0, 0, 0.03) 2px
          )`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default StickyNote;
