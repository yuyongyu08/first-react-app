export default function UploadButton({ onUpload }) {
  return <button onClick={(e) => {e.stopPropagation(); onUpload()}}>Upload</button>;
}
