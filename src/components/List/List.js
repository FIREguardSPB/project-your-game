import { useSelector } from 'react-redux';
import style from './list.module.css';
import ModalWindow from "../ModalWindow/ModalWindow";
export default function List() {

  const { questions } = useSelector(store => store)

  return (
    <div>
      <div className={`${style.block}`}>
        <div>Тема 1</div> <div className={`${style.test}`}>
          {questions.filter((el) => el.title === 'Тема 1').map(el => <ModalWindow val={el} key={el.id}/>)}
        </div>
      </div>
      <div className={`${style.block}`}>
       <div>Тема 2</div> <div className={`${style.test}`}>
         {questions.filter((el) => el.title === 'Тема 2').map(el => <ModalWindow val={el} key={el.id}/>)}
       </div>
      </div>
      <div className={`${style.block}`}>
       <div>Тема 3</div> <div className={`${style.test}`}>
         {questions.filter((el) => el.title === 'Тема 3').map(el => <ModalWindow val={el} key={el.id}/>)}
       </div>
      </div>
      <div className={`${style.block}`}>
       <div>Тема 4</div> <div className={`${style.test}`}>
         {questions.filter((el) => el.title === 'Тема 4').map(el => <ModalWindow val={el} key={el.id}/>)}
       </div>
      </div>
      {/* <div className={`${style.block}`}>
       <div>Тема 5</div> <div className={`${style.test}`}>
         {questions.filter((el) => el.title === 'Тема 5').map(el => <div key={el.id} className={`${style.card}`}>{el.cost}</div>)}
       </div>
      </div> */}
    </div>
  )
}
