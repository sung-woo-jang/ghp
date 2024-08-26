import styles from "./../../page.module.css";
import Link from "next/link";
import daangn from "@/../public/img/daangn.png";
import instagram from "@/../public/img/instagram.png";
import baemin from "@/../public/img/baemin.png";
import Image from "next/image";
interface ProjectPageProps {
  params: { id: "1" | "2" | "3" };
}

const projectData = {
  1: {
    title: "인스타그램 클론코딩",
    description: "인스타그램에 대한 상세 설명",
    image: instagram,
  },
  2: {
    title: "당근마켓 클론코딩",
    description: "당근마켓에 대한 상세 설명",
    image: daangn,
  },
  3: {
    title: "배달의 민족 클론코딩",
    description: "배달의 민족에 대한 상세 설명",
    image: baemin,
  },
};

export default function Project({ params }: ProjectPageProps) {
  // 이 부분에서 프로젝트 ID에 따라 실제 프로젝트 데이터를 불러오는 로직을 구현할 수 있습니다.

  const project = projectData[params.id];

  if (!project) return <div>프로젝트를 찾을 수 없습니다.</div>;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{project.title}</h1>
      <Image
        className={styles.cardImg}
        src={projectData[params.id].image}
        alt="Project 1"
        width={300}
        height={300}
      />
      <p>{project.description}</p>
      <Link href="/">
        <button className={styles.cardButton} style={{ width: "100%" }}>
          홈으로 돌아가기
        </button>
      </Link>
    </div>
  );
}

// 정적 경로 생성을 위한 함수
export function generateStaticParams() {
  return Object.keys(projectData).map((id) => ({
    id: id.toString(),
  }));
}
