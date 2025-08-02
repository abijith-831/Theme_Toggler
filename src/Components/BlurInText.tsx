import { motion } from "framer-motion";

const BlurInText = ({ text = "Blur In Effect" }: { text?: string }) => {
    return (
        <h2 className="text-4xl md:text-6xl font-bold text-center">
            {text.split('').map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ 
                        opacity: 0,
                        filter: "blur(10px)"
                    }}
                    animate={{ 
                        opacity: 1,
                        filter: "blur(0px)"
                    }}
                    transition={{ 
                        delay: i * 0.05,
                        duration: 0.8,
                        ease: "easeOut"
                    }}
                    className="inline-block"
                >
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </h2>
    );
};

export default BlurInText;