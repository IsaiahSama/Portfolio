import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './Loading.css';


function Loading() {
    const [currentLine, setCurrentLine] = useState(-1);

    const navigate = useNavigate();

    const lines_of_code = [
        "print('Hello World')",
        "\"Hello World\"",
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
    const terminalWindowRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        let isMounted = true;
        const timers: number[] = []
        const timer = setTimeout(() => {
            if (currentLine < lines_of_code.length){
                setCurrentLine(currentLine + 1);
            }
            if (currentLine == lines_of_code.length - 1){
                const endTimer1 = setTimeout(() => {
                    if (terminalWindowRef.current){
                        terminalWindowRef.current.classList.remove("hover-fade")
                        terminalWindowRef.current.classList.add("fly-away")
                    }
                }, 2000)
    
                const endTimer2 = setTimeout(() => {
                    navigate("/home")
                }, 3700)
    
                timers.push(endTimer1, endTimer2)
            }
        }, 750)

        timers.push(timer)
        
        return () => {
            isMounted = false;
            if (isMounted){
                timers.forEach(timer => clearTimeout(timer))
            }
        };
    }, [currentLine]);
    
    useEffect(() => {
        if (codeContainerRef.current) {
            if (currentLine < 0) return;
            if (currentLine >= lines_of_code.length) return;
            let p_node = document.createElement("p")
            p_node.className = "code-text"
            p_node.innerHTML = lines_of_code[currentLine]
            codeContainerRef.current.appendChild(p_node)
        }
    }, [currentLine]);

    return (
        <div className="loading-container">
            <div className="terminal-window code-background hover-fade" ref={terminalWindowRef}>
                <pre>
                    <code ref={codeContainerRef}></code>
                </pre>
            </div>
        </div>
    );
};

export default Loading
