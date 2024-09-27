import tree from './img/svg/tree.svg'
import candy from './img/svg/candy.svg'
import face from './img/svg/face.svg'
import ghost from './img/svg/ghost.svg'
import heart from './img/svg/heart.svg'

export const levels = [{
    id: 0,
    name: 'Albero',
    solution: 
        [[0, 0, 1, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 1, 1, 1, 0],
        [1, 1, 1, 1, 1],
        [0, 0, 1, 0, 0]],
    rowHints:[[1], [3], [3], [5], [1]],
    columnHints:[[1], [3], [5], [3], [1]],
    img: tree
},
{
    id: 1,
    name: 'Caramella',
    solution: 
        [[0, 1, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [0, 1, 0, 1, 0],
        [0, 1, 1, 1, 1],
        [0, 0, 0, 1, 0]],
    rowHints:[[1], [4], [1, 1], [4], [1]],
    columnHints:[[1], [4], [1, 1], [4], [1]],
    img: candy
},
{
    id: 2,
    name: 'Viso',
    solution: 
        [[1, 1, 1, 1, 1],
        [1, 0, 1, 0, 1],
        [1, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 1]],
    rowHints:[[5], [1, 1, 1], [5], [1, 1], [5]],
    columnHints:[[5], [1, 1, 1], [3, 1], [1, 1, 1], [5]],
    img: face
},
{
    id: 3,
    name: 'Fantasma',
    solution: 
        [[0, 1, 1, 1, 0],
        [1, 0, 1, 0, 1],
        [1, 1, 1, 1, 1],
        [1, 1, 1, 1, 1],
        [1, 0, 1, 0, 1]],
    rowHints:[[3], [1, 1, 1], [5], [5], [1, 1, 1]],
    columnHints:[[4], [1, 2], [5], [1, 2], [4]],
    img: ghost
},
{
    id: 4,
    name: 'Cuore',
    solution: 
        [[0, 1, 0, 1, 0],
        [1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0]],
    rowHints:[[1, 1], [1, 1, 1], [1, 1], [1, 1], [1]],
    columnHints:[[2], [1, 1], [1, 1], [1, 1], [2]],
    img: heart
}
]