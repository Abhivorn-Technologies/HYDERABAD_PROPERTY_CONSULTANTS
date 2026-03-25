import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "@/assets/logo.png";

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 1800);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ 
                        opacity: 0,
                        transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-primary overflow-hidden"
                >
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(207,158,61,0.08),transparent_70%)]" />
                    
                    <div className="relative flex flex-col items-center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.6, ease: "easeOut" }}
                            className="mb-8"
                        >
                            <img 
                                src={logo} 
                                alt="Hyderabad Property Consultants" 
                                className="h-24 md:h-32 w-auto drop-shadow-[0_0_15px_rgba(207,158,61,0.3)]" 
                            />
                        </motion.div>

                        {/* Progress Bar Container */}
                        <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden relative">
                            <motion.div
                                initial={{ x: "-100%" }}
                                animate={{ x: "0%" }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="absolute inset-0 bg-gradient-to-r from-secondary/40 via-secondary to-secondary/40"
                            />
                        </div>
                        
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="mt-4 text-secondary/60 text-[10px] uppercase tracking-[0.4em] font-medium"
                        >
                            Elevating Lifestyle
                        </motion.p>
                    </div>

                    {/* Decorative Rings */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 0.1, scale: 1.5 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute w-[500px] h-[500px] border border-secondary rounded-full"
                    />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
