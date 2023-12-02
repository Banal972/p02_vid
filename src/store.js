import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      user : {
        userID : "test2",
        userName : "테스트2",
        userEmail : "test2@test.com",
        profile : []
      },
      member : [
        {
          userID : "test",
          userName : "테스트",
          userEmail : "test@test.com",
          userPW : "!xptmxm123",
          profile : [
            {
              id : "0123456",
              img : "/img/profile.png",
              name : "프로필1",
              select : true,
              pin : "0722",
              likeVid : [
                "zefga5_GEyY",
              ]
            },
            {
              id : "0123457",
              img : "/img/profile.png",
              name : "프로필2",
              select : false,
              pin : "1234",
              likeVid : [
                "zefga5_GEyY"
              ]
            },
            {
              id : "0123458",
              img : "/img/profile.png",
              name : "프로필3",
              select : false,
              pin : "4567",
              likeVid : [
                "zefga5_GEyY"
              ]
            },
            {
              id : "0123459",
              img : "/img/profile.png",
              name : "프로필4",
              select : false,
              pin : "0124",
              likeVid : [
                "zefga5_GEyY"
              ]
            },
            {
              id : "0123460",
              img : "/img/profile.png",
              name : "프로필5",
              select : false,
              pin : "7896",
              likeVid : [
                "zefga5_GEyY"
              ]
            }
          ]
        }
      ]
    }
  },
  getters : {
    getUser(state){
      return state.user;
    }
  },
  mutations : { // 수정
    likevid(state,payload){ // 영상 관심 추가 및 삭제
      const rs = state.user.profile.findIndex(e=>e.select);
      const rs2 = state.user.profile[rs].likeVid.findIndex(e=>e === payload);
      
      if(rs2 > -1){
        state.user.profile[rs].likeVid.splice(rs2,1);
      }else{
        state.user.profile[rs].likeVid.push(payload);
      }

    },
    // 프로필 생성
    profileAdd(state,payload){
      
      if(state.user.profile.length >= 5){
        return alert('프로필을 5개 이상 생성하실 수 없습니다');
      }

      const timestamp =  new Date().getTime(); // 지금 시간 타임스탭
      const random = Math.floor(Math.random() * 1000); // 랜덤 숫자
      let token = timestamp - random 

      state.user.profile.push(
        {
          id : token,
          img : payload.imgURL,
          name : payload.name,
          select : false,
          pin : null,
          likeVid : []
        }
      )

    },
    profileLogin(state,payload){
      const rs = state.user.profile.findIndex(e=>e.id == payload);

      state.user.profile.forEach((e,i)=>{
        e.select = false;
        if(i == rs){
          e.select = true;
        }
      });

    },
    authLogout(state){
      state.user = undefined;
    },
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