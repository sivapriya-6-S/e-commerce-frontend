import "bootstrap/dist/css/bootstrap.min.css"

function ProductCard({title, description, imageurl, onDelete=()=>{} }) {
    const onClickAddToCart = () => {
      alert("It's a dummy button")
    }

    return (
      <div className="card product-card m-4 p-3 shadow-sm text-center position-relative">
        <img
          src={imageurl}
          className="card-img-top rounded"
          alt="Product"
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">{title}</h5>
          <p className="card-text text-muted">{description}</p>
        </div>
        <div className='d-flex w-100 gap-2'>
          <button onClick={onClickAddToCart} className='btn btn-warning flex-grow-1'> Add To Cart </button>
          <button onClick={()=>onDelete(title)} className='btn btn-danger flex-grow-1'> Delete </button>
        </div>
      </div>
    )
}

export default ProductCard