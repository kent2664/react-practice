import { Link } from "react-router-dom";

function HomeCompo() {
  return (
    <>
      <Link to="/easy"/>
      <Link to="/medium"/>
      <Link to="/hard"/>
    </>
  );
}

export default HomeCompo;