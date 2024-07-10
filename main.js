let start = document.getElementById("start");

let title;
let input;
let body = document.body;
let post;
let img1;
let img2;

start.addEventListener("click", () => {
    //удалить элемент
    start.parentNode.removeChild(start);
    title = document.createElement("h1");
    input = document.createElement("input");

    title.textContent = "Введите своё имя!";

    body.append(title);
    body.append(input);

    input.addEventListener("keyup", (event) => {
        //event - это объект в котором хранится информация о событии
        if (event.code == "Enter") {
            title.textContent = "Добро пожаловать, " + input.value + "!";
            input.parentNode.removeChild(input);
            setTimeout(() => {
                title.parentNode.removeChild(title);
                iLoveMath();
            }, 2000);
        }
    })

})

function createTextLevel(question, answer, nextLevel) {
    title = document.createElement("h1");
    input = document.createElement("input");
    post = document.createElement("p");

    title.textContent = question;

    body.append(title);
    body.append(input);
    body.append(post);

    input.addEventListener("keyup", (event) => {
        if (event.code == "Enter") {
            if (input.value.toLowerCase() == answer) {
                input.parentNode.removeChild(input);
                post.textContent = "Ответ верный!";
                //через 2 секунды запускаем новый уровень
                setTimeout(() => {
                    title.parentNode.removeChild(title);
                    post.parentNode.removeChild(post);
                    //переходим на сл. уровень
                    if (nextLevel != null) {
                        nextLevel();
                    }
                }, 2000);
            } else {
                post.textContent = "Ответ неверный!"
                input.value = "";
            }
        }
    })

}

function iLoveMath() {
    createTextLevel("Сколько будет 7*8 ?", 56, iLoveGeo);
}

function iLoveGeo() {
    createTextLevel("Назовите столицу Ирана?", "тегеран", iLoveChemist);
}

function iLoveChemist() {
    createTextLevel("Какой элемент имеет название Hydrargyrum?", "ртуть", iLoveMount);
}


function createImgLevel(question, TrueLink, FalseLink, nextLevel) {
    title = document.createElement("h1");
    post = document.createElement("p");

    img1 = document.createElement("img");
    img2 = document.createElement("img");

    if (Math.floor(Math.random() * 10) % 2 == 1) {
        img1.src = TrueLink;
        img2.src = FalseLink;

        img1.addEventListener("click", trueAns);

        img2.addEventListener("click", falseAns);

    } else {
        img1.src = FalseLink;
        img2.src = TrueLink;
        img1.addEventListener("click", falseAns);

        img2.addEventListener("click", trueAns);
    }

    title.textContent = question;

    body.append(title);
    body.append(post);
    body.append(img1);
    body.append(img2);

    function trueAns() {
        img1.parentNode.removeChild(img1);
        img2.parentNode.removeChild(img2);
        post.textContent = "Верно!"
        //запускаем сл. уровень
        setTimeout(() => {
            title.parentNode.removeChild(title);
            post.parentNode.removeChild(post);
            //переходим на сл. уровень
            if (nextLevel != null) {
                nextLevel();
            }
        }, 2000);
    }

    function falseAns() {
        post.textContent = "Не верно!"
    }

}

function iLoveMount() {
    createImgLevel("На какой картинке есть озеро?", "./img/mount1.jpg", "./img/mount2.jpg", iLoveMount)
}