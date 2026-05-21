import { useState, useEffect } from 'react'

export default function LargeModalForcedAction() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => setIsOpen(!isOpen);

    return (
        <>
            <div className="margin-y-3">
                <a
                    className="usa-button"
                    aria-controls="example-modal-1"
                    data-open-modal
                    onClick={toggleModal}
                >
                    Open large, forced-action modal
                </a>

                {/* Modal Wrapper Wrapper (Conditional Rendering) */}
                {isOpen && (
                    <div className="usa-modal-wrapper is-visible">
                        {/* Overlay Dimmer */}
                        <div className="usa-modal-overlay" />
                        {/* Modal Window */}
                        <div
                            className="usa-modal usa-modal--lg"
                            id="example-modal-1"
                            aria-labelledby="modal-1-heading"
                            aria-describedby="modal-1-description"
                            data-force-action
                        >
                            <div className="usa-modal__content">
                                <div className="usa-modal__main">
                                    <h2 className="usa-modal__heading" id="modal-1-heading">
                                        Are you sure you want to continue?
                                    </h2>
                                    <div className="usa-prose">
                                        <p id="modal-1-description">
                                            You have unsaved changes that will be lost.
                                        </p>
                                    </div>
                                    <div className="usa-modal__footer">
                                        <ul className="usa-button-group">
                                            <li className="usa-button-group__item">
                                                <button type="button"
                                                    className="usa-button"
                                                    data-close-modal
                                                    aria-label="Continue without saving"
                                                    onClick={toggleModal}
                                                >
                                                    Continue without saving
                                                </button>
                                            </li>
                                            <li className="usa-button-group__item">
                                                <button
                                                    type="button"
                                                    className="usa-button"
                                                    data-close-modal
                                                    aria-label="Close this window"
                                                    onClick={toggleModal}
                                                >
                                                    Go back
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}