const profiles = [
  {
    name: "attexis - die digitale Therapie bei ADHS im Erwachsenenalter",
    manufacturer: "GAIA AG",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Mental Health",
    source: "https://attexis.de/",
    logo: "https://diga.bfarm.de/images/attexis-die-digitale-therapie-bei-adhs-im-erwachsenenalter-4251.png",
    description:
      "A DiGA for adults with ADHD. attexis teaches methods and techniques from cognitive behavioral therapy and was studied as an addition to usual medical care.",
    tags: ["ADHD", "Mental health"],
  },
  {
    name: "Axia - fuer axiale Spondyloarthritis (axSpA)",
    manufacturer: "Applimeda GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Musculoskeletal",
    source: "https://www.axia-app.de/",
    logo: "https://diga.bfarm.de/images/axia-fuer-axiale-spondyloarthritis-26286.png",
    description:
      "A DiGA for patients with axial spondyloarthritis. The app guides users through axSpA-specific exercise therapy and supports disease management with educational content, reminders, and documentation.",
    tags: ["MSK", "Spondyloarthritis"],
  },
  {
    name: "Cara Care fuer Reizdarm",
    manufacturer: "HiDoc Technologies GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Digestive Health",
    source: "https://www.cara.care/de",
    logo: "https://diga.bfarm.de/images/cara-care-fuer-reizdarm-2-18198.png",
    description:
      "A DiGA for irritable bowel syndrome. It aims to reduce functional gastrointestinal symptoms and supports quality of life, health literacy, and self-management through personalized nutrition and behavioral therapy content.",
    tags: ["IBS", "Digestive care"],
  },
  {
    name: "companion patella powered by medi",
    manufacturer: "PrehApp GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Musculoskeletal",
    source: "https://www.medi.de/digitale-anwendungen/diga-companion-patella/",
    logo: "https://diga.bfarm.de/images/companion-patella-powered-by-medi-proved-by-dt-kniegesellschaft-2784.png",
    description:
      "A DiGA for patients aged 14 to 65 with anterior knee pain. It adapts movement therapy training to pain and load feedback and includes education plus graphical tracking for patients and physicians.",
    tags: ["MSK", "Knee"],
  },
  {
    name: "deprexis",
    manufacturer: "GAIA AG",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Mental Health",
    source: "https://de.deprexis.com/",
    logo: "https://diga.bfarm.de/images/deprexis-1.png",
    description:
      "An interactive online self-help program for adults with depression and depressive mood. It is based especially on cognitive behavioral therapy and is intended to support usual care.",
    tags: ["Depression", "Mental health"],
  },
  {
    name: "edupression.com",
    manufacturer: "SOFY GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Mental Health",
    source: "https://edupression.com/",
    logo: "https://diga.bfarm.de/images/edupression-com-1-2315.png",
    description:
      "A web-based DiGA for depression that combines psychoeducation, mood tracking, weekly goals, and computer-based cognitive behavioral therapy elements. Patients receive multimedia information and exercises for self-help.",
    tags: ["Depression", "Mental health"],
  },
  {
    name: "elevida",
    manufacturer: "GAIA AG",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Neurological Conditions",
    source: "https://elevida.de/",
    logo: "https://diga.bfarm.de/images/elevida.png",
    description:
      "A DiGA for adults with multiple sclerosis and fatigue. It uses cognitive behavioral therapy-based methods as an addition to usual care with the aim of reducing fatigue.",
    tags: ["Multiple sclerosis", "Fatigue"],
  },
  {
    name: "elona therapy Depression",
    manufacturer: "Elona Health GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Mental Health",
    source: "https://www.elona.health/elona-therapy-patienten",
    logo: "https://diga.bfarm.de/images/elona-therapy-depression-2143.png",
    description:
      "A DiGA that connects outpatient psychotherapy for unipolar depression with digital interventions between sessions. It provides weekly therapy plans, exercises, psychoeducation, and progress-based personalization.",
    tags: ["Depression", "Mental health"],
  },
  {
    name: "Endo-App",
    manufacturer: "Endo Health GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Women's Health",
    source: "https://diga.endometriose.app/",
    logo: "https://diga.bfarm.de/images/endo-app-1-2038.png",
    description:
      "A digital medical product for multimodal support of people with endometriosis. It combines a symptom diary with educational content, validated questionnaires, guided exercises, and techniques from gynecology, physiotherapy, psychology, pain therapy, nutrition, and resilience training.",
    tags: ["Endometriosis", "Women's health"],
  },
  {
    name: "glucura Diabetestherapie",
    manufacturer: "Perfood GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Metabolic Care",
    source: "https://www.glucura.de/",
    logo: "https://diga.bfarm.de/images/glucura-2545.png",
    description:
      "A DiGA for type 2 diabetes therapy. It guides users through personalized nutrition adjustments and lifestyle modification over three months to reduce postprandial glucose variability, weight, and HbA1c.",
    tags: ["Diabetes", "Metabolic care"],
  },
  {
    name: "HelloBetter Chronische Schmerzen",
    manufacturer: "GET.ON Institut fuer Online Gesundheitstrainings GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Mental Health",
    source: "https://hellobetter.de/online-kurse/chronische-schmerzen/",
    logo: "https://diga.bfarm.de/images/hellobetter-chronische-schmerzen-1769.png",
    description:
      "An interactive psychological online program for sustained reduction of impairment from chronic pain. It combines psychoeducation with Acceptance and Commitment Therapy strategies and practical exercises for daily life.",
    tags: ["Pain", "Behavioral health"],
  },
  {
    name: "HelloBetter Diabetes",
    manufacturer: "GET.ON Institut fuer Online Gesundheitstrainings GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Metabolic Care",
    source: "https://hellobetter.de/online-kurse/diabetes/",
    logo: "https://diga.bfarm.de/images/hellobetter-diabetes-1705.png",
    description:
      "An interactive psychological therapy program for people with type 1 or type 2 diabetes and depressive symptoms. The 12-week course combines psychoeducation, cognitive behavioral therapy strategies, diabetes-specific topics, diary functions, and repeated symptom checks.",
    tags: ["Diabetes", "Behavioral health"],
  },
  {
    name: "HelloBetter Panik",
    manufacturer: "GET.ON Institut fuer Online Gesundheitstrainings GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Mental Health",
    source: "https://hellobetter.de/online-kurse/panik/",
    logo: "https://diga.bfarm.de/images/hellobetter-panik-1859.png",
    description:
      "An interactive psychological therapy program for panic disorder and agoraphobia with panic disorder. The 12-week course teaches psychoeducation and cognitive behavioral therapy strategies such as exposure, cognitive restructuring, relaxation, and relapse prevention.",
    tags: ["Panic", "Anxiety"],
  },
  {
    name: "HelloBetter Schlafen",
    manufacturer: "GET.ON Institut fuer Online Gesundheitstrainings GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Mental Health",
    source: "https://hellobetter.de/online-kurse/schlafen/",
    logo: "https://diga.bfarm.de/images/hellobetter-schlafen-2080.png",
    description:
      "An interactive psychological therapy program for insomnia symptoms. It is based on CBT-I and includes sleep hygiene, sleep restriction, stimulus control, cognitive strategies, relaxation, relapse prevention, and an online diary.",
    tags: ["Sleep", "Insomnia"],
  },
  {
    name: "HelloBetter Stress und Burnout",
    manufacturer: "GET.ON Institut fuer Online Gesundheitstrainings GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Mental Health",
    source: "https://hellobetter.de/online-trainings/burnout-stress/",
    logo: "https://diga.bfarm.de/images/hellobetter-stress-und-burnout.png",
    description:
      "An interactive psychological therapy program aimed at reducing stress burden related to life and work coping difficulties. It teaches cognitive behavioral therapy-based strategies, including problem solving, behavioral activation, and emotion regulation.",
    tags: ["Stress", "Burnout"],
  },
  {
    name: "HelloBetter Vaginismus Plus",
    manufacturer: "GET.ON Institut fuer Online Gesundheitstrainings GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Women's Health",
    source: "https://hellobetter.de/online-kurse/vaginismus-plus/",
    logo: "https://diga.bfarm.de/images/hellobetter-vaginismus-plus-1819.png",
    description:
      "A DiGA to improve vaginal penetration ability during sexual intercourse. It provides symptom information and exercises, including gradual insertion exercises, work with distressing thoughts and feelings, relaxation, and pelvic floor exercises.",
    tags: ["Vaginismus", "Women's health"],
  },
  {
    name: "Invirto - Die Therapie gegen Angst",
    manufacturer: "Sympatient GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Mental Health",
    source: "https://www.invirto.de/",
    logo: "https://diga.bfarm.de/images/invirto-die-therapie-gegen-angst-2814.png",
    description:
      "A DiGA that enables treatment of agoraphobia, panic disorder, or social phobia from home with app-based learning and a VR headset. It is based on cognitive behavioral therapy with exposure training.",
    tags: ["Anxiety", "VR support"],
  },
  {
    name: "Kaia Rueckenschmerzen",
    manufacturer: "kaia health software GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Musculoskeletal",
    source: "https://www.kaiahealth.de/rueckenschmerzen/",
    logo: "https://diga.bfarm.de/images/kaia-rueckenschmerzen-rueckentraining-fuer-zuhause-13152.png",
    description:
      "A DiGA for adults with non-specific back pain. It combines movement, knowledge, and relaxation based on guideline-oriented multimodal therapy and adapts content to individual pain, function, and activity.",
    tags: ["Back pain", "MSK"],
  },
  {
    name: "Kalmeda",
    manufacturer: "Pohl-Boskamp Digital Health GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Neurological Conditions",
    source: "https://www.kalmeda.de/",
    logo: "https://diga.bfarm.de/images/kalmeda-1.jpeg",
    description:
      "A DiGA for adults with chronic tinnitus burden. It offers guideline-based behavioral therapy, relaxation guidance, calming sounds, and knowledge content across a structured multi-month program.",
    tags: ["Tinnitus", "Neurological Conditions"],
  },
  {
    name: "Kranus Edera",
    manufacturer: "Kranus Health GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Urology",
    source: "https://www.kranushealth.com/",
    logo: "https://diga.bfarm.de/images/kranus-edera-1915.png",
    description:
      "A DiGA for holistic treatment of erectile dysfunction and its causes. The 12-week program includes pelvic floor training, physiotherapy exercises, cardiovascular training, mindfulness, sex therapy exercises, and disease education.",
    tags: ["Urology", "Men's health"],
  },
  {
    name: "Kranus Lutera",
    manufacturer: "Kranus Health GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Urology",
    source: "https://www.kranushealth.com/de/",
    logo: "https://diga.bfarm.de/images/kranus-lutera-2755.png",
    description:
      "A digital therapy for men with lower urinary tract symptoms. It combines a bladder diary, personalized feedback, pelvic floor and physiotherapy exercises, bladder training, cognitive behavioral therapy elements, audio exercises, and education.",
    tags: ["Urology", "Bladder"],
  },
  {
    name: "Kranus Mictera",
    manufacturer: "Kranus Health GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Urology",
    source: "https://www.kranushealth.com/de/therapien/inkontinenz",
    logo: "https://diga.bfarm.de/images/kranus-mictera-4243.jpeg",
    description:
      "A DiGA for treating urinary incontinence in women. It uses a multimodal program with bladder diary, personalized feedback, pelvic floor and physiotherapy exercises, bladder training, cognitive behavioral therapy elements, and education.",
    tags: ["Urology", "Bladder"],
  },
  {
    name: "levidex",
    manufacturer: "GAIA AG",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Neurological Conditions",
    source: "https://levidex.de/",
    logo: "https://diga.bfarm.de/images/levidex.png",
    description:
      "A DiGA for adults with multiple sclerosis. It teaches cognitive behavioral therapy-based methods and is intended as a supplement to usual medical care to improve quality of life.",
    tags: ["Multiple sclerosis", "Lifestyle"],
  },
  {
    name: "Mawendo",
    manufacturer: "Mawendo GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Musculoskeletal",
    source: "https://mawendo.com/",
    logo: "https://diga.bfarm.de/images/mawendo-1711.png",
    description:
      "A DiGA that provides training programs with exercise videos, health information, and documentation. Physicians initially select and individualize the program so patients can support treatment of patella-related conditions independently.",
    tags: ["MSK", "Rehabilitation"],
  },
  {
    name: "Meine Tinnitus App",
    manufacturer: "BAYOOCARE GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Neurological Conditions",
    source: "https://www.meinetinnitusapp.de/",
    logo: "https://diga.bfarm.de/images/meine-tinnitus-app-das-digitale-tinnitus-counseling-18195.png",
    description:
      "A DiGA for initial care of tinnitus patients based on tinnitus counseling. It provides psychoeducation and self-management guidance through multimedia content and individually adapted lessons over 10 weeks.",
    tags: ["Tinnitus", "Neurological Conditions"],
  },
  {
    name: "Mindable: Panik & Agoraphobie",
    manufacturer: "Mindable Health GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Mental Health",
    source: "https://www.mindable.health/",
    logo: "https://diga.bfarm.de/images/mindable-panik-agoraphobie-2746.png",
    description:
      "A DiGA for adults with symptoms of agoraphobia and/or panic disorder. It follows guideline-based cognitive behavioral therapy methods and focuses on psychoeducation, habituation through symptom provocation, and in-vivo exposure.",
    tags: ["Panic", "Agoraphobia"],
  },
  {
    name: "Mindable: Soziale Phobie",
    manufacturer: "Mindable Health GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Mental Health",
    source: "https://www.mindable.health/soziale-phobie",
    logo: "https://diga.bfarm.de/images/mindable-soziale-phobie-2563.png",
    description:
      "A DiGA for adults with symptoms of social phobia. It teaches cognitive behavioral therapy-based methods such as psychoeducation, an individual disorder model, attention training, and behavioral experiments around social anxiety.",
    tags: ["Social phobia", "Anxiety"],
  },
  {
    name: "My7steps App",
    manufacturer: "My7steps GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Mental Health",
    source: "https://diga.my7steps.org/",
    logo: "https://diga.bfarm.de/images/my7steps-app-2548.jpeg",
    description:
      "A web-based intervention to reduce psychological distress. It is a low-threshold offer for people with psychosocial difficulties and problems coping with everyday life.",
    tags: ["Mental health", "Online therapy"],
  },
  {
    name: "neolexon Aphasie",
    manufacturer: "Limedix GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Neurological Conditions",
    source: "https://neolexon.de/patienten/aphasie-app/",
    logo: "https://diga.bfarm.de/images/neolexon-aphasie-1.jpeg",
    description:
      "A DiGA for people with aphasia and/or apraxia of speech, used as daily home practice alongside speech therapy. Exercises cover understanding, speaking, reading, and writing and can be individualized by the treating therapist.",
    tags: ["Aphasia", "Speech therapy"],
  },
  {
    name: "NeuroNation MED",
    manufacturer: "Synaptikon GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Neurological Conditions",
    source: "https://neuronation-med.de/",
    logo: "https://diga.bfarm.de/images/neuronation-med-1-2160.png",
    description:
      "A mobile DiGA for personalized cognitive training based on playful multi-domain exercises. It supports patients with mild acquired or neurodegenerative cognitive impairments and combines training with brain-health information.",
    tags: ["Cognition", "Neurology"],
  },
  {
    name: "NichtraucherHelden-App",
    manufacturer: "Sanero Medical GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Mental Health",
    source: "https://www.nichtraucherhelden.de/medizinprogramm.jsf",
    logo: "https://diga.bfarm.de/images/nichtraucherhelden-app-1-1323.png",
    description:
      "A DiGA for monitoring, treating, and relieving diagnosed tobacco dependence. The 90-day cognitive behavioral therapy-based smoking cessation program includes individualized coaching, tracking, diary tools, relapse support, distraction exercises, and community support.",
    tags: ["Smoking cessation", "Behavior change"],
  },
  {
    name: "Novego: Aengste ueberwinden",
    manufacturer: "IVPNetworks GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Mental Health",
    source: "https://www.novego.de/novego-programme/hilfe-bei-aengsten/",
    logo: "https://diga.bfarm.de/images/novego-aengste-ueberwinden-2-2122.png",
    description:
      "A psychological online support program for people with anxiety. It uses cognitive behavioral therapy methods adapted to individual anxiety symptoms and provides texts, videos, audios, interactive exercises, weekly messaging support, and crisis hotline access.",
    tags: ["Anxiety", "Mental health"],
  },
  {
    name: "Novego: Depressionen bewaeltigen",
    manufacturer: "IVPNetworks GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Mental Health",
    source: "https://www.novego.de/",
    logo: "https://diga.bfarm.de/images/novego-depressionen-bewaeltigen-2.jpeg",
    description:
      "A psychological online support program for people with depression. It uses cognitive behavioral therapy methods tailored to personal life situations and provides varied digital content, long-term access, weekly messaging support, and crisis hotline access.",
    tags: ["Depression", "Mental health"],
  },
  {
    name: "Oviva Direkt fuer Adipositas",
    manufacturer: "Oviva AG, German branch",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Metabolic Care",
    source: "https://oviva.com/de/de/direkt/",
    logo: "https://diga.bfarm.de/images/oviva-direkt-fuer-adipositas-8454.png",
    description:
      "A digital therapy for severe overweight. The app supports patients in changing habits and reducing weight by delivering multimodal obesity treatment on a smartphone.",
    tags: ["Obesity", "Lifestyle"],
  },
  {
    name: "PINK! Coach",
    manufacturer: "PINK gegen Brustkrebs GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Oncology",
    source: "https://www.pink-brustkrebs.de/das-bietet-pink/lp-pink-coach",
    logo: "https://diga.bfarm.de/images/pink-coach-1922.png",
    description:
      "A DiGA for breast cancer patients and survivors to strengthen health-related quality of life and health literacy during therapy and aftercare. It supports lifestyle change through modules for movement, nutrition, mental health, and symptom self-help.",
    tags: ["Oncology", "Breast cancer"],
  },
  {
    name: "priovi",
    manufacturer: "GAIA AG",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Mental Health",
    source: "https://priovi.de/",
    logo: "https://diga.bfarm.de/images/priovi-2157.png",
    description:
      "A DiGA for adults with symptoms of borderline personality disorder. It teaches methods and exercises from cognitive behavioral therapy, especially schema therapy techniques.",
    tags: ["Borderline", "Mental health"],
  },
  {
    name: "ProHerz",
    manufacturer: "ProCarement GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Cardiology",
    source: "https://procarement.com/",
    logo: "https://diga.bfarm.de/images/proherz-2-2141.png",
    description:
      "A daily therapy companion for patients with heart failure. It supports self-management and early warning by recording and analyzing vital signs, then offering personalized health coaching and risk-prevention functions.",
    tags: ["Heart failure", "Cardiology"],
  },
  {
    name: "Selfapy Online-Kurs bei Binge-Eating-Stoerung",
    manufacturer: "Selfapy GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Mental Health",
    source: "https://www.selfapy.com/kurse/binge-eating",
    logo: "https://diga.bfarm.de/images/selfapys-online-kurs-bei-binge-eating-stoerung-2125.png",
    description:
      "A DiGA for people with binge-eating disorder. The course teaches cognitive behavioral therapy-based methods and techniques, supports exercise documentation, and provides validated multimedia content for self-help.",
    tags: ["Eating disorder", "Mental health"],
  },
  {
    name: "Selfapy Online-Kurs bei Bulimia Nervosa",
    manufacturer: "Selfapy GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Mental Health",
    source: "https://www.selfapy.com/kurse/bulimie",
    logo: "https://diga.bfarm.de/images/selfapys-online-kurs-bei-bulimia-nervosa-2133.png",
    description:
      "A DiGA for people with bulimia nervosa. The course teaches cognitive behavioral therapy-based methods and techniques, supports exercise documentation, and provides validated multimedia content for self-help.",
    tags: ["Eating disorder", "Mental health"],
  },
  {
    name: "Selfapy Online-Kurs bei Depression",
    manufacturer: "Selfapy GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Mental Health",
    source: "https://www.selfapy.com/kurse/depression",
    logo: "https://diga.bfarm.de/images/selfapys-online-kurs-bei-depression.png",
    description:
      "An individualized online course for people with depression based on evidence-based cognitive behavioral therapy theories and techniques. Lessons cover negative thoughts, daily structure, relaxation, sleep problems, and relapse prevention, with progress monitored by a psychological contact person.",
    tags: ["Depression", "Mental health"],
  },
  {
    name: "Selfapy Online-Kurs bei Generalisierter Angststoerung",
    manufacturer: "Selfapy GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Mental Health",
    source: "https://www.selfapy.com/kurse/generalisierte-angststoerung",
    logo: "https://diga.bfarm.de/images/selfapys-online-kurs-bei-generalisierter-angststoerung.png",
    description:
      "An individualized online course for people with generalized anxiety disorder based on evidence-based cognitive behavioral therapy theories and techniques. Lessons cover automatic thoughts, anxiety reactions, exposure exercises, and mindfulness, with progress monitored by a psychological contact person.",
    tags: ["Anxiety", "Mental health"],
  },
  {
    name: "Smoke Free - Rauchen aufhoeren",
    manufacturer: "Smoke Free 23 GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Mental Health",
    source: "https://www.smokefree.de/",
    logo: "https://diga.bfarm.de/images/smoke-free-2-2196.png",
    description:
      "An evidence-based digital smoking cessation therapy delivered as a smartphone app. It follows German and international guidelines and includes a 90-day quit program, chatbot support, craving-distraction tools, progress tracking, diary, motivation tools, and community support.",
    tags: ["Smoking cessation", "Behavior change"],
  },
  {
    name: "somnio",
    manufacturer: "mementor DE GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Mental Health",
    source: "https://www.somn.io/",
    logo: "https://diga.bfarm.de/images/somnio.png",
    description:
      "A DiGA for treating insomnia. It teaches evidence-based CBT-I content such as sleep-time optimization, sleep-wake rhythm, dealing with sleep-blocking thoughts, and relaxation techniques.",
    tags: ["Sleep", "Insomnia"],
  },
  {
    name: "somnovia",
    manufacturer: "GAIA AG",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Mental Health",
    source: "https://somnovia.de/",
    logo: "https://diga.bfarm.de/images/somnovia-therapie-bei-schlafstoerungen-2378.png",
    description:
      "A DiGA for adults with chronic insomnia. It teaches cognitive behavioral therapy methods and techniques for sleep disorders and was studied as an addition to usual medical care.",
    tags: ["Sleep", "Insomnia"],
  },
  {
    name: "Untire",
    manufacturer: "Tired of Cancer B.V.",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Oncology",
    source: "https://untire.app/de/",
    logo: "https://diga.bfarm.de/images/untire-2243.png",
    description:
      "A DiGA designed to reduce fatigue in breast cancer patients and survivors. It combines psycho-oncology methods, cognitive behavioral therapy, Acceptance and Commitment Therapy, psychoeducation, mindfulness, and movement exercises.",
    tags: ["Oncology", "Fatigue"],
  },
  {
    name: "velibra",
    manufacturer: "GAIA AG",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Mental Health",
    source: "https://de.velibra.com/",
    logo: "https://diga.bfarm.de/images/velibra.png",
    description:
      "A web-based program for adults with generalized anxiety disorder, panic disorder with or without agoraphobia, or social anxiety disorder. It teaches cognitive behavioral therapy methods and exercises as a supplement to usual care.",
    tags: ["Anxiety", "Mental health"],
  },
  {
    name: "Vitadio",
    manufacturer: "Vitadio s.r.o.",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Metabolic Care",
    source: "https://vitadio.de/",
    logo: "https://diga.bfarm.de/images/vitadio-2068.png",
    description:
      "A DiGA for type 2 diabetes that aims to improve diabetes control through self-management and lifestyle change. It guides users with daily tasks, automated messages, education, and playful personal goals.",
    tags: ["Diabetes", "Metabolic care"],
  },
  {
    name: "Vivira",
    manufacturer: "Vivira Health Lab GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Musculoskeletal",
    source: "https://www.vivira.com/",
    logo: "https://diga.bfarm.de/images/vivira.png",
    description:
      "A DiGA for treating non-specific lower back pain or spinal osteoarthritis. It provides daily movement therapy exercises that adapt to patient feedback, plus progress visualization, movement tests, and educational content.",
    tags: ["MSK", "Exercise therapy"],
  },
  {
    name: "vorvida",
    manufacturer: "GAIA AG",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Mental Health",
    source: "https://vorvida.de/",
    logo: "https://diga.bfarm.de/images/vorvida.png",
    description:
      "A DiGA for adults with harmful alcohol use or alcohol dependence. It aims to support management of drinking behavior and reduce alcohol consumption using cognitive behavioral therapy-based methods as an addition to usual care.",
    tags: ["Alcohol use", "Behavior change"],
  },
  {
    name: "zanadio",
    manufacturer: "Sidekick Health Germany GmbH",
    track: "DiGA",
    status: "Listed DiGA",
    lens: "Metabolic Care",
    source: "https://zanadio.de/",
    logo: "https://diga.bfarm.de/images/zanadio.png",
    description:
      "A DiGA that helps patients reduce weight long term by changing habits around movement, nutrition, and behavior. It digitally implements multimodal conservative obesity therapy.",
    tags: ["Obesity", "Metabolic care"],
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
    source: "https://coobi.health/de",
    description:
      "Adjacent digital health company included as a practical example around therapy, rehabilitation, aftercare, and patient monitoring workflows.",
    tags: ["Addiction care", "Aftercare", "Monitoring"],
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
    source: "https://www.amboss.com/de",
    description: "Adjacent healthtech profile showing the professional knowledge layer around digital healthcare delivery.",
    tags: ["Clinical knowledge", "Education", "AI support"],
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
    source: "https://www.mdoc.one/en/",
    description:
      "Adjacent provider software profile that connects the DiGA market to hospital, patient portal, and care-navigation workflows.",
    tags: ["Patient portal", "Hospital workflow", "Interoperability"],
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
    source: "https://temedica.com/",
    description:
      "Adjacent data and evidence profile showing how real-world insights can complement regulated digital health market research.",
    tags: ["RWE", "Pharma", "Patient journey"],
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
    source: "https://www.famedly.com/",
    description:
      "Adjacent infrastructure profile included to show how communication and interoperability shape digital healthcare adoption.",
    tags: ["TI messenger", "Secure communication", "Interoperability"],
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
      "DiGA products around obesity, diabetes, cardiology, and behavior change in chronic-care pathways.",
    examples: ["Oviva", "HelloBetter Diabetes", "ProHerz", "Vitadio"],
  },
  {
    title: "Specialized Care Areas",
    lens: "Condition-specific markets",
    description:
      "Focused regulated applications in women's health, oncology support, urology, neurology, tinnitus, and other indication-specific needs.",
    examples: ["Endo-App", "PINK! Coach", "Kranus", "memodio"],
  },
];

