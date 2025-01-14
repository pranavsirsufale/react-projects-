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

            )}
          />
      
    </div>
  );
};

export default RTE;
