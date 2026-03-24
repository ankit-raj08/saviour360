const React = require("react");

const Logo = () =>
  React.createElement(
    "div",
    {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "4px 0",
      },
    },
    React.createElement(
      "div",
      {
        style: {
          width: 40,
          height: 40,
          borderRadius: 10,
          background: "linear-gradient(135deg,#1A50A0,#2E6CC8)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        },
      },
      React.createElement(
        "svg",
        { width: 22, height: 22, viewBox: "0 0 20 20", fill: "none" },
        React.createElement("circle", { cx: 10, cy: 10, r: 4.5, stroke: "white", strokeWidth: 1.4 }),
        React.createElement("circle", { cx: 10, cy: 10, r: 8.5, stroke: "rgba(255,255,255,0.35)", strokeWidth: 1 }),
        React.createElement("line", { x1: 10, y1: 1, x2: 10, y2: 19, stroke: "rgba(255,255,255,0.45)", strokeWidth: 1 }),
        React.createElement("line", { x1: 1, y1: 10, x2: 19, y2: 10, stroke: "rgba(255,255,255,0.45)", strokeWidth: 1 })
      )
    ),
    React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        {
          style: {
            fontFamily: "'Inter',sans-serif",
            fontSize: 17,
            fontWeight: 700,
            letterSpacing: 2,
            textTransform: "uppercase",
            color: "#FFFFFF",
            lineHeight: 1.1,
          },
        },
        "Saviour",
        React.createElement("span", { style: { color: "#5B8FE0" } }, "360")
      ),
      React.createElement(
        "div",
        {
          style: {
            fontFamily: "'Inter',sans-serif",
            fontSize: 9,
            fontWeight: 400,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.4)",
            marginTop: 2,
          },
        },
        "Content Management"
      )
    )
  );

module.exports = Logo;
