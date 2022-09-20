import React, {useState} from 'react'
import Info from "./Person";

const App = () => {
    const [showInfo, ChangeInfo] = useState(false);
    const onClick = () => {
        ChangeInfo(true);
    }
    return (
        <div>
            <button type={"button"} onClick={onClick}>
                <span>Показать информацию</span>
            </button>
            {showInfo && <Info name='Иван Иванов' age = {25} sex='мужской'/>}
        </div>
    )
}
export default App;