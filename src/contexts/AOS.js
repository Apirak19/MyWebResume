import React, { useEffect } from "react";
// importing aos
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSfunction() {
        useEffect(() => {
                AOS.init();
        }, [])
        return (
                <div>
                        AOSfunction
                </div>
        );
}