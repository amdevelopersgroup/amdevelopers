"use strict";

const translations = {
  en: {
    metaTitle: "AM Developers — Web Developer Collective",
    metaDescription: "AM Developers creates fast, modern and responsive websites with clean code, polished interfaces and seamless CMS integration.",
    skip: "Skip to content",
    navHome: "Home",
    navAbout: "About",
    navProjects: "Projects",
    navContact: "Contact",
    heroIntro: "Hello, we are",
    heroSubtitle: "Web Developer Collective",
    heroCopy: "We specialize in creating high-performance web interfaces, paying attention to every detail of the code. Our team ensures seamless adaptability to any device, integration with modern content management systems, and loading speed optimization, so your project runs fast, stable, and delivers results from day one.",
    viewProjects: "View Our Projects",
    contactUs: "Contact Us",
    aboutTitle: "About Us",
    aboutLead: "We build modern websites where aesthetics meet flawless code. Our priority is user experience and fast loading.",
    aboutCopy: "Transparent development process: you always know what stage your project is at. Our team works in sync, guaranteeing results that exceed expectations.",
    timeManagement: "Time Management",
    adaptability: "Adaptability",
    problemSolving: "Problem Solving",
    creativity: "Creativity",
    projectsTitle: "Our Projects",
    projectsHint: "Selected examples of our work.",
    project1Title: "Fibonacci Generator",
    project1Copy: "A tool for generating Fibonacci sequences and performing fast mathematical calculations.",
    project2Title: "Rock-Paper-Scissors",
    project2Copy: "A simple game where the user competes against the computer by choosing rock, paper, or scissors.",
    project3Title: "Matrix Calculator",
    project3Copy: "A tool for matrix operations including addition, multiplication, and transformations.",
    project4Title: "Gold Dental",
    project4Copy: "A dental service for treatment, prosthetics, and high-end cosmetic dentistry.",
    addProjectImage: "Add project image",
    viewProject: "View Project",
    contactTitle: "Contact Us",
    emailLabel: "Email:",
    sendEmail: "Write in Gmail",
    formTitle: "Tell us about your project",
    formIntro: "Fill in the form and your request will be sent to our Gmail inbox.",
    firstNameLabel: "First name",
    lastNameLabel: "Last name",
    phoneLabel: "Phone number",
    clientEmailLabel: "Email",
    reasonLabel: "Reason for contacting us",
    questionLabel: "Question or project details",
    firstNamePlaceholder: "Your first name",
    lastNamePlaceholder: "Your last name",
    phonePlaceholder: "+994 00 000 00 00",
    emailPlaceholder: "name@example.com",
    reasonPlaceholder: "Choose a reason",
    reasonWebsite: "Website development",
    reasonRedesign: "Website redesign",
    reasonSupport: "Technical support",
    reasonPartnership: "Partnership",
    reasonOther: "Other",
    questionPlaceholder: "Tell us what you would like to create or ask",
    cancel: "Cancel",
    submitRequest: "Send request",
    sending: "Sending…",
    formSuccess: "Your request has been sent. We will contact you soon.",
    formError: "The request could not be sent. Please try again or write to us in Gmail.",
    formInvalid: "Please fill in all required fields correctly.",
    rights: "All rights reserved.",
    backTop: "Back to top",
    themeLight: "Switch to light theme",
    themeDark: "Switch to dark theme",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    formOpen: "Open contact form",
    formClose: "Close contact form",
    languageChanged: "Language changed"
  },
  ru: {
    metaTitle: "AM Developers — команда веб-разработчиков",
    metaDescription: "AM Developers создаёт быстрые, современные и адаптивные сайты с чистым кодом, продуманными интерфейсами и интеграцией CMS.",
    skip: "Перейти к содержимому",
    navHome: "Главная",
    navAbout: "О нас",
    navProjects: "Проекты",
    navContact: "Контакты",
    heroIntro: "Здравствуйте, мы —",
    heroSubtitle: "Команда веб-разработчиков",
    heroCopy: "Мы специализируемся на создании высокопроизводительных веб-интерфейсов, уделяя внимание каждой детали кода. Наша команда обеспечивает идеальную адаптацию под любые устройства, интеграцию с современными системами управления контентом и оптимизацию скорости загрузки, чтобы ваш проект с первого дня работал быстро, стабильно и приносил результат.",
    viewProjects: "Посмотреть проекты",
    contactUs: "Связаться с нами",
    aboutTitle: "О нас",
    aboutLead: "Мы создаём современные сайты, в которых эстетика сочетается с безупречным кодом. Наш приоритет — удобство пользователя и быстрая загрузка.",
    aboutCopy: "Прозрачный процесс разработки: вы всегда знаете, на каком этапе находится ваш проект. Наша команда работает слаженно и гарантирует результат, превосходящий ожидания.",
    timeManagement: "Управление временем",
    adaptability: "Адаптивность",
    problemSolving: "Решение задач",
    creativity: "Креативность",
    projectsTitle: "Наши проекты",
    projectsHint: "Избранные примеры наших работ.",
    project1Title: "Генератор Фибоначчи",
    project1Copy: "Инструмент для генерации последовательностей Фибоначчи и быстрых математических вычислений.",
    project2Title: "Камень, ножницы, бумага",
    project2Copy: "Простая игра, в которой пользователь соревнуется с компьютером, выбирая камень, ножницы или бумагу.",
    project3Title: "Матричный калькулятор",
    project3Copy: "Инструмент для операций с матрицами, включая сложение, умножение и преобразования.",
    project4Title: "Gold Dental",
    project4Copy: "Стоматологический сервис для лечения, протезирования и эстетической стоматологии премиум-класса.",
    addProjectImage: "Добавьте изображение проекта",
    viewProject: "Открыть проект",
    contactTitle: "Свяжитесь с нами",
    emailLabel: "Почта:",
    sendEmail: "Написать в Gmail",
    formTitle: "Расскажите о вашем проекте",
    formIntro: "Заполните форму — заявка будет отправлена на нашу почту Gmail.",
    firstNameLabel: "Имя",
    lastNameLabel: "Фамилия",
    phoneLabel: "Номер телефона",
    clientEmailLabel: "Электронная почта",
    reasonLabel: "Причина обращения",
    questionLabel: "Вопрос или описание проекта",
    firstNamePlaceholder: "Ваше имя",
    lastNamePlaceholder: "Ваша фамилия",
    phonePlaceholder: "+994 00 000 00 00",
    emailPlaceholder: "name@example.com",
    reasonPlaceholder: "Выберите причину",
    reasonWebsite: "Разработка сайта",
    reasonRedesign: "Редизайн сайта",
    reasonSupport: "Техническая поддержка",
    reasonPartnership: "Сотрудничество",
    reasonOther: "Другое",
    questionPlaceholder: "Опишите, что вы хотите создать, или задайте вопрос",
    cancel: "Отмена",
    submitRequest: "Отправить заявку",
    sending: "Отправка…",
    formSuccess: "Заявка отправлена. Мы скоро свяжемся с вами.",
    formError: "Не удалось отправить заявку. Попробуйте ещё раз или напишите нам через Gmail.",
    formInvalid: "Правильно заполните все обязательные поля.",
    rights: "Все права защищены.",
    backTop: "Наверх",
    themeLight: "Включить светлую тему",
    themeDark: "Включить тёмную тему",
    menuOpen: "Открыть меню",
    menuClose: "Закрыть меню",
    formOpen: "Открыть форму связи",
    formClose: "Закрыть форму связи",
    languageChanged: "Язык изменён"
  },
  zh: {
    metaTitle: "AM Developers — 网页开发团队",
    metaDescription: "AM Developers 专注于打造快速、现代、响应式的网站，提供简洁代码、精致界面与无缝 CMS 集成。",
    skip: "跳到主要内容",
    navHome: "首页",
    navAbout: "关于我们",
    navProjects: "项目",
    navContact: "联系方式",
    heroIntro: "你好，我们是",
    heroSubtitle: "网页开发团队",
    heroCopy: "我们专注于打造高性能网页界面，重视代码中的每一个细节。团队确保网站无缝适配各种设备、集成现代内容管理系统并优化加载速度，让您的项目从第一天起就快速、稳定并产生实际成果。",
    viewProjects: "查看我们的项目",
    contactUs: "联系我们",
    aboutTitle: "关于我们",
    aboutLead: "我们打造现代网站，让美学与严谨代码完美融合。我们优先关注用户体验与快速加载。",
    aboutCopy: "透明的开发流程：您始终清楚项目所处的阶段。我们的团队高效协作，确保成果超越预期。",
    timeManagement: "时间管理",
    adaptability: "适应能力",
    problemSolving: "问题解决",
    creativity: "创造力",
    projectsTitle: "我们的项目",
    projectsHint: "精选作品案例。",
    project1Title: "斐波那契生成器",
    project1Copy: "用于生成斐波那契数列并进行快速数学计算的工具。",
    project2Title: "石头剪刀布",
    project2Copy: "一款简单游戏，用户通过选择石头、剪刀或布与电脑对战。",
    project3Title: "矩阵计算器",
    project3Copy: "用于矩阵加法、乘法和变换等操作的工具。",
    project4Title: "Gold Dental",
    project4Copy: "提供治疗、修复以及高端美容牙科服务的网站。",
    addProjectImage: "添加项目图片",
    viewProject: "查看项目",
    contactTitle: "联系我们",
    emailLabel: "邮箱：",
    sendEmail: "在 Gmail 中写信",
    formTitle: "介绍您的项目",
    formIntro: "填写表单后，您的请求将发送到我们的 Gmail 邮箱。",
    firstNameLabel: "名字",
    lastNameLabel: "姓氏",
    phoneLabel: "电话号码",
    clientEmailLabel: "电子邮箱",
    reasonLabel: "联系原因",
    questionLabel: "问题或项目详情",
    firstNamePlaceholder: "您的名字",
    lastNamePlaceholder: "您的姓氏",
    phonePlaceholder: "+994 00 000 00 00",
    emailPlaceholder: "name@example.com",
    reasonPlaceholder: "选择原因",
    reasonWebsite: "网站开发",
    reasonRedesign: "网站改版",
    reasonSupport: "技术支持",
    reasonPartnership: "合作",
    reasonOther: "其他",
    questionPlaceholder: "请描述您想创建的内容或提出问题",
    cancel: "取消",
    submitRequest: "发送请求",
    sending: "正在发送…",
    formSuccess: "您的请求已发送。我们会尽快与您联系。",
    formError: "发送失败。请重试或通过 Gmail 联系我们。",
    formInvalid: "请正确填写所有必填字段。",
    rights: "保留所有权利。",
    backTop: "返回顶部",
    themeLight: "切换到浅色主题",
    themeDark: "切换到深色主题",
    menuOpen: "打开菜单",
    menuClose: "关闭菜单",
    formOpen: "打开联系表单",
    formClose: "关闭联系表单",
    languageChanged: "语言已切换"
  }
};

