// Array untuk menyimpan data anggota (simulasi database)
let members = JSON.parse(localStorage.getItem('techMembers')) || [
];

// Halaman Utama - Load data anggota
if (document.getElementById('memberTableBody')) {
    loadMembersTable();
}

// Fungsi untuk memuat tabel anggota
function loadMembersTable() {
    const tbody = document.getElementById('memberTableBody');
    tbody.innerHTML = '';
    
    members.forEach(member => {
        const row = `
            <tr>
                <td>${member.id}</td>
                <td><strong>${member.nama}</strong></td>
                <td>${member.email}</td>
                <td><span class="badge bg-primary">${member.minat}</span></td>
            </tr>
        `;
        tbody.innerHTML += row;
    });
}


// Form Pendaftaran
const memberForm = document.getElementById('memberForm');
if (memberForm) {
    memberForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;
        const minat = document.getElementById('minat').value;
        
        // Tambah ke array
        const newMember = {
            id: members.length + 1,
            nama: nama,
            email: email,
            minat: minat
        };
        
        members.push(newMember);
        localStorage.setItem('techMembers', JSON.stringify(members));
        
        // Reset form
        memberForm.reset();
        
        // Alert konfirmasi
        setTimeout(() => {
            alert('Terima kasih telah bergabung dengan Tech Community!');
        }, 500);
    });
}

const audio = document.getElementById('techAudio');
function playAudio() {
    audio.play();
    alert('🎵 Lagu sedang diputar!');
}

function pauseAudio() {
    audio.pause();
    alert('⏸️ Lagu dijeda');
}
