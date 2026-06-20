export interface TeamMember {
  name: string;
  email: string;
  image: string;
  bio: string;
  bioEn: string;
  linkedin: string;
}

export interface Mentor {
  name: string;
  role: string;
  roleEn: string;
  image: string;
  title: string;
  titleEn: string;
  description: string[];
  descriptionEn: string[];
}

export const teamMembers: TeamMember[] = [
  {
    name: "Joar Dale Landa",
    email: "Joar@eldion.no",
    image: "joar.png",
    bio: "Sivilingeniør i industriell økonomi (UiS), med fagbrev som automatiker. Har erfaring som automasjonsingeniør hos Siemens Energy.",
    bioEn: "MSc in Industrial Economics (UiS) and a certified automation technician. Experience as an automation engineer at Siemens Energy.",
    linkedin: "https://www.linkedin.com/in/joar-landa-699664137/",
  },
  {
    name: "Vetle Gjerver",
    email: "Vetle@eldion.no",
    image: "vetle.png",
    bio: "Sivilingeniør i robotteknologi og signalbehandling (UiS), med fagbrev som automatiker. Har erfaring som metering og robotikkingeniør hos Aker Solutions.",
    bioEn: "MSc in Robotics and Signal Processing (UiS) and a certified automation technician. Experience as a metering and robotics engineer at Aker Solutions.",
    linkedin: "https://www.linkedin.com/in/vetle-gjerver/",
  },
  {
    name: "Håvard Syslak",
    email: "Haavard@eldion.no",
    image: "havard.png",
    bio: "Sivilingeniør i kybernetikk (NTNU), med fagbrev som automatiker. Har erfaring som Embedded & Electronics Engineer hos Blueye Robotics.",
    bioEn: "MSc in Cybernetics (NTNU) and a certified automation technician. Experience as an Embedded & Electronics Engineer at Blueye Robotics.",
    linkedin: "https://www.linkedin.com/in/h%C3%A5vard-syslak-2956ab176/",
  },
  {
    name: "Harald Domås",
    email: "Harald@eldion.no",
    image: "harald.png",
    bio: "Sivilingeniør i robotteknologi og signalbehandling (UiS), med fagbrev som avioniker. Har erfaring som R&D Project Engineer hos ABB Robotics.",
    bioEn: "MSc in Robotics and Signal Processing (UiS) and a certified avionics technician. Experience as an R&D Project Engineer at ABB Robotics.",
    linkedin: "https://www.linkedin.com/in/harald-dom%C3%A5s-91b324205/",
  },
  {
    name: "Aiken Midttveit",
    email: "Aiken@eldion.no",
    image: "aiken.png",
    bio: "Sivilingeniør i robotteknologi og signalbehandling (UiS), med fagbrev som automatiker. Har erfaring som R&D-elektronikkutvikler hos ABB Robotics.",
    bioEn: "MSc in Robotics and Signal Processing (UiS) and a certified automation technician. Experience as an R&D electronics developer at ABB Robotics.",
    linkedin: "https://www.linkedin.com/in/aiken-midttveit-913b01264/",
  },
  {
    name: "Kristoffer Tufta",
    email: "Kristoffer@eldion.no",
    image: "kristoffer.png",
    bio: "Siviløkonomstudent (HVL) innen Master of Business Administration – MBA, Regional Economics and Innovation. Har erfaring som labassistent fra Norsk Hydro.",
    bioEn: "MBA student (HVL) specialising in Regional Economics and Innovation. Experience as a laboratory assistant at Norsk Hydro.",
    linkedin: "https://www.linkedin.com/in/kristoffertufta/",
  },
];

export const mentors: Mentor[] = [
  {
    name: "Kristian Thorsen",
    role: "Akademisk mentor",
    roleEn: "Academic mentor",
    image: "kristian.png",
    title: "Førsteamanuensis ved Universitetet i Stavanger (UiS)",
    titleEn: "Associate Professor at the University of Stavanger (UiS)",
    description: [
      "Har dyptgående ekspertise innen elektronikkutvikling, robotikk og reguleringsteknikk.",
      "Bidrar med faglig tyngde og kvalitetssikring i utviklingen av de tekniske løsningene.",
    ],
    descriptionEn: [
      "Holds deep expertise in electronics development, robotics and control engineering.",
      "Provides academic depth and quality assurance in the development of the technical solutions.",
    ],
  },
  {
    name: "Stig Bruntveit",
    role: "Kommersiell mentor",
    roleEn: "Commercial mentor",
    image: "stig.png",
    title: "Direktør på Elkem Bjølvefossen",
    titleEn: "Director at Elkem Bjølvefossen",
    description: [
      "Har lang operasjonell ledererfaring, med 14 års bakgrunn fra olje & gass, samt bred erfaring fra aluminiumsindustrien og maritim sektor.",
      "Bidrar med inngående forståelse for kundenes behov og åpner dører til relevante industrielle miljøer.",
    ],
    descriptionEn: [
      "Brings extensive operational leadership experience, with 14 years in oil & gas plus broad experience across the aluminium industry and the maritime sector.",
      "Contributes an in-depth understanding of customer needs and opens doors to relevant industrial networks.",
    ],
  },
];
