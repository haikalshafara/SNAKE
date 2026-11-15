/* =========================================================
   SNAKESIP
   SERIOUS GAME PEMBELAJARAN SUBNETTING
   KELAS X TKJ / TJKT
========================================================= */


/* =========================================================
   1. KONFIGURASI WORLD & LEVEL (FOKUS: IP ADDRESS & SUBNETTING DASAR)
========================================================= */

const worldData = [
    {
        id: 1,
        icon: "🌐",
        title: "Fondasi & Anatomi IPv4",
        levels: [
            { id: 1, name: "Konsep Dasar Bit & Oktet" },
            { id: 2, name: "Struktur & Validasi Alamat IP" },
            { id: 3, name: "Pengenalan Jenis IP (Public/Private)" },
            { id: 4, name: "Network ID & Host ID" },
            { id: 5, name: "Identifikasi Batas Alamat" }
        ]
    },

    {
        id: 2,
        icon: "🔢",
        title: "Subnet Mask & Notasi CIDR",
        levels: [
            { id: 6, name: "Fungsi Dasar Subnet Mask" },
            { id: 7, name: "Biner & Desimal Subnet Mask" },
            { id: 8, name: "Pengenalan Notasi Prefix (/CIDR)" },
            { id: 9, name: "Hubungan Prefix & Sisa Bit Host" },
            { id: 10, name: "Menentukan Ukuran Blok Subnet" }
        ]
    },

    {
        id: 3,
        icon: "🧮",
        title: "Perhitungan Subnetting Dasar",
        levels: [
            { id: 11, name: "Rumus Dasar Jumlah Subnet (2ⁿ)" },
            { id: 12, name: "Rumus Host Usable (2ʰ - 2)" },
            { id: 13, name: "Menentukan Network ID Subnet" },
            { id: 14, name: "Menentukan Broadcast ID Subnet" },
            { id: 15, name: "Simulasi Subnetting Dasar (/26 & /27)" }
        ]
    }
];

const levelNames = worldData
    .flatMap(world => world.levels.map(level => level.name));


function getWorldName(world) {
    const data = worldData.find(
        item => Number(item.id) === Number(world)
    );

    return data?.title || "Materi Subnetting";
}


function getLevelName(level) {
    return levelNames[Number(level) - 1] || "Level Subnetting";
}



/* =========================================================
   2. BANK SOAL SUBNETTING
========================================================= */

const questions = [

    /* -----------------------------------------------------
       WORLD 1 — DASAR-DASAR IP ADDRESS
    ----------------------------------------------------- */

    {
        id: "default-1",
        world: 1,
        level: 1,
        difficulty: "Mudah",

        q: "Berapa jumlah bit yang digunakan oleh alamat IPv4?",
        o: [
            "16 bit",
            "32 bit",
            "48 bit",
            "64 bit"
        ],
        a: 1,
        e: "IPv4 memiliki panjang alamat 32 bit."
    },

    {
        id: "default-2",
        world: 1,
        level: 1,
        difficulty: "Mudah",

        q: "Alamat IPv4 terdiri dari berapa oktet?",
        o: [
            "2 oktet",
            "3 oktet",
            "4 oktet",
            "8 oktet"
        ],
        a: 2,
        e: "IPv4 terdiri dari 4 oktet dan setiap oktet memiliki 8 bit."
    },

    {
        id: "default-3",
        world: 1,
        level: 1,
        difficulty: "Mudah",

        q: "Berapa jumlah bit pada satu oktet IPv4?",
        o: [
            "4 bit",
            "8 bit",
            "16 bit",
            "32 bit"
        ],
        a: 1,
        e: "Satu oktet IPv4 terdiri dari 8 bit."
    },

    {
        id: "default-4",
        world: 1,
        level: 2,
        difficulty: "Mudah",

        q: "Manakah contoh alamat IPv4 yang valid?",
        o: [
            "192.168.1.10",
            "192.168.1.300",
            "192.168.1",
            "192.168.1.1.5"
        ],
        a: 0,
        e: "Setiap oktet IPv4 harus berada pada rentang 0 sampai 255 dan IPv4 memiliki empat oktet."
    },

    {
        id: "default-5",
        world: 1,
        level: 2,
        difficulty: "Sedang",

        q: "Alamat 192.168.10.25 terdiri dari berapa oktet?",
        o: [
            "2",
            "3",
            "4",
            "5"
        ],
        a: 2,
        e: "192, 168, 10, dan 25 merupakan empat oktet."
    },

    {
        id: "default-6",
        world: 1,
        level: 2,
        difficulty: "Sedang",

        q: "Nilai maksimum sebuah oktet IPv4 adalah...",
        o: [
            "127",
            "128",
            "254",
            "255"
        ],
        a: 3,
        e: "Oktet IPv4 memiliki 8 bit sehingga nilainya berada dari 0 sampai 255."
    },

    {
        id: "default-7",
        world: 1,
        level: 3,
        difficulty: "Mudah",

        q: "Apa fungsi utama Network ID?",
        o: [
            "Mengidentifikasi jaringan",
            "Mengidentifikasi warna kabel",
            "Mengubah MAC address",
            "Menentukan jenis kabel"
        ],
        a: 0,
        e: "Network ID digunakan untuk mengidentifikasi suatu jaringan."
    },

    {
        id: "default-8",
        world: 1,
        level: 3,
        difficulty: "Mudah",

        q: "Bagian alamat IP yang digunakan untuk mengidentifikasi perangkat disebut...",
        o: [
            "Network ID",
            "Host ID",
            "Broadcast ID",
            "Prefix"
        ],
        a: 1,
        e: "Host ID mengidentifikasi perangkat atau host di dalam suatu jaringan."
    },


    /* -----------------------------------------------------
       WORLD 2 — SUBNET MASK & CIDR
    ----------------------------------------------------- */

    {
        id: "default-9",
        world: 2,
        level: 4,
        difficulty: "Mudah",

        q: "Apa fungsi utama subnet mask?",
        o: [
            "Menentukan bagian network dan host",
            "Mengubah IP menjadi MAC",
            "Menghubungkan komputer secara fisik",
            "Mengenkripsi data"
        ],
        a: 0,
        e: "Subnet mask digunakan untuk menentukan bagian network dan host dari alamat IPv4."
    },

    {
        id: "default-10",
        world: 2,
        level: 4,
        difficulty: "Mudah",

        q: "Subnet mask default untuk jaringan /24 adalah...",
        o: [
            "255.0.0.0",
            "255.255.0.0",
            "255.255.255.0",
            "255.255.255.255"
        ],
        a: 2,
        e: "Prefix /24 memiliki 24 bit network sehingga subnet mask-nya adalah 255.255.255.0."
    },

    {
        id: "default-11",
        world: 2,
        level: 4,
        difficulty: "Sedang",

        q: "Subnet mask 255.255.255.0 setara dengan prefix...",
        o: [
            "/8",
            "/16",
            "/24",
            "/32"
        ],
        a: 2,
        e: "255.255.255.0 memiliki 24 bit bernilai 1 sehingga setara dengan /24."
    },

    {
        id: "default-12",
        world: 2,
        level: 5,
        difficulty: "Mudah",

        q: "Apa arti /24 pada notasi CIDR?",
        o: [
            "24 bit digunakan sebagai network prefix",
            "24 host tersedia",
            "24 subnet tersedia",
            "24 bit digunakan sebagai host"
        ],
        a: 0,
        e: "/24 berarti 24 bit pertama digunakan sebagai network prefix."
    },

    {
        id: "default-13",
        world: 2,
        level: 5,
        difficulty: "Sedang",

        q: "Prefix /26 memiliki berapa bit host?",
        o: [
            "4 bit",
            "6 bit",
            "8 bit",
            "26 bit"
        ],
        a: 1,
        e: "IPv4 memiliki 32 bit. Jadi 32 - 26 = 6 bit host."
    },

    {
        id: "default-14",
        world: 2,
        level: 6,
        difficulty: "Sedang",

        q: "Prefix /27 setara dengan subnet mask...",
        o: [
            "255.255.255.0",
            "255.255.255.128",
            "255.255.255.224",
            "255.255.255.240"
        ],
        a: 2,
        e: "/27 memiliki 27 bit network. Nilai oktet terakhir adalah 224."
    },

    {
        id: "default-15",
        world: 2,
        level: 6,
        difficulty: "Sedang",

        q: "Subnet mask 255.255.255.192 setara dengan prefix...",
        o: [
            "/24",
            "/25",
            "/26",
            "/28"
        ],
        a: 2,
        e: "192 dalam biner adalah 11000000 sehingga terdapat 26 bit network. Jadi prefix-nya /26."
    },


    /* -----------------------------------------------------
       WORLD 3 — PERHITUNGAN SUBNETTING
    ----------------------------------------------------- */

    {
        id: "default-16",
        world: 3,
        level: 7,
        difficulty: "Mudah",

        q: "Rumus jumlah subnet yang umum digunakan adalah...",
        o: [
            "2^n",
            "2^h - 2",
            "n + h",
            "32 - n"
        ],
        a: 0,
        e: "Jumlah subnet dapat dihitung dengan 2^n, dengan n adalah jumlah bit yang dipinjam."
    },

    {
        id: "default-17",
        world: 3,
        level: 7,
        difficulty: "Sedang",

        q: "Jika meminjam 2 bit untuk subnetting, berapa subnet yang dihasilkan?",
        o: [
            "2 subnet",
            "4 subnet",
            "6 subnet",
            "8 subnet"
        ],
        a: 1,
        e: "2^2 = 4 subnet."
    },

    {
        id: "default-18",
        world: 3,
        level: 8,
        difficulty: "Mudah",

        q: "Rumus jumlah host yang dapat digunakan adalah...",
        o: [
            "2^n",
            "2^h - 2",
            "2h",
            "32 - h"
        ],
        a: 1,
        e: "Jumlah host yang dapat digunakan umumnya dihitung dengan 2^h - 2 karena Network ID dan Broadcast ID tidak digunakan untuk host."
    },

    {
        id: "default-19",
        world: 3,
        level: 8,
        difficulty: "Sedang",

        q: "Berapa host yang dapat digunakan pada jaringan /26?",
        o: [
            "30",
            "62",
            "64",
            "126"
        ],
        a: 1,
        e: "/26 memiliki 6 bit host. 2^6 - 2 = 62 host yang dapat digunakan."
    },

    {
        id: "default-20",
        world: 3,
        level: 8,
        difficulty: "Sedang",

        q: "Berapa host yang dapat digunakan pada jaringan /27?",
        o: [
            "14",
            "30",
            "32",
            "62"
        ],
        a: 1,
        e: "/27 memiliki 5 bit host. 2^5 - 2 = 30 host."
    },

    {
        id: "default-21",
        world: 3,
        level: 9,
        difficulty: "Sedang",

        q: "Pada jaringan 192.168.1.0/24, Network ID-nya adalah...",
        o: [
            "192.168.1.0",
            "192.168.1.1",
            "192.168.1.254",
            "192.168.1.255"
        ],
        a: 0,
        e: "Untuk jaringan /24, alamat awal .0 merupakan Network ID."
    },

    {
        id: "default-22",
        world: 3,
        level: 9,
        difficulty: "Sedang",

        q: "Pada jaringan 192.168.1.0/24, Broadcast ID-nya adalah...",
        o: [
            "192.168.1.0",
            "192.168.1.1",
            "192.168.1.254",
            "192.168.1.255"
        ],
        a: 3,
        e: "Pada jaringan /24, alamat terakhir .255 merupakan Broadcast ID."
    },


    /* -----------------------------------------------------
       WORLD 4 — VLSM
    ----------------------------------------------------- */

    {
        id: "default-23",
        world: 4,
        level: 10,
        difficulty: "Mudah",

        q: "Apa kepanjangan dari VLSM?",
        o: [
            "Variable Length Subnet Mask",
            "Virtual Local Subnet Machine",
            "Variable Local Server Mask",
            "Virtual Length System Management"
        ],
        a: 0,
        e: "VLSM merupakan singkatan dari Variable Length Subnet Mask."
    },

    {
        id: "default-24",
        world: 4,
        level: 10,
        difficulty: "Sedang",

        q: "Keuntungan utama VLSM adalah...",
        o: [
            "Menghilangkan kebutuhan IP",
            "Menggunakan subnet dengan ukuran sesuai kebutuhan",
            "Membuat semua subnet berukuran sama",
            "Mengubah IPv4 menjadi IPv6"
        ],
        a: 1,
        e: "VLSM memungkinkan jaringan dibagi dengan ukuran subnet berbeda sesuai kebutuhan host."
    },

    {
        id: "default-25",
        world: 4,
        level: 11,
        difficulty: "Sedang",

        q: "Dalam perancangan VLSM, kebutuhan host terbesar sebaiknya...",
        o: [
            "Dikerjakan terakhir",
            "Diberikan subnet paling kecil",
            "Dialokasikan terlebih dahulu",
            "Diabaikan"
        ],
        a: 2,
        e: "Dalam VLSM, kebutuhan host terbesar biasanya dialokasikan terlebih dahulu agar pembagian alamat lebih efisien."
    },

    {
        id: "default-26",
        world: 4,
        level: 11,
        difficulty: "Sedang",

        q: "Jika sebuah bagian jaringan membutuhkan 50 host, prefix yang sesuai adalah...",
        o: [
            "/27",
            "/26",
            "/28",
            "/30"
        ],
        a: 1,
        e: "/27 hanya menyediakan 30 host. /26 menyediakan 62 host sehingga memenuhi kebutuhan 50 host."
    },

    {
        id: "default-27",
        world: 4,
        level: 12,
        difficulty: "Sulit",

        q: "Mengapa VLSM dapat menghemat penggunaan alamat IPv4?",
        o: [
            "Karena semua subnet menggunakan /32",
            "Karena subnet dapat dibuat sesuai kebutuhan host",
            "Karena Broadcast ID dihapus",
            "Karena Network ID tidak digunakan"
        ],
        a: 1,
        e: "VLSM memungkinkan subnet berukuran berbeda sehingga alamat tidak banyak terbuang."
    },


    /* -----------------------------------------------------
       WORLD 5 — STUDI KASUS
    ----------------------------------------------------- */

    {
        id: "default-28",
        world: 5,
        level: 13,
        difficulty: "Sedang",

        q: "Apa yang dimaksud dengan Network ID?",
        o: [
            "Alamat yang menunjukkan jaringan",
            "Alamat perangkat terakhir",
            "Alamat broadcast",
            "Alamat gateway saja"
        ],
        a: 0,
        e: "Network ID merupakan alamat yang mengidentifikasi suatu jaringan."
    },

    {
        id: "default-29",
        world: 5,
        level: 13,
        difficulty: "Sedang",

        q: "Apa yang dimaksud dengan Host ID?",
        o: [
            "Bagian IP yang menunjukkan jaringan",
            "Bagian IP yang mengidentifikasi perangkat",
            "Alamat broadcast",
            "Prefix jaringan"
        ],
        a: 1,
        e: "Host ID menunjukkan bagian alamat yang digunakan untuk mengidentifikasi perangkat dalam jaringan."
    },

    {
        id: "default-30",
        world: 5,
        level: 14,
        difficulty: "Sedang",

        q: "Network 192.168.10.0/27 memiliki Broadcast ID...",
        o: [
            "192.168.10.15",
            "192.168.10.31",
            "192.168.10.63",
            "192.168.10.255"
        ],
        a: 1,
        e: "/27 memiliki blok 32 alamat. Subnet pertama dimulai .0 dan berakhir pada .31."
    },

    {
        id: "default-31",
        world: 5,
        level: 14,
        difficulty: "Sulit",

        q: "Network 192.168.10.32/27 memiliki Broadcast ID...",
        o: [
            "192.168.10.31",
            "192.168.10.32",
            "192.168.10.63",
            "192.168.10.64"
        ],
        a: 2,
        e: "Blok /27 berukuran 32 alamat. Network .32 berarti Broadcast-nya .63."
    },

    {
        id: "default-32",
        world: 5,
        level: 15,
        difficulty: "Sulit",

        q: "Sebuah jaringan membutuhkan minimal 50 host. Prefix yang paling sesuai adalah...",
        o: [
            "/27",
            "/26",
            "/28",
            "/30"
        ],
        a: 1,
        e: "/26 menyediakan 62 host yang dapat digunakan, sedangkan /27 hanya menyediakan 30 host."
    },

    {
        id: "default-33",
        world: 5,
        level: 15,
        difficulty: "Sulit",

        q: "Jika jaringan 192.168.20.0/26 digunakan, Broadcast ID subnet pertama adalah...",
        o: [
            "192.168.20.31",
            "192.168.20.63",
            "192.168.20.127",
            "192.168.20.255"
        ],
        a: 1,
        e: "/26 memiliki blok 64 alamat. Subnet pertama adalah .0 sampai .63."
    }
];



