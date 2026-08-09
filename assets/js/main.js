const menu = document.querySelector('.menu');
const links = document.querySelector('.links');

menu?.addEventListener('click', () => {
  const opened = links.classList.toggle('open');
  menu.setAttribute('aria-expanded', opened);
});

document.querySelectorAll('.links a').forEach((a) => {
  a.addEventListener('click', () => {
    links.classList.remove('open');
    menu?.setAttribute('aria-expanded', 'false');
  });
});

// Google Apps Script Web App nhận dữ liệu form.
const FORM_ENDPOINT = 'https://script.google.com/macros/s/AKfycbzPkpcSDdmM8jnaLFxPCmODdNmoLF8kXtjbXE_wBE2VeAtG0IYsJf2UO3__Cf6ZiV4/exec';

const form = document.querySelector('#lead-form');
const status = document.querySelector('#form-status');

form?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const button = form.querySelector('button[type="submit"]');
  if (!form.reportValidity()) return;

  const phone = form.phone.value.replace(/[\s.()-]/g, '');
  if (!/^(0|\+84)\d{8,10}$/.test(phone)) {
    status.textContent = 'Vui lòng kiểm tra lại số điện thoại.';
    form.phone.focus();
    return;
  }

  const payload = Object.fromEntries(new FormData(form));
  payload.phone = phone;
  payload.source = 'Landing Page Đông Bình Dương';
  payload.submittedAt = new Date().toISOString();

  button.disabled = true;
  button.textContent = 'Đang gửi…';
  status.textContent = 'Đang gửi thông tin, vui lòng chờ…';

  try {
    // Dùng text/plain để tránh preflight CORS nhưng vẫn giữ payload JSON
    // cho Apps Script đọc qua e.postData.contents.
    await fetch(FORM_ENDPOINT, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(payload)
    });

    status.textContent = 'Thông tin đã được gửi. Vui lòng giữ điện thoại để đội ngũ tư vấn liên hệ lại.';
    form.reset();
  } catch (error) {
    console.error('Form submit error:', error);
    status.textContent = 'Chưa thể gửi thông tin. Vui lòng gọi 0919 940 960 để được hỗ trợ.';
  } finally {
    button.disabled = false;
    button.textContent = 'Đăng ký nhận tư vấn';
  }
});
