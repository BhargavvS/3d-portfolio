import { motion } from "framer-motion";

import { ComputersCanvas } from "./canvas";
import { useTypewriter } from "../hooks/use-typewriter";
import { styles } from "../styles";
import { cn } from "../utils/lib";

// Hero
export const Hero = () => {
  const typedRole = useTypewriter();
  return (
    <section className="relative w-full h-screen mx-auto touch-pan-y">
      <div
        className={cn(
          styles.paddingX,
          "absolute inset-0 top-30 max-w-7xl mx-auto flex flex-row items-start gap-5 z-10 pointer-events-auto md:pointer-events-none",
        )}
      >
        {/* Title */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* About Me */}
        <div className="pointer-events-auto">
          <h1 className={cn(styles.heroHeadText, "text-white")}>
            Hi, I&apos;m <span className="text-[#915eff]">Bhargav S</span>
          </h1>
          <p className={cn(styles.heroSubText, "mt-2 text-white-100")}>
            I&apos;m a{" "}
            <span className="text-[#915eff] min-w-[7ch] inline-block">
              {typedRole}
            </span>
            <span
              aria-hidden
              className="text-[#915eff] animate-blink font-normal"
            >
              |
            </span>{" "}
            Developer
          </p>
          <p className="mt-3 text-secondary text-[15px] max-w-xl leading-relaxed">
            I build scalable backends, APIs and cloud-native platforms.
          </p>
        </div>
      </div>

      {/* Computer Model */}
      <ComputersCanvas />

      {/* Scroll to about section */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-8.75 h-16 rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};
