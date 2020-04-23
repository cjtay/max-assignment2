import React from 'react';

const Validation = (props) => {
    let validationText = '';
    if (props.textLength >= 5) {
        validationText = 'Text long enough';
    } else if (props.textLength > 0 && props.textLength < 5) {
        validationText = 'Text too short';
    }

    return (
        <div>
            <h4>{validationText}</h4>
        </div>
    );
};

// Alternative approach
// const Validation = (props) => {
//     return (
//         <div>
//             {props.textLength < 5 && props.textLength > 0 ? (
//                 <p>Text too short</p>
//             ) : (
//                 <p>Text long enough</p>
//             )}
//         </div>
//     );
// };

export default Validation;
