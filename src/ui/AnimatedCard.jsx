import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import { keyframes } from "@emotion/react";

// Animation keyframes for the border effect
const borderAnimationRight = keyframes`
  0% { width: 0; height: 3px; top: 0; right: 100%; opacity: 1; }
  25% { width: 100%; height: 3px; top: 0; right: 0; opacity: 0.7; }
  100% { width: 100%; height: 3px; top: 0; right: 0; opacity: 0; }
`;

const borderAnimationDown = keyframes`
  0% { width: 3px; height: 0; top: 0; right: 0; opacity: 1; }
  25% { width: 3px; height: 100%; top: 0; right: 0; opacity: 0.7; }
  100% { width: 3px; height: 100%; top: 0; right: 0; opacity: 0; }
`;

const borderAnimationLeft = keyframes`
  0% { width: 0; height: 3px; bottom: 0; right: 0; opacity: 1; }
  25% { width: 100%; height: 3px; bottom: 0; right: 0; opacity: 0.7; }
  100% { width: 100%; height: 3px; bottom: 0; right: 0; opacity: 0; }
`;

const borderAnimationUp = keyframes`
  0% { width: 3px; height: 0; bottom: 0; left: 0; opacity: 1; }
  25% { width: 3px; height: 100%; bottom: 0; left: 0; opacity: 0.7; }
  100% { width: 3px; height: 100%; bottom: 0; left: 0; opacity: 0; }
`;

// Add shimmer effect for glass
const shimmerAnimation = keyframes`
  0% { background-position: -500px 0; }
  100% { background-position: 500px 0; }
`;

// Glass reflection effect
const glassReflection = keyframes`
  0% { opacity: 0.1; transform: translateY(100%) translateX(-100%); }
  50% { opacity: 0.3; }
  100% { opacity: 0.1; transform: translateY(-100%) translateX(100%); }
`;

// // Green holographic morphing animation
// const holographicMorph = keyframes`
//   0% {
//     transform: scale(1) rotate(0deg) skew(0deg);
//     filter: saturate(1) brightness(1) contrast(1);
//   }
//   25% {
//     transform: scale(1.15) rotate(90deg) skew(5deg);
//     filter: saturate(1.5) brightness(1.3) contrast(1.2);
//   }
//   50% {
//     transform: scale(1.25) rotate(180deg) skew(-5deg);
//     filter: saturate(2) brightness(1.5) contrast(1.4);
//   }
//   75% {
//     transform: scale(1.15) rotate(270deg) skew(5deg);
//     filter: saturate(1.5) brightness(1.3) contrast(1.2);
//   }
//   100% {
//     transform: scale(1) rotate(360deg) skew(0deg);
//     filter: saturate(1) brightness(1) contrast(1);
//   }
// `;

// // Green quantum particle effect
// const quantumParticles = keyframes`
//   0% {
//     background: radial-gradient(circle at 50% 50%, rgba(0, 255, 133, 0.8) 0%, transparent 50%);
//     transform: scale(1) rotate(0deg);
//   }
//   33% {
//     background: radial-gradient(circle at 30% 70%, rgba(0, 255, 133, 0.8) 0%, transparent 50%);
//     transform: scale(1.1) rotate(120deg);
//   }
//   66% {
//     background: radial-gradient(circle at 70% 30%, rgba(0, 255, 133, 0.8) 0%, transparent 50%);
//     transform: scale(1.05) rotate(240deg);
//   }
//   100% {
//     background: radial-gradient(circle at 50% 50%, rgba(0, 255, 133, 0.8) 0%, transparent 50%);
//     transform: scale(1) rotate(360deg);
//   }
// `;

