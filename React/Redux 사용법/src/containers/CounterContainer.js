//connect를 사용해서 컨테이너 만들기
import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
import { increase, decrease, setDiff } from '../modules/counter';
//import { bindActionCreators } from 'redux';

//useSelector는 상태를 조회하는 함수
function CounterContainer({
    number,
    diff,
    increase,
    decrease,
    setDiff
}) {

    return (
        <Counter 
            numbere={number}
            diff={diff}
            onIncrease={increase}
            onDecrease={decrease}
            onSetDiff={setDiff}
        />
    );
}

const mapStateToProps = (state) => ({
    number: state.counter.number,
    diff: state.counter.diff
});

// const mapDispatchToProps = dispatch => ({
//     onIncrease: () => dispatch(increase()),
//     onDecrease: () => dispatch(decrease()),
//     onSetDiff: (diff) => dispatch(setDiff(diff))
// });

//이름이 increase로 바뀌었기 때문에 위에 파라미터에서도 바꿔줘야 한다.
// const mapDispatchToProps = dispatch => bindActionCreators({
//     increase,
//     decrease,
//     setDiff
// }, dispatch);

//connect 함수에 bindActionCreators가 있기 때문에 안써줘도 된다.
const mapDispatchToProps = {
    increase,
    decrease,
    setDiff
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);