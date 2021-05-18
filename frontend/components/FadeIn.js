import { useState, useRef, useEffect } from 'react'
import styles from '../styles/FadeIn.module.css'

function FadeInSection(props) {
    const [isVisible, setVisible] = useState(true);
    const domRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => observer.unobserve(domRef.current);
    }, []);
    return (
        <div
            className={styles[`${isVisible ? "fade-in-visible" : "fade-in"}`]}
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

export default FadeInSection