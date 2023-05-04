/* eslint-disable prettier/prettier */
import img6 from "img/6.jpg";
import { useMoralis } from "react-moralis";

function BurnCtr() {
  const { Moralis } = useMoralis();

  async function getNftsForContract() {
    const tab = [];
    const options = {
      chain: "rinkeby",
      address: "0x2Eb240317827cDb62C245909f77C19Db626e8910",
      token_address: "0xcece88052dc11c1f79c6f9f4d8f165a28efe08a8",
    }; //attention à la casse sensitive

    const nfts = await Moralis.Web3API.account.getNFTsForContract(options);
    const res1 = await nfts.result;

    for (let i = 0; i < res1.length; i++) {
      tab.push(res1[i].token_uri);
    }
    return tab;
  }

  async function getMetadata() {
    let tab = await getNftsForContract();
    let res1;
    let res2;
    let background;
    let tabResult = [];

    for (let i = 0; i < 3; i++) {
      res1 = await fetch(tab[i]);
      res2 = await res1.json();
      background = res2.attributes[0].value;
      console.log(background);
      tabResult.push(background);
    }

    if (tabResult.includes("Black")) {
      console.log(tabResult);
      console.log("true");
      return true;
    }
  }

  return (
    <div className="team">
      <div className="container">
        <h2 data-aos="zoom-in">
          BURN your 5 NFTs to get<span className="red"> an Ultimate</span>
        </h2>
        <div className="team__flex">
          <div className="member" data-aos="zoom-in">
            <h4>
              If you get 5 differents character, you can burn 5 of them to get 1
              NFT Ultimate{" "}
              <span className="job">
                {" "}
                You should have in your wallet, only the 5 ones of this
                collection you want to burn.
              </span>
            </h4>
            <div style={{ paddingBottom: "15px" }}>
              <button className="btn" id="burn" onClick={getMetadata}>
                ! Burn by clicking here !
              </button>
            </div>
            <img src={img6} alt="Marc" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BurnCtr;
