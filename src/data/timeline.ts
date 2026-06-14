export interface TimelineEvent {
  date: string;
  logo: string;
  logoAlt: string;
  title: string;
  content: string;
  logoStyle?: string;
}

export const events: TimelineEvent[] = [
  {
    date: "21. Apr 2026",
    logo: "logo2.png",
    logoAlt: "Eldion",
    title: "Betydelig styrking av teamet",
    content:
      "Vi har gleden av å ønske Håvard, Harald, Aiken og Kristoffer velkommen til Eldion. Denne utvidelsen gir oss et kraftig kapasitetsløft og tilfører kritisk spisskompetanse; både for å akselerere den tekniske utviklingen og for å styrke selskapets kommersielle fundament.",
    logoStyle: "h-[50px] w-auto",
  },
  {
    date: "02. Apr 2026",
    logo: "innovasjon_norge.png",
    logoAlt: "Innovasjon Norge",
    title: "Tildelt 1 million i STUD-ENT-midler",
    content:
      "Eldion mottar 1 million kroner i finansiell støtte gjennom Innovasjon Norges STUD-ENT-program. Tildelingen markerer en viktig milepæl i selskapets kommersialiseringsløp og sikrer kapital til videre teknologiutvikling. Midlene vil blant annet benyttes til å fasilitere og gjennomføre den kommende pilottestingen i samarbeid med Hydro Aluminium AS på Husnes.",
  },
  {
    date: "04. Feb 2026",
    logo: "hydro.png",
    logoAlt: "Hydro",
    title: "Pilotavtale med Hydro Aluminium AS",
    content:
      "Eldion signerer samarbeidsavtale om et FoU-testprosjekt med Hydro Aluminium AS. Avtalen gir oss tilgang til å teste teknologien i full skala ved smelteverket på Husnes. Dette er en kritisk validering fra en global industriaktør og markerer starten på den industrielle utrullingen.",
  },
  {
    date: "29. Jan 2026",
    logo: "uis.png",
    logoAlt: "UiS",
    title: "Samarbeidsavtale med UiS & Akademisk Mentor",
    content:
      "Vi inngår samarbeidsavtale med Universitetet i Stavanger som sikrer tilgang til avanserte elektronikk- og prosesslaboratorier samt ressurser ved Lyspæren innovasjonshus. Samtidig fornyes mentoravtalen med Førsteamanuensis Kristian Thorsen, en ekspert innen elektronikk og robotikk, som kvalitetssikrer den tekniske utviklingen.",
  },
  {
    date: "25. Nov 2025",
    logo: "elkem.png",
    logoAlt: "Elkem",
    title: "Industritung mentor ombord",
    content:
      "Stig Bruntveit, Direktør ved Elkem Bjølvefossen, engasjeres som kommersiell mentor. Med 14 års ledererfaring fra olje, gass og aluminiumsindustrien, bidrar han med dyp operasjonell innsikt og åpner dører til relevante industrielle miljøer og pilotkunder.",
  },
  {
    date: "31. Okt 2025",
    logo: "innovasjon_norge.png",
    logoAlt: "Innovasjon Norge",
    title: "Tilskudd fra Innovasjon Norge",
    content:
      "Eldion mottar oppstartstilskudd fra Innovasjon Norge. Tildelingen validerer at forretningsidéen har betydelig nasjonalt og internasjonalt markedspotensial. Midlene dedikeres til å kartlegge betalingsvilje og sikre de første pilotkundene.",
  },
  {
    date: "01. Sep 2025",
    logo: "logo2.png",
    logoAlt: "eldION",
    title: "Teamet utvides",
    content:
      "Joar Dale Landa trer inn som CFO og medeier. Med bakgrunn fra industriell økonomi og erfaring fra olje- og industrisektoren, tilfører han strategisk tyngde som ruster selskapet for kommersiell skalering.",
    logoStyle: "h-[50px] w-auto",
  },
  {
    date: "15. Jun 2025",
    logo: "chip_icon.png",
    logoAlt: "MVP",
    title: "Vellykket Proof of Concept",
    content:
      "Masteroppgaven leveres med en fungerende prototype (MVP) som beviser teknologiens kjernefunksjon. Gjennom omfattende tester demonstreres «energy positive» drift: Systemet høster mer energi fra spillvarme enn det forbruker, og bekrefter at en batteriløs fremtid er teknisk gjennomførbar.",
  },
  {
    date: "07. Jan 2025",
    logo: "plogen.png",
    logoAlt: "Plogen",
    title: "Tildelt Plogen-midler",
    content:
      "Prosjektet mottar støtte fra Plogen-programmet, et initiativ fra Validé og UiS som finansierer forskningsbasert innovasjon med kommersielt potensial. Midlene finansierer materialer til utvikling av vår første prototype.",
  },
  {
    date: "04. Nov 2024",
    logo: "logo2.png",
    logoAlt: "eldION",
    title: "Eldion AS stiftes",
    content:
      "Selskapet etableres formelt for å kommersialisere teknologien som utvikles gjennom en masteroppgave ved UiS. Visjonen er klar: Å digitalisere industrien ved å fjerne behovet for batterier og kabler.",
    logoStyle: "h-[50px] w-auto",
  },
];
