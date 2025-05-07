

  const menuButton = document.getElementById("menu-button");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");

  
  menuButton.addEventListener("click", () => {
    sidebar.classList.remove("-translate-x-full");
    overlay.classList.remove("hidden");
  });

  
  overlay.addEventListener("click", () => {
    sidebar.classList.add("-translate-x-full");
    overlay.classList.add("hidden");
  });

// Get the profile image using getElementsByTagName
const profileImg = document.getElementsByTagName("img")[0]; // first image (profile pic)

// Create tooltip element
const tooltip = document.createElement("div");
tooltip.textContent = "View Profile";
tooltip.className = "absolute text-sm bg-black text-white px-2 py-1 rounded mt-1 hidden";
tooltip.style.position = "absolute";

// Add mouseover event
profileImg.addEventListener("mouseover", (event) => {
  const parent = profileImg.parentElement; // DOM tree navigation
  parent.append(tooltip); // Insert tooltip
  tooltip.style.left = `${event.offsetX}px`;
  tooltip.style.top = `${profileImg.offsetTop + profileImg.offsetHeight + 5}px`;
  tooltip.classList.remove("hidden");
});

// Add mouseout event
profileImg.addEventListener("mouseout", () => {
  tooltip.classList.add("hidden");
});
