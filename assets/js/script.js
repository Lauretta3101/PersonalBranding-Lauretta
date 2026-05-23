// ===== SKILL BARS ANIMATION =====
window.addEventListener('load', () => {
  document.querySelectorAll('.sbar-fill').forEach(el => {
    el.style.width = (el.dataset.w || 0) + '%';
  });
});



// ===== PORTFOLIO FOLDER DATA =====
const folderData = {
  web: {
    name: 'Web Design',
    dot: '#2196f3',
    thumb: '#e3f2fd',
    btn: '#2196f3',
    projects: [
      { icon: '🌐', title: 'Website Personal Branding', desc: 'Website portofolio pribadi Lauretta Josephine menggunakan HTML & CSS dengan desain modern dan responsif.', link: 'https://drive.google.com' },
      { icon: '💻', title: 'Website Sekolah', desc: 'Website informasi sekolah dengan halaman beranda, profil, dan galeri kegiatan.', link: 'https://drive.google.com' }
    ]
  },
  desain: {
    name: 'Desain Grafis',
    dot: '#f06292',
    thumb: '#fce4ec',
    btn: '#e91e8c',
    projects: [
      { icon: '🎨', title: 'Poster Kegiatan Sekolah', desc: 'Desain poster untuk kegiatan class meeting menggunakan Canva dengan konsep modern.', link: 'https://drive.google.com' },
      { icon: '✏️', title: 'Flyer Promosi Bazar', desc: 'Desain flyer digital untuk acara bazar sekolah menggunakan Canva.', link: 'https://drive.google.com' }
    ]
  },
  presentasi: {
    name: 'Presentasi',
    dot: '#ffa726',
    thumb: '#fff3e0',
    btn: '#f57c00',
    projects: [
      { icon: '📊', title: 'Slide Presentasi PKK', desc: 'Materi presentasi mata pelajaran PKK menggunakan PowerPoint dengan layout yang rapi dan informatif.', link: 'https://drive.google.com' }
    ]
  }
};

function openFolder(key) {
  const d = folderData[key];
  document.getElementById('detailDot').style.background = d.dot;
  document.getElementById('detailName').textContent = d.name;
  document.getElementById('projectsList').innerHTML = d.projects.map(p => `
    <div class="project-row">
      <div class="project-thumb" style="background:${d.thumb}">
        <span style="font-size:26px">${p.icon}</span>
      </div>
      <div>
        <div class="project-title">${p.title}</div>
        <div class="project-desc">${p.desc}</div>
        <a class="project-link" href="${p.link}" target="_blank" style="background:${d.btn}">↗ Lihat di Drive</a>
      </div>
    </div>
  `).join('');
  document.getElementById('detailPanel').classList.add('open');
  document.getElementById('detailPanel').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function closeFolder() {
  document.getElementById('detailPanel').classList.remove('open');
}
// ===== NAVBAR ACTIVE =====
const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  let cur = '';
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 120) cur = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + cur);
  });
});

// ===== FOTO PENDIDIKAN =====
const ROT = ['-4deg','3.5deg','-2.5deg'];

function openOverlay(id) {
  document.getElementById(id).classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeOverlay(id) {
  document.getElementById(id).classList.remove('active');
  document.body.style.overflow = '';
} 

const photos = {
  TK:  ['assets/images/tk1.jpeg', 'assets/images/tk1.jpeg', 'assets/images/tk2.jpeg'],
  SD:  ['assets/images/sd1.jpeg', 'assets/images/sd1.jpeg', 'assets/images/sd2.jpeg'],
  SMP: ['assets/images/smp1.jpeg', 'assets/images/smp1.jpeg', 'assets/images/smp2.jpeg'],
  SMK: ['assets/images/smk1.jpeg', 'assets/images/smk1.jpeg', 'assets/images/smk2.jpeg'],
};
  const row = document.getElementById('edu-polaroid-row');
  document.getElementById('edu-overlay-label').textContent = `📷 galeri — ${year}`;
  document.getElementById('edu-overlay-title').textContent = `Foto ${level} — ${school}`;

  row.innerHTML = '';
  photos[level].forEach((src, i) => {
    row.innerHTML += `
      <div class="polaroid" style="--rot:${ROT[i]};--delay:${i * 0.08}s">
        <img src="${src}" style="width:180px;height:180px;object-fit:cover;display:block;">
        <div class="polaroid-caption">Foto ${level} ${i+1}</div>
      </div>`;
  });

  openOverlay('edu-overlay');


function openFamily() {
  openOverlay('family-overlay');
}