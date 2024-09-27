import React, { useEffect, useState, useReducer } from 'react'
import { useParams } from 'react-router-dom';
import { levels } from '../game/levels';
import reducer from '../game/component/ModalResponse/reducer';
import { APRI_MODAL, CHIUDI_MODAL } from '../game/component/ModalResponse/reducer';
import LevelNotPassed from '../game/component/ModalResponse/LevelNotPassed';
import TopBarGame from '../game/component/TopBarGame';
import ColumnHints from '../game/component/ColumnHints';
import GridWithRowHints from '../game/component/GridWithRowHints'
import BottomBarGame from '../game/component/BottomBarGame';
import BackButton from '../game/component/BackButton';
import LevelSuccess from '../game/component/ModalResponse/LevelSuccess';
import { aggiornaProgressi, caricaProgressi, updateProgressi } from '../data/dataPlayer';
import { usePlayer } from '../GiocatoreContext';

const AppContext = React.createContext()


const Nonogram = () => {
    let info = useParams();

    //ID GIOCATORE-----------------------------------------------------------------------
    const idPlayer = Number(info.idPlayer);

    //Inizializzazione del livello-------------------------------------------------------
    const level = levels.filter(el => el.id === Number(info.id));
    const [grid, setGrid] = useState(Array(5).fill(Array(5).fill(0)));
    const columnHints = level[0].columnHints;
    const rowHints = level[0].rowHints;
    const [errori, setErrori] = useState(0);
    const [helpsUsed, setHelpsUsed] = useState(0);
    const [celleErrate, setCelleErrate] = useState({});
    const [resetCounter, setResetCounter] = useState(0);
    const [stopTimer, setStopTimer] = useState(false);

    const { state, dispatch } = usePlayer();

    useEffect(() => {
        console.log(state);
        dispatch({
            type: 'SET_PLAYER',
            payload: { ...state, idLevel: level[0].id + 1 }
        })
    }, [])

    //Modal per Livello risolto/non risolto-------------------------------------------------------
    const initializeStateSuccess = {
        modalContent: [{ id: level[0].id, img: level[0].img, name: level[0].name }],
        isModalOpen: false
    }
    const initializeStateNotSuccess = {
        isModalOpen: false
    }
    const [stateSuccess, dispatchSuccess] = useReducer(reducer, initializeStateSuccess);
    const [stateNotSuccess, dispatchNotSuccess] = useReducer(reducer, initializeStateNotSuccess);

    const openModal = (el) => {
        if (el) {
            dispatchSuccess({ type: APRI_MODAL })
        } else dispatchNotSuccess({ type: APRI_MODAL })
    }
    const closeModal = (el) => {
        setStopTimer(false);
        dispatchSuccess({ type: CHIUDI_MODAL });
        dispatchNotSuccess({ type: CHIUDI_MODAL });
    }

    //Gestione del click------------------------------------------------------------------
    const toggleCell = (rowIndex, columnIndex) => {
        let i = false; //Boolean che gestisce il reset della griglia in caso di errori===3
        const newGrid = grid.map((row, rIndex) => {
            if (rIndex === rowIndex) {
                return row.map((cell, cIndex) => {
                    if (cIndex === columnIndex) {
                        if (level[0].solution[rIndex][cIndex] === 1) {
                            if (cell === 2) {
                                return cell;
                            } else {
                                return cell === 0 ? 1 : 0; //Inverte lo stato della cella
                            }
                        } else {
                            if (errori === 3) {
                                setErrori(5)
                                setStopTimer(true)
                                openModal(false)
                                resetGrid()
                                i = true;
                            } else {
                                verifyCell(rowIndex, columnIndex);
                                return cell === 0 ? 0 : 1; //Inverte lo stato della cella
                            }
                        }
                    }
                    return cell;
                })
            }
            return row;
        });
        if (i === false) {
            setGrid(newGrid);
        }
    }

    //RIVELA un aiuto -------------------------------------------------------
    const revealHelp = () => {
        const solution = level[0].solution;
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                if (solution[i][j] === 1 && grid[i][j] !== 2 && grid[i][j] !== 1) {
                    const newGrid = grid.map((row) => [...row]);
                    newGrid[i][j] = 2;
                    setGrid(newGrid);
                    setHelpsUsed(helpsUsed + 1)
                    return;
                }
            }
        }
    }

    //RESET LIVELLO -------------------------------------------------------
    const resetGrid = () => {
        setGrid(Array(5).fill(Array(5).fill(0)));
        setErrori(0);
        setHelpsUsed(0);
        setCelleErrate({});
        setResetCounter(oldValue => oldValue + 1);
    }

    //FeedBack MOSSA ERRATA -------------------------------------------------------
    const verifyCell = (rowIndex, columnIndex) => {
        const cellaErrata = grid[rowIndex][columnIndex] !== level[0].solution[rowIndex][columnIndex];
        if (!cellaErrata) {
            setErrori(oldValue => oldValue + 1);
            const cellKey = `${rowIndex}-${columnIndex}`;
            const newCelleErrate = { ...celleErrate, [cellKey]: true };
            setCelleErrate(newCelleErrate);
        }
    }

    //Effetto visivo al passaggio del mouse -------------------------------------------------------
    const [highlighted, setHighlighted] = useState({ row: null, col: null });

    const handleMouseEnter = (rowIndex, colIndex) => {
        setHighlighted({ row: rowIndex, col: colIndex })
    }

    const handleMouseLeave = () => {
        setHighlighted({ row: null, col: null })
    }

    //Verifica Soluzione -------------------------------------------------------
    useEffect(() => {
        const currentSolution = level[0].solution;
        const isCorrect = grid.every(
            (row, rIndex) => row.every(
                (cell, colIndex) => cell === currentSolution[rIndex][colIndex] || cell === 2
            )
        );
        const dati = caricaProgressi()
        const lev = dati[`progressi${idPlayer}`].find((lev) => lev.id === level[0].id + 1)
        if (isCorrect) {
            console.log(state);
            if (lev.isPassed === false) {
                aggiornaProgressi(idPlayer, state.idLevel, state.score, true);
                console.log(dati);
            }
            setStopTimer(true)
            openModal(true);
            resetGrid();
        }
    }, [level, grid, idPlayer, state.score])

    return (
        <AppContext.Provider
            value={{
                toggleCell,
                handleMouseEnter,
                handleMouseLeave,
                celleErrate,
                highlighted,
                rowHints,
                grid
            }}
        >
            <LevelSuccess
                modalContent={stateSuccess.modalContent}
                modalState={stateSuccess.isModalOpen}
                chiudiModal={closeModal}
            />
            <LevelNotPassed
                modalState={stateNotSuccess.isModalOpen}
                chiudiModal={closeModal}
            />
            <div className='d-flex align-items-center justify-content-center p-md-5 container shadow rounded' style={{ backgroundColor: '#F6EACB', position: 'relative' }}>
                <BackButton />
                <div className='nonogram madimi-one-regular'>
                    <TopBarGame level={level} />
                    <ColumnHints highlighted={highlighted} columnHints={columnHints} />
                    <GridWithRowHints appContext={AppContext} />
                    <BottomBarGame reset={resetGrid} errori={errori} revealHelp={revealHelp} helpsUsed={helpsUsed} resetSignal={resetCounter} stopSignal={stopTimer} />
                </div>
            </div>
        </AppContext.Provider>
    );
};

export default Nonogram