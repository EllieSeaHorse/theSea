
import Link from "next/link";

export default function Nav({ children }) {

    return (
        <header className="relative w-full h-20 flex  justify-start items-center  snap-stop">
            <div className="flex items-center w-full justify-between px-6 ">
                <Link href="/">
                    <p className="text-white font-semibold font-['Montserrat'] uppercase">Sama Moayeri</p>
                    <p className="text-white text-xs font-normal font-['Montserrat']">Creative Director & Designer</p>
                </Link>
                <div className="text-white text-xs font-normal font-['Montserrat']">CONTACT</div>
                {children}
            </div>
        </header>
    );
}
