
const displayAllPost = async (url, isQuery, searchText) => {
    isLoading(true)
    const data = await loadAllPost(url, isQuery, searchText)
    const posts = data.posts;
    const id = document.getElementById("all-post")
    id.textContent = "";
    posts?.forEach(post => {
        allPostCard(post, id)
    });
    isLoading(false)
}

const displayLatestPost = async (url) => {
    const data = await loadAllPost(url)
    const id = document.getElementById("latest-post")
    data.forEach(post => {
        latestPostCard(post, id)
    });

}

let count = 0;
const addPost = (title, viewCount) => {
    const addPost = document.getElementById("add-post");
    const div = document.createElement("div")
    div.classList = ` bg-white flex justify-between items-center rounded-lg p-3 w-full`
    div.innerHTML = `
        <h3>${title}</h3>
                        <div class="flex gap-2">
                            <img class="
                            w-7" src="./icons/eye.png" alt="">
                            <p>${viewCount}</p>
                        </div>
    `;
    addPost?.appendChild(div);
    count++;
    cartCounter()
}

const cartCounter = () => {
    const cartCounter = document.getElementById("cart-counter");
    cartCounter.innerText = count;
}

const searchPosts = () => {
    const inputValue = document.getElementById("input-field").value;
    displayAllPost("https://openapi.programming-hero.com/api/retro-forum/posts", true, inputValue)
}

const isLoading = (isLoading) => {
    if (isLoading) {
        document.getElementById("loader")?.classList.remove("hidden")
    } else {
        document.getElementById("loader")?.classList.add("hidden")

    }
}
displayAllPost("https://openapi.programming-hero.com/api/retro-forum/posts", false, "");
displayLatestPost("https://openapi.programming-hero.com/api/retro-forum/latest-posts");
