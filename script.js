const profiles = [
  {
    name: "Mindable: Panic & Agoraphobia",
    manufacturer: "Mindable Health GmbH",
    track: "DiGA (BfArM)",
    status: "Listed DiGA",
    lens: "Digital Therapeutics",
    audience: "Patients, physicians",
    customerType: "Patients",
    useCase: "Prescription-oriented support for panic disorder and agoraphobia.",
    description:
      "A DiGA profile that helps map the mental-health segment of Germany's regulated digital therapeutics market.",
    tags: ["Mental health", "Anxiety", "BfArM"],
    source: "https://diga.bfarm.de/de/verzeichnis/00329",
    checked: "BfArM registry",
  },
  {
    name: "Kaia Back Pain",
    manufacturer: "kaia health software GmbH",
    track: "DiGA (BfArM)",
    status: "Listed DiGA",
    lens: "Digital Therapeutics",
    audience: "Patients, physicians, payers",
    customerType: "Patients",
    useCase: "Digital back pain training and self-management.",
    description:
      "A musculoskeletal DiGA example showing how software-based interventions can support high-burden chronic care areas.",
    tags: ["MSK", "Pain", "BfArM"],
    source: "https://diga.bfarm.de/de/verzeichnis/01330",
    checked: "BfArM registry",
  },
  {
    name: "Oviva Direkt for Obesity",
    manufacturer: "Oviva AG, German branch",
    track: "DiGA (BfArM)",
    status: "Listed DiGA",
    lens: "Metabolic Health",
    audience: "Patients, physicians, payers",
    customerType: "Patients",
    useCase: "Digital support for obesity care and behavior change.",
    description:
      "A DiGA profile in metabolic care, useful for scouting reimbursement-backed digital interventions for chronic conditions.",
    tags: ["Obesity", "Lifestyle", "BfArM"],
    source: "https://diga.bfarm.de/de/verzeichnis/00872",
    checked: "BfArM registry",
  },
  {
    name: "HelloBetter Diabetes",
    manufacturer: "GET.ON Institut fuer Online Gesundheitstrainings GmbH",
    track: "DiGA (BfArM)",
    status: "Listed DiGA",
    lens: "Metabolic Health",
    audience: "Patients, physicians",
    customerType: "Patients",
    useCase: "Digital psychological support in diabetes care.",
    description:
      "A chronic-care DiGA example where behavioral health, metabolic disease, and digital treatment support overlap.",
    tags: ["Diabetes", "Behavioral health", "BfArM"],
    source: "https://diga.bfarm.de/de/verzeichnis/01376",
    checked: "BfArM registry",
  },
  {
    name: "Selfapy Online Course for Depression",
    manufacturer: "Selfapy GmbH",
    track: "DiGA (BfArM)",
    status: "Listed DiGA",
    lens: "Digital Therapeutics",
    audience: "Patients, physicians",
    customerType: "Patients",
    useCase: "Digital mental health support for depressive disorders.",
    description:
      "A mental-health DiGA profile that makes evidence, access, and reimbursement questions visible in one market segment.",
    tags: ["Depression", "Mental health", "BfArM"],
    source: "https://diga.bfarm.de/de/verzeichnis/00876",
    checked: "BfArM registry",
  },
  {
    name: "Kranus Edera",
    manufacturer: "Kranus Health GmbH",
    track: "DiGA (BfArM)",
    status: "Listed DiGA",
    lens: "Urology & Men's Health",
    audience: "Patients, physicians",
    customerType: "Patients",
    useCase: "Digital support for erectile dysfunction care.",
    description:
      "A regulated digital health example in urology, useful for understanding condition-specific DiGA positioning.",
    tags: ["Urology", "Men's health", "BfArM"],
    source: "https://diga.bfarm.de/de/verzeichnis/01282",
    checked: "BfArM registry",
  },
  {
    name: "Endo-App",
    manufacturer: "Endo Health GmbH",
    track: "DiGA (BfArM)",
    status: "Listed DiGA",
    lens: "Women's Health",
    audience: "Patients, physicians",
    customerType: "Patients",
    useCase: "Digital support for endometriosis.",
    description:
      "A women's-health DiGA profile showing how regulated apps can target care gaps around chronic and under-served conditions.",
    tags: ["Endometriosis", "Women's health", "BfArM"],
    source: "https://diga.bfarm.de/de/verzeichnis/01734",
    checked: "BfArM registry",
  },
  {
    name: "Invirto",
    manufacturer: "Sympatient GmbH",
    track: "DiGA (BfArM)",
    status: "Listed DiGA",
    lens: "Digital Therapeutics",
    audience: "Patients, physicians",
    customerType: "Patients",
    useCase: "Digital therapy support for anxiety disorders.",
    description:
      "A DiGA profile useful for comparing mental-health approaches, target indications, and patient-facing delivery models.",
    tags: ["Anxiety", "VR support", "BfArM"],
    source: "https://diga.bfarm.de/de/verzeichnis/00300",
    checked: "BfArM registry",
  },
  {
    name: "PINK! Coach",
    manufacturer: "PINK gegen Brustkrebs GmbH",
    track: "DiGA (BfArM)",
    status: "Listed DiGA",
    lens: "Oncology Support",
    audience: "Patients, physicians",
    customerType: "Patients",
    useCase: "Digital support for people affected by breast cancer.",
    description:
      "An oncology-support DiGA profile that connects patient education, daily support, and regulated app reimbursement.",
    tags: ["Oncology", "Breast cancer", "BfArM"],
    source: "https://diga.bfarm.de/de/verzeichnis/01464",
    checked: "BfArM registry",
  },
  {
    name: "ProHerz",
    manufacturer: "ProCarement GmbH",
    track: "DiGA (BfArM)",
    status: "Listed DiGA",
    lens: "Cardiometabolic Care",
    audience: "Patients, physicians",
    customerType: "Patients",
    useCase: "Digital support in heart failure-related care.",
    description:
      "A DiGA profile that points toward demand for remote support, chronic-care pathways, and cardiology-adjacent services.",
    tags: ["Cardiology", "Chronic care", "BfArM"],
    source: "https://diga.bfarm.de/de/verzeichnis/01823",
    checked: "BfArM registry",
  },
  {
    name: "eCovery Lower Back Pain",
    manufacturer: "eCovery GmbH",
    track: "DiGA (BfArM)",
    status: "Preliminary DiGA",
    lens: "Digital Therapeutics",
    audience: "Patients, physicians",
    customerType: "Patients",
    useCase: "Digital therapy support for lower back pain.",
    description:
      "A preliminary DiGA profile included to show that the scout can track new regulated applications as the market develops.",
    tags: ["MSK", "Preliminary", "BfArM"],
    source: "https://diga.bfarm.de/de/verzeichnis/02173",
    checked: "BfArM registry",
  },
  {
    name: "memodio",
    manufacturer: "memodio GmbH",
    track: "DiGA (BfArM)",
    status: "Preliminary DiGA",
    lens: "Neurology & Cognition",
    audience: "Patients, physicians",
    customerType: "Patients",
    useCase: "Digital support in cognitive health.",
    description:
      "A preliminary DiGA example that helps monitor where future regulated digital health applications may expand.",
    tags: ["Cognition", "Preliminary", "BfArM"],
    source: "https://diga.bfarm.de/de/verzeichnis/02866",
    checked: "BfArM registry",
  },
  {
    name: "coobi",
    manufacturer: "Cubic Zircalloy GmbH",
    track: "Adjacent healthtech",
    status: "Non-DiGA context",
    lens: "Addiction Care & Aftercare",
    audience: "Patients, clinics, therapists",
    customerType: "Providers",
    useCase: "Digital addiction treatment and recovery support.",
    description:
      "Adjacent digital health company included as a practical example around therapy, rehabilitation, aftercare, and patient monitoring workflows.",
    tags: ["Addiction care", "Aftercare", "Monitoring"],
    source: "https://coobi.health/de",
    checked: "Public source",
  },
  {
    name: "AMBOSS",
    manufacturer: "AMBOSS GmbH",
    track: "Adjacent healthtech",
    status: "Non-DiGA context",
    lens: "Clinical Knowledge",
    audience: "Clinicians, students, institutions",
    customerType: "Clinical teams",
    useCase: "Medical knowledge and clinical decision support.",
    description:
      "Adjacent healthtech profile showing the professional knowledge layer around digital healthcare delivery.",
    tags: ["Clinical knowledge", "Education", "AI support"],
    source: "https://www.amboss.com/de",
    checked: "Public source",
  },
  {
    name: "m.Doc",
    manufacturer: "m.Doc GmbH",
    track: "Adjacent healthtech",
    status: "Non-DiGA context",
    lens: "Hospital Workflow",
    audience: "Hospitals, clinics, patients",
    customerType: "Providers",
    useCase: "Patient portal and cross-sector care communication.",
    description:
      "Adjacent provider software profile that connects the DiGA market to hospital, patient portal, and care-navigation workflows.",
    tags: ["Patient portal", "Hospital workflow", "Interoperability"],
    source: "https://www.mdoc.one/en/",
    checked: "Public source",
  },
  {
    name: "Temedica",
    manufacturer: "Temedica GmbH",
    track: "Adjacent healthtech",
    status: "Non-DiGA context",
    lens: "Real-World Evidence",
    audience: "Pharma, medical, commercial teams",
    customerType: "Pharma",
    useCase: "Health insights and patient journey analytics.",
    description:
      "Adjacent data and evidence profile showing how real-world insights can complement regulated digital health market research.",
    tags: ["RWE", "Pharma", "Patient journey"],
    source: "https://temedica.com/",
    checked: "Public source",
  },
  {
    name: "Famedly",
    manufacturer: "Famedly GmbH",
    track: "Adjacent healthtech",
    status: "Non-DiGA context",
    lens: "Health IT Infrastructure",
    audience: "Hospitals, practices, care providers",
    customerType: "Providers",
    useCase: "Secure healthcare messaging and team communication.",
    description:
      "Adjacent infrastructure profile included to show how communication and interoperability shape digital healthcare adoption.",
    tags: ["TI messenger", "Secure communication", "Interoperability"],
    source: "https://www.famedly.com/",
    checked: "Public source",
  },
];

