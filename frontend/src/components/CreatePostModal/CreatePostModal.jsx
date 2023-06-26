import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import PostForm from '../PostForm/PostForm';

function CreatePostModal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button onClick={() => setShowModal(true)}>Create Post</button>
                {showModal && (
                <Modal onClose={() => setShowModal(false)}>
                    <PostForm />
                </Modal>
            )}
        </>
    );
}

export default CreatePostModal;