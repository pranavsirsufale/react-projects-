import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';


export default function App() {
  // const editorRef = useRef(null);
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }

  const apiKey = import.meta.env.VITE_TINY_API_KEY 
  console.log(apiKey)

  // };
  return (
    <>

    <h1>
      hello guys there are so many of us 
    </h1>
 </>
  );
}