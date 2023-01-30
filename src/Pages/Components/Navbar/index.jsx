import HelplineBar from "./HelplineBar";
import NavigationBar from "./NavigationBar";
import SearchBar from "./SearchBar";

function Navbar(){
    return(
        <>
            <HelplineBar/>
            <div className="bg-emerald-500 sticky top-0 z-20">
                <SearchBar/>
                <NavigationBar/>
            </div>
        </>
    );
}

export default Navbar;