// Styled component for the animated card
const AnimatedCard = styled(Box)(({ theme }) => ({
  position: "relative",
  background: "rgba(255, 255, 255, 0.95)",
  backdropFilter: "blur(15px)",
  border: "1px solid rgba(0, 0, 0, 0.1)",
  borderRadius: "2rem",
  padding: ".3rem",
  height: "100%",
  width: "100%",
  maxWidth: "350px",
  transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  overflow: "hidden",
  boxShadow: "0 10px 30px -15px rgba(0, 0, 0, 0.2), 0 1px 3px rgba(0, 0, 0, 0.1), 0 0 20px rgba(255, 255, 255, 0.3)",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "150%",
    background: "linear-gradient(130deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0) 100%)",
    transform: "rotate(-45deg) translateY(-50%)",
    pointerEvents: "none",
    zIndex: 1,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.03) 50%, rgba(0,0,0,0) 100%)",
    backgroundSize: "1000px 100%",
    animation: `${shimmerAnimation} 8s linear infinite`,
    pointerEvents: "none",
    zIndex: 1,
  },
  "&:hover": {
    transform: "translateY(-8px)",
    boxShadow: "0 20px 40px -20px rgba(0, 0, 0, 0.3), 0 1px 5px rgba(0, 0, 0, 0.2), 0 0 30px rgba(255, 255, 255, 0.5)",
    borderColor: "rgba(59, 130, 246, 0.2)",
    background: "rgba(255, 255, 255, 0.98)",
    "& .border-right": {
      animation: `${borderAnimationRight} 2.5s linear infinite`,
    },
    "& .border-down": {
      animation: `${borderAnimationDown} 2.5s linear infinite`,
      animationDelay: "1s",
    },
    "& .border-left": {
      animation: `${borderAnimationLeft} 2.5s linear infinite`,
      animationDelay: "1.5s",
    },
    "& .border-up": {
      animation: `${borderAnimationUp} 2.5s linear infinite`,
      animationDelay: "2s",
    },
    "& svg": {
      stroke: "#00FF85", // Turn the icon green on card hover
      
      color: "#00FF85", // Also set fill color for SVG icons
      
    },
    "& .glass-reflection": {
      animation: `${glassReflection} 2.5s ease-in-out infinite`,
    },
    "& .card-content": {
      transform: "translateZ(10px)",
    },
  },
  "& .border-right, & .border-down, & .border-left, & .border-up": {
    position: "absolute",
    animation: "none", // No animation by default
    zIndex: 2,
  },
  "& .border-right": {
    top: 0,
    right: "100%",
    height: 3,
    background: "linear-gradient(to right, rgba(0,0,0,0), #3B82F6, rgba(0,0,0,0))",
    boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
  },
  "& .border-down": {
    top: 0,
    right: 0,
    width: 3,
    background: "linear-gradient(to bottom, rgba(0,0,0,0), #3B82F6, rgba(0,0,0,0))",
    boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
  },
  "& .border-left": {
    bottom: 0,
    right: 0,
    height: 3,
    background: "linear-gradient(to left, rgba(0,0,0,0), #3B82F6, rgba(0,0,0,0))",
    boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
  },
  "& .border-up": {
    bottom: 0,
    left: 0,
    width: 3,
    background: "linear-gradient(to top, rgba(0,0,0,0), #3B82F6, rgba(0,0,0,0))",
    boxShadow: "0 0 10px rgba(59, 130, 246, 0.5)",
  },
  "& .glass-reflection": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "200%",
    height: "200%",
    background: "linear-gradient(45deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.05) 50%, rgba(0,0,0,0) 100%)",
    transformOrigin: "0 0",
    animation: "none",
    pointerEvents: "none",
    zIndex: 1,
  },
  "& .card-content": {
    position: "relative",
    zIndex: 5,
    transition: "transform 0.3s ease-out",
    color: "#1a1a1a", // Dark text color for white background
    "& h1, & h2, & h3, & h4, & h5, & h6": {
      color: "#1a1a1a", // Dark headings
    },
    "& p": {
      color: "#4a4a4a", // Medium dark text for paragraphs
    },
    "& .card-icon": {
      background: "rgba(255, 255, 255, 0.9)", // White icon background
      borderRadius: "1rem",
      padding: "0.75rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
      "&:hover": {
        background: "rgba(255, 255, 255, 1)", // Pure white on hover
      },


      // "& svg": {
      //   transition: "all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)", // Smooth futuristic transition
      //   transform: "scale(1) rotate(0deg) skew(0deg)", // Default state
      //   filter: "hue-rotate(0deg) saturate(1) brightness(1) contrast(1)", // No effects
      //   animation: "none", // No animation by default
      //   position: "relative", // For pseudo-elements
      //   "&:hover": {
      //     animation: `${holographicMorph} 2s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards`, // Holographic morphing - runs once
      //   },

      // },


    },
  },
  [theme.breakpoints.between("md", "lg")]: {
    padding: "1.25rem",
    maxWidth: "280px",
    "& h5": {
      fontSize: "1.1rem",
    },
    "& .card-icon": {
      width: "2.5rem",
      height: "2.5rem",
    },
  },
}));

const Card = ({ children }) => {
  return (
    <AnimatedCard style={{ perspective: "1000px" }}>
      {/* Border animation elements */}
      <div className="border-right"></div>
      <div className="border-down"></div>
      <div className="border-left"></div>
      <div className="border-up"></div>
      
      {/* Glass reflection effect */}
      <div className="glass-reflection"></div>
      
      {/* Wrap content in a div for 3D effect */}
      <div className="card-content">
        {children}
      </div>
    </AnimatedCard>
  );
};

export default Card;