import React from 'react';
import Close from '../../../assets/img/icon-close.png'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const ModalForm = ({ setModal }) => {
    return (
        <article className='bg-modal' onClick={() => setModal(false)}>
            <div className='modal'>
                <span>
                    <img src={Close} alt='close' onClick={() => setModal(false)} />
                </span>
                <div className='modal-msg'>
                    <Player
                        autoplay
                        loop={false}
                        keepLastFrame={true}
                        src="https://assets6.lottiefiles.com/packages/lf20_jbrw3hcz.json"
                        style={{ height: '300px', width: '500px' }}
                    />
                    <h3>Employee Created!</h3>
                </div>
            </div>
        </article>
    );
};

export default ModalForm;