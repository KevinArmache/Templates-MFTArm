import "../selectyourplant/selectyourplant.css";

function selectyourplant() {
  return (
    <div>
      <div className="container-select-your-plant">
        <div className="select-your-plant-title">
          <h1>Select your plant</h1>

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
      </div>
    </div>
  );
}

export default selectyourplant;
