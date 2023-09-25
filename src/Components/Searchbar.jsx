import {ReactComponent as SearchIcon} from "../SVG/search_icon.svg";

const Searchbar = () =>{
    const handleSubmit =(e)=>{
        e.preventDefault();
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search..." />
            <button type="submit"><SearchIcon /></button>
        </form>
    )
}

export default Searchbar;