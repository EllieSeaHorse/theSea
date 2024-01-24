// Loading.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import LoadingVisual from "@/components/Transition/LoadingVisual";

function Loading() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = (url) => (url !== router.asPath) && setLoading(true);
        const handleComplete = (url) => (url === router.asPath) && setTimeout(() => setLoading(false), 2000);

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, [router]);

    return LoadingVisual && <div>Loading...</div>;
}

export default Loading;
