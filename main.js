const prompt = require('prompt-sync')();

let score = 0;
let jawaban_benar = 0;
let jawaban_salah = 0;
let point_per_soal = 10;

let soal = [
    {
        "q": "Yang merupakan member JKT 48?",
        "o": [
            'Jokowi',
            'Freya',
            'Nadin Amizah',
            'Igun Mama Takut',
        ],
        "a": 1 
    },
    {
        "q": "Nama kakak Upin dan Ipin adalah...",
        "o": [
            'Kak Rose',
            'Kak Jeane',
            'Monkey D. Luffy',
            'Igun Mama Takut',
        ],
        "a": 0 
    },
    {
    "q": "Siapa nama ayah dari anya spy x family?",
    "o": [
        'ogik',
        'eka',
        'cokde',
        'loid',
    ],
    "a": 3
},
{
    "q": "siapa nama panggilan hilde cartika anut?",
    "o": [
        'artya',
        'jes',
        'anut',
        'puja',
    ],
    "a": 2
},
{
    "q": "apa bahasa inggrisnya hujan",
    "o": [
        "rain",
        "summer",
        "autumn",
        "winter",
    ],
    "a" : 0
}

    // Tambahkan 3 soal lainnya 
]

let nama = prompt('Input nama: ')
// Ulangi pada setiap pertanyaan
for (let i = 0; i < soal.length; i++) {
    console.log('\nSoal ' + (i + 1) + ': ' + soal[i].q);
    
    // Menampilkan pilihan jawaban
    for (let j = 0; j < soal[i].o.length; j++) {
        console.log(j + '. ' + soal[i].o[j]);
    }

    // Meminta pengguna untuk mendapatkan  jawaban
    let jawaban = prompt('Jawaban Anda (0,1,2,3): ');

    // Mengecheck jika jawabannya benar
    if (parseInt(jawaban) === soal[i].a) {
        console.log('Jawaban Anda benar!');
        score += point_per_soal;
        jawaban_benar++;
    } else {
        console.log('Jawaban Anda salah. Jawaban yang benar adalah: ' + soal[i].o[soal[i].a]);
        jawaban_salah++;
    }
}


// Lengkapi code program yang belum selesai

console.log("Kuis selesai")
console.log("\n")
console.log("Statistic Kuis")
console.log('Nama\t\t:',nama)
console.log('Score\t\t:',score)
console.log('Jawaban benar\t:',jawaban_benar)
console.log('Jawaban salah\t:',jawaban_salah)



