(function () {
    function closeMobileMenu(hamburger, mobileMenu) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    }

    function initMobileMenu() {
        var hamburger = document.getElementById('hamburger');
        var mobileMenu = document.getElementById('mobileMenu');

        if (!hamburger || !mobileMenu) {
            return;
        }

        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        var menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(function (link) {
            link.addEventListener('click', function () {
                closeMobileMenu(hamburger, mobileMenu);
            });
        });

        window.addEventListener('scroll', function () {
            if (mobileMenu.classList.contains('active')) {
                closeMobileMenu(hamburger, mobileMenu);
            }
        });

        var logoText = document.querySelector('.logo-text');
        if (logoText) {
            logoText.addEventListener('click', function () {
                closeMobileMenu(hamburger, mobileMenu);
            });
        }
    }

    function initAboutLink() {
        var aboutUsLink = document.querySelector('.about-us-link');
        if (!aboutUsLink) {
            return;
        }

        aboutUsLink.style.zIndex = '120';
        aboutUsLink.style.pointerEvents = 'auto';
        aboutUsLink.addEventListener('click', function (event) {
            event.preventDefault();
            window.location.href = 'about.html';
        });
    }

    function submitContactForm() {
        var name = document.getElementById('name');
        var email = document.getElementById('email');
        var phone = document.getElementById('phone');
        var subject = document.getElementById('subject');
        var message = document.getElementById('message');
        var successMessage = document.getElementById('successMessage');
        var contactForm = document.getElementById('contactForm');

        if (!name || !email || !phone || !subject || !message || !successMessage || !contactForm) {
            return;
        }

        var nameValue = name.value.trim();
        var emailValue = email.value.trim();
        var phoneValue = phone.value.trim();
        var subjectValue = subject.value.trim();
        var messageValue = message.value.trim();

        document.querySelectorAll('.error').forEach(function (el) {
            el.classList.remove('show');
        });
        successMessage.classList.remove('show');

        var hasError = false;

        if (!nameValue) {
            var nameError = document.getElementById('nameError');
            if (nameError) {
                nameError.textContent = 'Name is required';
                nameError.classList.add('show');
            }
            hasError = true;
        }

        if (!emailValue || !emailValue.includes('@')) {
            var emailError = document.getElementById('emailError');
            if (emailError) {
                emailError.textContent = 'Valid email is required';
                emailError.classList.add('show');
            }
            hasError = true;
        }

        if (!phoneValue || phoneValue.length < 10) {
            var phoneError = document.getElementById('phoneError');
            if (phoneError) {
                phoneError.textContent = 'Valid phone number is required';
                phoneError.classList.add('show');
            }
            hasError = true;
        }

        if (!subjectValue) {
            var subjectError = document.getElementById('subjectError');
            if (subjectError) {
                subjectError.textContent = 'Subject is required';
                subjectError.classList.add('show');
            }
            hasError = true;
        }

        if (!messageValue) {
            var messageError = document.getElementById('messageError');
            if (messageError) {
                messageError.textContent = 'Message is required';
                messageError.classList.add('show');
            }
            hasError = true;
        }

        if (!hasError) {
            successMessage.classList.add('show');
            contactForm.reset();

            var contactContainer = document.querySelector('.contact-container');
            if (contactContainer) {
                window.scrollTo({
                    top: contactContainer.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        }
    }

    function initContactForm() {
        var contactForm = document.getElementById('contactForm');
        if (!contactForm) {
            return;
        }

        var submitButton = document.getElementById('contactSubmit');
        if (submitButton) {
            submitButton.addEventListener('click', submitContactForm);
        }

        document.addEventListener('keypress', function (event) {
            if (event.key === 'Enter' && event.target.tagName !== 'TEXTAREA') {
                submitContactForm();
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        initMobileMenu();
        initAboutLink();
        initContactForm();
    });
})();
