import Books from "../assets/books.jpg"

const Banner = () => {
    return (
        <div className="flex mb-8 items-center justify-between bg-gray-100 p-12 rounded-2xl">
            <div>
                <h1 className="text-6xl font-bold text-color-primary mb-8">Books to freshen up your bookshelf</h1>
                <button className="btn bg-button1 text-[18px] font-semibold text-white">View The List</button>
            </div>
            <div>
                <img className="rounded-xl" src={Books} alt="" />
            </div>
        </div>
    );
};

export default Banner;