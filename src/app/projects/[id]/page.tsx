import styles from "./../../page.module.css";
import Link from "next/link";
import blueRacket from "@/../public/img/blueRacket.png";
import redRacket from "@/../public/img/redRacket.png";
import blackRacket from "@/../public/img/blackRacket.png";
import Image from "next/image";
interface ProjectPageProps {
  params: { id: "1" | "2" | "3" };
}

const projectData = {
  1: {
    title: "프로젝트 1",
    description: "프로젝트 1에 대한 상세 설명",
    image: redRacket,
  },
  2: {
    title: "프로젝트 2",
    description: "프로젝트 2에 대한 상세 설명",
    image: blueRacket,
  },
  3: {
    title: "프로젝트 3",
    description: "프로젝트 3에 대한 상세 설명",
    image: blackRacket,
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
