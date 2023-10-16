
const CssTest = () => {
    return (
        <div className="peer p-8 border-4 border-black">

            {/* 
            <div className="peer/nekko p-4 border-4 border-black 
            group-hover:bg-red-700 transition-all duration-1000">
                Dog
            </div>


            <div className="peer-hover:bg-green-600 border-4 border-black">
                cat
            </div>


            <div className="peer-hover/nekko:bg-green-600 border-4 border-black
            ">
                Nekko
            </div> */}

            <button className="group w-64 relative p-10 ">
                <div className="absolute h-full left-0 top-0 bg-primary transition-all duration-300 ease-linear w-full 
                group-hover:bg-primary group-hover:w-0">
                </div>
                <h1 className="absolute text-white group-hover:text-black transition-all duration-300 ease-linear 
                top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Click</h1>
            </button>

            {/* <button
                type={type}
                onClick={onClick}
                className={`${className} group h-9 relative`}
            >
                <div className="absolute h-full left-0 top-0 bg-primary transition-all duration-300 ease-linear w-full 
                group-hover:bg-primary group-hover:w-0">
                </div>
                {label && <h1 className="absolute group-hover:text-black transition-all duration-300 ease-linear top-1/4 left-1/3">label</h1>}
                {children && children}
            </button> */}



        </div>
    )
}

export default CssTest