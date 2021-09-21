import Feature from "../../component/feature/Feature"
import List from "../../component/list/List"
import Navbar from "../../component/navbar/Navbar"
import "./home.scss"

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Feature />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
            <List />
        </div>
    )
}

export default Home
