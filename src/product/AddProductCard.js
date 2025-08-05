import "bootstrap/dist/css/bootstrap.min.css"
import {useEffect, useState} from "react"
import {useParams} from "react-router-dom";

function AddProductCard() {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [thumbnail, setThumbnail] = useState("")
    const params = useParams();

    useEffect(() => {
      console.log(params?.id)
    },[])

    function onButtonClick() {
        console.log(title)
        const product = {
            "title": title,
            "description": description,
            "thumbnail": thumbnail
        }

        fetch("https://srm-fdp-commerce-backend-wprz.onrender.com/list", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => {
                if (res.ok) {
                    alert("Product is inserted")
                } else {
                    alert("Product is not added. there is a issue")
                }
            })
    }

    return (
        <div style={{maxWidth:"500px", margin:"0 auto"}} className="card mt-5 p-5">
            <div className="mb-3">
              <h2>Add Product Form</h2>
            </div>
            <div className="mb-3">
                <label className="form-label">Product title</label>
                <input onChange={(e) => setTitle(e.target.value)} type="text" className="form-control" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label className="form-label">Product Description</label>
                <input onChange={(e) => setDescription(e.target.value)} type="text" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Product thumbnail</label>
                <input onChange={(e) => setThumbnail(e.target.value)} type="text" className="form-control" />
            </div>
            <button onClick={onButtonClick} type="submit" className="btn btn-primary">Add Product</button>

        </div>
    )
}

export default AddProductCard