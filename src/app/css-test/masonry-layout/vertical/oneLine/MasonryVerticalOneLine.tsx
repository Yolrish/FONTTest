'use client'
import { createRandomDiv } from '../../utils/random'
/*
    实现一个带有懒加载效果的瀑布式布局
*/

export function MasonryVerticalOneLine() {
    return (
        <div className="masonry-layout relative h-full w-full flex flex-wrap">
            <div className="w-1/2 h-16 bg-red-500" />
            <div className="w-1/2 h-16 bg-blue-500" />
            <div className="w-full h-16 bg-yellow-500" />
            {Array.from({ length: 50 }).map((_, index) => createRandomDiv(
                {
                    id: index.toString()
                }
            ))}
        </div>

    );
}
