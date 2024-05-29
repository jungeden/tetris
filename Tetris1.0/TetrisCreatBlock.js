class NewBlock {
  constructor(BlockId, BlockColor, IdArray) {
    this.BlockId = BlockId;
    this.BlockColor = BlockColor;
    this.IdArray = IdArray;
  }

  get CanCreatBlock() {
    return `${this.BlockId} ${this.BlockColor}`;
  }
  set CanCreatBlock(value) {
    let values = value.split(",");
    let CreatBlockId = parseInt(values[0]);
    CreatBlockColor = values[1];
    if (CreatBlockId > 0 && CreatBlockId < 140) {
      this.BlockId = CreatBlockId;
      this.BlockColor = CreatBlockColor;
    }

    // this.SetBlockColor(this.InitBlockId, this.BlockColor);
  }
  SetBlockColor() {
    let blockElement = document.getElementById(this.BlockId);
    if (blockElement) {
      blockElement.style.backgroundColor = this.BlockColor;
    }
  }
  CreatNewBlock(IdArray) {
    for (let i = 0; i < IdArray.length; i++) {
      this.CanCreatBlock = `${IdArray[i]},${this.BlockColor}`;
      this.SetBlockColor();
    }
  }
}
class BlockArray {
  constructor(InitBlockId) {
    this.n = InitBlockId;
    this.InitBlockArray = [
      [this.n - 1, this.n, this.n + 1, this.n + 2],
      [this.n + 9, this.n + 10, this.n + 11, this.n + 12],
      [this.n + 19, this.n + 20, this.n + 21, this.n + 22],
      [this.n + 29, this.n + 30, this.n + 31, this.n + 32],
    ];
  }
  // get ChangeBlockArrayId() {
  //     return ``
  // }

  n0LineArray3() {
    this.SetBlockArray = [
      [this.InitBlockArray[0][1]],
      [this.InitBlockArray[1][1]],
      [this.InitBlockArray[2][1]],
    ];
    return this.SetBlockArray.flat();
  }
}
