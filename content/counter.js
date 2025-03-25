let currentLanguage = 'bn';

window.onload = function () {
    toggleLanguage(); // পেজ লোড হলে ডিফল্ট কন্টেন্ট লোড
}

function toggleLanguage() {
    const name = document.getElementById('myName');
    const title = document.getElementById('myTitle');
    const myFooter = document.getElementById('myFooter');
    const button = document.getElementById('languageButton');

    // About Section Content
    const abtitle = document.getElementById('about-title');
    const paragraph1 = document.getElementById('about-paragraph1');
    const paragraph2 = document.getElementById('about-paragraph2');
    const certificationsTitle = document.getElementById('certifications-title');
    const certificationsList = document.getElementById('certifications-list');

    if (currentLanguage === 'en') {
        // বাংলা ভাষা
        name.textContent = 'মোঃ ওবায়দুল হক';
        title.textContent = 'এসইও স্পেশালিস্ট এবং এডব্লিউএস কন্টেন্ট নির্মাতা';
        myFooter.textContent = 'ওবায়দুলের দ্বারা তৈরী';

        // Bengali Content
        abtitle.textContent = 'আমার সম্পর্কে';
        paragraph1.innerHTML = `হ্যালো,<br>আমি মোঃ ওবায়দুল হক, একজন সফল ফ্রিল্যান্স SEO বিশেষজ্ঞ যিনি ৫+ বছরের বাস্তব অভিজ্ঞতার মাধ্যমে ব্যবসায়ীদের সার্চ র‍্যাংকিংয়ে আধিপত্য বিস্তার করতে সহায়তা করি। একজন SEO বিশেষজ্ঞ হিসেবে, আমি SEO চ্যালেঞ্জগুলো সমাধান করতে এবং সাদা-হ্যাট কৌশল তৈরি করতে দক্ষ যা দৃশ্যমানতা বৃদ্ধি, অর্গানিক ট্রাফিক বৃদ্ধি এবং কনভার্শন রেট উন্নত করতে সাহায্য করে।`;
        paragraph2.innerHTML = `SEO শুধু র‍্যাংকিং বাড়ানোর ব্যাপার নয়, এটি দীর্ঘমেয়াদী বৃদ্ধি, দৃশ্যমানতা এবং দর্শকদের আকর্ষণ করার বিষয়। আমি আমার অভিজ্ঞতা ব্যবহার করে আপনার ওয়েবসাইটকে গুগলের নতুন আপডেটগুলোতে মানিয়ে নিতে সহায়তা করব এবং সাদা-হ্যাট SEO পদ্ধতি ব্যবহার করে আপনার সাইটকে দীর্ঘমেয়াদে ভালো ফলাফল পেতে সহায়তা করব।`;
        certificationsTitle.textContent = 'সক্রিয় সার্টিফিকেশনসমূহ:';
        certificationsList.innerHTML = `
        <ul>  
  <li>  
    <p>কনটেন্ট অপ্টিমাইজেশন</p>  
    <div class="slide-container">  
      <img src="images/content-optimization.png" alt="স্লাইড ইমেজ" class="slide-image">  
      <div class="slide-overlay">  
        <p class="skill">দক্ষতা</p>  
        <ul>  
          <li>কনটেন্ট অডিট</li>  
          <li>কনটেন্ট পুনঃব্যবহার</li>  
          <li>কনটেন্ট অপ্টিমাইজেশন</li>  
          <li>টপিক্যাল অথরিটি</li>  
          <li>কনটেন্ট রাইটিং</li>  
          <li>কনটেন্ট পরিকল্পনা</li>  
          <li>সার্ফার বেসিকস</li>  
          <li>ইন্টারনাল লিঙ্কিং</li>  
          <li>SEO কনটেন্ট স্ট্র্যাটেজি</li>  
          <li>SEO ROI</li>  
          <li>অন-পেজ SEO</li>  
        </ul>  
      </div>  
    </div>  
  </li>  
</ul>
<ul>
  <li>
    <p>রেসপন্সিভ ওয়েব ডিজাইন</p>
    <div class="slide-container">
      <img src="images/web-dejaner-certifies.png" alt="Slide Image" class="slide-image">
      <div class="slide-overlay">
        <p class="skill">দক্ষতা</p>
        <ul>
          <li>সার্ভে ফর্ম তৈরি করুন</li>
          <li>ট্রিবিউট পেজ তৈরি করুন</li>
          <li>টেকনিক্যাল ডকুমেন্টেশন পেজ তৈরি করুন</li>
          <li>প্রোডাক্ট ল্যান্ডিং পেজ তৈরি করুন</li>
          <li>পার্সোনাল পোর্টফোলিও ওয়েবপেজ তৈরি করুন</li>
        </ul>
      </div>
    </div>
  </li>
</ul>
<ul>
  <li>
    <p>জাভাস্ক্রিপ্ট অ্যালগরিদম এবং ডাটা স্ট্রাকচার</p>
    <div class="slide-container">
      <img src="images/JavaScript-Algorithms-and Data Structures.png" alt="Slide Image" class="slide-image">
      <div class="slide-overlay">
        <p class="skill">দক্ষতা</p>
        <ul>
          <li>প্যালিনড্রোম চেকার তৈরি করুন</li>
          <li>রোমান নাম্বার কনভার্টার তৈরি করুন</li>
          <li>টেলিফোন নম্বর ভ্যালিডেটর তৈরি করুন</li>
          <li>ক্যাশ রেজিস্টার তৈরি করুন</li>
          <li>পোকেমন সার্চ অ্যাপ তৈরি করুন</li>
        </ul>
      </div>
    </div>
  </li>
</ul>
<ul>
  <li>
    <p>ফ্রন্ট এন্ড ডেভেলপমেন্ট লাইব্রেরি</p>
    <div class="slide-container">
      <img src="images/Front-End-Development-Libraries.png" alt="Slide Image" class="slide-image">
      <div class="slide-overlay">
        <p class="skill">দক্ষতা</p>
        <ul>
          <li>র্যান্ডম কোট মেশিন তৈরি করুন</li>
          <li>মার্কডাউন প্রিভিউয়ার তৈরি করুন</li>
          <li>ড্রাম মেশিন তৈরি করুন</li>
          <li>জাভাস্ক্রিপ্ট ক্যালকুলেটর তৈরি করুন</li>
          <li>২৫ + ৫ ক্লক তৈরি করুন</li>
        </ul>
      </div>
    </div>
  </li>
</ul>
<ul>
  <li>
    <p>ডাটা ভিজ্যুয়ালাইজেশন</p>
    <div class="slide-container">
      <img src="images/Data-Visualization.png" alt="Slide Image" class="slide-image">
      <div class="slide-overlay">
        <p class="skill">দক্ষতা</p>
        <ul>
          <li>বার চার্ট দিয়ে ডাটা ভিজ্যুয়ালাইজ করুন</li>
          <li>স্ক্যাটারপ্লট গ্রাফ দিয়ে ডাটা ভিজ্যুয়ালাইজ করুন</li>
          <li>হিট ম্যাপ দিয়ে ডাটা ভিজ্যুয়ালাইজ করুন</li>
          <li>চোরোপ্লেথ ম্যাপ দিয়ে ডাটা ভিজ্যুয়ালাইজ করুন</li>
          <li>ট্রিম্যাপ ডায়াগ্রাম দিয়ে ডাটা ভিজ্যুয়ালাইজ করুন</li>
        </ul>
      </div>
    </div>
  </li>
</ul>


        `;

        button.textContent = 'See English';
        currentLanguage = 'bn';
    } else {
        // ইংরেজি ভাষা
        name.textContent = 'Md Obaidul Islam';
        title.textContent = 'SEO Specialist & AWS Content Creator';
        myFooter.textContent = 'Made with❤️|MD OBAIDUL HAQUE';

        // English Content
        abtitle.textContent = 'About';
        paragraph1.innerHTML = `Hi,<br>I am Md.Obaidul Haque, a successful freelance SEO specialist with 5+ years of practical experience helping businesses dominate search rankings. As an SEO expert, I excel at solving SEO challenges and developing white hat strategies that increase visibility, boost organic traffic, and improve conversion rates.`;
        paragraph2.innerHTML = `SEO is not just about increasing rankings, it's about long-time growth, visibility, and attracting visitors. I will use my experience to help your website adapt to Google's new updates and use white-hat SEO methods so that your site gets good results in the long-time.`;
        certificationsTitle.textContent = 'Active Certifications:';
        certificationsList.innerHTML = ` 
        <ul>
          <li>
            <p class="subtitle">Complete SEO</p>
            <div class="slide-container">
              <img src="images/Hubspot-Academy-SEO.png" alt="Slide Image" class="slide-image">
              <div class="slide-overlay">
              <p class="skill">Skills</p>
              <ul class="skill-list">
              <li>SEO Basics</li>
              <li>On Page and Technical SEO</li>
              <li>Keyword Research for SEO</li>
              <li>Link Building for SEO: Scaling Your Backlink Strategy</li>
              <li>Optimizing Your Website for Rich Results</li>
              <li>SEO Reporting</li>
              </ul>
              </div>
            </div>
          </li>
          </ul>
        
        <ul>
          <li>
            <p class="subtitle">Content Optimization</p>
            <div class="slide-container">
              <img src="images/content-optimization.png" alt="Slide Image" class="slide-image">
              <div class="slide-overlay">
              <p class="skill">Skills</p>
              <ul class="skill-list">
              <li>Content Audit</li>
              <li>Content Repurposing</li>
              <li>Content Optimization</li>
              <li>Topical Authority</li>
              <li>Content Writing</li>
              <li>Content Planning</li>
              <li>Surfer Basics</li>
              <li>Internal Linking</li>
              <li>SEO Content Strategy</li>
              <li>SEO ROI</li>
              <li>On-page SEO</li>
              </ul>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <p class="subtitle">Responsive Web Design</p>
            <div class="slide-container">
              <img src="images/web-dejaner-certifies.png" alt="Slide Image" class="slide-image">
              <div class="slide-overlay">
              <p class="skill">Skills</p>
              <ul class="skill-list">
              <li>Certifications Build a Survey Form</li>
              <li>Build a Tribute Page</li>
              <li>Build a Technical Documentation Page</li>
              <li>Build a Product Landing Page</li>
              <li>Build a Personal Portfolio Webpage</li>
              </ul>
              </div>
            </div>
          </li>
        </ul>
        <ul>
          <li>
            <p class="subtitle">JavaScript Algorithms and Data Structures</p>
            <div class="slide-container">
              <img src="images/JavaScript-Algorithms-and Data Structures.png" alt="Slide Image" class="slide-image">
              <div class="slide-overlay">
              <p class="skill">Skills</p>
              <ul class="skill-list">
              <li>Build a Palindrome Checker</li>
              <li>Build a Roman Numeral Converter</li>
              <li>Build a Telephone Number Validator</li>
              <li>Build a Cash Register</li>
              <li>Build a Pokémon Search App</li>
              </ul>
              </div>
            </div>
          </li>
          </ul>
          <ul>
          <li>
            <p class="subtitle">Front End Development Libraries</p>
            <div class="slide-container">
              <img src="images/Front-End-Development-Libraries.png" alt="Slide Image" class="slide-image">
              <div class="slide-overlay">
              <p class="skill">Skills</p>
              <ul class="skill-list">
              <li>Build a Random Quote Machine</li>
              <li>Build a Markdown Previewer</li>
              <li>Build a Drum Machine</li>
              <li>Build a JavaScript Calculator</li>
              <li>Build a 25 + 5 Clock</li>
              </ul>
              </div>
            </div>
          </li>
          </ul>
          <ul>
          <li>
            <p class="subtitle">Data Visualization</p>
            <div class="slide-container">
              <img src="images/Data-Visualization.png" alt="Slide Image" class="slide-image">
              <div class="slide-overlay">
              <p class="skill">Skills</p>
              <ul class="skill-list">
              <li>Visualize Data with a Bar Chart</li>
              <li>Visualize Data with a Scatterplot Graph</li>
              <li>Visualize Data with a Heat Map</li>
              <li>Visualize Data with a Choropleth Map</li>
              <li>Visualize Data with a Treemap Diagram</li>
              </ul>
              </div>
            </div>
          </li>
          </ul>`;

        button.textContent = 'বাংলায় দেখুন';
        currentLanguage = 'en';
    }
    changeLanguage(currentLanguage);
}

function changeLanguage(lang) {
    console.log("Language changed to:", lang);
    // Add your language change logic here
}