/* =========================================================
   3. BANK SOAL GURU
========================================================= */

const TEACHER_QUESTION_KEY = "codeSnakeQuestionBank";


function loadTeacherQuestions() {
    try {
        let data = JSON.parse(localStorage.getItem(TEACHER_QUESTION_KEY));

        // Jika localStorage kosong, otomatis masukkan (seed) 33 soal default sistem 
        // agar dapat direview, diedit, dan dihapus oleh guru.
        if (!data || !Array.isArray(data) || data.length === 0) {
            data = questions.map((question, index) => ({
                ...question,
                id: question.id || `default-${index + 1}`,
                type: question.type || "mcq", // Pastikan tipe default adalah pilihan ganda (mcq)
                source: "default"
            }));
            localStorage.setItem(TEACHER_QUESTION_KEY, JSON.stringify(data));
        }

        return data;

    } catch (error) {
        console.error("Bank soal tidak dapat dibaca:", error);
        return [];
    }
}


function saveTeacherQuestions(data) {
    localStorage.setItem(
        TEACHER_QUESTION_KEY,
        JSON.stringify(data)
    );
}


function getAllQuestions() {
    // Karena soal default sudah disalin ke dalam storage guru, 
    // pengambilan seluruh soal cukup bersumber dari data guru/storage yang aktif.
    return loadTeacherQuestions();
}

/* =========================================================
   4. UTILITAS
========================================================= */

function escapeHTML(value) {

    return String(value ?? "")
        .replace(/[&<>"']/g, char => ({
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        })[char]);
}


function getQuestionsForLevel(level) {

    const allQuestions = getAllQuestions();

    const levelQuestions = allQuestions.filter(
        question =>
            Number(question.level) === Number(level)
    );

    return levelQuestions;
}



function getQuestionsForGame() {
    const totalQuestions = 5;

    const levelQuestions = getQuestionsForLevel(currentLevel);

    // Jika level belum memiliki soal, jangan mengambil
    // soal dari level lain yang materinya berbeda.
    if (levelQuestions.length === 0) {
        return [];
    }

    // Salin bank soal agar data aslinya tidak berubah.
    const selectedQuestions = [...levelQuestions];

    // Jika soal kurang dari 5, ulangi soal dari level
    // yang sama hingga jumlahnya mencapai 5.
    let index = 0;

    while (selectedQuestions.length < totalQuestions) {
        selectedQuestions.push(
            levelQuestions[index % levelQuestions.length]
        );

        index++;
    }

    // Jika soal lebih dari 5, gunakan 5 soal pertama.
    return selectedQuestions.slice(0, totalQuestions);
}



/* =========================================================
   5. MATERI PEMBELAJARAN (FOKUS IP ADDRESS & SUBNETTING DASAR)
========================================================= */

