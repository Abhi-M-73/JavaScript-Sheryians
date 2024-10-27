const data = [
    {
        dp: "https://i.pinimg.com/564x/ed/62/de/ed62de3c39e8b94a4ea2e0273405917e.jpg",
        profile: "https://i.pinimg.com/564x/87/87/9f/87879f02e7deb92f3ced8ab97f4b4e98.jpg"
    },
    {
        dp: "https://i.pinimg.com/736x/db/3a/62/db3a623acc8396fb285ec899ad01cd10.jpg",
        profile: "https://i.pinimg.com/564x/8b/3b/a7/8b3ba7ec66c1b2ffa5e86884e189055f.jpg"
    },
    {
        dp: "https://i.pinimg.com/736x/50/b3/ea/50b3ea6dfe281afa73cb81442e4d788f.jpg",
        profile: "https://i.pinimg.com/564x/6c/f7/04/6cf7041138883abb4779cc7f874c8e2d.jpg"
    },
    {
        dp: "https://i.pinimg.com/236x/59/b6/39/59b6390a41c1ab9b8fa455a34c2fced9.jpg",
        profile: "https://i.pinimg.com/564x/3c/30/81/3c308162a2fc68596f928bebe55440df.jpg"
    },
    {
        dp: "https://i.pinimg.com/736x/3e/b5/36/3eb53612761cb5c2de0f091924012f5f.jpg",
        profile: "https://i.pinimg.com/564x/66/50/cc/6650cc13eafaa12aa892d7b5a8429e06.jpg"
    },
];


let story = document.querySelector(".story");
let stories = document.querySelector(".stories");

// Render story thumbnails
data.forEach((element, index) => {
    stories.innerHTML += `<img src="${element.dp}" alt="${index}" />`;
});

// Show and hide story on click
stories.addEventListener("click", (event) => {
    if (event.target.tagName === 'IMG') {
        // Display the story image
        let index = event.target.alt;
        let profileImageSrc = data[index].profile;
        story.style.backgroundImage = `url('${profileImageSrc}')`;

        // Show the story by adjusting opacity and pointer events
        story.style.opacity = "1";
        story.style.pointerEvents = "auto";

        // Hide the story after 2 seconds
        setTimeout(() => {
            story.style.opacity = "0";
            story.style.pointerEvents = "none";
        }, 2000); // 2000 milliseconds = 2 seconds
    }
});

