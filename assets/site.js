(function () {
  const menuButton = document.querySelector('[data-menu-toggle]');
  const mobileNav = document.querySelector('[data-mobile-nav]');

  if (menuButton && mobileNav) {
    menuButton.addEventListener('click', function () {
      const open = mobileNav.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
      document.body.classList.toggle('menu-open', open);
    });

    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileNav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open menu');
        document.body.classList.remove('menu-open');
      });
    });


    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open menu');
        document.body.classList.remove('menu-open');
        menuButton.focus();
      }
    });
  }

  document.querySelectorAll('[data-year]').forEach(function (node) {
    node.textContent = new Date().getFullYear();
  });

  const salaryInput = document.querySelector('[data-salary-input]');
  if (salaryInput) {
    const totalNode = document.querySelector('[data-fee-total]');
    const startNode = document.querySelector('[data-fee-start]');
    const completionNode = document.querySelector('[data-fee-completion]');

    const formatCurrency = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    });

    function updateCalculator() {
      const raw = Number(String(salaryInput.value).replace(/[^0-9.]/g, '')) || 0;
      const fee = raw * 0.2;
      const half = fee / 2;
      if (totalNode) totalNode.textContent = formatCurrency.format(fee);
      if (startNode) startNode.textContent = formatCurrency.format(half);
      if (completionNode) completionNode.textContent = formatCurrency.format(half);
    }

    salaryInput.addEventListener('input', updateCalculator);
    updateCalculator();
  }

  const roleSearch = document.querySelector('[data-role-search]');
  if (roleSearch) {
    const categories = Array.from(document.querySelectorAll('[data-role-category]'));
    roleSearch.addEventListener('input', function () {
      const query = roleSearch.value.trim().toLowerCase();
      categories.forEach(function (category) {
        const text = category.textContent.toLowerCase();
        category.classList.toggle('is-hidden', query && !text.includes(query));
      });
    });
  }

  const leadForm = document.querySelector('[data-lead-form]');
  if (leadForm) {
    const status = leadForm.querySelector('[data-form-status]');
    const submitButton = leadForm.querySelector('button[type="submit"]');
    const endpoint = leadForm.getAttribute('data-endpoint');

    function setStatus(message, type) {
      if (!status) return;
      status.textContent = message;
      status.className = 'form-status show ' + type;
    }

    leadForm.addEventListener('submit', async function (event) {
      event.preventDefault();

      if (!leadForm.checkValidity()) {
        leadForm.reportValidity();
        return;
      }

      if (!endpoint) {
        setStatus('Form routing is not connected yet. Please email contact@proadmins.io or call (631) 877-1393 for now.', 'error');
        return;
      }

      const originalText = submitButton ? submitButton.textContent : '';
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Sending...';
      }

      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          body: new FormData(leadForm),
          headers: { Accept: 'application/json' }
        });

        if (!response.ok) throw new Error('Submission failed');
        leadForm.reset();
        setStatus('Thanks. Your hiring request was sent to ProAdmins. We will be in touch soon.', 'success');
      } catch (error) {
        setStatus('Something went wrong. Please try again or email contact@proadmins.io.', 'error');
      } finally {
        if (submitButton) {
          submitButton.disabled = false;
          submitButton.textContent = originalText;
        }
      }
    });
  }
})();
