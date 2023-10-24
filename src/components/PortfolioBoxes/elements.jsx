
function PercentageBar({ percentage }) {
    return (
        <div className="bg-gray-900 rounded-full flex h-3 items-center">
            <div
                className="h-2 rounded-full"
                style={{ width: `${percentage}%`, background: '#2DCCD7' , opacity: `${percentage}%` }}
            ></div>
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


function SubBox({year, title, description, list}) {
    return (
        <div className={"flex py-2 hover:ring transition"}>
            <h1 className={"text-gray-400 text-xs w-1/6"}>{year}</h1>
            <div className={"pl-3 pb-2.5"}>
                <h1 className={"pb-1  text-white text-base font-semibold font-['Montserrat']"}>{title}</h1>
                <h1 className={"pb-2.5 text-justify text-cyan-500 text-sm font-normal font-['Montserrat'] leading-1 italic" }>{description}</h1>
                {list != null && list.map((item, index) => (
                    <h1 key={index} className={"pb-1 text-gray-400 text-xs font-normal font-['Montserrat'] leading-1"}>
                        - {item}
                    </h1>
                ))}

            </div>
        </div>
    )
}

export {SubBox, Competence};

