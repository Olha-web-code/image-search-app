document.querySelector('.form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const delayInput = this.elements.delay;
    const stateInputs = this.elements.state;

    const delay = Number(delayInput.value);
    const selectedState = Array.from(stateInputs).find(input => input.checked).value;

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (selectedState === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    });

    promise
        .then(delay => {
            iziToast.success({
                title: 'OK',
                message: `✅ Fulfilled promise in ${delay}ms`,
                position: 'topRight',
            });
            console.log(`✅ Fulfilled promise in ${delay}ms`);
        })
        .catch(delay => {
            iziToast.error({
                title: 'Error',
                message: `❌ Rejected promise in ${delay}ms`,
                position: 'topRight',
            });
            console.log(`❌ Rejected promise in ${delay}ms`);
        });

    // Clear form fields after submission (optional)
    delayInput.value = '';
    Array.from(stateInputs).forEach(input => input.checked = false);
});