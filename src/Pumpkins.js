import React, { useEffect, useState } from 'react';

/**
 * Thanks to https://codepen.io/mariecharpentier/pen/ExLegBy for inspiration
 */
export const Pumpkins = (props) => {

    const FREEZE_KEY = 'm';
    const [divClass, setDivClass] = useState('animated');

    useEffect(() => {

        const onKeyDown = (e) => {
            if (e.ctrlKey && e.key === FREEZE_KEY){
                setDivClass('not-animated');
            }
        }
        const onKeyUp = (e) => {
            // on purpose (only one key in condition)
            if (e.key === FREEZE_KEY){
                setDivClass('animated');
            }
        }

        document.addEventListener("keydown", onKeyDown);
        document.addEventListener("keyup", onKeyUp);


        return () => {
            document.removeEventListener("keydown", onKeyDown);
            document.removeEventListener("keyup", onKeyUp);
        }

        // eslint-disable-next-line
    }, [])

    return (
        <div className={divClass}>
            <div className="intro">Press <strong>CTRL+{FREEZE_KEY}</strong> to freeze animation</div>
            <div className="container">

                <div className="moon"></div>
                <div className="clouds cloud1">
                    <div></div>
                    <div></div>
                </div>
                <div className="clouds cloud2">
                    <div></div>
                    <div></div>
                </div>
                <div className="clouds cloud3">
                    <div></div>
                    <div></div>
                </div>
                <div className="clouds cloud4">
                    <div></div>
                    <div></div>
                </div>
                <div className="clouds cloud5">
                    <div></div>
                    <div></div>
                </div>

                <div className="smoke">
                    <div></div>
                </div>

                <div className="tree tree1"></div>
                <div className="tree tree2"></div>
                <div className="tree tree3"></div>
                <div className="tree tree4"></div>
                <div className="tree tree5"></div>

                <div className="dancing-line">

                    <div className="pumpkin">
                        <div className="stem"></div>
                        <div className="heart"></div>
                        <div className="rounded-eyes"></div>
                        <div className="rounded-eyes"></div>
                        <div className="mean-mouth"></div>
                    </div>

                    <div className="pumpkin">
                        <div className="stem"></div>
                        <div className="heart"></div>
                        <div className="eye"></div>
                        <div className="eye eye-right"></div>
                        <div className="bb-mouth"></div>
                    </div>

                    <div className="pumpkin">
                        <div className="stem"></div>
                        <div className="heart"></div>
                        <div className="rounded-eyes baby-eyes"></div>
                        <div className="rounded-eyes baby-eyes"></div>
                        <div className="mean-mouth"></div>
                    </div>

                    <div className="pumpkin">
                        <div className="stem"></div>
                        <div className="heart"></div>
                        <div className="rounded-eyes"></div>
                        <div className="rounded-eyes"></div>
                        <div className="rounded-mouth"></div>
                    </div>

                    <div className="pumpkin">
                        <div className="stem"></div>
                        <div className="heart"></div>
                        <div className="eye"></div>
                        <div className="eye eye-right"></div>
                        <div className="bb-mouth"></div>
                    </div>

                    <div className="pumpkin">
                        <div className="stem"></div>
                        <div className="heart"></div>
                        <div className="rounded-eyes"></div>
                        <div className="rounded-eyes"></div>
                        <div className="mean-mouth"></div>
                    </div>

                    <div className="pumpkin">
                        <div className="stem"></div>
                        <div className="heart"></div>
                        <div className="eye"></div>
                        <div className="eye eye-right"></div>
                        <div className="bb-mouth"></div>
                    </div>

                    <div className="pumpkin">
                        <div className="stem"></div>
                        <div className="heart"></div>
                        <div className="rounded-eyes baby-eyes"></div>
                        <div className="rounded-eyes baby-eyes"></div>
                        <div className="mean-mouth"></div>
                    </div>

                </div>
            </div>
        </div>
    );
}