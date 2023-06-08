import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);

  function handleNextClick() {
    setIndex((index + 1) % sculptureList.length);
  }

  function handlePrevClick() {
    setIndex((index - 1 + sculptureList.length) % sculptureList.length);
  }

  let sculpture = sculptureList[index];
  return (
    <>
     <button onClick={handlePrevClick}>
        Prev
      </button>
      <button onClick={handleNextClick}>
        Next
      </button>
     
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      {/* <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      /> */}
      <p>
        {sculpture.description}
      </p>
    </>
  );
}


/**
 * 1、state是组件私有内存，外部不可访问，state作用：记录用户操作、触发UI更新
 * 2、hooks，类似于import，必须用在函数组件的顶层，不能用在循环、条件判断或者子函数中
 * 3、state的更新是异步的，不能依赖上一个state的值来更新下一个state
 */