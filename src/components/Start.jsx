/* eslint-disable prettier/prettier */
import { Card, Timeline, Typography } from "antd";
import React, { useMemo, useRef } from "react";
import { useMoralis } from "react-moralis";
import { gsap } from "gsap";
import img5 from "./5.jpg";
import img6 from "img/6.jpg";
import img7 from "img/7.jpg";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
import Account from "components/Account/Account";
import nftBalance from "components/NFTBalance";
import NativeBalance from "components/NativeBalance";
import { Link } from "react-router-dom";

import background from "img/background.jpg";
import capsule from "img/capsule.png";
import tree from "img/tree.png";
import BurnCtr from "./BurnCtr";

export default function Start({ isServerInfo }) {
  const { Moralis } = useMoralis();

  const isInchDex = useMemo(
    () => (Moralis.Plugins?.oneInch ? true : false),
    [Moralis.Plugins?.oneInch],
  );

  gsap.registerPlugin(ScrollTrigger);

  let tl = gsap.timeline();
  const parallax = gsap.timeline();
  const titleAnim = gsap.timeline();

  useEffect(() => {
    //GSAP effect (begining of the page)
    parallax
      .to(".background", {
        scale: 1,
        x: "-20vw",
      })

      .to(
        ".capsule",
        {
          x: "0vw",
          y: "-60vh",
          scale: 1.5,
        },
        "<",
      )

      .to(
        ".tree",
        {
          scale: 1,
          y: 0,
        },
        "<",
      );

    ScrollTrigger.create({
      animation: parallax,
      trigger: ".parallax",
      start: "top 0",
      end: "bottom 0%",
      scrub: 2,
      pin: true,
    });

    titleAnim.to(".titleanim", {
      scale: 2,
    });

    ScrollTrigger.create({
      animation: titleAnim,
      trigger: ".parallax",
      start: "top 0",
      end: "bottom 0%",
      scrub: 2,
      pin: true,
    });

    //gsap 2nd part of the page  - effect
    // tl.to(".loading", {
    //   //left: '100%',
    //   opacity: 0,
    //   duration: 4,
    // });

    ScrollTrigger.create({
      animation: tl,
      trigger: ".hero",
      //start: 'bottom 0%',
      // end: 'bottom 0%',
      scrub: true,
    });

    tl.from(".hero", {
      duration: 0.5,
      filter: "blur(5px)",
    });

    // tl.from(".logo", {
    //   opacity: 0,
    //   duration: 0.2,
    // });

    // tl.from(".socials", {
    //   opacity: 0,
    //   duration: 0.2,
    // });

    // tl.from(".heroG h1", {
    //   opacity: 0,
    //   duration: 0.2,
    // });

    // tl.from(".heroG p", {
    //   opacity: 0,
    //   duration: 0.2,
    // });

    tl.from(".heroG .btn", {
      opacity: 0,
      duration: 0.2,
    });

    tl.to(".loading", {
      display: "none",
    });

    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <div className="contAnim">
        <section className="parallax">
          <img src={background} alt="background" className="background" />
          <img src={tree} alt="tree" className="tree" />
          <img src={capsule} alt="capsule" className="capsule" />
        </section>

        <section className="heroText">
          <h2>
            <strong>
              <span>MOEBIUS </span>Collection{" "}
            </strong>
            in NFTs WEB3
          </h2>
        </section>
      </div>

      {/* <section className="loading"></section> */}
      <section className="hero">
        <div className="logo">MŒBIUS</div>
        <div className="socials">
          <ul>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-discord"></i>
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="heroG">
          <div>
            <h1 style={{ color: "white" }}>
              Connect your <span className="red">wallet</span>
            </h1>
            <p>
              Connect your favorite wallet to be ready for the mint and see your
              minted moebius collection NFT !
            </p>
            <a href="#">
              <button className="btn">
                <Account />
              </button>
            </a>
          </div>
        </div>
        <div className="heroD"></div>
      </section>

      <section className="discord">
        <section style={{ paddingBottom: "100px" }}>
          <div className="container">
            <h2 style={{ fontSize: "50px" }} data-aos="zoom-in-up">
              Whitelist Mint{" "}
              <span className="red">
                <NativeBalance />
              </span>
            </h2>
            <a href="#" data-aos="zoom-in-up">
              <button className="btn">Go !</button>
            </a>
          </div>
        </section>
        <section>
          <div className="container">
            <h2 style={{ fontSize: "50px" }} data-aos="zoom-in-up">
              NFT <span className="red">Minted</span>
              <br />
              <span className="red">0</span>/8888
            </h2>
          </div>
        </section>
      </section>

      <section className="hero2">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="heroD2"
        ></div>
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="heroG2"
        >
          <div>
            <h1>
              <span className="red">Mœbius</span>
            </h1>
            <p>
              Jean Giraud is a major player in comics world. Famous as well in
              Europe as in Asia or in the United States. Arzak is a striking
              work, beacon of comics. From numerous of collaborations in the
              world of cinema. Alien, Tron, Abyss, the 5th element, including
              Dune. From numerous of collaborations with the most famous comic
              book authors. "Avant-garde", he is a worlds creator.
            </p>
            <a href="#">
              <button className="btn">See on OpenSea</button>
            </a>
          </div>
        </div>
      </section>

      <div className="team">
        <div className="container">
          <h2 data-aos="zoom-in">
            About the <span className="red">project</span>
          </h2>
          <div className="team__flex">
            <div className="member" data-aos="zoom-in">
              <h4>
                MOEBIUS COLLECTION IS AN AMBITIOUS PROJECT.{" "}
                <span className="job">
                  {" "}
                  AN NFT TO SHARE THE MAJOR MOMENTS OF A CAREER WITH FANS VIA AN
                  NFT THAT ALLOWS YOU TO IMMORTALIZE AND APPROPRIATE FOR LIFE AN
                  EXCEPTIONAL MOMENT IN HISTORY.
                </span>
              </h4>
              <img src={img5} alt="Bastien" />
            </div>
            <div className="member" data-aos="zoom-in">
              <h4>
                THE BEGINNING OF A WHOLE ECOSYSTEM FOR OUR COMMUNITY.{" "}
                <span className="job">
                  {" "}
                  In the 80s, fans collected comics. Then there were the
                  collectors of original boards
                </span>
              </h4>
              <img src={img6} alt="Marc" />
            </div>
            <div className="member" data-aos="zoom-in">
              <h4>
                QUALITY-FOCUSED, HIGH-END AVATARS, READY FOR VIRTUAL EXPOSITION.{" "}
                <span className="job">
                  FAN ENGAGEMENT TODAY IS DONE BY SHARING UNIQUE MOMENTS THROUGH
                  NFT.
                </span>
              </h4>
              <img src={img7} alt="Matt" />
            </div>
          </div>
        </div>
      </div>

      <section className="hero3">
        <div
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="heroG3"
        >
          <div>
            <h1>
              <span className="red">Check your NFT minted</span>
            </h1>
            <p>
              Every NFT are on the Ethereum blockchain because we trust in it
              for security and the futur of this technology. As soon as you have
              minted an NFT from Moebius collection, you can find all your nft
              minted on Opensea but no only: You can see for art collection
              Here! Don't forget to connect your metamask.
            </p>
            <Link to="/nftBalance">
              <button className="btn">Go see your NFT</button>
            </Link>
          </div>
        </div>
        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className="heroD3"
        ></div>
      </section>

      <section className="discord">
        <div className="container">
          <h2 data-aos="zoom-in-up">
            Join <span className="red">our Discord</span>
          </h2>
          <a href="#" data-aos="zoom-in-up">
            <button className="btn">Go !</button>
          </a>
        </div>
      </section>

      <div className="roadmap">
        <div className="container">
          <h2 data-aos="zoom-in">
            The <span className="red">Roadmap</span>
          </h2>
          <div className="line"></div>
          <div className="bloc" data-aos="zoom-in">
            <div className="number">1</div>
            <h4>
              <b>Phase I: Launching the collection</b>
            </h4>
            <p>
              {" "}
              - LAUNCH DISCORD AND WEBSITE
              <br />
              - REWARD THE GROWING COMMUNITY WITH GIVEAWAYS INCLUDING ETH, NFTS
              AND SPECIAL ROLES WITHIN THE COMMUNITY WITH WHITELISTING BENEFITS.
              <br />- SELECTING ACCORDING TO THE TEAM, THE ART WORK OF JEAN
              GIREAUD THAT WILL BE MINTABLE FOR THE COMMUNITY
            </p>
          </div>
          <div className="bloc" data-aos="zoom-in">
            <div className="number off">2</div>
            <h4>
              <b>Phase II: WHITELIST SALE</b>
            </h4>
            <p>
              -LAUNCH THE COLLECTION OF 8888 MOEBIUS Art
              <br />
              -ACCORDING TO THE PEOPLE THAT GOT AN ACCESS TO THE WHITELIST,
              COMMUNITY COULD MINT 1000 FIRST ART WORK NFT
            </p>
          </div>
          <div className="bloc" data-aos="zoom-in">
            <div className="number off">3</div>
            <h4>
              <b>Phase III: PUBLIC SALE</b>
            </h4>
            <p>LAUNCH OF THE WHOLE COLLECTION FOR PUBLIC</p>
          </div>
          <div className="bloc" data-aos="zoom-in">
            <div className="number off">4</div>
            <h4>
              <b>PHASE IV: Opening of The MŒBIUS MarketPlace</b>
            </h4>
            <p>
              THE LAUCHINF OF THE MŒBIUS MARKETPLACE, A PLATFORM WHERE PEOPLE
              COULD EXCHANGE NFTS OF THE COLLECTION DIRECTLY LINKED TO OPENSEA
            </p>
          </div>
        </div>
      </div>
      <div className="team">
        <div className="container">
          <h2 data-aos="zoom-in">
            The <span className="red">Team</span>
          </h2>
          <div className="team__flex">
            <div className="member" data-aos="zoom-in">
              <h4>
                Bastien / <span className="job">Blockchain Developper</span>
              </h4>
              <img src={img5} alt="Bastien" />
            </div>
            <div className="member" data-aos="zoom-in">
              <h4>
                Ruben / Alexandre / <span className="job">Designer</span>
              </h4>
              <img src={img6} alt="Marc" />
            </div>
            <div className="member" data-aos="zoom-in">
              <h4>
                Adrien / <span className="job">Marketer</span>
              </h4>
              <img src={img7} alt="Matt" />
            </div>
          </div>
        </div>
      </div>

      <div>
        {" "}
        <BurnCtr />
      </div>

      <footer>
        <div className="container">
          <div className="footer__flex">
            <div className="footerG">MŒBIUS</div>
            <div className="footerD">
              <ul>
                <li>
                  <a href="www.dbrolinconsulting.com">Developper</a>
                </li>
                <li>
                  <a href="https://fr.wikipedia.org/wiki/Jean_Giraud">
                    Wikipedia of Jean Giraud
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
