


// pages/_app.js
import { motion } from 'framer-motion';
import '../styles/globals.css';
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import LoadingVisual from "@/components/Transition/LoadingVisual";

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleComplete = () => setLoading(false);
        const handleError = () => setLoading(false);

        router.events.on("routeChangeStart", handleStart);
        router.events.on("routeChangeComplete", handleComplete);
        router.events.on("routeChangeError", handleError);

        return () => {
            router.events.off("routeChangeStart", handleStart);
            router.events.off("routeChangeComplete", handleComplete);
            router.events.off("routeChangeError", handleError);
        };
    }, [router.events]);

    return (
        <>
            {loading ? <LoadingVisual /> : <Component {...pageProps} />}
        </>
    );

}

export default MyApp;

// // pages/_app.js
// import { motion } from 'framer-motion';
// import '../styles/globals.css';
// import { useRouter } from "next/router";
// import { useState, useEffect } from "react";
//
// function MyApp({ Component, pageProps }) {
//     const router = useRouter();
//     const [loading, setLoading] = useState(false);
//
//     useEffect(() => {
//         router.events.on("routeChangeError", (e) => setLoading(false));
//         router.events.on("routeChangeStart", (e) => setLoading(false));
//         router.events.on("routeChangeComplete", (e) => setLoading(true));
//
//         return () => {
//             router.events.off("routeChangeError", (e) => setLoading(false));
//             router.events.off("routeChangeStart", (e) => setLoading(false));
//             router.events.off("routeChangeComplete", (e) => setLoading(true));
//         };
//     }, [router.events]);
//
//     // return <>{loading ? "loading..." :
//     //
//     //     <motion.div>
//     //     <Component {...pageProps} />
//     //     </motion.div>
//     // }
//     // </>;
//     //
//     // return (
//     //   <motion.div>
//     //     <Component {...pageProps} />
//     //   </motion.div>
//
//     return <>{loading ? "loading..." : <Component {...pageProps} />}</>;
// }
//
// export default MyApp;
