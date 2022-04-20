import "../Home/Home.css";
import Vector2 from "../../assets/Vector2.svg";
import Vector3 from "../../assets/Vector3.svg";
import Vector5 from "../../assets/Vector5.png";
import BusinessWomen from "../../assets/businesswomen.png";

function Home() {
  return (
    <div className="Container">
      <div className="Left-side">
        <div>
          <h1>
            We help growing{" "}
            <span>
              <img
                className="Vector3"
                src={Vector3}
                alt="Vector 3 Figma"
                width="70"
                height="70"
              />
            </span>
            <br /> your Startup{" "}
            <span>
              <img
                className="Vector2"
                src={Vector2}
                alt="Vector 2 Figma"
                width="70"
                height="70"
              />
            </span>
          </h1>

          <p>
            We give you best solutions to growing your <br />
            Startup, with our best team around the world.
          </p>
        </div>
        <div className="Left-side-button">
          <div>
            <a href="Get started">
              Get started &nbsp;
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

          <div>
            <a href="Learn more">Learn more</a>
          </div>
        </div>
        <div className="Notation">
          <div className="Notation-first">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-check-lg"
              viewBox="0 0 16 16"
            >
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
            </svg>{" "}
            <p>Give all control</p>
          </div>
          <div className="Notation-two">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              class="bi bi-check-lg"
              viewBox="0 0 16 16"
            >
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
            </svg>{" "}
            <p>Available for free version</p>
          </div>
        </div>
      </div>

      <div className="Right-side">
        <div className="First-container">
          <img
            className="Vector5"
            src={Vector5}
            alt="Vector 5"
            width="150"
            height="150"
          />
          <div className="Second-container">
            <img
              className="Business-women"
              src={BusinessWomen}
              alt="Business Women"
              width="500"
              height="600"
            />
          </div>
        </div>

        <div className="Progress-bar">
          {/* First progress bar section */}

          <div className="First-bar">
            <div className="Followers-target">
              <span>Followers target</span>
              <div>
                <span>+219K</span>
              </div>
            </div>
            <div>
              <progress id="file" value="70" max="100"></progress>
            </div>
          </div>
          {/* Second progress bar section */}
          <div className="Second-bar">
            <div className="Account-reach">
              <div>
                <span>Account reach</span>
              </div>
              <div>
                {" "}
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
              </div>
            </div>
            <div className="Account-reach-number">
              <div>
                <span>482k</span>
              </div>
              <div>
                <span>+218k</span>
              </div>
            </div>
          </div>

          <div className="three-bar"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
