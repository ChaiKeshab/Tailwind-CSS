/*eslint-disable */
const Button = ({
    onClick,
    label,
    type = 'button',
    className,
    children
}) => {
    return (
        <>
            <button
                type={type}
                onClick={onClick}
                className={`${className} transition-all duration-300`}
            >
                {label && label}
                {children && children}
            </button>

            {/* BROKEN ANIMATION */}

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
        </>
    )
}

export default Button