const materials = [

    {
        id: 1,
        title: "Fondasi & Anatomi IPv4",
        icon: "🌐",
        desc: "Mempelajari dasar bit, oktet, struktur alamat IP valid, serta pembedaan Network ID dan Host ID.",
        body: `
            <div class="subnet-section">
                <h5>Apa itu IPv4?</h5>
                <p>
                    IPv4 adalah protokol pengalamatan jaringan yang menggunakan panjang total <b>32 bit</b>,
                    dibagi menjadi 4 bagian yang disebut <b>oktet</b> (masing-masing 8 bit).
                </p>
                <div class="subnet-code">192.168.1.10</div>
                <div class="subnet-formula">
                    4 Oktet × 8 Bit = <b>32 Bit Total</b>
                </div>
            </div>

            <div class="subnet-section">
                <h5>Validasi Nilai Oktet</h5>
                <p>
                    Setiap oktet bernilai antara <b>0 sampai 255</b> (berdasarkan kombinasi bilangan biner 8 bit). 
                    Contoh IP yang valid harus berada pada rentang tersebut di setiap bagiannya.
                </p>
            </div>

            <div class="subnet-section">
                <h5>Network ID dan Host ID</h5>
                <p>
                    Alamat IP dibagi menjadi dua porsi utama:
                </p>
                <ul>
                    <li><b>Network ID:</b> Menunjukkan identitas atau alamat jaringan tempat perangkat berada.</li>
                    <li><b>Host ID:</b> Menunjukkan identitas spesifik perangkat (komputer, router, printer) dalam jaringan tersebut.</li>
                </ul>
            </div>
        `
    },

    {
        id: 2,
        title: "Subnet Mask & Notasi CIDR",
        icon: "🔢",
        desc: "Memahami peran subnet mask, konversi prefix garis miring (/CIDR), dan pembagian porsi bit.",
        body: `
            <div class="subnet-section">
                <h5>Fungsi Subnet Mask</h5>
                <p>
                    Subnet mask adalah angka 32-bit yang berdampingan dengan IP Address untuk membedakan 
                    mana bagian yang bertindak sebagai Network ID dan mana yang menjadi Host ID.
                </p>
                <div class="subnet-code">255.255.255.0</div>
            </div>

            <div class="subnet-section">
                <h5>Notasi CIDR (Classless Inter-Domain Routing)</h5>
                <p>
                    Notasi CIDR menggunakan simbol garis miring (<code>/</code>) diikuti angka prefix 
                    yang menunjukkan berapa banyak bit yang bernilai 1 di awal subnet mask.
                </p>
                <div class="subnet-example">
                    Contoh: <span class="ip-highlight">/24</span> berarti ada 24 bit pertama yang dikunci sebagai network.
                </div>
            </div>

            <div class="subnet-section">
                <h5>Tabel Referensi Prefix Dasar</h5>
                <table class="subnet-table">
                    <thead>
                        <tr>
                            <th>Prefix / CIDR</th>
                            <th>Subnet Mask Desimal</th>
                            <th>Sisa Bit Host</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr><td>/24</td><td>255.255.255.0</td><td>8 bit</td></tr>
                        <tr><td>/25</td><td>255.255.255.128</td><td>7 bit</td></tr>
                        <tr><td>/26</td><td>255.255.255.192</td><td>6 bit</td></tr>
                        <tr><td>/27</td><td>255.255.255.224</td><td>5 bit</td></tr>
                    </tbody>
                </table>
            </div>
        `
    },

    {
        id: 3,
        title: "Perhitungan Subnetting Dasar",
        icon: "🧮",
        desc: "Menerapkan rumus perhitungan jumlah subnet, host usable, Network ID, dan Broadcast ID.",
        body: `
            <div class="subnet-section">
                <h5>Rumus Jumlah Subnet</h5>
                <p>
                    Jika kita meminjam bit dari porsi host untuk membuat subnet baru, jumlah subnet dihitung dengan rumus:
                </p>
                <div class="subnet-formula">
                    Jumlah Subnet = <b>2ⁿ</b> <small class="muted">(n = jumlah bit yang dipinjam)</small>
                </div>
            </div>

            <div class="subnet-section">
                <h5>Rumus Jumlah Host Usable (Yang Dapat Digunakan)</h5>
                <p>
                    Jumlah perangkat yang bisa dihubungkan dalam satu subnet dihitung berdasarkan sisa bit host (h):
                </p>
                <div class="subnet-formula">
                    Jumlah Host = <b>2ʰ − 2</b>
                </div>
                <p class="muted small">
                    *Dikurangi 2 karena alamat pertama adalah Network ID dan alamat terakhir adalah Broadcast ID.
                </p>
            </div>

            <div class="subnet-section">
                <h5>Contoh Kasus /26</h5>
                <div class="subnet-example">
                    Prefix <b>/26</b> berarti sisa bit host adalah 32 - 26 = 6 bit.<br>
                    • Total IP = 2⁶ = 64 alamat dalam satu blok.<br>
                    • Host Usable = 64 - 2 = <b>62 host</b>.
                </div>
            </div>
        `
    }

];


/* =========================================================
   6. STATE
========================================================= */

let state =
    JSON.parse(
        localStorage.getItem("codeSnakeState") || "null"
    ) || {

        name: "",
        kelas: "",

        score: 0,
        xp: 0,

        highest: 0,
        unlocked: 1,

        answered: 0,
        correct: 0,

        fastest: null,

        levels: {},

        achievements: []
    };


let currentMaterial = 1;
let currentLevel = 1;
let currentWorld = 1;

let game = null;

let questionIndex = 0;
let questionAnswered = false;
let activeGameQuestions = [];


/* =========================================================
   7. UTILITAS & NAVIGASI
========================================================= */

const save = () => {

    localStorage.setItem(
        "codeSnakeState",
        JSON.stringify(state)
    );

};


const $ = id =>
    document.getElementById(id);


function showScreen(id) {

    document
        .querySelectorAll("section.screen")
        .forEach(screen => {
            screen.classList.add("hidden");
        });


    const target = $(id);

    if (target) {
        target.classList.remove("hidden");
    }

    // Tombol akses guru hanya tampil di halaman login (portal awal siswa),
    // dan disembunyikan saat masuk ke dashboard, game, dll.
    const teacherBtn = $("teacherAccessBtn");
    if (teacherBtn) {
        if (id === "loginScreen") {
            teacherBtn.classList.remove("hidden");
        } else {
            teacherBtn.classList.add("hidden");
        }
    }

    window.scrollTo(0, 0);
}


/* =========================================================
   8. LOGIN SISWA
========================================================= */

function startLearning() {

    const nameInput = $("loginName");
    const classInput = $("loginClass");

    const name = nameInput.value.trim();
    const kelas = classInput.value.trim();

    const nameError = $("nameError");
    const classError = $("classError");


    nameError.classList.add("hidden");
    classError.classList.add("hidden");

    nameInput.classList.remove("is-invalid");
    classInput.classList.remove("is-invalid");


    let valid = true;


    if (!name) {

        nameError.classList.remove("hidden");
        nameInput.classList.add("is-invalid");

        valid = false;
    }


    if (!kelas) {

        classError.classList.remove("hidden");
        classInput.classList.add("is-invalid");

        valid = false;
    }


    if (!valid) {
        // Mengganti alert() standar browser dengan modal kustom yang elegan
        showGameAlert(
            "Form Belum Lengkap",
            "Nama dan kelas wajib diisi sebelum memulai sesi belajar."
        );

        if (!name) {
            nameInput.focus();
        } else {
            classInput.focus();
        }

        return;
    }


    state.name = name;
    state.kelas = kelas;

    save();


    $("topUser").textContent =
        `${state.name} • ${state.kelas}`;


    goDashboard();
}


/* =========================================================
   9. DASHBOARD
========================================================= */

function goDashboard() {

    renderDashboard();

    showScreen("dashboardScreen");
}


function renderDashboard() {

    $("dashName").textContent =
        state.name;


    $("dScore").textContent =
        state.score;


    $("dXp").textContent =
        state.xp;


    $("dLevel").textContent =
        String(state.highest || 1)
            .padStart(2, "0");


    $("materials").innerHTML =
        materials
            .map(material => `

                <div
                    class="cardx material-card"
                    onclick="openMaterial(${material.id})"
                >

                    <div style="font-size: 38px;">
                        ${material.icon}
                    </div>

                    <h5>
                        ${material.title}
                    </h5>

                    <p class="muted mb-0">
                        ${material.desc}
                    </p>

                </div>

            `)
            .join("");


    const worldIcons =
        worldData.map(world => world.icon);


    $("worlds").innerHTML =
        worldData
            .map((world, index) => {

                const locked =
                    world.id >
                    Math.ceil(
                        state.unlocked / 5
                    );


                return `

                    <div
                        class="cardx world ${locked ? "locked" : ""}"
                        ${
                            locked
                                ? ""
                                : `onclick="selectWorld(${world.id})"`
                        }
                    >

                        <div class="emoji">
                            ${worldIcons[index]}
                        </div>

                        <b>
                            World ${world.id}
                        </b>

                        <div class="muted">
                            ${world.title}
                        </div>

                        <div class="mt-2">
                            ${
                                locked
                                    ? "🔒 Locked"
                                    : "✓ Available"
                            }
                        </div>

                    </div>

                `;
            })
            .join("");


    selectWorld(
        Math.min(currentWorld, 3)
    );
}


/* =========================================================
   11. WORLD & LEVEL
========================================================= */

function selectWorld(world) {

    currentWorld = Number(world);


    const data =
        worldData.find(
            item =>
                Number(item.id) ===
                Number(world)
        );


    if (!data) return;


    $("levelsPanel").innerHTML = `

        <h5>
            ${data.icon}
            World ${data.id} —
            ${data.title}
        </h5>

        <div class="levels mt-3">

            ${
                data.levels
                    .map(levelData => {

                        const level =
                            levelData.id;

                        const locked =
                            level >
                            state.unlocked;


                        return `

                            <button
                                class="btn-soft levelbtn ${
                                    locked
                                        ? "locked"
                                        : ""
                                }"

                                ${
                                    locked
                                        ? "disabled"
                                        : `onclick="prepareLevel(${level})"`
                                }
                            >

                                ${
                                    locked
                                        ? "🔒"
                                        : "🎮"
                                }

                                Level ${level}

                                <br>

                                <small>
                                    ${levelData.name}
                                </small>

                            </button>

                        `;
                    })
                    .join("")
            }

        </div>
    `;
}


/* =========================================================
   12. MATERI
========================================================= */

function openMaterial(id) {

    currentMaterial = Number(id);


    const material =
        materials.find(
            item =>
                Number(item.id) ===
                Number(id)
        );


    if (!material) return;


    $("materialTitle").textContent =
        `${material.icon} ${material.title}`;


    $("materialBody").innerHTML =
        material.body;


    showScreen("materialScreen");
}


function openLevelFromMaterial() {

    prepareLevel(
        (currentMaterial - 1) * 3 + 1
    );
}


/* =========================================================
   13. PREPARE LEVEL
========================================================= */

function prepareLevel(level) {

    currentLevel =
        Number(level);


    currentWorld =
        Math.ceil(
            currentLevel / 5
        );


    showScreen("gameScreen");

    initGame();
}


/* =========================================================
   14. INITIALIZE GAME
========================================================= */

function initGame() {

    if (game?.raf) {

        cancelAnimationFrame(
            game.raf
        );
    }


    const canvas =
        $("gameCanvas");

    const ctx =
        canvas.getContext("2d");


    const cols = 30;
    const rows = 18;
    const cell = 30;


    game = {

        ctx,
        canvas,

        cols,
        rows,
        cell,

        snake: [
            { x: 10, y: 9 },
            { x: 9, y: 9 },
            { x: 8, y: 9 }
        ],

        dir: {
            x: 1,
            y: 0
        },

        next: {
            x: 1,
            y: 0
        },

        food: null,
        qitem: null,
        power: null,

        obstacles: [],

        score: 0,
        xp: 0,

        life: 3,
        combo: 0,

        questions: 0,
        correct: 0,

        totalQ: 5,

        time: 150,
        start: Date.now(),

        paused: false,
        over: false,

        raf: null,

        shield: false,
        freeze: 0
    };


    $("gameWorld").textContent =
        `WORLD ${currentWorld}`;


    $("gameLevelName").textContent =
        `Level ${currentLevel} • ${getLevelName(currentLevel)}`;


    $("objective").textContent =
        `Objective: Kumpulkan ${
            5 + currentLevel
        } Food + Jawab ${
            game.totalQ
        } Question Items • ${
            getLevelName(currentLevel)
        }`;


    for (
        let index = 0;
        index < Math.min(4 + currentLevel, 14);
        index++
    ) {

        game.obstacles.push(
            randomFree()
        );
    }


    spawnFood();
    spawnQuestion();
    spawnPower();

    updateHud();

    gameLoop();
}


