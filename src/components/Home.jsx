import { Link } from "react-router-dom";
// import background from "../images/image-53.png"
function Home() {
    return (
        <main className="bg-home bg-cover text-white text-center">
            <h2 className="font-extrabold text-4xl">
                You got the travel plans, we got the travel vans.
            </h2>
            <p className="my-4 text-base leading-6">
                Add adventure to your life by joining the #vanlife movement.
            </p>
            <p className="my-4 text-base leading-6">
                {" "}
                Rent the perfect van to make your perfect road trip.
            </p>
            <Link to="/vans">
                {" "}
                <button
                    className="px-8 py-3 text-white bg-[#FF8C38] rounded-md my-4 relative "
                    type="button"
                >
                    Find your van
                </button>
            </Link>
        </main>
    );
}
export default Home;
