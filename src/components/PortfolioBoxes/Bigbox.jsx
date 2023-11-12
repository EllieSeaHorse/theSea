
export default function Bigbox({
                                   heading,
                                   children,
    className,
    ...rest
}) {
    return(
        <div
                className={`${className} relative w-full h-full p-4`}
        >
            <h1 className={"text-2xl font-bold pb-5"}>{heading}</h1>
            {children}
        </div>
    )
}