import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const skill =links.map((e) => <a key={e.toString()} href={"#"+ e}>{e}</a>);
  return <nav>{
    skill
    }</nav>;
}

export default NavBar;
