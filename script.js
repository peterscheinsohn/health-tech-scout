const companies = [
  {
    name: "Ada Health",
    country: "Germany",
    lens: "Clinical AI & Triage",
    audience: "Patients, providers, payers",
    customerType: "Patients",
    maturity: "Scaleup",
    useCase: "Symptom assessment and care navigation",
    description:
      "Berlin-founded health technology company focused on intelligent symptom assessment, medical content, and digital-first care guidance.",
    tags: ["AI", "Triage", "Patient access"],
    source: "https://ada.com/",
    checked: "June 2026",
  },
  {
    name: "Kaia Health",
    country: "Germany / US",
    lens: "Digital Therapeutics",
    audience: "Employers, health plans, patients",
    customerType: "Payers / employers",
    maturity: "Scaleup",
    useCase: "Digital musculoskeletal care",
    description:
      "Digital-first care provider focused on joint and muscle pain, with programs positioned for employers, health plans, and individuals.",
    tags: ["MSK", "Remote care", "Outcomes"],
    source: "https://kaiahealth.com/",
    checked: "June 2026",
  },
  {
    name: "Temedica",
    country: "Germany",
    lens: "Real-World Evidence",
    audience: "Pharma, medical, commercial teams",
    customerType: "Pharma",
    maturity: "Growth",
    useCase: "Health insights and omnichannel engagement",
    description:
      "Munich-based company combining real-world insights, AI-enabled analytics, and compliant engagement solutions for pharma teams.",
    tags: ["RWE", "Pharma", "Patient journey"],
    source: "https://temedica.com/",
    checked: "June 2026",
  },
  {
    name: "Doctolib",
    country: "France / Germany",
    lens: "Care Access",
    audience: "Patients, providers",
    customerType: "Providers",
    maturity: "Established",
    useCase: "Appointment booking and provider access",
    description:
      "European healthcare access platform known for online appointment booking and digital tools connecting patients with care providers.",
    tags: ["Access", "Scheduling", "Provider software"],
    source: "https://www.doctolib.de/",
    checked: "June 2026",
  },
  {
    name: "TeleClinic",
    country: "Germany",
    lens: "Telemedicine",
    audience: "Patients, physicians, insurers",
    customerType: "Patients",
    maturity: "Established",
    useCase: "Online doctor consultations",
    description:
      "German telemedicine service offering digital access to physicians, video consultations, and related documents such as prescriptions or sick notes where appropriate.",
    tags: ["Telemedicine", "ePrescription", "Access"],
    source: "https://www.teleclinic.com/",
    checked: "June 2026",
  },
  {
    name: "Caspar Health",
    country: "Germany",
    lens: "Rehabilitation & Aftercare",
    audience: "Clinics, therapists, patients",
    customerType: "Providers",
    maturity: "Growth",
    useCase: "Digital rehabilitation and aftercare",
    description:
      "Berlin-based digital health company offering software and care models for prevention, rehabilitation, and aftercare workflows.",
    tags: ["Rehab", "Clinic workflow", "Patient support"],
    source: "https://www.caspar-health.com/",
    checked: "June 2026",
  },
  {
    name: "Mindable Health",
    country: "Germany",
    lens: "Digital Therapeutics",
    audience: "Patients, healthcare professionals",
    customerType: "Patients",
    maturity: "Growth",
    useCase: "Digital anxiety disorder support",
    description:
      "Digital mental health company offering apps for panic disorder, agoraphobia, and social anxiety, with a prescription-oriented model in Germany.",
    tags: ["Mental health", "DiGA", "Anxiety"],
    source: "https://www.mindable.health/",
    checked: "June 2026",
  },
  {
    name: "coobi",
    country: "Germany / DACH",
    lens: "Digital Therapeutics",
    audience: "Patients, clinics, therapists",
    customerType: "Providers",
    maturity: "Growth",
    useCase: "Digital addiction treatment and recovery support",
    description:
      "Digital health company offering coobi care for people affected by addiction disorders and coobi clinic for therapy, rehabilitation, aftercare, and patient monitoring workflows.",
    tags: ["Addiction care", "Aftercare", "Patient monitoring"],
    source: "https://coobi.health/de",
    checked: "June 2026",
  },
  {
    name: "AMBOSS",
    country: "Germany",
    lens: "Clinical Knowledge & AI",
    audience: "Clinicians, nurses, students, institutions",
    customerType: "Clinical teams",
    maturity: "Established",
    useCase: "Medical knowledge and clinical decision support",
    description:
      "Digital medical knowledge platform for clinicians, nurses, students, practices, and institutions, with AI-supported features positioned for medical learning and practice.",
    tags: ["Clinical knowledge", "Education", "AI support"],
    source: "https://www.amboss.com/de",
    checked: "June 2026",
  },
  {
    name: "m.Doc",
    country: "Germany",
    lens: "Hospital Workflow & Patient Portal",
    audience: "Hospitals, clinics, patients",
    customerType: "Providers",
    maturity: "Established",
    useCase: "Patient portal and cross-sector care communication",
    description:
      "Patient portal provider focused on digital patient communication before, during, and after hospital care, including integration with hospital information systems.",
    tags: ["Patient portal", "Hospital workflow", "Interoperability"],
    source: "https://www.mdoc.one/en/",
    checked: "June 2026",
  },
  {
    name: "samedi",
    country: "Germany",
    lens: "Practice & Clinic Software",
    audience: "Practices, MVZs, hospitals",
    customerType: "Providers",
    maturity: "Established",
    useCase: "Appointment management and patient workflow automation",
    description:
      "Software for practices, medical care centers, and clinics covering online appointment booking, resource planning, patient communication, digital forms, and video consultation workflows.",
    tags: ["Scheduling", "Patient communication", "Clinic operations"],
    source: "https://www.samedi.com/",
    checked: "June 2026",
  },
  {
    name: "Famedly",
    country: "Germany",
    lens: "Health IT Infrastructure",
    audience: "Hospitals, clinics, care providers, pharmacies",
    customerType: "Providers",
    maturity: "Growth",
    useCase: "Secure healthcare messaging",
    description:
      "TI messenger provider for secure and integrated communication across healthcare teams, hospitals, clinics, care services, practices, and pharmacies.",
    tags: ["TI messenger", "Secure communication", "Interoperability"],
    source: "https://www.famedly.com/",
    checked: "June 2026",
  },
  {
    name: "Nelly",
    country: "Germany",
    lens: "Practice Operations",
    audience: "Medical and dental practices",
    customerType: "Providers",
    maturity: "Growth",
    useCase: "Digital patient journey and practice administration",
    description:
      "Practice automation platform covering digital patient intake, document signing, payment workflows, billing support, and administrative process automation.",
    tags: ["Patient intake", "Billing", "Practice automation"],
    source: "https://www.getnelly.de/",
    checked: "June 2026",
  },
  {
    name: "XO Life",
    country: "Germany",
    lens: "Patient Support & Real-World Data",
    audience: "Pharma, patients, experts",
    customerType: "Pharma",
    maturity: "Growth",
    useCase: "Digital product and treatment support",
    description:
      "Digital platform connecting pharma and patients through treatment support, educational content, patient-reported insights, and pharmacovigilance-oriented workflows.",
    tags: ["Patient support", "Pharma", "PRO data"],
    source: "https://www.xo-life.com/",
    checked: "June 2026",
  },
  {
    name: "Climedo",
    country: "Germany",
    lens: "Clinical Research Software",
    audience: "Medtech, pharma, clinical teams",
    customerType: "Clinical teams",
    maturity: "Growth",
    useCase: "Digital clinical data capture",
    description:
      "Clinical data and evidence platform category entry reserved for a sourced profile covering ePRO, registries, and post-market evidence workflows.",
    tags: ["Clinical trials", "ePRO", "Evidence"],
    source: "https://www.climedo.com/",
    checked: "Needs final verification",
  },
];

