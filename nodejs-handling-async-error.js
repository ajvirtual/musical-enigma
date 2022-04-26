try {
    const randomTimer = Math.round(Math.random() * 1000);
    setTimeout(function() {
        throw new Error('Fail');
    }, randomTimer);
} catch (error) {
    console.error(`Custom error handling: ${error.message}`);
}
console.log('Running..');