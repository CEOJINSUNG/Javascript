import React from 'react';
import Counter from '../components/Counter';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import { increase, decrease } from '../modules/counter';

//useSelector는 상태를 조회하는 함수
function CounterContainer() {
        const {number, diff} = useSelector(state => ({
            number: state.counter.number,
            diff: state.counter.diff
        }),
        //useSelctor 최적화하는 방법들
        shallowEqual
        // (left, right) => {
        //     return left.diff === right.diff && left.number=== right.number;
        // }
    );
    const dispatch = useDispatch();

    const onIncrease = () => dispatch(increase());
    const onDecrease = () => dispatch(decrease());
    const onSetDiff = diff => dispatch(setDiff(diff));

    return (
        <Counter 
            numbere={number}
            diff={diff}
            onIncrease={onIncrease}
            onDecrease={onDecrease}
            onSetDiff={onSetDiff}
        />
    );
}

export default CounterContainer;