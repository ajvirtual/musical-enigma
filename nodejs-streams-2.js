function getReadableStreamSomehow() {
    // Write implementation here
}

const readableStream = getReadableStreamSomehow();

readableStream.on('readable', () => {
    let chunk;
    while ((chunk = readableStream.read()) !== null) {
        console.log('Got %d bytes of data', chunk.length);
    }
});