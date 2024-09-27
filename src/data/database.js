
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();

app.use(cors()); // Abilita CORS
app.use(express.json()); // Middleware per il parsing del JSON

// Configura la connessione a MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'valeria_parenti',
  password: 'tesilaurea',
  database: 'progetto_tesi'
});

db.connect(err => {
  if (err) {
    console.error('Errore di connessione: ', err);
    return;
  }
  console.log('Connesso a MySQL');
});

// ENDPOINT

//Giocatore
app.get('/api/giocatore/:idBrowser/:idProfilo', (req, res) => {
  const { idBrowser, idProfilo } = req.params;
  db.query('SELECT * FROM giocatore WHERE id_browser = ? AND id_profilo = ?', [idBrowser, idProfilo], (err, results) => {
    if (err) {
      return res.status(500).send('Errore nel server.')
    }
    if (results.length > 0) {
      return res.json({ esiste: true, mess: 'Dati presenti nel database', id: results[0].id })
    } else {
      db.query('INSERT INTO giocatore (id_browser, id_profilo) VALUES (?, ?)', [idBrowser, idProfilo], (insertErr, insertResults) => {
        if (insertErr) {
          return res.status(500).send('Errore inserimento nel server.')
        } else {
          const idGiocatore = insertResults.insertId;
          for (let i = 1; i < 6; i++) {
            db.query('INSERT INTO progressi (id_giocatore, id_livello) VALUES (?, ?)', [idGiocatore, i], (progressiErr, progressi) => {
              if (insertErr) {
                return res.status(500).send('Errore inserimento progressi.')
              }
            })
          }
          return res.status(201).json({
            esiste: false,
            mess: 'Iserisco nel database: ',
            idBrowser: idBrowser,
            idProfilo: idProfilo,
            progressi: 'Progressi ok.',
            id: idGiocatore
          })
        }
      })
    }
  });
});

//Progressi - Caricamento
app.get('/api/progressi/:idGiocatore', (req, res) => {
  const { idGiocatore } = req.params;
  db.query('SELECT * FROM PROGRESSI WHERE id_giocatore = ?', [idGiocatore], (err, results) => {
    if (err) {
      return res.status(500).send('Errore nel server (Endpoint -> Progressi).')
    }
    return res.json({ mess: 'Progressi caricati' })
  })
})

//Progressi - Aggiornamento
app.post('/api/update_progressi', (req, res) => {
  const { idGiocatore, idLevel, tempoTrascorso, isPassed } = req.body;
  console.log(idGiocatore, idLevel, tempoTrascorso, isPassed);
  db.query('UPDATE progressi SET tempo_trascorso = ? , completato = ? WHERE id_giocatore = ? AND id_livello = ?', [tempoTrascorso, isPassed, idGiocatore, idLevel], (err, result) => {
    if (err) {
      return res.status(500).send('Errore nel server (Endpoint -> ProgressiUpdate).')
    }
    if (result.affectedRows === 0) {
      return res.status(404).send(`Giocatore non trovato. ${idGiocatore}`)
    }
    return res.json({ mess: 'Aggiornamento progressi' })
  })
})

// Avvia il server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server in ascolto sulla porta ${PORT}`);
});

