// Menampung variabel (addButton dan list trs get element)
const addButton = document.getElementById("add-list");
const list = document.getElementById("list");

// Fungsi untuk menambahkan item ke dalam list
function addList(){
    // buat function dan var menampung prompt nya (var text)
    var text = prompt("Apa yang mau kamu beli hari ini?");

    // Memastikan bahwa input tidak null dan tidak hanya berupa spasi.
    if (text && text.trim() !== "") {
        // Buat text node dari input text 
        const textNode = document.createTextNode(text.trim());

        // Buat elemen <li> dan tombol hapus (createElement)
        const listItem = document.createElement("li");
        const deleteButton = document.createElement("button");

        // Set teks tombol hapus dan tambahkan event listener untuk hapus
        deleteButton.textContent = "Hapus";
        deleteButton.addEventListener("click", () => {
            // Tampilkan konfirmasi sebelum menghapus
            const confirmed = confirm("Apakah anda ingin menghapus item ini?");
            if (confirmed) {
                listItem.remove(); //menghapus element <ol>
            }
    });

  
    // Tambahkan text node dan tombol hapus ke dalam <ol>  
    listItem.appendChild(textNode);
    listItem.appendChild(deleteButton);

     // Tambahkan <li> ke dalam <ol>
     list.appendChild(listItem);

    }else{
        alert("Nama belanjaan tidak boleh kosong!");
    }
}

// Menambahkan event listener untuk tombol "add list"
addButton.addEventListener('click', addList);
