document.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', event => {
        alert('Bạn đang tải xuống: ' + event.target.innerText);
    });
});
// Function to handle document download
function handleDownload(documentName) {
    alert('Bạn đang tải xuống: ' + documentName);
}

// Áp dụng sự kiện tải xuống cho các liên kết tài liệu
document.querySelectorAll('a[download]').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault(); // Ngăn hành động mặc định
        const documentName = event.target.innerText; // Lấy tên tài liệu
        handleDownload(documentName);
        // Thực hiện tải xuống tài liệu
        window.location.href = event.target.href;
    });
});
