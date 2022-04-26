function aFunctionThatAlwaysFail() {
    throw new Error('Fail');
} 

try {
    aFunctionThatAlwaysFail();
} catch (error) {
    console.log(`Custom error: ${error}`);
}