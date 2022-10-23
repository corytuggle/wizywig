import { useCallback } from 'react';
import * as Quill from "quill";
import "quill/dist/quill.snow.css";
import ExportPdf from './ExportPdf';
// import { pdfExporter } from 'quill-to-pdf';
// import { saveAs } from 'file-saver';
// import { ClosedCaptionDisabledTwoTone } from '@mui/icons-material';

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
        const counter = document.createElement("div");
        console.log(counter);
        wrapper.append(counter);
        console.log(wrapper);
        const quillInstance = new Quill(counter, {
            theme: "snow",
            modules: {
                toolbar: toolbarOptions,
                counter: {
                    container: '#counter',
                    unit: 'word'
                }
            }
        })
        // const delta = quillInstance.getContents()
        // console.log(quillInstance)
    }, [])
    return (
        <>
            <ExportPdf />
            <div id="container" ref={wrapperRef}></div>
            <div id="counter"></div>
        </>
    )
};