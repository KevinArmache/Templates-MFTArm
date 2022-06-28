import "../followerstarget/followerstarget.css";

function Followerstarget() {
  return (
    <div>
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
    </div>
  );
}

export default Followerstarget;
