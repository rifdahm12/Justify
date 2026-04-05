function toggleMenu() {
    const menu = document.getElementById("sidebarMenu");
    // Toggle class 'tampil'
    menu.classList.toggle("tampil");
}

function logout() {
    let yakin = confirm("Apakah anda yakin ingin keluar?");
    if (yakin) {
        window.location.href = "homeAdmin.htm";
    }
}