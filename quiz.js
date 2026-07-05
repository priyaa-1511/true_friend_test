function nextResult() {

    let total = 0;

    for (let i = 1; i <= 10; i++) {

        let answer = document.querySelector('input[name="q' + i + '"]:checked');

        if (answer) {
            total += Number(answer.value);
        }
    }

    localStorage.setItem("score", total);

    window.location.href = "result.html";
}

