import React from "react";
import { motion, Variants } from "framer-motion";

const animations: Variants = {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 100 },
};

const AnimatedPage = ({ children }: any) => {
    return (
        <motion.div
            variants={animations}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedPage;
