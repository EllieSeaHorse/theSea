// pages/_app.js
import { motion } from 'framer-motion';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
      <motion.div>
        <Component {...pageProps} />
      </motion.div>
  );
}

export default MyApp;
