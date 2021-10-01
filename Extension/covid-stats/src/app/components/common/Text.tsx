import React, { FC } from 'react';

const Text: FC<CovidComponents.Text> = (props) => {
    return (
        <>
            <p className={props.textClass}>
                {props.allowSpan ? (
                    <span className={props.spanClass}>{props.text}</span>
                ) : (
                    props.text
                )}
            </p>
        </>
    );
};

export default Text;
