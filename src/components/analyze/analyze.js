import "./analyze.css";

function Analyze() {
  return (
    <div>
      <div className="container-analyze">
        <div className="container-analyze-bg-title">
          <div className="container-analyze-background"></div>
          <div className="container-analyze-title">
            <h1>Analyze your social media account</h1>
            <h3>
              Allows you to control all analytic with your company, easily, you
              cobain bang.
            </h3>
          </div>
        </div>
        <div className="container-analyze-element">
          {/* ELEMENT ONE */}
          <div>
            <div className="Second-bar-analyze">
              <div className="Account-reach-analyze">
                <div>
                  <span>Account reach</span>
                </div>
                <div>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="25"
                    fill="#13D85F"
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
              <div className="Account-reach-number-analyze">
                <div>
                  <span>482k</span>
                </div>
                <div>
                  <span>+218k</span>
                </div>
              </div>
            </div>
          </div>
          {/* ELEMENT TWO */}
          <div>
            <div className="three-bar-analyze">
              <div className="Analytic-text-analyze">
                <span>Analytic</span>
              </div>

              <div className="progress-container-analyze">
                <div className="progress-bar-container-analyze">
                  <div className="bar-1-analyze">
                    <div className="bar-container-analyze">
                      <div className="bar-analyze"></div>
                    </div>
                    <span>Mon</span>
                  </div>

                  <div className="bar-2-analyze">
                    <div className="bar-container-analyze">
                      <div className="bar-analyze"></div>
                    </div>
                    <span>Sun</span>
                  </div>

                  <div className="bar-3-analyze">
                    <div className="bar-container-analyze">
                      <div className="bar-analyze"></div>
                    </div>
                    <span>Mon</span>
                  </div>

                  <div className="bar-4-analyze">
                    <div className="container-389K-analyze">
                      <span className="Text-389K-analyze">389k</span>
                    </div>
                    <div className="bar-container-analyze">
                      <div className="bar-analyze"></div>
                    </div>
                    <span>Mon</span>
                  </div>

                  <div className="bar-5-analyze">
                    <div className="bar-container-analyze">
                      <div className="bar-analyze"></div>
                    </div>
                    <span>Mon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ELEMENT THREE */}
          <div>
            <div className="First-bar-analyze">
              <div className="Followers-target-analyze">
                <span>Followers target</span>
                <div>
                  <span>+219K</span>
                </div>
              </div>
              <div>
                <progress id="file" value="70" max="100"></progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analyze;