const html = document.documentElement;
const header = document.querySelector(".site-header");
const themeToggle = document.getElementById("themeToggle");
const languagePicker = document.getElementById("languagePicker");
const languageButton = document.getElementById("languageButton");
const languageCurrent = document.getElementById("languageCurrent");
const languageMenu = document.getElementById("languageMenu");
const languageOptions = [...document.querySelectorAll(".language-option")];
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const toast = document.getElementById("toast");
const year = document.getElementById("year");
const metaDescription = document.querySelector('meta[name="description"]');
const contactDialog = document.getElementById("contactDialog");
const contactDialogClose = document.getElementById("contactDialogClose");
const contactCancel = document.getElementById("contactCancel");
const contactForm = document.getElementById("contactForm");
const formSubmit = document.getElementById("formSubmit");
const formStatus = document.getElementById("formStatus");
let toastTimer;
let lastFocusedElement = null;

function safeStorageGet(key, fallback = null) {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch (_) {
    return fallback;
  }
}

function safeStorageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (_) {}
}

const getLanguage = () => safeStorageGet("am-language", "en");
const getDictionary = () => translations[getLanguage()] || translations.en;

function showToast(message) {
  clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = setTimeout(() => toast.classList.remove("is-visible"), 1800);
}

function applyLanguage(language, announce = false) {
  const lang = translations[language] ? language : "en";
  const dictionary = translations[lang];

  html.lang = lang === "zh" ? "zh-CN" : lang;
  document.title = dictionary.metaTitle;
  metaDescription?.setAttribute("content", dictionary.metaDescription);
  languageCurrent.textContent = lang === "zh" ? "中文" : lang.toUpperCase();
  languageOptions.forEach((option) => {
    const active = option.dataset.language === lang;
    option.classList.toggle("is-active", active);
    option.setAttribute("aria-checked", String(active));
  });

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) node.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    if (dictionary[key]) node.setAttribute("placeholder", dictionary[key]);
  });

  safeStorageSet("am-language", lang);
  updateControlLabels();
  if (announce) showToast(dictionary.languageChanged);
}

