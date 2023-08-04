function loadMorePosts() {
  const newPosts = [
    // fetch this data from a server
    {
      firstName: "user 1",
      pfpURL: "NYCTOPHILE.png",
      jobTitle: "Job title",
      jobPosition: "position",
      title: "Post Title 1",
      content:
        "This is the content of Post 1. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      firstName: "user 2",
      pfpURL: "NYCTOPHILE.png",
      jobTitle: "Job title",
      jobPosition: "position",
      title: "Post Title 2",
      content:
        "This is the content of Post 2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      firstName: "user 3",
      pfpURL: "NYCTOPHILE.png",
      jobTitle: "Job title",
      jobPosition: "position",
      title: "Post Title 3",
      content:
        "This is the content of Post 3. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      firstName: "user 4",
      pfpURL: "NYCTOPHILE.png",
      jobTitle: "Job title",
      jobPosition: "position",
      title: "Post Title 4",
      content:
        "This is the content of Post 4. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    // add more posts here

    // suggestion: fetch a specific amount of posts (5 - 10), when user scrolls then fetch (5 - 10) more...
  ];

  // dynamically add the new posts to the "posts-mid-section" element
  const postsMidSection = document.querySelector(".posts-mid-section");
  newPosts.forEach((post) => {
    const postHTML = `<div class="bg-white border-gray mt-4 post-container">
    <div class="d-flex pt-2 post-header-container">
        <div class="col d-flex">
            <img class="post-profile rounded-circle " src="${post.pfpURL}">
            <div class="d-flex flex-column">
                <span class="fw-bold fs-6">${post.firstName}</span>
                <span class="text-gray-darker fs-6">${post.jobTitle} | ${post.jobPosition}</span>
            </div>
        </div>
        <div class="p-2 text-gray-darker">
            <button class="btn rounded-circle hover-dark p-1">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                    width="24px" fill="currentColor">
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path
                        d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z" />
                </svg>
            </button>
        </div>
    </div>
    <div class="post-body pt-2 ps-3">
        <div class="post-title fw-bold">
            <a class="text-decoration-none text-black" href="#">
                ${post.title}
            </a>
        </div>
        <div class="post-text pt-1">
            ${post.content}
        </div>
    </div>
    <div class="post-image pt-2">
        <img class="img-fluid" src="src/post_image.jpg">
    </div>
    <div class="post-footer p-2">
        <div class="btn-group" role="group" aria-label="Basic example">
            <button type="button"
                class="left-button post-button bg-second-color border-0 text-black p-1">
                <img src="src/up.png" width="20" class="ms-2">
                15
            </button>
            <button type="button"
                class="right-button post-button bg-second-color border-0 text-black p-1">
                <img src="src/down.png" width="20" class="me-2">

            </button>
        </div>
        <button type="button"
            class="post-button post-button-bg border-0 rounded-circle text-black p-1">
            <img src="src/refresh.png" width="20" class="">
            1
        </button>
        <button type="button"
            class="post-button post-button-bg border-0 rounded-circle text-black p-1">
            <img src="src/comment.png" width="25" class="p-1">
            123
        </button>
    </div>
</div>`;
    postsMidSection.insertAdjacentHTML("beforeend", postHTML);
  });
}

// // set up the Intersection Observer
// const loadingIndicator = document.querySelector(".loading-indicator");

// const observer = new IntersectionObserver(
//   (entries, observer) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         loadMorePosts();
//         // stop observing once the loading indicator is triggered
//         observer.unobserve(loadingIndicator);
//       }
//     });
//   },
//   {
//     threshold: 0.5,
//   }
// );

// observer.observe(loadingIndicator);

loadMorePosts();
