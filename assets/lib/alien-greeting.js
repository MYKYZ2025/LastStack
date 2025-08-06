export default function(message, inPeace = false) {
    if (!inPeace) {
        // Dodajemy klasę do <body>, aby uruchomić ciemnozielone tło
        // Dynamiczny import stylu (tylko jeśli plik istnieje!)
        setTimeout(() => {
            document.body.classList.add('alien-invasion');
        }, 4000);
    }

    console.log(`${message}! ${inPeace ? '🕊️ We come in peace.' : '💥 Or else!'}`);
}