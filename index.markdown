---
layout: home
---

<div class="row">
        <div class="column left">

<h2>updates</h2>
 <div id="post">
		{% assign updates = site.updates | sort: date | reverse %}
		{% if post.status == 'published' %}
		{% endif %}
		{% for post in updates limit:3  %}
		⚇<b> {{ post.title }} ( {{ post.postdate }} )</b> ⚇ {{ post.content }}
		<br>
		{% endfor %}
<a href="/updates/">see more...</a>

</div></div>

<div class="column right">

<p><h2>upcoming</h2></p>

<p>more performances coming soon</p>

<p><a href="/upcoming/">see all...</a></p>

<p>__________</p>

<p><h2>blog</h2></p>

<div id="blog"></div>

<p><a href="https://blog.otherkat.com/">see all...</a></p>

<p>__________</p>

</div>

</div>

<script>
document.addEventListener("DOMContentLoaded", function () {

  // Use proxy to avoid CORS issues
  const feedURL = "https://api.allorigins.win/raw?url=" + encodeURIComponent("https://blog.otherkat.com/feed.xml");

  fetch(feedURL)
    .then(res => res.text())
    .then(str => {
      // Parse XML safely
      const parser = new DOMParser();
      const xml = parser.parseFromString(str, "application/xml");

      const items = xml.querySelectorAll("item");
      const container = document.getElementById("blog");

      if (!container) return;

      items.forEach((item, index) => {
        if (index >= 2) return; // only 2 latest posts

        const title = item.querySelector("title")?.textContent || "Untitled";
        const link = item.querySelector("link")?.textContent || "#";
        const pubDate = item.querySelector("pubDate")?.textContent || "";
        const date = pubDate ? new Date(pubDate) : null;

        // Extract content / description safely
        let content = item.querySelector("description")?.textContent || "";
        // Strip HTML tags
        const temp = document.createElement("div");
        temp.innerHTML = content;
        content = temp.textContent || "";
        // Get first 50 words
        const excerpt = content.split(/\s+/).slice(0, 50).join(" ") + (content ? "..." : "");

        container.innerHTML += `
          <div class="blog-preview">
            <a href="${link}">
              ${date ? (date.getMonth()+1) + "/" + date.getFullYear().toString().slice(-2) : ""}: 
              ${title} →
            </a>
            <p>${excerpt}</p>
          </div>
        `;
      });
    })
    .catch(err => console.error("Failed to fetch blog feed:", err));

});
</script>

