const db = {
    'sizes': {
        'small': 10,
        'large': 25
    },
    'toppings': {
        'chocolate': 5,
        'caramel': 6,
        'berry': 10
    },
    'addition': {
        'marshmallow': 5
    }
};

document.addEventListener('DOMContentLoaded', () => {
    let sizeSelectors: NodeListOf<Element> = document.querySelectorAll('form input[name=size]');
    sizeSelectors.forEach((el) => {
        el.addEventListener('click', changeSize);
    });

    document.forms[0].addEventListener('submit', showSumm);
});

function changeSize(el): void {
    if (el.target.id == 'small') {
        document.querySelector('#toppings').classList.add('hiddenElement');
    } else {
        document.querySelector('#toppings').classList.remove('hiddenElement');
    }
}


function calcAll(els: HTMLInputElement[]): number {
    let summ: number = 0;
    if (els[0].checked) {
        summ += db['sizes'][els[0].id];
        
        if (els[5].checked) {
            summ += db['addition'][els[5].id];
        }
    } else {
        summ += db['sizes'][els[1].id];
        
        if (els[5].checked) {
            summ += db['addition'][els[5].id];
        }

        let bufSumm: number = summ;
        for (let i = 2; i <= 4; i++) {
            if (els[i].checked) {
                summ += db['toppings'][els[i].id];
            }
        }
        if (bufSumm === summ) {
            return -1;
        }
    }
    console.log(summ);
    return summ;
}

function showSumm(el): void {
    el.preventDefault();
    let summ: number = calcAll(el.target.elements);
    let summPart: Element = document.getElementById('summ');
    if (summ === -1) {
        summPart.querySelector('.body').innerHTML = 'Добавьте как минимум 1 топпинг.';
    } else {
        summPart.querySelector('.body').innerHTML = `К оплате ${summ} грн.`;
    }
    summPart.classList.remove('hiddenElement');
}