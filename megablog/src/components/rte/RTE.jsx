import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import { tiny_api_key } from "../../conf/confVariables";
import { Controller } from "react-hook-form";

const RTE = ({ name, control, label, defaultValue = "" }) => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      editorRef.current.getContent()
      console.log(editorRef.current.getContent());
    }
  };




  return (


    <div className="w-full">
      {label && (
        <label className="inline-block mb-1 pl-1">
          { label }   </label>
      )}



          <Controller
            name={name || "content"}
            control={control}
            render={({ field: { onChange } }) => (



              <Editor
                // licenseKey={tiny_api_key}
                apiKey={tiny_api_key}
                onInit={(_evt, editor) => (editorRef.current = editor)}
                initialValue={defaultValue}
                init={{
                  branding: false,
                  height: 500,
                  menu: true,
                  menubar: true,
                  initialValue : defaultValue,
                  plugins: [
                    "advlist",
                    "autolink",
                    "lists",
                    "link",
                    "image",
                    "charmap",
                    "anchor",
                    "searchreplace",
                    "visualblocks",
                    "code",
                    "fullscreen",
                    "insertdatetime",
                    "media",
                    "table",
                    "preview",
                    "help",
                    "wordcount",
                  ],
                  toolbar:
                    "undo redo | blocks | " +
                    "bold italic forecolor | alignleft aligncenter " +
                    "alignright alignjustify | bullist numlist outdent indent | " +
                    "removeformat | help",
                  content_style:
                    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                }}

                onEditorChange={onchange}
              />



            //   <Editor
            //   apiKey='rwy6rim8uiqq2fuwot5vptl3rcogpls70wsxs4z3so97yktg'
            //   init={{
            //     plugins: [
            //       // Core editing features
            //       'anchor', 'autolink', 'charmap', 'codesample', 'emoticons', 'image', 'link', 'lists', 'media', 'searchreplace', 'table', 'visualblocks', 'wordcount',
            //       // Your account includes a free trial of TinyMCE premium features
            //       // Try the most popular premium features until Jan 19, 2025:
            //       'checklist', 'mediaembed', 'casechange', 'export', 'formatpainter', 'pageembed', 'a11ychecker', 'tinymcespellchecker', 'permanentpen', 'powerpaste', 'advtable', 'advcode', 'editimage', 'advtemplate', 'ai', 'mentions', 'tinycomments', 'tableofcontents', 'footnotes', 'mergetags', 'autocorrect', 'typography', 'inlinecss', 'markdown','importword', 'exportword', 'exportpdf'
            //     ],
            //     toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
            //     tinycomments_mode: 'embedded',
            //     tinycomments_author: 'Author name',
            //     mergetags_list: [
            //       { value: 'First.Name', title: 'First Name' },
            //       { value: 'Email', title: 'Email' },
            //     ],
            //     ai_request: (request, respondWith) => respondWith.string(() => Promise.reject('See docs to implement AI Assistant')),
            //   }}
            //   initialValue="Welcome to TinyMCE!"
            // />






            )}
          />
      
    </div>
  );
};

export default RTE;
