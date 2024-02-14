import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      user : null,
      member : [
        {
          userID : "test",
          userName : "테스트",
          userEmail : "test@test.com",
          userPW : "!xptmxm123",
          profile : []
        },
        {
          userID : "test2",
          userName : "테스트2",
          userEmail : "test2@test.com",
          userPW : "!xptmxm123",
          profile : [
            {
              id : "0123456",
              img : "/p02_vid/img/profile.png",
              name : "핀설정이 안되어있는 계정",
              select : false,
              pin : "",
              likeVid : []
            },
            {
              id : "0123457",
              img : "/p02_vid/img/profile.png",
              name : "pin 1234",
              select : false,
              pin : "1234",
              likeVid : [
                "zefga5_GEyY"
              ]
            },
            {
              id : "0123458",
              img : "/p02_vid/img/profile.png",
              name : "pin 4567",
              select : false,
              pin : "4567",
              likeVid : []
            },
            {
              id : "0123459",
              img : "/p02_vid/img/profile.png",
              name : "pin 0124",
              select : false,
              pin : "0124",
              likeVid : []
            },
            {
              id : "0123460",
              img : "/p02_vid/img/profile.png",
              name : "pin 7896",
              select : false,
              pin : "7896",
              likeVid : []
            }
          ]
        }
      ]
    }
  },

  getters : {
    getUser(state){
      return state.user;
    },
    profileGet(state){
      return state.user.profile;
    }
  },

  mutations : { // 수정

    // 영상 관심 추가 및 삭제
    likevid(state,payload){

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

      let imgURL = "";
      let pin = "";

      if(payload.imgURL == ""){
        imgURL = "/p02_vid/img/profile.png";
      }else{
        imgURL = payload.imgURL;
      }

      if(payload.pin == ""){
        pin = null;
      }else{
        pin = payload.pin;
      }

      const data = {
        id : token,
        img : imgURL,
        name : payload.name,
        select : false,
        pin : pin,
        likeVid : []
      }

      state.user.profile.push(data);

    },

    profileUpdate(state,payload){

      const rs = state.user.profile.findIndex(e=>e.id == payload.id);
      const filter = state.user.profile.filter(e=>e.id == payload.id)[0];

      let imgURL = "";
      let pin = "";

      if(payload.imgURL == ""){
        imgURL = "/img/profile.png";
      }else{
        imgURL = payload.imgURL;
      }

      if(payload.pin == ""){
        pin = null;
      }else{
        pin = payload.pin;
      }

      const data = {
        id : payload.id,
        img : imgURL,
        name : payload.name,
        pin : pin
      }

      state.user.profile[rs] = {
        ...filter,
        ...data
      }

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

    // 로그아웃
    authLogout(state){
      state.user = null;
    },

    // 로그인
    authLogin(state,payload){

      const filter = state.member.filter(e=>e.userID == payload)[0];
      const data = {
        userID : filter.userID,
        userPW : filter.userPW,
        userName : filter.userName,
        userEmail : filter.userEmail,
        profile : filter.profile
      }

      state.user = data;

    },

    // 회원가입
    addMember(state,payload){
      state.member.push({
        ...payload,
        profile : []
      });
    }
    
  }
})

export default store;