const companyGrid = document.querySelector("#companyGrid");
const useCaseGrid = document.querySelector("#useCaseGrid");
const companySearch = document.querySelector("#companySearch");
const lensFilter = document.querySelector("#lensFilter");
const statusFilter = document.querySelector("#statusFilter");
const resultCount = document.querySelector("#resultCount");
const resetFilters = document.querySelector("#resetFilters");
const showMoreProfiles = document.querySelector("#showMoreProfiles");
const emptyState = document.querySelector("#emptyState");
const profilesPerPage = 12;
let visibleProfileLimit = profilesPerPage;

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
    profile.audience ?? "",
    profile.customerType ?? "",
    profile.useCase ?? "",
    profile.description ?? "",
    getTags(profile).join(" "),
  ]
    .join(" ")
    .toLowerCase();

  return text.includes(query);
}

function getTags(profile) {
  return profile.tags ?? [profile.lens];
}

function getSourceLabel(profile) {
  return "Website";
}

function renderProfiles() {
  const query = companySearch.value.trim().toLowerCase();
  const lens = lensFilter.value;
  const status = statusFilter.value;
  const digaProfiles = profiles.filter((profile) => profile.track === "DiGA");

  const visible = digaProfiles.filter((profile) => {
    const lensMatch = lens === "all" || profile.lens === lens;
    const statusMatch = status === "all" || profile.status === status;
    const queryMatch = query === "" || matchesProfile(profile, query);
    return lensMatch && statusMatch && queryMatch;
  });

  const visibleSlice = visible.slice(0, visibleProfileLimit);

  companyGrid.innerHTML = visibleSlice
    .map(
      (profile) => `
        <article class="company-card">
          <div>
            <div class="company-card-head">
              <div>
                <p class="company-meta">${profile.track} · ${profile.status}</p>
                <h3>${profile.name}</h3>
              </div>
              ${
                profile.logo
                  ? `<img class="company-logo" src="${profile.logo}" alt="${profile.name} logo" loading="lazy" />`
                  : ""
              }
            </div>
            <p class="manufacturer">${profile.manufacturer}</p>
            ${profile.useCase ? `<p><strong>${profile.useCase}</strong></p>` : ""}
            ${profile.description ? `<p>${profile.description}</p>` : ""}
            <div class="tag-row">
              <span class="tag">${profile.lens}</span>
              ${getTags(profile)
                .map((tag) => `<span class="tag">${tag}</span>`)
                .join("")}
            </div>
          </div>
          <div class="company-footer">
            <a href="${profile.source}" target="_blank" rel="noreferrer">${getSourceLabel(profile)}</a>
          </div>
        </article>
      `
    )
    .join("");

  resultCount.textContent =
    visible.length === digaProfiles.length
      ? `Showing ${visibleSlice.length} of ${digaProfiles.length} active DiGA profiles`
      : `Showing ${visibleSlice.length} of ${visible.length} filtered DiGA profiles`;
  emptyState.hidden = visible.length > 0;
  showMoreProfiles.hidden = visibleSlice.length >= visible.length;
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
  statusFilter.value = "all";
  visibleProfileLimit = profilesPerPage;
  renderProfiles();
}

addOptions(
  lensFilter,
  uniqueValues("lens").filter((value) => profiles.some((profile) => profile.track === "DiGA" && profile.lens === value))
);
addOptions(
  statusFilter,
  uniqueValues("status").filter((value) => profiles.some((profile) => profile.track === "DiGA" && profile.status === value))
);

renderUseCases();
renderProfiles();

[companySearch, lensFilter, statusFilter].forEach((control) => {
  control.addEventListener("input", () => {
    visibleProfileLimit = profilesPerPage;
    renderProfiles();
  });
});

resetFilters.addEventListener("click", resetAllFilters);
showMoreProfiles.addEventListener("click", () => {
  visibleProfileLimit += profilesPerPage;
  renderProfiles();
});

document.querySelectorAll("[data-status-filter]").forEach((link) => {
  link.addEventListener("click", () => {
    statusFilter.value = link.dataset.statusFilter;
    visibleProfileLimit = profilesPerPage;
    renderProfiles();
  });
});
