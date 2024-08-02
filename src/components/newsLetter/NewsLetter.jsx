const NewsLetter = () => {
  return (
    <div className="container-fluid py-5 mt-5" style={{background: "linear-gradient(to bottom, rgb(251,227,255), white)"}}>
      <div className="container py-5">
        <form className="text-center lh-lg">
            <h1 style={{fontWeight: "400"}}>get exclusive offers on your mail</h1>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of whats new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row m-auto my-2 w-50 gap-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
            <button className="btn btn-dark" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default NewsLetter
