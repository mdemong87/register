
export default function Futured({ icons, heading, dis, bg }) {
    return (
        <div className={`w-full p-5 shadow-2xl bg-white h-72 rounded-xl flex items-center ${bg ? "pbg" : null}`}>
            <div className=" text-center flex flex-col justify-center items-center">
                <div className="w-fit">
                    {icons}
                </div>
                <h1 className={`text-2xl font-bold py-5 ${bg ? "text-gray-50" : "text-gray-700"}`}>{heading}</h1>
                <p className={`text-lg ${bg ? "text-gray-200" : "text-gray-400"}`}>{dis}</p>
            </div>
        </div>
    )
}