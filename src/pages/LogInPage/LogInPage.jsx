import styles from "./styles.module.css";
import MenuButton from "../../components/menuBtn/MenuButton";
import { TextField, Button } from "@mui/material";
import { useState } from "react";

const users = [
  {
    username: "judge1",
    password: "password",
    is_admin: false,
  },
  {
    username: "admin",
    password: "admin",
    is_admin: true,
  },
];

function LogInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleConfirm = (e) => {
    e.preventDefault(); // Зупинити стандартну поведінку форми
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // Логіка успішного логіну
      alert(`Ласкаво просимо, ${user.username}!`);
      setError("");
      // Тут можна додати перенаправлення на інші сторінки, якщо потрібно
    } else {
      setError("Неправильний логін або пароль. Спробуйте ще раз.");
    }
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__inner">
            <div className="logo">
              <a className="logo__link" href="#">
                <img className="logo__link-img" src="sydLogo.png" alt="Logo" />
              </a>
            </div>
            <nav className="menu">
              <MenuButton text="text" />
              <MenuButton text="text" />
            </nav>
          </div>
        </div>
      </header>

      <div className={styles.login_form_overlay}>
        <form className={styles.log_in_form} onSubmit={handleConfirm}>
          <div className="form__container">
            <div className="form__text">
              <h4 className="form__text-title">Увійти</h4>
              {error && <p className="error">{error}</p>}{" "}
              {/* Повідомлення про помилку */}
            </div>
          </div>
          <div className={styles.typography_login}>
            <div>
              <div className="input">
                <TextField
                  value={username}
                  onChange={(e) => setUsername(e.target.value)} // Зберігаємо логін
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "gray" },
                      "&:hover fieldset": { borderColor: "white" },
                      "&.Mui-focused fieldset": { borderColor: "gray" },
                    },
                  }}
                  label="Логін"
                  variant="outlined"
                  InputLabelProps={{ style: { color: "white" } }}
                  InputProps={{ style: { color: "white" } }}
                />
              </div>
              <div className="input">
                <TextField
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Зберігаємо пароль
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "gray" },
                      "&:hover fieldset": { borderColor: "white" },
                      "&.Mui-focused fieldset": { borderColor: "gray" },
                    },
                  }}
                  label="Пароль"
                  variant="outlined"
                  InputLabelProps={{ style: { color: "white" } }}
                  InputProps={{ style: { color: "white" } }}
                />
              </div>
            </div>
            <div className={styles.login_btn}>
              <Button type="submit" variant="contained" color="primary">
                Підтвердити
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default LogInPage;