const useCases = [
  {
    title: "Mental Health DiGA",
    lens: "High-activity segment",
    description:
      "Applications for depression, anxiety, panic, sleep, stress, and related conditions. This is one of the clearest DiGA scouting areas.",
    examples: ["Mindable", "Selfapy", "Invirto", "HelloBetter"],
  },
  {
    title: "MSK & Rehabilitation",
    lens: "Burden reduction",
    description:
      "Digital therapeutics and exercise-oriented support for back pain, joint conditions, rehabilitation, and chronic musculoskeletal burden.",
    examples: ["Kaia", "eCovery", "Vivira", "Mawendo"],
  },
  {
    title: "Chronic & Metabolic Care",
    lens: "Long-term support",
    description:
      "DiGA products and adjacent solutions around obesity, diabetes, cardiology, and behavior change in chronic-care pathways.",
    examples: ["Oviva", "HelloBetter Diabetes", "ProHerz", "Vitadio"],
  },
  {
    title: "Specialized Care Areas",
    lens: "Condition-specific markets",
    description:
      "Focused regulated applications in women's health, oncology support, urology, neurology, tinnitus, and other indication-specific needs.",
    examples: ["Endo-App", "PINK! Coach", "Kranus", "memodio"],
  },
  {
    title: "Adjacent Digital Health",
    lens: "Market context",
    description:
      "Non-DiGA companies that help explain the wider ecosystem around access, provider workflows, clinical knowledge, infrastructure, and evidence.",
    examples: ["coobi", "m.Doc", "AMBOSS", "Temedica"],
  },
];

