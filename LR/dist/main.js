var db = {
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
document.addEventListener('DOMContentLoaded', function () {
    var sizeSelectors = document.querySelectorAll('form input[name=size]');
    sizeSelectors.forEach(function (el) {
        el.addEventListener('click', changeSize);
    });
    document.forms[0].addEventListener('submit', showSumm);
});
function changeSize(el) {
    if (el.target.id == 'small') {
        document.querySelector('#toppings').classList.add('hiddenElement');
    }
    else {
        document.querySelector('#toppings').classList.remove('hiddenElement');
    }
}
function calcAll(els) {
    var summ = 0;
    if (els[0].checked) {
        summ += db['sizes'][els[0].id];
        if (els[5].checked) {
            summ += db['addition'][els[5].id];
        }
    }
    else {
        summ += db['sizes'][els[1].id];
        if (els[5].checked) {
            summ += db['addition'][els[5].id];
        }
        var bufSumm = summ;
        for (var i = 2; i <= 4; i++) {
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
function showSumm(el) {
    el.preventDefault();
    var summ = calcAll(el.target.elements);
    var summPart = document.getElementById('summ');
    if (summ === -1) {
        summPart.querySelector('.body').innerHTML = 'Добавьте как минимум 1 топпинг.';
    }
    else {
        summPart.querySelector('.body').innerHTML = "\u041A \u043E\u043F\u043B\u0430\u0442\u0435 " + summ + " \u0433\u0440\u043D.";
    }
    summPart.classList.remove('hiddenElement');
}
