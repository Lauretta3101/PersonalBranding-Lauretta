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