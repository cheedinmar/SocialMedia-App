-- CreateTable
CREATE TABLE "User" (
    "_id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "profileImage" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "RefreshToken" (
    "_id" TEXT NOT NULL PRIMARY KEY,
    "token" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "RefreshToken_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("_id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Tweet" (
    "_id" TEXT NOT NULL PRIMARY KEY,
    "text" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "authorId" TEXT NOT NULL,
    "replyToId" TEXT,
    CONSTRAINT "Tweet_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User" ("_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Tweet_replyToId_fkey" FOREIGN KEY ("replyToId") REFERENCES "Tweet" ("_id") ON DELETE NO ACTION ON UPDATE NO ACTION
);

-- CreateTable
CREATE TABLE "MediaFile" (
    "_id" TEXT NOT NULL PRIMARY KEY,
    "url" TEXT NOT NULL,
    "providerPublicId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" TEXT NOT NULL,
    "tweetId" TEXT,
    CONSTRAINT "MediaFile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("_id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "MediaFile_tweetId_fkey" FOREIGN KEY ("tweetId") REFERENCES "Tweet" ("_id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "RefreshToken_token_key" ON "RefreshToken"("token");
