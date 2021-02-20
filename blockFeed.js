function toggleFeed() {
  if (window.location.host.includes("linkedin")) {
    const mainElement = document.querySelector("main");
    const feed = mainElement.children[2];

    if (feed.style.display === "none") {
      feed.style.display = "";
    } else {
      feed.style.display = "none";
    }
  }
}

toggleFeed();
