import "bootstrap/dist/css/bootstrap.min.css"
import { useNavigate } from "react-router-dom"

function SimpleButton() {
    let navigate = useNavigate()
    return (
        <div>
            <button className="btn btn-success m-5" onClick={() => {
                navigate("/login")
            }}>
                Navigate Login Page
            </button>
            <a className="btn btn-primary m-5"  href="/home">Navigate to Home</a>
        </div>
    )
}

export default SimpleButton
