collatz = (n) => {
    return (n % 2) * (3 * n + 1) + (1 - n % 2) * n / 2
}

countStep = (n) => {
    if (n == 1) return 0
    return 1 + countStep(collatz(n))
}

let canvas = document.getElementById('canvas')
canvas.height = 600
canvas.width = 800
let ctx = canvas.getContext('2d')
for (let x = 1; x < canvas.width; x++) {
    let h = countStep(x)
    ctx.beginPath()
    ctx.moveTo(x, canvas.height)
    ctx.lineTo(x, Math.max(canvas.height - h, 0))
    ctx.stroke()
}

