import { Footer } from "../components/footer";
import { Navbar } from "../components/Navbar";
import { PreviewAccount } from "../components/PreviewAccount";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { setUserInformations } from "../features/user/userStatement";

export function Profile() {
  const userStatement = useSelector((state) => state.user.value);
  const userInformations = useSelector((state) => state.user.informations);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ENDPOINT = `http://localhost:3001/api/v1/user/profile`;

  useEffect(() => {
    if (!userStatement) {
      navigate("/error-user");
    }
  }, [userStatement, navigate]);
  const getProfile = async () => {
    const token =
      localStorage.getItem("Token") || sessionStorage.getItem("Token");
    const request = await fetch(ENDPOINT, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const response = await request.json();
    const { email, firstName, lastName, userName } = response.body;

    dispatch(setUserInformations({ email, firstName, lastName, userName }));
    console.log(userInformations);
  };
  useEffect(() => {
    getProfile();
  }, [userStatement]);

  const fullname = `${userInformations.firstName} ${userInformations.lastName}`;
  return (
    userStatement && (
      <>
        <Navbar />
        <main className="main bg-dark">
          <div className="header">
            <p></p>
            <h1>
              Welcome back
              <br />
              {userInformations && fullname}
            </h1>
            <button className="edit-button">Edit Name</button>
          </div>
          <h2 className="sr-only">Accounts</h2>
          <PreviewAccount
            accountTitle={`Argent Bank Checking (x8349)`}
            accountAmout={`$2,082.79`}
            accountDescription={`Available Balance`}
          ></PreviewAccount>
          <PreviewAccount
            accountTitle={`Argent Bank Savings (x6712)`}
            accountAmout={`$10,928.42`}
            accountDescription={`Available Balance`}
          ></PreviewAccount>
          <PreviewAccount
            accountTitle={`Argent Bank Credit Card (x8349)`}
            accountAmout={`$184.30`}
            accountDescription={`Current Balance`}
          ></PreviewAccount>
        </main>
        <Footer />
      </>
    )
  );
}
