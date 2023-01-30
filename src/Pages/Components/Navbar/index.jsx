import CategoriesDropDown from "../CategoriesDropDown";
import PagesDropDown from "../PagesDropDown";
import HelplinBar from "./HelplineBar";
import NavigationBar from "./NavigationBar";
import SearchBar from "./SearchBar";

function Navbar(){
    return(
        <>
            <HelplinBar/>
            <div className="bg-emerald-500 sticky top-0 z-20">
                <SearchBar/>
                <NavigationBar/>
            </div>
        </>
    );
}

export default Navbar;