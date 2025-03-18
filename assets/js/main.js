/*
	Dimension by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function ($) {
    var $window = $(window),
      $body = $("body"),
      $wrapper = $("#wrapper"),
      $header = $("#header"),
      $footer = $("#footer"),
      $main = $("#main"),
      $main_articles = $main.children("article");
  
    // Breakpoints.
    breakpoints({
      xlarge: ["1281px", "1680px"],
      large: ["981px", "1280px"],
      medium: ["737px", "980px"],
      small: ["481px", "736px"],
      xsmall: ["361px", "480px"],
      xxsmall: [null, "360px"],
    });
  
    // Play initial animations on page load.
    $window.on("load", function () {
      window.setTimeout(function () {
        $body.removeClass("is-preload");
      }, 100);
    });
  
    // Fix: Flexbox min-height bug on IE.
    if (browser.name == "ie") {
      var flexboxFixTimeoutId;
  
      $window
        .on("resize.flexbox-fix", function () {
          clearTimeout(flexboxFixTimeoutId);
  
          flexboxFixTimeoutId = setTimeout(function () {
            if ($wrapper.prop("scrollHeight") > $window.height())
              $wrapper.css("height", "auto");
            else $wrapper.css("height", "100vh");
          }, 250);
        })
        .triggerHandler("resize.flexbox-fix");
    }
  
    // Nav.
    var $nav = $header.children("nav"),
      $nav_li = $nav.find("li");
  
    // Add "middle" alignment classes if we're dealing with an even number of items.
    if ($nav_li.length % 2 == 0) {
      $nav.addClass("use-middle");
      $nav_li.eq($nav_li.length / 2).addClass("is-middle");
    }
  
    // Main.
    var delay = 325,
      locked = false;
  
    // Methods.
    $main._show = function (id, initial) {
      var $article = $main_articles.filter("#" + id);
  
      // No such article? Bail.
      if ($article.length == 0) return;
  
      // Handle lock.
  
      // Already locked? Speed through "show" steps w/o delays.
      if (locked || (typeof initial != "undefined" && initial === true)) {
        // Mark as switching.
        $body.addClass("is-switching");
  
        // Mark as visible.
        $body.addClass("is-article-visible");
  
        // Deactivate all articles (just in case one's already active).
        $main_articles.removeClass("active");
  
        // Hide header, footer.
        $header.hide();
        $footer.hide();
  
        // Show main, article.
        $main.show();
        $article.show();
  
        // Activate article.
        $article.addClass("active");
  
        // Unlock.
        locked = false;
  
        // Unmark as switching.
        setTimeout(
          function () {
            $body.removeClass("is-switching");
          },
          initial ? 1000 : 0
        );
  
        return;
      }
  
      // Lock.
      locked = true;
  
      // Article already visible? Just swap articles.
      if ($body.hasClass("is-article-visible")) {
        // Deactivate current article.
        var $currentArticle = $main_articles.filter(".active");
  
        $currentArticle.removeClass("active");
  
        // Show article.
        setTimeout(function () {
          // Hide current article.
          $currentArticle.hide();
  
          // Show article.
          $article.show();
  
          // Activate article.
          setTimeout(function () {
            $article.addClass("active");
  
            // Window stuff.
            $window.scrollTop(0).triggerHandler("resize.flexbox-fix");
  
            // Unlock.
            setTimeout(function () {
              locked = false;
            }, delay);
          }, 25);
        }, delay);
      }
  
      // Otherwise, handle as normal.
      else {
        // Mark as visible.
        $body.addClass("is-article-visible");
  
        // Show article.
        setTimeout(function () {
          // Hide header, footer.
          $header.hide();
          $footer.hide();
  
          // Show main, article.
          $main.show();
          $article.show();
  
          // Activate article.
          setTimeout(function () {
            $article.addClass("active");
  
            // Window stuff.
            $window.scrollTop(0).triggerHandler("resize.flexbox-fix");
  
            // Unlock.
            setTimeout(function () {
              locked = false;
            }, delay);
          }, 25);
        }, delay);
      }
    };
  
    $main._hide = function (addState) {
      var $article = $main_articles.filter(".active");
  
      // Article not visible? Bail.
      if (!$body.hasClass("is-article-visible")) return;
  
      // Add state?
      if (typeof addState != "undefined" && addState === true)
        history.pushState(null, null, "#");
  
      // Handle lock.
  
      // Already locked? Speed through "hide" steps w/o delays.
      if (locked) {
        // Mark as switching.
        $body.addClass("is-switching");
  
        // Deactivate article.
        $article.removeClass("active");
  
        // Hide article, main.
        $article.hide();
        $main.hide();
  
        // Show footer, header.
        $footer.show();
        $header.show();
  
        // Unmark as visible.
        $body.removeClass("is-article-visible");
  
        // Unlock.
        locked = false;
  
        // Unmark as switching.
        $body.removeClass("is-switching");
  
        // Window stuff.
        $window.scrollTop(0).triggerHandler("resize.flexbox-fix");
  
        return;
      }
  
      // Lock.
      locked = true;
  
      // Deactivate article.
      $article.removeClass("active");
  
      // Hide article.
      setTimeout(function () {
        // Hide article, main.
        $article.hide();
        $main.hide();
  
        // Show footer, header.
        $footer.show();
        $header.show();
  
        // Unmark as visible.
        setTimeout(function () {
          $body.removeClass("is-article-visible");
  
          // Window stuff.
          $window.scrollTop(0).triggerHandler("resize.flexbox-fix");
  
          // Unlock.
          setTimeout(function () {
            locked = false;
          }, delay);
        }, 25);
      }, delay);
    };
  
    // Articles.
    $main_articles.each(function () {
      var $this = $(this);
  
      // Close.
      $('<div class="close">Close</div>')
        .appendTo($this)
        .on("click", function () {
          location.hash = "";
        });
  
      // Prevent clicks from inside article from bubbling.
      $this.on("click", function (event) {
        event.stopPropagation();
      });
    });
  
    // Events.
    $body.on("click", function (event) {
      // Article visible? Hide.
      if ($body.hasClass("is-article-visible")) $main._hide(true);
    });
  
    $window.on("keyup", function (event) {
      switch (event.keyCode) {
        case 27:
          // Article visible? Hide.
          if ($body.hasClass("is-article-visible")) $main._hide(true);
  
          break;
  
        default:
          break;
      }
    });
  
    $window.on("hashchange", function (event) {
      // Empty hash?
      if (location.hash == "" || location.hash == "#") {
        // Prevent default.
        event.preventDefault();
        event.stopPropagation();
  
        // Hide.
        $main._hide();
      }
  
      // Otherwise, check for a matching article.
      else if ($main_articles.filter(location.hash).length > 0) {
        // Prevent default.
        event.preventDefault();
        event.stopPropagation();
  
        // Show article.
        $main._show(location.hash.substr(1));
      }
    });
  
    // Scroll restoration.
    // This prevents the page from scrolling back to the top on a hashchange.
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    else {
      var oldScrollPos = 0,
        scrollPos = 0,
        $htmlbody = $("html,body");
  
      $window
        .on("scroll", function () {
          oldScrollPos = scrollPos;
          scrollPos = $htmlbody.scrollTop();
        })
        .on("hashchange", function () {
          $window.scrollTop(oldScrollPos);
        });
    }
  
    // Initialize.
  
    // Hide main, articles.
    $main.hide();
    $main_articles.hide();
  
    // Initial article.
    if (location.hash != "" && location.hash != "#")
      $window.on("load", function () {
        $main._show(location.hash.substr(1), true);
      });
  
    // Contact form handling
    document.addEventListener("DOMContentLoaded", function () {
      const form = document.getElementById("contact-form");
      const formMessage = document.getElementById("form-message");
      const spinner = document.getElementById("spinner");
      const submitButton = form.querySelector('input[type="submit"]');
      const contactSection = document.getElementById("contact");
    
      if (form) {
        form.addEventListener("submit", function (e) {
          e.preventDefault();
    
          const formData = new FormData(form);
          const data = Object.fromEntries(formData);
    
          // Basic form validation
          if (!data.name || !data.email || !data.message) {
            showMessage("Please fill in all fields.", "error");
            return;
          }
    
          // Simple email validation
          if (!isValidEmail(data.email)) {
            showMessage("Please enter a valid email address.", "error");
            return;
          }
    
          // Show spinner and hide form message
          showSpinner(true);
          formMessage.classList.remove("visible");
          // Disable submit button
          submitButton.disabled = true;
    
          // Send data asynchronously
          fetch("https://2ceumb6wy0.execute-api.eu-west-2.amazonaws.com/prod/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((result) => {
            console.log("Message sent successfully:", result);
            showSpinner(false);
            showMessage("Message sent successfully!", "success");
            form.reset();
    
            // Scroll to the form message
            scrollToElement(formMessage);
    
            // Hide success message after 2 seconds
            setTimeout(() => {
              formMessage.classList.remove("visible");
              
              // Close the contact form and refresh the page after 1 more second
              setTimeout(() => {
                closeContactForm();
                // Refresh the page and scroll to top
                window.location.href = window.location.pathname + window.location.search;
              }, 1000);
            }, 2000);
          })
          .catch((error) => {
            console.error("Error:", error);
            showSpinner(false);
            showMessage("There was an error sending your message. Please try again.", "error");
          })
          .finally(() => {
            // Re-enable submit button
            submitButton.disabled = false;
          });
        });
      }
    
      function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = "form-message " + type;
        formMessage.classList.add("visible");
    
        if (type === "error") {
          // Hide error messages after 5 seconds
          setTimeout(() => {
            formMessage.classList.remove("visible");
          }, 5000);
        }
      }
    
      function isValidEmail(email) {
        const re =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }
    
      function showSpinner(show) {
        spinner.style.display = show ? 'block' : 'none';
      }
    
      function closeContactForm() {
        contactSection.classList.remove("active");
      }
    
      function scrollToElement(element) {
        const rect = element.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetY = rect.top + scrollTop - 20; // 20px padding
    
        window.scrollTo({
          top: targetY,
          behavior: 'smooth'
        });
      }
    });
  })(jQuery);