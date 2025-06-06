const { getCuratorExport } = require("../helper/curators");

const configs = {
  methodology: 'Count all assets are depoisted in all vaults curated by MEV Capital.',
  blockchains: {
    ethereum: {
      morpho: [
        '0xd63070114470f685b75B74D60EEc7c1113d33a3D',
        '0x59D9571A54593a5EC47d6A20837D96745ECF5C37',
        '0x9a8bC3B04b7f3D87cfC09ba407dCED575f2d61D8',
        '0x2f1aBb81ed86Be95bcf8178bA62C8e72D6834775',
        '0x98cF0B67Da0F16E1F8f1a1D23ad8Dc64c0c70E0b',
        '0x749794E985Af5a9A384B9cEe6D88DaB4CE1576A1',
        '0x1c530D6de70c05A81bF1670157b9d928e9699089',
        '0x1265a81d42d513Df40d0031f8f2e1346954d665a',
        '0xfbDEE8670b273E12b019210426E70091464b02Ab',
        '0x225C119fFaf1CaddCfCDb493283eDF4b816Bf773',
        '0xD50DA5F859811A91fD1876C9461fD39c23C747Ad',
        '0xf1fd8AC6346eC7BC4116Ba7aDc81102B2BC4C52D',
        '0x28d24D4380B26A1Ef305Ad8D8DB258159E472F33',
      ],
      euler: [
        '0xe2D6A2a16ff6d3bbc4C90736A7e6F7Cc3C9B8fa9',
        '0xE3ea69f8661FFac04E269f99C14ba73e2Bb10633',
        '0xe00A44e1210BAe0EACEeeaF202c349d4B16480FE',
        '0x01d1a1cd5955B2feFb167e8bc200A00BfAda8977',
        '0x2306e17C7198282985a95b1cE0f63820846d0290',
        '0x6b6976aA97CD2473B388fA9b9eEb8Cca4F5a77a4',
        '0x6C37d34a895456AA29CABe0caCB60FC56309C7ac',
        '0x9426C7a40d5C9DD709cbc2894a7E6481f265B6Bb',
        '0x0DE3821015518a6179A51d27Bc7ed4a0a3C45b52',
        '0xb07bf05AF5a13D357AA1220c661BB0FB791beDcb',
        '0x9913790dD5d3d8389f682a15e4Fa90a22891ff49',
        '0xc5Ff8Dde483903ffd2fbE5bf54a02B80F2baE7F7',
        '0xFc1b4e3D8291746CCdEb813805C8912BBE0a7316',
        '0x1334d0E5ca5855A803998fcC78548142BEF36e3B',
        '0x463Af6Add7b5806cF0EA30ec30F2030bF4F05175',
      ],
    },
    sonic: {
      euler: [
        '0x0806af1762Bdd85B167825ab1a64E31CF9497038',
        '0xB38D431e932fEa77d1dF0AE0dFE4400c97e597B8',
        '0x05d57366B862022F76Fe93316e81E9f24218bBfC',
        '0xa5cd24d9792F4F131f5976Af935A505D19c8Db2b',
        '0x196F3C7443E940911EE2Bb88e019Fd71400349D9',
        '0x9144C0F0614dD0acE859C61CC37e5386d2Ada43A',
        '0x6f2Ab32A6487A2996c74Ed2b173dFDF3d5EEDB58',
        '0x1cDA7E7B2023C3f3c94Aa1999937358fA9D01Aab',
        '0xeeaaB5c863f4b1c5356aF138F384AdC25Cb70Da6',
        '0xF6E2ddf7a149C171E591C8d58449e371E6dc7570',
        '0xFFFC9d22304CF49784e9B31dDBEB066344b2B856',
        '0xdBc46ff39Cae7f37c39363B0CA474497dAD1d3cf',
        '0xD506F1E4AdFCf1196B7C5D2EbF4e858E33d7A93E',
        '0x90a804D316A06E00755444D56b9eF52e5C4F4D73',
        '0xb936137169D777fcB8B7Cf02329620B78FCcEC0A',
        '0x08f04A3db30B0cd7E42E61b4e412b1123C52e8a1',
        '0x6832F3090867449c058e1e3088E552E12AB18F9E',
      ],
    },
    berachain: {
      euler: [
        '0x558B16E07b8558b2a54946cA973b7b20B86A8b87',
        '0xB8064453B25a91D7a4e8b7e7883A817D5742dE34',
        '0x3de0CA4AF11108c94c9066a935ee67e53b7f9447',
        '0xad9e5E2647EFb9137B6B8D688d4906fa51476870',
        '0x6D976915bD9DE43De1A60C39e128e320dadda000',
        '0x1371dD58ce95eCD624340F072f97212A2661A280',
        '0xd538b6aeF78E4bDDe4FD4576E9E3A403704602bc',
        '0xb758d6eC8111FEB9b0EC758A61B7874e5821dfFd',
        '0x91e1Ec1e948F635c127dad41eaE1aF899399F15a',
        '0xE3ecE76A7D1B07BcB0B5B6D38091E47C45994043',
        '0xBaBF4ce18FBab547Ad5939dEFf825f3E2f8d9402',
        '0x34018ac9DC4B114036Ca148Aa18C8f75594E5e95',
        '0x4eB3351066494852a03ffBBDE40a9776380Ce20D',
        '0x826244d9Db2A0f438C3190a0f393c13d41AD7a2E',
        '0x2CCCd307bB616E5F896Ab61CaE09Ef4E5e9fEdB7',
        '0x413dfb1814A6B5fe4488c49f86e2a74D285ffd5b',
        '0xB127DbA67C3f83c1aCcBB9a124E1b6f6bC3E93f3',
        '0x1dfB669DF5E70D4238F2Cc0a9EE3b1a21FF91bC0',
        '0x746d425Dd3Cf924fC7a0f37EBED10E35fF589342',
        '0x85Dba39B85218229a4c3B9b037d05CD6eB4cF05D',
        '0x028b1F7a949a7a862C3f93987296be30d71f7F97',
        '0x7C7717F9bbd6126A013215796da04201d6A78d6b',
      ],
    },
    avax: {
      euler: [
        '0x69B07dB605d0A08fbE9245c1466880AA36c8E1A7',
        '0x91bFd7192990c2A56dF4AceFf5Fe063B75b636A5',
        '0x5cB6F04682299eB196F7d673c09a04DF68028071',
        '0xA429273b892c2c90b1d90778f4786e6470F402eC',
        '0x1Ff8f20dFF1dA13fEdD975224b580766dbB7634e',
        '0x152179bfc75f780bFe5b0d3c0D3c797108fB24C3',
      ]
    },
    bob: {
      euler: [
        '0xc282E68852F52A9cf493b8A85dfF55B871f4757B',
        '0x31AB3523467f9e1788EFf6df8f4DE301026EdE8f',
        '0x77CE4B784b494c4b089ACa5fbD7938F9c6f5F37B',
      ]
    },
    bsc: {
      euler: [
        '0x107a441C473517a37b03dcd8024C5B63E3Cc13DF',
        '0xD98125a23fAeb48180e33cA6Eef8F128E07418d1',
        '0x0dD93eb321A768A274d21062067B52527aBd4506',
        '0x7593931d08e3BAA750cA3cB6A0d0fDe6acD65107',
        '0x777C95b204E2Ed3906885eF09f4531882587B52C',
        '0xe54DFfd36177975938A3873e522dEE535ADebe01',
        '0x216f6D6C2ca15f83B656f3E9a8FcDf615DBC1710',
        '0xd6F4Ee21c946071Cf13D773E2ab1e31d44a27a54',
        '0x088241d1C5c951C59Fb66083b291b69E3cC27E8C',
      ]
    },
  }
}

module.exports = getCuratorExport(configs)
