let InitBlockId = 5;
let BlockId = InitBlockId;
let BlockColor = "rgb(100, 100, 100)";
let BlockIdArray = [];
let BlockShape = new BlockArray(InitBlockId);
let SetNewBlock = new NewBlock(BlockId, BlockColor, BlockIdArray);
let RandomBlock = Math.floor(Math.random() * 8);

switch (RandomBlock) {
  case 0:
    BlockIdArray = BlockShape.n0LineArray3();
    SetNewBlock.CreatNewBlock(BlockIdArray);
}
