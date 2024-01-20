// components/PageTransition.js
import { motion } from 'framer-motion';
import Link from "next/link";

const SmoothLink = ({ href, children }) => {
    return (

        <Link href={href} passHref>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0 }}
            >
                {children}
            </motion.div>
        </Link>
    );
};

export default SmoothLink;