function updateControlLabels() {
  const dictionary = getDictionary();
  const isDark = html.dataset.theme === "dark";
  themeToggle.setAttribute("aria-label", isDark ? dictionary.themeLight : dictionary.themeDark);
  themeToggle.title = isDark ? dictionary.themeLight : dictionary.themeDark;
  menuButton.setAttribute("aria-label", menuButton.getAttribute("aria-expanded") === "true" ? dictionary.menuClose : dictionary.menuOpen);
  contactDialogClose.setAttribute("aria-label", dictionary.formClose);
  document.querySelectorAll("[data-open-contact]").forEach((button) => button.setAttribute("aria-label", dictionary.formOpen));
  languageButton.setAttribute("aria-label", `Language: ${languageCurrent.textContent}`);
}

function setTheme(theme) {
  const nextTheme = theme === "light" ? "light" : "dark";
  html.dataset.theme = nextTheme;
  safeStorageSet("am-theme", nextTheme);
  document.querySelector('meta[name="theme-color"]')?.setAttribute("content", nextTheme === "dark" ? "#070807" : "#f4f5f2");
  updateControlLabels();
}

function closeMenu() {
  menuButton.setAttribute("aria-expanded", "false");
  mobileMenu.hidden = true;
  document.body.classList.remove("menu-open");
  updateControlLabels();
}

