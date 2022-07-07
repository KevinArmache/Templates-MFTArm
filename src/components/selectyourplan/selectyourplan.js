import "../selectyourplan/selectyourplan.css";

function selectyourplan() {
  return (
    <div>
      <div className="container-select-your-plan">
        <div className="select-your-plan-title">
          <h1>Select your plan</h1>

          <h3>
            Not sure ? you can try a <span>free</span> version
          </h3>
        </div>
        <div className="container-cellule">
          <div className="cellule-group1">
            <div className="cellule-background"></div>
            <div className="cellule-background"></div>
            <div className="cellule-background"></div>
          </div>
          <div className="cellule-group2">
            <div className="cellule-background"></div>
            <div className="cellule-background"></div>
            <div className="cellule-background"></div>
            <div className="cellule-background"></div>
          </div>
        </div>

        <div className="container-plan">
          <div className="plan-card">
            <div className="plan-card-title">
              <h2>Basic</h2>
            </div>
            <div className="plan-card-price">
              <span>$29</span>&nbsp;&nbsp;
              <span>/ Month</span>
            </div>
            <div className="plan-card-price-end">
              <span>Just started ? try this</span>
            </div>

            <div className="plan-card-conditions">
              <div className="plan-card-conditions-checked">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#756c56 "
                  class="bi bi-check-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
                <span>10+ features</span>
              </div>
              <div className="plan-card-conditions-checked">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#756c56 "
                  class="bi bi-check-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
                <span>50gb cloud drive</span>
              </div>
              <div className="plan-card-conditions-checked">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#756c56 "
                  class="bi bi-check-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
                <span>Customer service 12h</span>
              </div>
            </div>

            <div className="plan-card-button">
              <a href="test">Choose plan</a>
            </div>
          </div>

          <div className="plan-card-black">
            <div className="plan-card-title-black">
              <h2>Startup</h2>
            </div>
            <div className="plan-card-price-black">
              <span>$39</span>&nbsp;&nbsp;
              <span>/ Month</span>
            </div>
            <div className="plan-card-price-end-black">
              <span>Recommended plan</span>
            </div>

            <div className="plan-card-conditions-black">
              <div className="plan-card-conditions-checked-black">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#756c56 "
                  class="bi bi-check-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
                <span>20+ features</span>
              </div>
              <div className="plan-card-conditions-checked-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#756c56 "
                  class="bi bi-check-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
                <span>100gb cloud drive</span>
              </div>
              <div className="plan-card-conditions-checked-black">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#756c56 "
                  class="bi bi-check-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
                <span>Customer service 24h</span>
              </div>
            </div>

            <div className="plan-card-button-black">
              <a href="test">Choose plan</a>
            </div>
          </div>
          <div className="plan-card">
            <div className="plan-card-title">
              <h2>Advanced</h2>
            </div>
            <div className="plan-card-price">
              <span>$59</span>&nbsp;&nbsp;
              <span>/ Month</span>
            </div>
            <div className="plan-card-price-end">
              <span>For big company</span>
            </div>

            <div className="plan-card-conditions">
              <div className="plan-card-conditions-checked">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#756c56 "
                  class="bi bi-check-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
                <span>All features</span>
              </div>
              <div className="plan-card-conditions-checked">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#756c56 "
                  class="bi bi-check-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
                <span>Unlimited cloud drive</span>
              </div>
              <div className="plan-card-conditions-checked">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="#756c56 "
                  class="bi bi-check-lg"
                  viewBox="0 0 16 16"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                </svg>
                <span>Customer service 24h</span>
              </div>
            </div>

            <div className="plan-card-button">
              <a href="test">Choose plan</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default selectyourplan;