const companyGrid = document.querySelector("#companyGrid");
const useCaseGrid = document.querySelector("#useCaseGrid");
const companySearch = document.querySelector("#companySearch");
const lensFilter = document.querySelector("#lensFilter");
const audienceFilter = document.querySelector("#audienceFilter");
const trackFilter = document.querySelector("#trackFilter");
const resultCount = document.querySelector("#resultCount");
const resetFilters = document.querySelector("#resetFilters");
const emptyState = document.querySelector("#emptyState");

function uniqueValues(key) {
  return [...new Set(profiles.map((profile) => profile[key]))].sort();
}

function addOptions(select, values) {
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  });
}

function matchesProfile(profile, query) {
  const text = [
    profile.name,
    profile.manufacturer,
    profile.track,
    profile.status,
    profile.lens,
    profile.audience,
    profile.customerType,
    profile.useCase,
    profile.description,
    profile.tags.join(" "),
  ]
    .join(" ")
    .toLowerCase();

  return text.includes(query);
}

function renderProfiles() {
  const query = companySearch.value.trim().toLowerCase();
  const lens = lensFilter.value;
  const audience = audienceFilter.value;
  const track = trackFilter.value;

  const visible = profiles.filter((profile) => {
    const lensMatch = lens === "all" || profile.lens === lens;
    const audienceMatch = audience === "all" || profile.customerType === audience;
    const trackMatch = track === "all" || profile.track === track;
    const queryMatch = query === "" || matchesProfile(profile, query);
    return lensMatch && audienceMatch && trackMatch && queryMatch;
  });

  companyGrid.innerHTML = visible
    .map(
      (profile) => `
        <article class="company-card">
          <div>
            <p class="company-meta">${profile.track} · ${profile.status}</p>
            <h3>${profile.name}</h3>
            <p class="manufacturer">${profile.manufacturer}</p>
            <p><strong>${profile.useCase}</strong></p>
            <p>${profile.description}</p>
            <div class="tag-row">
              <span class="tag">${profile.lens}</span>
              ${profile.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
          </div>
          <div class="company-footer">
            <span class="company-source">${profile.checked}</span>
            <a href="${profile.source}" target="_blank" rel="noreferrer">Source</a>
          </div>
        </article>
      `
    )
    .join("");

  resultCount.textContent = visible.length === profiles.length ? "Selected profiles" : "Filtered profiles";
  emptyState.hidden = visible.length > 0;
}

function renderUseCases() {
  useCaseGrid.innerHTML = useCases
    .map(
      (useCase) => `
        <article class="use-case-card">
          <span>${useCase.lens}</span>
          <h3>${useCase.title}</h3>
          <p>${useCase.description}</p>
          <div class="tag-row">
            ${useCase.examples.map((example) => `<span class="tag">${example}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

function resetAllFilters() {
  companySearch.value = "";
  lensFilter.value = "all";
  audienceFilter.value = "all";
  trackFilter.value = "all";
  renderProfiles();
}

addOptions(lensFilter, uniqueValues("lens"));
addOptions(audienceFilter, uniqueValues("customerType"));
addOptions(trackFilter, uniqueValues("track"));

renderUseCases();
renderProfiles();

[companySearch, lensFilter, audienceFilter, trackFilter].forEach((control) => {
  control.addEventListener("input", renderProfiles);
});

resetFilters.addEventListener("click", resetAllFilters);