function openMenu() {
  menuButton.setAttribute("aria-expanded", "true");
  mobileMenu.hidden = false;
  document.body.classList.add("menu-open");
  updateControlLabels();
}

function closeLanguageMenu({ restoreFocus = false } = {}) {
  languageButton.setAttribute("aria-expanded", "false");
  languageMenu.hidden = true;
  if (restoreFocus) languageButton.focus();
}

function openLanguageMenu() {
  closeMenu();
  languageButton.setAttribute("aria-expanded", "true");
  languageMenu.hidden = false;
  const activeOption = languageOptions.find((option) => option.classList.contains("is-active"));
  requestAnimationFrame(() => activeOption?.focus());
}

function toggleLanguageMenu() {
  const isOpen = languageButton.getAttribute("aria-expanded") === "true";
  isOpen ? closeLanguageMenu() : openLanguageMenu();
}

function openContactDialog(trigger) {
  lastFocusedElement = trigger || document.activeElement;
  formStatus.textContent = "";
  formStatus.className = "form-status";
  document.body.classList.add("dialog-open");

  if (typeof contactDialog.showModal === "function") {
    contactDialog.showModal();
  } else {
    contactDialog.setAttribute("open", "");
  }

  requestAnimationFrame(() => contactForm.querySelector("input:not([type='hidden'])")?.focus());
}

function closeContactDialog() {
  if (typeof contactDialog.close === "function" && contactDialog.open) {
    contactDialog.close();
  } else {
    contactDialog.removeAttribute("open");
  }
  document.body.classList.remove("dialog-open");
  lastFocusedElement?.focus?.();
}

function setFormStatus(message, type = "") {
  formStatus.textContent = message;
  formStatus.className = `form-status${type ? ` is-${type}` : ""}`;
}

function validateForm() {
  const fields = [...contactForm.querySelectorAll("input[required], select[required], textarea[required]")];
  fields.forEach((field) => field.setAttribute("aria-invalid", field.validity.valid ? "false" : "true"));
  return contactForm.checkValidity();
}

themeToggle.addEventListener("click", () => {
  closeLanguageMenu();
  setTheme(html.dataset.theme === "dark" ? "light" : "dark");
});

languageButton.addEventListener("click", toggleLanguageMenu);

languageOptions.forEach((option) => {
  option.addEventListener("click", () => {
    applyLanguage(option.dataset.language, true);
    closeLanguageMenu({ restoreFocus: true });
  });
});

