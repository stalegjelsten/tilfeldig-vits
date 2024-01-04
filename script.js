let showAnswer = false;
let showAnswerButton = false;
let svar = "";
const jokes = [
  {
    vits: "Hørt om brannmannen som var utbrent?",
    svar: "",
    kilde: "https://www.heartmentality.no/vitser",
  },
  {
    vits: "Hørt om dykkeren som nådde bunnen?",
    svar: "",
    kilde: "https://www.heartmentality.no/vitser",
  },
  {
    vits: "Hørt om doktoren som var overlegen?",
    svar: "",
    kilde: "https://www.heartmentality.no/vitser",
  },
  {
    vits: "Hvor lærte haien engelsk?",
    svar: "Hai School",
    kilde: "https://www.heartmentality.no/vitser",
  },
  {
    vits: "Hva slags vin lager de mest av på sydpolen?",
    svar: "Ping vin",
    kilde: "https://www.heartmentality.no/vitser",
  },
  {
    vits: "Hva kaller man en mannlig svømmer? ",
    svar: "Badekar",
    kilde: "https://www.heartmentality.no/vitser",
  },
  {
    vits: "Hva kaller man et kirkelig statsoverhode som er veldig stolt? ",
    svar: "Skrytepave",
    kilde: "https://www.heartmentality.no/vitser",
  },
  {
    vits: "Hvor får hundene nyhetene sine i fra? ",
    svar: "Dachsrevyen vel.",
    kilde: "https://www.heartmentality.no/vitser",
  },
  {
    vits: "Hvilken seriehelt gråter mest? ",
    svar: "Hulken.",
    kilde: "https://www.heartmentality.no/vitser",
  },
  {
    vits: "Hva kaller du en boomerang som ikke kommer tilbake? ",
    svar: "En pinne.",
    kilde: "https://www.heartmentality.no/vitser",
  },
  {
    vits: "Jeg liker ikke honning. Den har en ekkel bismak.",
    svar: "",
    kilde: "https://www.heartmentality.no/vitser",
  },
  {
    vits: "Hva slags mat serverer de aldri i fengsel? ",
    svar: "Rømmegrøt. Hoho",
    kilde: "https://www.heartmentality.no/vitser",
  },
  {
    vits: "Hva er likheten mellom Plantasjen og Galtvort? ",
    svar: "Harry Potter!",
    kilde: "https://www.heartmentality.no/vitser",
  },
  {
    vits: "Hva kaller man det når noen i hæren driver med tøys og tull? ",
    svar: "Infanteri",
    kilde: "https://www.heartmentality.no/vitser",
  },
  {
    vits: "Hørt om kannibalen som var så slem at han dreit ut broren sin?",
    svar: "",
    kilde: "https://www.heartmentality.no/vitser",
  },
  {
    vits: "Vet du hvor piloter liker å dra på fest? ",
    svar: "Flyselskap!",
    kilde: "https://www.heartmentality.no/vitser",
  },
  {
    vits: "Men hvor drar snekkere på party? ",
    svar: "Hammerfest.",
    kilde: "https://www.heartmentality.no/vitser",
  },
  {
    vits: "Apropos snekkere. Hørt om snekkeren som listet seg rundt hjørnet?",
    svar: "",
    kilde: "https://www.heartmentality.no/vitser",
  },
  {
    vits: "Vet du hva matbutikken på svalbard har begynt med? ",
    svar: "Selbetjening.",
    kilde: "https://www.heartmentality.no/vitser",
  },
  {
    vits: "Hørt om selen som måtte gå til terapi? ",
    svar: "Han hadde så dårlig selbilde.",
    kilde: "https://www.heartmentality.no/vitser",
  },
  {
    vits: "Hvorfor gikk planten til terapi? ",
    svar: "Fordi den ville til roten av problemene sine.",
    kilde: "https://www.heartmentality.no/vitser",
  },
  {
    vits: "Og hvorfor dro kua til terapi? ",
    svar: "Den trengte noen gode Q-tips.",
    kilde: "https://www.heartmentality.no/vitser",
  },
  {
    vits: "Hva er det vanligste navnet på en havnearbeider? ",
    svar: "Kai.",
    kilde: "https://www.heartmentality.no/vitser",
  },
  {
    vits: "Hva får du hvis du blander en kalkulator med et menneske? ",
    svar: "En venn du kan regne med!",
    kilde: "https://www.heartmentality.no/vitser",
  },
];
const randJoke = () => {
  document.getElementById("svar").innerHTML = "";
  showAnswer = false;
  const rand = Math.floor(Math.random() * jokes.length);
  const joke = jokes[rand];
  svar = joke.svar;
  let blockquote = document.getElementById("joke");
  blockquote.innerHTML = joke.vits;
  if (joke.svar?.length > 0) {
    document.getElementById("answerBtn").style.display = "inline-block";
  } else {
    document.getElementById("answerBtn").style.display = "none";
  }
};

const visSvar = () => {
  showAnswer = true;
  document.getElementById("svar").innerHTML = svar;
};

randJoke();
