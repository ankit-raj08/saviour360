const React = require("react");

const Icon = () =>
  React.createElement(
    "div",
    {
      style: {
        width: 32,
        height: 32,
        borderRadius: 8,
        background: "linear-gradient(135deg,#1A50A0,#2E6CC8)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
    React.createElement(
      "svg",
      { width: 18, height: 18, viewBox: "0 0 20 20", fill: "none" },
      React.createElement("circle", { cx: 10, cy: 10, r: 4.5, stroke: "white", strokeWidth: 1.4 }),
      React.createElement("circle", { cx: 10, cy: 10, r: 8.5, stroke: "rgba(255,255,255,0.35)", strokeWidth: 1 }),
      React.createElement("line", { x1: 10, y1: 1, x2: 10, y2: 19, stroke: "rgba(255,255,255,0.45)", strokeWidth: 1 }),
      React.createElement("line", { x1: 1, y1: 10, x2: 19, y2: 10, stroke: "rgba(255,255,255,0.45)", strokeWidth: 1 })
    )
  );

module.exports = Icon;
