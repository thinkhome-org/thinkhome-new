import { useState, useRef } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { NavigationContext } from './context/navigate';
import HeroSection from './components/HeroSection';
import KontaktPage from './components/KontaktPage';
import SluzbyPage, { ServiceDetail } from './components/SluzbyPage';
import ONasPage from './components/ONasPage';
import sluzby from './data/sluzby.json';

const SWEEP = 320;

function ServiceDetailWrapper() {
    const { id } = useParams();
    const service = sluzby.find(s => s.id === id);
    return service ? <ServiceDetail service={service} /> : <SluzbyPage />;
}

export default function App() {
    const [phase, setPhase] = useState('idle');
    const reactNavigate = useNavigate();
    const timer = useRef(null);

    const navigate = (path) => {
        clearTimeout(timer.current);
        setPhase('covering');
        timer.current = setTimeout(() => {
            window.scrollTo(0, 0);
            reactNavigate(path);
            setPhase('uncovering');
            timer.current = setTimeout(() => setPhase('idle'), SWEEP);
        }, SWEEP);
    };

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
        <NavigationContext.Provider value={navigate}>
            <div style={{ background: '#1533e8', minHeight: '100vh' }}>
                <Routes>
                    <Route path="/" element={<HeroSection />} />
                    <Route path="/sluzby" element={<SluzbyPage />} />
                    <Route path="/sluzby/:id" element={<ServiceDetailWrapper />} />
                    <Route path="/o-nas" element={<ONasPage />} />
                    <Route path="/kontakt" element={<KontaktPage />} />
                </Routes>
            </div>
            <div style={curtainStyle} />
            <SpeedInsights />
        </NavigationContext.Provider>
    );
}
