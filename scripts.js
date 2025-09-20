const projects = [
    {
        title: "TydeSolve",
        year: "2025",
        image: "assets/TydeSolve_check.png",
        badge: "NEW",
        desc: "A Learning Management System (LMS) for students and teachers.",
    },
    {
        title: "Vocational training VR",
        year: "2025",
        image: "assets/metaquest.png",
        badge: "NEW",
        desc: "A vocational training solution for Meta Quest integrated in TydeSolve.",
    },
    {
        title: "Lyssa productions",
        year: "2025",
        image: "assets/untitled_tryptyck.jpeg",
        desc: "Developed the website for Lyssa productions.",
        link: "https://lyssaproductions.com"
    },
];

const grid = document.getElementById("projects-grid");

projects.forEach(p => {
    const card = document.createElement("div");
    card.className = `
      card group relative rounded-2xl p-6 flex flex-col items-center text-center shadow-lg 
      overflow-hidden bg-[#111] transition-all duration-300 hover:bg-gradient-to-br 
      hover:from-white/8 hover:to-black/50
    `;

    card.innerHTML = `
      ${p.badge ? `<span class="badge absolute top-3 right-3 text-[0.7rem] px-2 py-0.5 rounded bg-purple-700 text-white">${p.badge}</span>` : ""}

      <div class="w-20 h-20 mb-4 rounded-xl overflow-hidden">
        <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover">
      </div>

      <h3 class="text-lg font-semibold">${p.title}</h3>
      <p class="text-sm text-gray-400">${p.year}</p>

      <!-- Hover overlay -->
      <div class="p-4 absolute inset-0 bg-black/50 backdrop-blur-md flex flex-col justify-center items-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p class="text-sm mb-2 transform scale-75 translate-y-2 opacity-0 group-hover:scale-100 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
          ${p.desc || ""}
        </p>
        ${p.link ? `<a href="${p.link}" target="_blank" class="text-blue-400 text-sm underline transform scale-75 translate-y-2 opacity-0 group-hover:scale-100 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out">
          Visit →
        </a>` : ""}
      </div>
    `;
    grid.appendChild(card);
});
