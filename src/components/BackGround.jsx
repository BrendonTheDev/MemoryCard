import videoBg from "../assets/rickBackground.mp4";

function Main() {
  return (
    <div className="background">
      <video src={videoBg} autoPlay loop muted></video>
    </div>
  );
}

export default Main;
