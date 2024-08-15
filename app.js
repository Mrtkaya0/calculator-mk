const buttons = document.querySelector('.buttons')
const display = document.querySelector('.display')

let buttonSarray = [
    7,
    8,
    9,
    '/',
    4,
    5,
    6,
    '*',
    1,
    2,
    3,
    '+',
    0,
    '.',
    '-',
    '=',
    'C',

];

let values = []

let cleanValues
for(let a = 0; a < buttonSarray.length;
    a++){
        let button = document.createElement('button');
        button.textContent = buttonSarray[a];
        buttons.appendChild(button)
    }

    let calcButtons = 
    document.querySelectorAll('.buttons button');
    calcButtons.forEach((item)=> {
        item.addEventListener('click', (e) => {
            calculateArray(e.target.textContent)
        });
    });

    let calculateArray =(value) => {
        if (value==='C') {
            values=[]
            display.textContent='0'
            return;

        }
        if (value != '=') {
            values.push(value);
            cleanValues = values.join('')
            display.textContent = cleanValues;
        }else {
            let resault = eval(cleanValues);
            display.textContent = resault;
            values =[];
        }
    }

