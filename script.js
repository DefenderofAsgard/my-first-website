const RESUME_FORMSPREE_ENDPOINT = "https://formspree.io/f/xgogkwvl";
const CONTACT_FORMSPREE_ENDPOINT = "https://formspree.io/f/xgogkjyk";
const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzs0tAOexVeNXOHfmTw7AvEfVgzeXeBhknTN3zYdexuHWvSMoKmiqV-dX8Zj7B7UCoJ/exec";

function logToSheet(form) {
  const data = Object.fromEntries(new FormData(form));
  fetch(APPS_SCRIPT_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify(data),
  }).catch(() => {});
}

const resumeForm = document.getElementById("resume-form");
const resumeError = document.getElementById("resume-error");
const resumeDownload = document.getElementById("resume-download");

resumeForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  resumeError.hidden = true;

  const submitButton = resumeForm.querySelector("button");
  submitButton.disabled = true;
  submitButton.textContent = "Submitting...";

  try {
    const response = await fetch(RESUME_FORMSPREE_ENDPOINT, {
      method: "POST",
      body: new FormData(resumeForm),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      logToSheet(resumeForm);
      resumeForm.hidden = true;
      resumeDownload.hidden = false;
    } else {
      throw new Error("Form submission failed");
    }
  } catch (err) {
    resumeError.hidden = false;
    submitButton.disabled = false;
    submitButton.textContent = "Unlock Resume";
  }
});

const contactForm = document.getElementById("contact-form");
const contactError = document.getElementById("contact-error");
const contactSuccess = document.getElementById("contact-success");

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  contactError.hidden = true;
  contactSuccess.hidden = true;

  const submitButton = contactForm.querySelector("button");
  submitButton.disabled = true;
  submitButton.textContent = "Sending...";

  try {
    const response = await fetch(CONTACT_FORMSPREE_ENDPOINT, {
      method: "POST",
      body: new FormData(contactForm),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      logToSheet(contactForm);
      contactForm.reset();
      contactSuccess.hidden = false;
    } else {
      throw new Error("Form submission failed");
    }
  } catch (err) {
    contactError.hidden = false;
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Send";
  }
});
