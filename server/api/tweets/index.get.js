import { tweetTransformer } from "../../transformer/tweet";
import { getTweets } from "../../db/tweets";
export default defineEventHandler(async (event) => {
  const tweets = await getTweets({
    include: {
      author: true,
      mediaFiles: true,
      replies: {
        include: {
          author: true,
        },
      },
      replyTo: {
        include: {
          author: true,
        },
      },
    },
    orderBy: [
      {
        createdAt: "desc",
      },
    ],
  });
  return {
    tweets: tweets.map(tweetTransformer),
  };
});
