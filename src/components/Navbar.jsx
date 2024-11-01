import { NavLink } from "../Hook/Hook"

const Navbar = () => {
    return (
        <nav className="w-11/12 mx-auto my-12 flex items-center justify-between">
            <div>
                <h1 className="text-color-primary font-bold text-3xl">Book Vibe</h1>
            </div>
            <div className="flex gap-4">
                <NavLink className="text-[18px] text-color-primary/80 p-[14px_17px_14px_17px]" to="/">Home</NavLink>
                <NavLink className="text-[18px] text-color-primary/80 p-[14px_17px_14px_17px]" to="/listed-books">Listed Books</NavLink>
                <NavLink className="text-[18px] text-color-primary/80 p-[14px_17px_14px_17px]" to="/pages-to-read">Pages to Read</NavLink>
            </div>
            <div className="flex gap-4">
                <button className="btn bg-button1 text-white font-semibold text-[18px]">Button</button>
                <button className="btn bg-button2 text-white font-semibold text-[18px]">Button</button>
            </div>
        </nav>
    );
};

export default Navbar;