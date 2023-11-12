import Link from "next/link";

export default function Nav({ children }) {
    return (
        <header className="sticky top-0 w-full h-20 flex justify-start items-center bg-dark-teal backdrop-blur-lg bg-opacity-80">
            <div className="flex items-center w-full justify-between px-6">
                <Link href="/">
                    <div className="text-white">
                        <p className="font-semibold font-montserrat uppercase">Sama Moayeri</p>
                        <p className="text-xs font-normal font-montserrat">Creative Director & Designer</p>
                    </div>
                </Link>
                <div className="text-white text-xs font-normal font-montserrat">CONTACT</div>
                {children}
            </div>
        </header>
    );
}
