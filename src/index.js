import ReactDOM from "react-dom/client"
import MovieCard from "./card"
import './style.css'

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <>
        <div class="container">
        <div class="poster">
            <a href="https://en.wikipedia.org/wiki/Laapataa_Ladies" target="_blank"><img src="https://tse2.mm.bing.net/th?id=OIP.wMNP5aqo0aFS2hOlcryyNgHaJQ&pid=Api&P=0&h=220" class="img"/></a>
            <h2 class="name">Laapataa Ladies</h2>
            
        </div>
        <div class="poster">
            <a href="https://en.wikipedia.org/wiki/Yodha_(2024_film)"><img src="https://tse3.mm.bing.net/th?id=OIP.EURv-D17MQaWZ1WcBz5czgHaJZ&pid=Api&P=0&h=220" class="img"/></a>
            <h2 class="name">Yodha</h2>
        </div>
        <div class="poster">
            <a href="https://en.wikipedia.org/wiki/Sita_Ramam"><img src="https://tse3.mm.bing.net/th?id=OIP.R5z4qFjTFCDzmrxvbwaI6AHaKX&pid=Api&P=0&h=220" class="img"/></a>
            <h2 class="name">Sita Raman</h2>
        </div>
    </div>
    </>
)