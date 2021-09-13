import {createStore} from 'vuex';

export default createStore({
    state:{
        showDetail: false,
    },
    mutations:{
        toggleDetail: (state)=>{
            state.showDetail=!state.showDetail;
        },
    },

});