const btn = document.querySelector('.btn');
const pageNumber = document.querySelector('#pageNumber');
const limit = document.querySelector('#limit');
const resultNode = document.querySelector('.resultNode');

function renderize(array) {

    let i = 0;
    let cards = '';

    if (array) {
        for (i = 0; i < array.length; i++) {

            console.log(array[i]);
            let divRen = `<div class="card"><img class="card-image" src="${array[i]["download_url"]}"></div>`;
            cards = cards + divRen;

        }
        resultNode.innerHTML = cards;
    }
};
let saveData = JSON.parse(localStorage.getItem('oldData'));
renderize(saveData);

btn.addEventListener('click', () => {

    const pageNumberVal = pageNumber.value;
    const limitVal = limit.value;
    console.log(pageNumber.value);
    console.log(limitVal);
    function diapazon(num) {
        if ((num < 1) || (num > 10) || (Number.isNaN(num))) {
            console.log(typeof (num));

            return true;

        }
        else {

            return false;
        }
    }


    if ((diapazon(+pageNumberVal) === true) && (diapazon(+limitVal) === true)) {
        console.log('Номер страницы и лимит вне диапазона от 1 до 10');
    } else if (diapazon(+pageNumberVal) === true) {
        console.log('Номер страницы вне диапазона от 1 до 10');

    } else if (diapazon(+limitVal) === true) {
        console.log('Лимит вне диапазона от 1 до 10');

    } else {
        url = `https://picsum.photos/v2/list?page=${pageNumberVal}&limit=${limitVal}`;
        fetch(url)
            .then((response) => {

                console.log('response', response);

                const result = response.json();
                console.log('result', result);
                return result;
            })
            .then((data) => {

                console.log(data);
                renderize(data);
                localStorage.clear();
                let downLoaded = localStorage.setItem('oldData', JSON.stringify(data));

            })
            .then((r) => {
                console.log(r);

            })

    }


});
//const array = [{ "id": "10", "author": "Paul Jarvis", "width": 2500, "height": 1667, "url": "https://unsplash.com/photos/6J--NXulQCs", "download_url": "https://picsum.photos/id/10/2500/1667" }, { "id": "11", "author": "Paul Jarvis", "width": 2500, "height": 1667, "url": "https://unsplash.com/photos/Cm7oKel-X2Q", "download_url": "https://picsum.photos/id/11/2500/1667" }, { "id": "12", "author": "Paul Jarvis", "width": 2500, "height": 1667, "url": "https://unsplash.com/photos/I_9ILwtsl_k", "download_url": "https://picsum.photos/id/12/2500/1667" }, { "id": "13", "author": "Paul Jarvis", "width": 2500, "height": 1667, "url": "https://unsplash.com/photos/3MtiSMdnoCo", "download_url": "https://picsum.photos/id/13/2500/1667" }, { "id": "14", "author": "Paul Jarvis", "width": 2500, "height": 1667, "url": "https://unsplash.com/photos/IQ1kOQTJrOQ", "download_url": "https://picsum.photos/id/14/2500/1667" }, { "id": "15", "author": "Paul Jarvis", "width": 2500, "height": 1667, "url": "https://unsplash.com/photos/NYDo21ssGao", "download_url": "https://picsum.photos/id/15/2500/1667" }, { "id": "16", "author": "Paul Jarvis", "width": 2500, "height": 1667, "url": "https://unsplash.com/photos/gkT4FfgHO5o", "download_url": "https://picsum.photos/id/16/2500/1667" }, { "id": "17", "author": "Paul Jarvis", "width": 2500, "height": 1667, "url": "https://unsplash.com/photos/Ven2CV8IJ5A", "download_url": "https://picsum.photos/id/17/2500/1667" }, { "id": "18", "author": "Paul Jarvis", "width": 2500, "height": 1667, "url": "https://unsplash.com/photos/Ps2n0rShqaM", "download_url": "https://picsum.photos/id/18/2500/1667" }, { "id": "19", "author": "Paul Jarvis", "width": 2500, "height": 1667, "url": "https://unsplash.com/photos/P7Lh0usGcuk", "download_url": "https://picsum.photos/id/19/2500/1667" }];


