import prisma from "../config/prisma.js";

// searching using primary key
export async function getStoredPost(id) {
  const storedPosts = await prisma.post.findUnique({
    where: {
      id: id,
    },
  });
  return storedPosts;
}

export async function getStoredPosts() {
  return await prisma.post.findMany();
}

export async function storePost(postData) {
  return await prisma.post.create({ data: postData });
}