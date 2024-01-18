
export default function Bigbox({
                                   heading,
                                   children,
                                className,
                                ...rest
                                }) {
    return(
        <div
                className={`${className} relative w-full h-full p-4 text-xs md:text-sm`}
        >
            <h1 className={"text-xl font-bold pb-5"}>{heading}</h1>
            {children}
        </div>
    )
}