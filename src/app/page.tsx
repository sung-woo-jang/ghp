// pages/index.js
"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import blueRacket from "@/../public/img/blueRacket.png";
import redRacket from "@/../public/img/redRacket.png";
import blackRacket from "@/../public/img/blackRacket.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>장성우의 포트폴리오</h1>
      <div className={styles.welcome}>
        안녕하세요. <br />
        늘 고민하는 개발자 장성우입니다. <br />
        제 프로젝트들을 소개합니다.
        <br />
        <br />
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <Image
            className={styles.cardImg}
            src={redRacket}
            alt="Project 1"
            width={300}
            height={300}
          />
          <p className={styles.cardTitle}>프로젝트 1</p>
          <Link href="/projects/1">
            <button className={styles.cardButton}>상세보기</button>
          </Link>
        </div>
        <div className={styles.card}>
          <Image
            className={styles.cardImg}
            src={blueRacket}
            alt="Project 2"
            width={300}
            height={300}
          />
          <p className={styles.cardTitle}>프로젝트 2</p>
          <Link href="/projects/2">
            <button className={styles.cardButton}>상세보기</button>
          </Link>
        </div>
        <div className={styles.card}>
          <Image
            className={styles.cardImg}
            src={blackRacket}
            alt="Project 3"
            width={300}
            height={300}
          />
          <p className={styles.cardTitle}>프로젝트 3</p>
          <Link href="/projects/3">
            <button className={styles.cardButton}>상세보기</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
