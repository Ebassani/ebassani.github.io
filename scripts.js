const projects = [
    {
        title: "Figma 2025",
        year: "2025",
        image: "assets/figma.png",
        badge: "NEW",
        desc: "Next-gen Figma plugin for creators.",
        link: "#"
    },
    {
        title: "Kigen",
        year: "2025",
        image: "assets/kigen.png",
        badge: "NEW",
        desc: "Figma plugin to generate design system variables and styles.",
        link: "#"
    },
    {
        title: "Cool Shapes",
        year: "2024",
        image: "assets/shapes.png",
        desc: "A collection of abstract colorful shapes.",
        link: "#"
    },
    {
        title: "Noisy Gradients",
        year: "2023-now",
        image: "assets/gradients.png",
        desc: "Gradient packs with noise textures.",
        link: "#"
    },
    {
        title: "Ghost Hand Kit",
        year: "2023-now",
        image: "assets/hands.png",
        desc: "3D hand illustrations pack.",
        link: "#"
    },
    {
        title: "3dicons",
        year: "2021-now",
        image: "assets/3dicons.png",
        badge: "V2",
        desc: "3D styled icons for UI projects.",
        link: "#"
    },
];

const grid = document.getElementById("projects-grid");

projects.forEach(p => {
    const card = document.createElement("div");
    card.className = "card relative rounded-2xl p-6 flex flex-col items-center text-center shadow-lg";

    card.innerHTML = `
    ${p.badge ? `<span class="badge">${p.badge}</span>` : ""}
    <div class="w-20 h-20 mb-4 rounded-xl overflow-hidden">
      <img src="${p.image}" alt="${p.title}" class="w-full h-full object-cover">
    </div>
    <h3 class="text-lg font-semibold">${p.title}</h3>
    <p class="text-sm text-gray-400">${p.year}</p>
    <p class="hidden hover:block mt-2 text-sm text-gray-300">${p.desc || ""}</p>
    <a href="${p.link}" target="_blank" class="hidden hover:block mt-3 text-blue-400 text-sm underline">Visit →</a>
  `;
    grid.appendChild(card);
});
