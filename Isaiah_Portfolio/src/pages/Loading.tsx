import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loading.css';


function Loading() {
    const [currentLine, setCurrentLine] = useState(0);

    const navigate = useNavigate();

    const lines_of_code = [
        "print('Hello World')",
        "Hello World",
        "isReady = input('Are you ready?\\n: ')",
        "\"Are you ready?\"",
        ": Yes",
        "if isReady.lower()[0] == 'y':",
        "   print('Awesome! Let\'s begin!')",
        "else: ",
        "   print('Unfortunate. Let's begin anyway!')",
        "\"Awesome! Let's begin!\""
    ]

    const codeContainerRef = useRef<HTMLScriptElement>(null)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (currentLine < lines_of_code.length){
                setCurrentLine(currentLine + 1);
            }
            if (currentLine == lines_of_code.length - 1){
                setTimeout(() => {
                    navigate("/home")
                }, 2000)
            }
        }, 750)

        return () => clearTimeout(timer);
    }, [currentLine]);

    useEffect(() => {
        if (codeContainerRef.current) {
            if (currentLine >= lines_of_code.length) return;
            let p_node = document.createElement("p")
            p_node.className = "code-text"
            p_node.innerHTML = lines_of_code[currentLine]
            codeContainerRef.current.appendChild(p_node)
        }
    }, [currentLine]);

    return (
        <div className="loading-container">
            <div className="terminal-window code-background">
                <pre>
                    <code ref={codeContainerRef} id="codeContainer"></code>
                </pre>
            </div>
        </div>
    );
};

export default Loading
