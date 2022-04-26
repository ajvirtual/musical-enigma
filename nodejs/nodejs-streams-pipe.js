let stream1 = fs.createReadStream('file.txt');
let stream2 = zlib.createGzip();
let stream3 = fs.createWriteStream('file.txt.gz');

stream1.pipe(stream2).pipe(stream3);