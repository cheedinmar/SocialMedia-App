import { getTweetById } from "../../db/tweets";
import { tweetTransformer } from "../../transformer/tweet";
export default defineEventHandler(async (event) => {
  const { id } = event.context.params;
 const tweet = await getTweetById(id, {
   include: {
     author: true,
     mediaFiles: true,
     replyTo: {
       include: {
         author: true,
       },
     },
     replies: {
       include: {
         author: true,
         replyTo: {
           include: {
             author: true,
           },
         },
       },
     },
   },
 });
  return {
    hi: tweetTransformer(tweet),
  };
});
