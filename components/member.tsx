import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  id: string;
  name: string;
  socialId: string;
  link: string;
}

const Member: FC<Props> = ({ id, name, socialId, link }) => {
  return (
    <div>
      <Image
        src={`/assest/team/${id}.svg`}
        alt={name}
        width={1366}
        height={1555}
      />
      <div className=" text-2xl xl:text-3xl">
        <div className="text-xl">
          <Link href={link}>
            <a target="_blank">{socialId}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Member;
