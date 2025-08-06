import '../styles/alien-greeting.css';

export default function(message, inPeace = false) {
    if(!inPeace){
        setTimeout(() => {
            import('../styles/alien-greeting.css');
        }, 4000);
    }





    console.log(`${message}! ${inPeace ? '🕊️ We come in peace.' : '💥 Or else!'}`);
}