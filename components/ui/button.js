// reużwyalny komponent, zeby Linki jak przyciski wygladały
import Link from "next/link";

import classes from "./button.module.css";

function Button(props) {
  return (
    <Link href={props.link}>
        {/* dodanie elemntu a bo jemu można dodać klasy; jak nie dodama <a> to Link pod maską sam wygeneruje tag <a> 
        tag który kontroluje to co zostało kliknięte where <a> captures a request and loads it witch JS only*/}
        {/* jak chce się swoje style to samemu trzeb adodać a, Link dalej dodaje funckjonalność ale teraz nie da wąłsnych styli */}
      <a className={classes.btn}>{props.children}</a>
    </Link>
  );
}

export default Button;
