import React from "react";
import { Logo_aikiam, Logo_kalama, Logo_kaloolsavm } from "@/assets/logos";
import HomeBtn from "@/components/ui/HomeBtn";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

function Index() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-around gap-10 min-h-[calc(100vh-100px)] py-10 mx-auto  w-full overflow-x-hidden overflow-y-auto">
      {/* Logo Aikiam */}
      <motion.div initial={{ opacity: 0, x: '50vw', scale: 1.5 }} // Start off-screen to the right, and slightly scaled up
        animate={{ opacity: 1, x: 0, scale: 1 }} // Animate to normal position and size
        transition={{
          delay: 0.6,
          duration: 0.6, // Adjust for faster/slower timing
          ease: 'easeOut',
          type: 'spring',
          stiffness: 500, // High stiffness gives a fast, snappy motion
          damping: 30, // Low damping helps create the fast "light speed" feel
        }} className="flex justify-center">
        <img src={Logo_aikiam} alt="Aikiam Logo" className="" />
      </motion.div>

      {/* Logo Kaloolsavm */}
      <motion.div
        initial={{ opacity: 0, x: '-50vw', scale: 1.5 }} // Start off-screen to the right, and slightly scaled up
        animate={{ opacity: 1, x: 0, scale: 1 }} // Animate to normal position and size
        transition={{
          delay: 0.6,
          duration: 0.6, // Adjust for faster/slower timing
          ease: 'easeOut',
          type: 'spring',
          stiffness: 500, // High stiffness gives a fast, snappy motion
          damping: 30, // Low damping helps create the fast "light speed" feel
        }}
        className="flex justify-center">
        <img src={Logo_kaloolsavm} alt="Kaloolsavm Logo" className="" />
      </motion.div>

      {/* Logo Kalama */}
      <div
        className="flex flex-1 flex-grow justify-center items-center"
      >
        <motion.img initial={{ opacity: 0, y: -100, scale: 0 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 0.2 }} src={Logo_kalama} alt="Kalama Logo" className="" />
      </div>

      <div className="flex flex-col justify-center gap-4 z-30 relative">
        <motion.div initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 1 }} className="max-w-[340px] mx-auto">
          <HomeBtn
            label="Score Board"
            className="w-full"
            onClick={() => navigate("scoreboard")}
          />
        </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, ease: "easeOut", delay: 1.3 }} className="flex justify-center  gap-4 w-full">
          <HomeBtn label="Result" onClick={() => navigate("Result")} />
          <HomeBtn label="Schedule" onClick={() => navigate("Schedule")} />
        </motion.div>
      </div>
    </div>
  );
}

export default Index;
