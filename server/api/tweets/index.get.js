import { tweetTransformer } from "../../transformer/tweet";
import { getTweets } from "../../db/tweets";
//import { useQuery } from "vue-query";
export default defineEventHandler(async (event) => {
   const {query} = getQuery(event);
    let primsaQuery = {
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
    };

    if (!!query) {
      primsaQuery = {
        ...primsaQuery,
        where: {
          text: {
            contains: query,
          },
        },
      };
    }
  const tweets = await getTweets(primsaQuery);
  return {
    tweets: tweets.map(tweetTransformer),
  };
});
