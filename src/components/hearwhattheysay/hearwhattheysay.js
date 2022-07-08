import React from "react";
import "../hearwhattheysay/hearwhattheysay.css";
import Star from "../../assets/image9.png";
import Discuss from "../../assets/toppng2.png";
import Avatar1 from "../../assets/Ellipse333.png";
import Avatar2 from "../../assets/Ellipse334.png";

function hearwhattheysay() {
  return (
    <div className="container-hwhts">
      <div className="container-background-hwts">
        <div className="statistic-container-hwts">
          <div className="statistic-element-hwts">
            <div>
              <div>
                <span>4.8</span>
                <div>
                  <img className="Star" src={Star} alt="Star" />
                </div>
              </div>

              <span>Rating on App Store</span>
            </div>
            <div>
              <div>
                <span>4.6</span>
                <div>
                  <img className="Star" src={Star} alt="Star" />
                </div>
              </div>

              <span>Rating on Microsoft</span>
            </div>
            <div>
              <div>
                <span>92%</span>
                <div>
                  <img className="Discuss" src={Discuss} alt="Star" />
                </div>
              </div>
              <span>Good comments</span>
            </div>
          </div>
        </div>
        <div className="container-begin-hwts">
          <div className="container-feature-hwts">
            <div className="container-text-hwts">
              <div>
                <p>
                  Hear what they say
                  <br /> about us..
                </p>
              </div>

              <div>
                <a href="Learn More">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="1em"
                    height="1em"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="1.5"
                      d="M3.25 13.25h9m-8.5-6.5l4 3.5l4-3.5m-4-5v8.5"
                    />
                  </svg>
                  &nbsp;Download now
                </a>
              </div>
            </div>
            <div className="container-condition-hwts">
              <div className="give-all-control-hwts">
                <div className="container-avatar">
                  <div className="epingle-container-hwts">
                    <img
                      className="epingle-image-hwts"
                      src={Avatar1}
                      alt="Avatar1"
                    />
                  </div>
                  <div className="pseudo-avatar">
                    <span>@samsudin21</span>
                    <span>Samsudin Akbar</span>
                  </div>
                </div>
                <h4>Amazing Experience</h4>
                <div className="epingle-text-hwts">
                  <p>
                    “Awalnya sih saya coba coba, eh keterusan nyampe sekarang.
                    It was really difficult to use the previous app”
                  </p>
                  <div className="star-collection">
                    <img className="star-collect" src={Star} alt="Star" />
                    <img className="star-collect" src={Star} alt="Star" />
                    <img className="star-collect" src={Star} alt="Star" />
                    <img className="star-collect" src={Star} alt="Star" />
                    <img className="star-collect" src={Star} alt="Star" />
                  </div>
                </div>
              </div>
              <div className="free-version-hwts">
                <div className="container-avatar">
                  <div className="epingle-container-hwts">
                    <img
                      className="epingle-image-hwts"
                      src={Avatar2}
                      alt="Avatar2"
                    />
                  </div>
                  <div className="pseudo-avatar">
                    <span>@messiuuu</span>
                    <span>Muhammad Messi</span>
                  </div>
                </div>

                <h4>Great features</h4>
                <div className="epingle-text-hwts">
                  <p>
                    “Awalnya sih saya coba coba, eh keterusan nyampe sekarang.
                    It was really difficult to use the previous app”
                  </p>
                  <div className="star-collection">
                    <img className="star-collect" src={Star} alt="Star" />
                    <img className="star-collect" src={Star} alt="Star" />
                    <img className="star-collect" src={Star} alt="Star" />
                    <img className="star-collect" src={Star} alt="Star" />
                    <img className="star-collect" src={Star} alt="Star" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hearwhattheysay;
