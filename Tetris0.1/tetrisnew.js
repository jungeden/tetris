//시작
//랜덤 블럭 생성

//블럭 하강 (바닥/하위 블럭 위까지)
//좌우, 위, 아래 동작

// 블럭 쌓이면 종료

// 한 행 채우면 블럭 삭제 + 나머지 하강

class newblock {
  constructor(initnum, plus, blockcolor) {
    this.initnum = initnum;
    this.plus = plus;
    this.blockcolor = blockcolor;
  }
  creatblock() {
    document.getElementById(this.initnum + this.plus).style.backgroundColor =
      this.blockcolor;
      
  }
  preblock() {
    
  }
}

// class Blockdown {
//   constructor() {}
// }
