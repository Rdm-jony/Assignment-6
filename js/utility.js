const loadAllPost = async (url, isQuery, searchText) => {

    const res = await fetch(isQuery ? `${url}?category=${searchText}` : url);
    const data = await res.json()
    console.log(`${url}?category=${searchText}`)
    return data;
}


const allPostCard = (post, id) => {
    const div = document.createElement("div")
    div.classList = `flex border-2 border-primary rounded-lg bg-blue-50`;
    div.innerHTML = `
        <div class="p-5">
                    <div class="avatar online ">
                        <div class="w-20 h-20 rounded-full">
                            <img src="${post.image}" />
                        </div>
                    </div>
                </div>
                <div class="space-y-3 p-5 w-full">
                    <div class="flex space-x-5 font-medium text-sm">
                        <p># ${post.category}</p>
                        <p>Author : ${post.author.name}</p>
                    </div>
                    <h4 class="font-bold text-xl">${post.title}</h4>
                    <p>${post.description}</p>
                    <hr class="border-dashed bg-black">
                    <div class="w-full flex justify-between">
                        <div class="flex justify-between w-2/3">
                            <div class="flex items-center gap-2">
                                <img class="w-7" src="./icons/sms.png" alt="">
                                <span>${post.comment_count}</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <img class="w-7" src="./icons/eye.png" alt="">
                                <span>${post.view_count}</span>
                            </div>
                            <div class="flex items-center gap-2">
                                <img class="w-7" src="./icons/clock.png" alt="">
                                <span>${post.posted_time} min</span>
                            </div>
                        </div>
                        <div onclick="${`addPost('${post.title}','${post.view_count}')`}" class="border-4 border-white cursor-pointer rounded-full">
                            <img class="w-7 h-7" src="./icons/envelop.png" alt="">

                        </div>
                    </div>
                </div>
    `;
    id.appendChild(div);
}

const latestPostCard = (post, id) => {
    const div = document.createElement("div")
    div.classList = ` card bg-base-100 gap-5 shadow-xl p-5 border-2 `
    div.innerHTML = `
         <figure>
                        <img src="${post.cover_image}"
                            alt="Shoes" />
                    </figure>
                    <div class="card-body p-0 space-y-3 mt-5">
                        <div class="flex gap-2">
                            <img class="w-5" src="./icons/date.png" alt="">
                            <p>${post.author.posted_date || "No publish date"}</p>
                        </div>
                        <p class="font-extrabold">${post.title}</p>
                        <p>${post.description}</p>
                        <div class="flex items-center gap-3">
                            <div class="avatar">
                                <div class="w-10 rounded-full">
                                    <img
                                        src="${post.profile_image}" />
                                </div>
                            </div>
                            <div>
                                <p class="text-sm font-bold">${post.author.name}</p>
                                <p class="text-sm">${post.author.designation || "Unknown"}</p>
                            </div>
                        </div>
                    </div>
    `;
    id.appendChild(div)

}

{/* <div class="">
                   
                </div> */}