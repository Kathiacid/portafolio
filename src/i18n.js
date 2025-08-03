import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
en: {
translation: {
    greeting: "Hello",
    skills: "Skills",
    projects: "Projects",
    studies: "Studies",
    contact: "Contact Me"
}
},
es: {
translation: {
    greeting: "Hola",
    skills: "Habilidades",
    projects: "Proyectos",
    studies: "Estudios",
    contact: "Contáctame"
}
}
};

i18n
.use(initReactI18next)
.init({
resources,
lng: "es",
interpolation: {
    escapeValue: false
}
});

export default i18n;
