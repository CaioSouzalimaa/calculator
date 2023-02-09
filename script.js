function insert (num) {
    let defaultValue = document.getElementById('last-calc').innerHTML;
    if (defaultValue === "0") {
        if(
            num === "*" ||
            num === "/" ||
            num === "+" ||
            num === "-" ||
            num === ","
        ) {
            document.getElementById('last-calc').innerHTML = "0";
        } else {
            document.getElementById('last-calc').innerHTML = "";
            document.getElementById('last-calc').innerHTML = num;
        }

    } else {
        if (defaultValue.length >= 14) {
            document.getElementById('last-calc').innerHTML += "";
        } else {
            let lastCharacter = document.getElementById('last-calc').innerHTML.slice(-1);
            if(
                (
                    lastCharacter === "*" ||
                    lastCharacter === "/" ||
                    lastCharacter === "+" ||
                    lastCharacter === "-" ||
                    lastCharacter === ","
                )
                &&
                (
                    num === "*" ||
                    num === "/" ||
                    num === "+" ||
                    num === "-" ||
                    num === ","
                )
            ) {
                document.getElementById('last-calc').innerHTML += "";
            } else {
                document.getElementById('last-calc').innerHTML += num;
            }

        }
    }
}

function clean () {
    document.getElementById('last-calc').innerHTML = "0";
    document.getElementById('result-calc').innerHTML = "0";
}

function cancelEntry () {
    let result = document.getElementById('last-calc').innerHTML;
    if (result !== "0") {
        if (result.length === 1) {
            document.getElementById('last-calc').innerHTML = "0";
            document.getElementById('result-calc').innerHTML = "0";
        } else {
            document.getElementById('last-calc').innerHTML = result.substring(0, result.length -1);
        }
    }
}

function calculate () {
    try {
        let result = document.getElementById('last-calc').innerHTML;
        let resultAlt = result.split(',').join('.');

        if (result) {
            let resultCalc = eval(resultAlt);
            if (resultCalc.toString().length >= 12) {
                document.getElementById('result-calc').innerHTML = "Valor gigante";
            } else {
                document.getElementById('result-calc').innerHTML = resultCalc.toString().replaceAll(".", ",");
            }
        }
    } catch (e) {
        console.log(e);
        document.getElementById('last-calc').innerHTML = "0";
        document.getElementById('result-calc').innerHTML = "0";
    }
}

function positiveOrNegative() {
    const result = document.getElementById('last-calc').innerHTML;
    if (result !== "0") {
        if (!result.match("-")) {
            document.getElementById('last-calc').innerHTML = "-" + result;
        } else {
            document.getElementById('last-calc').innerHTML = result.replace("-", "");
        }
    }
}
