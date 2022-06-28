import "./accountreach.css";

function accountreach() {
  return (
    <div>
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
        <div className="Account-reach-number">
          <div>
            <span>482k</span>
          </div>
          <div>
            <span>+218k</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default accountreach;