/* =========================================================
   15. SPAWN
========================================================= */

function randomFree() {

    let position;


    do {

        position = {

            x:
                Math.floor(
                    Math.random() *
                    game.cols
                ),

            y:
                Math.floor(
                    Math.random() *
                    game.rows
                )
        };


    } while (

        game.snake.some(
            segment =>
                segment.x === position.x &&
                segment.y === position.y
        )

        ||

        game.obstacles?.some(
            obstacle =>
                obstacle.x === position.x &&
                obstacle.y === position.y
        )
    );


    return position;
}


function spawnFood() {

    game.food =
        randomFree();
}


function spawnQuestion() {

    if (
        game.questions <
        game.totalQ
    ) {

        game.qitem =
            randomFree();

    } else {

        game.qitem =
            null;
    }
}


function spawnPower() {

    game.power =
        Math.random() < 0.65
            ? {

                ...randomFree(),

                type:
                    [
                        "double",
                        "shield",
                        "hint",
                        "life",
                        "freeze"
                    ][
                        Math.floor(
                            Math.random() * 5
                        )
                    ]
            }

            : null;
}


/* =========================================================
   16. HUD
========================================================= */

function updateHud() {

    $("hScore").textContent =
        game?.score ?? 0;


    $("hXp").textContent =
        game?.xp ?? 0;


    $("hLevel").textContent =
        String(currentLevel)
            .padStart(2, "0");


    const life =
        Math.max(
            0,
            Math.min(
                3,
                game?.life ?? 0
            )
        );


    $("hLife").textContent =
        "❤️".repeat(life) +
        "🖤".repeat(3 - life);


    $("hCombo").textContent =
        `x${game?.combo ?? 0}`;


    $("hQuestion").textContent =
        `${game?.questions ?? 0}/${game?.totalQ ?? 5}`;


    const seconds =
        Math.max(
            0,
            Math.floor(
                game?.time ?? 0
            )
        );


    $("hTime").textContent =
        `${String(
            Math.floor(seconds / 60)
        ).padStart(2, "0")}:` +
        `${String(
            seconds % 60
        ).padStart(2, "0")}`;
}


/* =========================================================
   17. GAME LOOP
========================================================= */

function gameLoop() {

    if (
        !game ||
        game.over
    ) {
        return;
    }


    draw();


    if (!game.paused) {

        game.time =
            Math.max(
                0,

                150 -
                Math.floor(
                    (Date.now() -
                        game.start) /
                    1000
                ) +
                game.freeze
            );


        if (
            game.time <= 0
        ) {

            endLevel(false);

            return;
        }
    }


    game.raf =
        requestAnimationFrame(
            gameLoop
        );
}


/* =========================================================
   18. DRAW CANVAS
========================================================= */

function draw() {

    const ctx =
        game.ctx;

    const {
        cols,
        rows,
        cell
    } = game;


    ctx.clearRect(
        0,
        0,
        ctx.canvas.width,
        ctx.canvas.height
    );


    ctx.fillStyle =
        "#07131f";


    ctx.fillRect(
        0,
        0,
        ctx.canvas.width,
        ctx.canvas.height
    );


    /* Grid */

    ctx.strokeStyle =
        "rgba(64, 150, 175, 0.09)";


    for (
        let x = 0;
        x <= cols;
        x++
    ) {

        ctx.beginPath();

        ctx.moveTo(
            x * cell,
            0
        );

        ctx.lineTo(
            x * cell,
            rows * cell
        );

        ctx.stroke();
    }


    for (
        let y = 0;
        y <= rows;
        y++
    ) {

        ctx.beginPath();

        ctx.moveTo(
            0,
            y * cell
        );

        ctx.lineTo(
            cols * cell,
            y * cell
        );

        ctx.stroke();
    }

    /* Garis tepi putus-putus sebagai penanda arena tembus tembok */
    ctx.save();
    ctx.strokeStyle = "rgba(56, 189, 248, 0.35)";
    ctx.lineWidth = 2;
    ctx.setLineDash([8, 6]);
    ctx.strokeRect(1, 1, cols * cell - 2, rows * cell - 2);
    ctx.restore();

    /* Obstacles */

    game.obstacles.forEach(
        obstacle => {

            ctx.fillStyle =
                "#283b4f";


            ctx.fillRect(
                obstacle.x * cell + 3,
                obstacle.y * cell + 3,
                cell - 6,
                cell - 6
            );


            ctx.fillStyle =
                "#516b7e";


            ctx.fillRect(
                obstacle.x * cell + 7,
                obstacle.y * cell + 7,
                cell - 14,
                5
            );
        }
    );


    /* Item */

    const drawItem =
        (
            position,
            emoji,
            background
        ) => {

            if (!position) return;


            ctx.fillStyle =
                background;


            ctx.beginPath();


            ctx.arc(
                position.x * cell +
                    cell / 2,

                position.y * cell +
                    cell / 2,

                11,

                0,
                Math.PI * 2
            );


            ctx.fill();


            ctx.font =
                "18px sans-serif";

            ctx.textAlign =
                "center";

            ctx.textBaseline =
                "middle";


            ctx.fillText(
                emoji,

                position.x * cell +
                    cell / 2,

                position.y * cell +
                    cell / 2
            );
        };


    drawItem(
        game.food,
        "🍎",
        "#214e38"
    );


    drawItem(
        game.qitem,
        "❓",
        "#51316d"
    );


    if (game.power) {

        const powerIcons = {

            double: "⭐",
            shield: "🛡",
            hint: "💡",
            life: "❤️",
            freeze: "⏱"
        };


        drawItem(
            game.power,
            powerIcons[
                game.power.type
            ],
            "#4c3d1c"
        );
    }


    /* Snake */

    game.snake.forEach(
        (segment, index) => {

            ctx.fillStyle =
                index === 0
                    ? "#63e66b"
                    : "#2fbf8c";


            ctx.beginPath();


            ctx.roundRect(
                segment.x * cell + 2,
                segment.y * cell + 2,
                cell - 4,
                cell - 4,
                7
            );


            ctx.fill();


            if (index === 0) {

                ctx.fillStyle =
                    "#07131f";


                ctx.beginPath();

                ctx.arc(
                    segment.x * cell + 10,
                    segment.y * cell + 10,
                    3,
                    0,
                    Math.PI * 2
                );

                ctx.fill();


                ctx.beginPath();

                ctx.arc(
                    segment.x * cell + 20,
                    segment.y * cell + 10,
                    3,
                    0,
                    Math.PI * 2
                );

                ctx.fill();
            }
        }
    );
}


/* =========================================================
   19. MOVEMENT & COLLISION
========================================================= */

function move() {

    if (
        game.paused ||
        game.over
    ) {
        return;
    }


    game.dir =
        game.next;


    const head = {

        x:
            (game.snake[0].x +
                game.dir.x +
                game.cols) %
            game.cols,

        y:
            (game.snake[0].y +
                game.dir.y +
                game.rows) %
            game.rows
    };

    const hitObstacle =
        game.obstacles.some(
            obstacle =>
                obstacle.x === head.x &&
                obstacle.y === head.y
        );


    const hitSnake =
        game.snake.some(
            (segment, index) =>
                index > 0 &&
                segment.x === head.x &&
                segment.y === head.y
        );


    if (

        hitObstacle ||
        hitSnake
    ) {

        hit();

        return;
    }


    game.snake.unshift(
        head
    );


    let ate = false;


    /* Food */

    if (
        eq(
            head,
            game.food
        )
    ) {

        game.score += 50;
        game.xp += 10;

        game.combo++;

        ate = true;

        spawnFood();


        if (
            game.combo % 3 === 0
        ) {

            game.score += 50;
        }
    }


    /* Question */

    if (
        eq(
            head,
            game.qitem
        )
    ) {

        game.snake.pop();

        game.qitem =
            null;

        openQuestion();

        return;
    }


    /* Power */

    if (
        game.power &&
        eq(
            head,
            game.power
        )
    ) {

        applyPower(
            game.power.type
        );

        game.power =
            null;
    }


    if (!ate) {

        game.snake.pop();

    } else if (
        game.snake.length % 3 === 0
    ) {

        spawnPower();
    }


    updateHud();


    if (
        game.score >=
            (5 + currentLevel) * 50 &&

        game.questions >=
            game.totalQ
    ) {

        endLevel(true);
    }
}


function eq(a, b) {

    return !!a &&
        !!b &&
        a.x === b.x &&
        a.y === b.y;
}


function hit() {

    if (game.shield) {

        game.shield =
            false;

        game.combo =
            0;

        return;
    }


    game.life--;

    game.combo =
        0;


    game.snake = [

        { x: 10, y: 9 },
        { x: 9, y: 9 },
        { x: 8, y: 9 }

    ];


    game.dir = {
        x: 1,
        y: 0
    };


    game.next = {
        x: 1,
        y: 0
    };


    if (
        game.life <= 0
    ) {

        endLevel(false);
    }


    updateHud();
}


/* =========================================================
   20. POWER-UP
========================================================= */

function applyPower(type) {

    if (type === "double") {

        game.xp += 50;
    }


    if (type === "shield") {

        game.shield =
            true;
    }


    if (type === "life") {

        game.life =
            Math.min(
                3,
                game.life + 1
            );
    }


    if (type === "freeze") {

        game.freeze += 15;
    }


    if (type === "hint") {

        alert(
            "💡 Hint: gunakan materi Subnetting untuk mencari Network ID, Host ID, Broadcast ID, prefix, dan jumlah host."
        );
    }
}


/* =========================================================
   21. QUESTION ITEM
========================================================= */

