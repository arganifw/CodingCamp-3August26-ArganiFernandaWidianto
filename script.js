// Inisialisasi Data dari Local Storage
let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
let categories = JSON.parse(localStorage.getItem('categories')) || ['Food', 'Transport', 'Fun'];

let spendingChart = null;

// DOM Elements
const balanceEl = document.getElementById('total-balance');
const formEl = document.getElementById('transaction-form');
const nameInput = document.getElementById('item-name');
const amountInput = document.getElementById('item-amount');
const categorySelect = document.getElementById('item-category');
const customCategoryInput = document.getElementById('custom-category');
const addCategoryBtn = document.getElementById('add-category-btn');
const transactionListEl = document.getElementById('transaction-list');
const sortSelect = document.getElementById('sort-select');
const themeToggleBtn = document.getElementById('theme-toggle');

// Inisialisasi Aplikasi
function init() {
    loadTheme();
    updateCategoryDropdown();
    renderTransactions();
    updateBalance();
    initChart();
}

// --- FITUR KATEGORI KUSTOM ---
function updateCategoryDropdown() {
    categorySelect.innerHTML = '<option value="" disabled selected>Pilih Kategori</option>';
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        categorySelect.appendChild(option);
    });
}

addCategoryBtn.addEventListener('click', () => {
    const newCat = customCategoryInput.value.trim();
    if (newCat && !categories.includes(newCat)) {
        categories.push(newCat);
        localStorage.setItem('categories', JSON.stringify(categories));
        updateCategoryDropdown();
        categorySelect.value = newCat;
        customCategoryInput.value = '';
    }
});

// --- FITUR TAMBAH & HAPUS TRANSAKSI ---
formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = nameInput.value.trim();
    const amount = parseFloat(amountInput.value);
    const category = categorySelect.value;

    if (!name || isNaN(amount) || !category) return;

    const newTransaction = {
        id: Date.now(),
        name,
        amount,
        category
    };

    transactions.push(newTransaction);
    saveAndRefresh();

    formEl.reset();
});

function deleteTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    saveAndRefresh();
}

function saveAndRefresh() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
    renderTransactions();
    updateBalance();
    updateChart();
}

// --- UPDATE TOTAL SALDO ---
function updateBalance() {
    const total = transactions.reduce((acc, curr) => acc + curr.amount, 0);
    balanceEl.textContent = `$${total.toFixed(2)}`;
}

// --- RENDER DAFTAR TRANSAKSI & SORTING ---
sortSelect.addEventListener('change', renderTransactions);

function renderTransactions() {
    transactionListEl.innerHTML = '';

    let sortedTransactions = [...transactions];
    const sortValue = sortSelect.value;

    if (sortValue === 'amount-desc') {
        sortedTransactions.sort((a, b) => b.amount - a.amount);
    } else if (sortValue === 'amount-asc') {
        sortedTransactions.sort((a, b) => a.amount - b.amount);
    } else if (sortValue === 'category') {
        sortedTransactions.sort((a, b) => a.category.localeCompare(b.category));
    }

    if (sortedTransactions.length === 0) {
        transactionListEl.innerHTML = '<p style="text-align:center; color:#888; padding:10px;">Belum ada transaksi.</p>';
        return;
    }

    sortedTransactions.forEach(t => {
        const li = document.createElement('li');
        li.classList.add('transaction-item');
        li.innerHTML = `
            <div class="transaction-info">
                <h4>${t.name}</h4>
                <p><span class="amount">$${t.amount.toFixed(2)}</span><span class="category-badge">${t.category}</span></p>
            </div>
            <button class="btn-delete" onclick="deleteTransaction(${t.id})">Delete</button>
        `;
        transactionListEl.appendChild(li);
    });
}

// --- VISUAL CHART (PIE CHART) ---
function initChart() {
    const ctx = document.getElementById('spendingChart').getContext('2d');
    spendingChart = new Chart(ctx, {
        type: 'pie',
        data: getChartData(),
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });
}

function getChartData() {
    const categoryTotals = {};
    categories.forEach(cat => categoryTotals[cat] = 0);

    transactions.forEach(t => {
        if (categoryTotals[t.category] !== undefined) {
            categoryTotals[t.category] += t.amount;
        } else {
            categoryTotals[t.category] = t.amount;
        }
    });

    const labels = Object.keys(categoryTotals).filter(cat => categoryTotals[cat] > 0);
    const data = labels.map(cat => categoryTotals[cat]);

    return {
        labels: labels.length > 0 ? labels : ['Belum ada data'],
        datasets: [{
            data: data.length > 0 ? data : [1],
            backgroundColor: ['#007bff', '#28a745', '#ffc107', '#dc3545', '#17a2b8', '#6c757d'],
        }]
    };
}

function updateChart() {
    spendingChart.data = getChartData();
    spendingChart.update();
}

// --- FITUR DARK / LIGHT MODE TOGGLE ---
themeToggleBtn.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
        themeToggleBtn.textContent = '🌙 Mode';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        themeToggleBtn.textContent = '☀️ Mode';
    }
});

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggleBtn.textContent = '☀️ Mode';
    }
}

// Jalankan aplikasi saat dimuat
init();