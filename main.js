const one = document.getElementById("one");
const two = document.getElementById("two");
const main = document.getElementById("main");
const firstRow = document.getElementById("firstRow");
const secondRow = document.getElementById("secondRow");
const thirdRow = document.getElementById("thirdRow");
const refresh = document.getElementById("refresh_btn");



let obj = {
    one: null,
    two: null,
    three: null,
    four: null,
    five: null,
    six: null,
    seven: null,
    eight: null,
    nine: null
};


var clickType = true
const tic = (id) => {
    const box = document.getElementById(id);

    if (clickType) {
        const newCircle = document.createElement("div");
        newCircle.className = "circle"
        box.appendChild(newCircle);
        box.onclick = false;
        clickType = false;
        obj[id] = 0;
        console.log(obj.one)
        setTimeout(() => {
            check();
        });
    } else {
        const newCross = document.createElement("div");
        newCross.className = "cross";
        box.appendChild(newCross);
        box.onclick = false;
        obj[id] = 1;
        clickType = true;
        setTimeout(() => {
            check();
        });
    }
}


refresh.onclick = () => {
    window.location.reload();
}

const disAble = () => {
    var childNodes = document.getElementById("main").getElementsByTagName('*');
    for (var node of childNodes) {
        node.onclick = false;
    }
    refresh.style.display = "block";
}

const check = () => {
    if (obj.one == obj.two && obj.one == obj.three && obj.two == obj.three && obj.one != null && obj.two != null && obj.three != null) {

        const newLine = document.createElement("div");
        newLine.className = "vertical_line";
        firstRow.appendChild(newLine);
        disAble();

    } else if (obj.four == obj.five && obj.four == obj.six && obj.five == obj.six && obj.five != null && obj.six != null && obj.four != null) {

        const newLine = document.createElement("div");
        newLine.className = "vertical_line";
        secondRow.appendChild(newLine);
        disAble();

    } else if (obj.seven == obj.eight && obj.seven == obj.nine && obj.eight == obj.nine && obj.eight != null && obj.nine != null && obj.seven != null) {

        const newLine = document.createElement("div");
        newLine.className = "vertical_line";
        thirdRow.appendChild(newLine);
        disAble();

    } else if (obj.one == obj.four && obj.one == obj.seven && obj.four == obj.seven && obj.four != null && obj.seven != null && obj.one != null) {

        const newLine = document.createElement("div");
        newLine.className = "horizontal_line";
        secondRow.children[0].appendChild(newLine);
        disAble();

    } else if (obj.two == obj.five && obj.two == obj.eight && obj.five == obj.eight && obj.five != null && obj.eight != null && obj.two != null) {

        const newLine = document.createElement("div");
        newLine.className = "horizontal_line";
        secondRow.children[1].appendChild(newLine);
        disAble();

    } else if (obj.three == obj.six && obj.three == obj.nine && obj.six == obj.nine && obj.six != null && obj.nine != null && obj.three != null) {

        const newLine = document.createElement("div");
        newLine.className = "horizontal_line";
        secondRow.children[2].appendChild(newLine);
        disAble();

    } else if (obj.one == obj.five && obj.one == obj.nine && obj.five == obj.nine && obj.five != null && obj.nine != null && obj.one != null) {

        const newLine = document.createElement("div");
        newLine.className = "horizontal_line";
        newLine.style.transform = "rotate(-45deg)";
        newLine.style.height = "370px"
        secondRow.children[1].appendChild(newLine);
        disAble();

    } else if (obj.three == obj.five && obj.three == obj.seven && obj.five == obj.seven && obj.five != null && obj.seven != null && obj.three != null) {
        const newLine = document.createElement("div");
        newLine.className = "horizontal_line";
        newLine.style.transform = "rotate(45deg)";
        newLine.style.height = "370px"
        secondRow.children[1].appendChild(newLine);
        disAble();

    } else if (obj.one != null && obj.two != null && obj.three != null && obj.four != null && obj.five != null && obj.six != null && obj.seven != null && obj.eight != null && obj.nine != null) {
        disAble();
    }
}


