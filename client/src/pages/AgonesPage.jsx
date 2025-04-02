"use client";
import React from "react";
// import OpenCards from '../../components/SportsCard'
import Navbar from "../components/Navbar";
import SportsCard from "../components/SportsCard";
import tt from "../assets/tt_color.png";
import basket from "../assets/bb_color.png";
import volley from "../assets/volley_color.png";
import { useRouter } from "next/navigation";
import Footer from "../components/Footer";
import football from "../assets/football_color.png";
import chess from "../assets/chess_color.png";
import cri from "../assets/cricket_color.png";
import al from "../assets/ATHLETICS_color.png";
import pl from "../assets/POWER_LIFTING_color.png";
import bad from "../assets/badminton_color.png";
import kab from "../assets/kabbadi_color.png";
import Kabbadi from "../assets/IMG_3549.JPG"
import Basketball from "../assets/IMG_3041.JPG"
import Football from "../assets/20240530_151319.jpg"
import Athletics from "../assets/DSC_2663.JPG"
import Vollyball from "../assets/IMG_4324(1).JPG"
function AgonesPage() {
  const router = useRouter();
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap">
        <SportsCard
          src={basket.src}
          img={Basketball.src}
          title="Basket Ball"
          additionalInfo="RNSIT boasts a dedicated basketball court, where students engage in competitive matches, refining their skills and fostering teamwork. The court serves as a hub for athleticism and camaraderie."
        />
        <SportsCard
          src={tt.src}
          title="Table Tennis"
          additionalInfo="Table tennis spins at RNSIT. Students rally with precision and speed, showcasing their agility and strategy on our tables, fostering a dynamic atmosphere of competition and camaraderie."
        />
        <SportsCard
          src={volley.src}
          img={Vollyball.src}
          title="Volley Ball"
          additionalInfo="At RNSIT, volleyball takes center stage. Players set, spike, and block, creating a dynamic atmosphere of teamwork and competition on our courts, fostering camaraderie and athletic excellence."
        />
        <SportsCard
          src={football.src}
          img={Football.src}
          title="FootBall"
          additionalInfo="At RNSIT, our vibrant football culture thrives. Talented teams compete fiercely on our grounds, battling for victory between the goal posts, fostering skill, teamwork, and sportsmanship."
        />
        <SportsCard
          src={cri.src}
          title="Cricket"
          additionalInfo="RNSIT's cricket passion shines on our grounds. Students showcase their cricketing prowess, fostering teamwork and sportsmanship while enjoying the thrill of the game."
        />
        <SportsCard
          src={chess.src}
          title="Chess"
          additionalInfo="At RNSIT, chess is more than a game—it's a mental exercise. Our students engage in strategic battles on the board, honing critical thinking and tactical skills."
        />
        <SportsCard
          src={al.src}
          img={Athletics.src}
          title="Athletics"
          additionalInfo="The RNSIT Athletics Event is a dynamic showcase of sportsmanship, featuring running, relays, shotput, long jump, and more. It unites athletes in spirited competition and celebrates their athletic prowess."
        />
        <SportsCard
          src={pl.src}
          title="Power Lifting"
          additionalInfo="Power-lifting thrives at RNSIT. Students lift, squat, and bench with determination, pushing their limits in our dedicated arena, building strength, resilience, and camaraderie."
        />
        <SportsCard
          src={bad.src}
          title="Badminton"
          additionalInfo="At RNSIT, we boast three state-of-the-art synthetic badminton courts. These courts provide an exceptional playing surface, enhancing gameplay and enabling students to refine their skills in a professional sporting environment."
        />
        <SportsCard
          src={kab.src}
          img={Kabbadi.src}
          title="Kabbadi"
          additionalInfo="Kabaddi ignites at RNSIT. Students engage in intense bouts of strategy and agility on our court, epitomizing teamwork and determination, fostering a spirited atmosphere of competition."
        />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default AgonesPage;
