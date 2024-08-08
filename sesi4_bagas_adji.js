function kalkulator (angka1, angka2){
    const kalkulator = 'zz';
        switch(kalkulator){ 
            case 'a':
                console.log(`angka 1: ${angka1}`);
                console.log(`angka 2: ${angka2}`);
                console.log(`hasil jumlah: ${angka1 +angka2}`);
                break;
            case "b":
                console.log(`angka 1: ${angka1}`);
                console.log(`angka 2: ${angka2}`);
                console.log(`hasil jumlah: ${angka1 -angka2}`);
            break;
            default:
                console.log('Bukan kalkulator');
    }
}

kalkulator (2, 2)