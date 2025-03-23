let currentLanguage = 'bn';

window.onload = function() {
  toggleLanguage(); // পেজ লোড হলে ডিফল্ট কন্টেন্ট লোড
}

function toggleLanguage() {
    const name = document.getElementById('myName');
    const title = document.getElementById('myTitle');
    const myFooter = document.getElementById('myFooter');
   
    const button = document.getElementById('languageButton');

    if (currentLanguage === 'en') {
        // বাংলা ভাষা
        name.textContent = 'মোঃ ওবায়দুল ইসলাম';
        title.textContent = 'এসইও স্পেশালিস্ট এবং এডব্লিউএস কন্টেন্ট নির্মাতা';
        myFooter.textContent = 'ওবায়দুলের দ্বারা তৈরী';
       
        button.textContent = 'English';
        currentLanguage = 'bn';
    } else {
        // ইংরেজি ভাষা
        name.textContent = 'Md Obaidul Islam';
        title.textContent = 'SEO Specialist & AWS Content Creator';
        myFooter.textContent = 'Made with❤️|MD OBAIDUL HAQUE';
       
        button.textContent = 'বাংলা';
        currentLanguage = 'en';
    }
    changeLanguage(currentLanguage);
}

function changeLanguage(lang) {
    console.log("Language changed to:", lang);
    // Add your language change logic here
}



