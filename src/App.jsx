import { TextField, Button, Checkbox, Modal, Box } from "@mui/material";
import { useState, useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import MenuButton from "./components/menuBtn/MenuButton";

function App() {
  const FORM_TIME_LIMIT = 15000; // 3 хвилини (в мілісекундах) 18 0000

  const [checked, setChecked] = useState(false);
  const [errors, setErrors] = useState({});
  const [dataIndex, setDataIndex] = useState(0); // Індекс поточних даних
  const [formData, setFormData] = useState({}); // Поточна форма
  const [timeLeft, setTimeLeft] = useState(FORM_TIME_LIMIT); // Таймер
  const [modalTimeLeft, setModalTimeLeft] = useState(0); // Залишковий час для popup
  const [isModalOpen, setIsModalOpen] = useState(false); // Модальне вікно для таймера
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // Для відстеження, чи була форма заповнена
  const [allEvaluated, setAllEvaluated] = useState(false); // Для показу кінцевого модального вікна

  const dataObjects = [
    {
      id: 8533,
      group: "The Beatles",
      title: "Let It Be",
      block: 1,
      position: 1,
    },
    {
      id: 6596,
      group: "Queen",
      title: "Bohemian Rhapsody",
      block: 1,
      position: 2,
    },
    {
      id: 5310,
      group: "The Beatles",
      title: "Yesterday",
      block: 1,
      position: 3,
    },
    {
      id: 5602,
      group: "Queen",
      title: "We Will Rock You",
      block: 1,
      position: 4,
    },
    {
      id: 5361,
      group: "The Rolling Stones",
      title: "Paint It Black",
      block: 2,
      position: 5,
    },
    {
      id: 7723,
      group: "The Beatles",
      title: "Hey Jude",
      block: 1,
      position: 6,
    },
    {
      id: 7442,
      group: "Queen",
      title: "Radio Ga Ga",
      block: 1,
      position: 7,
    },
    {
      id: 4236,
      group: "The Rolling Stones",
      title: "Satisfaction",
      block: 1,
      position: 8,
    },
    {
      id: 1848,
      group: "The Beatles",
      title: "A Hard Day's Night",
      block: 2,
      position: 9,
    },
    {
      id: 7759,
      group: "Queen",
      title: "Another One Bites the Dust",
      block: 2,
      position: 10,
    },
    {
      id: 7624,
      group: "The Rolling Stones",
      title: "Angie",
      block: 2,
      position: 11,
    },
    {
      id: 1308,
      group: "The Beatles",
      title: "Come Together",
      block: 2,
      position: 12,
    },
    {
      id: 3616,
      group: "Queen",
      title: "Don't Stop Me Now",
      block: 2,
      position: 13,
    },
    {
      id: 7580,
      group: "The Beatles",
      title: "Help!",
      block: 2,
      position: 14,
    },
  ];

  // спроба зробити норм таймер(поки що,не виходить)

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTimeLeft((prevTime) => Math.max(prevTime - 1000, 0));
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  // useEffect(() => {
  //   console.log(modalTimeLeft);
  //   if (modalTimeLeft === 0) {
  //     setIsModalOpen(false);
  //   }
  // }, [modalTimeLeft]);

  // const handleConfirm = () => {
  //   if (timeLeft > 0) {
  //     setIsModalOpen(true); // Відкрити модальне вікно
  //     setModalTimeLeft(timeLeft); // Щоб таймер йшов з часу на якому він зараз є
  //   }
  // };

  // useEffect(() => {
  //   if (isModalOpen && modalTimeLeft > 0) {
  //     const timer = setInterval(() => {
  //       setModalTimeLeft((prevTime) => Math.max(prevTime - 1000, 0)); // Зменшувати час на 1 секунду
  //     }, 1000);

  //     return () => clearInterval(timer); // Очищення таймера при закритті popup
  //   }
  // }, [isModalOpen, modalTimeLeft]);

  const handleCheckboxChange = () => {
    setChecked((prev) => !prev);
  };

  const validateForm = (values) => {
    let errors = {};

    [
      "composition_of_dance",
      "technical_level",
      "correspondence_to_musical_material",
      "originality",
      "action_skills",
      "other",
    ].forEach((field) => {
      if (values[field] < 0 || values[field] > 10) {
        errors[field] = "Значення повинно бути від 0 до 10";
      }
    });

    if (values.note.length > 250) {
      errors.note = "Нотатка повинна містити максимум 250 символів";
    }

    return errors;
  };

  const submitForm = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const values = {
      composition_of_dance:
        parseFloat(formData.get("composition_of_dance")) || 0,
      technical_level: parseFloat(formData.get("technical_level")) || 0,
      correspondence_to_musical_material:
        parseFloat(formData.get("correspondence_to_musical_material")) || 0,
      originality: parseFloat(formData.get("originality")) || 0,
      action_skills: parseFloat(formData.get("action_skills")) || 0,
      other: parseFloat(formData.get("other")) || 0,
      grand_pri: checked,
      note: formData.get("note") || "",
    };

    const formErrors = validateForm(values);

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      setErrors({});
      setIsFormSubmitted(true);
      setTimeLeft(FORM_TIME_LIMIT);

      // Якщо користувач заповнив форму менше, ніж за 3 хвилини
      // if (timeLeft > 0) {
      //   setIsModalOpen(true); // Показуємо модальне вікно для таймера
      // } else {
      //   setIsModalOpen(false); // Закрити модальне вікно, якщо таймер закінчився
      // }
      console.log("дані: ", values);

      // відправка даних
      // await axios.post("https://your-backend-api.com/form-submit", formData);
      // console.log("Форма успішно відправлена:", formData);

      // Перевіряємо, чи є ще об'єкти для оцінки
      if (dataIndex + 1 < dataObjects.length) {
        setDataIndex(dataIndex + 1);
        setFormData({});
        setIsFormSubmitted(false); // Скидаємо стан заповнення форми
      } else {
        setAllEvaluated(true); // Показуємо кінцеве повідомлення
      }
    }
  };

  return (
    <>
      {/* layout */}

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

      <div className="form-overlay">
        <form className="form" onSubmit={submitForm}>
          <div className="form__container">
            <div className="form__text">
              <span className="form__text-span">
                {dataObjects[dataIndex].group}
              </span>
              <h4 className="form__text-title">
                {dataObjects[dataIndex].title}
              </h4>
            </div>

            <div className="typography">
              <div>
                {[
                  { label: "Композиція танцю", name: "composition_of_dance" },
                  { label: "Технічний рівень", name: "technical_level" },
                  {
                    label: "Відповідність музичного матеріалу",
                    name: "correspondence_to_musical_material",
                  },
                  { label: "Оригінальність", name: "originality" },
                  { label: "Акторська майстерність", name: "action_skills" },
                  { label: "Інше", name: "other" },
                ].map((item, index) => (
                  <div className="input" key={index}>
                    <TextField
                      name={item.name}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "gray" },
                          "&:hover fieldset": { borderColor: "white" },
                          "&.Mui-focused fieldset": { borderColor: "gray" },
                        },
                      }}
                      label={item.label}
                      variant="outlined"
                      InputLabelProps={{ style: { color: "white" } }}
                      InputProps={{ style: { color: "white" } }}
                      error={!!errors[item.name]}
                      helperText={errors[item.name] || ""}
                    />
                  </div>
                ))}
              </div>
              <div className="notes">
                <TextField
                  name="note"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": { borderColor: "gray" },
                      "&:hover fieldset": { borderColor: "white" },
                      "&.Mui-focused fieldset": { borderColor: "gray" },
                    },
                  }}
                  label="Нотатки"
                  multiline
                  rows={12}
                  variant="outlined"
                  InputProps={{ style: { color: "white" } }}
                  InputLabelProps={{ style: { color: "white" } }}
                  error={!!errors.note}
                  helperText={errors.note || ""}
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
                      "&.Mui-checked": { background: "transparent" },
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
              <Button
                // onClick={handleConfirm}
                type="submit"
                variant="contained"
                color="primary"
              >
                Підтвердити
              </Button>
            </div>
          </div>
        </form>

        {/* Модальне вікно для таймера */}

        {/* <Modal open={isModalOpen}>
          <Box sx={{ padding: 2, backgroundColor: "black", borderRadius: 2 }}>
            <h2>Будь ласка, зачекайте 3 хвилини перед наступною формою.</h2>
            <p>
              Час до наступної форми:{" "}
              {Math.max(0, Math.floor(modalTimeLeft / 1000))} секунд
            </p>
          </Box>
        </Modal>  */}

        {/* Модальне вікно для кінцевого повідомлення */}
        <Modal open={allEvaluated}>
          <Box sx={{ padding: 2, backgroundColor: "black", borderRadius: 2 }}>
            <h2>Усі номери було успішно оцінено.</h2>
            <Button onClick={() => setAllEvaluated(false)}>Закрити</Button>
          </Box>
        </Modal>
      </div>
    </>
  );
}

export default App;
