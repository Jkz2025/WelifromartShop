import { Filters } from "./Filters/Filters"


export function Header () {
    return (
        <header>
            <h1>Welcome !</h1>
            {/* {children} */}
            <Filters  />
        </header>
    )
}