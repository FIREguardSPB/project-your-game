import {useEffect} from 'react'
import {initQuestionAC} from './redux/actionCreators';
import {useDispatch, useSelector} from "react-redux";
import List from './components/List/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Alert} from 'react-bootstrap';


function App() {
    const scorecount = useSelector(state => state.score)
    const gameState = useSelector(state => state.counter)
    const dispatch = useDispatch();

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/FIREguardSPB/-jeopardy/todos')
            .then(res => res.json())
            .then(res => dispatch(initQuestionAC(res)))

    }, [])
    if (gameState < 20) {
        return (
            <div>


                <Alert variant="success">

                    Ваш счет = {scorecount}
                </Alert>


                <List/>
            </div>
        );
    } else {
        return (
            <>
                <Alert variant="success">
                    <div>КОНЕЦ ИГРЫ! Ваш счёт = {scorecount}</div>
                    <button onClick={() => window.location.reload()}>Начать заново</button>
                </Alert>
            </>
        )
    }
}

export default App;
