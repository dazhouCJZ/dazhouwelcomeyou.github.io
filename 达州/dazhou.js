
// 获取音乐播放器元素
var musicPlayer = document.getElementById('music-player');
window.addEventListener('mousemove', playMusicOnMouseMove);
function playMusicOnMouseMove() {
    // 检查音乐播放器状态，避免重复播放
    if (musicPlayer.paused) {
    // 在此处添加你想要执行的代码，例如播放音乐
    musicPlayer.play();
    }
}


const slider = document.getElementById('slider')
    let current = 0
    function change() {
            const left = (current - 1 + slider.children.length) % slider.children.length
            const right = (current + 1) % slider.children.length
            Array.from(slider.children).forEach((element, index) => {
                element.className = 'slider_item'
            })
            slider.children[left].className = 'slider_item left'
            slider.children[current].className = 'slider_item center'
            slider.children[right].className = 'slider_item right'
    }
    function next() {
        current = (current + 1) % slider.children.length
        change()
    }
    function pre() {
        current = (current + slider.children.length - 1) % slider.children.length
        change()
    }
    change()
    setInterval(() => {
        next()
    }, 1000)
