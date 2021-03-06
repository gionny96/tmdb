import Avatar from "components/miscellaneous/Avatar";
import ExpandableText from "components/miscellaneous/ExpandableText";
import VoteBadge from "components/miscellaneous/VoteBadge";
import { buildProfilemageUrlOrDefault } from "lib/api/multimedia-api";
import React from "react";
import { Review as ReviewType } from "../../../@types/models/review";

type OwnProps = {
  review: ReviewType;
};

type ReviewProps = OwnProps & React.ComponentPropsWithoutRef<"div">;

const Review = ({ review, className = "", ...rest }: ReviewProps) => {
  const { author, content, created_at: createdAt } = review;
  const { rating, avatar_path } = review.author_details;
  const reviewDate = new Date(createdAt);
  const reviewDateAsString = reviewDate.toLocaleDateString();

  const reviewInfo = (
    <>
      <h2>
        <span className="text-xl capitalize">{author}</span>{" "}
        <span className="text-lg">says</span>
      </h2>
      <p className="text-xs font-light lg:text-sm text-primary-500/80">
        {reviewDateAsString}
      </p>
    </>
  );

  const reviewHeader = (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <Avatar src={buildProfilemageUrlOrDefault(avatar_path, "w45", null)} />
        <div className="ml-4">{reviewInfo}</div>
      </div>
      {rating && <VoteBadge vote={rating} size="sm" />}
    </div>
  );

  const reviewContent = (
    <ExpandableText
      as={"p"}
      className="mt-6 ml-6 text-sm font-normal leading-relaxed text-gray-300 xl:text-base"
      text={content}
    />
  );

  return (
    <div className={`border-b border-b-gray-500/50 ${className}`} {...rest}>
      {reviewHeader}
      {reviewContent}
    </div>
  );
};

export default Review;
