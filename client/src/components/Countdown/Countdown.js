import React, { useState, useEffect } from 'react'
import Exit from '../../images/WhiteClose.svg'
import { Image } from 'react-bootstrap'
import './Countdown.css'

const Countdown = () => {

    const [showCount, setShowCount] = useState(true)

    const calculateTimeLeft = () => {
        let year = new Date().getFullYear();
        const difference = +new Date(`${year}-10-1`) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
    const [year] = useState(new Date().getFullYear());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <span>
                {timeLeft[interval]} {interval}{" "}
            </span>
        );
    });
    return (
        <>
            {
                showCount && (
                    <div className="flex countdown-header">
                        <div className="countdown-content">
                            <div className="countdown-text">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                            </div>
                            <div className="timer">
                            {timerComponents}
                            </div>
                            
                        </div>
                        <div
                            onClick={() => setShowCount(false)}
                            style={{ cursor: 'pointer'}}
                        >
                            <Image src={Exit}
                            />
                        </div>

                    </div>
                )
            }

        </>

    )
}

export default Countdown
