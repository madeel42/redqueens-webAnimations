import React, { useEffect, useRef } from 'react'
import classes from './alice.module.css'
import Alice from '../../assests/sprite_running-alice-queen_small.png'
import palm1_small from '../../assests/scbackground1/palm1_small.png'
import r_pawn_upright_small from '../../assests/scbackground1/r_pawn_upright_small.png'
import w_rook_small from '../../assests/scbackground1/w_rook_small.png'
import palm2_small from '../../assests/scbackground2/palm2_small.png'
import r_knight_small from '../../assests/scbackground2/r_knight_small.png'
import r_pawn_small from '../../assests/scbackground2/r_pawn_small.png'
import palm3_small from '../../assests/scForground1/palm3_small.png'
import bush_small from '../../assests/scforground2/bush_small.png'
import w_rook_upright_small from '../../assests/scforground2/w_rook_upright_small.png'
export const AliceAnimation = () => {
    const aliceAnimate = useRef()
    const sceneryAnimate = useRef()
    // let redQueen_alice;
    // let background1Movement;
    const sceneryFrames = [
        { transform: 'translateX(100%)' },
        { transform: 'translateX(-100%)' }
    ];
    const sceneryTimingBackground = {
        duration: 36000,
        iterations: Infinity
    };

    useEffect(() => {
        const animateAlice = aliceAnimate.current;
        const animatescenery = sceneryAnimate.current
        animateAlice.animate(
            [{ transform: "translateY(0)" }, { transform: "translateY(-100%)" }],
            {
                duration: 1000,
                iterations: Infinity,
                easing: "steps(7,end)",
            }
        );

        animatescenery.animate(
            sceneryFrames, sceneryTimingBackground);
    })


    const handleSpeed = () => {
        const [aliceAnimate, sceneAnimate] = document.getAnimations()
        const alice = aliceAnimate.playbackRate + 0.10;
        aliceAnimate.updatePlaybackRate(alice);
        aliceAnimate.play();

        const scenery = sceneAnimate.playbackRate + 0.7;
        sceneAnimate.updatePlaybackRate(scenery);
        sceneAnimate.play();

        setTimeout(() => {
            const aliceDecrese = aliceAnimate.playbackRate - 0.10;
            console.log(sceneAnimate.playbackRate)
            const sceneDecrese = sceneAnimate.playbackRate - 0.37;
            aliceAnimate.updatePlaybackRate(aliceDecrese);
            sceneAnimate.updatePlaybackRate(sceneDecrese);
            if (sceneDecrese === 1) {
                aliceAnimate.playbackRate = 0
                sceneAnimate.pause();
            }
        }, 36000);
        // adjustBackgroundPlayback();
    }
    return <>
        <div className={classes.sky} onClick={handleSpeed} >

        </div>
        <div className={classes.EARTH} onClick={handleSpeed}>
            <div >
                <img src={Alice} alt="" ref={aliceAnimate} />
            </div>
        </div>
        <div className={classes.scenery} ref={sceneryAnimate}>
            <img className={classes.PalmSmall} src={palm1_small} alt="" />
            <img className={classes.Pawn} src={r_pawn_upright_small} alt="" />
            <img className={classes.w_rook_small} src={w_rook_small} alt="" />
            <img className={classes.Palm2small} src={palm2_small} alt="" />
            <img className={classes.r_knight_small} src={r_knight_small} alt="" />
            <img className={classes.r_pawn_small} src={r_pawn_small} alt="" />
            <div className={classes.Palmbush}>
                <img className={classes.palm3_small} src={palm3_small} alt="" />
                <img className={classes.bush_small} src={bush_small} alt="" />
            </div>
            <img className={classes.w_rook_upright_small} src={w_rook_upright_small} alt="" />
        </div>
    </>
}
