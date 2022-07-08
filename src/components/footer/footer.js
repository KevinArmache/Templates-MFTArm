import React from "react";
import "../footer/footer.css";
import Women from "../../assets/businesswomen.png";

function footer() {
  return (
    <div>
      <div className="container-footer">
        <div className="container-question">
          <div className="container-question-text">
            <p>
              Any questions ? <br /> Talk with us now.
            </p>
          </div>
          <div className="container-question-input">
            <form className="form">
              <label>
                <input
                  className="input-message"
                  type="text"
                  name="name"
                  placeholder="Type your message"
                />
              </label>
              <div className="container-submit-faq">
                <div className="container-submit">
                  <input
                    className="input-submit"
                    type="submit"
                    value="Send message"
                  />
                  &nbsp;&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    role="img"
                    width="18px"
                    height="18px"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 16 16"
                    className="svg-submit"
                  >
                    <path
                      fill="
                    #6c634c "
                      d="M1.724 1.053a.5.5 0 0 0-.714.545l1.403 4.85a.5.5 0 0 0 .397.354l5.69.953c.268.053.268.437 0 .49l-5.69.953a.5.5 0 0 0-.397.354l-1.403 4.85a.5.5 0 0 0 .714.545l13-6.5a.5.5 0 0 0 0-.894l-13-6.5Z"
                    />
                  </svg>
                </div>
                <div className="container-faq">
                  <span className="FAQ">See FAQ</span>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="container-image">
          <img className="women" src={Women} alt="Women" />
        </div>
      </div>
    </div>
  );
}

export default footer;