function openQuestion() {
    game.paused = true;
    activeGameQuestions = getQuestionsForGame();

    if (!activeGameQuestions.length) {
        game.paused = false;
        spawnQuestion();
        return;
    }

    questionIndex = game.questions % activeGameQuestions.length;
    questionAnswered = false;
    const question = activeGameQuestions[questionIndex];
    const type = csQuestionType(question);

    $("qText").textContent = question.q;
    $("qFeedback").innerHTML = "";
    $("qContinue").classList.add("hidden");

    let optionsHtml = "";

    // Render HTML berdasarkan jenis soal
    if (type === "mcq") {
        optionsHtml = (question.o || []).map((option, index) => `
            <button class="option" onclick="answerQuestion(${index})">
                ${String.fromCharCode(65 + index)}. ${escapeHTML(option)}
            </button>
        `).join("");
    } 
    else if (type === "short") {
        optionsHtml = `
            <div class="mt-3">
                <input type="text" id="csStudentShortAnswer" class="form-control mb-3" placeholder="Ketik jawaban Anda di sini..." autocomplete="off">
                <button class="btn-main w-100" onclick="answerQuestion()">Kirim Jawaban</button>
            </div>
        `;
    } 
    else if (type === "drag") {
        // Untuk prototipe sederhana: kita buat urutan acak dan minta siswa mengetik urutan angka yang benar
        const items = question.items || [];
        const shuffled = items.map((val, idx) => ({ val, idx })).sort(() => Math.random() - 0.5);
        
        optionsHtml = `
            <div class="mt-3">
                <p class="muted mb-2">Perhatikan item berikut:</p>
                <ol class="mb-3 ps-3">
                    ${shuffled.map((item, i) => `<li>${escapeHTML(item.val)}</li>`).join("")}
                </ol>
                <p class="muted mb-2">Tuliskan urutan angka yang benar (contoh: 3,1,2,4):</p>
                <input type="text" id="csStudentDragAnswer" class="form-control mb-3" placeholder="Contoh: 1, 2, 3" data-correct="${shuffled.map(s => s.idx + 1).join(",")}">
                <button class="btn-main w-100" onclick="answerQuestion()">Kirim Urutan</button>
            </div>
        `;
    } 
    else if (type === "config") {
        const template = question.configTemplate || "";
        // Ubah {{1}}, {{2}} dst menjadi tag input HTML
        const htmlTemplate = escapeHTML(template).replace(/{{(\d+)}}/g, (match, p1) => {
            return `<input type="text" class="cs-config-input form-control d-inline-block p-1 m-1" style="width: 120px;" data-index="${p1}" placeholder="Isi ${p1}">`;
        });

        optionsHtml = `
            <div class="mt-3">
                <div class="p-3 mb-3 rounded" style="background: #091827; border: 1px solid #2c4864; font-family: monospace; white-space: pre-wrap; line-height: 2;">${htmlTemplate}</div>
                <button class="btn-main w-100" onclick="answerQuestion()">Kirim Konfigurasi</button>
            </div>
        `;
    }

    $("qOptions").innerHTML = optionsHtml;

    // Tampilkan Modal
    bootstrap.Modal.getOrCreateInstance($("questionModal")).show();

    // Auto-focus untuk Isian Singkat
    if (type === "short") {
        setTimeout(() => {
            const input = $("csStudentShortAnswer");
            if (input) input.focus();
        }, 150);
    }
}

function answerQuestion(i) {
    if (questionAnswered) return;
    questionAnswered = true;

    const question = activeGameQuestions[questionIndex];
    const type = csQuestionType(question);
    let isCorrect = false;

    // Evaluasi Jawaban Berdasarkan Jenis Soal
    if (type === "mcq") {
        isCorrect = Number(i) === Number(question.a);
    } 
    else if (type === "short") {
        const studentAns = csNormalizeAnswer($("csStudentShortAnswer")?.value);
        const accepted = (question.acceptedAnswers || []).map(csNormalizeAnswer);
        isCorrect = accepted.includes(studentAns);
    } 
    else if (type === "drag") {
        // Logika drag and drop disederhanakan dengan memasukkan urutan angka
        const studentAns = csNormalizeAnswer($("csStudentDragAnswer")?.value).replace(/[^0-9]/g, ""); // ambil angkanya saja
        
        // Cari urutan yang benar dari atribut data yang kita simpan saat render
        const correctRaw = $("csStudentDragAnswer")?.getAttribute("data-correct") || "";
        // Kita butuh urutan index aslinya (0,1,2,3) agar sesuai dengan kunci yang dibuat guru
        const correctIndices = correctRaw.split(",").map(Number);
        
        // Urutan yang benar bagi user (angka 1, 2, 3, 4 di layar) yang merujuk ke item aslinya
        let expectedSequence = "";
        const totalItems = question.items?.length || 0;
        for (let idx = 0; idx < totalItems; idx++) {
            // Cari posisi item asli (idx) ini berada di nomor urut berapa (1 sampai N) di layar
            const positionOnScreen = correctIndices.indexOf(idx + 1) + 1;
            expectedSequence += positionOnScreen;
        }

        isCorrect = studentAns === expectedSequence;
    } 
    else if (type === "config") {
        const inputs = document.querySelectorAll(".cs-config-input");
        let allMatch = true;
        
        inputs.forEach(input => {
            const index = Number(input.getAttribute("data-index")) - 1; // placeholder 1 adalah index 0 di array
            const studentVal = csNormalizeAnswer(input.value);
            const expectedVal = csNormalizeAnswer(question.configAnswers?.[index]);
            
            if (studentVal !== expectedVal) {
                allMatch = false;
                input.style.borderColor = "var(--red)";
                input.style.color = "var(--red)";
            } else {
                input.style.borderColor = "var(--green)";
                input.style.color = "var(--green)";
            }
        });
        
        // Disable input
        inputs.forEach(input => input.disabled = true);
        isCorrect = allMatch && inputs.length > 0;
    }

    // Statistik dan HUD Update
    state.answered++;
    game.questions++;

    if (isCorrect) {
        game.correct++;
        state.correct++;
        game.score += 100 + (game.combo * 10);
        game.xp += 20;
        game.combo++;

        $("qFeedback").innerHTML = `
            <div class="feedback success">
                🎉 <b>BENAR!</b><br>
                +100 Score • +20 XP • +1 Combo<br>
                <small>${escapeHTML(question.e)}</small>
            </div>
        `;
    } else {
        game.life--;
        game.combo = 0;
        game.score = Math.max(0, game.score - 50);

        $("qFeedback").innerHTML = `
            <div class="feedback danger">
                ❌ <b>JAWABAN BELUM TEPAT</b><br>
                -50 Score • -1 Life<br>
                <small>${escapeHTML(question.e)}</small>
            </div>
        `;
    }

    game.score = Math.max(0, game.score);
    $("qContinue").classList.remove("hidden");

    // UI Updates Tambahan Khusus MCQ dan Input
    if (type === "mcq") {
        document.querySelectorAll("#qOptions .option").forEach((button, index) => {
            button.disabled = true;
            if (index === Number(question.a)) button.classList.add("correct");
            if (index === Number(i) && !isCorrect) button.classList.add("wrong");
        });
    } else if (type === "short" || type === "drag") {
        const input = type === "short" ? $("csStudentShortAnswer") : $("csStudentDragAnswer");
        if (input) {
            input.disabled = true;
            input.style.borderColor = isCorrect ? "var(--green)" : "var(--red)";
        }
    }

    updateHud();
}


function closeQuestion() {

    bootstrap.Modal
        .getInstance(
            $("questionModal")
        )
        .hide();


    game.paused =
        false;


    spawnQuestion();


    if (
        game.life <= 0
    ) {

        endLevel(false);

        return;
    }


    if (
        game.questions >=
            game.totalQ &&

        game.score >=
            (5 + currentLevel) * 50
    ) {

        endLevel(true);

        return;
    }


    gameLoop();
}


function pauseGame() {

    if (!game || game.over) {
        return;
    }


    game.paused =
        !game.paused;


    if (!game.paused) {

        gameLoop();
    }
}


/* =========================================================
   22. LEVEL COMPLETE / FAILED
========================================================= */

function endLevel(win) {

    if (
        !game ||
        game.over
    ) {
        return;
    }


    game.over =
        true;


    if (game.raf) {

        cancelAnimationFrame(
            game.raf
        );
    }


    state.score +=
        game.score;


    state.xp +=
        game.xp;


    state.highest =
        Math.max(
            state.highest,
            currentLevel
        );


    const accuracy =
        game.questions
            ? Math.round(
                game.correct /
                game.questions *
                100
            )
            : 0;


    if (win) {

        state.unlocked =
            Math.max(
                state.unlocked,

                Math.min(
                    15,
                    currentLevel + 1
                )
            );


        state.levels[
            currentLevel
        ] = {

            score:
                game.score,

            accuracy
        };
    }


    save();

    updateTeacher();


    $("levelResultTitle").textContent =
        win
            ? "🎉 LEVEL COMPLETE!"
            : "💥 LEVEL FAILED";


    $("levelResultText").innerHTML =
        win

            ? `

                Score
                <b>${game.score}</b>

                • XP
                <b>${game.xp}</b>

                • Accuracy
                <b>${accuracy}%</b>

                <br>

                ${
                    currentLevel < 15
                        ? "Level berikutnya terbuka."
                        : "Semua level selesai! Lihat ringkasan pencapaian di Hasil Belajar."
                }

            `

            : `

                Life habis atau waktu selesai.

                <br>

                Score
                <b>${game.score}</b>

                • Accuracy
                <b>${accuracy}%</b>

            `;


    $("nextLevelBtn").textContent =
        win

            ? (
                currentLevel < 15
                    ? "Next Level →"
                    : "Lihat Hasil"
            )

            : "Coba Lagi";


    $("nextLevelBtn").onclick =
        () => {

            bootstrap.Modal
                .getInstance(
                    $("levelModal")
                )
                .hide();


            if (
                win &&
                currentLevel < 15
            ) {

                prepareLevel(
                    currentLevel + 1
                );

            } else if (win) {

                showResults();

            } else {

                prepareLevel(
                    currentLevel
                );
            }
        };


    bootstrap.Modal
        .getOrCreateInstance(
            $("levelModal")
        )
        .show();
}


function quitGame() {

    if (
        game &&
        !game.over &&
        confirm(
            "Keluar dari level? Progress level yang belum selesai tidak disimpan."
        )
    ) {

        if (game.raf) {

            cancelAnimationFrame(
                game.raf
            );
        }


        game.over =
            true;


        goDashboard();
    }
}


/* =========================================================
   23. RESULTS & ACHIEVEMENT
========================================================= */

function showResults() {

    $("rScore").textContent =
        state.score;


    $("rAcc").textContent =
        state.answered

            ? Math.round(
                state.correct /
                state.answered *
                100
            ) + "%"

            : "-";


    const achievements = [];


    if (
        state.answered >= 1
    ) {

        achievements.push(
            "First Mission"
        );
    }


    if (
        state.correct ===
            state.answered &&

        state.answered >= 5
    ) {

        achievements.push(
            "Perfect Score"
        );
    }


    if (
        state.highest >= 3
    ) {

        achievements.push(
            "Subnet Explorer"
        );
    }


    if (
        state.answered >= 10
    ) {

        achievements.push(
            "Knowledge Hunter"
        );
    }


    if (
        state.highest >= 5
    ) {

        achievements.push(
            "Fast Learner"
        );
    }


    if (
        state.highest >= 15
    ) {

        achievements.push(
            "Subnet Master"
        );
    }


    $("achievements").innerHTML =
        (
            achievements.length
                ? achievements
                : [
                    "Belum ada achievement baru"
                ]
        )
            .map(
                achievement => `

                    <span class="badgex">
                        🏆 ${achievement}
                    </span>

                `
            )
            .join("");


    showScreen(
        "resultsScreen"
    );
}


/* =========================================================
   24. TEACHER DASHBOARD & ACCESS SECURITY
========================================================= */

