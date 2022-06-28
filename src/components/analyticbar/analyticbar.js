import "./analyticbar.css";

function analyticbar() {
  return (
    <div>
      <div className="three-bar">
        <div className="Analytic-text">
          <span>Analytic</span>
        </div>

        <div className="progress-container ">
          <div className="progress-bar-container">
            <div className="bar-1">
              <div className="bar-container">
                <div className="bar"></div>
              </div>
              <span>Mon</span>
            </div>

            <div className="bar-2">
              <div className="bar-container">
                <div className="bar"></div>
              </div>
              <span>Sun</span>
            </div>

            <div className="bar-3">
              <div className="bar-container">
                <div className="bar"></div>
              </div>
              <span>Mon</span>
            </div>

            <div className="bar-4">
              <div className="container-389K">
                <span className="Text-389K">389k</span>
              </div>
              <div className="bar-container">
                <div className="bar"></div>
              </div>
              <span>Mon</span>
            </div>

            <div className="bar-5">
              <div className="bar-container">
                <div className="bar"></div>
              </div>
              <span>Mon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default analyticbar;
