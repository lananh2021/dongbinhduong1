LANDING PAGE ĐÔNG BÌNH DƯƠNG

1. Mở website
- Giải nén thư mục và mở index.html bằng trình duyệt. Không cần cài framework hay chạy build.

2. Đổi số điện thoại
- Tìm "0919940960" (link tel:) và "0919 940 960" (phần hiển thị) trong index.html và assets/js/main.js.

3. Đổi địa chỉ
- Tìm "950 Nguyễn Thị Minh Khai, Phường Tân Đông Hiệp, TPHCM" trong index.html, gồm cả Schema JSON-LD.

4. Thay logo
- Thay assets/images/logo.png và logo.webp. Nên giữ nền trong suốt và tỉ lệ ngang tương tự.

5. Thay ảnh
- Thay các file trong assets/images và giữ nguyên tên, hoặc sửa src trong index.html. Ảnh dưới màn hình đầu nên giữ loading="lazy".

6. Đưa lên hosting
- Có thể upload toàn bộ thư mục landing-page lên GitHub Pages, Netlify, Vercel hoặc hosting tĩnh. Trước khi xuất bản, thay canonical/og:url "https://example.com/" bằng tên miền thật.

7. Tích hợp Google Sheets / API cho form
- Mở assets/js/main.js.
- Gán FORM_ENDPOINT = 'URL_ENDPOINT_CUA_BAN'.
- Endpoint cần nhận POST JSON gồm name, phone, need và trả HTTP 2xx khi thành công.
- Khi FORM_ENDPOINT để trống, form cố ý chạy ở chế độ demo và KHÔNG báo giả rằng dữ liệu đã được lưu.

8. Trước khi chạy quảng cáo
- Xác nhận lại giá theo từng nền, vị trí, hồ sơ và điều kiện giao dịch.
- Nên thay minh họa bằng ảnh thực tế dự án có quyền sử dụng.