function promptTeacherAccess() {
    const input = $("teacherPinInput");
    const error = $("pinError");

    if (input) {
        input.value = "";
        input.classList.remove("is-invalid");
    }

    if (error) {
        error.classList.add("hidden");
    }

    bootstrap.Modal.getOrCreateInstance(
        $("teacherPinModal")
    ).show();

    setTimeout(() => {
        if (input) input.focus();
    }, 200);
}

function verifyTeacherPin() {
    const input = $("teacherPinInput");
    const error = $("pinError");
    const pin = input ? input.value.trim() : "";

    // Ganti "123456" dengan PIN rahasia pilihan Anda
    if (pin === "123456") {
        const modalEl = $("teacherPinModal");
        const modalInstance = bootstrap.Modal.getInstance(modalEl);
        
        if (modalInstance) {
            modalInstance.hide();
        }

        // Bersihkan sisa backdrop modal Bootstrap secara paksa agar layar bisa diklik
        setTimeout(() => {
            document.querySelectorAll(".modal-backdrop").forEach(el => el.remove());
            document.body.classList.remove("modal-open");
            document.body.style.removeProperty("overflow");
            document.body.style.removeProperty("padding-right");
        }, 200);

        // Buka dasbor guru
        openTeacher();
    } else {
        if (error) {
            error.classList.remove("hidden");
        }
        if (input) {
            input.classList.add("is-invalid");
            input.focus();
            input.value = "";
        }
    }
}

function openTeacher() {
    // 1. Sisipkan form jenis soal terlebih dahulu jika belum ada
    csInjectQuestionTypeUI();

    // 2. Perbarui data guru
    updateTeacher();
    resetQuestionForm();
    renderTeacherQuestions();
    renderTeacherStats();

    // 3. Tampilkan layar guru
    showScreen("teacherScreen");
}

function updateTeacher() {

    $("teacherStudent").textContent =
        state.name || "-";


    $("teacherProgress").textContent =
        `${state.highest}/15`;


    $("teacherScore").textContent =
        state.score;


    $("teacherAcc").textContent =
        state.answered

            ? Math.round(
                state.correct /
                state.answered *
                100
            ) + "%"

            : "-";
}


function resetProgress() {

    if (
        confirm(
            "Reset seluruh progress prototype?"
        )
    ) {

        localStorage.removeItem(
            "codeSnakeState"
        );

        location.reload();
    }
}


/* =========================================================
   25. TEACHER QUESTION CRUD
========================================================= */

function resetQuestionForm() {
    const form = $("teacherQuestionForm");

    if (form) {
        form.reset();
    }

    $("editQuestionId").value = "";

    $("questionFormTitle").textContent =
        "➕ Tambah Soal Baru";

    $("saveQuestionBtn").textContent =
        "💾 Simpan Soal";

    $("cancelEditBtn")
        .classList
        .add("hidden");

    $("questionDifficulty").value =
        "Sedang";

    $("questionWorld").value =
        "1";

    $("questionLevel").value =
        "1";

    // Kembalikan dropdown jenis soal ke MCQ secara default saat di-reset
    const typeSelector = $("questionType");
    if (typeSelector) {
        typeSelector.value = "mcq";
        csRenderTypeEditor();
        csToggleLegacyOptions();
    }
}


function getQuestionFormData() {
    // 1. Ambil data dasar yang berlaku untuk semua jenis soal
    const baseData = {
        id: $("editQuestionId").value || ("teacher-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8)),
        q: $("questionText").value.trim(),
        e: $("questionExplanation").value.trim(),
        world: Number($("questionWorld").value),
        level: Number($("questionLevel").value),
        difficulty: $("questionDifficulty").value,
        source: "teacher"
    };

    // 2. Cek tipe soal yang dipilih (default ke mcq jika dropdown belum ada)
    const typeDropdown = $("questionType");
    const type = typeDropdown ? typeDropdown.value : "mcq";
    baseData.type = type;

    // 3. Ambil data spesifik berdasarkan jenis soal
    if (type === "mcq") {
        baseData.o = [
            $("questionOption0").value.trim(),
            $("questionOption1").value.trim(),
            $("questionOption2").value.trim(),
            $("questionOption3").value.trim()
        ];
        baseData.a = Number($("questionAnswer").value);
    } 
    else if (type === "short") {
        baseData.acceptedAnswers = csParseLines($("csShortAnswer")?.value);
    } 
    else if (type === "drag") {
        baseData.items = csParseLines($("csDragItems")?.value);
    } 
    else if (type === "config") {
        baseData.configTemplate = $("csConfigTemplate")?.value.trim();
        baseData.configAnswers = csParseLines($("csConfigAnswers")?.value);
    }

    return baseData;
}


function validateQuestion(q) {
    // Validasi dasar
    if (!q.q || !q.e) {
        alert("Lengkapi pertanyaan dan pembahasan.");
        return false;
    }

    // Validasi spesifik berdasarkan tipe
    if (q.type === "mcq") {
        if (q.o.some(option => !option)) {
            alert("Lengkapi semua pilihan jawaban A - D.");
            return false;
        }
        if (!Number.isInteger(q.a) || q.a < 0 || q.a > 3) {
            alert("Pilih jawaban benar A, B, C, atau D.");
            return false;
        }
    } 
    else if (q.type === "short") {
        if (!q.acceptedAnswers || q.acceptedAnswers.length === 0) {
            alert("Isi minimal satu jawaban yang diterima untuk Isian Singkat.");
            return false;
        }
    } 
    else if (q.type === "drag") {
        if (!q.items || q.items.length < 2) {
            alert("Isi minimal 2 item untuk soal urutkan/drag-and-drop.");
            return false;
        }
    } 
    else if (q.type === "config") {
        if (!q.configTemplate || !q.configAnswers || q.configAnswers.length === 0) {
            alert("Lengkapi template konfigurasi dan kunci jawabannya.");
            return false;
        }
    }

    // Validasi level dan world
    if (q.level < 1 || q.level > 15 || q.world < 1 || q.world > 5) {
        alert("World atau level tidak valid.");
        return false;
    }

    const expectedWorld = Math.ceil(q.level / 3);
    if (Number(q.world) !== Number(expectedWorld)) {
        alert(`Level ${q.level} termasuk World ${expectedWorld}.`);
        return false;
    }

    return true;
}


/* =========================================================
   26. SUBMIT TEACHER QUESTION
========================================================= */

const teacherQuestionForm =
    $("teacherQuestionForm");


if (teacherQuestionForm) {

    teacherQuestionForm
        .addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const q =
                    getQuestionFormData();


                if (
                    !validateQuestion(q)
                ) {
                    return;
                }


                const bank =
                    loadTeacherQuestions();


                const editId =
                    $("editQuestionId")
                        .value;


                if (editId) {

                    const index =
                        bank.findIndex(
                            item =>
                                item.id ===
                                editId
                        );


                    if (index < 0) {

                        alert(
                            "Soal yang akan diedit tidak ditemukan."
                        );

                        return;
                    }


                    bank[index] =
                        q;

                } else {

                    bank.push(q);
                }


                try {

                    saveTeacherQuestions(
                        bank
                    );


                    resetQuestionForm();

                    renderTeacherQuestions();

                    renderTeacherStats();


                    alert(
                        editId
                            ? "Soal berhasil diperbarui."
                            : "Soal berhasil ditambahkan."
                    );

                } catch (error) {

                    alert(
                        "Soal gagal disimpan. Periksa kapasitas penyimpanan browser."
                    );
                }
            }
        );
}


/* =========================================================
   27. EDIT TEACHER QUESTION
========================================================= */

function editTeacherQuestion(id) {
    const question = loadTeacherQuestions().find(item => item.id === id);

    if (!question) {
        alert("Soal tidak ditemukan.");
        return;
    }

    // Pindahkan otomatis ke tab "Kelola Soal" (tab pertama) saat tombol edit diklik
    const formTabBtn = document.querySelector('#teacherTabs button:first-child');
    if (formTabBtn) {
        switchTeacherTab('form', formTabBtn);
    }

    $("editQuestionId").value = question.id;
    $("questionWorld").value = String(question.world);
    $("questionLevel").value = String(question.level);
    $("questionDifficulty").value = question.difficulty || "Sedang";
    $("questionText").value = question.q;
    $("questionExplanation").value = question.e;

    const type = csQuestionType(question);
    const typeDropdown = $("questionType");
    if (typeDropdown) typeDropdown.value = type;
    
    csRenderTypeEditor(question);
    csToggleLegacyOptions();

    if (type === "mcq") {
        (question.o || []).forEach((option, index) => {
            const el = $("questionOption" + index);
            if (el) el.value = option;
        });
        $("questionAnswer").value = String(question.a ?? 0);
    }

    $("questionFormTitle").textContent = "✏️ Edit Soal";
    $("saveQuestionBtn").textContent = "💾 Simpan Perubahan";
    $("cancelEditBtn").classList.remove("hidden");
    
    $("questionFormCard").scrollIntoView({ behavior: "smooth", block: "start" });
}


/* =========================================================
   28. DELETE TEACHER QUESTION
========================================================= */

function deleteTeacherQuestion(id) {

    const question =
        loadTeacherQuestions()
            .find(
                item =>
                    item.id === id
            );


    if (!question) {
        return;
    }


    if (
        !confirm(
            `Hapus soal "${question.q}"?`
        )
    ) {
        return;
    }


    const updated =
        loadTeacherQuestions()
            .filter(
                item =>
                    item.id !== id
            );


    saveTeacherQuestions(
        updated
    );


    if (
        $("editQuestionId").value ===
        id
    ) {

        resetQuestionForm();
    }


    renderTeacherQuestions();

    renderTeacherStats();
}


/* =========================================================
   29. RENDER TEACHER QUESTIONS
========================================================= */

