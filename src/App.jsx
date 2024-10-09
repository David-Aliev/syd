import { TextField, Button, Checkbox } from "@mui/material";
import { useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function App() {
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = () => {
    setChecked((prev) => !prev);
  };

  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("grandPree", checked);
    const payload = Object.fromEntries(formData);
    console.log(payload);
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
              <button>tab1</button>
              <button>tab2</button>
            </nav>
          </div>
        </div>
      </header>

      <div className="form-overlay">
        <form className="form" onSubmit={submitForm}>
          <div className="form__container">
            <div className="form__text">
              <span className="form__text-span">Назва колективу</span>
              <h4 className="form__text-title">Назва номеру</h4>
            </div>

            <div className="typography">
              <div>
                {[
                  "Композиція танцю",
                  "Технічний рівень",
                  "Відповідність музичного матеріалу",
                  "Оригінальність",
                  "Акторська майстерність",
                  "Інше",
                ].map((label, index) => (
                  <div className="input" key={index}>
                    <TextField
                      name={label} // Ім'я поля для зручності
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            borderColor: "gray",
                          },
                          "&:hover fieldset": {
                            borderColor: "white",
                          },
                          "&.Mui-focused fieldset": {
                            borderColor: "gray",
                          },
                        },
                      }}
                      label={label}
                      variant="outlined"
                      InputLabelProps={{ style: { color: "white" } }}
                      InputProps={{ style: { color: "white" } }}
                    />
                  </div>
                ))}
              </div>
              <div className="notes">
                <TextField
                  name="notes" // Додаємо ім'я
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "gray",
                      },
                      "&:hover fieldset": {
                        borderColor: "white",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "gray",
                      },
                    },
                  }}
                  label="Нотатки"
                  multiline
                  rows={12}
                  variant="outlined"
                  InputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "white" } }}
                />
                <div className="notes__point">
                  <span className="notes__text">Гранд прі</span>
                  <Checkbox
                    icon={
                      <StarBorderIcon
                        style={{ color: "white", fontSize: "27px" }}
                      />
                    }
                    checkedIcon={
                      <StarIcon style={{ color: "yellow", fontSize: "27px" }} />
                    }
                    checked={checked}
                    onChange={handleCheckboxChange}
                    sx={{
                      padding: 0,
                      "&.Mui-checked": {
                        background: "transparent",
                      },
                      "&.MuiCheckbox-root": {
                        background: "transparent",
                        border: "none",
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="button-container">
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

export default App;
