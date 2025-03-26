const addBtn = document.getElementById('addCategoryBtn');
const modal = document.getElementById('categoryModal');
const closeModal = document.getElementById('closeModal');
const cancelBtn = document.getElementById('cancelBtn');
const saveBtn = document.getElementById('saveBtn');
const listEl = document.getElementById('categoryList');
const searchInput = document.getElementById('searchInput');
const filterStatus = document.getElementById('filterStatus');

let categories = [
    { id: 'DM001', name: 'Quần áo', status: 'Đang hoạt động' },
    { id: 'DM002', name: 'Kính mắt', status: 'Ngừng hoạt động' },
    { id: 'DM003', name: 'Giày dép', status: 'Đang hoạt động' },
];

function renderList() {
    listEl.innerHTML = '';
    const keyword = searchInput.value.toLowerCase();
    const statusFilter = filterStatus.value;

    categories
        .filter(c => c.name.toLowerCase().includes(keyword) && (statusFilter === '' || c.status === statusFilter))
        .forEach(c => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>${c.id}</td>
                <td>${c.name}</td>
                <td><span class="${c.status === 'Đang hoạt động' ? 'status-online' : 'status-offline'}">${c.status}</span></td>
                <td class="action-icons">
                    <i class="fa-solid fa-pen-to-square" onclick="editCategory('${c.id}')"></i>
                    <i class="fa-solid fa-trash" onclick="deleteCategory('${c.id}')"></i>
                </td>
            `;
            listEl.appendChild(tr);
        });
}

function resetModal() {
    document.getElementById('categoryId').value = '';
    document.getElementById('categoryName').value = '';
    document.querySelector('input[name="status"][value="Đang hoạt động"]').checked = true;
    saveBtn.textContent = 'Thêm';
    document.getElementById('modalTitle').textContent = 'Thêm mới danh mục';
}

addBtn.onclick = () => {
    modal.classList.remove('hidden');
    resetModal();
};

closeModal.onclick = cancelBtn.onclick = () => {
    modal.classList.add('hidden');
};

saveBtn.onclick = () => {
    const id = document.getElementById('categoryId').value.trim();
    const name = document.getElementById('categoryName').value.trim();
    const status = document.querySelector('input[name="status"]:checked').value;

    if (!id || !name) return alert('Vui lòng nhập đầy đủ thông tin!');

    if (saveBtn.textContent === 'Thêm') {
        categories.push({ id, name, status });
    } else {
        const c = categories.find(c => c.id === id);
        c.name = name;
        c.status = status;
    }

    modal.classList.add('hidden');
    renderList();
};

function deleteCategory(id) {
    if (confirm('Bạn có chắc muốn xóa?')) {
        categories = categories.filter(c => c.id !== id);
        renderList();
    }
}

function editCategory(id) {
    const c = categories.find(c => c.id === id);
    modal.classList.remove('hidden');
    document.getElementById('categoryId').value = c.id;
    document.getElementById('categoryName').value = c.name;
    document.querySelector(`input[name="status"][value="${c.status}"]`).checked = true;
    document.getElementById('modalTitle').textContent = 'Chỉnh sửa danh mục';
    saveBtn.textContent = 'Lưu';
}

searchInput.oninput = filterStatus.onchange = renderList;

renderList();
