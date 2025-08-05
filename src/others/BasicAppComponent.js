import "bootstrap/dist/css/bootstrap.min.css"
import { useState } from "react"

function BasicAppComponent() {
    const [name, setName] = useState("")
    return (
        <div className="card m-5 p-5">
            {/* <select className="form-select mb-4">
                <option>Select the state</option>
                <option>Tamilnadu</option>
                <option>Kerala</option>
                <option>Karnadaka</option>
            </select>
            <label className="form-label">Gender</label>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault1" />
                <label class="form-check-label" for="radioDefault1">
                    Male
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="radioDefault" id="radioDefault2" />
                <label class="form-check-label" for="radioDefault2">
                    Female
                </label>
            </div> */}
            <input onChange={(event) => {
                setName(event.target.value)
            }} className="form-control mb-4 mt-4" type="text" placeholder="Enter your name" />
            <input className="form-control mb-4 mt-4" type="text" placeholder="Enter your password" />
            <input onClick={() => {
                alert(name)
            }} className="btn btn-primary" type="button" value="Login" />

            <h1>{name}</h1>
        </div>
    )
}

export default BasicAppComponent