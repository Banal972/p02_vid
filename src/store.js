import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      user : undefined,
      member : [
        {
          userID : "test",
          userName : "테스트",
          userEmail : "test@test.com",
          userPW : "!xptmxm123",
          profile : [
            {
              name : "",
              pin : 0,
              likeVid : [
                "zefga5_GEyY"
              ]
            }
          ]
        }
      ]
    }
  },
  mutations : { // 수정
    authLogin(state,payload){

      const filter = state.member.filter(e=>e.userID == payload)[0];
      const data = {
        userID : filter.userID,
        userName : filter.userName,
        userEmail : filter.userEmail,
        profile : filter.profile
      }

      state.user = data;

    },
    addMember(state,payload){
      console.log(payload);
      state.member.push({
        ...payload,
        profile : []
      });
    }
  }
})

export default store;