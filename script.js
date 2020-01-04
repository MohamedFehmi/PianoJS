
const WHITE_KEYS = ['y', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'f', 'g', 'h']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')

keys.forEach(key=>
    {
        key.addEventListener('click', () => playNote(key))
    })

document.addEventListener('keydown', e => {
    //prevent repeating
    if(e.repeat) return

    //the actual letter of the pressed key
    const key = e.key
    //matches the pressed key index with the piano keys (white or black) depending on the index
    const whiteKeyIndex = WHITE_KEYS.indexOf(key)
    const blackKeyIndex = BLACK_KEYS.indexOf(key)

    
    if(whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])

    if(blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key)
{
    const noteAudio = document.getElementById(key.dataset.note)
    //end current audio if exists
    noteAudio.currentTime = 0
    //play new note audio
    noteAudio.play()
    
    //the note is clicked
    key.classList.add('active')

    //the note is released
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}