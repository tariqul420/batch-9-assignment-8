import PropTypes from "prop-types";
import { FaRegStar } from "react-icons/fa";

const Book = ({ book }) => {
    const { bookName, author, image, rating, category } = book
    return (
        <div className="p-6 rounded-2xl" style={{ border: "1px solid rgba(19, 19, 19, 0.15)" }}>
            <div className="h-[230px]">
                <img className="h-full w-full rounded-2xl" src={image} alt="" />
            </div>
            <div>
                <div className="flex gap-8 mt-4">
                    <p className="bg-[#23be0a0d] text-[#23be0a] font-bold p-[7px_16px_7px_16px] rounded-2xl">Young Adult</p>
                    <p className="bg-[#23be0a0d] text-[#23be0a] font-bold p-[7px_16px_7px_16px] rounded-2xl">Identity</p>
                </div>
                <h2 className="font-bold text-2xl text-color-primary mt-4">{bookName}</h2>
                <p className="font-semibold text-color-primary/80">{author}</p>
                <div className="flex justify-between">
                    <p>{category}</p>
                    <p className="flex gap-4">{rating} <FaRegStar /></p>
                </div>
            </div>
        </div>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
}
export default Book;