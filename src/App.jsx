import { useState, useEffect, useRef } from 'react';
import HeroSection from './components/HeroSection';
import KontaktPage from './components/KontaktPage';
import SluzbyPage, { ServiceDetail } from './components/SluzbyPage';
import sluzby from './data/sluzby.json';

// Phase sequence: idle → covering (curtain sweeps in) → swap → uncovering (curtain sweeps out) → idle
const SWEEP = 320;

export default function App() {
    const [page, setPage] = useState(window.location.hash);
    const [phase, setPhase] = useState('idle');
    const nextPage = useRef(null);

    useEffect(() => {
        const onHash = () => {
            const hash = window.location.hash;
            if (hash === page) return;
            nextPage.current = hash;
            setPhase('covering');
        };
        window.addEventListener("hashchange", onHash);
        return () => window.removeEventListener("hashchange", onHash);
    }, [page]);

    useEffect(() => {
        if (phase === 'covering') {
            const t = setTimeout(() => {
                setPage(nextPage.current);
                setPhase('uncovering');
            }, SWEEP);
            return () => clearTimeout(t);
        }
        if (phase === 'uncovering') {
            const t = setTimeout(() => setPhase('idle'), SWEEP);
            return () => clearTimeout(t);
        }
    }, [phase]);

    const curtainStyle = {
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#0d23b8',
        pointerEvents: phase !== 'idle' ? 'all' : 'none',
        transform: phase === 'idle'
            ? 'translateX(-100%)'
            : phase === 'covering'
            ? 'translateX(0%)'
            : 'translateX(100%)',
        transition: phase === 'idle'
            ? 'none'
            : `transform ${SWEEP}ms cubic-bezier(0.76, 0, 0.24, 1)`,
    };

    return (
        <>
            <div style={{ background: '#1533e8', minHeight: '100vh' }}>
                {(() => {
                    if (page === "#kontakt") return <KontaktPage />;
                    if (page === "#sluzby") return <SluzbyPage />;
                    if (page.startsWith("#sluzby/")) {
                        const id = page.slice("#sluzby/".length);
                        const service = sluzby.find(s => s.id === id);
                        return service ? <ServiceDetail service={service} /> : <SluzbyPage />;
                    }
                    return <HeroSection />;
                })()}
            </div>
            <div style={curtainStyle} />
        </>
    );
}
