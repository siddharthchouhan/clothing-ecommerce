const LoginSingup = () => {
  return (
    <div className="container w-50 py-5 signup">
      <form>
        <h2 className="pb-4">Sign Up</h2>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">
            Your Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We will never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <div className="mb-3">
          <p style={{fontSize: "13px"}}>Already have an accound? <a className="text-decoration-none fw-bold text-danger">Login here</a></p>
        </div>
        <button type="submit" className="btn btn-danger rounded-2 w-100">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginSingup;
