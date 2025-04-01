import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const ShareButtons = ({ imageUrl, description, instagramUsername }) => {
    const router = useRouter();
    const pageUrl = `${process.env.NEXT_PUBLIC_BASE_URL}${router.asPath}`;

    return (
        <>
            <Head>
                <script async defer src="//assets.pinterest.com/js/pinit.js"></script>
                <script src="https://platform.linkedin.com/in.js" type="text/javascript">lang: en_US</script>
            </Head>
            <div className="flex space-x-2">
                {/* Pinterest Button */}
                <a
                    href={`https://www.pinterest.com/pin/create/button/?url=${pageUrl}&media=${imageUrl}&description=${description}`}
                    data-pin-do="buttonPin"
                    data-pin-config="above"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img
                        src="https://assets.pinterest.com/images/pidgets/pinit_fg_en_rect_red_20.png"
                        alt="Pinterest"
                        className="h-4 w-6 object-contain grayscale opacity-60"
                    />
                </a>

                {/* LinkedIn Button */}
                {/*<script type="IN/Share" data-url={pageUrl}></script>*/}

                {/* Instagram Button */}
                {/*<a*/}
                {/*    href={`https://www.instagram.com/${instagramUsername}`}*/}
                {/*    target="_blank"*/}
                {/*    rel="noopener noreferrer"*/}
                {/*>*/}
                {/*    <img*/}
                {/*        src="/instagram-icon.png"*/}
                {/*        alt="Instagram"*/}
                {/*        className="w-8 h-8"*/}
                {/*    />*/}
                {/*</a>*/}
            </div>
        </>
    );
};

export default ShareButtons;
