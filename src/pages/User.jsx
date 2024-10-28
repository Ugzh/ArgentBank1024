import { Footer } from "../components/footer";
import { Navbar } from "../components/Navbar";
import { PreviewAccount } from "../components/PreviewAccount";

export function User() {
  return (
    <>
      <Navbar />
      <main className="main bg-dark">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
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
  );
}
