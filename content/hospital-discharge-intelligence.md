# Hospital Discharge Intelligence

Evidence Pilot 01 for Health Tech Scout uses real-world hospital discharge data to identify cost, length-of-stay, payer, and provider-level signals that can inform healthtech opportunity mapping.

The project uses 2.05M de-identified inpatient discharge records across 202 New York State hospitals from SPARCS 2021. It is not a synthetic training dataset.

## Links

- Interactive dashboard: https://app.powerbi.com/view?r=eyJrIjoiYjk5N2M2NTQtZGMxOC00ZjczLWEyNzgtNTg1MDc3ODk0ZWU3IiwidCI6IjcyYjM0ZmM2LTE1OTctNGRiOC1iYTFlLTA0ZmZlOGQzOTMwOSJ9
- GitHub project: https://github.com/peterscheinsohn/NY-Hospital-Discharge-Analysis-Project
- PDF preview: https://github.com/peterscheinsohn/NY-Hospital-Discharge-Analysis-Project/blob/main/Hospitals_discharges_2021_USA.pdf

## Questions the dashboard explores

- Which diagnosis groups are associated with unusually high median costs and charges?
- Where do long hospital stays suggest care coordination, discharge, or aftercare challenges?
- How do cost, payer groups, severity, and mortality-risk patterns differ across segments?
- Where do hospital-level patterns reveal operational heterogeneity worth investigating further?

## Selected descriptive signals

- "Effect of foreign body entering opening" showed an approximately $90K median cost in the analyzed data.
- Maltreatment and abuse-related cases showed an average stay of 37 days.
- Several service lines showed charges around 3-3.5x actual care costs.
- Medicare discharges showed higher average costs and a larger share of major or extreme mortality risk than private insurance patients in this dataset view.

## Data and method

- Dataset: Hospital Inpatient Discharges (SPARCS De-Identified) 2021.
- Source: New York State Department of Health.
- Scope: 2.05M records, 202 hospitals, 2021, fully de-identified.
- Cleaning: Python and Pandas, from 32 raw columns to 14 analysis-ready fields.
- BI model: Power Query and DAX.
- Dashboard: Power BI, focused on burden, provider variation, payer/risk mix, length of stay, costs, and charges.

## Health Tech Scout angle

The project is a prototype for connecting healthcare data analysis with market and product intelligence:

1. Start with a measurable healthcare burden.
2. Translate the burden into practical use cases.
3. Map companies and technologies that may address those use cases.
4. Keep the analysis transparent, sourced, and easy to challenge.

## Limitations

- This is a descriptive analysis, not a causal study.
- The dataset covers New York State inpatient discharges in 2021 and is not directly transferable to DACH or EU healthcare systems.
- Diagnosis-level patterns may reflect coding, case mix, hospital specialization, and other contextual factors.
- The public site context mentions provider-level variation but does not include exact hospital names and per-hospital values.
- The dashboard should be used for exploration and hypothesis generation, not for medical, reimbursement, or policy decisions.
