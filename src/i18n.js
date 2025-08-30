// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Traducciones en español
const translationES = {
welcome: "Bienvenido",
home: "Inicio",
skills: "Habilidades",
studies: "Estudios",
about: "Acerca de mí",
contact: "Contacto",
projects: "Proyectos",
experience: "Experiencia",
education: "Educación",
hello: "Hola, soy",
developer: "Desarrollador Full Stack",
viewProjects: "Ver Proyectos",
downloadCV: "Descargar CV",
mySkills: "Mis Habilidades",
myStudies: "Mis Estudios",
all: "Todos"
};

// Traducciones en inglés
const translationEN = {
welcome: "Welcome",
home: "Home", 
skills: "Skills",
studies: "Studies",
about: "About me",
contact: "Contact",
projects: "Projects",
experience: "Experience",
education: "Education",
hello: "Hello, I'm",
developer: "Full Stack Developer",
viewProjects: "View Projects",
downloadCV: "Download CV",
mySkills: "My Skills",
myStudies: "My Studies",
all: "All"
};

// Configuración de i18next
i18n
.use(initReactI18next)
.init({
resources: {
    en: { translation: translationEN },
    es: { translation: translationES }
},
lng: "es", // idioma por defecto
fallbackLng: "es",
interpolation: {
    escapeValue: false
}
});

export default i18n;