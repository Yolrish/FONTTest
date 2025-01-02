
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 生成一个自定义宽度，随机高度和背景色的div元素
function createRandomDiv(width) {
    // 随机高度在100px到500px之间
    const randomHeight = Math.floor(Math.random() * 400) + 100; // 100px到500px
    const randomColor = getRandomColor(); // 随机背景色

    // 创建div并设置样式
    const div = document.createElement('div');
    div.classList.add('random-div');
    div.style.width = width + 'px'; // 设置自定义宽度
    div.style.height = randomHeight + 'px'; // 设置随机高度
    div.style.backgroundColor = randomColor; // 设置随机背景色

    return div;
}

export default function Home() {
    return (
        <div className="relative h-full w-full">
            <div className="flex flex-warp w-32 h-64">
                <div className="w-16 h-16 bg-red-500" />
                <div className="w-16 h-16 bg-blue-500" />
                <div className="w-32 h-16 bg-yellow-500" />
            </div>
        </div>

    );
}
