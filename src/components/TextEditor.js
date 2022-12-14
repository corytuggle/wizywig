import { useCallback } from 'react';
import Quill from "quill";
import "quill/dist/quill.snow.css";

import '../css/editor.css';

class Counter {
  constructor(quill, options) {
    this.quill = quill;
    this.options = options;
    this.container = document.querySelector(options.container);
    quill.on('text-change', this.update.bind(this));
    this.update();
  };

  calculate() {
    let text = this.quill.getText();
    if (this.options.unit === 'word') {
      text = text.trim();
      return text.length > 0 ? text.split(/\s+/).length : 0;
    } else {
      return text.length;
    };
  };

  update() {
    var length = this.calculate();
    var label = this.options.unit;
    if (length !== 1) {
      label += 's';
    };
    this.container.innerText = length + ' ' + label;
  };
};

Quill.register('modules/counter', Counter);

const toolbarOptions = [[
  { font: [] }, { size: [] }, "bold", "italic", "underline", "strike",
  { list: "ordered" }, { list: "bullet" }, { color: [] }, { background: [] },
  { indent: "-1" }, { indent: "+1" }, { align: [] }, { direction: "rtl" },
  { header: [] }, { script: "sub" }, { script: "super" }, "image", "video",
  "blockquote", "code-block", "clean"
]];

export default function TextEditor() {

  const wrapperRef = useCallback(wrapper => {
    if (wrapper == null) return
    wrapper.innerHTML = ""
    const editor = document.createElement("div");
    wrapper.append(editor);
    var texteditor = new Quill(editor, {
      theme: "snow",
      modules: {
        toolbar: toolbarOptions,
        counter: {
          container: '#counter',
          unit: 'word'
        }
      }
    })
  }, [])

  return (
    <>
      <div id="container" ref={wrapperRef}></div>
      <div id="counter"></div>
      <div className="progbar-container">

      </div>
    </>
  )
};
