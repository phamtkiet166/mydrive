// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const uploadBtn = document.getElementById("uploadBtn");
    const uploadForm = document.getElementById("uploadForm");
    const fileInput = document.getElementById("fileInput");
    const submitBtn = document.getElementById("submitBtn");
    const fileList = document.getElementById("fileList");

    // Hiển thị/ẩn form tải lên khi nhấp vào nút
    uploadBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định
        uploadForm.style.display = uploadForm.style.display === "none" ? "block" : "none";
    });

    // Xử lý sự kiện tải lên tệp
    submitBtn.addEventListener("click", function() {
        const file = fileInput.files[0];
        if (file) {
            // Tạo một phần tử li để hiển thị tệp
            const listItem = document.createElement("li");
            listItem.textContent = file.name;

            // Tạo nút xóa tệp
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.style.marginLeft = "10px";
            listItem.appendChild(deleteBtn);
            fileList.appendChild(listItem);

            // Xóa tệp khi nhấp vào nút Delete
            deleteBtn.addEventListener("click", function() {
                fileList.removeChild(listItem);
            });

            // Reset form sau khi tải lên
            fileInput.value = "";
        }
    });
});
