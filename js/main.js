// Main JavaScript for Portfolio

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const menuToggle = document.getElementById("menu-toggle");
  const closeMenu = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileMenuLinks = mobileMenu.querySelectorAll("a");

  menuToggle.addEventListener("click", function () {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("flex", "flex-col");
    document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
  });

  closeMenu.addEventListener("click", function () {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex", "flex-col");
    document.body.style.overflow = ""; // Re-enable scrolling
  });

  // Close mobile menu when a link is clicked
  mobileMenuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
      mobileMenu.classList.remove("flex", "flex-col");
      document.body.style.overflow = "";
    });
  });

  // Add animations to sections as they come into view
  const sections = document.querySelectorAll("section");

  // Intersection Observer for animation on scroll
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeIn");
          observer.unobserve(entry.target); // Only animate once
        }
      });
    },
    {
      threshold: 0.1, // Trigger when 10% of the element is visible
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  // Form Submission
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      event.preventDefault();

      // Get form values
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const subject = document.getElementById("subject").value;
      const message = document.getElementById("message").value;

      // Basic validation
      if (!name || !email || !subject || !message) {
        alert("Please fill in all fields");
        return;
      }

      // Form submission logic would go here
      // For demo purposes, we'll just show an alert
      alert("Thanks for your message! I will get back to you soon.");
      contactForm.reset();
    });
  }

  // Active navigation link highlighting
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  function updateActiveLinks() {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    // Update desktop menu active link
    navLinks.forEach((link) => {
      link.classList.remove(
        "text-transparent",
        "bg-gradient-to-r",
        "from-primary",
        "to-secondary",
        "bg-clip-text"
      );
      if (link.getAttribute("href").substring(1) === current) {
        link.classList.add(
          "text-transparent",
          "bg-gradient-to-r",
          "from-primary",
          "to-secondary",
          "bg-clip-text"
        );
      }
    });

    // Update mobile menu active link
    mobileNavLinks.forEach((link) => {
      // Remove both text-primary and gradient classes
      link.classList.remove(
        "text-primary",
        "text-transparent",
        "bg-gradient-to-r",
        "from-primary",
        "to-secondary",
        "bg-clip-text"
      );

      if (link.getAttribute("href").substring(1) === current) {
        // Add gradient text for active mobile link
        link.classList.add(
          "text-transparent",
          "bg-gradient-to-r",
          "from-primary",
          "to-secondary",
          "bg-clip-text"
        );
      }
    });
  }

  // Call on scroll
  window.addEventListener("scroll", updateActiveLinks);

  // Call once on page load
  updateActiveLinks();

  // Type effect for hero heading (optional)
  function initTypeEffect() {
    const heroHeading = document.querySelector("#home h1");
    if (!heroHeading) return;

    const text = heroHeading.textContent;
    heroHeading.textContent = "";

    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < text.length) {
        heroHeading.textContent += text.charAt(i);
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 50);
  }

  // Uncomment the line below to enable the type effect
  // initTypeEffect();
});
