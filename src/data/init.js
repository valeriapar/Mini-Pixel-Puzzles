import { v4 as uuidv4 } from 'uuid'

export const initializeApp = () => {

    if(!localStorage.getItem('progressi')) {
        const progressiDefault = {
        progressi1: [
            { id: 1, score: 0, isPassed: false},
            { id: 2, score: 0, isPassed: false},
            { id: 3, score: 0, isPassed: false},
            { id: 4, score: 0, isPassed: false},
            { id: 5, score: 0, isPassed: false}],    
        progressi2: [
            { id: 1, score: 0, isPassed: false},
            { id: 2, score: 0, isPassed: false},
            { id: 3, score: 0, isPassed: false},
            { id: 4, score: 0, isPassed: false},
            { id: 5, score: 0, isPassed: false}], 
        progressi3: [
            { id: 1, score: 0, isPassed: false},
            { id: 2, score: 0, isPassed: false},
            { id: 3, score: 0, isPassed: false},
            { id: 4, score: 0, isPassed: false},
            { id: 5, score: 0, isPassed: false}], 
    }
    localStorage.setItem('progressi', JSON.stringify(progressiDefault))
    }

    if (!localStorage.getItem('idBrowser')) {
        const idBrowser = uuidv4();
        localStorage.setItem('idBrowser', idBrowser);
    }
}
