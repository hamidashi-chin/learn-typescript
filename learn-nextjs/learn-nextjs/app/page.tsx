import { Top } from "@/component/top";

export type Film = {
  id: string;
  title: string;
  original_title: string;
  original_title_romanised: string;
  image: string;
  movie_banner: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  running_time: string;
  rt_score: string;
  people: string[];
  species: string[];
  locations: string[];
  vehicles: string[];
  url: string;
};

/**
 * 1. ジブリ映画のリストを表示する
 * 2. 映画タイトルをクリックしたら画面に表示される
 * 3. react-hook-formを使ってformを作る
 * 4. 送信する
 */


export default async function Home() {
  // const result = await fetch('http://localhost:3000/api/ghibli')
  const result = await fetch('http://localhost:3000/api/ghibli');
  const films = await result.json() as Film[];
  console.log(films);
  return <Top films={films} />;
}
