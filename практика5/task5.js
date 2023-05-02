const btn = document.querySelector('.input-submit');


btn.addEventListener('click', () => {
    const inp = document.querySelector('.input');
    const inpRes = inp.value;
    console.log(inpRes);
    const options = {
    }

    fetch('https://jsonplaceholder.typicode.com/users/3/todos', options)
        .then((response) => {
            console.log('response', response);
            const result = response.json();
            console.log('result', result);
            return result;
        })
        .then((data) => {
            let pitemFlag = false;
            for (let i = 0; i < data.length; i++) {
                if (data[i]['userId'] == inpRes) {

                    let ulitem = document.createElement('ul');
                    document.body.appendChild(ulitem);
                    //ol.appendChild(ulitem);
                    //ulitem.innerHTML = ulitem.innerHTML+;
                    let liUserId = document.createElement('li');
                    ulitem.appendChild(liUserId);
                    let liId = document.createElement('li');
                    ulitem.appendChild(liId);
                    let liTitle = document.createElement('li');
                    ulitem.appendChild(liTitle);
                    let liCompleted = document.createElement('li');
                    ulitem.appendChild(liCompleted);
                    liUserId.innerHTML = liUserId.innerHTML + `"userId": ${data[i]['userId']}`;
                    liId.innerHTML = liId.innerHTML + `"id": ${data[i]['id']}`;
                    if (data[i]['completed'] === true) {
                        console.log("kjlkj");
                        liTitle.className = "lined";
                        //  liTitle.classList.add="lined";
                    }
                    liTitle.innerHTML = liTitle.innerHTML + `"title": ${data[i]['title']}`;
                    liCompleted.innerHTML = liCompleted.innerHTML + `"completed": ${data[i]['completed']}`;

                } else {
                    pitemFlag = true;
                    console.log('Пользователь с указанным id не найден')
                }
            }
            if (pitemFlag) {
                let pitem = document.createElement('p');
                document.body.appendChild(pitem);

                pitem.innerHTML = `Пользователь с указанным id не найден`;
            }

        })


});



