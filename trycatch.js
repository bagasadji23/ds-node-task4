function isValidJSON(text) {
    try{
        JSON.parse(text);
        console.log('ini bener');
    } catch (errornya) {
        console.log(`ada error!! : ${errornya}`);
    }
}

console.log(isValidJSON('text'));