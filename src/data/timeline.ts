export interface TimelineEvent {
  date: string;
  dateEn: string;
  logo: string;
  logoAlt: string;
  title: string;
  titleEn: string;
  content: string;
  contentEn: string;
  logoStyle?: string;
}

export const events: TimelineEvent[] = [
  {
    date: "21. Apr 2026",
    dateEn: "Apr 21, 2026",
    logo: "logo2.png",
    logoAlt: "Eldion",
    title: "Betydelig styrking av teamet",
    titleEn: "Significant strengthening of the team",
    content:
      "Vi har gleden av å ønske Håvard, Harald, Aiken og Kristoffer velkommen til Eldion. Denne utvidelsen gir oss et kraftig kapasitetsløft og tilfører kritisk spisskompetanse; både for å akselerere den tekniske utviklingen og for å styrke selskapets kommersielle fundament.",
    contentEn:
      "We are delighted to welcome Håvard, Harald, Aiken and Kristoffer to Eldion. This expansion gives us a major boost in capacity and adds critical specialist expertise — both to accelerate the technical development and to strengthen the company's commercial foundation.",
    logoStyle: "h-[50px] w-auto",
  },
  {
    date: "02. Apr 2026",
    dateEn: "Apr 02, 2026",
    logo: "innovasjon_norge.png",
    logoAlt: "Innovasjon Norge",
    title: "Tildelt 1 million i STUD-ENT-midler",
    titleEn: "Awarded NOK 1 million in STUD-ENT funding",
    content:
      "Eldion mottar 1 million kroner i finansiell støtte gjennom Innovasjon Norges STUD-ENT-program. Tildelingen markerer en viktig milepæl i selskapets kommersialiseringsløp og sikrer kapital til videre teknologiutvikling. Midlene vil blant annet benyttes til å fasilitere og gjennomføre den kommende pilottestingen i samarbeid med Hydro Aluminium AS på Husnes.",
    contentEn:
      "Eldion receives NOK 1 million in financial support through Innovation Norway's STUD-ENT programme. The award marks an important milestone in the company's commercialisation journey and secures capital for further technology development. Among other things, the funds will be used to facilitate and carry out the upcoming pilot testing in collaboration with Hydro Aluminium AS at Husnes.",
  },
  {
    date: "04. Feb 2026",
    dateEn: "Feb 04, 2026",
    logo: "hydro.png",
    logoAlt: "Hydro",
    title: "Pilotavtale med Hydro Aluminium AS",
    titleEn: "Pilot agreement with Hydro Aluminium AS",
    content:
      "Eldion signerer samarbeidsavtale om et FoU-testprosjekt med Hydro Aluminium AS. Avtalen gir oss tilgang til å teste teknologien i full skala ved smelteverket på Husnes. Dette er en kritisk validering fra en global industriaktør og markerer starten på den industrielle utrullingen.",
    contentEn:
      "Eldion signs a collaboration agreement for an R&D test project with Hydro Aluminium AS. The agreement gives us access to test the technology at full scale at the Husnes smelter. This is a critical validation from a global industrial player and marks the start of the industrial rollout.",
  },
  {
    date: "29. Jan 2026",
    dateEn: "Jan 29, 2026",
    logo: "uis.png",
    logoAlt: "UiS",
    title: "Samarbeidsavtale med UiS & Akademisk Mentor",
    titleEn: "Collaboration agreement with UiS & academic mentor",
    content:
      "Vi inngår samarbeidsavtale med Universitetet i Stavanger som sikrer tilgang til avanserte elektronikk- og prosesslaboratorier samt ressurser ved Lyspæren innovasjonshus. Samtidig fornyes mentoravtalen med Førsteamanuensis Kristian Thorsen, en ekspert innen elektronikk og robotikk, som kvalitetssikrer den tekniske utviklingen.",
    contentEn:
      "We enter into a collaboration agreement with the University of Stavanger, securing access to advanced electronics and process laboratories as well as resources at the Lyspæren innovation hub. At the same time, the mentorship agreement with Associate Professor Kristian Thorsen — an expert in electronics and robotics — is renewed, ensuring quality assurance of the technical development.",
  },
  {
    date: "25. Nov 2025",
    dateEn: "Nov 25, 2025",
    logo: "elkem.png",
    logoAlt: "Elkem",
    title: "Industritung mentor ombord",
    titleEn: "Industry-heavyweight mentor on board",
    content:
      "Stig Bruntveit, Direktør ved Elkem Bjølvefossen, engasjeres som kommersiell mentor. Med 14 års ledererfaring fra olje, gass og aluminiumsindustrien, bidrar han med dyp operasjonell innsikt og åpner dører til relevante industrielle miljøer og pilotkunder.",
    contentEn:
      "Stig Bruntveit, Director at Elkem Bjølvefossen, joins as commercial mentor. With 14 years of leadership experience across the oil, gas and aluminium industries, he contributes deep operational insight and opens doors to relevant industrial networks and pilot customers.",
  },
  {
    date: "31. Okt 2025",
    dateEn: "Oct 31, 2025",
    logo: "innovasjon_norge.png",
    logoAlt: "Innovasjon Norge",
    title: "Tilskudd fra Innovasjon Norge",
    titleEn: "Grant from Innovation Norway",
    content:
      "Eldion mottar oppstartstilskudd fra Innovasjon Norge. Tildelingen validerer at forretningsidéen har betydelig nasjonalt og internasjonalt markedspotensial. Midlene dedikeres til å kartlegge betalingsvilje og sikre de første pilotkundene.",
    contentEn:
      "Eldion receives a start-up grant from Innovation Norway. The award validates that the business idea has significant national and international market potential. The funds are dedicated to mapping willingness to pay and securing the first pilot customers.",
  },
  {
    date: "01. Sep 2025",
    dateEn: "Sep 01, 2025",
    logo: "logo2.png",
    logoAlt: "eldION",
    title: "Teamet utvides",
    titleEn: "The team expands",
    content:
      "Joar Dale Landa trer inn som CFO og medeier. Med bakgrunn fra industriell økonomi og erfaring fra olje- og industrisektoren, tilfører han strategisk tyngde som ruster selskapet for kommersiell skalering.",
    contentEn:
      "Joar Dale Landa joins as CFO and co-owner. With a background in industrial economics and experience from the oil and industrial sectors, he adds strategic weight that prepares the company for commercial scaling.",
    logoStyle: "h-[50px] w-auto",
  },
  {
    date: "15. Jun 2025",
    dateEn: "Jun 15, 2025",
    logo: "chip_icon.png",
    logoAlt: "MVP",
    title: "Vellykket Proof of Concept",
    titleEn: "Successful proof of concept",
    content:
      "Masteroppgaven leveres med en fungerende prototype (MVP) som beviser teknologiens kjernefunksjon. Gjennom omfattende tester demonstreres «energy positive» drift: Systemet høster mer energi fra spillvarme enn det forbruker, og bekrefter at en batteriløs fremtid er teknisk gjennomførbar.",
    contentEn:
      "The master's thesis is delivered with a working prototype (MVP) that proves the technology's core function. Through extensive testing, “energy-positive” operation is demonstrated: the system harvests more energy from waste heat than it consumes, confirming that a battery-free future is technically achievable.",
  },
  {
    date: "07. Jan 2025",
    dateEn: "Jan 07, 2025",
    logo: "plogen.png",
    logoAlt: "Plogen",
    title: "Tildelt Plogen-midler",
    titleEn: "Awarded Plogen funding",
    content:
      "Prosjektet mottar støtte fra Plogen-programmet, et initiativ fra Validé og UiS som finansierer forskningsbasert innovasjon med kommersielt potensial. Midlene finansierer materialer til utvikling av vår første prototype.",
    contentEn:
      "The project receives support from the Plogen programme, an initiative by Validé and UiS that funds research-based innovation with commercial potential. The funds finance materials for developing our first prototype.",
  },
  {
    date: "04. Nov 2024",
    dateEn: "Nov 04, 2024",
    logo: "logo2.png",
    logoAlt: "eldION",
    title: "Eldion AS stiftes",
    titleEn: "Eldion AS is founded",
    content:
      "Selskapet etableres formelt for å kommersialisere teknologien som utvikles gjennom en masteroppgave ved UiS. Visjonen er klar: Å digitalisere industrien ved å fjerne behovet for batterier og kabler.",
    contentEn:
      "The company is formally established to commercialise the technology developed through a master's thesis at UiS. The vision is clear: to digitalise industry by removing the need for batteries and cables.",
  },
];
