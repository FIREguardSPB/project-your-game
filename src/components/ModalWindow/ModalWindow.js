import {useState} from "react";
import {useDispatch} from "react-redux";
import {addCountAC, countScoreAC} from '../../redux/actionCreators';
import styles from './ModalWindow.module.css'
import {Modal, Button} from 'react-bootstrap';
// import localStore from '../../App'
function Example({val}) {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const [cardSate, setCardState] = useState(true)
    const [state, setState] = useState(val)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const changeVisible = () => setCardState(false);
// const user = localStore.get('user').name
    if (cardSate === true) {
        return (

            <>
                <Button className={styles.Cards} variant="success" onClick={handleShow}>
                    {state.cost}
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{state.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className={styles.Question}>{state.question}
                        <input type="text" id="answer" placeholder={'Ваш ответ'}></input>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="success" onClick={() => {
                            let inputAnswer = document.querySelector('input').value.toLowerCase()
                            if (inputAnswer === state.answer.toLowerCase()) {
                                alert('Верно')
                                dispatch(countScoreAC(state.cost))
                                changeVisible()
                                dispatch(addCountAC(1))
                                handleClose()
                            } else {
                                alert(`Неверно! Верный ответ: ${state.answer}`)
                                changeVisible()
                                dispatch(addCountAC(1))
                                handleClose()
                            }

                        }}>


                            Ответить

                        </Button>
                    </Modal.Footer>
                </Modal>
            </>

        );

    } else {
        return (
            <>
                <Button className={styles.Cards} variant="success" onClick={handleShow}>
                    &#128512;
                </Button>
            </>
        )
    }

}

export default Example
