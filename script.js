const jokes = [
  "Hørt om brannmannen som var utbrent?",
  "Hørt om dykkeren som nådde bunnen?",
  "Hørt om doktoren som var overlegen?",
  "Hvor lærte haien engelsk? Hai Schoo",
  "Hva slags vin lager de mest av på sydpolen? Ping vin",
  "Hva kaller man en mannlig svømmer? Badekar",
  "Hva kaller man et kirkelig statsoverhode som er veldig stolt? Skrytepave",
  "Hvor får hundene nyhetene sine i fra? Dachsrevyen vel.",
  "Hvilken seriehelt gråter mest? Hulken.",
  "Hva kaller du en boomerang som ikke kommer tilbake? En pinne.",
  "Jeg liker ikke honning. Den har en ekkel bismak.",
  "Hva slags mat serverer de aldri i fengsel? Rømmegrøt. Hoho",
  "Hva er likheten mellom Plantasjen og Galtvort? Harry Potter!",
  "Hva kaller man det når noen i hæren driver med tøys og tull? Infanteri",
  "Hørt om kannibalen som var så slem at han dreit ut broren sin?",
  "Vet du hvor piloter liker å dra på fest? Flyselskap!",
  "Men hvor drar snekkere på party? Hammerfest.",
  "Apropos snekkere. Hørt om snekkeren som listet seg rundt hjørnet?",
  "Vet du hva matbutikken på svalbard har begynt med? Selbetjening.",
  "Hørt om selen som måtte gå til terapi? Han hadde så dårlig selbilde.",
  "Hvorfor gikk planten til terapi? Fordi den ville til roten av problemene sine.",
  "Og hvorfor dro kua til terapi? Den trengte noen gode Q-tips.",
  "Hva er det vanligste navnet på en havnearbeider? Kai.",
  "Hva får du hvis du blander en kalkulator med et menneske? En venn du kan regne med!",
];
const randJoke = () => {
  const rand = Math.floor(Math.random() * jokes.length);
  document.getElementById("joke").innerHTML = jokes[rand];
};
randJoke();