function renderTeacherQuestions() {
    const container = $("teacherQuestionList");
    if (!container) return;

    const search = ($("questionSearch").value || "").toLowerCase().trim();
    const world = $("filterQuestionWorld").value;
    const level = $("filterQuestionLevel").value;
    const difficulty = $("filterQuestionDifficulty").value;
    
    // BARU: Ambil nilai filter jenis soal
    const typeFilter = $("filterQuestionType") ? $("filterQuestionType").value : "";

    const bank = loadTeacherQuestions().filter(question => {
        const questionType = csQuestionType(question);

        const searchable = [
            question.q,
            ...(question.o || []),
            ...(question.acceptedAnswers || []),
            ...(question.items || []),
            question.configTemplate || "",
            ...(question.configAnswers || []),
            question.e
        ].join(" ").toLowerCase();

        return (
            (!search || searchable.includes(search)) &&
            (!world || Number(question.world) === Number(world)) &&
            (!level || Number(question.level) === Number(level)) &&
            (!difficulty || question.difficulty === difficulty) &&
            // BARU: Validasi pencocokan tipe soal
            (!typeFilter || questionType === typeFilter)
        );
    });

    if (!bank.length) {
        container.innerHTML = `
            <div class="teacher-empty">
                <div style="font-size:36px;">📝</div>
                <b>Belum ada soal yang cocok.</b>
                <p class="mb-0 mt-2">Tambahkan soal baru atau ubah filter pencarian.</p>
            </div>
        `;
        return;
    }

    // Sisa kode render list soal tetap sama...
    container.innerHTML = bank.map((question, index) => {
        const type = csQuestionType(question);
        let contentHtml = "";

        if (type === "mcq") {
            contentHtml = (question.o || []).map((option, optionIndex) => `
                <div class="teacher-option-preview ${optionIndex === Number(question.a) ? "is-answer" : ""}">
                    ${String.fromCharCode(65 + optionIndex)}. ${escapeHTML(option)}
                    ${optionIndex === Number(question.a) ? " ✓ Jawaban benar" : ""}
                </div>
            `).join("");
        } else if (type === "short") {
            const answers = question.acceptedAnswers || [];
            contentHtml = `
                <div class="teacher-option-preview is-answer">
                    <b class="text-success">✓ Jawaban yang Diterima:</b><br>
                    <span class="muted">${escapeHTML(answers.join("  ATAU  "))}</span>
                </div>
            `;
        } else if (type === "drag") {
            const items = question.items || [];
            contentHtml = `
                <div class="teacher-option-preview is-answer">
                    <b class="text-success">✓ Urutan yang Benar:</b>
                    <ol class="mb-0 mt-1 muted ps-3">
                        ${items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}
                    </ol>
                </div>
            `;
        } else if (type === "config") {
            contentHtml = `
                <div class="teacher-option-preview">
                    <b>Template:</b><br>
                    <pre class="mb-2 mt-1 muted" style="white-space: pre-wrap; font-family: inherit;">${escapeHTML(question.configTemplate || "")}</pre>
                    <b class="text-success">✓ Kunci:</b><br>
                    <span class="muted">${escapeHTML((question.configAnswers || []).join(", "))}</span>
                </div>
            `;
        }

        return `
            <div class="teacher-question-item">
                <div class="d-flex justify-content-between gap-3 flex-wrap">
                    <h6>${index + 1}. ${escapeHTML(question.q)}</h6>
                    <div>
                        <span class="teacher-tag" style="background:#51316d;">${CS_QUESTION_TYPES[type]}</span>
                        <span class="teacher-tag">${escapeHTML(question.difficulty || "Sedang")}</span>
                    </div>
                </div>

                <div class="teacher-question-meta">
                    <span class="teacher-tag">World ${question.world} — ${escapeHTML(getWorldName(question.world))}</span>
                    <span class="teacher-tag">Level ${question.level} — ${escapeHTML(getLevelName(question.level))}</span>
                </div>

                <div class="mt-3">
                    ${contentHtml}
                </div>

                <div class="mt-3">
                    <b>💡 Pembahasan:</b>
                    <p class="muted mb-0">${escapeHTML(question.e)}</p>
                </div>

                <div class="teacher-actions mt-3">
                    <button class="btn-soft" onclick="previewSavedQuestion('${question.id}')">👁️ Preview</button>
                    <button class="btn-soft" onclick="editTeacherQuestion('${question.id}')">✏️ Edit</button>
                    <button class="btn-soft" onclick="deleteTeacherQuestion('${question.id}')">🗑️ Hapus</button>
                </div>
            </div>
        `;
    }).join("");
}

/* =========================================================
   30. TEACHER STATISTICS
========================================================= */

function renderTeacherStats() {

    const bank =
        loadTeacherQuestions();


    const all =
        getAllQuestions();


    $("teacherTotalQuestions").textContent =
        all.length;


    $("teacherCustomQuestions").textContent =
        bank.length;


    $("teacherTotalWorlds").textContent =
        new Set(
            bank.map(
                question =>
                    Number(
                        question.world
                    )
            )
        ).size;


    $("teacherTotalLevels").textContent =
        new Set(
            bank.map(
                question =>
                    Number(
                        question.level
                    )
            )
        ).size;


    $("teacherLevelStats").innerHTML =
        Array.from(
            { length: 15 },
            (_, index) => {

                const level =
                    index + 1;


                const count =
                    bank.filter(
                        question =>
                            Number(
                                question.level
                            ) ===
                            level
                    ).length;


                return `

                    <div
                        class="teacher-level-item"
                    >

                        <small>
                            LEVEL
                            ${String(level)
                                .padStart(
                                    2,
                                    "0"
                                )}
                        </small>

                        <b>
                            ${count}
                        </b>

                        <small>
                            soal buatan guru
                        </small>

                    </div>

                `;
            }
        )
        .join("");
}


/* =========================================================
   31. TEACHER PREVIEW
========================================================= */

function previewTeacherQuestion() {

    const question =
        getQuestionFormData();


    if (
        !validateQuestion(
            question
        )
    ) {
        return;
    }


    showTeacherQuestionPreview(
        question
    );
}


function previewSavedQuestion(id) {

    const question =
        loadTeacherQuestions()
            .find(
                item =>
                    item.id === id
            );


    if (question) {

        showTeacherQuestionPreview(
            question
        );
    }
}


function showTeacherQuestionPreview(question) {
    const type = csQuestionType(question);
    let contentHtml = "";

    // 1. Render konten simulasi berdasarkan jenis soal
    if (type === "mcq") {
        contentHtml = (question.o || []).map((option, index) => `
            <div class="teacher-option-preview ${index === Number(question.a) ? "is-answer" : ""}">
                ${String.fromCharCode(65 + index)}. ${escapeHTML(option)}
            </div>
        `).join("");
        
        contentHtml += `
            <div class="feedback success mt-3">
                <b>Jawaban benar:</b> ${String.fromCharCode(65 + Number(question.a))}
                <hr>
                <b>💡 Pembahasan</b>
                <p class="mb-0">${escapeHTML(question.e)}</p>
            </div>
        `;
    } 
    else if (type === "short") {
        const answers = question.acceptedAnswers || [];
        contentHtml = `
            <div class="mt-3">
                <label class="form-label">Jawaban (Simulasi Siswa):</label>
                <input class="form-control" placeholder="Ketik jawaban di sini..." disabled>
            </div>
            <div class="feedback success mt-3">
                <b>✓ Kunci Jawaban yang Diterima:</b><br>
                <span class="muted">${escapeHTML(answers.join(" ATAU "))}</span>
                <hr>
                <b>💡 Pembahasan</b>
                <p class="mb-0">${escapeHTML(question.e)}</p>
            </div>
        `;
    } 
    else if (type === "drag") {
        const items = question.items || [];
        contentHtml = `
            <div class="mt-3">
                <b class="text-success">✓ Kunci Urutan yang Benar:</b>
                <ol class="mb-0 mt-1 muted ps-3">
                    ${items.map(item => `<li>${escapeHTML(item)}</li>`).join("")}
                </ol>
            </div>
            <div class="feedback success mt-3">
                <b>💡 Pembahasan</b>
                <p class="mb-0">${escapeHTML(question.e)}</p>
            </div>
        `;
    } 
    else if (type === "config") {
        contentHtml = `
            <div class="mt-3">
                <b>Template Konfigurasi:</b>
                <pre class="mb-2 mt-1 p-2 rounded" style="background: #091827; border: 1px solid #2c4864; white-space: pre-wrap; font-family: inherit;">${escapeHTML(question.configTemplate || "")}</pre>
                <b class="text-success">✓ Kunci Jawaban (Berdasarkan Urutan Placeholder):</b>
                <ol class="mb-0 mt-1 muted ps-3">
                    ${(question.configAnswers || []).map(ans => `<li>${escapeHTML(ans)}</li>`).join("")}
                </ol>
            </div>
            <div class="feedback success mt-3">
                <b>💡 Pembahasan</b>
                <p class="mb-0">${escapeHTML(question.e)}</p>
            </div>
        `;
    }

    // 2. Gabungkan ke dalam struktur HTML Modal Preview
    $("teacherPreviewContent").innerHTML = `
        <div class="teacher-question-meta">
            <span class="teacher-tag">World ${question.world} — ${escapeHTML(getWorldName(question.world))}</span>
            <span class="teacher-tag">Level ${question.level} — ${escapeHTML(getLevelName(question.level))}</span>
            <span class="teacher-tag">${escapeHTML(question.difficulty || "Sedang")}</span>
            <span class="teacher-tag" style="background:#51316d;">${CS_QUESTION_TYPES[type]}</span>
        </div>

        <div class="preview-question mt-3 mb-3">
            ${escapeHTML(question.q)}
        </div>

        ${contentHtml}
    `;

    bootstrap.Modal.getOrCreateInstance($("teacherPreviewModal")).show();
}


/* =========================================================
   32. KEYBOARD CONTROL
========================================================= */

document.addEventListener(
    "keydown",
    event => {
        // 1. Tambahkan baris ini: Abaikan kontrol jika sedang mengetik di input/textarea
        if (['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target.tagName)) {
            return;
        }

        // 2. Tambahkan game.paused: Jangan gerakkan game jika sedang pause (modal soal terbuka)
        if (
            !game ||
            game.over ||
            game.paused
        ) {
            return;
        }

        const key = event.key.toLowerCase();

        const directions = {
            w: { x: 0, y: -1 },
            arrowup: { x: 0, y: -1 },
            s: { x: 0, y: 1 },
            arrowdown: { x: 0, y: 1 },
            a: { x: -1, y: 0 },
            arrowleft: { x: -1, y: 0 },
            d: { x: 1, y: 0 },
            arrowright: { x: 1, y: 0 }
        };

        const direction = directions[key];

        if (
            direction &&
            !(
                direction.x === -game.dir.x &&
                direction.y === -game.dir.y
            )
        ) {
            game.next = direction;
            event.preventDefault();
        }
    }
);


/* =========================================================
   33. MOBILE CONTROL
========================================================= */

document
    .querySelectorAll(
        ".controls-mobile button"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                if (
                    !game ||
                    game.over
                ) {
                    return;
                }


                const directions = {

                    up: {
                        x: 0,
                        y: -1
                    },

                    down: {
                        x: 0,
                        y: 1
                    },

                    left: {
                        x: -1,
                        y: 0
                    },

                    right: {
                        x: 1,
                        y: 0
                    }
                };


                const direction =
                    directions[
                        button.dataset.dir
                    ];


                if (
                    direction &&

                    !(
                        direction.x ===
                            -game.dir.x &&

                        direction.y ===
                            -game.dir.y
                    )
                ) {

                    game.next =
                        direction;
                }

            }
        );

    });


/* =========================================================
   34. GAME MOVEMENT TIMER
========================================================= */

let moveTimer =
    setInterval(
        () => {

            if (
                game &&
                !game.over &&
                !game.paused
            ) {

                move();
            }

        },
        130
    );


/* =========================================================
   35. VISIBILITY CHANGE
========================================================= */

