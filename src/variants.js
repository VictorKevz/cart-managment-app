import { delay } from "framer-motion";

export const entry = {
    hidden: {
      y: "-100%",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "tween",
        
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  
  export const bounceIn = {
      hidden: {
        y: "-100%",
        opacity: 0,
      },
      visible: (id) => ({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 200,
          damping: 10,
          duration: 1,
          delay: id * 0.15,
        },
      }),
    };