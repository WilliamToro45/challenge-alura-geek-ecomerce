import { IconContext } from 'react-icons';
import { IoSearchOutline } from 'react-icons/io5';

function SearchIcon(){
    return(
        <IconContext.Provider value={{color:"#A2A2A2", size:"1.5rem"}}>
            <div>
                <IoSearchOutline />
            </div>
        </IconContext.Provider>
    )
}

export default SearchIcon;