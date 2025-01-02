/**
 * 生成随机大小，随机颜色的div
 * 
 */
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// 生成一个自定义宽度，随机高度和背景色的div元素
function createRandomDiv(options: {
    id: string,
    width?: number,
    height?: number
}) {
    // 随机高度在100px到500px之间
    const randomWidth = Math.floor(Math.random() * 100) + 100;
    const randomHeight = Math.floor(Math.random() * 400) + 100; // 100px到500px
    const randomColor = getRandomColor(); // 随机背景色

    // 创建div并设置样式
    const div = document.createElement('div');
    div.classList.add('random-div');
    div.style.width = options.width + 'px'; // 设置自定义宽度
    div.style.height = randomHeight + 'px'; // 设置随机高度
    div.style.backgroundColor = randomColor; // 设置随机背景色

    return <div
        style={{
            width: options.width ? options.width : randomWidth,
            height: options.height ? options.height : randomHeight,
            backgroundColor: randomColor
        }}
        key={options.id ? options.id : Math.random()}
    >

    </div>
}

export {
    createRandomDiv
}