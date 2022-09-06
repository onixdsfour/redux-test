
import { ChangeValue } from "../redux/testComp.actions";
import { useDispatch, useSelector} from "react-redux";

const TestComponent = () => {
    const dispatch = useDispatch();
    const testValue = useSelector(state => state.testReducer.testState)

    const handleChange = (e) => {
        console.log(e.target.value)
        dispatch(ChangeValue(e.target.value))
    }
    return (
        <div>
            <p>We use Redux and React-Redux instead of useState to change global store</p>
            <input onChange={handleChange} placeholder="enter text" value={testValue} id="test-input" type="text" />
            <p className="redux-changed">Store value: {testValue}</p>
        </div>
    );
}

export default TestComponent;
