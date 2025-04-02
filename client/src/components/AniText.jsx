import React, { useEffect } from "react";

const AniText = () => {
  return (
    <div className="flex h-20 place-content-center bg-transparent">
      <BubbleText />
    </div>
  );
};

const BubbleText = () => {
  useEffect(() => {
    const spans = document.querySelectorAll(".hover-text span");

    spans.forEach((span) => {
      span.addEventListener("mouseenter", function () {
        this.style.fontWeight = "700";
        this.width = "100"
        this.style.backgroundColor = "transparent"
        this.style.filter = "blur(1px)"
        this.style.color = "white";

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "500";
          leftNeighbor.style.color = "rgb(0, 0, 0)";
        }
        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "500";
          rightNeighbor.style.color = "rgb(0, 0, 0)";
        }
      });

      span.addEventListener("mouseleave", function () {
        this.style.fontWeight = "400";
        this.style.backgroundColor = "transparent"
        this.style.filter = "blur()"
        this.style.color = "#b794f4";

        const leftNeighbor = this.previousElementSibling;
        const rightNeighbor = this.nextElementSibling;

        if (leftNeighbor) {
          leftNeighbor.style.fontWeight = "400";
          leftNeighbor.style.color = "#b794f4";
        }

        if (rightNeighbor) {
          rightNeighbor.style.fontWeight = "400";
          rightNeighbor.style.color = "#b794f4";
        }
      });
    });
  }, []);

  return (
    <div className="flex:col"> 
    <h2 className="hover-text text-center text-8xl font-thin text-transparent ">
      <Text>RNSIT Sports Club</Text>
    </h2>
   </div>
 
  );
};

const Text = ({ children, props }) => {
  return (
    <>
      {children.split("").map((child, idx) => (
        <span
          style={{
            transition: " 0.35s font-weight, 0.35s color",
            fontWeight: "400"
          }}
          key={idx}
        >
          {child}
        </span>
      ))}
    </>
  );
};

export default AniText;