languageMenu.addEventListener("keydown", (event) => {
  const currentIndex = languageOptions.indexOf(document.activeElement);
  if (event.key === "ArrowDown" || event.key === "ArrowUp") {
    event.preventDefault();
    const direction = event.key === "ArrowDown" ? 1 : -1;
    const nextIndex = (currentIndex + direction + languageOptions.length) % languageOptions.length;
    languageOptions[nextIndex].focus();
  }
  if (event.key === "Home") {
    event.preventDefault();
    languageOptions[0].focus();
  }
  if (event.key === "End") {
    event.preventDefault();
    languageOptions.at(-1).focus();
  }
  if (event.key === "Escape") {
    event.preventDefault();
    closeLanguageMenu({ restoreFocus: true });
  }
});

menuButton.addEventListener("click", () => {
  closeLanguageMenu();
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  expanded ? closeMenu() : openMenu();
});

mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

document.querySelectorAll("[data-open-contact]").forEach((button) => {
  button.addEventListener("click", () => openContactDialog(button));
});

contactDialogClose.addEventListener("click", closeContactDialog);
contactCancel.addEventListener("click", closeContactDialog);
contactDialog.addEventListener("cancel", (event) => {
  event.preventDefault();
  closeContactDialog();
});
contactDialog.addEventListener("click", (event) => {
  if (event.target === contactDialog) closeContactDialog();
});
contactDialog.addEventListener("close", () => {
  document.body.classList.remove("dialog-open");
});

contactForm.querySelectorAll("input, select, textarea").forEach((field) => {
  field.addEventListener("input", () => field.removeAttribute("aria-invalid"));
  field.addEventListener("change", () => field.removeAttribute("aria-invalid"));
});

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const dictionary = getDictionary();

  if (!validateForm()) {
    setFormStatus(dictionary.formInvalid, "error");
    contactForm.reportValidity();
    return;
  }

  formSubmit.disabled = true;
  formSubmit.querySelector("span").textContent = dictionary.sending;
  setFormStatus("");

  const formData = new FormData(contactForm);
  const payload = Object.fromEntries(formData.entries());
  payload._replyto = payload.email;
  payload._captcha = "false";

  try {
    const response = await fetch("https://formsubmit.co/ajax/amdevelopersgroup@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(payload)
    });

    const result = await response.json().catch(() => ({}));
    if (!response.ok || result.success === "false" || result.success === false) {
      throw new Error(result.message || "Form submission failed");
    }

    setFormStatus(dictionary.formSuccess, "success");
    contactForm.reset();
    contactForm.querySelectorAll("[aria-invalid]").forEach((field) => field.removeAttribute("aria-invalid"));
    setTimeout(closeContactDialog, 1800);
  } catch (error) {
    console.error(error);
    setFormStatus(dictionary.formError, "error");
  } finally {
    formSubmit.disabled = false;
    formSubmit.querySelector("span").textContent = dictionary.submitRequest;
  }
});

document.addEventListener("click", (event) => {
  if (!mobileMenu.hidden && !mobileMenu.contains(event.target) && !menuButton.contains(event.target)) closeMenu();
  if (!languageMenu.hidden && !languagePicker.contains(event.target)) closeLanguageMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!languageMenu.hidden) {
    closeLanguageMenu({ restoreFocus: true });
    return;
  }
  if (!contactDialog.open) closeMenu();
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1000) closeMenu();
  closeLanguageMenu();
});

window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
}, { passive: true });

const revealElements = [...document.querySelectorAll(".reveal")];

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -30px" });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const sections = [...document.querySelectorAll("main section[id]")];
const desktopLinks = [...document.querySelectorAll(".desktop-nav .nav-link")];

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    const visible = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    desktopLinks.forEach((link) => link.classList.toggle("is-active", link.getAttribute("href") === `#${visible.target.id}`));
  }, { threshold: [0.25, 0.5, 0.7], rootMargin: "-25% 0px -55%" });

  sections.forEach((section) => sectionObserver.observe(section));
}

document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    event.preventDefault();
    closeMenu();
    target.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
    history.replaceState(null, "", link.getAttribute("href"));
  });
});

year.textContent = new Date().getFullYear();
setTheme(html.dataset.theme);
applyLanguage(getLanguage());
header.classList.toggle("is-scrolled", window.scrollY > 20);
