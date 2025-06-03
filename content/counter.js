let currentLanguage="bn";function toggleLanguage(){let i=document.getElementById("myName"),l=document.getElementById("myTitle"),s=document.getElementById("myFooter"),e=document.getElementById("languageButton"),t=document.getElementById("about-title"),a=document.getElementById("about-paragraph1"),n=document.getElementById("about-paragraph2"),r=document.getElementById("certifications-title"),o=document.getElementById("certifications-list");"en"===currentLanguage?(i.textContent="মোঃ ওবায়দুল হক",l.textContent="এসইও স্পেশালিস্ট এবং organic Growth",s.textContent="ওবায়দুলের দ্বারা তৈরী",a.innerHTML=`
    <h2>ওবায়দুল বিডি সম্পর্কে</h2>
    <p>হ্যালো,<br>আমি মোঃ ওবায়দুল হক, <strong>ওবায়দুল বিডি</strong>-এর একজন সফল ফ্রিল্যান্স এসইও স্পেশালিস্ট। ৫ বছরের বেশি বাস্তব অভিজ্ঞতা নিয়ে আমি ওয়েবসাইটের র‍্যাংকিং বৃদ্ধি ও ট্রাফিক বাড়ানোর কাজ করছি! একজন এসইও বিশেষজ্ঞ হিসেবে, আমি চ্যালেঞ্জ মোকাবিলা ও হোয়াইট-হ্যাট কৌশল তৈরি করতে দক্ষ, যা ওয়েবসাইটের দৃশ্যমানতা বৃদ্ধি, অর্গানিক ট্রাফিক বাড়ানো এবং কনভার্সন রেট উন্নত করতে সহায়তা করে।</p>
    `,n.innerHTML=`
    <h2>ওবায়দুল বিডি-এর পেশাদার এসইও সেবা – র‍্যাংকিং বৃদ্ধি করুন ও ট্রাফিক বাড়ান!</h2>
    <p><strong>এসইও শুধুমাত্র র‍্যাংকিং নয়</strong>—এটি দীর্ঘমেয়াদী বৃদ্ধি, দৃশ্যমানতা এবং সঠিক দর্শকদের আকৃষ্ট করার বিষয়। <strong>ওবায়দুল বিডি</strong>-এ আমি আমার দক্ষতা ব্যবহার করে আপনার ওয়েবসাইটকে গুগলের সর্বশেষ আপডেটের সাথে মানিয়ে নিতে সাহায্য করি, দীর্ঘস্থায়ী ফলাফলের জন্য হোয়াইট-হ্যাট এসইও কৌশল প্রয়োগ করি।</p>
    <p>আপনার ব্যবসাকে আরও বেশি গ্রাহকের কাছে পৌঁছাতে এবং গুগলে উচ্চ র‍্যাংকিং পেতে চান? আমি একজন অভিজ্ঞ এসইও বিশেষজ্ঞ, যারা আপনার ওয়েবসাইটের দৃশ্যমানতা বৃদ্ধি, গুণগত মানসম্পন্ন ট্রাফিক আকর্ষণ এবং নিশ্চিত ফলাফল দিয়ে আয় বাড়ানোর জন্য কাজ করি।</p>
    <p>আমার সেবাসমূহ:</p>
    <ul>
        <li>✅ <strong>অন-পেজ এসইও</strong> – কনটেন্ট, মেটা ট্যাগ ও সাইট স্ট্রাকচার অপটিমাইজেশন।</li>
        <li>✅ <strong>অফ-পেজ এসইও</strong> – অথরিটি ও বিশ্বাসযোগ্যতা বৃদ্ধির জন্য উচ্চ-মানের ব্যাকলিংক।</li>
        <li>✅ <strong>মাসিক এসইও</strong> – ধারাবাহিক অপটিমাইজেশন ও পারফরম্যান্স ট্র্যাকিং।</li>
        <li>✅ <strong>লোকাল এসইও</strong> – গুগল ম্যাপ ও স্থানীয় সার্চ রেজাল্টে প্রাধান্য পান।</li>
    </ul>
    <p>🔍 <strong>১০০% হোয়াইট-হ্যাট কৌশল</strong> | দ্রুত ও কার্যকরী ফলাফল | স্বচ্ছ রিপোর্টিং</p>
    <p><strong>প্রতিযোগীদের পেছনে ফেলতে প্রস্তুত?</strong> <strong>ওবায়দুল বিডি</strong> এর সাথে আপনার ওয়েবসাইটকে শীর্ষে নিয়ে যান! 🚀</p>
    `,r.textContent="সক্রিয় সার্টিফিকেশন:",o.innerHTML=` 
<ul>
  <li>
    <p class="subtitle">সম্পূর্ণ SEO</p>
    <div class="slide-container">
      <img src="images/Hubspot-Academy-SEO.png" alt="সার্টিফিকেট ইমেজ" class="slide-image">
      <div class="slide-overlay">
        <p class="skill">দক্ষতা</p>
        <ul class="skill-list">
          <li>SEO এর মৌলিক বিষয়</li>
          <li>অন-পেজ এবং টেকনিক্যাল SEO</li>
          <li>SEO-এর জন্য কীওয়ার্ড গবেষণা</li>
          <li>লিংক বিল্ডিং: ব্যাকলিংক কৌশল বিস্তৃত করা</li>
          <li>ওয়েবসাইট অপ্টিমাইজেশন রিচ রেজাল্টের জন্য</li>
          <li>SEO রিপোর্টিং</li>
        </ul>
      </div>
    </div>
  </li>
</ul>

<ul>
  <li>
    <p class="subtitle">কনটেন্ট অপ্টিমাইজেশন</p>
    <div class="slide-container">
      <img src="images/content-optimization.png" alt="সার্টিফিকেট ইমেজ" class="slide-image">
      <div class="slide-overlay">
        <p class="skill">দক্ষতা</p>
        <ul class="skill-list">
          <li>কনটেন্ট অডিট</li>
          <li>কনটেন্ট রিপারপোজিং</li>
          <li>কনটেন্ট অপ্টিমাইজেশন</li>
          <li>টপিক্যাল অথরিটি</li>
          <li>কনটেন্ট রাইটিং</li>
          <li>কনটেন্ট প্ল্যানিং</li>
          <li>সার্ফার বেসিক</li>
          <li>ইন্টারনাল লিংকিং</li>
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
    <p class="subtitle">রেসপনসিভ ওয়েব ডিজাইন</p>
    <div class="slide-container">
      <img src="images/web-dejaner-certifies.png" alt="সার্টিফিকেট ইমেজ" class="slide-image">
      <div class="slide-overlay">
        <p class="skill">দক্ষতা</p>
        <ul class="skill-list">
          <li>সার্ভে ফর্ম তৈরি করা</li>
          <li>ট্রিবিউট পেজ তৈরি করা</li>
          <li>টেকনিক্যাল ডকুমেন্টেশন পেজ তৈরি করা</li>
          <li>প্রোডাক্ট ল্যান্ডিং পেজ তৈরি করা</li>
          <li>পার্সোনাল পোর্টফোলিও ওয়েবপেজ তৈরি করা</li>
        </ul>
      </div>
    </div>
  </li>
</ul>

<ul>
  <li>
    <p class="subtitle">জাভাস্ক্রিপ্ট অ্যালগরিদম এবং ডাটা স্ট্রাকচার</p>
    <div class="slide-container">
      <img src="images/JavaScript-Algorithms-and Data Structures.png" alt="সার্টিফিকেট ইমেজ" class="slide-image">
      <div class="slide-overlay">
        <p class="skill">দক্ষতা</p>
        <ul class="skill-list">
          <li>Palindrome চেকার তৈরি করা</li>
          <li>রোমান নাম্বার কনভার্টার তৈরি করা</li>
          <li>টেলিফোন নাম্বার ভ্যালিডেটর তৈরি করা</li>
          <li>ক্যাশ রেজিস্টার তৈরি করা</li>
          <li>পোকেমন সার্চ অ্যাপ তৈরি করা</li>
        </ul>
      </div>
    </div>
  </li>
</ul>

<ul>
  <li>
    <p class="subtitle">ফ্রন্ট-এন্ড ডেভেলপমেন্ট লাইব্রেরি</p>
    <div class="slide-container">
      <img src="images/Front-End-Development-Libraries.png" alt="সার্টিফিকেট ইমেজ" class="slide-image">
      <div class="slide-overlay">
        <p class="skill">দক্ষতা</p>
        <ul class="skill-list">
          <li>র‍্যান্ডম কোট মেশিন তৈরি করা</li>
          <li>মার্কডাউন প্রিভিউয়ার তৈরি করা</li>
          <li>ড্রাম মেশিন তৈরি করা</li>
          <li>জাভাস্ক্রিপ্ট ক্যালকুলেটর তৈরি করা</li>
          <li>২৫ + ৫ ক্লক তৈরি করা</li>
        </ul>
      </div>
    </div>
  </li>
</ul>

<ul>
  <li>
    <p class="subtitle">ডাটা ভিজুয়ালাইজেশন</p>
    <div class="slide-container">
      <img src="images/Data-Visualization.png" alt="সার্টিফিকেট ইমেজ" class="slide-image">
      <div class="slide-overlay">
        <p class="skill">দক্ষতা</p>
        <ul class="skill-list">
          <li>বার চার্টের মাধ্যমে ডাটা ভিজুয়ালাইজ করা</li>
          <li>স্ক্যাটারপ্লট গ্রাফের মাধ্যমে ডাটা ভিজুয়ালাইজ করা</li>
          <li>হিট ম্যাপের মাধ্যমে ডাটা ভিজুয়ালাইজ করা</li>
          <li>ক্লোরোপ্লেথ ম্যাপের মাধ্যমে ডাটা ভিজুয়ালাইজ করা</li>
          <li>ট্রি ম্যাপ ডায়াগ্রামের মাধ্যমে ডাটা ভিজুয়ালাইজ করা</li>
        </ul>
      </div>
    </div>
  </li>
</ul>

<ul>
  <li>
    <p class="subtitle">টাইপিং অর্জন</p>
    <div class="slide-container">
      <img src="images/type-spreed.png" alt="সার্টিফিকেট ইমেজ" class="slide-image">
      <div class="slide-overlay">
        <p class="skill">দক্ষতা</p>
        <ul class="skill-list">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </li>
</ul>`,e.textContent="See English",currentLanguage="bn"):(i.textContent="Md Obaidul Haque",l.textContent="Top SEO Specialist for organic Growth",s.textContent="Made with❤️|MD OBAIDUL HAQUE",t.textContent="Top SEO Specialist for organic Growth",a.innerHTML=`
<h2>About Obaidul BD</h2>
<p>Hi,<br>I’m Md. Obaidul Haque, a successful freelance SEO specialist at <strong>Obaidul BD</strong> with over 5 years of practical experience boosting rankings and driving traffic! As an SEO expert, I excel at solving challenges and crafting white-hat strategies that increase visibility, boost organic traffic, and improve conversion rates.</p>
`,n.innerHTML=`
<h2>Professional SEO Services by Obaidul BD – Boost Rankings & Drive Traffic!</h2>
<p><strong>SEO is more than just rankings</strong>—it’s about long-term growth, visibility, and attracting the right visitors. At <strong>Obaidul BD</strong>, I leverage my expertise to help your website adapt to Google’s latest updates, using white-hat SEO methods for lasting results.</p>
<p>Looking to rank higher on Google and bring more customers to your business? I’m an experienced SEO specialist dedicated to helping businesses like yours increase visibility, attract quality traffic, and grow revenue with proven strategies.</p>
<p>Here’s what I offer:</p>
<ul>
    <li>✅ <strong>On-Page SEO</strong> – Optimize content, meta tags, and site structure.</li>
    <li>✅ <strong>Off-Page SEO</strong> – High-quality backlinks for authority and trust.</li>
    <li>✅ <strong>Monthly SEO</strong> – Continuous optimization and performance tracking.</li>
    <li>✅ <strong>Local SEO</strong> – Dominate Google Maps and local search results.</li>
</ul>
<p>🔍 <strong>100% White-Hat Techniques</strong> | Fast, Effective Results | Transparent Reporting</p>
<p><strong>Ready to outperform your competition?</strong> Let’s take your site to the top with <strong>Obaidul BD</strong>! 🚀</p>
`,r.textContent="Active Certifications:",o.innerHTML=` 
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
              <li>Build a Pok\xe9mon Search App</li>
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
          </ul>
          <ul>
          <li>
            <p class="subtitle">Type Achievements</p>
            <div class="slide-container">
              <img src="images/type-spreed.png" alt="Slide Image" class="slide-image">
              <div class="slide-overlay">
              <p class="skill">Skills</p>
              <ul class="skill-list">
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              </ul>
              </div>
            </div>
          </li>
        </ul>`,e.textContent="বাংলায় দেখুন",currentLanguage="en"),changeLanguage(currentLanguage)}function changeLanguage(i){console.log("Language changed to:",i)}window.onload=function(){toggleLanguage()};