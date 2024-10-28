import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const userStatement = useSelector((state) => state.user.value);

  return (
    <>
      <nav className="main-nav">
        <a className="main-nav-logo" href="/">
          <img
            className="main-nav-logo-image"
            src="./img/argentBankLogo.png"
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          {userStatement ? (
            <a className="main-nav-item" href="/">
              <FontAwesomeIcon icon={faCircleUser} />
              Sign Out
            </a>
          ) : (
            <a className="main-nav-item" href="./sign-in">
              <FontAwesomeIcon icon={faCircleUser} />
              Sign In
            </a>
          )}
        </div>
      </nav>
    </>
  );
};
