import PlayButton from "./PlayButton.jsx";
import UploadButton from "./UploadButton.jsx";

export default function Toolbar() {
  function handlePlay() {
    alert("PlayButton clicked!");
  }

  return (
    <div onClick={() => alert("Toolbar Cliked!")}>
      <PlayButton onPlay={handlePlay} />
      <UploadButton onUpload={() => alert("UploadingButton clicked!")} />
    </div>
  );
}
/**
 * 1、事件处理函数：
 * （1）定义在组件内部：逻辑复杂就声明一个函数；逻辑简单可以直接在JSX上内嵌箭头函数
 * （2）命名规范：handle + 事件名（描述用户行为，并不一定是原生事件名，比如：deleteImage）
 *
 * 2、事件传递：自定义事件名已on开头，比如：onDeleteImage，通过props传递给子组件
 */
