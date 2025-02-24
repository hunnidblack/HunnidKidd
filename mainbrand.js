document.addEventListener("DOMContentLoaded", function () {
          const menuToggle = document.querySelector(".menu-toggle");
          const navbarLinks = document.querySelector(".navbar-links");
          const navbar = document.querySelector(".navbar");

          // Mobile Menu Toggle
          menuToggle.addEventListener("click", function () {
              navbarLinks.classList.toggle("active");
          });

          // Change Navbar Background on Scroll
          window.addEventListener("scroll", function () {
              if (window.scrollY > 50) {
                  navbar.classList.add("scrolled");
              } else {
                  navbar.classList.remove("scrolled");
              }
          });
      });

      