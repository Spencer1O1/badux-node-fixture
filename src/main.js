import "./style.css";

const stage = document.querySelector("#stage");
const steps = [...document.querySelectorAll(".steps li")];
let applicantName = "";
let title = "The Esteemed";

function showStep(index, content) {
  steps.forEach((step, position) => {
    step.classList.toggle("active", position === index);
    if (position === index) step.setAttribute("aria-current", "step");
    else step.removeAttribute("aria-current");
  });
  stage.innerHTML = content;
  stage.querySelector("h2").focus();
}

function showName() {
  showStep(
    0,
    `
    <p class="eyebrow">FIRST, THE EASY PART</p>
    <h2 id="step-title" tabindex="-1">What shall we call you?</h2>
    <p class="instruction">Your name, as you would like it to appear in a completely unnecessary ceremony.</p>
    <label for="name">Name awaiting recognition</label>
    <input id="name" type="text" maxlength="60" autocomplete="off" placeholder="e.g. Captain Waffle" aria-describedby="name-note error" />
    <p id="name-note" class="hint">Up to 60 characters. Even our bureaucracy has limits.</p>
    <p id="error" class="error" role="alert"></p>
    <button id="continue" type="button">Request preliminary consideration <span aria-hidden="true">→</span></button>
    <p class="microcopy">This is not yet an application for approval. That would be hasty.</p>
  `,
  );
  const input = document.querySelector("#name");
  input.value = applicantName;
  document.querySelector("#continue").addEventListener("click", () => {
    applicantName = input.value.trim();
    if (!applicantName) {
      document.querySelector("#error").textContent =
        "The Commission cannot ceremonially recognize a blank space.";
      input.focus();
      return;
    }
    showPrestige();
  });
  input.addEventListener("keydown", (event) => {
    if (event.key === "Enter") document.querySelector("#continue").click();
  });
}

function showPrestige() {
  showStep(
    1,
    `
    <p class="eyebrow">A SMALL BUT MANDATORY DETOUR</p>
    <h2 id="step-title" tabindex="-1">Your name lacks prestige.</h2>
    <p class="instruction">Not your fault. Most names arrive without the appropriate decorative preamble.</p>
    <label for="title">Choose an entirely unearned honorific</label>
    <select id="title"><option>The Esteemed</option><option>Supreme Assistant to</option><option>By Appointment, Allegedly,</option><option>The Moderately Impressive</option></select>
    <label class="pledge"><input id="pledge" type="checkbox" /> <span>I understand that this title grants absolutely no parking privileges.</span></label>
    <button id="ratify" type="button" disabled>Convene the naming committee <span aria-hidden="true">→</span></button>
    <button id="back" class="text-button" type="button">Reconsider my entire identity</button>
  `,
  );
  document.querySelector("#title").value = title;
  document.querySelector("#pledge").addEventListener("change", (event) => {
    document.querySelector("#ratify").disabled = !event.target.checked;
  });
  document.querySelector("#ratify").addEventListener("click", () => {
    title = document.querySelector("#title").value;
    showApproval();
  });
  document.querySelector("#back").addEventListener("click", showName);
}

function showApproval() {
  showStep(
    2,
    `
    <p class="eyebrow">THE COMMITTEE HAS SPOKEN</p>
    <h2 id="step-title" tabindex="-1">Provisionally magnificent.</h2>
    <p class="instruction">After zero deliberation, we are delighted to recognize:</p>
    <div class="certificate"><span class="certificate-label">CERTIFICATE OF HAVING A NAME</span><p id="approved-title"></p><strong id="approved-name"></strong><span class="stamp">NAME APPROVED*</span></div>
    <p class="hint">*Approval is ceremonial, non-transferable, and expires when you refresh.</p>
    <button id="restart" type="button">I have another name to overcomplicate <span aria-hidden="true">↻</span></button>
    <p class="microcopy">Thank you for making a two-second task into an occasion.</p>
  `,
  );
  document.querySelector("#approved-title").textContent = title;
  document.querySelector("#approved-name").textContent = applicantName;
  document.querySelector("#restart").addEventListener("click", () => {
    applicantName = "";
    showName();
  });
}

showName();
