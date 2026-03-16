function simulateSoilReport() {
    const reportUpload = document.querySelector('.report-upload');
    const resultDiv = document.getElementById('soil-report-result');

    reportUpload.innerHTML = `<i class="fas fa-circle-notch fa-spin"></i><p>Reading Report...</p>`;

    setTimeout(() => {
        reportUpload.innerHTML = `<i class="fas fa-check-double" style="color:var(--primary-color)"></i><p>Analysis Result Ready</p>`;
        resultDiv.innerHTML = `
            <div class="card result-card animate-in" style="border-left-color: var(--accent-blue)">
                <div class="result-header">
                    <h4>Soil Health Report</h4>
                </div>
                <p style="font-size:0.9rem; color:var(--text-muted)">Your soil shows low Phosphorus levels but adequate Nitrogen.</p>
                <div class="treatment-box" style="background: rgba(52, 152, 219, 0.05)">
                    <h4 style="color:var(--accent-blue)"><i class="fas fa-lightbulb"></i> AI Recommendation</h4>
                    <p style="font-size:0.85rem">Add Single Super Phosphate (SSP) at 150kg/acre before the next sowing cycle.</p>
                </div>
            </div>
        `;
    }, 1500);
}
