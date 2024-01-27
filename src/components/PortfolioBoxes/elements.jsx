import Link from 'next/link';

function PercentageBar({ percentage }) {
    return (
        <div className="bg-gray-900 rounded-full flex h-3 items-center">
            <div
                className="h-2 rounded-full bg-accent"
                style={{ width: `${percentage}%` , opacity: `${percentage}%` }}
            ></div>
        </div>
    );
}

function LanguageItem({ language, proficiency, additionalInfo , link}) {
    return (
        <div className="mb-4 flex justify-between">
            <p className="font-semibold">{language}</p>
            <div className={"w-1/3 text-accent"}>

            <p className={"text-xs font-semibold"}>{proficiency}</p>
            <Link className={"text-xs"} href={'https://online.unistrasi.it/qr_cils.asp?ID=29620201314306'}>{additionalInfo}</Link>
            </div>

        </div>
    );
}


function Competence({ title, items }) {
    return (
        <div>
            <h2 className="text-gray-400 mb-2">{title}</h2>
            {items.map((item, index) => (
                <div key={index} className="mb-2">
                    <p className="w-1/3 text-xs">{item.name}</p>
                    <PercentageBar percentage={item.percentage} />
                </div>
            ))}
        </div>
    );
}


function SubBox({year, title, description, list , children}) {
    return (
        <div className={"flex py-1 transition w-full"}>
            <h1 className={"text-gray-400 text-xs w-1/6"}>{year}</h1>
            <div className={"pl-3 pb-2.5 w-5/6"}>
                <h1 className={"pb-1 text-sm font-semibold font-['Montserrat']"}>{title}</h1>
                <h1 className={"pb-2.5  text-accent text-xs font-normal font-['Montserrat']  italic" }>{description}</h1>
                <h1 className={"pb-2.5 text-xs " }>{children}</h1>

                {list != null && list.map((item, index) => (
                    <h1 key={index} className={"pb-1 text-neutral-300 text-xs font-normal font-['Montserrat'] "}>
                        - {item}
                    </h1>
                ))}

            </div>
        </div>
    )
}

export {SubBox, Competence, LanguageItem};

