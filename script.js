// Venturemond Payment Simulation Logic
const stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx'); // Test Key

document.getElementById('basic-plan-btn').addEventListener('click', function() {
    simulateCheckout("Starter Plan");
});

document.getElementById('pro-plan-btn').addEventListener('click', function() {
    simulateCheckout("Agency Pro Plan");
});

function simulateCheckout(planName) {
    console.log("Redirecting to Venturemond Secure Checkout...");
    // Direct success page simulation since we don't have a real backend server running
    // In a real scenario, this calls Stripe Checkout API
    window.location.href = "success.html?plan=" + planName;
}