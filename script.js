const dialogues = [
    { id: 'dialogue-1', name: '...' },
    { id: 'dialogue-2', name: '...' },
    { id: 'dialogue-3', name: '...' },
    { id: 'dialogue-4', name: '...' },
    { id: 'dialogue-5', name: 'You' },
    { id: 'dialogue-6', name: '...' },
    { id: 'dialogue-7', name: 'Chika' },
    { id: 'dialogue-8', name: '...' },
    { id: 'dialogue-9', name: 'Chika' },
    { id: 'dialogue-10', name: 'Chika' },
    { id: 'dialogue-11', name: '...' },
    { id: 'dialogue-12', name: 'Suki' },
    { id: 'dialogue-13', name: '...' },
    { id: 'dialogue-14', name: 'You' },
    { id: 'dialogue-15', name: 'Chika' },
    { id: 'dialogue-16', name: '...' },
    { id: 'dialogue-17', name: 'Suki' },
    { id: 'dialogue-18', name: '...' },
    { id: 'dialogue-19', name: '...' },
    { id: 'dialogue-20', name: '...' }
];

let currentDialogueIndex = 0;

const audio1 = new Audio('https://od.lk/s/MF8zNDMwOTAyNjFf/cute-arigato-%28mugi-anime-sound%29-sound-effect-made-with-Voicemod.mp3');
const audio2 = new Audio('https://od.lk/s/MF8zNDMwOTAyNjlf/nya-%28cute-anime-girl-noise%29-sound-effect-for-editing-made-with-Voicemod.mp3');
const audio3 = new Audio('https://od.lk/s/MF8zNDMwOTAyODVf/nya_ZtXOXLx.mp3');
const audio4 = new Audio('https://od.lk/s/MF8zNDMwOTM4MzRf/anime-girl-laugh-made-with-Voicemod.mp3');
const audio5 = new Audio('https://od.lk/s/ODZfNjU2NjI3NzBf/main-door-opening-closing-38280%20%281%29.mp3');

function updateDialogue() {
    const nameBox = document.getElementById("nameBox");
    const characterImage = document.getElementById("characterImage");
    const newCharacterImage = document.getElementById("newCharacterImage");

    dialogues.forEach(dialogue => {
        document.getElementById(dialogue.id).style.display = 'none';
    });

    const currentDialogue = dialogues[currentDialogueIndex];
    document.getElementById(currentDialogue.id).style.display = 'block';
    nameBox.textContent = currentDialogue.name;

    if (currentDialogueIndex === 5) {
        characterImage.classList.add('visible');
        characterImage.style.opacity = "1";
    } else if (currentDialogueIndex < 6) {
        characterImage.style.opacity = "0";
    }

    if (currentDialogueIndex === 6) {
        audio1.play();
    }

    if (currentDialogueIndex === 2) {
        audio5.play();
    }

    if (currentDialogueIndex === 9) {
        audio3.play();
    }

    if (currentDialogueIndex === 15) {
        audio4.play();
    }

    if (currentDialogueIndex === 11) {
        newCharacterImage.classList.add('visible');
        newCharacterImage.style.opacity = "1";
        audio2.play();
    } else if (currentDialogueIndex < 11) {
        newCharacterImage.style.opacity = "0";
    }

    const transparentDialogueIds = [12, 13, 14, 15, 17, 19, 20];
    if (transparentDialogueIds.includes(currentDialogueIndex)) {
        newCharacterImage.style.opacity = "0.5";
    } else if (currentDialogueIndex > 10) {
        newCharacterImage.style.opacity = "1";
    }

    const characterOpacityChangeIds = [5, 7, 8, 10, 11, 12, 13, 15, 16, 17, 19, 20];
    if (characterOpacityChangeIds.includes(currentDialogueIndex)) {
        characterImage.style.opacity = "0.5";
    } else if (currentDialogueIndex > 5) {
        characterImage.style.opacity = "1";
    }

    // Updated fade-out and background image swap logic
    if (currentDialogueIndex === 2) {
        document.body.classList.add('fade-bg');

        setTimeout(() => {
            // Add the new background class after fade-out
            document.body.classList.add('new-bg');

            setTimeout(() => {
                // Remove the fade-bg class to start fade-in
                document.body.classList.remove('fade-bg');
            }, 1000); // Ensure this matches the opacity transition duration
        }, 1000); // Delay before switching background after fade-out
    }
}

document.getElementById("dialogueBox").addEventListener("click", function () {
    if (currentDialogueIndex < dialogues.length - 1) {
        currentDialogueIndex++;
        updateDialogue();
    }
});

window.addEventListener('load', function () {
    updateDialogue();
});