document.addEventListener(
    "visibilitychange",
    () => {

        if (
            game &&
            !game.over &&
            document.hidden
        ) {

            game.paused =
                true;
        }
    }
);



/* =========================================================
   SNAKESIP — SISTEM JENIS SOAL
   Jenis: mcq, short, drag, config
   Kompatibel dengan soal pilihan ganda lama.
========================================================= */

const CS_QUESTION_TYPES = {
    mcq: "Pilihan Ganda",
    short: "Isian Singkat / Perhitungan",
    drag: "Drag-and-Drop / Urutkan",
    config: "Melengkapi Konfigurasi"
};

function csQuestionType(question) {
    const type = String(question?.type || "mcq").toLowerCase();

    return Object.prototype.hasOwnProperty.call(
        CS_QUESTION_TYPES,
        type
    ) ? type : "mcq";
}

function csNormalizeAnswer(value) {
    return String(value ?? "")
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");
}

function csParseLines(value) {
    return String(value ?? "")
        .split(/\r?\n/)
        .map(item => item.trim())
        .filter(Boolean);
}



/* =========================================================
   FORM DINAMIS JENIS SOAL GURU
========================================================= */

function csInjectQuestionTypeUI() {
    const form = $("teacherQuestionForm");
    const questionInput = $("questionText");

    if (!form || !questionInput || $("questionType")) {
        return;
    }

    const typeGroup = document.createElement("div");
    typeGroup.className = "mb-3";
    typeGroup.innerHTML = `
        <label for="questionType" class="form-label">
            Jenis Soal
        </label>

        <select id="questionType" class="form-select">
            <option value="mcq">Pilihan Ganda</option>
            <option value="short">Isian Singkat / Perhitungan</option>
            <option value="drag">Drag-and-Drop / Urutkan</option>
            <option value="config">Melengkapi Konfigurasi</option>
        </select>
    `;

    typeGroup.id = "questionTypeGroup";

    const editor = document.createElement("div");
    editor.id = "teacherQuestionTypeFields";

    // Hapus kata 'border' dari className untuk menghilangkan garis putih
    editor.className = "mb-3 p-3 rounded";

    // (Opsional) Tambahkan baris ini jika Anda tetap ingin kotak tersebut memiliki batas/garis, 
    // namun dengan warna garis yang gelap senada dengan tema form Anda:
    editor.style.border = "1px solid #2c4864";

    const questionWrapper =
        questionInput.closest(".mb-3, .form-group") ||
        questionInput.parentElement;

    questionWrapper.insertAdjacentElement("afterend", typeGroup);
    typeGroup.insertAdjacentElement("afterend", editor);

    $("questionType").addEventListener("change", () => {
        csRenderTypeEditor();
        csToggleLegacyOptions();
    });

    csRenderTypeEditor();
    csToggleLegacyOptions();
}

function csToggleLegacyOptions() {
    const type = $("questionType")?.value || "mcq";

    [0, 1, 2, 3].forEach(index => {
        const input = $("questionOption" + index);

        if (input) {
            input.disabled = type !== "mcq";

            const wrapper =
                input.closest(".mb-3, .form-group") ||
                input.parentElement;

            if (wrapper) {
                wrapper.style.display =
                    type === "mcq" ? "" : "none";
            }
        }
    });

    const answer = $("questionAnswer");

    if (answer) {
        answer.disabled = type !== "mcq";

        const wrapper =
            answer.closest(".mb-3, .form-group, .col-md-6") ||
            answer.parentElement;

        if (wrapper) {
            wrapper.style.display =
                type === "mcq" ? "" : "none";
        }
    }
}

function csRenderTypeEditor(question = null) {
    const editor = $("teacherQuestionTypeFields");
    const selector = $("questionType");

    if (!editor || !selector) return;

    const type = question
        ? csQuestionType(question)
        : selector.value;

    selector.value = type;

    if (type === "short") {
        const answers =
            question?.acceptedAnswers ||
            (question?.answer ? [question.answer] : []);

        editor.innerHTML = `
            <label class="form-label">
                Jawaban yang diterima
            </label>

            <textarea
                id="csShortAnswer"
                class="form-control"
                rows="3"
                placeholder="Satu jawaban per baris"
            >${escapeHTML(answers.join("\n"))}</textarea>

            <small class="text-secondary">
                Jawaban alternatif boleh ditulis pada baris berbeda.
            </small>
        `;
    } else if (type === "drag") {
        const items = question?.items || [];

        editor.innerHTML = `
            <label class="form-label">
                Urutan jawaban yang benar
            </label>

            <textarea
                id="csDragItems"
                class="form-control"
                rows="5"
                placeholder="Network ID&#10;Host pertama&#10;Host terakhir&#10;Broadcast ID"
            >${escapeHTML(items.join("\n"))}</textarea>

            <small class="text-secondary">
                Satu item per baris. Urutan baris menjadi kunci jawaban.
            </small>
        `;
    } else if (type === "config") {
        editor.innerHTML = `
            <label class="form-label">
                Template konfigurasi
            </label>

            <textarea
                id="csConfigTemplate"
                class="form-control mb-3"
                rows="4"
                placeholder="IP Address: {{1}}&#10;Subnet Mask: {{2}}&#10;Gateway: {{3}}"
            >${escapeHTML(question?.configTemplate || "")}</textarea>

            <label class="form-label">
                Kunci jawaban
            </label>

            <textarea
                id="csConfigAnswers"
                class="form-control"
                rows="4"
                placeholder="192.168.1.10&#10;255.255.255.0&#10;192.168.1.1"
            >${escapeHTML((question?.configAnswers || []).join("\n"))}</textarea>

            <small class="text-secondary">
                Placeholder {{1}}, {{2}}, dan seterusnya harus berurutan.
                Jawaban ditulis sesuai urutan placeholder.
            </small>
        `;
    } else {
        editor.innerHTML = `
            <p class="mb-0">
                Isi pilihan A–D dan pilih kunci jawaban
                pada kolom pilihan ganda yang tersedia.
            </p>
        `;
    }
}

/* =========================================================
   TAB SWITCHER MODE GURU
========================================================= */

function switchTeacherTab(tabId, btnElement) {
    // 1. Sembunyikan semua pane panel guru
    document.querySelectorAll('.teacher-pane').forEach(pane => {
        pane.classList.add('hidden');
    });

    // 2. Tampilkan pane yang dipilih
    const target = $(`teacherPane-${tabId}`);
    if (target) {
        target.classList.remove('hidden');
    }

    // 3. Perbarui status tombol aktif pada menu bar
    const buttons = document.querySelectorAll('#teacherTabs button');
    buttons.forEach(btn => {
        btn.classList.remove('active', 'btn-main');
        btn.classList.add('btn-soft');
    });

    if (btnElement) {
        btnElement.classList.remove('btn-soft');
        btnElement.classList.add('btn-main', 'active');
    }
}

/* =========================================================
   MINI HERO SNAKE ANIMATION (FLUID / SMOOTH VECTOR MOTION)
========================================================= */

function initHeroSnakeAnimation() {
    const canvas = document.getElementById('heroSnakeCanvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const width = canvas.width;
    const height = canvas.height;

    let head = { x: width / 2, y: height / 2 };
    let angle = 0;
    let speed = 1.6;
    let trail = [];
    let maxTrailLength = 32;

    let food = {
        x: Math.random() * (width - 40) + 20,
        y: Math.random() * (height - 40) + 20,
        pulse: 0
    };

    function getNewTarget() {
        return {
            x: Math.random() * (width - 50) + 25,
            y: Math.random() * (height - 50) + 25
        };
    }

    let target = getNewTarget();

    function update() {
        // Mengarahkan kepala secara mulus ke arah target (makanan)
        let dx = target.x - head.x;
        let dy = target.y - head.y;
        let dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 18) {
            target = getNewTarget();
        }

        let targetAngle = Math.atan2(dy, dx);
        let angleDiff = targetAngle - angle;
        
        // Normalisasi perbedaan sudut agar belokan mulus
        angleDiff = Math.atan2(Math.sin(angleDiff), Math.cos(angleDiff));
        angle += angleDiff * 0.07;

        head.x += Math.cos(angle) * speed;
        head.y += Math.sin(angle) * speed;

        // Batas aman dinding canvas mini
        if (head.x < 20) head.x = 20;
        if (head.x > width - 20) head.x = width - 20;
        if (head.y < 20) head.y = 20;
        if (head.y > height - 20) head.y = height - 20;

        // Simpan titik jejak tubuh ular
        trail.unshift({ x: head.x, y: head.y });
        if (trail.length > maxTrailLength) {
            trail.pop();
        }

        food.pulse += 0.06;
    }

    function draw() {
        ctx.clearRect(0, 0, width, height);

        // Latar belakang gelap teknikal
        ctx.fillStyle = '#07131f';
        ctx.fillRect(0, 0, width, height);

        // Gambar Makanan (Apel Neon Berdenyut)
        let foodRadius = 5 + Math.sin(food.pulse) * 1.5;
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#ff6bb5';
        ctx.fillStyle = '#ff6bb5';
        ctx.beginPath();
        ctx.arc(food.x, food.y, foodRadius, 0, Math.PI * 2);
        ctx.fill();

        // Gambar Jejak Tubuh Ular (Glowing Trail)
        if (trail.length > 1) {
            ctx.shadowBlur = 10;
            ctx.shadowColor = '#63e66b';
            ctx.strokeStyle = '#63e66b';
            ctx.lineWidth = 9;
            ctx.lineCap = 'round';
            ctx.lineJoin = 'round';

            ctx.beginPath();
            ctx.moveTo(trail[0].x, trail[0].y);
            for (let i = 1; i < trail.length; i++) {
                ctx.lineTo(trail[i].x, trail[i].y);
            }
            ctx.stroke();

            // Garis inti tengah tubuh yang lebih terang
            ctx.shadowBlur = 4;
            ctx.shadowColor = '#ffffff';
            ctx.strokeStyle = '#eaf6ff';
            ctx.lineWidth = 3;
            ctx.stroke();
        }

        // Gambar Kepala Ular
        ctx.shadowBlur = 12;
        ctx.shadowColor = '#35e0d0';
        ctx.fillStyle = '#35e0d0';
        ctx.beginPath();
        ctx.arc(head.x, head.y, 6, 0, Math.PI * 2);
        ctx.fill();

        ctx.shadowBlur = 0; // Reset shadow
    }

    function loop() {
        update();
        draw();
        requestAnimationFrame(loop);
    }

    loop();
}

/* =========================================================
   CUSTOM NOTIFICATION / ALERT HELPER
========================================================= */

function showGameAlert(title, message) {
    const titleEl = $("gameAlertTitle");
    const msgEl = $("gameAlertMessage");
    
    if (titleEl) titleEl.textContent = title;
    if (msgEl) msgEl.textContent = message;

    bootstrap.Modal.getOrCreateInstance(
        $("gameAlertModal")
    ).show();
}
