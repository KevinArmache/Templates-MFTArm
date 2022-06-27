import "./features.css";
import Epingle from "../../assets/image 1.png";
import Money from "../../assets/image 2.png";

function Features() {
  return (
    <div className="container-features">
      <div className="container-background">
        <div className="statistic-container">
          <div className="statistic-element">
            <div>
              <span></span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span></span>
            </div>
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
        <div className="container-begin">
          <div className="container-feature">
            <div className="container-text">
              <div>
                <p>Offering a best and cool features</p>
              </div>

              <div>
                <a href="Learn More">
                  Learn more &nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className="container-condition">
              <div className="give-all-control">
                <div className="epingle-container">
                  <img className="epingle-image" src={Epingle} alt="Epingle" />
                </div>
                <h4>Give all control</h4>
                <div className="epingle-text">
                  <p>
                    Allows you to control all analytic with your company,
                    easily, you cobain bang.
                  </p>
                </div>
              </div>
              <div className="free-version">
                <div className="epingle-container">
                  <img className="epingle-image" src={Money} alt="Epingle" />
                </div>
                <h4>Free version</h4>
                <div className="epingle-text">
                  <p>
                    Available a free version if you weren’t really sure with our
                    product
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
