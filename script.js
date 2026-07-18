const FORMSPREE_ENDPOINT = "https://formspree.io/f/xgogkwvl";

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
    const response = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      body: new FormData(resumeForm),
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
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
