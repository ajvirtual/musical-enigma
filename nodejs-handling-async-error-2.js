process.on('uncaughtException', function(err) {
    console.error('uncaughtException', err.message);
    console.error(err.stack);
    process.exit(1);
});
