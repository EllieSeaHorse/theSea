
import Link from "next/link";

import Home from "@/pages";
export default function Nav({ children }) {

    return (
        <header className="relative w-full h-12 py-2 flex justify-start items-center  snap-stop">
            <div className="flex items-center w-full justify-between px-6 ">
                <Link href="/">

                    {/*<svg*/}
                    {/*    xmlns="http://www.w3.org/2000/svg"*/}
                    {/*    width="97"*/}
                    {/*    height="30"*/}
                    {/*    viewBox="0 0 97 30"*/}
                    {/*    className="fill-textColor-light dark:fill-textColor-dark h-6"*/}
                    {/*>*/}
                    {/*    <path d="M86.3873 0C80.9842 0 76.5486 4.2095 76.1733 9.51771H67.3474V10.9646H76.1055C75.7347 15.477 71.9502 19.0354 67.3474 19.0354V20.4823C71.9548 20.4823 75.7438 24.0407 76.1145 28.5531H67.3474C62.4958 28.5531 58.5531 24.6059 58.5531 19.7588V10.2411C58.5531 5.3896 62.5004 1.44688 67.3474 1.44688H76.8651V0H67.3474C61.7001 0 57.1062 4.59382 57.1062 10.2411V14.523C55.9578 12.5968 54.1944 11.0821 52.0919 10.2411C55.8719 8.73549 58.5531 5.03693 58.5531 0.723439V0H48.312C42.9088 0 38.4687 4.2095 38.098 9.51771H29.2766V10.9646H38.0437C37.6729 15.477 33.8839 19.0354 29.2766 19.0354V20.4823C33.8839 20.4823 37.6729 24.0407 38.0437 28.5531H29.2766C24.425 28.5531 20.4823 24.6059 20.4823 19.7588V10.2411H19.0354V19.7588C19.0354 24.6104 15.0882 28.5531 10.2411 28.5531H1.44687V19.7588V1.44688H10.2411C15.0927 1.44688 19.0354 5.39412 19.0354 10.2411H20.4823C20.4823 5.3896 24.4295 1.44688 29.2766 1.44688H38.7943V0H29.2766C24.9631 0 21.2645 2.68123 19.7588 6.46119C18.2532 2.68123 14.5546 0 10.2411 0H0V19.7588V30H10.2411C14.5546 30 18.2532 27.3188 19.7588 23.5388C21.2645 27.3188 24.9631 30 29.2766 30H48.312C52.6255 30 56.324 27.3142 57.8297 23.5298C59.3353 27.3142 63.0339 30 67.3474 30H77.5885V29.2766C77.5885 24.9631 74.9073 21.2645 71.1273 19.7588C74.9073 18.2532 77.5885 14.5546 77.5885 10.2411C77.5885 5.3896 81.5358 1.44688 86.3828 1.44688C91.2298 1.44688 95.1771 5.39412 95.1771 10.2411V19.7588C95.1771 24.6104 91.2298 28.5531 86.3828 28.5531C83.7242 28.5531 81.2374 27.3685 79.5599 25.3067C78.2894 23.7468 77.5885 21.7754 77.5885 19.7543H76.1417C76.1417 22.1055 76.9555 24.3979 78.4386 26.22C80.3918 28.6209 83.2901 29.9955 86.3828 29.9955C92.0301 29.9955 96.6239 25.4017 96.6239 19.7543V10.2366C96.6285 4.59382 92.0346 0 86.3873 0ZM40.2863 22.9239C40.2863 22.9239 40.2909 22.9239 40.2909 22.9194C40.2863 22.9239 40.2864 22.9239 40.2818 22.9284L40.2863 22.9239ZM48.312 28.5531H39.5448C39.7257 26.3828 40.7114 24.3301 42.3165 22.838C43.9487 21.3188 46.0784 20.4823 48.3075 20.4823V19.0354C45.9563 19.0354 43.7498 18.1221 42.0859 16.4582C40.4265 14.7988 39.5087 12.5878 39.5087 10.2366C39.5087 5.38508 43.4559 1.44235 48.3029 1.44235H57.0701C56.6993 5.95478 52.9103 9.51318 48.3029 9.51318V10.9601C53.1545 10.9601 57.0972 14.9073 57.0972 19.7543C57.1108 24.6104 53.1635 28.5531 48.312 28.5531Z"/>*/}
                    {/*</svg>*/}
                    <p className="text-white font-semibold font-['Montserrat'] uppercase">Sama Moayeri</p>
                    <p className="text-white text-xs font-normal font-['Montserrat']">Creative Director & Designer</p>
                </Link>
                <div className="text-white text-xs font-normal font-['Montserrat']">CONTACT</div>


                {children}

            </div>
        </header>
    );
}
