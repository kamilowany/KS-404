function losuj(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// opcjonalne zakłócenia — litery zmienione, cyfry, zamazania
function glitch(tekst) {
  const znaki = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  return tekst
    .split("")
    .map(l => (Math.random() < 0.1 ? losuj(znaki) : l))
    .join("");
}

function generujFragment() {
  const preambuly = [
    "==[KS-404]::",
    "::LOG//",
    "--pkt.zapisu>>",
    "[SIGNAL]::",
    "~~~TRACE 0x",
    "sys/err:",
    "mem::",
  ];

  const byty = [
    "fragment",
    "odprysk",
    "echo",
    "sens",
    "pamięć",
    "sygnał",
    "dane",
    "odbiór",
    "świadomość",
    "punkt",
    "reakcja",
    "dreszcz",
    "obiekt",
    "szum",
  ];

  const akcje = [
    "utracono",
    "przesunięto",
    "zniekształcono",
    "wstrzymano",
    "sklonowano?",
    "nieznany",
    "zarchiwizowano",
    "niedostępny",
    "przeniknięty",
    "zawieszony",
    "potwierdzono",
    "zamrożono",
    "nieoczekiwany",
    "przetworzony"
  ];

  const anomalie = [
    ">>> przerwanie",
    "::: glitch w warstwie",
    "bez ram czasowych",
    "status = NULL",
    "fałszywy impuls",
    "pakiet emocjonalny nieodczytywalny",
    "brak łączności z rzeczywistością",
    "tożsamość: rozszczepiona",
    "czas: przeciekł",
    "echa dawnego logu",
    "format nieczytelny",
    "retencja wspomnień = 3%",
  ];

  // Losowo łączy ze sobą różne poziomy językowe
  return `${glitch(losuj(preambuly))} ${losuj(byty)} ${losuj(akcje)} // ${losuj(anomalie)}`
}

function generujLog() {
  const kontener = document.getElementById("log-container");

  const log = document.createElement("div");
  log.className = "log-entry";

  const naglowek = document.createElement("h1");
  naglowek.textContent = "[KS-404] › odzysk niekompletny";

  const tresc = document.createElement("p");
  tresc.textContent = generujFragment();

  log.appendChild(naglowek);
  log.appendChild(tresc);
  kontener.appendChild(log);
}

generujLog();
