function calculateProfitLoss() {
    const entryPoint = parseFloat(document.getElementById('entryPoint').value);
    const exitPoint = parseFloat(document.getElementById('exitPoint').value);
    const barGraph = document.getElementById('barGraph');
    const profitLoss = document.getElementById('profitLoss');

    if (isNaN(entryPoint) || isNaN(exitPoint)) {
        profitLoss.textContent = "Please enter valid numbers!";
        profitLoss.className = '';
        return;
    }

    let profitOrLoss = exitPoint - entryPoint;
    
    // Normalize the width of the bar to a maximum value
    const maxBarWidth = 300; // Max width in pixels
    let barWidth = Math.min(Math.abs(profitOrLoss) * 10, maxBarWidth);

    barGraph.innerHTML = `<div style="width: ${barWidth}px; height: 100%; background-color: ${profitOrLoss > 0 ? 'green' : 'red'};"></div>`;

    if (profitOrLoss > 0) {
        profitLoss.textContent = `Profit: ${profitOrLoss.toFixed(2)}`;
        profitLoss.className = 'profit';
    } else if (profitOrLoss < 0) {
        profitLoss.textContent = `Loss: ${profitOrLoss.toFixed(2)}`;
        profitLoss.className = 'loss';
    } else {
        profitLoss.textContent = "No Profit, No Loss";
        profitLoss.className = '';
    }
}
