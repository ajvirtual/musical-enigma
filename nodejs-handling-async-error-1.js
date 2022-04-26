try {
    setTimeout(() => {
        throw new Error();
    }, 0);
} catch(e) {
    console.log(e); // Nothing
}