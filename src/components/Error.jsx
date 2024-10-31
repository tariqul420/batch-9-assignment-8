import "../../public/error.css"

const Error = () => {
    return (
        <div id="error-page">
            <div className="content">
                <h2 className="header" data-text="404">
                    404
                </h2>
                <h4 data-text="Opps! Page not found" className="font-black">
                    Opps! Page not found
                </h4>
                <p>Sorry, the page your looking for does not exist. If you think something is broken, report a problem.</p>
                <div className="btns">
                    <a href="/">return home</a>
                </div>
            </div>
        </div>
    );
};

export default Error;