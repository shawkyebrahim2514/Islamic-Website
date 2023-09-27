const requestAyahAudioQuranComAPI = async (recitationId, ayahNumber) => {
    const baseAudioURL = "https://verses.quran.com/";
    const url = `https://api.quran.com/api/v4/recitations/${recitationId}/by_ayah/${ayahNumber}`;
    try {
        const response = await fetch(url);
        const json = await response.json();
        const pathAudio = json.audio_files[0].url;
        if (pathAudio.startsWith("//")) {
            return pathAudio;
        } else {
            return `${baseAudioURL}${json.audio_files[0].url}`;
        }
    } catch (error) {
        return new Error(error);
    }
}

const recitations = {
    AbdulBaset_Mujawwad: {
        name: "عبد الباسط عبد الصمد",
        style: "مجود",
        getAyahAudioURL: (ayahNumber) => requestAyahAudioQuranComAPI(1, ayahNumber),
    },
    AbdulBaset_Murattal: {
        name: "عبد الباسط عبد الصمد",
        style: "مرتل",
        getAyahAudioURL: (ayahNumber) => requestAyahAudioQuranComAPI(2, ayahNumber),
    },
    Sudais: {
        name: "عبدالرحمن السديس",
        style: null,
        getAyahAudioURL: (ayahNumber) => requestAyahAudioQuranComAPI(3, ayahNumber),
    },
    Shatri: {
        name: "أبو بكر الشاطرى",
        style: null,
        getAyahAudioURL: (ayahNumber) => requestAyahAudioQuranComAPI(4, ayahNumber),
    },
    Rifai: {
        name: "هاني الرفاعي",
        style: null,
        getAyahAudioURL: (ayahNumber) => requestAyahAudioQuranComAPI(5, ayahNumber),
    },
    Husary: {
        name: "محمود خليل الحصري",
        style: null,
        getAyahAudioURL: (ayahNumber) => requestAyahAudioQuranComAPI(6, ayahNumber),
    },
    Alafasy: {
        name: "مشاري راشد العفاسي",
        style: null,
        getAyahAudioURL: (ayahNumber) => requestAyahAudioQuranComAPI(7, ayahNumber),
    },
    Minshawi_Mujawwad: {
        name: "محمد صديق المنشاوي",
        style: 'مجود',
        getAyahAudioURL: (ayahNumber) => requestAyahAudioQuranComAPI(8, ayahNumber),
    },
    Minshawi_Murattal: {
        name: "محمد صديق المنشاوي",
        style: 'مرتل',
        getAyahAudioURL: (ayahNumber) => requestAyahAudioQuranComAPI(9, ayahNumber),
    },
    Shuraym: {
        name: "سعود الشريم",
        style: null,
        getAyahAudioURL: (ayahNumber) => requestAyahAudioQuranComAPI(10, ayahNumber),
    },
    Tablaway: {
        name: "محمد الطبلاوي",
        style: null,
        getAyahAudioURL: (ayahNumber) => requestAyahAudioQuranComAPI(11, ayahNumber),
    },
    Husary_Muallim: {
        name: "محمود خليل الحصري",
        style: 'معلم',
        getAyahAudioURL: (ayahNumber) => requestAyahAudioQuranComAPI(12, ayahNumber),
    },
}

export default recitations;