const useCases = [
  {
    title: "Care Access & Navigation",
    lens: "Patient access",
    description:
      "Tools that help people find the right care channel, book appointments, understand urgency, or reach clinicians remotely.",
    examples: ["Doctolib", "TeleClinic", "Ada Health", "samedi"],
  },
  {
    title: "Digital Therapeutics",
    lens: "Treatment support",
    description:
      "Software-based interventions for defined conditions, often combining education, exercises, monitoring, and behavioral support.",
    examples: ["Kaia Health", "Mindable Health", "coobi"],
  },
  {
    title: "Hospital Workflow & Aftercare",
    lens: "Provider operations",
    description:
      "Solutions that reduce operational friction around discharge, rehabilitation, documentation, monitoring, and capacity pressure.",
    examples: ["Caspar Health", "m.Doc", "Famedly", "Nelly"],
  },
  {
    title: "Real-World Evidence",
    lens: "Data intelligence",
    description:
      "Platforms and analytics that transform healthcare data into evidence about patient journeys, burden, outcomes, and market needs.",
    examples: ["Temedica", "Climedo", "XO Life"],
  },
  {
    title: "Clinical Knowledge & Decision Support",
    lens: "Clinical intelligence",
    description:
      "Products that support healthcare professionals with structured medical knowledge, education, workflow context, and decision support.",
    examples: ["AMBOSS"],
  },
];

