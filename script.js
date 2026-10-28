(function () {
    const board   = document.querySelector('.board');
    const sumOut  = document.querySelector('#sumValue');
    const cntOut  = document.querySelector('#cntValue');

    let total = 0;
    let picked = 0;

    board.addEventListener('click', function (e) {
        const target = e.target.closest('.board > div');
        if (target === null || target.parentElement !== board) return;

        const n = Number(target.firstChild.nodeValue);
        const wasActive = target.classList.contains('active');

        if (wasActive) {
            target.classList.remove('active');
            total  -= n;
            picked -= 1;
        } else {
            target.classList.add('active');
            total  += n;
            picked += 1;
        }

        sumOut.innerText = total;
        cntOut.innerText = picked;
    });
})();