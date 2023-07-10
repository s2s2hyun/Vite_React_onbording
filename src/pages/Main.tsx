import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";
import useRouter from "../hook/useRouter";

const Main = () => {
    const { push } = useRouter();

    const ClickFly = () => {
        push("/about");
    };
    return (
        <>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React Main Home</h1>
            <button onClick={ClickFly}>About Page </button>
            <p>Root</p>
            <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
        </>
    );
};

export default Main;