const companyGrid = document.querySelector("#companyGrid");
const useCaseGrid = document.querySelector("#useCaseGrid");
const companySearch = document.querySelector("#companySearch");
const lensFilter = document.querySelector("#lensFilter");
const audienceFilter = document.querySelector("#audienceFilter");
const maturityFilter = document.querySelector("#maturityFilter");
const resultCount = document.querySelector("#resultCount");
const companyCount = document.querySelector("#companyCount");
const resetFilters = document.querySelector("#resetFilters");
const emptyState = document.querySelector("#emptyState");

function uniqueValues(key) {
  return [...new Set(companies.map((company) => company[key]))].sort();
}

function addOptions(select, values) {
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.append(option);
  });
}

function matchesCompany(company, query) {
  const text = [
    company.name,
    company.country,
    company.lens,
    company.audience,
    company.customerType,
    company.maturity,
    company.useCase,
    company.description,
    company.tags.join(" "),
  ]
    .join(" ")
    .toLowerCase();

  return text.includes(query);
}

function pluralizeCompanies(count) {
  return count === 1 ? "1 company" : `${count} companies`;
}

function renderCompanies() {
  const query = companySearch.value.trim().toLowerCase();
  const lens = lensFilter.value;
  const audience = audienceFilter.value;
  const maturity = maturityFilter.value;

  const visible = companies.filter((company) => {
    const lensMatch = lens === "all" || company.lens === lens;
    const audienceMatch = audience === "all" || company.customerType === audience;
    const maturityMatch = maturity === "all" || company.maturity === maturity;
    const queryMatch = query === "" || matchesCompany(company, query);
    return lensMatch && audienceMatch && maturityMatch && queryMatch;
  });

  companyGrid.innerHTML = visible
    .map(
      (company) => `
        <article class="company-card">
          <div>
            <p class="company-meta">${company.country} · ${company.maturity}</p>
            <h3>${company.name}</h3>
            <p><strong>${company.useCase}</strong></p>
            <p>${company.description}</p>
            <div class="tag-row">
              <span class="tag">${company.lens}</span>
              ${company.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
            </div>
          </div>
          <div class="company-footer">
            <span class="company-source">Checked: ${company.checked}</span>
            <a href="${company.source}" target="_blank" rel="noreferrer">Source</a>
          </div>
        </article>
      `
    )
    .join("");

  resultCount.textContent = pluralizeCompanies(visible.length);
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
  maturityFilter.value = "all";
  renderCompanies();
}

addOptions(lensFilter, uniqueValues("lens"));
addOptions(audienceFilter, uniqueValues("customerType"));
addOptions(maturityFilter, uniqueValues("maturity"));

companyCount.textContent = companies.length;
renderUseCases();
renderCompanies();

[companySearch, lensFilter, audienceFilter, maturityFilter].forEach((control) => {
  control.addEventListener("input", renderCompanies);
});

resetFilters.addEventListener("click", resetAllFilters);
