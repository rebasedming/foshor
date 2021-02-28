export const playSound = (file: any, voiceButtonClicked: () => void) => {
    let audio = new Audio();
    audio.src = file
    audio.load()
    voiceButtonClicked()
    if (audio) {
        audio
        .play()
        .catch((err: any) => console.log(err))
    }
};