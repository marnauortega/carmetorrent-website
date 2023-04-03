import Link from "next/link";
import { postArray } from "@/data/postArray";
import { oneOffPostArray } from "@/data/oneOffPostArray";

const Nav = () => {
  return (
    <>
      <ul>
        {postArray.map(({ title, slug }) => (
          <li key={slug}>
            <Link href={slug}>{title}</Link>
          </li>
        ))}
      </ul>
      <ul>
        {oneOffPostArray.map(({ title, slug }) => (
          <li key={slug}>
            <Link href={slug}>{title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Nav;
