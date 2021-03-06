import classNames from "classnames";
import Properties from "config/properties";
import Image from "next/image";
import React from "react";

const defaultAvatarImage = Properties.DEFAULT_AVATART_IMG_SRC;

type size = "sm";

const Avatar = ({ src, size = "sm" }: { src?: string; size?: size }) => {
  const avatarSize = classNames({ "w-10 h-10": size == "sm" });
  return (
    <div
      className={classNames(
        "relative inline-block rounded-full overflow-hidden",
        avatarSize
      )}
    >
      <Image
        src={src || defaultAvatarImage}
        alt="avatar image"
        layout="fill"
        objectFit="cover"
        placeholder="blur"
        blurDataURL={defaultAvatarImage}
        quality={50}
      />
    </div>
  );
};

export default Avatar;
