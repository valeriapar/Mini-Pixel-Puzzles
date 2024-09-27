import axios from "axios"

let idGiocatore;
//LocalStorage

export function caricaProgressi () {
    const progressiStringa = localStorage.getItem('progressi');
    return progressiStringa ? JSON.parse(progressiStringa) : {};
}

export function aggiornaProgressi (idProfilo, idLivello, score, stato) {
    const progressi = caricaProgressi();
    if(progressi[`progressi${idProfilo}`]) {
        const livello = progressi[`progressi${idProfilo}`].find((id) => id.id === idLivello)
        if(livello) {
            livello.score = score;
            if(stato === true ) {
                livello.isPassed = stato;
            }
        }
    }
    localStorage.setItem('progressi', JSON.stringify(progressi))
    console.log(progressi);
}


//Dati database

export const verificaGiocatore = async (idProfilo) => {
    const idBrowser = localStorage.getItem('idBrowser');
    try {
        const response = await axios.get(`http://localhost:3001/api/giocatore/${idBrowser}/${idProfilo}`)
        if (!response.data.esiste) {
            console.log(response.data.idBrowser + ' --- ' + response.data.idProfilo);
            console.log(response.data.progressi);
        }
        localStorage.setItem('ID', JSON.stringify(response.data.id));
        idGiocatore = Number(localStorage.getItem('ID'))
        console.log(idGiocatore);
        return response.data.id;
    } catch (error) {
        console.error('Errore: ', error)
    }
}

//Credo che non mi serva
export const getProgressi = async (idGiocatore) => {
    try {
        const response = await axios.get(`http://localhost:3001/api/progressi/${idGiocatore}`);
        return response.data;
    } catch (error) {
        console.error('Errore nel recupero dei progressi');
        return null
    }
}

export const updateProgressi = async (idLevel, tempoTrascorso, isPassed) => {
    console.log(idGiocatore, idLevel, tempoTrascorso, isPassed);
    try {
        const response = await axios.post(`http://localhost:3001/api/update_progressi`, {
            idGiocatore,
            idLevel,
            tempoTrascorso,
            isPassed
        });
        console.log(response.data);
    } catch (error) {
        console.error("Errore nell'aggiornamento dei progressi:", error.response ? error.response.data : error.message);
    }
}







export const userData = [
    {
        id: 1,
        level: [{
            id: 1,
            score: 20,
            isPassed: false
        },
        {
            id: 2,
            score: 20,
            isPassed: false
        },
        {
            id: 3,
            score: 20,
            isPassed: false
        },
        {
            id: 4,
            score: 20,
            isPassed: false
        },
        {
            id: 5,
            score: 20,
            isPassed: false
        }]

    }
]