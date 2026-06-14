export interface TeamMember {
  name: string;
  email: string;
  image: string;
  bio: string;
  linkedin: string;
}

export interface Mentor {
  name: string;
  role: string;
  image: string;
  title: string;
  description: string[];
}

export const teamMembers: TeamMember[] = [
  {
    name: "Joar Dale Landa",
    email: "Joar@eldion.no",
    image: "joar.png",
    bio: "Sivilingeniør i industriell økonomi (UiS), med fagbrev som automatiker. Har erfaring som automasjonsingeniør hos Siemens Energy.",
    linkedin: "https://www.linkedin.com/in/joar-landa-699664137/",
  },
  {
    name: "Vetle Gjerver",
    email: "Vetle@eldion.no",
    image: "vetle.png",
    bio: "Sivilingeniør i robotteknologi og signalbehandling (UiS), med fagbrev som automatiker. Har erfaring som metering og robotikkingeniør hos Aker Solutions.",
    linkedin: "https://www.linkedin.com/in/vetle-gjerver/",
  },
  {
    name: "Håvard Syslak",
    email: "Haavard@eldion.no",
    image: "havard.png",
    bio: "Sivilingeniør i kybernetikk (NTNU), med fagbrev som automatiker. Har erfaring som Embedded & Electronics Engineer hos Blueye Robotics.",
    linkedin: "https://www.linkedin.com/in/h%C3%A5vard-syslak-2956ab176/",
  },
  {
    name: "Harald Domås",
    email: "Harald@eldion.no",
    image: "harald.png",
    bio: "Sivilingeniør i robotteknologi og signalbehandling (UiS), med fagbrev som avioniker. Har erfaring som R&D Project Engineer hos ABB Robotics.",
    linkedin: "https://www.linkedin.com/in/harald-dom%C3%A5s-91b324205/",
  },
  {
    name: "Aiken Midttveit",
    email: "Aiken@eldion.no",
    image: "aiken.png",
    bio: "Sivilingeniør i robotteknologi og signalbehandling (UiS), med fagbrev som automatiker. Har erfaring som R&D-elektronikkutvikler hos ABB Robotics.",
    linkedin: "https://www.linkedin.com/in/aiken-midttveit-913b01264/",
  },
  {
    name: "Kristoffer Tufta",
    email: "Kristoffer@eldion.no",
    image: "kristoffer.png",
    bio: "Siviløkonomstudent (HVL) innen Master of Business Administration – MBA, Regional Economics and Innovation. Har erfaring som labassistent fra Norsk Hydro.",
    linkedin: "https://www.linkedin.com/in/kristoffertufta/",
  },
];

export const mentors: Mentor[] = [
  {
    name: "Kristian Thorsen",
    role: "Akademisk mentor",
    image: "kristian.png",
    title: "Førsteamanuensis ved Universitetet i Stavanger (UiS)",
    description: [
      "Har dyptgående ekspertise innen elektronikkutvikling, robotikk og reguleringsteknikk.",
      "Bidrar med faglig tyngde og kvalitetssikring i utviklingen av de tekniske løsningene.",
    ],
  },
  {
    name: "Stig Bruntveit",
    role: "Kommersiell mentor",
    image: "stig.png",
    title: "Direktør på Elkem Bjølvefossen",
    description: [
      "Har lang operasjonell ledererfaring, med 14 års bakgrunn fra olje & gass, samt bred erfaring fra aluminiumsindustrien og maritim sektor.",
      "Bidrar med inngående forståelse for kundenes behov og åpner dører til relevante industrielle miljøer.",
    ],
  },
];
