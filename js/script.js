const buttonBeliPaket = document.getElementsByClassName("beli")[0];
const parentNode = document.getElementsByTagName("main")[0];

buttonBeliPaket.addEventListener("click", () => {
  const formPaketWisata = document.createElement("form");
  formPaketWisata.classList.add("popUp");
  // nama wisata
  const containerNamaWisata = document.createElement("div");
  const labelNamaWisata = document.createElement("label");
  labelNamaWisata.textContent = "Nama Wisata :";
  const namaWisata = document.createElement("input");
  namaWisata.setAttribute("type", "text");
  // jumlah orang
  const containerJumlahOrang = document.createElement("div");
  const labelJumlahOrang = document.createElement("label");
  labelJumlahOrang.textContent = "Jumlah Orang :";
  const jumlahOrang = document.createElement("input");
  jumlahOrang.setAttribute("type", "number");
  // servis makan
  const containerServisMakan = document.createElement("div");
  const labelServisMakan = document.createElement("label");
  labelServisMakan.textContent = "silahkan centeng bila perlu";
  const servisMakan = document.createElement("input");
  servisMakan.setAttribute("type", "checkbox");

  // servis pemandu wisata
  const servisPemanduWisata = document.createElement("input");
  servisPemanduWisata.setAttribute("type", "checkbox");
  servisPemanduWisata.textContent = "silahkan centang bila perlu";
  // konfirmasi pembayaran
  const konfirmasiPembayaran = document.createElement("button");
  konfirmasiPembayaran.setAttribute("type", "submit");
  konfirmasiPembayaran.textContent = "Konfirmasi";
  //batalkan pembayaran
  const batalkanPembayaran = document.createElement("button");
  batalkanPembayaran.textContent = "batalkan";

  // masukkan kedalam induk
  containerNamaWisata.appendChild(labelNamaWisata);
  containerNamaWisata.appendChild(namaWisata);
  containerJumlahOrang.appendChild(labelJumlahOrang);
  containerJumlahOrang.appendChild(jumlahOrang);
  containerServisMakan.appendChild(servisMakan);
  containerServisMakan.appendChild(labelServisMakan);
  formPaketWisata.appendChild(containerNamaWisata);
  formPaketWisata.appendChild(containerJumlahOrang);
  formPaketWisata.appendChild(containerServisMakan);
  formPaketWisata.appendChild(servisPemanduWisata);
  formPaketWisata.appendChild(konfirmasiPembayaran);
  formPaketWisata.appendChild(batalkanPembayaran);
  parentNode.appendChild(formPaketWisata);
});
