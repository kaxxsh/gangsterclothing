"use client";
import style from "@/styles/login.module.css";
import { useState } from "react";
const Signup = () => {
  const [credentials, setcredentials] = useState({
    Username: "",
    Email: "",
    Password: "",
    Confirmpassword: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!Password && !Confirmpassword) {
      console.log("password not same");
    }
    const response = await fetch(BASE_URL + "/api/login", {
      cache: "no-store",
      credentials: "include",
      method: "POST",
      body: JSON.stringify({
        Username: credentials.Username,
        Email: credentials.Email,
        Password: credentials.Password,
      }),
    });
    const data = await response.json();
    if (response.status > 399 && response.status < 499) {
      toast.error(data?.message, { autoClose: 3000 });
    } else {
      toast(data?.message, { autoClose: 1000 });
      router.push("/profile");
    }
  };
  return (
    <section>
      <div className={style.container}>
        <div className={style.logo}>GANGSTER CLOTHING</div>
        <div className={style.signup}>
          <div className={style.title}>SIGN UP</div>
          <form onSubmit={(e) => setcredentials(e)}>
            <div className={style.inputfield}>
              <label>Username</label>
              <input
                type="text"
                name="username"
                onChange={(e) =>
                  setcredentials({ ...credentials, Username: e.target.value })
                }
              />
            </div>
            <div className={style.inputfield}>
              <label>Email or Mobile number</label>
              <input
                type="text"
                name="email"
                onChange={(e) =>
                  setcredentials({ ...credentials, Email: e.target.value })
                }
              />
            </div>
            <div className={style.inputfield}>
              <label>Password</label>
              <input
                type="password"
                name="password"
                onChange={(e) =>
                  setcredentials({ ...credentials, Password: e.target.value })
                }
              />
            </div>
            <div className={style.inputfield}>
              <label>Confirm Password</label>
              <input
                type="text"
                name="Confirmpassword"
                onChange={(e) =>
                  setcredentials({
                    ...credentials,
                    Confirmpassword: e.target.value,
                  })
                }
              />
            </div>
            <button>Continue</button>
          </form>
          <div className={style.terms}>
            By continuing, you agree to gangster clouthing Conditions of Use and
            Privacy Notice.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
